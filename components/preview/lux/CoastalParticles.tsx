'use client';

import { motion } from 'framer-motion';

interface CoastalParticlesProps {
  theme: 'light' | 'ink';
}

export default function CoastalParticles({ theme }: CoastalParticlesProps) {
  const particleCount = theme === 'ink' ? 120 : 80;
  const opacity = theme === 'ink' ? 0.6 : 0.4;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            background: i % 4 === 0 ? '#C2185B' : i % 4 === 1 ? '#40C4B4' : i % 4 === 2 ? '#D4AF37' : '#FFFFFF',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity * (0.3 + Math.random() * 0.7),
          }}
          animate={{
            y: [-50, 50, -50],
            x: [-25, 25, -25],
            opacity: [opacity * 0.3, opacity, opacity * 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
