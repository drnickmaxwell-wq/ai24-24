'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'coastal'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

export interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  glow?: boolean
  shimmer?: boolean'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonBase = Omit<HTMLMotionProps<'button'>, 'children'>;

export interface LuxuryButtonProps extends ButtonBase {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coastal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  shimmer?: boolean;
  ripple?: boolean;
  href?: string;
  /** internal only, don't forward to DOM */
  asChild?: boolean;
}

const buttonVariants: Record<NonNullable<LuxuryButtonProps['variant']>, string> = {
  primary: 'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg',
  secondary: 'bg-brand-turquoise text-white hover:bg-brand-turquoise-dark',
  outline: 'border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white',
  ghost: 'text-brand-magenta hover:bg-brand-magenta/10',
  coastal: 'bg-gradient-to-r from-brand-turquoise to-brand-gold text-white hover:shadow-xl',
};

const sizeVariants: Record<NonNullable<LuxuryButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

export const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      size = 'md',
      glow = false,
      shimmer = false,
      ripple = true,
      href,
      asChild,               // <— intentionally not used / not forwarded
      className,
      onClick,
      ...domSafe             // <— only DOM‑safe props go to element
    } = props;

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

    const variants = {
      initial: { scale: 1 },
      hover: { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 300, damping: 20 } },
      tap: { scale: 0.95, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    };

    const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
      if (ripple) {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const span = document.createElement('span');
        span.className = 'lux-ripple';
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.width = `${size}px`;
        span.style.height = `${size}px`;
        el.appendChild(span);
        setTimeout(() => span.remove(), 650);
      }
      onClick?.(e as any);
    };

    // shared inner content
    const inner = (
      <>
        {shimmer && <div className="absolute inset-0 lux-shimmer pointer-events-none" />}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        {variant === 'coastal' && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-wave" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          className={baseClasses}
          variants={variants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={handleClick}
          {...(domSafe as any)}
        >
          {inner}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        variants={variants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        onClick={handleClick}
        {...(domSafe as any)}
      >
        {inner}
      </motion.button>
    );
  }
);
LuxuryButton.displayName = 'LuxuryButton';

  ripple?: boolean
  href?: string
  asChild?: boolean
  children: React.ReactNode
}

const buttonVariants: Record<Variant, string> = {
  primary:   'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white hover:shadow-lg',
  secondary: 'bg-brand-turquoise text-white hover:bg-brand-turquoise-dark',
  outline:   'border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white',
  ghost:     'text-brand-magenta hover:bg-brand-magenta/10',
  coastal:   'bg-gradient-to-r from-brand-turquoise to-brand-gold text-white hover:shadow-xl',
}

const sizeVariants: Record<Size, string> = {
  sm: 'px-4  py-2  text-sm',
  md: 'px-6  py-3  text-base',
  lg: 'px-8  py-4  text-lg',
  xl: 'px-10 py-5  text-xl',
}

const MotionSlot   = motion.create(Slot)
const MotionButton = motion.button
const MotionAnchor = motion.a

export const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(function LuxuryButton(
  { children, variant='primary', size='md', glow=false, shimmer=false, ripple=true, className, href, asChild, onClick, ...rest },
  ref
) {
  const base = cn(
    'relative overflow-hidden rounded-lg font-semibold transition-all duration-300 transform',
    'focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95',
    buttonVariants[variant],
    sizeVariants[size],
    glow && (variant === 'primary'
      ? 'shadow-[0_0_35px_-12px_rgba(194,24,91,.8)]'
      : 'shadow-[0_0_35px_-12px_rgba(64,196,180,.8)]'),
    shimmer && 'lux-shimmer',
    className
  )

  const variants = {
    initial: { scale: 1 },
    hover:   { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    tap:     { scale: 0.95,       transition: { type: 'spring', stiffness: 300, damping: 20 } },
  }

  const rippleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple) {
      const btn  = e.currentTarget
      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x    = e.clientX - rect.left - size / 2
      const y    = e.clientY - rect.top  - size / 2
      const span = document.createElement('span')
      span.className = 'lux-ripple'
      span.style.left = `${x}px`
      span.style.top  = `${y}px`
      span.style.width = span.style.height = `${size}px`
      btn.appendChild(span)
      setTimeout(() => span.remove(), 600)
    }
    onClick?.(e)
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'coastal' && (
        <span aria-hidden className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
      )}
    </>
  )

  if (asChild) {
    return (
      <MotionSlot className={base} variants={variants} initial="initial" whileHover="hover" whileTap="tap">
        {content}
      </MotionSlot>
    )
  }

  if (href) {
    return (
      <MotionAnchor href={href} className={base} variants={variants} initial="initial" whileHover="hover" whileTap="tap">
        {content}
      </MotionAnchor>
    )
  }

  return (
    <MotionButton ref={ref} className={base} variants={variants} initial="initial" whileHover="hover" whileTap="tap" onClick={rippleClick} {...rest}>
      {content}
    </MotionButton>
  )
})
