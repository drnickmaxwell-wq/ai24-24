'use client';

import { ExactHeader } from './ExactHeader';
import { ExactAdvancedWaveBackground } from './ExactAdvancedWaveBackground';
import { ExactFloatingActions } from './ExactFloatingActions';
import { ExactPixelPerfectHero } from './ExactPixelPerfectHero';
import { ExactLuxuryTreatmentCards } from './ExactLuxuryTreatmentCards';
import { ExactReviews } from './ExactReviews';
import { ExactFooter } from './ExactFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactPixelPerfectHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactAdvancedWaveBackground />
        
        <div className="relative z-10">
          <ExactPixelPerfectHero />
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
