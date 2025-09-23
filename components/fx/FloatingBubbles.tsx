"use client";

import React, { useEffect, useRef } from "react";

interface FloatingBubblesProps {
  count?: number;
  className?: string;
}

export default function FloatingBubbles({ 
  count = 20, 
  className = "" 
}: FloatingBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing bubbles
    container.innerHTML = '';

    // Create bubbles
    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      
      // Random properties
      const size = Math.random() * 8 + 4; // 4-12px
      const left = Math.random() * 100; // 0-100%
      const animationDuration = Math.random() * 10 + 15; // 15-25s
      const delay = Math.random() * 5; // 0-5s delay
      const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
      
      // Random color from brand palette
      const colors = [
        'rgba(194, 24, 91, 0.3)', // magenta
        'rgba(64, 196, 180, 0.3)', // turquoise  
        'rgba(212, 175, 55, 0.3)', // gold
        'rgba(255, 255, 255, 0.2)', // white
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      bubble.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${left}%;
        bottom: -20px;
        animation: floatUp ${animationDuration}s linear ${delay}s infinite;
        pointer-events: none;
        z-index: 1;
      `;
      
      container.appendChild(bubble);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
        }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [count]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
