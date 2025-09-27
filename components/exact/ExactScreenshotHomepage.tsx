'use client';

import { ExactHeader } from './ExactHeader';
import { ExactScreenshotWaves } from './ExactScreenshotWaves';
import { ExactFloatingActions } from './ExactFloatingActions';
import { ExactScreenshotTypography } from './ExactScreenshotTypography';
import { ExactLuxuryTreatmentCards } from './ExactLuxuryTreatmentCards';
import { ExactReviews } from './ExactReviews';
import { ExactFooter } from './ExactFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactScreenshotHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactScreenshotWaves />
        
        <div className="relative z-10">
          <ExactScreenshotTypography />
          <ExactLuxuryTreatmentCards />
          <ExactReviews />
        </div>
      </main>

      <ExactFooter />
      <ExactFloatingActions />
      <ExactChatbot />
    </div>
  );
}
