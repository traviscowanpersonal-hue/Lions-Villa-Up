import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, Star, MapPin, Shield } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1700807310372-8c22762add79?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-center grain-overlay"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,10,8,0.42) 0%, rgba(11,10,8,0.88) 100%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(1200px 600px at 20% 10%, rgba(212,160,23,0.18), transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Paw watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: 'none',
          fontSize: '18rem',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        🐾
      </div>

      {/* Content */}
      <div className="section-container relative" style={{ zIndex: 2 }}>
        <div className="max-w-3xl pt-28 pb-16">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#D4A017', letterSpacing: '0.18em' }}
          >
            May Pen · Clarendon · Jamaica
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FFF9EE' }}
          >
            Lion's Villa
            <span className="block" style={{ color: '#D4A017' }}>Guest House</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: 'hsl(40 20% 78%)' }}
          >
            Clean, affordable rooms in May Pen — quick and easy check-in, quiet surroundings, and a private, secure stay you can trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="tel:+18769867353"
              data-testid="hero-call-now-button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm pulse-gold"
              style={{ background: '#D4A017', color: '#0B0A08', boxShadow: '0 4px 20px rgba(212,160,23,0.35)' }}
            >
              <Phone size={17} />
              Call Now — (876) 986-7353
            </a>
            <a
              href="#contact"
              data-testid="hero-book-now-button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-colors duration-200 hover:border-[#D4A017] hover:bg-[rgba(212,160,23,0.08)]"
              style={{ borderColor: 'hsl(35 25% 30%)', color: 'hsl(40 60% 96%)' }}
            >
              <CalendarCheck size={17} />
              Book Your Stay
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
              <Star size={15} fill="#D4A017" style={{ color: '#D4A017' }} />
              <span>3.8 ★ · 36 Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
              <MapPin size={14} style={{ color: '#D4A017' }} />
              <span>17 Chapleton Road, May Pen</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(40 10% 72%)' }}>
              <Shield size={14} style={{ color: '#D4A017' }} />
              <span>Private &amp; Secure — Grill Entry</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="hsl(30 25% 4%)" />
        </svg>
      </div>
    </section>
  );
};
