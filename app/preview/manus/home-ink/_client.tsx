"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic imports for client-side components
const InteractiveHero = dynamic(
  () => import("@/components/hero/InteractiveHero"),
  { ssr: false }
);

const TreatmentCards = dynamic(
  () => import("@/components/sections/TreatmentCards"),
  { ssr: false }
);

const WaveBackground = dynamic(
  () => import("@/components/fx/WaveBackground"),
  { ssr: false }
);

const SparkleButton = dynamic(
  () => import("@/components/ui/SparkleButton"),
  { ssr: false }
);

export default function HomeInkClient() {
  return (
    <div data-theme="ink" className="theme-bg min-h-screen">
      {/* Hero Section */}
      <InteractiveHero theme="ink" />
      
      {/* Treatment Cards Section */}
      <TreatmentCards />
      
      {/* CTA Section with Wave Background */}
      <section className="relative py-20 overflow-hidden">
        <WaveBackground variant="ink" />
        
        <div className="relative z-10 max-w-[var(--content)] mx-auto px-6 text-center">
          <div className="theme-glass theme-border rounded-[var(--radius)] p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] mb-6">
              Ready to Experience 
              <span className="text-gradient-magenta-teal block mt-2">
                Luxury Coastal Dentistry?
              </span>
            </h2>
            
            <p className="text-xl text-[var(--ink-soft)] mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have transformed their smiles 
              with our award-winning dental care in beautiful Shoreham-by-Sea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SparkleButton
                href="/contact"
                variant="magenta"
                size="lg"
                className="text-lg px-8 py-4"
              >
                📞 Call Now: 01273 453109
              </SparkleButton>
              <SparkleButton
                href="/booking"
                variant="turquoise"
                size="lg"
                className="text-lg px-8 py-4"
              >
                📅 Book Online 24/7
              </SparkleButton>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--border)]">
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="font-semibold text-[var(--ink)]">CQC Outstanding</div>
                <div className="text-sm text-[var(--ink-soft)]">Highest Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⭐</div>
                <div className="font-semibold text-[var(--ink)]">98% Satisfaction</div>
                <div className="text-sm text-[var(--ink-soft)]">Patient Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚑</div>
                <div className="font-semibold text-[var(--ink)]">24/7 Emergency</div>
                <div className="text-sm text-[var(--ink-soft)]">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
