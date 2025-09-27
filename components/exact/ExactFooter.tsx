'use client';

import { motion } from 'framer-motion';

export function ExactFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#8B1538] via-[#A0306E] to-[#40C4B4] text-white py-16 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              backgroundColor: ['#C2185B', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C2185B] font-bold text-sm mr-3">
                SMH
              </div>
              <div>
                <h3 className="text-xl font-bold">St Mary's House</h3>
                <p className="text-sm opacity-90">Dental Care</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Experience luxury coastal dentistry with our AI-powered 3D treatments, award-winning patient care, and stunning seaside location.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                📘
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                📷
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                🐦
              </motion.a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2 flex items-center">📞 Phone</h5>
                <p className="text-sm opacity-90">01273 453109</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 flex items-center">✉️ Email</h5>
                <p className="text-sm opacity-90">info@stmaryshousedental.co.uk</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 flex items-center">📍 Address</h5>
                <p className="text-sm opacity-90">1 St Mary's House, Shoreham-by-Sea, West Sussex BN43 5ZA</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">⏰ Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Monday - Thursday</span>
                <span className="text-sm font-semibold">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Friday</span>
                <span className="text-sm font-semibold">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Saturday</span>
                <span className="text-sm font-semibold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sunday</span>
                <span className="text-sm font-semibold text-red-300">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">About Us</a>
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">Treatments</a>
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">Team</a>
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">Patient Stories</a>
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">Blog</a>
              <a href="#" className="block text-sm hover:text-yellow-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Our Treatments */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Treatments</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "3D Digital Dentistry", "Porcelain Veneers", "Dental Implants", 
              "Teeth Whitening", "Emergency Dentist", "Anxiety Dentistry"
            ].map((treatment, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm hover:bg-white/30 transition-all cursor-pointer"
              >
                {treatment}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-[#FF3B30] rounded-lg p-4 text-center mb-8">
          <h3 className="text-xl font-bold">Dental Emergency? Call us 24/7: 01273 453109</h3>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm opacity-75">
            © 2025 St Mary's House Dental Care. All rights reserved. | 
            <a href="#" className="hover:text-yellow-300 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-yellow-300 transition-colors ml-1">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
