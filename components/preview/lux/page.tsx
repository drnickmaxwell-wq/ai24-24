import FeaturesLuxe from '@/components/preview/lux/FeaturesLuxe';
import JourneyLuxe from '@/components/preview/lux/JourneyLuxe';
import TestimonialsLuxe from '@/components/preview/lux/TestimonialsLuxe';
import FaqLuxe from '@/components/preview/lux/FaqLuxe';
import FooterLuxe from '@/components/preview/lux/FooterLuxe';

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
