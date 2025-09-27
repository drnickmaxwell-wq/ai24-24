'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import WaveBackground from '@/components/effects/WaveBackground';
import CoastalParticles from '@/components/effects/CoastalParticles';
import ShimmerText from '@/components/effects/ShimmerText';
import { LuxuryButton } from '@/components/ui/luxury-button';

export default function HeroLuxe({ variant = 'light' as 'light' | 'ink' }) {
  const isInk = variant === 'ink';

  return (
    <section className={cn('relative overflow-hidden py-20 md:py-28', isInk ? 'bg-[#0f1115] text-white' : 'bg-white')}>
      <div className="container-luxury relative">
        <WaveBackground opacity={isInk ? 0.25 : 0.6} />
        {!isInk && <CoastalParticles />}

        <p className={cn('mb-3 text-sm tracking-wide', isInk ? 'text-brand-turquoise/80' : 'text-brand-turquoise')}>
          AI‑Powered 3D Dentistry
        </p>

        <h1 className={cn('text-5xl md:text-7xl font-extrabold leading-[1.08] mb-6', isInk ? 'text-white' : 'gradient-text')}>
          Luxury dental care by <br className="hidden md:block" />
          <ShimmerText>the sea</ShimmerText>
        </h1>

        <p className={cn('max-w-2xl text-lg md:text-xl mb-8', isInk ? 'text-white/75' : 'text-brand-muted')}>
          Advanced 3D dentistry, same‑day veneers & implants, and a calm, patient‑first experience.
        </p>

        <div className="flex flex-wrap gap-4">
          <LuxuryButton size="lg" shimmer glow>Book a 3D assessment</LuxuryButton>
          <LuxuryButton size="lg" variant="outline">Watch patient stories</LuxuryButton>
        </div>
      </div>
    </section>
  );
}
