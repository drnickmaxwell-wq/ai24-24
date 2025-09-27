'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface InteractiveHeroProps {
  theme: 'light' | 'ink';
}

export default function InteractiveHero({ theme }: InteractiveHeroProps) {
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

    // Flowing line patterns
    const drawFlowingLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      const lines = 50;
      
      for (let i = 0; i < lines; i++) {
        const progress = i / lines;
        const y = canvas.height * 0.3 + Math.sin(time + progress * Math.PI * 2) * 100;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${320 + progress * 60}, 70%, 60%, ${0.1 + progress * 0.3})`;
        ctx.lineWidth = 1 + progress * 2;
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const waveY = y + Math.sin((x * 0.01) + (time * 2) + (progress * Math.PI)) * 50;
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
      drawFlowingLines();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const bgGradient = theme === 'light' 
    ? 'from-pink-100 via-purple-50 to-teal-100'
    : 'from-[#0B1020] via-purple-900/20 to-teal-900/20';

  return (
    <section className={`relative h-screen overflow-hidden bg-gradient-to-br ${bgGradient}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: theme === 'light' ? 'multiply' : 'screen' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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

          {/* Main Heading */}
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
            revolutionizing dental care with AI-3D scanning and...
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
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl border border-white/30"
                  >
                    ▶
                  </motion.button>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#40C4B4] rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
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

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${
        theme === 'light' 
          ? 'from-white/20 via-transparent to-transparent' 
          : 'from-[#0B1020]/40 via-transparent to-transparent'
      }`} />
    </section>
  );
}
