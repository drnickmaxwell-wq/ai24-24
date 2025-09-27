'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function ExactGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = Array.from({ length: 250 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 500 + 150,
      amplitude: Math.random() * 40 + 5,
      frequency: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
      color: ['#C2185B', '#40C4B4', '#D4AF37', '#8B1538', '#2D7D7A'][Math.floor(Math.random() * 5)],
      opacity: Math.random() * 0.5 + 0.1,
      lineWidth: Math.random() * 1.5 + 0.5,
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.globalAlpha = wave.opacity;
        ctx.lineWidth = wave.lineWidth;

        for (let x = 0; x < wave.length; x += 2) {
          const y = wave.y + Math.sin((x * wave.frequency) + wave.phase + (Date.now() * 0.0005)) * wave.amplitude;
          if (x === 0) {
            ctx.moveTo(wave.x + x, y);
          } else {
            ctx.lineTo(wave.x + x, y);
          }
        }
        ctx.stroke();

        wave.phase += 0.005;
        wave.x += Math.sin(Date.now() * 0.0002 + index) * 0.3;
        wave.y += Math.cos(Date.now() * 0.0001 + index) * 0.2;

        if (wave.x > canvas.width) wave.x = -wave.length;
        if (wave.y > canvas.height) wave.y = -50;
        if (wave.y < -50) wave.y = canvas.height;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const particles = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 2,
    color: ['#C2185B', '#40C4B4', '#D4AF37', '#FF6B9D', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 6)],
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] via-[#A0306E] to-[#40C4B4] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30 mix-blend-soft-light" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-50"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [Math.random() * 40 - 20, Math.random() * 40 - 20, Math.random() * 40 - 20],
            x: [Math.random() * 30 - 15, Math.random() * 30 - 15, Math.random() * 30 - 15],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
