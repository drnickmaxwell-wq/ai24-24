'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LuxuryCard from '@/components/ui/luxury-card';

const steps = [
  { n: 1, title: '3D Diagnostics', text: 'Digital scans & planning' },
  { n: 2, title: 'Guided Placement', text: 'Predictable, precise surgery' },
  { n: 3, title: 'Same-day Restoration', text: 'Provisional smile (when suitable)' },
  { n: 4, title: 'Final Smile', text: 'Refinement & review' },
];

export default function JourneyLuxe() {
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Implant Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <motion.div key={s.n} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <LuxuryCard variant="coastal" hover tilt className="p-6">
                <div className="text-[var(--turquoise)] font-bold">Step {s.n}</div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="text-sm text-[var(--text)]/70 mt-2">{s.text}</p>
              </LuxuryCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
