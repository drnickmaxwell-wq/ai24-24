'use client';
import React from 'react';

/** Subtle floating dots/bubbles. */
export default function CoastalParticles() {
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/50 animate-float"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}
