'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, Eye, Camera, Navigation } from 'lucide-react';
import { LayoutWrapper } from '@/components/layout/layout-wrapper';

// Client-only dynamic imports (SSR false) so Vercel build doesn't crash
const ToothModelViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.ToothModelViewer),
  { ssr: false, loading: () => <div className="h-[400px] rounded-xl bg-white/60 backdrop-blur-md border border-white/20 flex items-center justify-center">Loading 3D model…</div> }
);

const BeforeAfterViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.BeforeAfterViewer),
  { ssr: false, loading: () => <div className="h-[500px] rounded-xl bg-white/60 backdrop-blur-md border border-white/20 flex items-center justify-center">Loading comparison…</div> }
);

const ARSmileTryOn = dynamic(
  () => import('@/components/3d/ar-smile-tryOn').then(m => m.ARSmileTryOn),
  { ssr: false, loading: () => <div className="h-[360px] rounded-xl bg-white/60 backdrop-blur-md border border-white/20 flex items-center justify-center">Loading AR…</div> }
);

const VirtualOfficeTour = dynamic(
  () => import('@/components/3d/virtual-office-tour').then(m => m.VirtualOfficeTour),
  { ssr: false, loading: () => <div className="h-[600px] rounded-xl bg-white/60 backdrop-blur-md border border-white/20 flex items-center justify-center">Loading tour…</div> }
);

// Effects (try your real comps first; fallback to safe no-ops)
let ScrollAnimation: any;
let StaggeredAnimation: any;
try { ScrollAnimation = require('@/components/effects/scroll-animations').ScrollAnimation; }
catch { ScrollAnimation = ({ children }: any) => <>{children}</>; }
try { StaggeredAnimation = require('@/components/effects/scroll-animations').StaggeredAnimation; }
catch { StaggeredAnimation = ({ children }: any) => <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{children}</div>; }

// LuxuryButton fallback
let LuxuryButton: any;
try { LuxuryButton = require('@/components/ui/luxury-button').LuxuryButton; }
catch { LuxuryButton = ({ children, className='', ...p }: any) => <button {...p} className={`px-5 py-3 rounded-full text-white bg-gradient-to-r from-[var(--magenta)] to-[var(--turquoise)] shadow-lg ${className}`}>{children}</button>; }

export default function ThreeDShowcasePage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-white to-brand-background">
        {/* Hero */}
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
                Immerse yourself in our cutting-edge 3D visualisation, AR Smile Try-On, and a virtual office tour.
              </p>

              <LuxuryButton onClick={() => { window.location.href = '/contact'; }} glow>
                Start Your 3D Journey
              </LuxuryButton>
            </ScrollAnimation>
          </div>
        </section>

        {/* 3D Features Grid */}
        <section className="py-20 px-4">
          <div className="container-luxury">
            <StaggeredAnimation className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" staggerDelay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-brand-text mb-3">Interactive 3D Models</h2>
                  <p className="text-brand-muted">Explore detailed 3D models and see how treatments transform your smile.</p>
                </div>
                <ToothModelViewer height="400px" />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-brand-text mb-3">AR Smile Try-On</h2>
                  <p className="text-brand-muted">Use your camera to virtually try different smile treatments and see results instantly.</p>
                </div>
                <ARSmileTryOn />
              </div>
            </StaggeredAnimation>

            <ScrollAnimation variant="fadeUp" className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-brand-text mb-4">Before & After Visualisation</h2>
                <p className="text-brand-muted max-w-2xl mx-auto">Visualise your potential outcome with our 3D planning tools.</p>
              </div>
              <BeforeAfterViewer height="500px" />
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-brand-text mb-4">Virtual Office Tour</h2>
                <p className="text-brand-muted max-w-2xl mx-auto">Take a 3D tour of our luxury coastal practice.</p>
              </div>
              <VirtualOfficeTour height="600px" autoPlay />
            </ScrollAnimation>
          </div>
        </section>

        {/* Tech Icons */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-turquoise/5 to-brand-magenta/5">
          <div className="container-luxury">
            <ScrollAnimation variant="fadeUp" className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-brand-text mb-6">Powered by Advanced Technology</h2>
              <p className="text-brand-muted max-w-2xl mx-auto">Optimised web tech for seamless, interactive experiences across devices.</p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-turquoise to-brand-turquoise-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">Real-time 3D Rendering</h3>
                <p className="text-brand-muted">Smooth, interactive 3D models that respond to your touch.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-magenta to-brand-magenta-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">AR Integration</h3>
                <p className="text-brand-muted">Augmented reality features that work right in your browser.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">Intuitive Controls</h3>
                <p className="text-brand-muted">Navigation optimised for both desktop and mobile devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container-luxury">
            <ScrollAnimation variant="scale" className="text-center">
              <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-brand-text mb-6">Ready to See Your Perfect Smile?</h2>
                <p className="text-brand-muted mb-8 text-lg">Book a consultation and experience our 3D technology in person.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LuxuryButton onClick={() => { window.location.href = '/contact'; }} glow>
                    Book 3D Consultation
                  </LuxuryButton>
                  <LuxuryButton onClick={() => { window.location.href = '/treatments/3d-dentistry'; }} className="bg-white text-brand-text">
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
