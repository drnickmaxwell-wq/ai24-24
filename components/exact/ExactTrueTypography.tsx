'use client';

import { motion } from 'framer-motion';

export function ExactTrueTypography() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content positioned EXACTLY as in your screenshot */}
      <div className="relative z-10 text-center text-white px-4 max-w-none w-full">
        
        {/* Main Hero Text - EXACT sizing from your screenshot analysis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
          style={{ marginTop: '-8vh' }} // Exact positioning from screenshot
        >
          <h1 
            className="font-black leading-none mb-2"
            style={{
              fontSize: 'clamp(10rem, 18vw, 24rem)', // MASSIVE size matching screenshot
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.8,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #C2185B 0%, rgba(194, 24, 91, 0.9) 30%, #40C4B4 70%, rgba(64, 196, 180, 0.9) 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '0.05em'
              }}
            >
              Luxury
            </span>
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #40C4B4 0%, rgba(64, 196, 180, 0.9) 40%, #D4AF37 80%, rgba(212, 175, 55, 0.9) 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '0.05em'
              }}
            >
              Coastal
            </span>
          </h1>
          <h2 
            className="font-black leading-none text-white"
            style={{
              fontSize: 'clamp(8rem, 15vw, 20rem)', // Slightly smaller than "Luxury Coastal"
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
              marginTop: '-0.15em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            }}
          >
            Dentistry
          </h2>
        </motion.div>

        {/* Perfect Smile Section - EXACT positioning from your screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-12"
          style={{ marginTop: '10vh' }} // Exact spacing from screenshot
        >
          <h3 
            className="font-black mb-6 leading-tight"
            style={{
              fontSize: 'clamp(4rem, 10vw, 14rem)', // HUGE size matching screenshot
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.85,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            Your Perfect Smile is Just{' '}
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #40C4B4 0%, rgba(64, 196, 180, 0.9) 25%, #D4AF37 60%, rgba(212, 175, 55, 0.9) 85%, #C2185B 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              One Click Away
            </span>
          </h3>
          
          {/* Exact paragraph text from your screenshot */}
          <p 
            className="text-white/95 mb-8 max-w-5xl mx-auto leading-relaxed font-light"
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
              lineHeight: 1.6,
              fontWeight: 300,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            Experience the future of dentistry with our AI-powered 3D treatments, 
            luxury coastal setting, and award-winning patient care. 
            Book your consultation today and discover why we're "Going the 
            Extra Smile."
          </p>

          {/* CTA Buttons - EXACT styling from your screenshot */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-10 py-5 rounded-2xl font-bold shadow-2xl flex items-center space-x-4"
              style={{
                background: 'linear-gradient(135deg, #C2185B 0%, rgba(194, 24, 91, 0.9) 50%, rgba(139, 21, 56, 0.9) 100%)',
                fontSize: '1.4rem',
                minWidth: '320px',
                boxShadow: '0 15px 40px rgba(194, 24, 91, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="text-2xl">📅</span>
              <span>Book Free Consultation</span>
              <span className="text-2xl">→</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-10 py-5 rounded-2xl font-bold shadow-2xl flex items-center space-x-4"
              style={{
                background: 'linear-gradient(135deg, #40C4B4 0%, rgba(64, 196, 180, 0.9) 50%, rgba(45, 125, 122, 0.9) 100%)',
                fontSize: '1.4rem',
                minWidth: '320px',
                boxShadow: '0 15px 40px rgba(64, 196, 180, 0.5)',
                border: '2px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <span className="text-2xl">🤖</span>
              <span>Try AI Smile Quiz</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards - EXACT from your screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ marginTop: '8vh' }}
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-4xl mb-4">📞</div>
            <div className="text-2xl font-black text-[#FF3B30] mb-2">24/7 Emergency</div>
            <div className="text-lg opacity-90 font-medium">CQC Outstanding Rating</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-4xl mb-4">📅</div>
            <div className="text-2xl font-black text-[#40C4B4] mb-2">Same-Day Appointments</div>
            <div className="text-lg opacity-90 font-medium">Same Day Available</div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-4xl mb-4">📍</div>
            <div className="text-2xl font-black text-[#D4AF37] mb-2">98% Patient Satisfaction</div>
            <div className="text-lg opacity-90 font-medium">Coastal Location</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
