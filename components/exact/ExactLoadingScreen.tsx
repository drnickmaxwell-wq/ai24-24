'use client';

import { motion } from 'framer-motion';

export function ExactLoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#8B1538] via-[#A0306E] to-[#40C4B4] z-[100] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-white/50 border-t-white rounded-full mx-auto mb-10"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl font-light text-white tracking-wider"
        >
          Loading Luxury Experience...
        </motion.h2>
      </div>
    </div>
  );
}
