'use client';

import { motion } from 'framer-motion';

export function ExactFloatingActions() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-4 text-center min-w-[220px] border border-gray-200/50"
      >
        <div className="text-red-500 text-2xl mb-2">📞</div>
        <div className="text-base font-semibold text-gray-800">Emergency: 01273 453109</div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-xl shadow-lg p-4 text-center min-w-[220px] cursor-pointer"
      >
        <div className="text-white text-2xl mb-2">⚡</div>
        <div className="text-base font-semibold text-white">Quick Actions</div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-4 text-center min-w-[220px] border border-gray-200/50"
      >
        <div className="text-green-500 text-2xl mb-2">🕒</div>
        <div className="text-base font-semibold text-gray-800">Open Today</div>
        <div className="text-sm text-gray-600">9AM-5PM</div>
      </motion.div>
    </div>
  );
}
