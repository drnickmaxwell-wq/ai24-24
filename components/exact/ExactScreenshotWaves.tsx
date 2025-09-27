'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function ExactScreenshotWaves() {
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

    // EXACT wave recreation from screenshot
    // The screenshot shows specific curved lines flowing from right to left
    const createExactWaves = () => {
      const centerX = canvas.width * 0.7; // Waves start from right side
      const centerY = canvas.height * 0.4; // Positioned in upper-middle area
      
      // Create the exact curved wave pattern from screenshot
      for (let i = 0; i < 150; i++) {
        ctx.beginPath();
        
        // Colors exactly matching screenshot: teal to magenta gradient
        const progress = i / 150;
        if (progress < 0.3) {
          ctx.strokeStyle = `rgba(64, 196, 180, ${0.8 - progress})`; // Teal
        } else if (progress < 0.7) {
          ctx.strokeStyle = `rgba(139, 21, 56, ${0.9 - progress * 0.5})`; // Magenta
        } else {
          ctx.strokeStyle = `rgba(194, 24, 91, ${0.7 - progress * 0.3})`; // Deep magenta
        }
        
        ctx.lineWidth = 1.5 - (progress * 0.8);
        ctx.lineCap = 'round';
        
        // Create the exact curved flow pattern from screenshot
        const startX = centerX + (i * 3);
        const startY = centerY + (i * 1.2);
        
        ctx.moveTo(startX, startY);
        
        // Recreate the exact curve pattern visible in screenshot
        const controlPoints = [
          { x: startX - 100, y: startY + 20 },
          { x: startX - 200, y: startY + 60 },
          { x: startX - 300, y: startY + 120 },
          { x: startX - 400, y: startY + 200 },
          { x: startX - 500, y: startY + 300 },
        ];
        
        // Draw smooth curves matching screenshot pattern
        for (let j = 0; j < controlPoints.length - 1; j++) {
          const cp1 = controlPoints[j];
          const cp2 = controlPoints[j + 1];
          ctx.quadraticCurveTo(cp1.x, cp1.y, cp2.x, cp2.y);
        }
        
        ctx.stroke();
      }
    };

    // Scattered dots pattern from screenshot (left side)
    const createScatteredDots = () => {
      const colors = ['#C2185B', '#40C4B4', '#D4AF37', '#8B1538'];
      
      // Left side scattered dots as seen in screenshot
      for (let i = 0; i < 80; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.4 + Math.random() * 0.4;
        
        const x = Math.random() * (canvas.width * 0.3); // Left 30% of screen
        const y = Math.random() * canvas.height;
        const size = 2 + Math.random() * 6;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Right side smaller dots
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.3 + Math.random() * 0.3;
        
        const x = canvas.width * 0.7 + Math.random() * (canvas.width * 0.3);
        const y = Math.random() * canvas.height;
        const size = 1 + Math.random() * 4;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      
      createExactWaves();
      createScatteredDots();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave Background Image - Exact from your assets */}
      <div className="absolute inset-0">
        <Image
          src="/logos/waves-bg-2560.jpg"
          alt="Wave Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Exact gradient overlay matching screenshot */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, 
            rgba(139, 21, 56, 0.85) 0%, 
            rgba(194, 24, 91, 0.8) 25%, 
            rgba(160, 48, 110, 0.75) 50%, 
            rgba(64, 196, 180, 0.7) 75%, 
            rgba(45, 125, 122, 0.8) 100%)`
        }}
      />

      {/* Exact Canvas Recreation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-90" 
      />
    </div>
  );
}
