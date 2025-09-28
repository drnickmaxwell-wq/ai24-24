'use client';

import { ExactHeader } from './ExactHeader';
import { ExactPerfectWaveSystem } from './ExactPerfectWaveSystem';
import { ExactPixelPerfectFloatingActions } from './ExactPixelPerfectFloatingActions';
import { ExactScreenshotTypography } from './ExactScreenshotTypography';
import { ExactPixelPerfectTreatmentCards } from './ExactPixelPerfectTreatmentCards';
import { ExactReviews } from './ExactReviews';
import { ExactLuxuryFooter } from './ExactLuxuryFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactFinal20000PercentHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactPerfectWaveSystem />
        
        <div className="relative z-10">
          <ExactScreenshotTypography />
          <ExactPixelPerfectTreatmentCards />
          <ExactReviews />
        </div>
      </main>

      <ExactLuxuryFooter />
      <ExactPixelPerfectFloatingActions />
      <ExactChatbot />
    </div>
  );
}
