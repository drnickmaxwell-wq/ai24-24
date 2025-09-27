'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShimmerTitle from '@/components/effects/ShimmerText';
import CoastalParticles from '@/components/effects/CoastalParticles';
import WaveBackground from '@/components/fx/WaveBackground';
import SparkleButton from '@/components/effects/SparkleButton';

export default function HeroLuxe() {
  return (
    <section className="relative overflow-hidden">
      {/* Waves + particles */}
      <div className="absolute inset-0 pointer-events-none">
        <WaveBackground amplitude={0.6} speed={0.25} />
        <CoastalParticles density="medium" />
      </div>

      {/* Video */}
      <div className="relative z-10">
        <video
          className="w-full h-[70vh] object-cover"
          poster="/videos/hero/hero-poster.jpg"
          autoPlay muted playsInline loop
        >
          <source src="/videos/hero/hero.webm" type="video/webm" />
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay copy + CTAs */}
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

      {/* Fade to next section */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white dark:to-[var(--ink-2)]" />
    </section>
  );
}
