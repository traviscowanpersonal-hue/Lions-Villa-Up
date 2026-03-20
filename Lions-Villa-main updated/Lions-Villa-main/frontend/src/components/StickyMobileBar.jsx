import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

export const StickyMobileBar = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
      style={{
        background: 'rgba(11,10,8,0.92)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid hsl(35 25% 18%)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-stretch">
        <a
          href="tel:+18769867353"
          data-testid="sticky-call-button"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm"
          style={{ background: 'var(--lv-gold)', color: '#0B0A08' }}
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="#contact"
          data-testid="sticky-book-button"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm border-l"
          style={{ borderColor: 'hsl(35 25% 18%)', color: 'var(--lv-gold)' }}
        >
          <CalendarCheck size={18} />
          Book Now
        </a>
      </div>
    </div>
  );
};
