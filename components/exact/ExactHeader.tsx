'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ExactHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Emergency Bar */}
      <div className="bg-[#C2185B] text-white py-2 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              📞 Emergency: 01273 453109
            </span>
            <span className="flex items-center gap-2">
              📍 Shoreham-by-Sea, West Sussex
            </span>
            <span className="flex items-center gap-2">
              🕒 24/7 Emergency Care
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C2185B] to-[#40C4B4] flex items-center justify-center text-white font-bold">
                <span className="text-xs">SMH</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900 text-lg">St Mary's House</h1>
                <p className="text-sm text-[#40C4B4]">Dental Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#C2185B] font-medium">
                Home
              </Link>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#C2185B] font-medium flex items-center gap-1">
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-[#C2185B] font-medium flex items-center gap-1">
                  Treatments
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <Link href="/team" className="text-gray-700 hover:text-[#C2185B] font-medium">
                Team
              </Link>
              
              <Link href="/patient-stories" className="text-gray-700 hover:text-[#C2185B] font-medium">
                Patient Stories
              </Link>
              
              <Link href="/blog" className="text-gray-700 hover:text-[#C2185B] font-medium">
                Blog
              </Link>
              
              <Link href="/contact" className="text-gray-700 hover:text-[#C2185B] font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 border border-[#40C4B4] text-[#40C4B4] rounded-lg hover:bg-[#40C4B4] hover:text-white transition-colors flex items-center gap-2">
                📞 Call Now
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                📅 Book Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40"
          >
            <div className="px-6 py-4 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Home
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                About
              </Link>
              <Link href="/treatments" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Treatments
              </Link>
              <Link href="/team" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Team
              </Link>
              <Link href="/patient-stories" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Patient Stories
              </Link>
              <Link href="/blog" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-700 hover:text-[#C2185B] font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t space-y-3">
                <button className="w-full px-4 py-2 border border-[#40C4B4] text-[#40C4B4] rounded-lg hover:bg-[#40C4B4] hover:text-white transition-colors">
                  📞 Call Now
                </button>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-lg hover:shadow-lg transition-all">
                  📅 Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
