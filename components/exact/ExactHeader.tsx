'use client';

import { motion } from 'framer-motion';

export function ExactHeader() {
  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-[#C2185B] text-white px-4 py-2 text-xs font-medium flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">📞 Emergency: 01273 453109</span>
          <span className="flex items-center">📍 Shoreham-by-Sea, West Sussex</span>
          <span className="flex items-center">🕒 24/7 Emergency Care</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#40C4B4] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                SMH
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">St Mary's House</h1>
                <p className="text-sm text-gray-600 font-light">Dental Care</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6 text-base font-medium text-gray-700">
              <a href="#" className="hover:text-[#C2185B] transition-colors">Home</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors flex items-center">About ▼</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors flex items-center">Treatments ▼</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors">Team</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors">Patient Stories</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors">Blog</a>
              <a href="#" className="hover:text-[#C2185B] transition-colors">Contact</a>
            </nav>

            <div className="flex items-center space-x-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/50 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-full font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-all text-sm flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Call Now</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm flex items-center space-x-2"
              >
                <span>📅</span>
                <span>Book Free Consultation</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
