'use client';

import HeroLuxe from '@/preview/lux/HeroLuxe';
import StatsLuxe from '@/preview/lux/StatsLuxe';
import FeaturesLuxe from '@/preview/lux/FeaturesLuxe';
import JourneyLuxe from '@/preview/lux/JourneyLuxe';
import TestimonialsLuxe from '@/preview/lux/TestimonialsLuxe';
import FaqLuxe from '@/preview/lux/FaqLuxe';
import FooterLuxe from '@/preview/lux/FooterLuxe';

export default function Page() {
  return (
    <main className="theme-lux theme-light bg-[var(--bg)] text-[var(--text)]">
      <HeroLuxe />
      <StatsLuxe />
      <FeaturesLuxe />
      <JourneyLuxe />
      <TestimonialsLuxe />
      <FaqLuxe />
      <FooterLuxe />
    </main>
  );
}
