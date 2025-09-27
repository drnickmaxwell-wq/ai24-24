'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrandColors } from '@/components/providers/theme-provider';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Treatments',
    href: '/treatments',
    submenu: [
      { name: 'General Dentistry', href: '/treatments/general' },
      { name: 'Cosmetic Dentistry', href: '/treatments/cosmetic' },
      { name: '3D Dentistry', href: '/treatments/3d-dentistry' },
      { name: 'Orthodontics', href: '/treatments/orthodontics' },
      { name: 'Implants', href: '/treatments/implants' },
      { name: 'Technology', href: '/treatments/technology' },
    ]
  },
  { name: 'Fees & Plans', href: '/fees' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo = {
  phone: '01273 453109',
  email: 'info@smhdental.co.uk',
  address: 'St Mary\'s House, St Mary\'s Road, Shoreham-by-Sea, West Sussex BN43 5ZA',
  hours: 'Mon-Fri: 8:00-18:00, Sat: 9:00-15:00'
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const colors = useBrandColors();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backgroundColor: 'rgba(247, 247, 249, 0.95)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(194, 24, 91, 0.1)',
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  };

  const submenuVariants = {
    closed: { opacity: 0, y: -10, scale: 0.95 },
    open: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div 
        className="bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white py-2 px-4 text-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-luxury flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-gold transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-gold transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{contactInfo.hours}</span>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-magenta transition-all duration-300"
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        variants={headerVariants}
        initial="initial"
        animate={isScrolled ? "scrolled" : "animate"}
        style={{
          backgroundColor: isScrolled ? 'rgba(247, 247, 249, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(194, 24, 91, 0.1)' : 'none',
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/logos/horizontal-title-turquoise-512.png"
                    alt="St Mary's House Dental Care"
                    width={200}
                    height={100}
                    className="h-12 w-auto animate-breathe"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-brand-text hover:text-brand-magenta transition-colors duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-magenta to-brand-turquoise group-hover:w-full transition-all duration-300" />
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                          variants={submenuVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2 text-brand-text hover:text-brand-magenta hover:bg-gray-50 transition-colors duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="outline" 
                className="btn-coastal border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                asChild
              >
                <Link href="/emergency">Emergency</Link>
              </Button>
              <Button 
                className="btn-coastal bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg glow-magenta"
                asChild
              >
                <Link href="/booking">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-3 text-lg font-medium text-brand-text hover:text-brand-magenta transition-colors border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-2 text-brand-muted hover:text-brand-turquoise transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full btn-coastal border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                    asChild
                  >
                    <Link href="/emergency">Emergency Dentist</Link>
                  </Button>
                  <Button 
                    className="w-full btn-coastal bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg glow-magenta"
                    asChild
                  >
                    <Link href="/booking">Book Consultation</Link>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-brand-muted">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-brand-magenta transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-brand-muted">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-magenta transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-muted">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

