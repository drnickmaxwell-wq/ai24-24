'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Heart, 
  Sparkles, 
  ArrowRight,
  MapPin,
  Clock,
  Shield
} from 'lucide-react';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LuxuryCard, LuxuryCardContent } from '@/components/ui/luxury-card';

const achievements = [
  {
    icon: Award,
    title: 'CQC Outstanding',
    description: 'Rated Outstanding by the Care Quality Commission',
    color: 'text-brand-gold'
  },
  {
    icon: Users,
    title: '2,500+ Patients',
    description: 'Trusted by families across West Sussex',
    color: 'text-brand-turquoise'
  },
  {
    icon: Heart,
    title: '98% Satisfaction',
    description: 'Exceptional patient care and outcomes',
    color: 'text-brand-magenta'
  },
  {
    icon: Shield,
    title: '15+ Years',
    description: 'Serving the Shoreham-by-Sea community',
    color: 'text-brand-gold'
  }
];

const values = [
  {
    title: 'Luxury by the Sea',
    description: 'Experience dental care in our beautiful coastal setting, where tranquility meets advanced technology.',
    icon: '🌊'
  },
  {
    title: 'AI-Powered Precision',
    description: 'Cutting-edge 3D imaging, digital twins, and AI diagnostics for unparalleled accuracy.',
    icon: '🤖'
  },
  {
    title: 'Personal Touch',
    description: 'Every patient receives individualized care tailored to their unique needs and comfort.',
    icon: '💎'
  }
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-turquoise/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-magenta/5 to-transparent" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-turquoise/10 to-brand-magenta/10 rounded-full px-6 py-2 mb-6">
                <Heart className="w-4 h-4 text-brand-magenta" />
                <span className="text-brand-text font-medium">About St Mary's House</span>
              </div>

              <h2 className="text-content-headline font-bold text-brand-text mb-6">
                Where Coastal Tranquility Meets{' '}
                <span className="bg-gradient-to-r from-brand-magenta to-brand-turquoise bg-clip-text text-transparent">
                  Advanced Dentistry
                </span>
              </h2>

              <p className="text-lg text-brand-muted mb-6 leading-relaxed">
                Nestled in the heart of Shoreham-by-Sea, St Mary's House Dental Care 
                combines the serenity of coastal living with cutting-edge dental technology. 
                Our practice has been serving the West Sussex community for over 15 years, 
                building lasting relationships through exceptional care and innovative treatments.
              </p>

              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                From our revolutionary 3D printed veneers to AI-powered smile simulations, 
                we're pioneering the future of dentistry while maintaining the personal 
                touch that makes every visit comfortable and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LuxuryButton
                  variant="primary"
                  size="lg"
                  glow
                  className="group"
                  asChild
                >
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </LuxuryButton>
                
                <LuxuryButton
                  variant="outline"
                  size="lg"
                  className="border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise hover:text-white"
                  asChild
                >
                  <Link href="/team">Meet Our Team</Link>
                </LuxuryButton>
              </div>
            </motion.div>

            {/* Practice Image */}
            <motion.div 
              variants={imageVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/logos/waves-bg-2560.jpg"
                  alt="St Mary's House Dental Care Practice"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-magenta/20 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-brand-gold" />
                    <div>
                      <div className="font-semibold text-brand-text text-sm">CQC Outstanding</div>
                      <div className="text-xs text-brand-muted">Care Quality Commission</div>
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-turquoise" />
                    <div>
                      <div className="font-semibold text-brand-text text-sm">Shoreham-by-Sea</div>
                      <div className="text-xs text-brand-muted">West Sussex</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-brand-gold/20 to-brand-turquoise/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-brand-magenta/20 to-brand-gold/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={achievement.title} variants={itemVariants}>
                  <LuxuryCard
                    variant="glass"
                    hover
                    className="text-center h-full"
                  >
                    <LuxuryCardContent className="py-8">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brand-magenta/10 to-brand-turquoise/10 rounded-full flex items-center justify-center">
                          <Icon className={`w-6 h-6 ${achievement.color}`} />
                        </div>
                      </div>
                      <h3 className="font-semibold text-brand-text mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-brand-muted">
                        {achievement.description}
                      </p>
                    </LuxuryCardContent>
                  </LuxuryCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-brand-text mb-4">
              Our Core Values
            </h3>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Everything we do is guided by our commitment to excellence, innovation, and compassionate care.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <LuxuryCard
                  variant="coastal"
                  hover
                  shimmer
                  className="text-center h-full"
                >
                  <LuxuryCardContent className="py-8">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-semibold text-brand-text mb-3">
                      {value.title}
                    </h4>
                    <p className="text-brand-muted leading-relaxed">
                      {value.description}
                    </p>
                  </LuxuryCardContent>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-2xl p-8 text-white max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Experience the St Mary's Difference?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join our family of satisfied patients and discover why we're the 
                premier choice for luxury dental care in West Sussex.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LuxuryButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-magenta"
                >
                  <Clock className="w-5 h-5" />
                  Book Consultation
                </LuxuryButton>
                <LuxuryButton
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">Get Directions</Link>
                </LuxuryButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

