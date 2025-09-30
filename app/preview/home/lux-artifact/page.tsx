'use client';

import HeroLuxe from '@/components/preview/lux/HeroLuxe';
import { LuxuryButton as LuxCTAButton } from '@/components/ui/luxury-button';
import FooterLuxe from '@/components/preview/lux/FooterLuxe';
import WaveBand from '@/components/preview/lux-composite/LuxWaveSection';

export default function LuxArtifactPreviewPage() {
  return (
    <>
      <HeroLuxe
        title="St Mary's House Dental Care"
        subtitle="Your perfect smile is just one click away"
      />
      {/* Wave band as separate section below hero */}
      <WaveBand />
      <section className="lux-buttons-wrapper" style={{ padding: '2rem', textAlign: 'center' }}>
        <LuxCTAButton variant="primary">Book Free Consultation</LuxCTAButton>
        <LuxCTAButton variant="secondary">Try AI Smile Quiz</LuxCTAButton>
      </section>
      <FooterLuxe variant="light" />
    </>
  );
}
