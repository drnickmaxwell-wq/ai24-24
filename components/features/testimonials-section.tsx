'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';
import { LuxuryButton } from '@/components/ui/luxury-button';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'Brighton',
    treatment: '3D Printed Veneers',
    rating: 5,
    quote: "The 3D veneers transformed my smile completely. The same-day service was incredible - I walked in with chipped teeth and left with a perfect Hollywood smile. The coastal setting made the whole experience so relaxing.",
    image: '/images/testimonials/sarah.jpg',
    videoId: 'sarah-story',
    beforeAfter: true
  },
  {
    id: 2,
    name: 'James Thompson',
    location: 'Worthing',
    treatment: 'Digital Twin Simulation',
    rating: 5,
    quote: "Seeing my future smile with the AI simulation before treatment was amazing. The technology here is years ahead of anywhere else. The team made me feel completely at ease throughout the entire process.",
    image: '/images/testimonials/james.jpg',
    videoId: 'james-story',
    beforeAfter: false
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Hove',
    treatment: 'Dental Implants',
    rating: 5,
    quote: "After years of avoiding the dentist due to anxiety, St Mary's House changed everything. The 3D implant planning was so precise, and the healing was much faster than expected. I can't stop smiling now!",
    image: '/images/testimonials/emma.jpg',
    videoId: 'emma-story',
    beforeAfter: true
  },
  {
    id: 4,
    name: 'Michael Chen',
    location: 'Shoreham-by-Sea',
    treatment: 'Emergency Dentistry',
    rating: 5,
    quote: "When I had a dental emergency on a Sunday, they saw me within hours. The pain relief was immediate, and they saved my tooth with their advanced technology. Truly going the extra smile!",
    image: '/images/testimonials/michael.jpg',
    videoId: 'michael-story',
    beforeAfter: false
  },
  {
    id: 5,
    name: 'Lisa Parker',
    location: 'Steyning',
    treatment: 'Teeth Whitening',
    rating: 5,
    quote: "The professional whitening results were incredible - 8 shades whiter in just one visit! The luxury treatment room overlooking the coast made it feel like a spa day rather than a dental appointment.",
    image: '/images/testimonials/lisa.jpg',
    videoId: 'lisa-story',
    beforeAfter: true
  }
];

const stats = [
  { value: '98%', label: 'Patient Satisfaction' },
  { value: '4.9/5', label: 'Google Reviews' },
  { value: '2,500+', label: 'Happy Patients' },
  { value: '15+', label: 'Years Serving' }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-background to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-turquoise/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-brand-magenta/5 to-transparent" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold/10 to-brand-turquoise/10 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-brand-gold fill-current" />
              <span className="text-brand-text font-medium">Patient Stories</span>
            </div>

            <h2 className="text-content-headline font-bold text-brand-text mb-6">
              Real Smiles,{' '}
              <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
                Real Stories
              </span>
            </h2>

            <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
              Discover how our patients have transformed their smiles and lives with 
              our advanced 3D dentistry and compassionate care.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <LuxuryCard variant="glass" hover className="text-center">
                  <LuxuryCardContent className="py-6">
                    <div className="text-3xl font-bold text-brand-magenta mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-brand-muted">
                      {stat.label}
                    </div>
                  </LuxuryCardContent>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} className="mb-16">
            <LuxuryCard
              variant="elevated"
              glow
              className="max-w-4xl mx-auto overflow-hidden"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8"
                  >
                    {/* Testimonial Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                        ))}
                      </div>

                      <Quote className="w-8 h-8 text-brand-turquoise mb-4" />
                      
                      <blockquote className="text-lg text-brand-text leading-relaxed mb-6">
                        "{currentTestimonial.quote}"
                      </blockquote>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-brand-text">
                            {currentTestimonial.name}
                          </div>
                          <div className="text-brand-muted text-sm">
                            {currentTestimonial.location} • {currentTestimonial.treatment}
                          </div>
                        </div>

                        {currentTestimonial.videoId && (
                          <LuxuryButton
                            variant="outline"
                            size="sm"
                            className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                            onClick={() => setShowVideo(true)}
                          >
                            <Play className="w-4 h-4" />
                            Watch Story
                          </LuxuryButton>
                        )}
                      </div>
                    </div>

                    {/* Patient Image/Before-After */}
                    <div className="relative">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-brand-turquoise/10 to-brand-magenta/10 flex items-center justify-center">
                        {currentTestimonial.beforeAfter ? (
                          <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-full flex items-center justify-center mb-4 mx-auto">
                              <Star className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-brand-text font-semibold mb-2">
                              Before & After Available
                            </div>
                            <div className="text-brand-muted text-sm">
                              See the amazing transformation
                            </div>
                          </div>
                        ) : (
                          <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-brand-turquoise to-brand-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                              <Quote className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-brand-text font-semibold mb-2">
                              Patient Testimonial
                            </div>
                            <div className="text-brand-muted text-sm">
                              Real experience, real results
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Treatment Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                        <span className="text-brand-magenta font-semibold text-sm">
                          {currentTestimonial.treatment}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-brand-text" />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-brand-text" />
                </button>
              </div>
            </LuxuryCard>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-brand-magenta scale-125'
                      : 'bg-gray-300 hover:bg-brand-turquoise'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-brand-turquoise/10 to-brand-magenta/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-brand-text mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-brand-muted mb-6">
                Join thousands of satisfied patients who have transformed their smiles 
                with our advanced 3D dentistry and luxury care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  glow
                  className="group"
                >
                  Start Your Journey
                  <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </LuxuryButton>
                <LuxuryButton
                  variant="outline"
                  size="lg"
                  className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                >
                  Read More Reviews
                </LuxuryButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

