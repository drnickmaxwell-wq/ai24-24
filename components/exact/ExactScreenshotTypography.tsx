'use client';

import { motion } from 'framer-motion';

export function ExactScreenshotTypography() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content positioned exactly as in screenshot */}
      <div className="relative z-10 text-center text-white px-4 max-w-none w-full">
        
        {/* Main Hero Text - EXACT sizing from screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
          style={{ marginTop: '-10vh' }} // Exact positioning from screenshot
        >
          <h1 
            className="font-bold leading-none mb-2"
            style={{
              fontSize: 'clamp(8rem, 15vw, 20rem)', // Massive size matching screenshot
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
            }}
          >
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #C2185B 0%, #8B1538 25%, #40C4B4 75%, #2D7D7A 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '0.1em'
              }}
            >
              Luxury
            </span>
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #40C4B4 0%, #2D7D7A 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '0.1em'
              }}
            >
              Coastal
            </span>
          </h1>
          <h2 
            className="font-bold leading-none text-white"
            style={{
              fontSize: 'clamp(7rem, 13vw, 18rem)', // Slightly smaller than "Luxury Coastal"
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
              marginTop: '-0.2em'
            }}
          >
            Dentistry
          </h2>
        </motion.div>

        {/* Perfect Smile Section - EXACT positioning from screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-12"
          style={{ marginTop: '8vh' }} // Exact spacing from screenshot
        >
          <h3 
            className="font-bold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 12rem)', // Large size matching screenshot
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
            }}
          >
            Your Perfect Smile is Just{' '}
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #40C4B4 0%, #2D7D7A 30%, #D4AF37 70%, #B8860B 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              One Click Away
            </span>
          </h3>
          
          {/* Exact paragraph text from screenshot */}
          <p 
            className="text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              lineHeight: 1.6,
              fontWeight: 300
            }}
          >
            Experience the future of dentistry with our AI-powered 3D treatments, 
            luxury coastal setting, and award-winning patient care. 
            Book your consultation today and discover why we're "Going the 
            Extra Smile."
          </p>

          {/* CTA Buttons - EXACT styling from screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center space-x-3"
              style={{
                background: 'linear-gradient(135deg, #C2185B 0%, #8B1538 100%)',
                fontSize: '1.25rem',
                minWidth: '280px',
                boxShadow: '0 10px 30px rgba(194, 24, 91, 0.4)'
              }}
            >
              <span className="text-xl">📅</span>
              <span>Book Free Consultation</span>
              <span className="text-xl">→</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center space-x-3"
              style={{
                background: 'linear-gradient(135deg, #40C4B4 0%, #2D7D7A 100%)',
                fontSize: '1.25rem',
                minWidth: '280px',
                boxShadow: '0 10px 30px rgba(64, 196, 180, 0.4)'
              }}
            >
              <span className="text-xl">🤖</span>
              <span>Try AI Smile Quiz</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards - EXACT from screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          style={{ marginTop: '6vh' }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="text-3xl mb-3">📞</div>
            <div className="text-xl font-bold text-[#FF3B30] mb-1">24/7 Emergency</div>
            <div className="text-sm opacity-90 font-medium">CQC Outstanding Rating</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="text-3xl mb-3">📅</div>
            <div className="text-xl font-bold text-[#40C4B4] mb-1">Same-Day Appointments</div>
            <div className="text-sm opacity-90 font-medium">Same Day Available</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="backdrop-blur-xl rounded-2xl p-6 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="text-3xl mb-3">📍</div>
            <div className="text-xl font-bold text-[#D4AF37] mb-1">98% Patient Satisfaction</div>
            <div className="text-sm opacity-90 font-medium">Coastal Location</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
