'use client';

import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Sarah Johnson",
    treatment: "Porcelain Veneers",
    rating: 5,
    text: "The team at St Mary's House transformed my smile completely. The 3D visualization helped me see exactly what the results would look like before we even started!",
    location: "Brighton"
  },
  {
    name: "Michael Chen",
    treatment: "Dental Implants",
    rating: 5,
    text: "Professional, caring, and the results exceeded my expectations. The coastal location makes every visit feel like a mini retreat.",
    location: "Hove"
  },
  {
    name: "Emma Williams",
    treatment: "3D Digital Dentistry",
    rating: 5,
    text: "The technology here is incredible. The AI-powered diagnosis caught issues I didn't even know I had. Truly the future of dentistry!",
    location: "Shoreham"
  }
];

export function ExactReviews() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              backgroundColor: ['#C2185B', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-2xl text-gray-600 font-light">Real stories from real patients</p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C2185B]">98%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#40C4B4]">CQC</div>
              <div className="text-sm text-gray-600">Outstanding Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-sm text-gray-600">Emergency Care</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C2185B] to-[#40C4B4]" />
              
              {/* Rating stars */}
              <div className="flex items-center mb-6">
                {Array.from({ length: review.rating }, (_, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
              
              {/* Patient info */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
                <p className="text-sm text-[#C2185B] font-medium">{review.treatment}</p>
                <p className="text-xs text-gray-500">{review.location}</p>
              </div>
              
              {/* Treatment badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white text-xs px-3 py-1 rounded-full">
                  Verified Patient
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">Ready to join our happy patients?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
