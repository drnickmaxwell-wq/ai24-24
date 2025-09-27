'use client';

import { motion } from 'framer-motion';

export default function ExactFloatingActions() {
  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-4">
      {/* Emergency Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all text-gray-700 text-sm font-medium flex items-center gap-2"
      >
        Emergency: 01273 453109
        <div className="w-10 h-10 bg-[#C2185B] rounded-full flex items-center justify-center text-white">
          📞
        </div>
      </motion.button>

      {/* Quick Actions */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all text-gray-700 text-sm font-medium flex items-center gap-2"
      >
        Quick Actions
        <div className="w-10 h-10 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] rounded-full flex items-center justify-center text-white">
          ⚡
        </div>
      </motion.button>

      {/* Open Today */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg px-4 py-2 shadow-lg text-gray-700 text-sm font-medium flex items-center gap-2"
      >
        🕒 Open Today 9AM-5PM
      </motion.div>

      {/* Issues Notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-[#C2185B] text-white rounded-lg px-3 py-2 shadow-lg text-sm font-medium flex items-center gap-2"
      >
        <span className="w-6 h-6 bg-white text-[#C2185B] rounded-full flex items-center justify-center text-xs font-bold">
          N
        </span>
        3 Issues
        <button className="ml-2 text-white hover:text-gray-200">
          ✕
        </button>
      </motion.div>
    </div>
  );
}
