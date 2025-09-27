'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useBrandColors } from '@/components/providers/theme-provider';

export interface LuxuryButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coastal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  shimmer?: boolean;
  ripple?: boolean;
  href?: string;
  asChild?: boolean; // render as Slot (e.g., wrapping <Link>) without leaking to DOM
}

const buttonVariants = {
  primary:
    'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg',
  secondary:
    'bg-brand-turquoise text-white hover:bg-brand-turquoise-dark',
  outline:
    'border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white',
  ghost: 'text-brand-magenta hover:bg-brand-magenta/10',
  coastal:
    'bg-gradient-to-r from-brand-turquoise to-brand-gold text-white hover:shadow-xl',
};

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const motionVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export const LuxuryButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LuxuryButtonProps
>(function LuxuryButton(
  {
    children,
    variant = 'primary',
    size = 'md',
    glow = false,
    shimmer = false,
    ripple = true,
    className,
    href,
    asChild = false,
    onClick,
    // IMPORTANT: pull off asChild & href so they don't get forwarded to <button>
    ...rest
  },
  ref
) {
  // keep for future theme use (doesn’t change behavior)
  const _colors = useBrandColors();

  const baseClasses = cn(
    'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform',
    'focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95',
    buttonVariants[variant],
    sizeVariants[size],
    {
      'glow-magenta': glow && variant === 'primary',
      'glow-turquoise': glow && variant === 'secondary',
      shimmer: shimmer,
    },
    className
  );

  const handleRippleClick: React.MouseEventHandler<any> = (e) => {
    if (ripple) {
      const host: HTMLElement = e.currentTarget;
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const rippleEl = document.createElement('span');
      rippleEl.style.cssText = `
        position:absolute;left:${x}px;top:${y}px;width:${size}px;height:${size}px;
        background:rgba(255,255,255,0.3);border-radius:50%;
        transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;`;
      host.appendChild(rippleEl);
      setTimeout(() => rippleEl.remove(), 600);
    }
    onClick?.(e);
  };

  const ButtonContent = (
    <>
      {/* Shimmer sweep overlay */}
      {shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
      )}

      {/* Label */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Coastal bottom line */}
      {variant === 'coastal' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wave" />
      )}
    </>
  );

  // 1) Render as “child” (e.g. wrapping <Link>) WITHOUT leaking `asChild` to DOM
  if (asChild) {
    const MotionSlot: any = motion(Slot as any);
    return (
      <MotionSlot
        ref={ref as any}
        className={baseClasses}
        variants={motionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={handleRippleClick}
        {...(rest as any)}
      >
        {ButtonContent}
      </MotionSlot>
    );
  }

  // 2) Render as anchor if href is provided
  if (href) {
    const MotionA = motion('a');
    return (
      <MotionA
        ref={ref as any}
        href={href}
        className={baseClasses}
        variants={motionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={handleRippleClick}
        {...(rest as any)}
      >
        {ButtonContent}
      </MotionA>
    );
  }

  // 3) Default: render as button
  const MotionButton = motion('button');
  return (
    <MotionButton
      ref={ref as any}
      type={(rest as any).type ?? 'button'}
      className={baseClasses}
      variants={motionVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={handleRippleClick}
      {...(rest as any)}
    >
      {ButtonContent}
    </MotionButton>
  );
});

// add ripple keyframes only once
if (typeof document !== 'undefined' && !document.getElementById('lux-ripple-style')) {
  const style = document.createElement('style');
  style.id = 'lux-ripple-style';
  style.textContent = `
    @keyframes ripple { to { transform: scale(4); opacity: 0; } }
  `;
  document.head.appendChild(style);
}
