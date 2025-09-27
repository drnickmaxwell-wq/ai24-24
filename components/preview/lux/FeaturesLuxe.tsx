'use client';

import React from 'react';
import LuxuryCard from '@/components/ui/luxury-card';
import Parallax from '@/components/effects/parallax-scroll'; // or enhanced-scroll-animations
import { Sparkles, Star, ShieldCheck, Timer } from 'lucide-react';

const features = [
  { icon: Sparkles, title: '3D Printed Veneers', text: 'Same-day smile design & fabrication for precise, natural results.' },
  { icon: Timer, title: 'Same-day Implants', text: 'When suitable, placement and restoration coordinated in one visit.' },
  { icon: ShieldCheck, title: 'Calm & Comfortable', text: 'Sedation options with a gentle, unhurried approach.' },
  { icon: Star, title: '5★ Patient Stories', text: 'Real transformations, told in their own words.' },
];

export default function FeaturesLuxe() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Parallax key={f.title} offset={20}>
            <LuxuryCard variant="glass" shimmer glow hover tilt className="p-6">
              <div className="flex items-center gap-3">
                <f.icon className="w-6 h-6 text-[var(--turquoise)]" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--text)]/70">{f.text}</p>
            </LuxuryCard>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
