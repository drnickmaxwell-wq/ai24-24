'use client';

import ExactHeader from '@/components/exact/ExactHeader';
import ExactGradientBackground from '@/components/exact/ExactGradientBackground';
import ExactFloatingActions from '@/components/exact/ExactFloatingActions';
import ExactLoadingScreen from '@/components/exact/ExactLoadingScreen';

export default function ExactHomepageInk() {
  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <ExactGradientBackground theme="ink" />
      
      {/* Header */}
      <ExactHeader />
      
      {/* Main Content - Loading Screen */}
      <main className="relative z-10">
        <ExactLoadingScreen />
      </main>
      
      {/* Floating Action Buttons */}
      <ExactFloatingActions />
    </div>
  );
}
