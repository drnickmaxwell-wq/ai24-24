'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CinematicHeroVideo from './cinematic-hero-video';
import { BubbleSystem, SparkleSystem } from '@/components/fx/ParticleSystem';

interface InteractiveHeroProps {
  theme: 'light' | 'ink';
}

export default function InteractiveHero({ theme }: InteractiveHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Hero underlay from tokens */}
      <div className="absolute inset-0 hero-underlay -z-10" />
      
      {/* Particle Systems - All Special Effects */}
      <BubbleSystem 
        className="z-10" 
        particleCount={30} 
        intensity="medium" 
      />
      <SparkleSystem 
        className="z-10" 
        particleCount={15} 
        intensity="low" 
      />
      
      {/* Main Hero Content */}
      <div className="relative z-20 max-w-[var(--content)] mx-auto px-6">
        {/* Cinematic Hero Video */}
        <div className="mb-12">
          <CinematicHeroVideo 
            theme={theme}
            autoplay={true}
            muted={true}
            showControls={true}
            className="rounded-[var(--radius)] overflow-hidden shadow-2xl"
          />
        </div>
        
        {/* Stats Section with Brand Gradient Icon Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {/* CQC Outstanding */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="h-16 w-16 rounded-2xl grad-pink-teal grid place-items-center mx-auto mb-4 shadow-lg group-hover:shadow-[var(--magenta)]/25 transition-all duration-300">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-2">CQC Outstanding</h3>
            <p className="text-[var(--ink-soft)]">Highest possible rating for quality and safety</p>
          </motion.div>
          
          {/* 98% Satisfaction */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="h-16 w-16 rounded-2xl grad-turquoise-gold grid place-items-center mx-auto mb-4 shadow-lg group-hover:shadow-[var(--turquoise)]/25 transition-all duration-300">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-2">98% Satisfaction</h3>
            <p className="text-[var(--ink-soft)]">Based on over 1,000 patient reviews</p>
          </motion.div>
          
          {/* 24/7 Emergency */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center group"
          >
            <div className="h-16 w-16 rounded-2xl grad-gold-pink grid place-items-center mx-auto mb-4 shadow-lg group-hover:shadow-[var(--gold)]/25 transition-all duration-300">
              <span className="text-2xl">🚑</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--ink)] mb-2">24/7 Emergency</h3>
            <p className="text-[var(--ink-soft)]">Always here when you need us most</p>
          </motion.div>
        </motion.div>
        
        {/* Floating Dental Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[var(--turquoise)]/20 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {['🦷', '✨', '💎', '🌊'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hero mask from tokens */}
      <div className="absolute inset-0 hero-mask z-10" aria-hidden />
    </section>
  );
}
