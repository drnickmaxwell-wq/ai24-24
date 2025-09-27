'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports for luxury components
const LuxHeader = dynamic(() => import('@/components/preview/lux/LuxHeader'), { ssr: false });
const InteractiveHero = dynamic(() => import('@/components/preview/lux/InteractiveHero'), { ssr: false });
const PerfectSmileCTA = dynamic(() => import('@/components/preview/lux/PerfectSmileCTA'), { ssr: false });
const LuxuryTreatments = dynamic(() => import('@/components/preview/lux/LuxuryTreatments'), { ssr: false });
const PracticeStats = dynamic(() => import('@/components/preview/lux/PracticeStats'), { ssr: false });
const LuxFooter = dynamic(() => import('@/components/preview/lux/LuxFooter'), { ssr: false });
const CoastalParticles = dynamic(() => import('@/components/preview/lux/CoastalParticles'), { ssr: false });

export default function LuxHomepage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A202C] overflow-x-hidden">
      {/* Global Particle System */}
      <Suspense fallback={null}>
        <CoastalParticles theme="light" />
      </Suspense>

      {/* Header */}
      <Suspense fallback={<div className="h-20 bg-white/90 backdrop-blur-xl" />}>
        <LuxHeader theme="light" />
      </Suspense>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Suspense fallback={<div className="h-screen bg-gradient-to-br from-pink-500 to-teal-400" />}>
          <InteractiveHero theme="light" />
        </Suspense>

        {/* Perfect Smile CTA */}
        <Suspense fallback={<div className="h-96 bg-gradient-to-r from-pink-500 to-teal-400" />}>
          <PerfectSmileCTA theme="light" />
        </Suspense>

        {/* Luxury Treatments */}
        <Suspense fallback={<div className="h-screen bg-gray-50" />}>
          <LuxuryTreatments theme="light" />
        </Suspense>

        {/* Practice Statistics */}
        <Suspense fallback={<div className="h-32 bg-white" />}>
          <PracticeStats theme="light" />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-96 bg-gray-900" />}>
        <LuxFooter theme="light" />
      </Suspense>

      {/* Loading State */}
      <div id="loading-overlay" className="fixed inset-0 bg-gradient-to-br from-pink-500 to-teal-400 flex items-center justify-center z-50 transition-opacity duration-1000">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-light">Loading Luxury Experience...</p>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', () => {
              setTimeout(() => {
                const overlay = document.getElementById('loading-overlay');
                if (overlay) {
                  overlay.style.opacity = '0';
                  setTimeout(() => overlay.remove(), 1000);
                }
              }, 1500);
            });
          `,
        }}
      />
    </div>
  );
}
