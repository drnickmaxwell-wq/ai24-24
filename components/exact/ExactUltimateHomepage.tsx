'use client';

import { ExactHeader } from './ExactHeader';
import { ExactScreenshotWaves } from './ExactScreenshotWaves';
import { ExactPixelPerfectFloatingActions } from './ExactPixelPerfectFloatingActions';
import { ExactScreenshotTypography } from './ExactScreenshotTypography';
import { ExactPixelPerfectTreatmentCards } from './ExactPixelPerfectTreatmentCards';
import { ExactReviews } from './ExactReviews';
import { ExactFooter } from './ExactFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactUltimateHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactScreenshotWaves />
        
        <div className="relative z-10">
          <ExactScreenshotTypography />
          <ExactPixelPerfectTreatmentCards />
          <ExactReviews />
        </div>
      </main>

      <ExactFooter />
      <ExactPixelPerfectFloatingActions />
      <ExactChatbot />
    </div>
  );
}
