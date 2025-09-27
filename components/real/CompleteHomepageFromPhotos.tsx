'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface CompleteHomepageFromPhotosProps {
  theme: 'light' | 'ink';
}

export default function CompleteHomepageFromPhotos({ theme }: CompleteHomepageFromPhotosProps) {
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

    // Complex wave patterns matching the photo
    const drawComplexWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Multiple wave layers with varying opacity and colors
      for (let layer = 0; layer < 8; layer++) {
        const progress = layer / 8;
        const opacity = 0.05 + progress * 0.15;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${320 + progress * 40}, 70%, ${50 + progress * 20}%, ${opacity})`;
        ctx.lineWidth = 0.5 + progress * 1.5;
        
        const amplitude = 80 + progress * 120;
        const frequency = 0.003 + progress * 0.002;
        const speed = 0.5 + progress * 0.8;
        
        for (let x = 0; x <= canvas.width; x += 3) {
          const waveY = canvas.height * 0.3 + 
            Math.sin((x * frequency) + (time * speed) + (progress * Math.PI)) * amplitude +
            Math.sin((x * frequency * 2) + (time * speed * 1.5)) * (amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, waveY);
          } else {
            ctx.lineTo(x, waveY);
          }
        }
        ctx.stroke();
      }

      // Diagonal flow lines
      for (let i = 0; i < 15; i++) {
        const progress = i / 15;
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${180 + progress * 20}, 60%, 60%, ${0.1 + progress * 0.1})`;
        ctx.lineWidth = 0.5;
        
        const startX = -200 + (i * 100);
        const startY = 100 + (i * 30);
        const endX = canvas.width + 200;
        const endY = canvas.height - 100 - (i * 20);
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    };

    const animate = () => {
      drawComplexWaves();
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
      {/* Header */}
      <header className="relative z-50 bg-white shadow-sm">
        {/* Emergency Bar */}
        <div className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white py-2 px-6 text-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span>📞 01273 453109</span>
              <span>📍 Shoreham-by-Sea, West Sussex</span>
              <span>🕒 24/7 Emergency Care</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-red-600 text-white px-4 py-1 rounded text-xs font-medium">
                Emergency: 01273 453109
              </button>
              <button className="bg-[#40C4B4] text-white px-4 py-1 rounded text-xs font-medium">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C2185B] to-[#40C4B4] flex items-center justify-center text-white font-bold">
                <span className="text-xs">SMH</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900 text-lg">St Mary's House</h1>
                <p className="text-sm text-[#40C4B4]">Dental Care</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#C2185B] font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#C2185B] font-medium">About</Link>
              <Link href="/treatments" className="text-gray-700 hover:text-[#C2185B] font-medium">Treatments</Link>
              <Link href="/team" className="text-gray-700 hover:text-[#C2185B] font-medium">Team</Link>
              <Link href="/patient-stories" className="text-gray-700 hover:text-[#C2185B] font-medium">Patient Stories</Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#C2185B] font-medium">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#C2185B] font-medium">Contact</Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 border border-[#40C4B4] text-[#40C4B4] rounded-lg hover:bg-[#40C4B4] hover:text-white transition-colors">
                📞 Call Now
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-lg hover:shadow-lg transition-all font-medium">
                📅 Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section - Interactive Dental Visualization */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A] overflow-hidden">
        {/* Wave Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/waves-bg-2560.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                background: i % 5 === 0 ? '#D4AF37' : i % 5 === 1 ? '#40C4B4' : i % 5 === 2 ? '#FFFFFF' : i % 5 === 3 ? 'rgba(255,255,255,0.6)' : '#C2185B',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-15, 15, -15],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          {/* Interactive Technology Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8"
          >
            <span className="text-2xl">⚡</span>
            <span className="font-medium text-white">3D Technology Showcase</span>
          </motion.div>

          {/* Main Heading - Interactive Dental Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent">
                Interactive
              </span>
              <span className="block text-gray-900 mt-2">Dental Visualization</span>
            </h1>
          </motion.div>

          {/* Perfect Smile CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Your Perfect Smile is Just
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent">
              One Click Away
            </h2>
            
            <p className="text-xl text-white/90 mt-6 mb-8 max-w-3xl mx-auto">
              Experience the future of cosmetic dentistry with our revolutionary 3D scanning 
              and award-winning patient care in our stunning seaside location.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#C2185B] to-[#8B1538] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
              >
                ▶ Book Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#40C4B4] to-[#2D6A6A] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Try AI Smile Quiz
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {/* 24/7 Emergency */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-white text-2xl">
                📞
              </div>
              <h3 className="font-bold text-white text-lg mb-2">24/7 Emergency</h3>
              <p className="text-white/80 text-sm">Always here when you need us</p>
            </div>

            {/* CQC Outstanding Rating */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#40C4B4] to-[#2D6A6A] rounded-full flex items-center justify-center text-white text-2xl">
                📅
              </div>
              <h3 className="font-bold text-white text-lg mb-2">CQC Outstanding Rating</h3>
              <p className="text-white/80 text-sm">Award-winning patient care</p>
            </div>

            {/* 98% Patient Satisfaction */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#C2185B] to-[#8B1538] rounded-full flex items-center justify-center text-white text-2xl">
                ⭐
              </div>
              <h3 className="font-bold text-white text-lg mb-2">98% Patient Satisfaction</h3>
              <p className="text-white/80 text-sm">Exceptional results guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Cards Section - Luxury Coastal Dentistry */}
      <section className="relative z-10 py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#C2185B] via-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent">
                Luxury Coastal Dentistry
              </span>
            </h2>
            <p className="text-xl text-gray-600">Where Innovation Meets Elegance</p>
          </motion.div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 3D Digital Dentistry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#40C4B4] to-[#8B5A96] flex items-center justify-center text-white text-4xl shadow-2xl group-hover:scale-110 transition-transform">
                🦷
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3D Digital Dentistry</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience the future with our cutting-edge 3D scanning and treatment planning technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#40C4B4] to-[#8B5A96] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Explore 3D Tech
              </motion.button>
            </motion.div>

            {/* Porcelain Veneers */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#40C4B4] to-[#D4AF37] flex items-center justify-center text-white text-4xl shadow-2xl group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Porcelain Veneers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your smile with our luxury porcelain veneers and cosmetic treatments.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Perfect Your Smile
              </motion.button>
            </motion.div>

            {/* Dental Implants */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C2185B] flex items-center justify-center text-white text-4xl shadow-2xl group-hover:scale-110 transition-transform">
                🦷
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dental Implants</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Restore your confidence with our premium dental implant solutions and expertise.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C2185B] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Restore Your Smile
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A]">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: i % 4 === 0 ? '#D4AF37' : i % 4 === 1 ? '#FFFFFF' : i % 4 === 2 ? 'rgba(255,255,255,0.6)' : 'rgba(212,175,55,0.8)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Technology Cards */}
            <div className="space-y-6">
              {/* Start Interactive Demo Button */}
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-full bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-left border border-white/30 hover:bg-white/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-xl flex items-center justify-center text-white">
                    ▶
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Start Interactive Demo</h3>
                    <p className="text-white/80 text-sm">Experience our revolutionary 3D scanning</p>
                  </div>
                </div>
              </motion.button>

              {/* AI-Powered Diagnosis */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#40C4B4] rounded-xl flex items-center justify-center text-white">
                    ⚡
                  </div>
                  <h3 className="text-white font-semibold text-lg">AI-Powered Diagnosis</h3>
                </div>
                <p className="text-white/80">Advanced AI analyzes your dental health instantly with precision accuracy</p>
              </motion.div>

              {/* Smile Preview Technology */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center text-white">
                    💎
                  </div>
                  <h3 className="text-white font-semibold text-lg">Smile Preview Technology</h3>
                </div>
                <p className="text-white/80">See your perfect smile before treatment begins with our advanced modeling</p>
              </motion.div>
            </div>

            {/* Right Side - 3D Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white text-3xl shadow-xl"
                  >
                    ▶
                  </motion.button>
                </div>
                
                {/* Demo Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-3 h-3 bg-[#C2185B] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#40C4B4] rounded-full"></div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">3D Intraoral Scanning</h3>
                <p className="text-white/80 mb-6">Interactive demo showcasing our advanced technology</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-xl font-medium shadow-lg"
                >
                  Start Demo
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-12 py-4 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full font-medium text-lg shadow-xl flex items-center gap-3 mx-auto"
            >
              ✨ Learn More About Our Technology →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A] text-white py-16">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                background: i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-8, 8, -8],
                x: [-4, 4, -4],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">St Mary's House Dental Care</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Experience luxury coastal dentistry with our AI-powered 3D treatments, 
                award-winning patient care, and stunning seaside location.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  📘
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  📷
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  🐦
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">01273 453109</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@stmaryshousedental.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-white/80">1 St Mary's House, Shoreham-by-Sea, West Sussex BN43 5ZA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-xl font-semibold mb-4">🕒 Opening Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-300">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-white/80 hover:text-white transition-colors">About Us</Link>
                <Link href="/treatments" className="block text-white/80 hover:text-white transition-colors">Treatments</Link>
                <Link href="/team" className="block text-white/80 hover:text-white transition-colors">Team</Link>
                <Link href="/patient-stories" className="block text-white/80 hover:text-white transition-colors">Patient Stories</Link>
                <Link href="/blog" className="block text-white/80 hover:text-white transition-colors">Blog</Link>
                <Link href="/contact" className="block text-white/80 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Treatment Links */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <h4 className="text-xl font-semibold mb-4 text-center">Our Treatments</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['3D Digital Dentistry', 'Porcelain Veneers', 'Dental Implants', 'Teeth Whitening', 'Emergency Dentist', 'Anxiety Dentistry'].map((treatment) => (
                <button key={treatment} className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  {treatment}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 St Mary's House Dental Care. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-3 text-center font-medium">
          Dental Emergency? Call us 24/7: 01273 453109
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 z-50 space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg px-4 py-2 shadow-lg text-gray-700 text-sm font-medium flex items-center gap-2"
        >
          Emergency: 01273 453109
          <div className="w-10 h-10 bg-[#C2185B] rounded-full flex items-center justify-center text-white">
            📞
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg px-4 py-2 shadow-lg text-gray-700 text-sm font-medium flex items-center gap-2"
        >
          Quick Actions
          <div className="w-10 h-10 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white">
            ⚡
          </div>
        </motion.button>

        <motion.div className="bg-white rounded-lg px-4 py-2 shadow-lg text-gray-700 text-sm font-medium flex items-center gap-2">
          🕒 Open Today 9AM-5PM
        </motion.div>

        <motion.div className="bg-[#C2185B] text-white rounded-lg px-3 py-2 shadow-lg text-sm font-medium flex items-center gap-2">
          <span className="w-6 h-6 bg-white text-[#C2185B] rounded-full flex items-center justify-center text-xs font-bold">N</span>
          3 Issues
          <button className="ml-2 text-white hover:text-gray-200">✕</button>
        </motion.div>
      </div>
    </div>
  );
}
