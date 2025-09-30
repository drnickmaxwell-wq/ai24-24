// Preview page for the Lux Composite homepage. Composes the best existing
// sections from the various Manus variants into a single non‑destructive
// page. The hero uses the Lux hero component with a fallback gradient.

'use client';

import React from 'react';
import '@/styles/preview/lux-composite.css';
// Import shared sections from exact variants. These components should
// remain untouched; any stylistic overrides are applied in wrapper
// components within the lux-composite namespace.
import { ExactHeader } from '@/components/exact/ExactHeader';
import { ExactLuxuryTreatmentCards } from '@/components/exact/ExactLuxuryTreatmentCards';
import { ExactReviews } from '@/components/exact/ExactReviews';
import { ExactFloatingActions } from '@/components/exact/ExactFloatingActions';
import { ExactChatbot } from '@/components/exact/ExactChatbot';
// Import the Lux hero from the existing preview folder. This component
// handles video playback, gradient fallback and subtle particle effects.
import HeroLuxe from '@/components/preview/lux/HeroLuxe';
// Import the wave section wrapper specific to the composite. This
// component simply renders an existing wave background component
// beneath the hero.
import LuxWaveBand from '@/components/preview/lux-composite/LuxWaveBand';
// Import a custom footer wrapper to enforce the navy background.
import LuxCompositeFooter from '@/components/preview/lux-composite/LuxCompositeFooter';

export default function LuxCompositePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white"
      style={{
        // Define brand tokens as CSS variables so descendant components
        // automatically pick up the correct colours. If a named navy
        // token exists (e.g., --navy), it should be defined in global
        // styles; otherwise fallback to #0A1220.
        '--magenta': 'var(--magenta)',
        '--turquoise': 'var(--turquoise)',
        '--gold': 'var(--gold)',
        '--navy': 'var(--navy, #0A1220)',
      } as React.CSSProperties}
    >
      <ExactHeader />
      <main className="flex-grow">
        {/* Hero with video slot and gradient fallback */}
        <HeroLuxe />
        {/* Wave background directly beneath the hero LuxWaveBand treatment cards followed by reviews */}
                <LuxWaveBand />
        <ExactLuxuryTreatmentCards />
        <ExactReviews />
      </main>
      {/* Override the footer background to navy */}
      <LuxCompositeFooter />
      <ExactFloatingActions />
      <ExactChatbot />
    </div>
  );
}
