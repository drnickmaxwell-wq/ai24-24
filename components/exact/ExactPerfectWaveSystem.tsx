'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function ExactPerfectWaveSystem() {
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

    // ENHANCED wave recreation with 300+ lines for 20000% perfection
    const createPerfectWaves = () => {
      const centerX = canvas.width * 0.75; // Waves start from right side
      const centerY = canvas.height * 0.35; // Positioned in upper-middle area
      
      // Create the exact curved wave pattern with INCREASED DENSITY
      for (let i = 0; i < 300; i++) { // Increased from 150 to 300
        ctx.beginPath();
        
        // Enhanced color gradients exactly matching screenshot
        const progress = i / 300;
        if (progress < 0.2) {
          ctx.strokeStyle = `rgba(64, 196, 180, ${0.9 - progress * 2})`; // Bright teal
        } else if (progress < 0.4) {
          ctx.strokeStyle = `rgba(45, 125, 122, ${0.8 - progress * 1.5})`; // Medium teal
        } else if (progress < 0.6) {
          ctx.strokeStyle = `rgba(139, 21, 56, ${0.9 - progress * 0.8})`; // Magenta
        } else if (progress < 0.8) {
          ctx.strokeStyle = `rgba(194, 24, 91, ${0.8 - progress * 0.5})`; // Deep magenta
        } else {
          ctx.strokeStyle = `rgba(160, 48, 110, ${0.7 - progress * 0.3})`; // Purple magenta
        }
        
        ctx.lineWidth = 2.5 - (progress * 1.5); // Slightly thicker lines
        ctx.lineCap = 'round';
        
        // Create the exact curved flow pattern with enhanced precision
        const startX = centerX + (i * 2); // Tighter spacing
        const startY = centerY + (i * 0.8); // Closer lines
        
        ctx.moveTo(startX, startY);
        
        // Enhanced curve pattern with more control points
        const controlPoints = [
          { x: startX - 80, y: startY + 15 },
          { x: startX - 160, y: startY + 45 },
          { x: startX - 240, y: startY + 90 },
          { x: startX - 320, y: startY + 150 },
          { x: startX - 400, y: startY + 220 },
          { x: startX - 480, y: startY + 300 },
          { x: startX - 560, y: startY + 390 },
        ];
        
        // Draw smooth curves with enhanced precision
        for (let j = 0; j < controlPoints.length - 1; j++) {
          const cp1 = controlPoints[j];
          const cp2 = controlPoints[j + 1];
          const midX = (cp1.x + cp2.x) / 2;
          const midY = (cp1.y + cp2.y) / 2;
          ctx.quadraticCurveTo(cp1.x, cp1.y, midX, midY);
        }
        
        ctx.stroke();
      }
    };

    // Enhanced scattered dots pattern with more variety
    const createEnhancedDots = () => {
      const colors = ['#C2185B', '#40C4B4', '#D4AF37', '#8B1538', '#2D7D7A', '#B8860B'];
      
      // Left side scattered dots - INCREASED DENSITY
      for (let i = 0; i < 120; i++) { // Increased from 80
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.3 + Math.random() * 0.5;
        
        const x = Math.random() * (canvas.width * 0.35); // Left 35% of screen
        const y = Math.random() * canvas.height;
        const size = 1 + Math.random() * 8; // Varied sizes
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Right side smaller dots - ENHANCED
      for (let i = 0; i < 60; i++) { // Increased from 40
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.2 + Math.random() * 0.4;
        
        const x = canvas.width * 0.65 + Math.random() * (canvas.width * 0.35);
        const y = Math.random() * canvas.height;
        const size = 0.5 + Math.random() * 5;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Center area medium dots for depth
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.15 + Math.random() * 0.3;
        
        const x = canvas.width * 0.35 + Math.random() * (canvas.width * 0.3);
        const y = Math.random() * canvas.height;
        const size = 1 + Math.random() * 6;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      
      createPerfectWaves();
      createEnhancedDots();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave Background Image - EXACT from your assets */}
      <div className="absolute inset-0">
        <Image
          src="/logos/waves-bg-2560.jpg"
          alt="Wave Background"
          fill
          className="object-cover opacity-25"
          priority
        />
      </div>

      {/* PERFECT gradient overlay matching screenshot exactly */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, 
            rgba(139, 21, 56, 0.88) 0%, 
            rgba(194, 24, 91, 0.85) 20%, 
            rgba(160, 48, 110, 0.80) 40%, 
            rgba(64, 196, 180, 0.75) 70%, 
            rgba(45, 125, 122, 0.82) 90%, 
            rgba(212, 175, 55, 0.15) 100%)`
        }}
      />

      {/* PERFECT Canvas Recreation with enhanced density */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-95" 
      />

      {/* Additional floating elements for luxury depth */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={i}
          className="absolute opacity-10 animate-pulse"
          style={{
            width: Math.random() * 60 + 20,
            height: Math.random() * 60 + 20,
            background: `radial-gradient(circle, ${['#C2185B', '#40C4B4', '#D4AF37'][Math.floor(Math.random() * 3)]}, transparent)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 4 + 3}s`,
          }}
        />
      ))}
    </div>
  );
}
