import requests
import sys
from datetime import datetime
import json

class LionsVillaAPITester:
    def __init__(self, base_url="https://local-service-hub-28.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                'test_name': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_data': None,
                'error': None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result['response_data'] = response.json()
                    print(f"   Response: {json.dumps(result['response_data'], indent=2)}")
                except:
                    result['response_data'] = response.text
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result['error'] = error_data
                    print(f"   Error: {json.dumps(error_data, indent=2)}")
                except:
                    result['error'] = response.text
                    print(f"   Error: {response.text}")

            self.test_results.append(result)
            return success, result.get('response_data', {})

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                'test_name': name,
                'endpoint': endpoint,
                'method': method,
                'expected_status': expected_status,
                'actual_status': None,
                'success': False,
                'response_data': None,
                'error': str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_health_endpoint(self):
        """Test the health endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "api/health",
            200
        )

    def test_create_inquiry_valid(self):
        """Test creating a valid inquiry"""
        test_data = {
            "name": "Test User",
            "email": "test@test.com",
            "phone": "(876) 555-1234",
            "check_in": "2024-12-01",
            "check_out": "2024-12-03",
            "message": "Test inquiry for Lion's Villa",
            "honeypot": ""
        }
        
        return self.run_test(
            "Create Valid Inquiry",
            "POST",
            "api/inquiries",
            200,
            data=test_data
        )

    def test_create_inquiry_missing_required(self):
        """Test creating inquiry with missing required fields"""
        test_data = {
            "email": "test@test.com",
            # Missing name and phone
            "message": "Test inquiry"
        }
        
        return self.run_test(
            "Create Inquiry - Missing Required Fields",
            "POST",
            "api/inquiries",
            422,  # Validation error
            data=test_data
        )

    def test_create_inquiry_invalid_email(self):
        """Test creating inquiry with invalid email"""
        test_data = {
            "name": "Test User",
            "email": "invalid-email",
            "phone": "(876) 555-1234",
            "message": "Test inquiry"
        }
        
        return self.run_test(
            "Create Inquiry - Invalid Email",
            "POST",
            "api/inquiries",
            422,  # Validation error
            data=test_data
        )

    def test_honeypot_spam_protection(self):
        """Test honeypot spam protection"""
        test_data = {
            "name": "Spam Bot",
            "email": "spam@spam.com",
            "phone": "(876) 555-1234",
            "message": "Spam message",
            "honeypot": "spam_value"  # This should trigger spam protection
        }
        
        return self.run_test(
            "Honeypot Spam Protection",
            "POST",
            "api/inquiries",
            200,  # Should return success but not actually save
            data=test_data
        )

def main():
    print("🦁 Lion's Villa API Testing Suite")
    print("=" * 50)
    
    # Setup
    tester = LionsVillaAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Test health endpoint
    tester.test_health_endpoint()
    
    # Test inquiry creation - valid case
    tester.test_create_inquiry_valid()
    
    # Test inquiry creation - validation errors
    tester.test_create_inquiry_missing_required()
    tester.test_create_inquiry_invalid_email()
    
    # Test spam protection
    tester.test_honeypot_spam_protection()
    
    # Print final results
    print(f"\n📊 Test Results Summary")
    print("=" * 30)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {tester.tests_run - tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Show failed tests
    failed_tests = [t for t in tester.test_results if not t['success']]
    if failed_tests:
        print(f"\n❌ Failed Tests:")
        for test in failed_tests:
            print(f"   - {test['test_name']}: {test.get('error', 'Status code mismatch')}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())