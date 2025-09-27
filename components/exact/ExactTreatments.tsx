'use client';

import { motion } from 'framer-motion';

const treatments = [
  {
    title: "3D Digital Dentistry",
    description: "Experience the future with our cutting-edge 3D scanning and treatment planning.",
    buttonText: "Explore 3D Tech",
    icon: "🦷",
    gradient: "from-[#40C4B4] to-[#8B1538]",
  },
  {
    title: "Porcelain Veneers",
    description: "Transform your smile with our luxury porcelain veneers and cosmetic treatments.",
    buttonText: "Perfect Your Smile",
    icon: "✨",
    gradient: "from-[#40C4B4] to-[#D4AF37]",
  },
  {
    title: "Dental Implants",
    description: "Restore your confidence with our premium dental implant solutions.",
    buttonText: "Restore Your Smile",
    icon: "🦷",
    gradient: "from-[#FF6B9D] to-[#C2185B]",
  },
];

export function ExactTreatments() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#C2185B] via-[#40C4B4] to-[#D4AF37]" 
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Luxury Coastal Dentistry
          </h2>
          <p className="text-2xl text-gray-500 font-light tracking-wide">Where Innovation Meets Elegance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 text-center flex flex-col items-center hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${treatment.gradient} flex items-center justify-center text-5xl text-white mb-8 shadow-lg`}>
                {treatment.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{treatment.description}</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${treatment.gradient} text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all`}
              >
                {treatment.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

