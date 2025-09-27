'use client';

import { motion } from 'framer-motion';

export default function CinematicHeroVideo() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-600 to-teal-600 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <div className="w-16 h-16 mx-auto mb-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <h1 className="text-3xl font-medium">Loading Luxury Experience...</h1>
      </motion.div>
    </div>
  );
}
