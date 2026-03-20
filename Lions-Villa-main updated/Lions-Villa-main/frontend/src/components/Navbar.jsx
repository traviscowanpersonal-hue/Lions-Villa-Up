import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const LionMark = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="18" cy="18" r="17" stroke="#D4A017" strokeWidth="1.5" fill="#2A1E16" />
    <text x="18" y="24" textAnchor="middle" fontSize="18" fill="#D4A017" fontFamily="serif">🦁</text>
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(11,10,8,0.90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(35 25% 18%)' : '1px solid transparent',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 no-underline">
            <div className="w-9 h-9 rounded-full flex items-center justify-center border border-[#D4A017] bg-[#2A1E16] text-xl">
              🦁
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#D4A017' }}>
                Lion's Villa
              </div>
              <div className="text-xs" style={{ color: 'hsl(40 10% 72%)' }}>Guest House · May Pen</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-[#D4A017] transition-colors duration-200"
                style={{ color: 'hsl(40 10% 80%)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18769867353"
              data-testid="header-phone-link"
              className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-[#D4A017] transition-colors duration-200"
              style={{ color: '#D4A017' }}
            >
              <Phone size={15} />
              (876) 986-7353
            </a>
            <a
              href="#contact"
              data-testid="header-book-now-button"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 hover:brightness-110"
              style={{ background: '#D4A017', color: '#0B0A08' }}
            >
              Book Now
            </a>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: '#D4A017' }}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
            style={{ background: 'rgba(11,10,8,0.98)', borderBottom: '1px solid hsl(35 25% 18%)' }}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-sm font-medium rounded-lg hover:bg-[hsl(28_28%_10%)] transition-colors duration-200"
                  style={{ color: 'hsl(40 60% 96%)' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+18769867353"
                className="mt-2 flex items-center gap-2 py-3 px-2 text-sm font-semibold"
                style={{ color: '#D4A017' }}
              >
                <Phone size={15} /> (876) 986-7353
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
