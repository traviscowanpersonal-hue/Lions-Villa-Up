import React from 'react';

export const WaveDivider = ({ flip = false }) => (
  <div style={{ overflow: 'hidden', lineHeight: 0, transform: flip ? 'rotate(180deg)' : 'none' }}>
    <svg
      viewBox="0 0 1440 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', width: '100%', height: 60 }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
        fill="hsl(28 28% 6%)"
      />
      <path
        d="M0,30 C360,60 1080,0 1440,30"
        fill="none"
        stroke="rgba(212,160,23,0.25)"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);
