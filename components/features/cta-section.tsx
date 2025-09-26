'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Sparkles,
  Heart,
  Shield
} from 'lucide-react';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us Now',
    description: 'Speak directly with our friendly team',
    action: 'Call 01273 453109',
    href: 'tel:01273453109',
    color: 'from-brand-magenta to-brand-magenta-light',
    badge: '24/7 Emergency'
  },
  {
    icon: Calendar,
    title: 'Book Online',
    description: 'Schedule your appointment instantly',
    action: 'Book Consultation',
    href: '/booking',
    color: 'from-brand-turquoise to-brand-turquoise-light',
    badge: 'Same Day Available'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Find us in beautiful Shoreham-by-Sea',
    action: 'Get Directions',
    href: '/contact',
    color: 'from-brand-gold to-brand-gold-light',
    badge: 'Coastal Location'
  }
];

const guarantees = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'All treatments backed by our quality promise'
  },
  {
    icon: Heart,
    title: 'Comfort Promise',
    description: 'Anxiety-free dentistry with sedation options'
  },
  {
    icon: Sparkles,
    title: 'Latest Technology',
    description: '3D imaging, AI diagnostics, and digital twins'
  }
];

export function CTASection() {
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-turquoise/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-brand-magenta/5 to-transparent" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-brand-gold/30 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-brand-turquoise/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-brand-magenta/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main CTA Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-full px-6 py-2 mb-6">
              <Calendar className="w-4 h-4 text-brand-magenta" />
              <span className="text-brand-text font-medium">Ready to Start?</span>
            </div>

            <h2 className="text-content-headline font-bold text-brand-text mb-6">
              Your Perfect Smile is Just{' '}
              <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
                One Click Away
              </span>
            </h2>

            <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Experience the future of dentistry with our AI-powered 3D treatments, 
              luxury coastal setting, and award-winning patient care. Book your 
              consultation today and discover why we're "Going the Extra Smile."
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <LuxuryButton
                variant="primary"
                size="xl"
                glow
                shimmer
                className="group text-lg px-12"
                asChild
              >
                <Link href="/booking">
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </LuxuryButton>
              
              <LuxuryButton
                variant="outline"
                size="xl"
                className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white text-lg px-12"
                asChild
              >
                <Link href="/digital-twin">Try AI Smile Quiz</Link>
              </LuxuryButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-brand-muted">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-turquoise" />
                <span>CQC Outstanding Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-turquoise" />
                <span>Same-Day Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-turquoise" />
                <span>98% Patient Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div key={method.title} variants={itemVariants}>
                  <LuxuryCard
                    variant="elevated"
                    hover
                    glow
                    className="h-full relative overflow-hidden group cursor-pointer"
                    asChild
                  >
                    <Link href={method.href}>
                      {/* Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {method.badge}
                        </span>
                      </div>

                      {/* Gradient Background */}
                      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${method.color}`} />

                      <LuxuryCardContent className="py-8 text-center">
                        <div className="flex justify-center mb-6">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-brand-text mb-3">
                          {method.title}
                        </h3>
                        
                        <p className="text-brand-muted mb-6 leading-relaxed">
                          {method.description}
                        </p>

                        <LuxuryButton
                          variant="outline"
                          className="w-full group border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                        >
                          {method.action}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </LuxuryButton>
                      </LuxuryCardContent>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-turquoise/5 to-brand-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </Link>
                  </LuxuryCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Guarantees Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-brand-text mb-8">
              Our Promise to You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <motion.div
                    key={guarantee.title}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 bg-white/50 rounded-lg backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-turquoise/20 to-brand-magenta/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-turquoise" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-brand-text mb-1">
                        {guarantee.title}
                      </div>
                      <div className="text-sm text-brand-muted">
                        {guarantee.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div variants={itemVariants}>
            <LuxuryCard
              variant="gradient"
              glow
              className="max-w-2xl mx-auto text-center"
            >
              <LuxuryCardContent className="py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  Dental Emergency?
                </h3>
                
                <p className="text-brand-muted mb-4">
                  Don't wait - we provide 24/7 emergency dental care for urgent situations.
                </p>
                
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white"
                  asChild
                >
                  <Link href="tel:01273453109">
                    Call Emergency Line: 01273 453109
                  </Link>
                </LuxuryButton>
              </LuxuryCardContent>
            </LuxuryCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-brand-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}

