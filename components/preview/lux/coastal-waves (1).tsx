'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CoastalWavesProps {
  className?: string;
  variant?: 'hero' | 'section' | 'footer';
  animated?: boolean;
}

export function CoastalWaves({ 
  className = '', 
  variant = 'section',
  animated = true 
}: CoastalWavesProps) {
  const waveVariants = {
    animate: {
      d: [
        "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,80C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getWaveColors = () => {
    switch (variant) {
      case 'hero':
        return {
          primary: 'rgba(64, 196, 180, 0.3)', // brand-turquoise
          secondary: 'rgba(194, 24, 91, 0.2)', // brand-magenta
          accent: 'rgba(212, 175, 55, 0.1)' // brand-gold
        };
      case 'footer':
        return {
          primary: 'rgba(64, 196, 180, 0.4)',
          secondary: 'rgba(194, 24, 91, 0.3)',
          accent: 'rgba(212, 175, 55, 0.2)'
        };
      default:
        return {
          primary: 'rgba(64, 196, 180, 0.2)',
          secondary: 'rgba(194, 24, 91, 0.15)',
          accent: 'rgba(212, 175, 55, 0.1)'
        };
    }
  };

  const colors = getWaveColors();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.accent} />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.secondary} />
            <stop offset="50%" stopColor={colors.accent} />
            <stop offset="100%" stopColor={colors.primary} />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.accent} />
            <stop offset="50%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
        </defs>

        {/* Wave Layer 1 */}
        {animated ? (
          <motion.path
            variants={waveVariants}
            animate="animate"
            fill="url(#wave-gradient-1)"
            opacity="0.8"
          />
        ) : (
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-gradient-1)"
            opacity="0.8"
          />
        )}

        {/* Wave Layer 2 */}
        {animated ? (
          <motion.path
            variants={waveVariants}
            animate="animate"
            fill="url(#wave-gradient-2)"
            opacity="0.6"
            style={{ animationDelay: '2s' }}
          />
        ) : (
          <path
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,80C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-gradient-2)"
            opacity="0.6"
          />
        )}

        {/* Wave Layer 3 */}
        {animated ? (
          <motion.path
            variants={waveVariants}
            animate="animate"
            fill="url(#wave-gradient-3)"
            opacity="0.4"
            style={{ animationDelay: '4s' }}
          />
        ) : (
          <path
            d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,122.7C672,117,768,107,864,112C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-gradient-3)"
            opacity="0.4"
          />
        )}
      </svg>

      {/* Floating Particles */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-turquoise/30 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

