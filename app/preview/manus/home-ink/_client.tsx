'use client';

import React from 'react';
import InteractiveHero from '@/components/hero/InteractiveHero';
import TreatmentCards from '@/components/sections/TreatmentCards';
import { BubbleSystem } from '@/components/fx/ParticleSystem';

export default function HomeInkClient() {
  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: '#0B1020', // Deep navy background - DO NOT NORMALIZE TO LIGHT
      color: '#E8EEF5' // Light text
    }}>
      {/* CSS Variables Override for Ink Theme */}
      <style jsx global>{`
        :root {
          --bg: #0B1020 !important;
          --surface: rgba(255,255,255,0.06) !important;
          --ink: #E8EEF5 !important;
          --ink-soft: rgba(232, 238, 245, 0.7) !important;
        }
      `}</style>
      
      {/* Header */}
      <header className="relative z-50 py-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[var(--content)] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full grad-turquoise-gold grid place-items-center">
              <span className="text-white font-bold">SM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#E8EEF5' }}>St Mary's House</h1>
              <p className="text-sm" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Dental Care</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-[var(--turquoise)] transition-colors" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>About</a>
            <a href="#" className="hover:text-[var(--turquoise)] transition-colors" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Treatments</a>
            <a href="#" className="hover:text-[var(--turquoise)] transition-colors" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Team</a>
            <a href="#" className="hover:text-[var(--turquoise)] transition-colors" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Contact</a>
          </nav>
          
          <button className="grad-turquoise-teal text-white px-6 py-2 rounded-full font-semibold">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <InteractiveHero theme="ink" />

      {/* About Section with Wave Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Wave background moved down here */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/waves-bg-2560.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Particle Effects */}
        <BubbleSystem 
          className="z-10" 
          particleCount={20} 
          intensity="low" 
        />
        
        <div className="relative z-20 max-w-[var(--content)] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#E8EEF5' }}>
            Where Luxury Meets 
            <span className="text-gradient-magenta-teal block mt-2">
              Coastal Tranquility
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>
            Experience world-class dental care in our stunning coastal practice, 
            where advanced 3D technology meets the serene beauty of Shoreham-by-Sea.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[var(--radius)]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div className="h-16 w-16 rounded-2xl grad-pink-teal grid place-items-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E8EEF5' }}>Coastal Setting</h3>
              <p style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Relax in our tranquil coastal environment</p>
            </div>
            
            <div className="p-6 rounded-[var(--radius)]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div className="h-16 w-16 rounded-2xl grad-turquoise-gold grid place-items-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E8EEF5' }}>3D Technology</h3>
              <p style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Cutting-edge digital dentistry solutions</p>
            </div>
            
            <div className="p-6 rounded-[var(--radius)]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div className="h-16 w-16 rounded-2xl grad-gold-pink grid place-items-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#E8EEF5' }}>Luxury Care</h3>
              <p style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Premium treatments in elegant surroundings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <div style={{ backgroundColor: '#0B1020' }}>
        <TreatmentCards />
      </div>

      {/* CTA Section */}
      <section className="py-20 md:py-32 text-center" style={{ backgroundColor: '#0B1020' }}>
        <div className="max-w-[var(--content)] mx-auto px-6">
          <div className="p-12 rounded-[var(--radius)]" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#E8EEF5' }}>
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>
              Book your free consultation today and discover how our luxury coastal dentistry 
              can give you the perfect smile you've always dreamed of.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="grad-turquoise-teal text-white px-8 py-4 rounded-full font-semibold text-lg">
                📅 Book Free Consultation
              </button>
              <button className="grad-gold-pink text-white px-8 py-4 rounded-full font-semibold text-lg">
                📞 Call (01273) 123456
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-[var(--content)] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full grad-turquoise-gold grid place-items-center">
              <span className="text-white font-bold">SM</span>
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ color: '#E8EEF5' }}>St Mary's House Dental Care</h3>
              <p className="text-sm" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>Luxury Coastal Dentistry</p>
            </div>
          </div>
          <p className="mb-4" style={{ color: 'rgba(232, 238, 245, 0.7)' }}>
            123 Coastal Road, Shoreham-by-Sea, West Sussex BN43 5XX
          </p>
          <p style={{ color: 'rgba(232, 238, 245, 0.7)' }}>
            © 2024 St Mary's House Dental Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
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
