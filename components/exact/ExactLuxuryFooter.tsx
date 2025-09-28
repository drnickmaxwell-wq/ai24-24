'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExactLuxuryFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle wave background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            background: `linear-gradient(135deg, 
              rgba(64, 196, 180, 0.1) 0%, 
              rgba(194, 24, 91, 0.1) 50%, 
              rgba(212, 175, 55, 0.1) 100%)`
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C2185B] to-[#40C4B4] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SMH</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">St Mary's House</h3>
                <p className="text-gray-400">Dental Care</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Experience luxury coastal dentistry with our AI-powered 3D treatments, 
              award-winning patient care, and stunning seaside location in Shoreham-by-Sea.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF3B30] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="font-semibold">Emergency: 01273 453109</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Care</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#40C4B4] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Shoreham-by-Sea, West Sussex</p>
                  <p className="text-gray-400 text-sm">Coastal Location</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Team', 'Patient Stories', 'Blog', 'Contact'].map((link, index) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-[#40C4B4] transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Treatments</h4>
            <ul className="space-y-3">
              {[
                '3D Digital Dentistry',
                'Porcelain Veneers', 
                'Dental Implants',
                'Cosmetic Dentistry',
                'Emergency Care',
                'Preventive Care'
              ].map((treatment, index) => (
                <li key={treatment}>
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-[#C2185B] transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {treatment}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Awards & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'CQC Outstanding', icon: '🏆' },
              { label: '98% Satisfaction', icon: '⭐' },
              { label: '24/7 Emergency', icon: '🚨' },
              { label: 'AI Technology', icon: '🤖' }
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-600"
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <p className="text-sm font-semibold text-gray-300">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 St Mary's House Dental Care. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#40C4B4] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#40C4B4] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#40C4B4] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#FF3B30] to-[#D70015] py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-white">
            <span className="text-xl">🚨</span>
            <span className="font-bold">Dental Emergency?</span>
            <span>Call 01273 453109 - Available 24/7</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF3B30] px-4 py-2 rounded-lg font-bold text-sm"
            >
              Call Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
