'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface LuxHeaderProps {
  theme: 'light' | 'ink';
}

const treatmentGroups = {
  'General': ['Check-ups', 'Fillings', 'Crowns & Bridges', 'Extractions', 'Root Canal', "Children's", 'Sedation', 'Emergency'],
  'Cosmetic': ['Veneers', 'Teeth Whitening', 'Smile Makeover', 'Composite Bonding', 'Gum Contouring'],
  '3D Dentistry': ['Digital Scanning', 'CAD/CAM Crowns', '3D Treatment Planning', 'Virtual Consultations'],
  'Orthodontics': ['Invisalign', 'Clear Aligners', 'Traditional Braces', 'Retainers'],
  'Implants': ['Single Implants', 'Multiple Implants', 'All-on-4', 'Bone Grafting'],
  'Technology': ['AI Diagnostics', 'Laser Dentistry', 'Digital X-rays', 'Intraoral Cameras']
};

export default function LuxHeader({ theme }: LuxHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleGroupHover = (group: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveGroup(group);
  };

  const handleGroupLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveGroup(null);
    }, 150);
  };

  const handleSubmenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/treatments', label: 'Treatments', hasSubmenu: true },
    { href: '/team', label: 'Team' },
    { href: '/patient-stories', label: 'Patient Stories' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  const bgClass = theme === 'light' 
    ? 'bg-white/90 backdrop-blur-xl border-white/20' 
    : 'bg-[#0B1020]/90 backdrop-blur-xl border-white/10';
  
  const textClass = theme === 'light' ? 'text-[#1A202C]' : 'text-white';
  const hoverClass = theme === 'light' ? 'hover:text-[#40C4B4]' : 'hover:text-[#40C4B4]';

  return (
    <>
      {/* Top Emergency Bar */}
      <div className={`w-full py-2 px-6 text-sm ${theme === 'light' ? 'bg-[#C2185B] text-white' : 'bg-[#C2185B] text-white'}`}>
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
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-1 bg-red-600 hover:bg-red-700 rounded-full text-sm font-medium transition-colors">
              Emergency: 01273 453109
            </button>
            <button className="px-4 py-1 bg-teal-500 hover:bg-teal-600 rounded-full text-sm font-medium transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        className={`fixed top-8 left-0 right-0 z-40 ${bgClass} border-b`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C2185B] to-[#40C4B4] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-pink-500/25">
                SMH
              </div>
              <div>
                <h1 className={`font-bold ${textClass} text-lg`}>St Mary's House</h1>
                <p className="text-sm text-[#40C4B4]">Dental Care</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.hasSubmenu && handleGroupHover('treatments')}
                  onMouseLeave={() => item.hasSubmenu && handleGroupLeave()}
                >
                  <motion.div whileHover={{ y: -2 }}>
                    {item.hasSubmenu ? (
                      <button 
                        className={`${textClass} ${hoverClass} transition-colors font-medium flex items-center gap-1`}
                      >
                        {item.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link 
                        href={item.href}
                        className={`${textClass} ${hoverClass} transition-colors font-medium`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>

                  {/* Treatments Submenu */}
                  {item.hasSubmenu && (
                    <AnimatePresence>
                      {activeGroup && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`absolute top-full left-0 mt-2 w-80 ${bgClass} border rounded-xl shadow-2xl p-6`}
                          onMouseEnter={handleSubmenuEnter}
                          onMouseLeave={handleGroupLeave}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            {Object.keys(treatmentGroups).map((group) => (
                              <div 
                                key={group}
                                className="space-y-2"
                                onMouseEnter={() => setActiveGroup(group)}
                              >
                                <h4 className={`font-semibold ${textClass} text-sm border-b border-gray-200 pb-1`}>
                                  {group}
                                </h4>
                                <div className="space-y-1">
                                  {treatmentGroups[group as keyof typeof treatmentGroups].map((treatment) => (
                                    <motion.div
                                      key={treatment}
                                      whileHover={{ x: 5 }}
                                      onMouseEnter={() => setHoveredItem(treatment)}
                                      onMouseLeave={() => setHoveredItem(null)}
                                    >
                                      <Link
                                        href={`/treatments/${treatment.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                        className={`block text-xs py-1 transition-all duration-300 ${
                                          hoveredItem === treatment
                                            ? 'bg-gradient-to-r from-[#40C4B4] to-[#C2185B] bg-clip-text text-transparent font-medium animate-shimmer bg-[length:200%_100%]'
                                            : `${theme === 'light' ? 'text-gray-600 hover:text-[#40C4B4]' : 'text-gray-300 hover:text-[#40C4B4]'}`
                                        }`}
                                      >
                                        {treatment}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 border border-[#40C4B4] text-[#40C4B4] rounded-full font-medium hover:bg-[#40C4B4] hover:text-white transition-all"
                >
                  📞 Call Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  📅 Book Free Consultation
                </motion.button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${textClass}`}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pt-4 border-t border-white/20"
              >
                {navItems.map((item) => (
                  <div key={item.href} className="py-2">
                    {item.hasSubmenu ? (
                      <div>
                        <button 
                          onClick={() => setActiveGroup(activeGroup === 'treatments' ? null : 'treatments')}
                          className={`${textClass} ${hoverClass} transition-colors font-medium flex items-center justify-between w-full`}
                        >
                          {item.label}
                          <svg 
                            className={`w-4 h-4 transition-transform ${activeGroup === 'treatments' ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {activeGroup === 'treatments' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 ml-4 space-y-2"
                            >
                              {Object.keys(treatmentGroups).map((group) => (
                                <div key={group} className="space-y-1">
                                  <h5 className={`font-medium ${textClass} text-sm`}>{group}</h5>
                                  {treatmentGroups[group as keyof typeof treatmentGroups].map((treatment) => (
                                    <Link
                                      key={treatment}
                                      href={`/treatments/${treatment.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                      className={`block text-sm py-1 ml-2 ${theme === 'light' ? 'text-gray-600 hover:text-[#40C4B4]' : 'text-gray-300 hover:text-[#40C4B4]'} transition-colors`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {treatment}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block ${textClass} ${hoverClass} transition-colors font-medium`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-4 space-y-2">
                  <button className="w-full px-4 py-2 border border-[#40C4B4] text-[#40C4B4] rounded-full font-medium">
                    📞 Call Now
                  </button>
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full font-medium">
                    📅 Book Free Consultation
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
