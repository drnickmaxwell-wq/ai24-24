'use client';

import { motion } from 'framer-motion';

const treatments = [
  {
    id: 1,
    title: "3D Digital Dentistry",
    description: "Experience the future with our cutting-edge 3D scanning and treatment planning.",
    icon: "🦷",
    gradient: "from-[#40C4B4] via-[#2D7D7A] to-[#1A5F5A]",
    buttonGradient: "from-[#40C4B4] to-[#2D7D7A]",
    buttonText: "Explore 3D Tech",
    shadowColor: "rgba(64, 196, 180, 0.3)"
  },
  {
    id: 2,
    title: "Porcelain Veneers",
    description: "Transform your smile with our luxury porcelain veneers and cosmetic treatments.",
    icon: "✨",
    gradient: "from-[#D4AF37] via-[#B8860B] to-[#8B6914]",
    buttonGradient: "from-[#D4AF37] to-[#B8860B]",
    buttonText: "Perfect Your Smile",
    shadowColor: "rgba(212, 175, 55, 0.3)"
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Restore your confidence with our premium dental implant solutions.",
    icon: "🦷",
    gradient: "from-[#C2185B] via-[#8B1538] to-[#5D0E25]",
    buttonGradient: "from-[#C2185B] to-[#8B1538]",
    buttonText: "Restore Your Smile",
    shadowColor: "rgba(194, 24, 91, 0.3)"
  }
];

export function ExactLuxuryTreatmentCards() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E2E8F0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              backgroundColor: ['#C2185B', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 leading-none">
            <span 
              className="bg-gradient-to-r from-[#C2185B] via-[#8B1538] to-[#40C4B4] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Luxury Coastal
            </span>
          </h2>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-700 mb-8">
            Dentistry
          </h3>
          <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto">
            Where Innovation Meets Elegance
          </p>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon with gradient background */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 bg-gradient-to-br ${treatment.gradient} rounded-full flex items-center justify-center text-white text-4xl font-bold mb-8 mx-auto shadow-xl`}
                style={{ boxShadow: `0 10px 30px ${treatment.shadowColor}` }}
              >
                {treatment.icon}
              </motion.div>
              
              {/* Content */}
              <div className="text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {treatment.title}
                </h4>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {treatment.description}
                </p>
                
                {/* CTA Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 15px 35px ${treatment.shadowColor}` 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${treatment.buttonGradient} text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full`}
                >
                  {treatment.buttonText}
                </motion.button>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-50" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-white to-gray-200 rounded-full opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
