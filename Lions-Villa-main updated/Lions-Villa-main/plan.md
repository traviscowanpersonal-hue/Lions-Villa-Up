# plan.md — Lion’s Villa Website (React + FastAPI + MongoDB)

## 1. Objectives
- Launch a mobile-first, high-converting marketing site for **Lion’s Villa** (Guest House) with regal **lion-themed** branding.
- Drive direct bookings/inquiries via **click-to-call** and a **booking/inquiry form**.
- Build SEO-friendly page structure + local trust signals (rating, reviews, amenities, map).
- Persist inquiries in MongoDB and provide an admin-friendly way to view/receive them (MVP: email + DB, optional simple admin page later).

## 2. Implementation Steps

### Phase 1 — Core Flow POC (Contact/Booking Inquiry → API → MongoDB)
**Core workflow:** user submits inquiry; backend validates/saves; frontend shows success; click-to-call works on mobile.

User stories (POC)
1. As a guest, I want to tap the phone number to call Lion’s Villa immediately.
2. As a guest, I want to submit an inquiry with dates so I can request availability.
3. As a guest, I want clear success/error feedback so I know my message was sent.
4. As the business, I want inquiries stored reliably so none are lost.
5. As the business, I want spam-minimization (basic honeypot/rate limit) so I only get real leads.

Steps
- Define inquiry schema (name, email, phone, check-in, check-out, message, createdAt, sourcePage).
- FastAPI POC endpoints:
  - `POST /api/inquiries` (validation, sanitize, store in MongoDB)
  - `GET /api/health` (basic)
- MongoDB connection + indexes (createdAt, optional email/phone).
- Minimal React POC page:
  - Prominent header phone CTA `tel:+18769867353`
  - Simple inquiry form wired to API
  - Success and error states
- Add basic anti-spam: honeypot field + simple IP rate limit (lightweight).
- Manual test matrix: mobile tap-to-call, submit valid/invalid, DB record created, API failure handling.
- Do not proceed until POC is stable.

### Phase 2 — V1 App Development (Marketing Site + SEO Structure)
User stories (V1)
1. As a visitor, I want a bold hero section so I instantly understand the guest house and can book/call.
2. As a visitor, I want to see key amenities so I can decide quickly.
3. As a visitor, I want to browse room options with price placeholders so I can gauge affordability.
4. As a visitor, I want to read real reviews/ratings so I can trust the property.
5. As a visitor, I want to view a gallery so I can preview the space.
6. As a visitor, I want a map + address so I can find the location easily.

Steps
- Frontend (React) build-out (single-page sections or routed pages; MVP can be single-page with anchors):
  - Hero (headline, subheadline, Book Now + Call Now CTAs)
  - Why Choose Us (4 amenity cards with icons)
  - Rooms/Services (cards, pricing placeholder, “Request this room” CTA scrolls to form)
  - Reviews (3–6 testimonials; include rating badge “3.8 ★ (36 reviews)” + disclaimer “from Google reviews”)
  - Gallery (responsive grid, lightbox optional)
  - About (short story + values)
  - Booking/Contact form (use proven POC flow)
  - Footer (address, phone, hours placeholder, embedded map)
- Design system:
  - Palette: Gold **#D4A017**, amber accents, deep browns, dark backgrounds.
  - Typography: strong headings; subtle lion texture/motif (avoid heavy assets).
  - Components: CTA buttons, cards, section headers, review tiles.
- SEO essentials:
  - Title/meta per page/section, OpenGraph, canonical.
  - Local keywords: “Guest house in May Pen, Clarendon”, address in footer.
  - Structured data (JSON-LD): `LodgingBusiness` with name, address, phone, aggregateRating.
  - Performance: responsive images, lazy loading, minimal JS.
- Backend hardening for V1:
  - CORS config for frontend domain
  - Server-side validation + logging
  - Basic admin retrieval endpoint (optional MVP): `GET /api/inquiries?limit=...` protected by simple token in env (no full auth yet).
- Conclude Phase 2 with 1 round end-to-end testing (mobile + desktop): navigation, CTA flows, form submit, DB persistence.

### Phase 3 — Enhancements (Conversion + Content + Ops)
User stories (Enhancements)
1. As a visitor, I want WhatsApp/quick message option so I can contact the property faster.
2. As a visitor, I want FAQ answers so I can resolve common questions quickly.
3. As the business, I want email notifications for each inquiry so I can respond immediately.
4. As the business, I want a simple inquiry dashboard so I can manage leads.
5. As a visitor, I want clearer room details/policies so I can book with confidence.

Steps
- Add email notifications (SMTP provider) on inquiry creation (POC script first if needed).
- Add FAQ section (check-in/out, payment options, policies, privacy/security).
- Add conversion boosts: sticky mobile bottom bar (Call / Book), exit-intent CTA (desktop only, lightweight).
- Add simple admin page (MVP): list inquiries, mark as contacted (optional field).
- Content pass: tighten copy, add more photos, add “Getting here” directions snippet.
- Conclude Phase 3 with 1 round end-to-end testing including admin + email.

### Phase 4 — Future (Optional)
User stories (Future)
1. As a guest, I want real-time availability so I can confirm dates instantly.
2. As the business, I want room inventory + pricing management.
3. As a guest, I want online payment to secure my booking.
4. As the business, I want analytics dashboards for calls/forms.
5. As a guest, I want multilingual support (English + Jamaican Patois tone option).

Steps
- Integrate booking engine / calendar sync, payments, analytics, and optional auth.

## 3. Next Actions
- Confirm V1 decisions:
  - Single-page (sections) vs multi-page routes.
  - Room types to display (names + any real pricing) or keep placeholders.
  - Any official photos/logo available (or we generate a simple lion mark).
- Set up repo structure (frontend React, backend FastAPI) + env vars.
- Execute Phase 1 POC and verify inquiry persistence + click-to-call.

## 4. Success Criteria
- Mobile Lighthouse (rough targets): Performance ≥ 85, SEO ≥ 90.
- Click-to-call visible above the fold and works on iOS/Android.
- Inquiry form: ≥ 95% successful submissions in testing; clear error states.
- MongoDB stores every inquiry with timestamps; no PII leaks in logs.
- SEO: correct metadata + JSON-LD; address/phone consistent sitewide.
- Trust: rating + reviews + amenities clearly visible without scrolling excessively.
