"use client";

import React from "react";
import dynamic from "next/dynamic";

const FloatingBubbles = dynamic(
  () => import("@/components/fx/FloatingBubbles"),
  { ssr: false }
);

const SparkleButton = dynamic(
  () => import("@/components/ui/SparkleButton"),
  { ssr: false }
);

interface InteractiveHeroProps {
  theme?: "light" | "ink";
}

export default function InteractiveHero({ theme = "light" }: InteractiveHeroProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden py-24 md:py-32">
      {/* Hero underlay from tokens */}
      <div className="absolute inset-0 hero-underlay -z-10" />
      
      {/* Wave background image */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: "url('/waves-bg-2560.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Hero mask from tokens */}
      <div className="absolute inset-0 hero-mask z-10" aria-hidden />
      
      {/* Floating bubbles animation */}
      <FloatingBubbles count={25} />
      
      {/* Content */}
      <div className="relative z-20 max-w-[var(--content)] mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gradient-magenta-teal">
              Interactive
            </span>
            <span className="block text-white mt-2">
              Dental Visualization
            </span>
          </h1>
          
          {/* Subheading */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              Your Perfect Smile is Just
            </h2>
            <p className="text-xl md:text-2xl text-gradient-magenta-teal font-medium">
              One Click Away
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience the future of dental care with our cutting-edge 3D visualization technology 
            and award-winning coastal practice.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <SparkleButton 
              href="/contact" 
              variant="magenta" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              📅 Book Free Consultation
            </SparkleButton>
            <SparkleButton 
              href="/ai-smile-quiz" 
              variant="turquoise" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              ✨ Try AI Smile Quiz
            </SparkleButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-2xl grad-gold-pink grid place-items-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <div className="text-yellow-300 font-bold text-lg">24/7 Emergency</div>
              <div className="text-white/80 text-sm">Always Available</div>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-2xl grad-pink-teal grid place-items-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-yellow-300 font-bold text-lg">CQC Outstanding Rating</div>
              <div className="text-white/80 text-sm">Highest Quality Standards</div>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-2xl grad-teal-gold grid place-items-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="text-yellow-300 font-bold text-lg">98% Patient Satisfaction</div>
              <div className="text-white/80 text-sm">Exceptional Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
