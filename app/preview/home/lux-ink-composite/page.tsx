/**
 * Lux Ink composite preview page (dark theme).
 */

'use client';

import React from 'react';
import '@/styles/preview/lux-composite.css';
import { ExactHeader } from '@/components/exact/ExactHeader';
import { ExactLuxuryTreatmentCards } from '@/components/exact/ExactLuxuryTreatmentCards';
import { ExactReviews } from '@/components/exact/ExactReviews';
import { ExactFloatingActions } from '@/components/exact/ExactFloatingActions';
import { ExactChatbot } from '@/components/exact/ExactChatbot';
import HeroLuxe from '@/components/preview/lux/HeroLuxe';
import LuxWaveBand from '@/components/preview/lux-ink-composite/LuxWaveBand';
import LuxInkCompositeFooter from '@/components/preview/lux-ink-composite/LuxInkCompositeFooter';

export default function LuxInkCompositePage() {
  return (
    <div
      style={{
        background: 'var(--navy, #0A1220)',
        color: 'white',
      }}
    >
      <ExactHeader />
      <HeroLuxe />
      <LuxWaveBand />
      <ExactLuxuryTreatmentCards />
      <ExactReviews />
      <ExactFloatingActions />
      <ExactChatbot />
      <LuxInkCompositeFooter />
    </div>
  );
}
