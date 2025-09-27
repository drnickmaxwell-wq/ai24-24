import FeaturesLuxe from '@/preview/lux/FeaturesLuxe';
import JourneyLuxe from '@/preview/lux/JourneyLuxe';
import TestimonialsLuxe from '@/preview/lux/TestimonialsLuxe';
import FaqLuxe from '@/preview/lux/FaqLuxe';
import FooterLuxe from '@/preview/lux/FooterLuxe';

export default function Page() {
  return (
    <main className="min-h-screen">
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
