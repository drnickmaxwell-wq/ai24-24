'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface EnhancedLuxuryHomepageProps {
  theme: 'light' | 'ink';
}

export default function EnhancedLuxuryHomepage({ theme }: EnhancedLuxuryHomepageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Extended for full page coverage
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced complex wave patterns with more sophistication
    const drawEnhancedWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Multiple sophisticated wave layers
      for (let layer = 0; layer < 15; layer++) {
        const progress = layer / 15;
        const opacity = 0.03 + progress * 0.12;
        
        ctx.beginPath();
        
        // Enhanced color palette with more luxury
        const hue = 320 + progress * 60; // Magenta to teal range
        const saturation = 60 + progress * 30;
        const lightness = 40 + progress * 30;
        
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
        ctx.lineWidth = 0.3 + progress * 2;
        
        const amplitude = 60 + progress * 150;
        const frequency = 0.002 + progress * 0.003;
        const speed = 0.3 + progress * 1.2;
        const phase = progress * Math.PI * 2;
        
        for (let x = 0; x <= canvas.width; x += 2) {
          const waveY = canvas.height * 0.25 + 
            Math.sin((x * frequency) + (time * speed) + phase) * amplitude +
            Math.sin((x * frequency * 1.5) + (time * speed * 0.7) + phase) * (amplitude * 0.4) +
            Math.sin((x * frequency * 0.5) + (time * speed * 1.8) + phase) * (amplitude * 0.2);
          
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
      }

      // Enhanced diagonal flow lines with more complexity
      for (let i = 0; i < 25; i++) {
        const progress = i / 25;
        ctx.beginPath();
        
        const hue = 180 + progress * 40;
        const opacity = 0.05 + progress * 0.15;
        
        ctx.strokeStyle = `hsla(${hue}, 70%, 65%, ${opacity})`;
        ctx.lineWidth = 0.3 + progress * 0.8;
        
        const startX = -300 + (i * 80) + Math.sin(time + i) * 50;
        const startY = 50 + (i * 25) + Math.cos(time * 0.5 + i) * 30;
        const endX = canvas.width + 300;
        const endY = canvas.height - 50 - (i * 15) + Math.sin(time * 0.8 + i) * 40;
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Additional luxury geometric patterns
      for (let i = 0; i < 8; i++) {
        const progress = i / 8;
        const centerX = canvas.width * (0.2 + progress * 0.6);
        const centerY = canvas.height * (0.3 + progress * 0.4);
        const radius = 20 + progress * 40;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${45 + progress * 30}, 80%, 70%, ${0.05 + progress * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      drawEnhancedWaves();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const bgClass = theme === 'light' 
    ? 'bg-white'
    : 'bg-gradient-to-br from-[#0F172A] via-[#1a1a2e] to-[#16213e]';

  return (
    <div className={`min-h-screen relative ${bgClass}`}>
      {/* Enhanced Header */}
      <header className="relative z-50 bg-white shadow-lg">
        {/* Enhanced Emergency Bar */}
        <div className="bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] text-white py-3 px-6 text-sm relative overflow-hidden">
          {/* Floating particles in header */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  x: [-2, 2, -2],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
            <div className="flex items-center gap-8">
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                📞 01273 453109
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                📍 Shoreham-by-Sea, West Sussex
              </motion.span>
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                🕒 24/7 Emergency Care
              </motion.span>
            </div>
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Emergency: 01273 453109
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#40C4B4] text-white px-6 py-2 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Book Consultation
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Main Header */}
        <div className="max-w-7xl mx-auto px-6 py-5 relative">
          {/* Subtle floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.1,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between relative z-10">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <motion.div 
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C2185B] via-[#8B1538] to-[#40C4B4] flex items-center justify-center text-white font-bold shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm">SMH</span>
              </motion.div>
              <div className="group-hover:scale-105 transition-transform">
                <h1 className="font-bold text-gray-900 text-xl">St Mary's House</h1>
                <p className="text-sm bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent font-medium">
                  Dental Care
                </p>
              </div>
            </Link>

            {/* Enhanced Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {['Home', 'About', 'Treatments', 'Team', 'Patient Stories', 'Blog', 'Contact'].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.05 }}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-[#C2185B] hover:to-[#40C4B4] hover:bg-clip-text font-medium transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 border-2 border-[#40C4B4] text-[#40C4B4] rounded-xl hover:bg-[#40C4B4] hover:text-white transition-all duration-300 font-medium shadow-lg"
              >
                📞 Call Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] text-white rounded-xl hover:shadow-2xl transition-all font-medium shadow-xl"
              >
                📅 Book Free Consultation
              </motion.button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative">
        {/* Full-Width Hero Section - RESTORED */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A]">
          {/* Enhanced Particle System */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 200 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Loading Content */}
          <div className="relative z-10 text-center text-white">
            {/* Loading Spinner */}
            <motion.div
              className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Loading Text */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Loading Luxury Experience...
            </motion.h1>
            
            {/* Progress Dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Dental Visualization Section - MOVED DOWN */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A]">
        {/* Enhanced Wave Background Image with overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('/waves-bg-2560.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Enhanced Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
        />

        {/* Enhanced Floating Particles System */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 8}px`,
                height: `${1 + Math.random() * 8}px`,
                background: i % 6 === 0 ? '#D4AF37' : 
                           i % 6 === 1 ? '#40C4B4' : 
                           i % 6 === 2 ? '#FFFFFF' : 
                           i % 6 === 3 ? 'rgba(255,255,255,0.7)' : 
                           i % 6 === 4 ? '#C2185B' : 'rgba(212,175,55,0.8)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: i % 4 === 0 ? '0 0 20px rgba(212,175,55,0.5)' : 
                          i % 4 === 1 ? '0 0 15px rgba(64,196,180,0.4)' : 
                          i % 4 === 2 ? '0 0 10px rgba(255,255,255,0.3)' : '0 0 12px rgba(194,24,91,0.4)',
              }}
              animate={{
                y: [-40, 40, -40],
                x: [-20, 20, -20],
                opacity: [0.2, 1, 0.2],
                scale: [0.6, 1.4, 0.6],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Geometric Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div 
                className="w-8 h-8 border border-white/20 rounded-lg"
                style={{
                  background: i % 3 === 0 ? 'rgba(212,175,55,0.1)' : 
                             i % 3 === 1 ? 'rgba(64,196,180,0.1)' : 'rgba(194,24,91,0.1)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          {/* Enhanced Interactive Technology Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/25 backdrop-blur-md rounded-full border border-white/40 mb-10 shadow-2xl"
          >
            <motion.span 
              className="text-3xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.span>
            <span className="font-semibold text-white text-lg">3D Technology Showcase</span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <motion.span 
                className="block bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Interactive
              </motion.span>
              <span className="block text-gray-900 mt-4 drop-shadow-2xl">Dental Visualization</span>
            </h1>
          </motion.div>

          {/* Enhanced Perfect Smile CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
              Your Perfect Smile is Just
            </h2>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#40C4B4] via-[#D4AF37] to-[#40C4B4] bg-clip-text text-transparent mb-4"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              One Click Away
            </motion.h2>
            
            <p className="text-xl text-white/95 mt-8 mb-6 max-w-4xl mx-auto leading-relaxed">
              Experience the future of cosmetic dentistry with our revolutionary 3D scanning 
              and award-winning patient care in our stunning seaside location.
            </p>
            
            <motion.p 
              className="text-lg text-white/90 mb-12 max-w-3xl mx-auto italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Book your consultation today and discover why we're "Going the Extra Smile."
            </motion.p>

            {/* Enhanced Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(194,24,91,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#C2185B] text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-4 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">▶</span>
                <span className="relative">Book Free Consultation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(64,196,180,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#40C4B4] via-[#2D6A6A] to-[#40C4B4] text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Try AI Smile Quiz</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
          >
            {/* 24/7 Emergency */}
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-white text-3xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📞
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="font-bold text-white text-xl mb-3">24/7 Emergency</h3>
              <p className="text-white/90 text-sm">Always here when you need us</p>
            </motion.div>

            {/* CQC Outstanding Rating */}
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#40C4B4] to-[#2D6A6A] rounded-full flex items-center justify-center text-white text-3xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📅
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="font-bold text-white text-xl mb-3">CQC Outstanding Rating</h3>
              <p className="text-white/90 text-sm">Award-winning patient care</p>
            </motion.div>

            {/* 98% Patient Satisfaction */}
            <motion.div 
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C2185B] to-[#8B1538] rounded-full flex items-center justify-center text-white text-3xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  ⭐
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="font-bold text-white text-xl mb-3">98% Patient Satisfaction</h3>
              <p className="text-white/90 text-sm">Exceptional results guaranteed</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Treatment Cards Section */}
      <section className="relative z-10 py-32 px-6 bg-white overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: i % 4 === 0 ? 'rgba(194,24,91,0.1)' : 
                           i % 4 === 1 ? 'rgba(64,196,180,0.1)' : 
                           i % 4 === 2 ? 'rgba(212,175,55,0.1)' : 'rgba(139,21,56,0.1)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl md:text-7xl font-bold mb-6"
              whileInView={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-[#C2185B] via-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent">
                Luxury Coastal Dentistry
              </span>
            </motion.h2>
            <p className="text-2xl text-gray-600 font-light">Where Innovation Meets Elegance</p>
          </motion.div>

          {/* Enhanced Treatment Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* 3D Digital Dentistry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group relative"
            >
              {/* Floating elements around card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#40C4B4] to-[#8B5A96] opacity-20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-15, 15, -15],
                      x: [-8, 8, -8],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <motion.div 
                className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#40C4B4] to-[#8B5A96] flex items-center justify-center text-white text-5xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🦷
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#40C4B4] group-hover:to-[#8B5A96] group-hover:bg-clip-text transition-all">
                3D Digital Dentistry
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Experience the future with our cutting-edge 3D scanning and treatment planning technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(64,196,180,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#40C4B4] to-[#8B5A96] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Explore 3D Tech</span>
              </motion.button>
            </motion.div>

            {/* Porcelain Veneers */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group relative"
            >
              {/* Floating elements around card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] opacity-20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-15, 15, -15],
                      x: [-8, 8, -8],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <motion.div 
                className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#40C4B4] to-[#D4AF37] flex items-center justify-center text-white text-5xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#40C4B4] group-hover:to-[#D4AF37] group-hover:bg-clip-text transition-all">
                Porcelain Veneers
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Transform your smile with our luxury porcelain veneers and cosmetic treatments.
              </p>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(212,175,55,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Perfect Your Smile</span>
              </motion.button>
            </motion.div>

            {/* Dental Implants */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center group relative"
            >
              {/* Floating elements around card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C2185B] opacity-20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-15, 15, -15],
                      x: [-8, 8, -8],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <motion.div 
                className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C2185B] flex items-center justify-center text-white text-5xl shadow-2xl group-hover:shadow-3xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ 
                    y: [-2, 2, -2],
                    rotateX: [0, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🦷
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#C2185B] group-hover:bg-clip-text transition-all">
                Dental Implants
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Restore your confidence with our premium dental implant solutions and expertise.
              </p>
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(194,24,91,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C2185B] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all text-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Restore Your Smile</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Technology Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A] overflow-hidden">
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                background: i % 5 === 0 ? '#D4AF37' : 
                           i % 5 === 1 ? '#FFFFFF' : 
                           i % 5 === 2 ? 'rgba(255,255,255,0.7)' : 
                           i % 5 === 3 ? 'rgba(212,175,55,0.8)' : 'rgba(64,196,180,0.6)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: i % 3 === 0 ? '0 0 15px rgba(212,175,55,0.4)' : 
                          i % 3 === 1 ? '0 0 10px rgba(255,255,255,0.3)' : '0 0 12px rgba(64,196,180,0.3)',
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-8, 8, -8],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Left Side - Technology Cards */}
            <div className="space-y-8">
              {/* Start Interactive Demo Button */}
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                className="w-full bg-white/25 backdrop-blur-lg rounded-3xl p-8 text-left border border-white/40 hover:bg-white/35 transition-all shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex items-center gap-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-2xl flex items-center justify-center text-white shadow-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">▶</span>
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">Start Interactive Demo</h3>
                    <p className="text-white/90 text-lg">Experience our revolutionary 3D scanning technology</p>
                  </div>
                </div>
              </motion.button>

              {/* AI-Powered Diagnosis */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/25 backdrop-blur-lg rounded-3xl p-8 border border-white/40 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-[#40C4B4] rounded-2xl flex items-center justify-center text-white shadow-xl"
                    animate={{ 
                      boxShadow: ['0 0 20px rgba(64,196,180,0.3)', '0 0 30px rgba(64,196,180,0.6)', '0 0 20px rgba(64,196,180,0.3)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>
                  <h3 className="text-white font-bold text-2xl">AI-Powered Diagnosis</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed relative z-10">
                  Advanced AI analyzes your dental health instantly with precision accuracy and detailed insights
                </p>
              </motion.div>

              {/* Smile Preview Technology */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/25 backdrop-blur-lg rounded-3xl p-8 border border-white/40 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-white shadow-xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 30px rgba(212,175,55,0.6)', '0 0 20px rgba(212,175,55,0.3)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-2xl">💎</span>
                  </motion.div>
                  <h3 className="text-white font-bold text-2xl">Smile Preview Technology</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed relative z-10">
                  See your perfect smile before treatment begins with our advanced 3D modeling and visualization
                </p>
              </motion.div>
            </div>

            {/* Enhanced Right Side - 3D Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/15 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl relative overflow-hidden"
            >
              {/* Floating elements inside demo */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-white/20"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl mb-8 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: ['0 0 30px rgba(194,24,91,0.4)', '0 0 50px rgba(64,196,180,0.6)', '0 0 30px rgba(194,24,91,0.4)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-24 h-24 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white text-4xl shadow-2xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative">▶</span>
                  </motion.button>
                </div>
                
                {/* Enhanced Demo Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                  <motion.div 
                    className="w-4 h-4 bg-[#C2185B] rounded-full shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-4 h-4 bg-[#D4AF37] rounded-full shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div 
                    className="w-4 h-4 bg-[#40C4B4] rounded-full shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>

              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">3D Intraoral Scanning</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Interactive demo showcasing our advanced scanning technology and treatment planning
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(194,24,91,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-2xl font-semibold shadow-2xl text-lg relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative">Start Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(194,24,91,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-5 bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] text-white rounded-full font-semibold text-xl shadow-2xl flex items-center gap-4 mx-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                ✨
              </motion.span>
              <span className="relative">Learn More About Our Technology →</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A] text-white py-20 overflow-hidden">
        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: i % 4 === 0 ? '#D4AF37' : 
                           i % 4 === 1 ? '#FFFFFF' : 
                           i % 4 === 2 ? 'rgba(255,255,255,0.6)' : 'rgba(212,175,55,0.7)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-12, 12, -12],
                x: [-6, 6, -6],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Enhanced Geometric Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <div 
                className="w-12 h-12 border border-white/20 rounded-2xl backdrop-blur-sm"
                style={{
                  background: i % 3 === 0 ? 'rgba(212,175,55,0.1)' : 
                             i % 3 === 1 ? 'rgba(64,196,180,0.1)' : 'rgba(194,24,91,0.1)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-1">
              <motion.h3 
                className="text-3xl font-bold mb-6"
                whileInView={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent">
                  St Mary's House
                </span>
                <br />
                <span className="text-white">Dental Care</span>
              </motion.h3>
              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                Experience luxury coastal dentistry with our AI-powered 3D treatments, 
                award-winning patient care, and stunning seaside location.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: '📘', color: 'from-blue-500 to-blue-600' },
                  { icon: '📷', color: 'from-pink-500 to-red-500' },
                  { icon: '🐦', color: 'from-sky-400 to-blue-500' }
                ].map((social, index) => (
                  <motion.div 
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white text-lg">{social.icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-white">Contact Information</h4>
              <div className="space-y-6">
                {[
                  { icon: '📞', label: 'Phone', value: '01273 453109' },
                  { icon: '✉️', label: 'Email', value: 'info@stmaryshousedental.co.uk' },
                  { icon: '📍', label: 'Address', value: '1 St Mary\'s House, Shoreham-by-Sea, West Sussex BN43 5ZA' }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{contact.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-lg">{contact.label}</p>
                      <p className="text-white/90">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Opening Hours */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span>🕒</span> Opening Hours
              </h4>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Thursday', time: '9:00 AM - 5:00 PM' },
                  { day: 'Friday', time: '9:00 AM - 4:00 PM' },
                  { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
                  { day: 'Sunday', time: 'Closed', closed: true }
                ].map((schedule, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-white/10"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="text-white/90">{schedule.day}</span>
                    <span className={schedule.closed ? 'text-red-300 font-medium' : 'text-white font-medium'}>
                      {schedule.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['About Us', 'Treatments', 'Team', 'Patient Stories', 'Blog', 'Contact'].map((link) => (
                  <motion.div key={link} whileHover={{ x: 5 }}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`} 
                      className="block text-white/90 hover:text-white transition-colors text-lg hover:text-transparent hover:bg-gradient-to-r hover:from-[#C2185B] hover:to-[#40C4B4] hover:bg-clip-text"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Treatment Links */}
          <div className="border-t border-white/20 pt-12 mb-12">
            <h4 className="text-2xl font-bold mb-8 text-center text-white">Our Treatments</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['3D Digital Dentistry', 'Porcelain Veneers', 'Dental Implants', 'Teeth Whitening', 'Emergency Dentist', 'Anxiety Dentistry'].map((treatment) => (
                <motion.button 
                  key={treatment} 
                  className="px-6 py-3 bg-white/15 backdrop-blur-sm rounded-xl text-sm hover:bg-white/25 transition-all border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {treatment}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Copyright */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">© 2025 St Mary's House Dental Care. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                <Link 
                  key={policy}
                  href={`/${policy.toLowerCase().replace(' ', '-')}`} 
                  className="text-white/70 hover:text-white text-sm transition-colors hover:text-transparent hover:bg-gradient-to-r hover:from-[#C2185B] hover:to-[#40C4B4] hover:bg-clip-text"
                >
                  {policy}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Emergency Banner */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 text-center font-semibold text-lg shadow-2xl"
          animate={{ 
            boxShadow: ['0 -5px 20px rgba(220,38,38,0.3)', '0 -5px 30px rgba(220,38,38,0.6)', '0 -5px 20px rgba(220,38,38,0.3)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Dental Emergency? Call us 24/7: 01273 453109
          </motion.span>
        </motion.div>
      </footer>

      {/* Enhanced Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 z-50 space-y-4">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(194,24,91,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-2xl px-6 py-3 shadow-2xl text-gray-700 text-sm font-semibold flex items-center gap-3 backdrop-blur-sm border border-gray-200"
        >
          <span>Emergency: 01273 453109</span>
          <motion.div 
            className="w-12 h-12 bg-[#C2185B] rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ 
              boxShadow: ['0 0 15px rgba(194,24,91,0.3)', '0 0 25px rgba(194,24,91,0.6)', '0 0 15px rgba(194,24,91,0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📞
          </motion.div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(64,196,180,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-2xl px-6 py-3 shadow-2xl text-gray-700 text-sm font-semibold flex items-center gap-3 backdrop-blur-sm border border-gray-200"
        >
          <span>Quick Actions</span>
          <motion.div 
            className="w-12 h-12 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white shadow-lg"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.div>
        </motion.button>

        <motion.div 
          className="bg-white rounded-2xl px-6 py-3 shadow-2xl text-gray-700 text-sm font-semibold flex items-center gap-3 backdrop-blur-sm border border-gray-200"
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🕒 Open Today 9AM-5PM
        </motion.div>

        <motion.div 
          className="bg-[#C2185B] text-white rounded-2xl px-4 py-3 shadow-2xl text-sm font-semibold flex items-center gap-3 relative"
          animate={{ 
            boxShadow: ['0 5px 20px rgba(194,24,91,0.3)', '0 5px 30px rgba(194,24,91,0.6)', '0 5px 20px rgba(194,24,91,0.3)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-8 h-8 bg-white text-[#C2185B] rounded-full flex items-center justify-center text-xs font-bold">N</span>
          <span>3 Issues</span>
          <button className="ml-2 text-white hover:text-gray-200 transition-colors">✕</button>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white shadow-2xl"
        >
          ↑
        </motion.button>
      </div>
    </div>
  );
}
