'use client';

import HeroLuxe from '@/preview/lux/HeroLuxe';
import StatsLuxe from '@/preview/lux/StatsLuxe';

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroLuxe />
      <StatsLuxe />
      {/* TODO: FeaturesLuxe, JourneyLuxe, TestimonialsLuxe, FaqLuxe, FooterLuxe */}
    </main>
  );
}
