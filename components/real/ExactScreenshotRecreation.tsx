'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ExactScreenshotRecreation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading sequence like in screenshot
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* EXACT Red Emergency Bar from screenshot */}
      <div className="bg-[#FF3B30] text-white py-2 px-4 text-sm flex justify-between items-center relative z-50">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <span>Emergency: 01273 453109</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span>Shoreham-by-Sea, West Sussex</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🕒</span>
            <span>24/7 Emergency Care</span>
          </div>
        </div>
      </div>

      {/* EXACT White Header from screenshot */}
      <header className="bg-white shadow-sm py-4 px-6 relative z-40">
        <div className="flex items-center justify-between">
          {/* EXACT St Mary's House Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white font-bold text-sm">
              SMH
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">St Mary's</h1>
              <h2 className="text-lg font-semibold text-gray-900">House</h2>
              <p className="text-sm text-gray-600">Dental Care</p>
            </div>
          </div>

          {/* EXACT Navigation Menu from screenshot */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium">Home</a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium flex items-center">
                About <span className="ml-1">▼</span>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium flex items-center">
                Treatments <span className="ml-1">▼</span>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium">Team</a>
            <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium">Patient Stories</a>
            <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-[#C2185B] font-medium">Contact</a>
          </nav>

          {/* EXACT CTA Buttons from screenshot */}
          <div className="flex items-center space-x-4">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center">
              📞 Call Now
            </button>
            <button className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
              📅 Book Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* EXACT Diagonal Gradient Background from screenshot */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(135deg, 
              #8B1538 0%, 
              #A0306E 25%, 
              #6B4C93 50%, 
              #4A7C7A 75%, 
              #40C4B4 100%
            )
          `
        }}
      >
        {/* Wave Background Integration */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/waves-bg-2560.webp"
            alt=""
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>

        {/* Floating Particles using brand colors */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      {/* EXACT Loading Screen from screenshot */}
      {isLoading ? (
        <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="text-center">
            {/* EXACT Spinner from screenshot */}
            <motion.div
              className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            {/* EXACT Text from screenshot */}
            <h1 className="text-white text-2xl font-light tracking-wide">
              Loading Luxury Experience...
            </h1>
          </div>
        </div>
      ) : (
        /* COMPLETE HOMEPAGE SECTIONS FROM PHOTOS */
        <div className="relative z-20">
          {/* 3D Technology Showcase Badge */}
          <div className="absolute top-8 left-8 z-30">
            <motion.div
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white text-sm font-medium">3D Technology Showcase</span>
            </motion.div>
          </div>

          {/* EXACT Interactive Dental Visualization Section */}
          <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Main Heading from photo */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span 
                className="bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                Interactive
              </span>
              <br />
              <span className="text-white">Dental Visualization</span>
            </motion.h1>

            {/* Your Perfect Smile Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Your Perfect Smile is Just
              </h2>
              <h3 
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                One Click Away
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Experience the future of coastal dentistry with our AI-powered 3D treatments 
              and award-winning patient care
            </motion.p>

            {/* CTA Buttons from photo */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#C2185B] to-[#8B1538] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>▶️</span>
                <span>Book Free Consultation</span>
              </motion.button>
              
              <motion.button
                className="bg-gradient-to-r from-[#40C4B4] to-[#2D7D7A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try AI Smile Quiz
              </motion.button>
            </motion.div>

            {/* Trust Indicators from photo */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              {/* 24/7 Emergency */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h4 className="text-white font-semibold">24/7 Emergency</h4>
                <p className="text-white/70 text-sm">Always here for you</p>
              </div>

              {/* CQC Outstanding Rating */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#40C4B4] rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-white text-2xl">📅</span>
                </div>
                <h4 className="text-white font-semibold">CQC Outstanding Rating</h4>
                <p className="text-white/70 text-sm">Highest quality care</p>
              </div>

              {/* 98% Patient Satisfaction */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0288D1] rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h4 className="text-white font-semibold">98% Patient Satisfaction</h4>
                <p className="text-white/70 text-sm">Proven results</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* EXACT Floating Action Buttons from screenshot */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {/* Emergency Button */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-3 min-w-[200px]"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Emergency: 01273 453109</span>
            <div className="w-10 h-10 bg-[#FF3B30] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">📞</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Button */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-3 min-w-[200px]"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm font-medium">Quick Actions</span>
            <div className="w-10 h-10 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⚡</span>
            </div>
          </div>
        </motion.div>

        {/* Open Today Button */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-3 min-w-[200px]"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-700 text-sm font-medium">Open Today</span>
              </div>
              <span className="text-gray-500 text-xs">9AM-5PM</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* EXACT Issues Notification from screenshot */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.div
          className="bg-[#FF3B30] text-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-sm font-medium">N</span>
          <span className="text-sm">3 Issues</span>
          <button className="text-white/80 hover:text-white ml-2">✕</button>
        </motion.div>
      </div>

      {/* CHATBOT INTERFACE - RESTORED */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-4 w-80 max-h-96"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {/* Chatbot Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Dental Assistant</h3>
                <p className="text-xs text-green-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Online
                </p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          {/* Chat Messages */}
          <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                👋 Hi! I'm your AI dental assistant. I can help you with:
              </p>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• Book appointments</li>
                <li>• Treatment information</li>
                <li>• Emergency guidance</li>
                <li>• Insurance questions</li>
              </ul>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask me anything about dental care..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2185B]/20"
            />
            <button className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white p-2 rounded-lg hover:shadow-lg transition-all">
              <span className="text-sm">📤</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-3">
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200">
              Book Appointment
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200">
              Emergency Help
            </button>
            <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200">
              Treatment Costs
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
