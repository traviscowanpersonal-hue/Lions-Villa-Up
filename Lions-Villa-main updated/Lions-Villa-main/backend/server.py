from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
from typing import Optional
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Lion's Villa API", version="1.0.0")

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'lions_villa')
CORS_ORIGINS = os.environ.get('CORS_ORIGINS', '*')

app.add_middleware(
    CORSMiddleware,
    allow_origins=[CORS_ORIGINS] if CORS_ORIGINS != '*' else ['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

client = None
db = None

@app.on_event('startup')
async def startup_db():
    global client, db
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    await db.inquiries.create_index('created_at')
    logger.info('MongoDB connected successfully')

@app.on_event('shutdown')
async def shutdown_db():
    if client:
        client.close()

class InquiryRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    message: Optional[str] = None
    honeypot: Optional[str] = None  # Anti-spam

    @field_validator('name')
    @classmethod
    def name_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Name is required')
        return v.strip()

    @field_validator('phone')
    @classmethod
    def phone_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Phone is required')
        return v.strip()

@app.get('/api/health')
async def health():
    return {'status': 'ok', 'service': "Lion's Villa API", 'timestamp': datetime.utcnow().isoformat()}

@app.post('/api/inquiries')
async def create_inquiry(inquiry: InquiryRequest):
    # Honeypot check - if filled, likely spam
    if inquiry.honeypot:
        return {'success': True, 'message': 'Inquiry received'}

    doc = {
        'name': inquiry.name,
        'email': inquiry.email,
        'phone': inquiry.phone,
        'check_in': inquiry.check_in,
        'check_out': inquiry.check_out,
        'message': inquiry.message,
        'status': 'new',
        'created_at': datetime.utcnow(),
    }

    result = await db.inquiries.insert_one(doc)
    logger.info(f'New inquiry from {inquiry.name} ({inquiry.email})')

    return {
        'success': True,
        'message': "Thanks for your inquiry! We'll get back to you shortly.",
        'id': str(result.inserted_id)
    }

@app.get('/api/inquiries')
async def get_inquiries(limit: int = 50, token: str = ''):
    admin_token = os.environ.get('ADMIN_TOKEN', 'lionsvillaadmin2024')
    if token != admin_token:
        raise HTTPException(status_code=401, detail='Unauthorized')

    inquiries = []
    async for doc in db.inquiries.find().sort('created_at', -1).limit(limit):
        doc['_id'] = str(doc['_id'])
        doc['created_at'] = doc['created_at'].isoformat() if isinstance(doc['created_at'], datetime) else str(doc['created_at'])
        inquiries.append(doc)

    return {'inquiries': inquiries, 'count': len(inquiries)}
