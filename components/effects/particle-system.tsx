'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface ParticleSystemProps {
  className?: string;
  particleCount?: number;
  variant?: 'bubbles' | 'sparkles' | 'dust' | 'waves';
  intensity?: 'low' | 'medium' | 'high';
}

export function ParticleSystem({ 
  className = '',
  particleCount = 50,
  variant = 'bubbles',
  intensity = 'medium'
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  const getParticleConfig = () => {
    const configs = {
      bubbles: {
        colors: ['rgba(64, 196, 180, 0.6)', 'rgba(194, 24, 91, 0.4)', 'rgba(212, 175, 55, 0.5)'],
        sizeRange: [2, 8],
        speedRange: [0.2, 1],
        lifeRange: [3000, 8000]
      },
      sparkles: {
        colors: ['rgba(212, 175, 55, 0.8)', 'rgba(255, 255, 255, 0.6)', 'rgba(64, 196, 180, 0.7)'],
        sizeRange: [1, 4],
        speedRange: [0.1, 0.5],
        lifeRange: [2000, 5000]
      },
      dust: {
        colors: ['rgba(194, 24, 91, 0.3)', 'rgba(64, 196, 180, 0.2)', 'rgba(212, 175, 55, 0.3)'],
        sizeRange: [1, 3],
        speedRange: [0.05, 0.3],
        lifeRange: [5000, 12000]
      },
      waves: {
        colors: ['rgba(64, 196, 180, 0.4)', 'rgba(194, 24, 91, 0.3)', 'rgba(212, 175, 55, 0.2)'],
        sizeRange: [3, 12],
        speedRange: [0.3, 1.2],
        lifeRange: [4000, 10000]
      }
    };
    return configs[variant];
  };

  const getIntensityMultiplier = () => {
    const multipliers = {
      low: 0.5,
      medium: 1,
      high: 1.8
    };
    return multipliers[intensity];
  };

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const config = getParticleConfig();
    const intensityMult = getIntensityMultiplier();
    
    return {
      id: Math.random(),
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      vx: (Math.random() - 0.5) * config.speedRange[1] * intensityMult,
      vy: -Math.random() * config.speedRange[1] * intensityMult - config.speedRange[0],
      size: Math.random() * (config.sizeRange[1] - config.sizeRange[0]) + config.sizeRange[0],
      opacity: Math.random() * 0.8 + 0.2,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      life: 0,
      maxLife: Math.random() * (config.lifeRange[1] - config.lifeRange[0]) + config.lifeRange[0]
    };
  };

  const updateParticle = (particle: Particle, deltaTime: number, canvas: HTMLCanvasElement): boolean => {
    particle.life += deltaTime;
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Apply gravity for bubbles
    if (variant === 'bubbles') {
      particle.vy -= 0.01;
    }

    // Apply wind effect for dust
    if (variant === 'dust') {
      particle.vx += Math.sin(particle.life * 0.001) * 0.02;
    }

    // Fade out over lifetime
    const lifeRatio = particle.life / particle.maxLife;
    particle.opacity = Math.max(0, 1 - lifeRatio);

    // Remove if dead or out of bounds
    return particle.life < particle.maxLife && 
           particle.x > -50 && particle.x < canvas.width + 50 &&
           particle.y > -50 && particle.y < canvas.height + 50;
  };

  const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    
    if (variant === 'sparkles') {
      // Draw sparkle as a star
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      const spikes = 4;
      const outerRadius = particle.size;
      const innerRadius = particle.size * 0.4;
      
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        const x = particle.x + Math.cos(angle) * radius;
        const y = particle.y + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      // Draw as circle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect for bubbles
      if (variant === 'bubbles') {
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.size * 2;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const adjustedParticleCount = Math.floor(particleCount * getIntensityMultiplier());
    particlesRef.current = Array.from({ length: adjustedParticleCount }, () => createParticle(canvas));

    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        const alive = updateParticle(particle, deltaTime, canvas);
        if (alive) {
          drawParticle(ctx, particle);
        }
        return alive;
      });

      // Add new particles
      while (particlesRef.current.length < adjustedParticleCount) {
        particlesRef.current.push(createParticle(canvas));
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

// Preset particle system components
export function BubbleSystem(props: Omit<ParticleSystemProps, 'variant'>) {
  return <ParticleSystem {...props} variant="bubbles" />;
}

export function SparkleSystem(props: Omit<ParticleSystemProps, 'variant'>) {
  return <ParticleSystem {...props} variant="sparkles" />;
}

export function DustSystem(props: Omit<ParticleSystemProps, 'variant'>) {
  return <ParticleSystem {...props} variant="dust" />;
}

export function WaveSystem(props: Omit<ParticleSystemProps, 'variant'>) {
  return <ParticleSystem {...props} variant="waves" />;
}

