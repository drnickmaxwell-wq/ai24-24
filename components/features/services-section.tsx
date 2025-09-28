'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Sparkles, 
  Shield, 
  Clock, 
  ArrowRight,
  Smile,
  Eye,
  Heart
} from 'lucide-react';
import { LuxuryCard, LuxuryCardContent, LuxuryCardHeader, LuxuryCardTitle, LuxuryCardDescription } from '@/components/ui/luxury-card';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { ScrollAnimation, StaggeredAnimation } from '@/components/effects/scroll-animations';
import { MicroInteraction } from '@/components/effects/loading-animations';
import { DustSystem } from '@/components/effects/particle-system';

const services = [
  {
    id: 'veneers',
    title: '3D Printed Veneers',
    description: 'Revolutionary same-day veneers crafted with precision 3D printing technology for perfect fit and natural aesthetics.',
    icon: Sparkles,
    features: ['Same-day treatment', 'Perfect fit guarantee', 'Natural appearance', '10-year warranty'],
    color: 'from-brand-magenta to-brand-magenta-light',
    href: '/treatments/veneers',
    badge: 'Most Popular'
  },
  {
    id: 'implants',
    title: '3D Implant Restorations',
    description: 'Advanced implant solutions using 3D imaging and surgical guides for precise placement and optimal outcomes.',
    icon: Shield,
    features: ['3D surgical planning', 'Minimally invasive', 'Faster healing', 'Lifetime support'],
    color: 'from-brand-turquoise to-brand-turquoise-light',
    href: '/treatments/implants',
    badge: 'Advanced Tech'
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Simulation',
    description: 'See your perfect smile before treatment with our AI-powered digital twin technology and AR try-on.',
    icon: Eye,
    features: ['AI smile design', 'AR preview', 'Instant visualization', 'Treatment planning'],
    color: 'from-brand-gold to-brand-gold-light',
    href: '/digital-twin',
    badge: 'AI-Powered'
  },
  {
    id: 'emergency',
    title: 'Emergency Dentistry',
    description: '24/7 emergency dental care with same-day appointments and pain relief solutions.',
    icon: Zap,
    features: ['24/7 availability', 'Same-day treatment', 'Pain relief', 'Urgent care'],
    color: 'from-red-500 to-red-600',
    href: '/emergency',
    badge: '24/7 Care'
  },
  {
    id: 'whitening',
    title: 'Professional Whitening',
    description: 'Advanced teeth whitening treatments for a brighter, more confident smile in just one visit.',
    icon: Smile,
    features: ['Instant results', 'Safe & effective', 'Long-lasting', 'Custom trays'],
    color: 'from-blue-500 to-blue-600',
    href: '/treatments/whitening',
    badge: 'Quick Results'
  },
  {
    id: 'anxiety',
    title: 'Anxiety-Free Dentistry',
    description: 'Comfortable dental care with sedation options and anxiety management for nervous patients.',
    icon: Heart,
    features: ['Sedation options', 'Comfort care', 'Gentle approach', 'Stress-free'],
    color: 'from-purple-500 to-purple-600',
    href: '/dental-anxiety',
    badge: 'Comfort Care'
  }
];

export function ServicesSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-background relative overflow-hidden">
      {/* Background Decorations with Particle System */}
      <div className="absolute top-0 left-0 w-full h-full">
        <DustSystem 
          className="absolute inset-0" 
          particleCount={20} 
          intensity="low" 
        />
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-turquoise/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-brand-magenta/5 rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-brand-turquoise" />
            <span className="text-brand-text font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-content-headline font-bold text-brand-text mb-6"
          >
            Advanced 3D Dentistry &{' '}
            <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
              AI-Powered Care
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of dentistry with our cutting-edge 3D technology, 
            AI-powered diagnostics, and luxury coastal comfort. Every treatment is 
            designed to exceed your expectations.
          </motion.p>
        </ScrollAnimation>

        {/* Services Grid with Staggered Animation */}
        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          childVariant="fadeUp"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MicroInteraction
                key={service.id}
                variant="hover-lift"
                className="group"
              >
                <LuxuryCard
                  variant="elevated"
                  hover
                  glow
                  shimmer
                  className="h-full relative overflow-hidden"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div className={`absolute top-0 left-0 right-0 h-2h-2 rounded-t-lg bg-gradient-to-r ${service.color}`} />

                  <LuxuryCardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <MicroInteraction variant="hover-glow">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </MicroInteraction>
                      <div className="flex-1">
                        <LuxuryCardTitle className="mb-0">
                          {service.title}
                        </LuxuryCardTitle>
                      </div>
                    </div>
                    <LuxuryCardDescription>
                      {service.description}
                    </LuxuryCardDescription>
                  </LuxuryCardHeader>

                  <LuxuryCardContent>
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-brand-muted">
                          <div className="w-1.5 h-1.5 bg-brand-turquoise rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <LuxuryButton
                      variant="outline"
                      className="w-full group border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                      asChild
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </LuxuryButton>
                  </LuxuryCardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 to-brand-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </LuxuryCard>
              </MicroInteraction>
            );
          })}
        </StaggeredAnimation>

        {/* Bottom CTA with Enhanced Animation */}
        <ScrollAnimation
          variant="scale"
          delay={0.5}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-brand-text mb-4">
              Not Sure Which Treatment is Right for You?
            </h3>
            <p className="text-brand-muted mb-6">
              Book a free consultation with our expert team. We'll create a personalized 
              treatment plan using our advanced 3D imaging and AI diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MicroInteraction variant="click-bounce">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  glow
                  className="group"
                >
                  Book Free Consultation
                  <Clock className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </LuxuryButton>
              </MicroInteraction>
              <MicroInteraction variant="hover-lift">
                <LuxuryButton
                  variant="outline"
                  size="lg"
                  className="border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white"
                  asChild
                >
                  <Link href="/digital-twin">Try AI Smile Quiz</Link>
                </LuxuryButton>
              </MicroInteraction>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

