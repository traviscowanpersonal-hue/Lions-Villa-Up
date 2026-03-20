import React from 'react';

export const SectionHeader = ({ eyebrow, title, subtitle, center = false }) => {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--lv-gold)', letterSpacing: '0.15em' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl font-semibold tracking-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed" style={{ color: 'hsl(40 10% 72%)' }}>
          {subtitle}
        </p>
      )}
      <div className="gold-divider mt-5" />
    </div>
  );
};
