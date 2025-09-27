
'use client';

import { ExactHeader } from './ExactHeader';
import { ExactGradientBackground } from './ExactGradientBackground';
import { ExactFloatingActions } from './ExactFloatingActions';
import { ExactTreatments } from './ExactTreatments';
import { motion } from 'framer-motion';

export default function ExactHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <ExactHeader />
      
      <main className="relative">
        <ExactGradientBackground />
        
        <div className="relative z-10">
          <div className="min-h-screen flex items-center justify-center text-center text-white px-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
              >
                <span 
                  className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Luxury Coastal
                </span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold"
              >
                Dentistry
              </motion.h2>
            </div>
          </div>

          <ExactTreatments />

        </div>
      </main>

      <ExactFloatingActions />
    </div>
  );
}

