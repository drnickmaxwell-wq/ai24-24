'use client';

import React from 'react';
import GlowCard from '@/components/fx/GlowCard';

const stats = [
  { value: '3D', label: 'Printed Veneers' },
  { value: 'Same-day', label: 'Implants & Restorations' },
  { value: '5★', label: 'Patient Reviews' },
  { value: 'Calm', label: 'Sedation Available' },
];

export default function StatsLuxe() {
  return (
    <section className="relative z-10 py-12">
      <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <GlowCard key={s.label} className="p-6 text-center">
            <div className="text-xl md:text-2xl font-semibold text-[var(--turquoise)]">{s.value}</div>
            <div className="text-sm text-[var(--text)]/70">{s.label}</div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
