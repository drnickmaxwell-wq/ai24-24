'use client';

import { ExactHeader } from './ExactHeader';
import { ExactGradientBackground } from './ExactGradientBackground';
import { ExactFloatingActions } from './ExactFloatingActions';
import { ExactHeroSection } from './ExactHeroSection';
import { ExactTreatments } from './ExactTreatments';
import { ExactReviews } from './ExactReviews';
import { ExactFooter } from './ExactFooter';
import { ExactChatbot } from './ExactChatbot';

export default function ExactHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactGradientBackground />
        
        <div className="relative z-10">
          <ExactHeroSection />
          <ExactTreatments />
          <ExactReviews />
        </div>
      </main>

      <ExactFooter />
      <ExactFloatingActions />
      <ExactChatbot />
    </div>
  );
}
