'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/** Inline shimmer title (no external import required) */
function ShimmerTitle({
  children,
  className = '',
}: { children: React.ReactNode; className?: string }) {
  return (
    <h1
      className={className}
      style={{
        background: 'linear-gradient(90deg, var(--magenta), var(--turquoise))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 10px rgba(212,175,55,.15)',
      }}
    >
      {children}
    </h1>
  );
}

/** Fallback sparkle button (uses your palette); swap for your SparkleButton later */
function SparkleButton({
  children,
  onClick,
  className = '',
}: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-full text-white font-medium shadow-lg transition
      bg-gradient-to-r from-[var(--magenta)] to-[var(--turquoise)]
      hover:shadow-[0_0_24px_rgba(64,196,180,.45)]
      ${className}`}
    >
      {children}
    </button>
  );
}

/** Prefer your real components; fall back if missing so effects stay visible */
let WaveBackground: React.ComponentType<{ amplitude?: number; speed?: number }>;
try {
  // prefer your FX component if it exists
  // @ts-ignore
  WaveBackground = require('@/components/fx/WaveBackground').default;
} catch {
  try {
    // or WebGL waves
    // @ts-ignore
    WaveBackground = require('@/components/effects/WebGLWaves').default;
  } catch {
    WaveBackground = ({ amplitude = 0.5 }: { amplitude?: number }) => (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,.20), transparent 60%), radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,.18), transparent 60%)',
          opacity: 0.35 + amplitude / 2,
          filter: 'blur(20px)',
        }}
      />
    );
  }
}

let CoastalParticles: React.ComponentType<{ density?: 'low' | 'medium' | 'high' }>;
try {
  // @ts-ignore
  CoastalParticles = require('@/components/effects/CoastalParticles').default;
} catch {
  CoastalParticles = ({ density = 'medium' }) => {
    const count = density === 'high' ? 70 : density === 'low' ? 25 : 45;
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: count }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const dur = 8 + Math.random() * 12;
          const delay = Math.random() * 6;
          return (
            <span
              key={i}
              style={{
                position: 'absolute',
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                borderRadius: '50%',
                background: 'rgba(255,255,255,.45)',
                boxShadow: '0 0 12px rgba(255,255,255,.35)',
                animation: `floatParticle ${dur}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
        <style jsx>{`
          @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: .7; }
            50% { transform: translateY(-18px) translateX(6px); opacity: .9; }
            100% { transform: translateY(0) translateX(0); opacity: .7; }
          }
        `}</style>
      </div>
    );
  };
}

export default function HeroLuxe() {
  return (
    <section className="relative overflow-hidden">
      {/* Waves + particles overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <WaveBackground amplitude={0.6} speed={0.25} />
        <CoastalParticles density="medium" />
      </div>

      {/* Hero video */}
      <div className="relative z-10">
        <video
          className="w-full h-[70vh] object-cover"
          poster="/videos/hero/hero-poster.jpg"
          autoPlay muted playsInline loop
        >
          <source src="/videos/hero/hero.webm" type="video/webm" />
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="max-w-3xl">
              <ShimmerTitle className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Luxury dental care by the sea
              </ShimmerTitle>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
                Advanced 3D dentistry, same-day veneers & implants, and a calm, patient-first experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <SparkleButton onClick={() => { window.location.href = '/contact'; }}>
                  Book a 3D assessment
                </SparkleButton>
                <SparkleButton onClick={() => { window.location.href = '/patient-info/stories'; }}>
                  Watch patient stories
                </SparkleButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth fade to next section */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white dark:to-[var(--ink-2)]" />
    </section>
  );
}
