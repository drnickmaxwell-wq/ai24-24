'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useBrandColors } from '@/components/providers/theme-provider';
import { Slot } from '@radix-ui/react-slot';

interface LuxuryButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coastal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  shimmer?: boolean;
  ripple?: boolean;
  href?: string;
  asChild?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg',
  secondary: 'bg-brand-turquoise text-white hover:bg-brand-turquoise-dark',
  outline: 'border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white',
  ghost: 'text-brand-magenta hover:bg-brand-magenta/10',
  coastal: 'bg-gradient-to-r from-brand-turquoise to-brand-gold text-white hover:shadow-xl',
};

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export function LuxuryButton({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  shimmer = false,
  ripple = true,
  className,
  href,
  asChild = false,
  ...props
}: LuxuryButtonProps) {
  const colors = useBrandColors();

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
      'shimmer': shimmer,
    },
    className
  );

  const buttonVariantsMotion = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    tap: { 
      scale: 0.95,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    animate: { 
      scale: 4, 
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const rippleElement = document.createElement('span');
      rippleElement.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      button.appendChild(rippleElement);
      
      setTimeout(() => {
        rippleElement.remove();
      }, 600);
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  const buttonContent = (
    <>
      {/* Shimmer Effect */}
      {shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
      )}
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Coastal Wave Effect */}
      {variant === 'coastal' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wave" />
      )}
    </>
 
    const MotionComponent: any = href ? motion.a : motion.button;

  if (asChild) {
    return (
      <MotionComponent
        className={baseClasses}
        variants={buttonVariantsMotion}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
        {...(href ? { href } : {})}
        {...(props as any)}
      >
        <Slot>{buttonContent}</Slot>
      </MotionComponent>
    );
  }
);

i(f (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        variants={buttonVariantsMotion}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...(props as any)}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      variants={buttonVariantsMotion}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}

// Add ripple animation to global CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

