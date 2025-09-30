'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TreatmentsMenu from '@/components/nav/TreatmentsMenu';
import { useBrandColors } from '@/components/providers/theme-provider';
import { TREATMENT_GROUPS } from '@/components/treatments/groups';

type NavItem = {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
};

const navigationItems: NavItem[] = [
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
    ],
  },
  { name: 'Fees & Plans', href: '/fees' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo = {
  phone: '01273 453109',
  email: 'info@smhdental.co.uk',
  address: "St Mary's House, St Mary's Road, Shoreham-by-Sea, West Sussex BN43 5ZA",
  hours: 'Mon–Fri: 8:00–18:00, Sat: 9:00–15:00',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopActiveSubmenu, setDesktopActiveSubmenu] = useState<string | null>(null);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileOpenSubGroup, setMobileOpenSubGroup] = useState<string | null>(null);
  const colors = useBrandColors();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const submenuVariants = {
    closed: { opacity: 0, y: -10, scale: 0.98 },
    open: { opacity: 1, y: 0, scale: 1 },
  } as const;

  return (
    <>
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
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-magenta transition-all duration-300" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        style={{ backgroundColor: isScrolled ? 'rgba(247, 247, 249, 0.95)' : 'transparent', backdropFilter: isScrolled ? 'blur(20px)' : 'none', boxShadow: isScrolled ? '0 4px 20px rgba(194, 24, 91, 0.1)' : 'none' }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image src="/logos/horizontal-title-turquoise-512.png" alt="St Mary's House Dental Care" width={200} height={100} className="h-12 w-auto animate-breathe" priority />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Render all items except Treatments using the existing logic */}
              {navigationItems.filter((item) => item.name !== 'Treatments').map((item) => (
                <div key={item.name} className="relative">
                  <Link href={item.href} className="text-brand-text hover:text-brand-magenta transition-colors duration-300 font-medium relative group px-2 py-1">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-magenta to-brand-turquoise group-hover:w-full transition-all duration-300" />
                  </Link>
                </div>
              ))}
              {/* Treatments uses our custom menu */}
              <TreatmentsMenu />
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" className="btn-coastal border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white" asChild>
                <Link href="/emergency">Emergency</Link>
              </Button>
              <Button className="btn-coastal bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg glow-magenta" asChild>
                <Link href="/booking">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen((o) => !o)} aria-label="Open menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div className="absolute right-0 top-0 h-full w-[78vw] max-w-[360px] bg-white shadow-2xl" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} role="dialog" aria-modal="true">
              <div className="p-6">
                <div className="flex justify-end mb-6">
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
                    if (item.name === 'Treatments' && hasSub) {
                      return (
                        <div key={item.name}>
                          <button
                            type="button"
                            className="w-full text-left py-3 text-lg font-medium text-brand-text hover:text-brand-magenta transition-colors border-b border-gray-100 flex items-center justify-between"
                            aria-expanded={mobileTreatmentsOpen}
                            onClick={() => {
                              setMobileTreatmentsOpen((o) => !o);
                              if (mobileTreatmentsOpen) setMobileOpenSubGroup(null);
                            }}
                          >
                            <span>{item.name}</span>
                            <span className={`transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`}>▾</span>
                          </button>

                          <AnimatePresence>
                            {mobileTreatmentsOpen && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="ml-2 pl-2 border-l border-gray-100">
                                {item.submenu!.map((sub) => {
                                  const key = sub.href.split('/').pop() as keyof typeof TREATMENT_GROUPS;
                                  const group = TREATMENT_GROUPS[key];
                                  const open = mobileOpenSubGroup === key;

                                  return (
                                    <div key={sub.href} className="mb-2">
                                      <button
                                        type="button"
                                        aria-expanded={open}
                                        className="w-full text-left py-2 font-medium text-brand-text hover:text-brand-magenta transition-colors flex items-center justify-between"
                                        onClick={() => setMobileOpenSubGroup(open ? null : key)}
                                      >
                                        <span>{sub.name}</span>
                                        <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
                                      </button>

                                      <AnimatePresence>
                                        {open && group && (
                                          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="ml-2">
                                            {group.items.map((leaf) => (
                                              <li key={leaf.slug}>
                                                <Link
                                                  href={`/treatments/${key}/${leaf.slug}`}
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                                  className="block text-xs px-2 py-1 rounded-md gradient-text lux-gold-flash"
                                                >
                                                  {leaf.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </motion.ul>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <div key={item.name}>
                        <Link href={item.href} className="block py-3 text-lg font-medium text-brand-text hover:text-brand-magenta transition-colors border-b border-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      </div>
                    );
                  })}
                </nav>

                <div className="mt-8 space-y-4">
                  <Button variant="outline" className="w-full btn-coastal border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white" asChild>
                    <Link href="/emergency">Emergency Dentist</Link>
                  </Button>
                  <Button className="w-full btn-coastal bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg glow-magenta" asChild>
                    <Link href="/booking">Book Consultation</Link>
                  </Button>
                </div>

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
