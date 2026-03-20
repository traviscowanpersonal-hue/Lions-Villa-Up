import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: 'hsl(30 25% 4%)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <SectionHeader
              eyebrow="About Lion's Villa"
              title="Your Pride of Place in May Pen"
              subtitle=""
            />
            <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: 'hsl(40 10% 72%)' }}>
              <p>
                Nestled in the heart of May Pen, Clarendon, <strong style={{ color: '#FFF9EE' }}>Lion's Villa</strong> has been welcoming guests with clean rooms, honest prices, and warm Jamaican hospitality.
              </p>
              <p>
                Whether you're passing through, visiting family, or in town for business — we make your stay as easy and comfortable as possible. No complicated check-in procedures, no hidden fees.
              </p>
              <p>
                Our gated, grill-entry property offers a level of security and peace of mind that guests consistently praise. Once you check in, you can truly relax.
              </p>
            </div>

            <a
              href="tel:+18769867353"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors duration-200 hover:brightness-110"
              style={{ background: '#D4A017', color: '#0B0A08' }}
            >
              <Phone size={16} />
              Call Us Directly
            </a>
          </motion.div>

          {/* Info card + image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-5"
          >
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: 'hsl(35 25% 18%)', aspectRatio: '16/9' }}
            >
              <img
                src="https://images.pexels.com/photos/6626114/pexels-photo-6626114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Lion's Villa exterior view"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Details card */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: 'hsl(28 28% 6%)', borderColor: 'hsl(35 25% 18%)' }}
            >
              <h4 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#D4A017' }}>
                Find Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
                  <MapPin size={15} style={{ color: '#D4A017', marginTop: 2, flexShrink: 0 }} />
                  <span>17 Chapleton Road Clarendon, May Pen, Jamaica</span>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
                  <Phone size={15} style={{ color: '#D4A017', flexShrink: 0 }} />
                  <a href="tel:+18769867353" className="hover:text-[#D4A017] transition-colors duration-200" style={{ color: 'hsl(40 10% 72%)' }}>
                    (876) 986-7353
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
                  <Clock size={15} style={{ color: '#D4A017', flexShrink: 0 }} />
                  <span>Walk-in check-in available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
