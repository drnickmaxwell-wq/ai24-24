'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShimmerTitle from '@/components/effects/ShimmerText';
import SparkleButton from '@/components/effects/SparkleButton';

/**
 * Dynamic loaders that prefer your real components.
 * If a module is missing in your repo, a slim fallback with the same API is used,
 * so all effects remain visible without breaking the build.
 */
let WaveBackground: React.ComponentType<{ amplitude?: number; speed?: number }>;
let CoastalParticles: React.ComponentType<{ density?: 'low' | 'medium' | 'high' }>;

try {
  // If you have a dedicated wave comp (preferred)
  // e.g. components/fx/WaveBackground.tsx
  // @ts-ignore
  WaveBackground = require('@/components/fx/WaveBackground').default;
} catch {
  try {
    // Or the WebGL wave version
    // @ts-ignore
    WaveBackground = require('@/components/effects/WebGLWaves').default;
  } catch {
    // Fallback wave renderer (CSS-only)
    WaveBackground = ({ amplitude = 0.5 }: { amplitude?: number }) => (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,.20), transparent 60%), radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,.18), transparent 60%)',
          opacity: Math.min(0.75, 0.35 + amplitude / 2),
          filter: 'blur(20px)',
        }}
      />
    );
  }
}

try {
  // If you have a proper particles component (preferred)
  // e.g. components/effects/CoastalParticles.tsx
  // @ts-ignore
  CoastalParticles = require('@/components/effects/CoastalParticles').default;
} catch {
  // Fallback particles using pure CSS keyframes
  CoastalParticles = ({ density = 'medium' }: { density?: 'low' | 'medium' | 'high' }) => {
    const count = density === 'high' ? 70 : density === 'low' ? 25 : 45;
    const dots = Array.from({ length: count });
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {dots.map((_, i) => {
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
            0% { transform: translateY(0px) translateX(0px); opacity: .7; }
            50% { transform: translateY(-18px) translateX(6px); opacity: .9; }
            100% { transform: translateY(0px) translateX(0px); opacity: .7; }
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
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/hero/hero.webm" type="video/webm" />
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="max-w-3xl">
              <ShimmerTitle
                as="h1"
                className="text-4xl md:text-6xl font-extrabold tracking-tight"
                gradient="to-r"
                from="var(--magenta)"
                to="var(--turquoise)"
                shimmer
              >
                Luxury dental care by the sea
              </ShimmerTitle>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
                Advanced 3D dentistry, same-day veneers & implants, and a calm, patient-first experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <SparkleButton variant="turquoise-gold" size="lg" onClick={() => { window.location.href = '/contact'; }}>
                  Book a 3D assessment
                </SparkleButton>
                <SparkleButton variant="magenta-gold" size="lg" onClick={() => { window.location.href = '/patient-info/stories'; }}>
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
