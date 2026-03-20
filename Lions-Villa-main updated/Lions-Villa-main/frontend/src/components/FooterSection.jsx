import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer style={{ background: 'hsl(28 25% 3%)', borderTop: '1px solid hsl(35 25% 12%)' }}>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#D4A017] bg-[#2A1E16] text-xl">
                🦁
              </div>
              <div>
                <div className="font-bold text-base" style={{ fontFamily: "'Playfair Display', serif", color: '#D4A017' }}>Lion's Villa</div>
                <div className="text-xs" style={{ color: 'hsl(40 10% 55%)' }}>Guest House · May Pen, Jamaica</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 10% 60%)' }}>
              Your pride of place in May Pen. Clean rooms, honest prices, and warm Jamaican hospitality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#D4A017', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm" style={{ color: 'hsl(40 10% 65%)' }}>
                <MapPin size={15} style={{ color: '#D4A017', marginTop: 2, flexShrink: 0 }} />
                <span>17 Chapleton Road Clarendon,<br />May Pen, Jamaica</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(40 10% 65%)' }}>
                <Phone size={15} style={{ color: '#D4A017', flexShrink: 0 }} />
                <a
                  href="tel:+18769867353"
                  className="hover:text-[#D4A017] transition-colors duration-200"
                  data-testid="footer-phone-link"
                >
                  (876) 986-7353
                </a>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="tel:+18769867353"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
                style={{ background: '#D4A017', color: '#0B0A08' }}
              >
                <Phone size={13} /> Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border"
                style={{ borderColor: 'hsl(35 25% 25%)', color: '#D4A017' }}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: '#D4A017', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Find Us</h4>
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'hsl(35 25% 18%)', aspectRatio: '4/3' }}
              data-testid="footer-map-embed"
            >
              <iframe
                title="Lion's Villa location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8906!2d-77.2494!3d17.9659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edca6b4f87b2e3f%3A0x0!2s17+Chapleton+Road%2C+May+Pen%2C+Jamaica!5e0!3m2!1sen!2sjm!4v1625000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="gold-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'hsl(40 10% 45%)' }}>
            &copy; {new Date().getFullYear()} Lion's Villa Guest House. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'hsl(40 10% 40%)' }}>
            May Pen · Clarendon · Jamaica
          </p>
        </div>
      </div>
    </footer>
  );
};
