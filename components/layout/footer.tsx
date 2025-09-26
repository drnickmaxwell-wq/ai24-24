'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Heart,
  Shield,
  Award,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerSections = {
  services: {
    title: 'Our Services',
    links: [
      { name: 'General Dentistry', href: '/treatments/general' },
      { name: '3D Printed Veneers', href: '/treatments/veneers' },
      { name: 'Dental Implants', href: '/treatments/implants' },
      { name: 'Teeth Whitening', href: '/treatments/whitening' },
      { name: 'Emergency Dentist', href: '/emergency' },
      { name: 'Digital Twin Simulation', href: '/digital-twin' },
    ]
  },
  patient: {
    title: 'Patient Care',
    links: [
      { name: 'New Patients', href: '/new-patients' },
      { name: 'Dental Anxiety', href: '/dental-anxiety' },
      { name: 'Payment Plans', href: '/fees' },
      { name: 'Dental Plan', href: '/dental-plan' },
      { name: 'Patient Stories', href: '/patient-stories' },
      { name: 'FAQs', href: '/faqs' },
    ]
  },
  practice: {
    title: 'Practice Info',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Technology', href: '/technology' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Complaints', href: '/complaints' },
      { name: 'Accessibility', href: '/accessibility' },
    ]
  }
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: '#1877F2' },
  { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
  { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
];

const accreditations = [
  { name: 'GDC Registered', icon: Shield },
  { name: 'CQC Rated', icon: Award },
  { name: '5 Star Reviews', icon: Star },
  { name: 'Patient Care', icon: Heart },
];

const contactInfo = {
  phone: '01273 453109',
  email: 'info@smhdental.co.uk',
  address: 'St Mary\'s House, St Mary\'s Road, Shoreham-by-Sea, West Sussex BN43 5ZA',
  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 3:00 PM',
    sunday: 'Sunday: Closed',
    emergency: '24/7 Emergency Line Available'
  }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-brand-surface to-brand-background border-t border-gray-100">
      {/* Newsletter Section */}
      <motion.div 
        className="bg-gradient-to-r from-brand-magenta to-brand-turquoise py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-luxury">
          <div className="text-center text-white">
            <h3 className="text-content-headline mb-4">Stay Connected with Your Smile</h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest dental health tips, treatment updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button 
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-text font-semibold px-8 btn-coastal"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <motion.div 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Practice Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="mb-6">
                <Image
                  src="/logos/horizontal-title-turquoise-512.png"
                  alt="St Mary's House Dental Care"
                  width={200}
                  height={100}
                  className="h-12 w-auto mb-4"
                />
                <p className="text-brand-muted mb-4">
                  Experience luxury dental care by the sea in Shoreham-by-Sea. 
                  Advanced AI-powered 3D dentistry treatments with a personal touch.
                </p>
                <p className="text-brand-magenta font-semibold text-lg">
                  "Going the Extra Smile"
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-turquoise" />
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-brand-text hover:text-brand-magenta transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-turquoise" />
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-brand-text hover:text-brand-magenta transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-turquoise mt-1" />
                  <address className="text-brand-text not-italic">
                    {contactInfo.address}
                  </address>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-turquoise hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--hover-color': social.color } as React.CSSProperties}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-brand-text mb-4">{footerSections.services.title}</h4>
              <ul className="space-y-2">
                {footerSections.services.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-brand-muted hover:text-brand-magenta transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Patient Care */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-brand-text mb-4">{footerSections.patient.title}</h4>
              <ul className="space-y-2">
                {footerSections.patient.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-brand-muted hover:text-brand-magenta transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Practice Info */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-brand-text mb-4">{footerSections.practice.title}</h4>
              <ul className="space-y-2">
                {footerSections.practice.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-brand-muted hover:text-brand-magenta transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Opening Hours & Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-brand-text mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-brand-muted mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-turquoise" />
                  <span>{contactInfo.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-turquoise" />
                  <span>{contactInfo.hours.saturday}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-turquoise" />
                  <span>{contactInfo.hours.sunday}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-magenta font-medium">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.hours.emergency}</span>
                </div>
              </div>

              <h4 className="font-semibold text-brand-text mb-4">{footerSections.legal.title}</h4>
              <ul className="space-y-2">
                {footerSections.legal.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-brand-muted hover:text-brand-magenta transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Accreditations */}
      <motion.div 
        className="border-t border-gray-100 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {accreditations.map((accreditation, index) => {
              const Icon = accreditation.icon;
              return (
                <motion.div
                  key={accreditation.name}
                  className="flex items-center gap-2 text-brand-muted"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-brand-turquoise" />
                  <span className="text-sm font-medium">{accreditation.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 bg-brand-background">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-muted text-sm">
              © {currentYear} St Mary's House Dental Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-brand-muted">
              <span>GDC Registration: 123456</span>
              <span>•</span>
              <span>CQC Rating: Outstanding</span>
              <span>•</span>
              <Link href="/sitemap" className="hover:text-brand-magenta transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

