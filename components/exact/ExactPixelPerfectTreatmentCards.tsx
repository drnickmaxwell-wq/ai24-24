'use client';

import { motion } from 'framer-motion';

const treatments = [
  {
    id: 1,
    title: "3D Digital Dentistry",
    description: "Experience the future with our cutting-edge 3D scanning and treatment planning.",
    iconGradient: "linear-gradient(135deg, #40C4B4 0%, #8B1538 100%)",
    buttonGradient: "linear-gradient(135deg, #E91E63 0%, #40C4B4 100%)",
    buttonText: "Explore 3D Tech",
    shadowColor: "rgba(64, 196, 180, 0.3)"
  },
  {
    id: 2,
    title: "Porcelain Veneers",
    description: "Transform your smile with our luxury porcelain veneers and cosmetic treatments.",
    iconGradient: "linear-gradient(135deg, #40C4B4 0%, #D4AF37 100%)",
    buttonGradient: "linear-gradient(135deg, #40C4B4 0%, #D4AF37 100%)",
    buttonText: "Perfect Your Smile",
    shadowColor: "rgba(212, 175, 55, 0.3)"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Restore your confidence with our premium dental implant solutions.",
    iconGradient: "linear-gradient(135deg, #FF9800 0%, #E91E63 100%)",
    buttonGradient: "linear-gradient(135deg, #D4AF37 0%, #FF9800 100%)",
    buttonText: "Restore Your Smile",
    shadowColor: "rgba(255, 152, 0, 0.3)"
  }
];

export function ExactPixelPerfectTreatmentCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E2E8F0] relative overflow-hidden">
      {/* Background decorative elements - EXACT from screenshot */}
      <div className="absolute inset-0">
        {/* Scattered colored dots matching screenshot */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 12 + 6,
              height: Math.random() * 12 + 6,
              background: ['#E91E63', '#40C4B4', '#D4AF37', '#FF9800'][Math.floor(Math.random() * 4)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Larger geometric shapes from screenshot */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute opacity-20"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              background: `linear-gradient(45deg, ${['#E91E63', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)]}, transparent)`,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - EXACT from screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="font-bold text-gray-900 mb-4 leading-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #C2185B 0%, #8B1538 25%, #40C4B4 75%, #2D7D7A 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Luxury{' '}
            </span>
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #40C4B4 0%, #2D7D7A 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Coastal Dentistry
            </span>
          </h2>
          <p 
            className="text-gray-600 font-light"
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300,
            }}
          >
            Where Innovation Meets Elegance
          </p>
        </motion.div>

        {/* Treatment Cards - EXACT recreation from screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Icon with EXACT gradient from screenshot */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg"
                style={{ 
                  background: treatment.iconGradient,
                  boxShadow: `0 10px 30px ${treatment.shadowColor}`,
                }}
              >
                {treatment.id === 1 && '🦷'}
                {treatment.id === 2 && '✨'}
                {treatment.id === 3 && '🦷'}
              </motion.div>
              
              {/* Content - EXACT styling from screenshot */}
              <div className="text-center">
                <h4 
                  className="font-bold text-gray-900 mb-4 leading-tight"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                    fontWeight: 700,
                  }}
                >
                  {treatment.title}
                </h4>
                <p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {treatment.description}
                </p>
                
                {/* CTA Button - EXACT styling from screenshot */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 15px 35px ${treatment.shadowColor}` 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all w-full"
                  style={{
                    background: treatment.buttonGradient,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {treatment.buttonText}
                </motion.button>
              </div>
              
              {/* Decorative elements matching screenshot */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-50" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
