'use client';

import { motion } from 'framer-motion';

export function ExactPixelPerfectHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        {/* Main Hero Text - Exact positioning and sizing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-6">
            <span 
              className="bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] bg-clip-text text-transparent block"
              style={{ 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              Luxury Coastal
            </span>
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none text-white">
            Dentistry
          </h2>
        </motion.div>

        {/* Perfect Smile Section - Exact match to screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Your Perfect Smile is Just{' '}
            <span 
              className="bg-gradient-to-r from-[#40C4B4] via-[#2D7D7A] to-[#D4AF37] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              One Click Away
            </span>
          </h3>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Experience the future of dentistry with our AI-powered 3D treatments, 
            luxury coastal setting, and award-winning patient care. 
            Book your consultation today and discover why we're "Going the 
            Extra Smile."
          </p>

          {/* CTA Buttons - Exact styling from screenshot */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(194, 24, 91, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#C2185B] to-[#8B1538] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center space-x-3 min-w-[280px]"
            >
              <span className="text-2xl">📅</span>
              <span>Book Free Consultation</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(64, 196, 180, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#40C4B4] to-[#2D7D7A] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center space-x-3 min-w-[280px]"
            >
              <span className="text-2xl">🤖</span>
              <span>Try AI Smile Quiz</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards - Exact positioning from screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-2xl"
          >
            <div className="text-4xl mb-4">📞</div>
            <div className="text-2xl font-bold text-[#FF3B30] mb-2">24/7 Emergency</div>
            <div className="text-lg opacity-90 font-medium">CQC Outstanding Rating</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-2xl"
          >
            <div className="text-4xl mb-4">📅</div>
            <div className="text-2xl font-bold text-[#40C4B4] mb-2">Same-Day Appointments</div>
            <div className="text-lg opacity-90 font-medium">Same Day Available</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/15 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 shadow-2xl"
          >
            <div className="text-4xl mb-4">📍</div>
            <div className="text-2xl font-bold text-[#D4AF37] mb-2">98% Patient Satisfaction</div>
            <div className="text-lg opacity-90 font-medium">Coastal Location</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
