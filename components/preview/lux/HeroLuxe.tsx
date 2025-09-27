'use client';

import dynamic from 'next/dynamic';
import ShimmerTitle from '@/components/effects/ShimmerTitle';
import CoastalParticles from '@/components/effects/CoastalParticles';
import { LuxuryButton } from '@/components/ui/luxury-button';

const WaveBackground = dynamic(
  () => import('@/components/fx/WaveBackground').then(m => m.default),
  { ssr: false }
);

export default function HeroLuxe() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <WaveBackground amplitude={0.5} />
      <CoastalParticles />
      <div className="container-luxury relative z-10">
        <p className="mb-4 text-sm font-medium text-brand-turquoise/90">
          AI‑Powered 3D Dentistry
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          <ShimmerTitle className="leading-tight">Luxury dental care by the sea</ShimmerTitle>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-brand-muted">
          Advanced 3D dentistry, same‑day veneers & implants, and a calm, patient‑first experience.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LuxuryButton size="lg">Book a 3D assessment</LuxuryButton>
          <LuxuryButton variant="outline" size="lg" className="backdrop-blur">
            Watch patient stories
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
}
