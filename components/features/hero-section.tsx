'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Award, Users, Clock } from 'lucide-react';
import { CoastalWaves } from '@/components/effects/coastal-waves';
import { SparkleSystem } from '@/components/effects/particle-system';
import { FloatingElement, MorphingShape } from '@/components/effects/scroll-animations';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';

const heroStats = [
  { icon: Users, value: '2,500+', label: 'Happy Patients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Sparkles, value: '98%', label: 'Satisfaction Rate' },
  { icon: Clock, value: '24/7', label: 'Emergency Care' },
];

const floatingElements = [
  { id: 1, x: '10%', y: '20%', delay: 0, size: 'w-2 h-2' },
  { id: 2, x: '85%', y: '15%', delay: 1, size: 'w-3 h-3' },
  { id: 3, x: '75%', y: '70%', delay: 2, size: 'w-1.5 h-1.5' },
  { id: 4, x: '15%', y: '80%', delay: 1.5, size: 'w-2.5 h-2.5' },
  { id: 5, x: '90%', y: '45%', delay: 0.5, size: 'w-1 h-1' },
];

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 180, 360],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-background via-white to-brand-turquoise/5">
      {/* Background Video/Image with Enhanced Effects */}
      <div className="absolute inset-0 z-0">
        {/* Particle System */}
        <SparkleSystem 
          className="absolute inset-0" 
          particleCount={30} 
          intensity="medium" 
        />
        
        {/* Morphing Shapes */}
        <MorphingShape 
          className="top-20 left-10" 
          color="rgba(64, 196, 180, 0.1)" 
          size={120} 
        />
        <MorphingShape 
          className="bottom-32 right-16" 
          color="rgba(194, 24, 91, 0.1)" 
          size={80} 
        />
        
        {showVideo && isVideoLoaded ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/dental-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-turquoise/10 via-transparent to-brand-magenta/10">
            <Image
              src="/logos/waves-bg-2560.jpg"
              alt="Coastal background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        )}
        
        {/* Enhanced Overlay with Gradient Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80"
          animate={{
            background: [
              'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0.8))',
              'linear-gradient(to right, rgba(255,255,255,0.75), rgba(255,255,255,0.65), rgba(255,255,255,0.75))',
              'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6), rgba(255,255,255,0.8))'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      {floatingElements.map((element) => (
        <FloatingElement
          key={element.id}
          className={`absolute ${element.size} bg-gradient-to-r from-brand-turquoise to-brand-gold rounded-full opacity-60`}
          style={{ left: element.x, top: element.y }}
          intensity="medium"
          direction="circular"
        />
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container-luxury text-center"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-turquoise/20 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-text font-medium">AI-Powered 3D Dentistry</span>
            <div className="w-2 h-2 bg-brand-turquoise rounded-full animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-front-headline font-bold text-brand-text mb-6 leading-tight"
          >
            Experience Luxury{' '}
            <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
              Dental Care
            </span>{' '}
            by the Sea
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-front-subtitle text-brand-muted mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Advanced 3D dentistry meets coastal tranquility at St Mary's House. 
            From same-day veneers to digital twin smile simulations, we're{' '}
            <span className="text-brand-magenta font-semibold">"Going the Extra Smile"</span> 
            for every patient in Shoreham-by-Sea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <LuxuryButton
              variant="primary"
              size="lg"
              glow
              shimmer
              className="group"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </LuxuryButton>
            
            <LuxuryButton
              variant="outline"
              size="lg"
              className="group"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </LuxuryButton>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <LuxuryCard
                  key={stat.label}
                  variant="glass"
                  hover
                  glow
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <LuxuryCardContent className="py-6">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-brand-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brand-muted">
                      {stat.label}
                    </div>
                  </LuxuryCardContent>
                </LuxuryCard>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-brand-muted text-sm">Discover More</span>
              <motion.div
                className="w-6 h-10 border-2 border-brand-turquoise rounded-full flex justify-center"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-brand-turquoise rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-brand-gold/20 to-brand-turquoise/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-brand-magenta/20 to-brand-gold/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Enhanced Wave SVG at bottom */}
      <CoastalWaves 
        className="absolute bottom-0 left-0 right-0 z-5 h-16"
        variant="hero"
        animated={true}
      />
    </section>
  );
}

