'use client';

import { motion } from 'framer-motion';

interface PracticeStatsProps {
  theme: 'light' | 'ink';
}

export default function PracticeStats({ theme }: PracticeStatsProps) {
  const stats = [
    { icon: '📞', title: 'Call Us Now', subtitle: 'CQC Outstanding Rating', color: 'bg-red-500' },
    { icon: '📅', title: 'Book Online', subtitle: 'Same-Day Appointments', color: 'bg-teal-500' },
    { icon: '📍', title: 'Visit Us', subtitle: '98% Patient Satisfaction', color: 'bg-yellow-500' }
  ];

  const bgClass = theme === 'light' ? 'bg-gray-50' : 'bg-slate-900/50';
  const textClass = theme === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-white/80 border-white/40 shadow-lg hover:shadow-xl' 
                  : 'bg-white/5 border-white/10 shadow-xl hover:shadow-2xl'
              }`}
            >
              <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
              <div>
                <h4 className={`font-bold ${textClass}`}>{stat.title}</h4>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  {stat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
