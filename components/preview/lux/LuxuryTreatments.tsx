'use client';

import { motion } from 'framer-motion';

interface LuxuryTreatmentsProps {
  theme: 'light' | 'ink';
}

const treatments = [
  {
    id: '3d-digital',
    title: '3D Digital Dentistry',
    description: 'Experience the future with our cutting-edge 3D scanning and treatment planning.',
    icon: '🦷',
    gradient: 'from-purple-500 via-blue-500 to-teal-500',
    buttonGradient: 'from-[#C2185B] to-[#40C4B4]',
    buttonText: 'Explore 3D Tech'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    description: 'Transform your smile with our luxury porcelain veneers and cosmetic treatments.',
    icon: '✨',
    gradient: 'from-teal-400 via-green-400 to-yellow-400',
    buttonGradient: 'from-[#40C4B4] to-[#D4AF37]',
    buttonText: 'Perfect Your Smile'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Restore your confidence with our premium dental implant solutions.',
    icon: '🦷',
    gradient: 'from-orange-400 via-red-400 to-pink-500',
    buttonGradient: 'from-[#D4AF37] to-[#C2185B]',
    buttonText: 'Restore Your Smile'
  }
];

export default function LuxuryTreatments({ theme }: LuxuryTreatmentsProps) {
  const bgClass = theme === 'light' ? 'bg-white' : 'bg-[#0B1020]';
  const textClass = theme === 'light' ? 'text-gray-900' : 'text-white';
  const subtitleClass = theme === 'light' ? 'text-gray-600' : 'text-gray-300';

  return (
    <section className={`py-32 px-6 ${bgClass} relative overflow-hidden`}>
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30"
            style={{
              background: i % 3 === 0 ? '#C2185B' : i % 3 === 1 ? '#40C4B4' : '#D4AF37',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${textClass}`}>
            <span className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] bg-clip-text text-transparent">
              Luxury
            </span>{' '}
            <span className="bg-gradient-to-r from-[#40C4B4] to-[#D4AF37] bg-clip-text text-transparent">
              Coastal Dentistry
            </span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${subtitleClass}`}>
            Where Innovation Meets Elegance
          </p>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 group-hover:shadow-2xl ${
                theme === 'light' 
                  ? 'bg-white/80 border-white/40 shadow-lg group-hover:shadow-pink-500/20' 
                  : 'bg-white/5 border-white/10 shadow-xl group-hover:shadow-pink-500/30'
              }`}>
                
                {/* Circular Gradient Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-8 mx-auto w-24 h-24"
                >
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${treatment.gradient} flex items-center justify-center text-4xl shadow-2xl`}>
                    {treatment.icon}
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${treatment.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className={`text-2xl font-bold ${textClass}`}>
                    {treatment.title}
                  </h3>
                  
                  <p className={`leading-relaxed ${subtitleClass}`}>
                    {treatment.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group/btn relative px-8 py-4 bg-gradient-to-r ${treatment.buttonGradient} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                  >
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      {treatment.buttonText}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    
                    {/* Gold Hover Tint */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/20 to-[#D4AF37]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        background: i % 2 === 0 ? '#D4AF37' : '#40C4B4',
                        left: `${20 + i * 12}%`,
                        top: `${20 + i * 10}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1.2, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 gap-8"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-1 rounded-full bg-gradient-to-r from-[#C2185B] via-[#40C4B4] to-[#D4AF37] opacity-30"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
