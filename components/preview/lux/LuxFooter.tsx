'use client';

import { motion } from 'framer-motion';

interface LuxFooterProps {
  theme: 'light' | 'ink';
}

export default function LuxFooter({ theme }: LuxFooterProps) {
  const bgClass = theme === 'light' ? 'bg-gray-900' : 'bg-black';

  return (
    <motion.footer 
      className={`${bgClass} text-white py-16 px-6`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C2185B] to-[#40C4B4] flex items-center justify-center text-white font-bold text-xl shadow-lg">
            SMH
          </div>
          <div className="text-left">
            <h3 className="font-bold text-white text-xl">St Mary's House</h3>
            <p className="text-[#40C4B4]">Dental Care</p>
          </div>
        </motion.div>
        
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the future of cosmetic dentistry with our revolutionary 3D visualization 
          technology and award-winning luxury care in beautiful Shoreham-by-Sea.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
          <span>© 2024 St Mary's House Dental Care</span>
          <span>•</span>
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </motion.footer>
  );
}
