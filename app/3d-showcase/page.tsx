'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Camera, Navigation } from 'lucide-react';
import { LayoutWrapper } from '@/components/layout/layout-wrapper';
import { ToothModelViewer, BeforeAfterViewer } from '@/components/3d/tooth-model-viewer';
import { ARSmileTryOn } from '@/components/3d/ar-smile-tryOn';
import { VirtualOfficeTour } from '@/components/3d/virtual-office-tour';
import { ScrollAnimation, StaggeredAnimation } from '@/components/effects/scroll-animations';
import { LuxuryButton } from '@/components/ui/luxury-button';

export default function ThreeDShowcasePage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container-luxury">
            <ScrollAnimation variant="fadeUp" className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-brand-turquoise" />
                <span className="text-brand-text font-medium">3D & AR Technology</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">
                Experience the{' '}
                <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
                  Future of Dentistry
                </span>
              </h1>

              <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed mb-8">
                Immerse yourself in our cutting-edge 3D visualization technology, AR smile try-on, 
                and virtual office tours. See your perfect smile before treatment begins.
              </p>

              <LuxuryButton variant="primary" size="lg" glow>
                Start Your 3D Journey
              </LuxuryButton>
            </ScrollAnimation>
          </div>
        </section>

        {/* 3D Features Grid */}
        <section className="py-20 px-4">
          <div className="container-luxury">
            <StaggeredAnimation
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
              staggerDelay={0.2}
            >
              {/* 3D Tooth Model Viewer */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-brand-text mb-3">
                    Interactive 3D Models
                  </h2>
                  <p className="text-brand-muted">
                    Explore detailed 3D tooth models and see exactly how treatments will transform your smile.
                  </p>
                </div>
                <ToothModelViewer height="400px" />
              </div>

              {/* AR Smile Try-On */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-brand-text mb-3">
                    AR Smile Try-On
                  </h2>
                  <p className="text-brand-muted">
                    Use your camera to virtually try on different smile treatments and see instant results.
                  </p>
                </div>
                <ARSmileTryOn />
              </div>
            </StaggeredAnimation>

            {/* Before/After Comparison */}
            <ScrollAnimation variant="fadeUp" className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-brand-text mb-4">
                  Before & After Visualization
                </h2>
                <p className="text-brand-muted max-w-2xl mx-auto">
                  See the dramatic transformation possible with our advanced 3D treatment planning.
                </p>
              </div>
              <BeforeAfterViewer height="500px" />
            </ScrollAnimation>

            {/* Virtual Office Tour */}
            <ScrollAnimation variant="fadeUp">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-brand-text mb-4">
                  Virtual Office Tour
                </h2>
                <p className="text-brand-muted max-w-2xl mx-auto">
                  Take a 3D tour of our luxury coastal dental practice and see our state-of-the-art facilities.
                </p>
              </div>
              <VirtualOfficeTour height="600px" autoPlay />
            </ScrollAnimation>
          </div>
        </section>

        {/* Technology Features */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-turquoise/5 to-brand-magenta/5">
          <div className="container-luxury">
            <ScrollAnimation variant="fadeUp" className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-brand-text mb-6">
                Powered by Advanced Technology
              </h2>
              <p className="text-brand-muted max-w-2xl mx-auto">
                Our 3D and AR features are built with the latest web technologies for seamless, 
                interactive experiences across all devices.
              </p>
            </ScrollAnimation>

            <StaggeredAnimation
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              staggerDelay={0.1}
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-turquoise to-brand-turquoise-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  Real-time 3D Rendering
                </h3>
                <p className="text-brand-muted">
                  Smooth, interactive 3D models that respond to your touch and provide instant feedback.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-magenta to-brand-magenta-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  AR Integration
                </h3>
                <p className="text-brand-muted">
                  Advanced augmented reality features that work seamlessly in your web browser.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">
                  Intuitive Controls
                </h3>
                <p className="text-brand-muted">
                  Easy-to-use navigation and controls optimized for both desktop and mobile devices.
                </p>
              </div>
            </StaggeredAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container-luxury">
            <ScrollAnimation variant="scale" className="text-center">
              <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-brand-text mb-6">
                  Ready to See Your Perfect Smile?
                </h2>
                <p className="text-brand-muted mb-8 text-lg">
                  Book a consultation and experience our 3D technology in person. 
                  See exactly how your smile will look before any treatment begins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LuxuryButton variant="primary" size="lg" glow>
                    Book 3D Consultation
                  </LuxuryButton>
                  <LuxuryButton variant="outline" size="lg">
                    Learn More About Our Technology
                  </LuxuryButton>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}

