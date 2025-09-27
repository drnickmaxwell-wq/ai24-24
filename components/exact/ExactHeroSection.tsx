'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExactHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wave Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/logos/waves-bg-2560.jpg"
          alt="Wave Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
            <span 
              className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Luxury Coastal
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Dentistry
          </h2>
        </motion.div>

        {/* Perfect Smile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Your Perfect Smile is Just{' '}
            <span 
              className="bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              One Click Away
            </span>
          </h3>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of dentistry with our AI-powered 3D treatments, 
            luxury coastal setting, and award-winning patient care. 
            Book your consultation today and discover why we're "Going the Extra Smile."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
            >
              <span>📅</span>
              <span>Book Free Consultation</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
            >
              <span>🤖</span>
              <span>Try AI Smile Quiz</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📞</div>
            <div className="text-2xl font-bold text-[#FF3B30]">24/7 Emergency</div>
            <div className="text-sm opacity-90">CQC Outstanding Rating</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📅</div>
            <div className="text-2xl font-bold text-[#40C4B4]">Same-Day Appointments</div>
            <div className="text-sm opacity-90">Same Day Available</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📍</div>
            <div className="text-2xl font-bold text-[#D4AF37]">98% Patient Satisfaction</div>
            <div className="text-sm opacity-90">Coastal Location</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
