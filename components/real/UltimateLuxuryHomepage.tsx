'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function UltimateLuxuryHomepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Enhanced Particle System - 250+ particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 250 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 4 === 0 ? '#C2185B' : i % 4 === 1 ? '#40C4B4' : i % 4 === 2 ? '#D4AF37' : '#ffffff',
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        {/* Emergency Bar */}
        <div className="bg-gradient-to-r from-[#C2185B] to-[#8B1538] text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Dental Emergency? Call 24/7: 01273 453109
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span>🏆 CQC Outstanding Rating</span>
              <span>⭐ 98% Patient Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SMH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">St Mary's House</h1>
                <p className="text-sm text-gray-600">Luxury Coastal Dentistry</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#C2185B] transition-colors">Home</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-[#C2185B] transition-colors">Treatments</a>
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-96 bg-white/95 backdrop-blur-md shadow-2xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-[#C2185B] mb-3">General Dentistry</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Check-ups & Hygiene</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Fillings & Restorations</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Root Canal Treatment</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Emergency Dentistry</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#C2185B] mb-3">Cosmetic Dentistry</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Porcelain Veneers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Teeth Whitening</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Smile Makeovers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-[#40C4B4] transition-colors">Dental Implants</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-[#C2185B] transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-[#C2185B] transition-colors">Contact</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full hover:shadow-xl transition-all"
              >
                Book Appointment
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Width Hero Section - RESTORED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] via-[#4A5B7A] to-[#2D6A6A]">
        {/* Enhanced Wave Background Layers - 30+ layers */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(${45 + i * 12}deg, transparent 30%, rgba(194, 24, 91, ${0.1 + i * 0.02}) 50%, transparent 70%)`,
                transform: `translateY(${i * 2}px)`,
              }}
              animate={{
                x: [0, 100, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <motion.div 
          className="relative z-20 text-center text-white"
          style={{ y, opacity }}
        >
          {isLoading ? (
            <>
              {/* Enhanced Loading Spinner */}
              <motion.div
                className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full mx-auto mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Loading Text */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Loading Luxury Experience...
              </motion.h1>
              
              {/* Enhanced Progress Dots */}
              <div className="flex justify-center space-x-3 mb-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 bg-gradient-to-r from-[#D4AF37] to-white rounded-full"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Loading Progress Bar */}
              <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C2185B] to-[#40C4B4]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
                Welcome to Luxury
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Experience the future of coastal dentistry
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
                onClick={() => setShowContent(true)}
              >
                Enter Experience
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Main Content - Only show after hero interaction */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Interactive Dental Visualization Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A]">
            {/* Enhanced Wave Background Image */}
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: `url('/waves-bg-2560.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

            {/* Complex Wave Animation Layers */}
            <div className="absolute inset-0">
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${90 + i * 15}deg, transparent 20%, rgba(64, 196, 180, ${0.05 + i * 0.01}) 50%, transparent 80%)`,
                  }}
                  animate={{
                    x: [0, 200, -100, 0],
                    y: [0, -50, 50, 0],
                    rotate: [0, 10, -5, 0],
                  }}
                  transition={{
                    duration: 12 + i * 0.8,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
              {/* Technology Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white mb-8 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="w-2 h-2 bg-[#40C4B4] rounded-full mr-3 animate-pulse"></span>
                3D Technology Showcase
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-[#C2185B] via-[#D4AF37] to-[#40C4B4] bg-clip-text text-transparent">
                  Interactive Dental
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#40C4B4] via-[#D4AF37] to-[#C2185B] bg-clip-text text-transparent">
                  Visualization
                </span>
              </motion.h1>

              {/* Interactive Demo Card */}
              <motion.div
                className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#C2185B]/20 to-[#40C4B4]/20 rounded-2xl flex items-center justify-center mb-6">
                  <motion.div
                    className="text-6xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🦷
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Experience 3D Dental Technology
                </h3>
                <p className="text-white/80 text-center mb-6">
                  Visualize your perfect smile with our advanced 3D imaging and AI-powered treatment planning
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#C2185B] to-[#8B1538] text-white rounded-xl hover:shadow-xl transition-all"
                  >
                    ▶️ Start Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    📱 Try AR Scanner
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Your Perfect Smile CTA Section */}
          <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#C2185B] via-[#8B1538] via-[#6B2C5C] to-[#40C4B4]">
            {/* Enhanced Floating Particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 150 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 3 === 0 ? '#D4AF37' : i % 3 === 1 ? '#ffffff' : '#40C4B4',
                    boxShadow: '0 0 10px currentColor',
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, Math.random() * 40 - 20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              {/* Trust Badge */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white mb-8 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-yellow-400 mr-2">⭐</span>
                Trust & Results
              </motion.div>

              {/* Main CTA Heading */}
              <motion.h2
                className="text-6xl md:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white">Your Perfect Smile is Just</span>
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#40C4B4] bg-clip-text text-transparent">
                  One Click Away
                </span>
              </motion.h2>

              {/* Tagline */}
              <motion.p
                className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Going the Extra Smile - Experience luxury coastal dentistry with cutting-edge technology
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#C2185B] rounded-xl hover:shadow-2xl transition-all font-bold text-lg"
                >
                  📅 Book Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] text-white rounded-xl hover:shadow-2xl transition-all font-bold text-lg"
                >
                  🤖 Try AI Smile Quiz
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: "📞", title: "24/7 Emergency", subtitle: "Call us anytime", color: "from-yellow-400 to-orange-500" },
                  { icon: "📅", title: "Same Day Available", subtitle: "Book today, seen today", color: "from-[#40C4B4] to-[#2D6A6A]" },
                  { icon: "📍", title: "Coastal Location", subtitle: "98% Patient Satisfaction", color: "from-[#C2185B] to-[#8B1538]" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Luxury Coastal Dentistry Treatment Cards */}
          <section className="relative py-32 bg-white overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              {/* Section Heading */}
              <motion.h2
                className="text-6xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-[#C2185B] via-[#D4AF37] to-[#40C4B4] bg-clip-text text-transparent">
                  Luxury Coastal Dentistry
                </span>
              </motion.h2>

              <motion.p
                className="text-2xl text-gray-600 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Where Innovation Meets Elegance
              </motion.p>

              {/* Treatment Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "3D Digital Dentistry",
                    description: "Advanced 3D scanning and digital treatment planning for precision results",
                    gradient: "from-[#40C4B4] to-[#6B2C5C]",
                    icon: "🦷"
                  },
                  {
                    title: "Porcelain Veneers",
                    description: "Transform your smile with custom-crafted porcelain veneers",
                    gradient: "from-[#40C4B4] to-[#D4AF37]",
                    icon: "✨"
                  },
                  {
                    title: "Dental Implants",
                    description: "Permanent tooth replacement solutions with natural-looking results",
                    gradient: "from-[#D4AF37] to-[#C2185B]",
                    icon: "🦷"
                  }
                ].map((treatment, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {/* Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                      {/* Circular Gradient Icon */}
                      <div className={`w-24 h-24 bg-gradient-to-br ${treatment.gradient} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                        {treatment.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{treatment.description}</p>

                      {/* Gradient Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 bg-gradient-to-r ${treatment.gradient} text-white rounded-xl font-semibold hover:shadow-xl transition-all`}
                      >
                        Learn More
                      </motion.button>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#40C4B4] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#C2185B] to-[#8B1538] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Footer */}
          <footer className="relative bg-gradient-to-br from-[#8B1538] via-[#6B2C5C] to-[#2D6A6A] text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="relative z-10 bg-gradient-to-r from-[#C2185B] to-[#8B1538] py-4">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                  className="text-lg font-semibold"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚨 Dental Emergency? Call us 24/7: 01273 453109 🚨
                </motion.p>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SMH</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">St Mary's House</h3>
                      <p className="text-white/80 text-sm">Luxury Coastal Dentistry</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Experience luxury coastal dentistry with our AI-powered 3D treatments, award-winning patient care, and stunning seaside location.
                  </p>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <div className="space-y-3 text-white/80">
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      01273 453109
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">✉️</span>
                      hello@stmaryshouse.co.uk
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📍</span>
                      Brighton Marina, BN2 5WA
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
                  <div className="space-y-2 text-white/80">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-[#D4AF37] font-semibold">Emergency: 24/7</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Treatments</h4>
                  <div className="space-y-2 text-white/80">
                    <a href="#" className="block hover:text-[#40C4B4] transition-colors">3D Digital Dentistry</a>
                    <a href="#" className="block hover:text-[#40C4B4] transition-colors">Porcelain Veneers</a>
                    <a href="#" className="block hover:text-[#40C4B4] transition-colors">Dental Implants</a>
                    <a href="#" className="block hover:text-[#40C4B4] transition-colors">Teeth Whitening</a>
                    <a href="#" className="block hover:text-[#40C4B4] transition-colors">Emergency Dentist</a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm">
                  © 2024 St Mary's House Dental Practice. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-white/60 hover:text-[#40C4B4] transition-colors">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-[#40C4B4] transition-colors">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-[#40C4B4] transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white shadow-xl z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </motion.button>
          </footer>
        </motion.div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {[
          { icon: "📞", label: "Emergency", subtitle: "01273 453109", color: "from-red-500 to-red-600" },
          { icon: "⚡", label: "Quick Actions", subtitle: "Book & More", color: "from-[#C2185B] to-[#40C4B4]" },
          { icon: "🕒", label: "Open Today", subtitle: "9AM-5PM", color: "from-green-500 to-green-600" },
          { icon: "🔔", label: "3 Issues", subtitle: "Notifications", color: "from-orange-500 to-red-500" }
        ].map((action, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-2xl shadow-xl cursor-pointer group max-w-xs`}
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{action.icon}</span>
              <div className="hidden group-hover:block">
                <p className="font-semibold text-sm">{action.label}</p>
                <p className="text-xs opacity-90">{action.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
