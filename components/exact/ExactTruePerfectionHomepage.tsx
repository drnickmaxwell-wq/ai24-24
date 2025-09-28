'use client';

import { ExactHeader } from './ExactHeader';
import { ExactTrueWaveRecreation } from './ExactTrueWaveRecreation';
import { ExactPixelPerfectFloatingActions } from './ExactPixelPerfectFloatingActions';
import { ExactTrueTypography } from './ExactTrueTypography';
import { ExactPixelPerfectTreatmentCards } from './ExactPixelPerfectTreatmentCards';
import { ExactReviews } from './ExactReviews';
import { ExactLuxuryFooter } from './ExactLuxuryFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactTruePerfectionHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactTrueWaveRecreation />
        
        <div className="relative z-10">
          <ExactTrueTypography />
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
