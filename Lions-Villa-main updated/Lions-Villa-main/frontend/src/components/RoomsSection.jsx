import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Phone } from 'lucide-react';

const rooms = [
  {
    name: 'Standard Room',
    description: 'A clean, comfortable single or double room — perfect for solo travelers or couples looking for an affordable night\'s rest.',
    features: ['Private room', 'Clean linens', 'Quick check-in', 'Secure premises'],
    image: 'https://images.pexels.com/photos/4455836/pexels-photo-4455836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    testid: 'room-card-standard',
    badge: 'Most Popular',
  },
  {
    name: 'Deluxe Room',
    description: 'A step up in comfort — spacious layout with improved furnishings, ideal for a longer stay or travelers who want a little more.',
    features: ['Larger space', 'Upgraded furnishings', 'Quiet floor', 'Secure entry'],
    image: 'https://images.unsplash.com/photo-1760067537723-bb12d2674e15?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    testid: 'room-card-deluxe',
    badge: null,
  },
  {
    name: 'Suite-Style',
    description: 'Our premium option for those who want more space and an elevated experience. The best Lion\'s Villa has to offer.',
    features: ['Generous space', 'Premium setup', 'Maximum privacy', 'Top-floor quiet'],
    image: 'https://images.unsplash.com/photo-1760067537116-de1f76fe8f95?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    testid: 'room-card-suite',
    badge: 'Best Experience',
  },
];

export const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 sm:py-28" style={{ background: 'hsl(28 20% 5%)' }}>
      <div className="section-container">
        <SectionHeader
          eyebrow="Accommodations"
          title="Rooms for Every Stay"
          subtitle="Simple, honest pricing. Call us directly for rates and availability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.testid}
              data-testid={room.testid}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl overflow-hidden border flex flex-col"
              style={{ background: 'hsl(28 28% 6%)', borderColor: 'hsl(35 25% 18%)' }}
            >
              {/* Image */}
              <div className="relative" style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {room.badge && (
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: '#D4A017', color: '#0B0A08' }}
                  >
                    {room.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#FFF9EE' }}>
                  {room.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(40 10% 65%)' }}>
                  {room.description}
                </p>

                <ul className="flex flex-col gap-1.5 mb-4 flex-1">
                  {room.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
                      <span style={{ color: '#D4A017', fontSize: 10 }}>●</span> {f}
                    </li>
                  ))}
                </ul>

                <p className="text-xs mb-3" style={{ color: 'hsl(40 10% 55%)' }}>Call for best rates and availability.</p>

                <a
                  href="#contact"
                  data-testid="rooms-check-availability-button"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-colors duration-200 hover:border-[#D4A017] hover:bg-[rgba(212,160,23,0.08)]"
                  style={{ borderColor: 'hsl(35 25% 25%)', color: '#D4A017' }}
                >
                  <Phone size={15} />
                  Check Availability
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
