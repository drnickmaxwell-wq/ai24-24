"use client";

import dynamic from "next/dynamic";

// Lazy load components
const HeroVideo = dynamic(
  () => import("@/components/hero/cinematic-hero-video").then((m) => m.default),
  { ssr: false }
);

const ShimmerText = dynamic(
  () => import("@/components/fx/ShimmerText").then((m) => m.default),
  { ssr: false }
);

const SparkleButton = dynamic(
  () => import("@/components/ui/SparkleButton").then((m) => m.default),
  { ssr: false }
);

const WaveBackground = dynamic(
  () => import("@/components/fx/WaveBackground").then((m) => m.default),
  { ssr: false }
);

const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/FeaturesSection").then(
      (m) => m.default ?? m.FeaturesSection
    ),
  { ssr: false }
);

const TreatmentsSection = dynamic(
  () =>
    import("@/components/sections/TreatmentsSection").then(
      (m) => m.default ?? m.TreatmentsSection
    ),
  { ssr: false }
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (m) => m.default ?? m.TestimonialsSection
    ),
  { ssr: false }
);

export default function HomeLightClient() {
  return (
    <main
      className="relative min-h-dvh bg-[var(--background)] text-[var(--foreground)] overflow-hidden"
      data-theme="light"
    >
      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-[var(--max-width)] px-6 py-24 md:py-32">
        <HeroVideo
          videoSrc="/hero-video.mp4"
          posterSrc="/videos/hero/hero-poster.jpg"
          title="St Mary's House Dental Care"
          subtitle="Luxury coastal dentistry in Shoreham-by-Sea"
        />
        
        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <SparkleButton 
            href="/contact" 
            variant="magenta" 
            size="lg"
            className="focus-visible:ring-[var(--magenta)]/50"
          >
            Book Consultation
          </SparkleButton>
          <SparkleButton 
            href="/pwa/emergency-dentist" 
            variant="turquoise" 
            size="lg"
            className="focus-visible:ring-[var(--turquoise)]/50"
          >
            Emergency Care
          </SparkleButton>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-[var(--max-width)] w-full py-16 md:py-24 px-4 mx-auto">
        <FeaturesSection />
      </section>

      {/* Treatments Section */}
      <section className="relative z-10 max-w-[var(--max-width)] w-full py-16 md:py-24 px-4 mx-auto">
        <TreatmentsSection />
      </section>

      {/* CTA Section with Wave Background */}
      <section className="relative py-20 md:py-32">
        <WaveBackground variant="light" className="min-h-[400px]">
          <div className="max-w-[var(--max-width)] mx-auto px-6 text-center">
            <ShimmerText 
              as="h2" 
              shimmerColor="gold"
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready for Your Dream Smile?
            </ShimmerText>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience luxury dental care with our advanced 3D technology and coastal-inspired practice.
            </p>
            <SparkleButton 
              href="/contact" 
              variant="gold" 
              size="lg"
              className="focus-visible:ring-[var(--gold)]/50"
            >
              Start Your Journey
            </SparkleButton>
          </div>
        </WaveBackground>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 max-w-[var(--max-width)] w-full py-16 md:py-24 px-4 mx-auto">
        <TestimonialsSection />
      </section>
    </main>
  );
}
