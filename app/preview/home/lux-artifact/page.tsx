import { HeroLuxe } from '@/artifact/lux-sections/components/HeroLuxe';
import { LuxCTAButton, LuxMenuLink, LuxGradientLink } from '@/artifact/lux-sections/components/LuxButtons';
import { FooterLuxe } from '@/artifact/lux-sections/components/FooterLuxe';
import { WaveBand } from '@/artifact/lux-sections/components/WaveBand';
import '@/artifact/lux-sections/styles/lux-sections.css';

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
        <LuxCTAButton type="primary">Book Free Consultation</LuxCTAButton>
        <LuxCTAButton type="secondary">Try AI Smile Quiz</LuxCTAButton>
      </section>
      <FooterLuxe variant="light" />
    </>
  );
}
