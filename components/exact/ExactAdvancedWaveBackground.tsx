'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ExactAdvancedWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Complex wave line system - 300+ flowing lines
    const waveLines = Array.from({ length: 300 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 800 + 200,
      amplitude: Math.random() * 60 + 10,
      frequency: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.002,
      color: ['#C2185B', '#40C4B4', '#D4AF37', '#8B1538', '#2D7D7A', '#B8860B'][Math.floor(Math.random() * 6)],
      opacity: Math.random() * 0.6 + 0.2,
      lineWidth: Math.random() * 2 + 0.5,
      direction: Math.random() * Math.PI * 2,
      curvature: Math.random() * 0.1 + 0.05,
    }));

    // Sophisticated particle system - 200+ particles
    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 2,
      color: ['#C2185B', '#40C4B4', '#D4AF37', '#FF6B9D', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 6)],
      opacity: Math.random() * 0.8 + 0.2,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
      pulse: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Draw complex wave lines
      waveLines.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.globalAlpha = wave.opacity * (0.5 + 0.5 * Math.sin(time * 2 + index * 0.1));
        ctx.lineWidth = wave.lineWidth;
        ctx.lineCap = 'round';

        const points = [];
        for (let i = 0; i <= wave.length; i += 3) {
          const x = wave.x + i * Math.cos(wave.direction) + 
                   Math.sin((i * wave.frequency) + wave.phase + (time * wave.speed)) * wave.amplitude * Math.sin(i * wave.curvature);
          const y = wave.y + i * Math.sin(wave.direction) + 
                   Math.cos((i * wave.frequency) + wave.phase + (time * wave.speed)) * wave.amplitude * Math.cos(i * wave.curvature);
          points.push({ x, y });
        }

        // Draw smooth curves through points
        if (points.length > 2) {
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length - 1; i++) {
            const cp1x = (points[i].x + points[i + 1].x) / 2;
            const cp1y = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, cp1x, cp1y);
          }
        }
        ctx.stroke();

        // Update wave position
        wave.phase += wave.speed;
        wave.x += Math.sin(time * 0.5 + index * 0.1) * 0.2;
        wave.y += Math.cos(time * 0.3 + index * 0.1) * 0.1;

        // Wrap around screen
        if (wave.x > canvas.width + wave.length) wave.x = -wave.length;
        if (wave.y > canvas.height + 100) wave.y = -100;
        if (wave.x < -wave.length) wave.x = canvas.width + wave.length;
        if (wave.y < -100) wave.y = canvas.height + 100;
      });

      // Draw sophisticated particles
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * (0.6 + 0.4 * Math.sin(time * particle.pulse + particle.phase));
        
        const currentSize = particle.size * (0.8 + 0.4 * Math.sin(time * particle.pulse * 2 + particle.phase));
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = currentSize * 2;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Update particle position
        particle.x += particle.velocityX + Math.sin(time * 0.5 + index * 0.1) * 0.1;
        particle.y += particle.velocityY + Math.cos(time * 0.3 + index * 0.1) * 0.1;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y < 0) particle.y = canvas.height;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/logos/waves-bg-2560.jpg"
          alt="Wave Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] via-[#A0306E] to-[#40C4B4] opacity-85" />

      {/* Advanced Canvas Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-60 mix-blend-soft-light" 
      />

      {/* Additional floating geometric shapes */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${['#C2185B', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)]}, transparent)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '20%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
