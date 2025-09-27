'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface PerfectSmileCTAProps {
  theme: 'light' | 'ink';
}

export default function PerfectSmileCTA({ theme }: PerfectSmileCTAProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave patterns animation
    const drawWavePatterns = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.002;
      const waves = 30;
      
      for (let i = 0; i < waves; i++) {
        const progress = i / waves;
        const opacity = 0.1 + progress * 0.2;
        
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${320 + progress * 60}, 80%, 60%, ${opacity})`;
        ctx.lineWidth = 2 + progress * 3;
        
        const startY = canvas.height * 0.2;
        const amplitude = 80 + progress * 40;
        
        for (let x = 0; x <= canvas.width; x += 8) {
          const y = startY + Math.sin((x * 0.008) + (time * 1.5) + (progress * Math.PI * 2)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      drawWavePatterns();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const bgGradient = theme === 'light' 
    ? 'from-pink-500 via-purple-500 to-teal-500'
    : 'from-pink-600 via-purple-600 to-teal-600';

  return (
    <section className={`relative py-32 px-6 overflow-hidden bg-gradient-to-br ${bgGradient}`}>
      {/* Animated Wave Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ height: '100%' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 4 === 0 ? '#FFFFFF' : i % 4 === 1 ? '#D4AF37' : i % 4 === 2 ? '#40C4B4' : '#C2185B',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
        >
          <span className="text-2xl">⭐</span>
          <span className="font-medium">Trust & Results</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          <span className="block mb-4">Your Perfect Smile is Just</span>
          <span className="block">
            <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
              One Click Away
            </span>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90"
        >
          Experience the future of dentistry with our AI-powered 3D treatments, 
          luxury coastal setting, and award-winning patient care. 
          Book your consultation today and discover why we're "Going the Extra Smile."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
          >
            {/* Sparkle Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            
            <span className="relative z-10 flex items-center gap-3">
              📅 Book Free Consultation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            
            {/* Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            🧠 Try AI Smile Quiz
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: '📞', title: '24/7 Emergency', subtitle: 'CQC Outstanding Rating' },
            { icon: '📅', title: 'Same Day Available', subtitle: 'Same-Day Appointments' },
            { icon: '🏖️', title: 'Coastal Location', subtitle: '98% Patient Satisfaction' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
              <p className="text-white/80 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent" />
    </section>
  );
}
