'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBrandColors } from '@/components/providers/theme-provider';
import { TREATMENT_GROUPS } from '@/components/treatments/groups';
import './header.menu.css';

type NavItem = {
  name: string;
  href: string;
};

const BASE_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Treatments', href: '#' }, // special handling
  { name: 'Fees & Plans', href: '/fees' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo = {
  phone: '01273 453109',
  email: 'info@smhdental.co.uk',
  hours: 'Mon–Fri: 8:00–18:00, Sat: 9:00–15:00',
};

const groupOrder: Array<keyof typeof TREATMENT_GROUPS> = [
  'general','cosmetic','3d-dentistry','orthodontics','implants','technology'
];

const groupDisplay: Record<string, string> = {
  general: 'General',
  cosmetic: 'Cosmetic',
  '3d-dentistry': '3D Dentistry',
  orthodontics: 'Orthodontics',
  implants: 'Implants',
  technology: 'Technology',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Desktop flyout
  const [desktopFlyoutOpen, setDesktopFlyoutOpen] = useState(false);
  const [desktopActiveGroup, setDesktopActiveGroup] = useState<keyof typeof TREATMENT_GROUPS | null>(null);
  const flyoutRef = useRef<HTMLDivElement | null>(null);

  // Mobile drawer: accordion for Treatments
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<keyof typeof TREATMENT_GROUPS | null>(null);

  const colors = useBrandColors?.();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when drawer is open
    document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close if clicking outside the desktop flyout
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!flyoutRef.current) return;
      if (!flyoutRef.current.contains(e.target as Node)) {
        setDesktopFlyoutOpen(false);
        setDesktopActiveGroup(null);
      }
    };
    if (desktopFlyoutOpen) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [desktopFlyoutOpen]);

  const submenuVariants = {
    closed: { opacity: 0, y: -8, scale: 0.98, pointerEvents: 'none' as const },
    open:   { opacity: 1, y: 0,    scale: 1,    pointerEvents: 'auto' as const },
  };

  return (
    <>
      {/* Top contact strip */}
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

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(247, 247, 249, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px rgba(194, 24, 91, 0.08)' : 'none'
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/logos/horizontal-title-turquoise-512.png"
                    alt="St Mary's House Dental Care"
                    width={200}
                    height={100}
                    className="h-12 w-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                </div>
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {BASE_ITEMS.map((item) => {
                if (item.name !== 'Treatments') {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-brand-magenta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise rounded-sm px-0.5"
                    >
                      {item.name}
                    </Link>
                  );
                }
                // Special: Treatments control
                return (
                  <div
                    key="Treatments"
                    className="relative"
                    onMouseEnter={() => setDesktopFlyoutOpen(true)}
                    onFocus={() => setDesktopFlyoutOpen(true)}
                    onMouseLeave={() => { setDesktopFlyoutOpen(false); setDesktopActiveGroup(null); }}
                  >
                    <button
                      type="button"
                      className="btn-coastal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise rounded-sm px-0.5"
                      aria-haspopup="menu"
                      aria-expanded={desktopFlyoutOpen}
                      aria-controls="treatments-flyout"
                      onClick={(e) => { e.preventDefault(); setDesktopFlyoutOpen((v) => !v); }}
                    >
                      Treatments
                    </button>

                    <AnimatePresence>
                      {desktopFlyoutOpen && (
                        <motion.div
                          id="treatments-flyout"
                          ref={flyoutRef}
                          role="menu"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={submenuVariants}
                          className="absolute left-1/2 -translate-x-1/2 mt-3 min-w-[680px] rounded-2xl border border-white/40 shadow-xl glass-tile p-5"
                          style={{ backdropFilter: 'blur(18px)' }}
                        >
                          {/* Groups view */}
                          {!desktopActiveGroup && (
                            <div className="grid grid-cols-3 gap-4">
                              {groupOrder.map((g) => {
                                const title = groupDisplay[g] ?? TREATMENT_GROUPS[g].title;
                                return (
                                  <button
                                    key={g}
                                    type="button"
                                    className="text-left px-3 py-2 rounded-lg hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise/60"
                                    onClick={() => setDesktopActiveGroup(g)}
                                  >
                                    <div className="text-sm opacity-70">Group</div>
                                    <div className="text-lg font-semibold lux-gradient">{title}</div>
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* Leaves view */}
                          {desktopActiveGroup && (
                            <div>
                              <div className="mb-3 flex items-center justify-between">
                                <button
                                  type="button"
                                  className="text-sm hover:text-brand-magenta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise rounded-sm"
                                  onClick={() => setDesktopActiveGroup(null)}
                                >
                                  ← Back to groups
                                </button>
                                <div className="text-sm opacity-70">
                                  {groupDisplay[desktopActiveGroup] ?? TREATMENT_GROUPS[desktopActiveGroup].title}
                                </div>
                              </div>
                              <ul className="grid grid-cols-2 gap-2">
                                {TREATMENT_GROUPS[desktopActiveGroup].items.map((leaf) => (
                                  <li key={leaf.slug}>
                                    <Link
                                      href={`/treatments/${leaf.slug}`}
                                      className="menu-leaf menu-leaf-gradient menu-gold-shimmer text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise/60 rounded-sm"
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Thin teal underline on scroll */}
        {isScrolled && <div className="header-underline-teal mt-2" />}
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.aside
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed inset-x-0 top-[64px] z-[60] bg-white/95 backdrop-blur-md border-b border-black/10"
          >
            <div className="container-luxury py-4">
              <nav className="space-y-2">
                {BASE_ITEMS.map((item) => {
                  if (item.name !== 'Treatments') {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-3 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                  // Treatments accordion
                  return (
                    <div key="Treatments" className="border-t border-black/10 pt-2">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-2 py-3 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise"
                        aria-expanded={mobileTreatmentsOpen}
                        onClick={() => setMobileTreatmentsOpen((v) => !v)}
                      >
                        <span>Treatments</span>
                        <span className="text-xs opacity-70">{mobileTreatmentsOpen ? 'Hide' : 'Show'}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileTreatmentsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden pl-2"
                          >
                            {/* Groups */}
                            <ul className="py-1 space-y-1">
                              {groupOrder.map((g) => (
                                <li key={g} className="rounded-md">
                                  <button
                                    type="button"
                                    className="w-full text-left px-2 py-2 rounded-md hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise"
                                    aria-expanded={mobileOpenGroup === g}
                                    onClick={() => setMobileOpenGroup((cur) => (cur === g ? null : g))}
                                  >
                                    <span className="lux-gradient font-medium">
                                      {groupDisplay[g] ?? TREATMENT_GROUPS[g].title}
                                    </span>
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {mobileOpenGroup === g && (
                                      <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className="pl-3 pb-2 space-y-1"
                                      >
                                        {TREATMENT_GROUPS[g].items.map((leaf) => (
                                          <li key={leaf.slug}>
                                            <Link
                                              href={`/treatments/${leaf.slug}`}
                                              className="block px-2 py-1 rounded sm menu-leaf menu-leaf-gradient menu-gold-shimmer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise/60"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {leaf.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </motion.ul>
                                    )}
                                  </AnimatePresence>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
