'use client';
import React from 'react';

export default function ShimmerText({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <span className={['lux-gradient-text lux-gold-hover', className].filter(Boolean).join(' ')}>
      {children}
      <style jsx global>{`
        .lux-gradient-text {
          background-image: linear-gradient(90deg, #C2185B, #40C4B4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }
        .lux-gold-hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(90deg, #b8892d, #ffd873 35%, #b8892d 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0;
          pointer-events: none;
        }
        .lux-gold-hover:hover::after {
          animation: luxGoldFlash 1100ms ease-in-out;
        }
        @keyframes luxGoldFlash {
          0% { opacity: 0; }
          10% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
