import React from 'react';
import { LayoutWrapper } from '@/components/layout/layout-wrapper';
import { HeroSection } from '@/components/features/hero-section';
import { ServicesSection } from '@/components/features/services-section';
import { AboutSection } from '@/components/features/about-section';
import { TestimonialsSection } from '@/components/features/testimonials-section';
import { CTASection } from '@/components/features/cta-section';

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </LayoutWrapper>
  );
}

