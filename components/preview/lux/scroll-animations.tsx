'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'parallax';
  delay?: number;
  duration?: number;
  offset?: number;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  offset = 0.1,
  once = true
}: ScrollAnimationProps) {
  const [ref, inView] = useInView({
    threshold: offset,
    triggerOnce: once,
  });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 }
    },
    parallax: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ParallaxScroll({
  children,
  className = '',
  speed = 0.5,
  direction = 'up'
}: ParallaxScrollProps) {
  const { scrollY } = useScroll();
  
  const transform = useTransform(
    scrollY,
    [0, 1000],
    direction === 'up' ? [0, -speed * 100] :
    direction === 'down' ? [0, speed * 100] :
    direction === 'left' ? [0, -speed * 100] :
    [0, speed * 100]
  );

  const springTransform = useSpring(transform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const style = direction === 'up' || direction === 'down' 
    ? { y: springTransform }
    : { x: springTransform };

  return (
    <motion.div
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childVariant?: 'fadeUp' | 'fadeIn' | 'scale';
}

export function StaggeredAnimation({
  children,
  className = '',
  staggerDelay = 0.1,
  childVariant = 'fadeUp'
}: StaggeredAnimationProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants[childVariant]}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface CountUpAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUpAnimation({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}: CountUpAnimationProps) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const count = useTransform(
    useSpring(inView ? end : start, {
      duration: duration * 1000,
      bounce: 0
    }),
    (value) => Math.round(value)
  );

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.span>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  direction?: 'vertical' | 'horizontal' | 'circular';
}

export function FloatingElement({
  children,
  className = '',
  intensity = 'medium',
  direction = 'vertical'
}: FloatingElementProps) {
  const intensityMap = {
    subtle: 5,
    medium: 10,
    strong: 20
  };

  const distance = intensityMap[intensity];

  const animations = {
    vertical: {
      y: [-distance, distance, -distance],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    horizontal: {
      x: [-distance, distance, -distance],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    circular: {
      x: [0, distance, 0, -distance, 0],
      y: [0, -distance, 0, distance, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className={className}
      animate={animations[direction]}
    >
      {children}
    </motion.div>
  );
}

interface MorphingShapeProps {
  className?: string;
  color?: string;
  size?: number;
}

export function MorphingShape({
  className = '',
  color = 'rgba(64, 196, 180, 0.3)',
  size = 100
}: MorphingShapeProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        borderRadius: '50%',
      }}
      animate={{
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 180, 360],
        borderRadius: ['50%', '30%', '50%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
}

// Preset animation components
export function FadeUpOnScroll({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <ScrollAnimation variant="fadeUp" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideInFromLeft({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <ScrollAnimation variant="slideLeft" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

export function SlideInFromRight({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <ScrollAnimation variant="slideRight" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

export function ScaleOnScroll({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <ScrollAnimation variant="scale" className={className} delay={delay}>
      {children}
    </ScrollAnimation>
  );
}

