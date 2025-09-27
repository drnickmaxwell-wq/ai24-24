'use client';

import { motion } from 'framer-motion';

export default function ExactLoadingScreen() {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="text-center">
        {/* Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-8"
        >
          <div className="w-full h-full border-4 border-white/20 border-t-white rounded-full"></div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-2xl md:text-3xl font-medium tracking-wide"
        >
          Loading Luxury Experience...
        </motion.h1>

        {/* Optional Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-6"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-white/60 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
