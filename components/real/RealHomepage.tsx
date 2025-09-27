'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface RealHomepageProps {
  theme: 'light' | 'ink';
}

export default function RealHomepage({ theme }: RealHomepageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Magenta wave patterns matching the background image
    const drawMagentaWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Main magenta wave
      for (let i = 0; i < 100; i++) {
        const progress = i / 100;
        const opacity = 0.3 + progress * 0.7;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(330, 70%, ${40 + progress * 30}%, ${opacity})`;
        ctx.lineWidth = 1 + progress * 3;
        
        const startY = canvas.height * 0.6;
        const amplitude = 200 + progress * 100;
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const waveY = startY + Math.sin((x * 0.005) + (time * 1.5) + (progress * Math.PI * 2)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
      }

      // Turquoise accent waves
      for (let i = 0; i < 30; i++) {
        const progress = i / 30;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(180, 60%, 60%, ${0.2 + progress * 0.4})`;
        ctx.lineWidth = 1 + progress * 2;
        
        const startY = canvas.height * 0.3;
        const amplitude = 150 + progress * 80;
        
        for (let x = 0; x <= canvas.width; x += 8) {
          const waveY = startY + Math.sin((x * 0.008) + (time * 2) + (progress * Math.PI)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      drawMagentaWaves();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const bgClass = theme === 'light' 
    ? 'bg-gradient-to-br from-white via-pink-50 to-teal-50'
    : 'bg-gradient-to-br from-[#0F172A] via-pink-900/20 to-teal-900/20';

  return (
    <div className={`min-h-screen relative overflow-hidden ${bgClass}`}>
      {/* Wave Background Image */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url('/waves-bg-2560.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Animated Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ mixBlendMode: theme === 'light' ? 'multiply' : 'screen' }}
      />

      {/* Floating Particles - Magenta Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 4 === 0 ? '#C2185B' : i % 4 === 1 ? '#40C4B4' : i % 4 === 2 ? '#D4AF37' : '#FFFFFF',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Interactive Technology Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <span className="text-2xl">✨</span>
            <span className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
              Interactive Technology
            </span>
          </motion.div>

          {/* Main Heading - Interactive Dental Visualization */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
          >
            <span className="block">
              <span className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent">
                Interactive
              </span>
            </span>
            <span className={`block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Dental Visualization
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            Explore interactive demos of our cutting-edge dental technology,
            revolutionizing dental care with AI-3D scanning and precision treatments.
          </motion.p>

          {/* Interactive Demo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 max-w-md mx-auto">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white text-2xl border border-white/30 shadow-lg"
                  >
                    ▶
                  </motion.button>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
                        left: `${20 + i * 8}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Demo Info */}
              <div className="text-left">
                <h3 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  Intraoral Scanning
                </h3>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  Experience our revolutionary 3D scanning technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Magenta Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${
        theme === 'light' 
          ? 'from-[#C2185B]/10 via-transparent to-transparent' 
          : 'from-[#C2185B]/20 via-transparent to-transparent'
      }`} />
    </div>
  );
}
