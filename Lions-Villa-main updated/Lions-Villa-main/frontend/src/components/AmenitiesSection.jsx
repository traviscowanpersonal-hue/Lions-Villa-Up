import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, KeyRound, Volume2, ShieldCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const amenities = [
  {
    icon: Sparkles,
    title: 'Clean & Affordable Rooms',
    description: 'Every room is maintained to high cleanliness standards, and our rates are designed to give you the best value in May Pen.',
    testid: 'amenity-card-clean',
  },
  {
    icon: KeyRound,
    title: 'Quick & Easy Check-In',
    description: 'No long waits. Walk up, get your room, and settle in immediately. Approachable staff ready to assist you.',
    testid: 'amenity-card-checkin',
  },
  {
    icon: Volume2,
    title: 'Quiet & Comfortable',
    description: 'Enjoy a peaceful, comfortable stay away from the noise. Guests consistently praise the calm atmosphere.',
    testid: 'amenity-card-quiet',
  },
  {
    icon: ShieldCheck,
    title: 'Private & Secure',
    description: 'Gated, grill-entry property ensures your safety and privacy throughout your stay.',
    testid: 'amenity-card-secure',
  },
];

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 sm:py-28" style={{ background: 'hsl(30 25% 4%)' }}>
      <div className="section-container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Everything You Need, Nothing You Don't"
          subtitle="Lion's Villa offers a straightforward, honest guest experience — clean, quiet, and convenient."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((item, i) => (
            <motion.div
              key={item.testid}
              data-testid={item.testid}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 border transition-colors duration-200 group"
              style={{
                background: 'hsl(28 28% 6%)',
                borderColor: 'hsl(35 25% 18%)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#D4A017'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'hsl(35 25% 18%)'}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.25)' }}
              >
                <item.icon size={22} style={{ color: '#D4A017' }} />
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#FFF9EE' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(40 10% 65%)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
