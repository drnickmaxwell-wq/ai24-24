'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Floating Gold Particles that react to mouse movement
export function FloatingGoldParticles({ count = 15 }: { count?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const baseX = Math.random() * 100;
        const baseY = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full shadow-lg"
            style={{
              left: `${baseX}%`,
              top: `${baseY}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, (mousePosition.x - window.innerWidth / 2) * 0.01, 0],
              y: [0, (mousePosition.y - window.innerHeight / 2) * 0.01, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        );
      })}
    </div>
  );
}

// Luxury Lens Flare Effect
export function LuxuryLensFlare() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-full h-2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        style={{
          filter: 'blur(2px)',
          transform: 'rotate(-45deg)',
        }}
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 3,
        }}
      />
      
      {/* Secondary flare */}
      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-turquoise-400/20 to-transparent"
        style={{
          filter: 'blur(1px)',
          transform: 'rotate(-30deg)',
          top: '60%',
        }}
        animate={{
          x: ['-100%', '200%'],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 4,
          delay: 2,
        }}
      />
    </div>
  );
}

// Coastal Caustics Effect (underwater light patterns)
export function CoastalCaustics() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="caustics">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
            />
          </filter>
          <linearGradient id="causticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#40C4B4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#40C4B4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#causticGradient)"
          filter="url(#caustics)"
          animate={{
            cx: [200, 800, 200],
            cy: [200, 600, 200],
            r: [100, 150, 100],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.circle
          cx="700"
          cy="400"
          r="80"
          fill="url(#causticGradient)"
          filter="url(#caustics)"
          animate={{
            cx: [700, 300, 700],
            cy: [400, 200, 400],
            r: [80, 120, 80],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </svg>
    </div>
  );
}

// Morphing Liquid Gradients
export function MorphingLiquidGradients() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #C2185B, #40C4B4, #D4AF37)',
          filter: 'blur(40px)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #D4AF37, #C2185B, #40C4B4)',
          filter: 'blur(30px)',
          bottom: '20%',
          right: '15%',
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          rotate: [360, 180, 0],
          x: [0, -80, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
    </div>
  );
}

// Magnetic Cursor Effect for Buttons
export function MagneticCursor({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y, strength]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// Parallax Depth Layers
export function ParallaxDepthLayers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Background layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 30% 70%, #40C4B4, transparent 50%)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Middle layer */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #C2185B, transparent 40%)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      
      {/* Foreground layer */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 30%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
    </div>
  );
}

// Breathing Glow Effect
export function BreathingGlow({ children, color = '#D4AF37' }: { children: React.ReactNode; color?: string }) {
  return (
    <motion.div
      className="relative inline-block"
      animate={{
        filter: [
          `drop-shadow(0 0 10px ${color}40)`,
          `drop-shadow(0 0 20px ${color}60)`,
          `drop-shadow(0 0 10px ${color}40)`,
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Luxury Shimmer Animation CSS
export const luxuryShimmerCSS = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes liquid-flow {
    0%, 100% { 
      background-position: 0% 50%;
      filter: hue-rotate(0deg);
    }
    50% { 
      background-position: 100% 50%;
      filter: hue-rotate(30deg);
    }
  }
  
  .animate-liquid-flow {
    animation: liquid-flow 8s ease-in-out infinite;
    background-size: 400% 400%;
  }
`;

// Sound Design Hook (for subtle coastal ambiance)
export function useCoastalAmbiance() {
  useEffect(() => {
    // Only play subtle sounds on user interaction to respect autoplay policies
    const playAmbiance = () => {
      const audio = new Audio('/sounds/subtle-waves.mp3');
      audio.volume = 0.1;
      audio.loop = true;
      audio.play().catch(() => {
        // Ignore autoplay restrictions
      });
    };

    // Play on first user interaction
    const handleFirstInteraction = () => {
      playAmbiance();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);
}

