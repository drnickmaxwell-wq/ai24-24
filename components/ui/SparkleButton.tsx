"use client";

import React, { useState } from "react";

type Variant = "magenta" | "turquoise" | "gold";
type Size = "md" | "lg";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { 
  href: string; 
  variant?: Variant; 
  size?: Size; 
  className?: string;
};
type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  href?: never; 
  variant?: Variant; 
  size?: Size; 
  className?: string;
};

export default function SparkleButton(props: LinkProps | BtnProps) {
  const { className = "", variant = "magenta", size = "md", children, ...rest } = props as any;
  const [isHovered, setIsHovered] = useState(false);

  const bg =
    variant === "magenta" ? "var(--magenta)" :
    variant === "turquoise" ? "var(--turquoise)" : "var(--gold)";
  const glow =
    variant === "magenta" ? "var(--glow-magenta)" :
    variant === "turquoise" ? "var(--glow-turquoise)" : "var(--glow-gold)";
  const focusRing =
    variant === "magenta" ? "focus-visible:ring-[var(--magenta)]/50" :
    variant === "turquoise" ? "focus-visible:ring-[var(--turquoise)]/50" : "focus-visible:ring-[var(--gold)]/50";
  const pad = size === "lg" ? "px-7 py-3.5 text-lg" : "px-5 py-2.5";

  const base = `relative inline-flex items-center justify-center rounded-full text-white font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden ${focusRing} ${pad} ${className}`;

  const sparkleStyle = {
    background: isHovered
      ? "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)"
      : "none",
    backgroundSize: "200% 200%",
    animation: isHovered ? "sparkle-sweep 0.6s ease-out" : "none",
  };

  const ButtonContent = () => (
    <>
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={sparkleStyle}
      />
      <style jsx>{`
        @keyframes sparkle-sweep {
          0% {
            background-position: -200% -200%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% 200%;
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );

  if ("href" in props) {
    const aProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a 
        {...aProps} 
        className={base} 
        style={{ background: bg, boxShadow: isHovered ? glow : "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ButtonContent />
      </a>
    );
  }

  const bProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button 
      {...bProps} 
      className={base} 
      style={{ background: bg, boxShadow: isHovered ? glow : "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonContent />
    </button>
  );
}
