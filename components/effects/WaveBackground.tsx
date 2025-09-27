'use client';
import React from 'react';

export default function WaveBackground({ opacity = 0.6 }: { opacity?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-0 right-0 h-[320px] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 320" className="w-full h-full" style={{ opacity }}>
          <defs>
            <linearGradient id="smh-wave" x1="0" x2="1">
              <stop offset="0" stopColor="#C2185B" />
              <stop offset="1" stopColor="#40C4B4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#smh-wave)"
            d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,112C672,117,768,139,864,160C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
}
