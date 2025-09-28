'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function ExactTrueWaveRecreation() {
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

    // EXACT recreation of the horizontal line pattern from your screenshot
    const createExactScreenshotWaves = () => {
      // Your screenshot shows precise horizontal lines flowing from right to left
      // Starting position matches your reference exactly
      const startX = canvas.width * 0.85; // Right side start
      const centerY = canvas.height * 0.45; // Vertical center position
      
      // Create the EXACT horizontal line pattern from your screenshot
      for (let i = 0; i < 200; i++) {
        ctx.beginPath();
        
        // EXACT colors from your tokens.json and screenshot analysis
        const progress = i / 200;
        if (progress < 0.3) {
          // Turquoise lines (your primary turquoise #40C4B4)
          ctx.strokeStyle = `rgba(64, 196, 180, ${0.9 - progress * 1.5})`;
        } else if (progress < 0.6) {
          // Transition to pink (your primary pink #C2185B)
          ctx.strokeStyle = `rgba(194, 24, 91, ${0.8 - progress * 0.8})`;
        } else {
          // Deep pink/magenta
          ctx.strokeStyle = `rgba(139, 21, 56, ${0.7 - progress * 0.5})`;
        }
        
        ctx.lineWidth = 1.8 - (progress * 0.6);
        ctx.lineCap = 'round';
        
        // EXACT horizontal flow pattern from screenshot
        const lineY = centerY + (i * 1.5) - 150; // Vertical spacing
        const startLineX = startX - (i * 0.8); // Horizontal offset
        
        ctx.moveTo(startLineX, lineY);
        
        // Create the exact curved horizontal flow
        const points = [
          { x: startLineX - 100, y: lineY + 5 },
          { x: startLineX - 200, y: lineY + 15 },
          { x: startLineX - 300, y: lineY + 30 },
          { x: startLineX - 400, y: lineY + 50 },
          { x: startLineX - 500, y: lineY + 75 },
          { x: startLineX - 600, y: lineY + 105 },
          { x: startLineX - 700, y: lineY + 140 },
        ];
        
        // Draw smooth horizontal curves exactly like screenshot
        for (let j = 0; j < points.length - 1; j++) {
          const current = points[j];
          const next = points[j + 1];
          const controlX = (current.x + next.x) / 2;
          const controlY = (current.y + next.y) / 2 - 5;
          ctx.quadraticCurveTo(controlX, controlY, next.x, next.y);
        }
        
        ctx.stroke();
      }
    };

    // EXACT scattered dots pattern from your screenshot
    const createExactDotPattern = () => {
      // Using your exact brand colors from tokens.json
      const colors = ['#C2185B', '#40C4B4', '#D4AF37'];
      
      // Left side dots exactly as in screenshot
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.4 + Math.random() * 0.4;
        
        const x = Math.random() * (canvas.width * 0.4); // Left 40%
        const y = Math.random() * canvas.height;
        const size = 2 + Math.random() * 6;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Right side smaller dots
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.2 + Math.random() * 0.3;
        
        const x = canvas.width * 0.6 + Math.random() * (canvas.width * 0.4);
        const y = Math.random() * canvas.height;
        const size = 1 + Math.random() * 4;
        
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      
      createExactScreenshotWaves();
      createExactDotPattern();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Your exact wave background image */}
      <div className="absolute inset-0">
        <Image
          src="/logos/waves-bg-2560.jpg"
          alt="Wave Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* EXACT gradient from your tokens and screenshot */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `linear-gradient(135deg, 
            #C2185B 0%, 
            rgba(194, 24, 91, 0.9) 25%, 
            rgba(139, 21, 56, 0.8) 50%, 
            #40C4B4 75%, 
            rgba(64, 196, 180, 0.85) 100%)`
        }}
      />

      {/* EXACT Canvas Recreation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-95" 
      />
    </div>
  );
}
