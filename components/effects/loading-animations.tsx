'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dots' | 'pulse' | 'wave' | 'dental';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'dental',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`${sizeClasses[size]} bg-brand-turquoise rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={`${sizeClasses[size]} bg-gradient-to-r from-brand-magenta to-brand-turquoise rounded-full ${className}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`flex items-end space-x-1 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-1 bg-brand-turquoise rounded-full"
            animate={{
              height: ['8px', '24px', '8px']
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    );
  }

  // Dental variant - tooth-shaped loader
  return (
    <motion.div
      className={`${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    >
      <svg
        width={size === 'sm' ? 16 : size === 'md' ? 32 : 48}
        height={size === 'sm' ? 16 : size === 'md' ? 32 : 48}
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          d="M12 2C8 2 6 4 6 8C6 12 8 14 12 22C16 14 18 12 18 8C18 4 16 2 12 2Z"
          fill="url(#dental-gradient)"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        />
        <defs>
          <linearGradient id="dental-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C2185B" />
            <stop offset="100%" stopColor="#40C4B4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'image';
  lines?: number;
}

export function SkeletonLoader({ 
  className = '', 
  variant = 'text',
  lines = 3 
}: SkeletonLoaderProps) {
  const shimmer = {
    backgroundImage: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
  };

  const shimmerAnimation = {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear'
    }
  };

  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gray-200 rounded"
            style={{
              ...shimmer,
              width: i === lines - 1 ? '75%' : '100%'
            }}
            animate={shimmerAnimation}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`p-4 border border-gray-200 rounded-lg ${className}`}>
        <motion.div
          className="h-48 bg-gray-200 rounded mb-4"
          style={shimmer}
          animate={shimmerAnimation}
        />
        <motion.div
          className="h-4 bg-gray-200 rounded mb-2"
          style={shimmer}
          animate={shimmerAnimation}
        />
        <motion.div
          className="h-4 bg-gray-200 rounded w-3/4"
          style={shimmer}
          animate={shimmerAnimation}
        />
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <motion.div
        className={`w-12 h-12 bg-gray-200 rounded-full ${className}`}
        style={shimmer}
        animate={shimmerAnimation}
      />
    );
  }

  if (variant === 'image') {
    return (
      <motion.div
        className={`w-full h-64 bg-gray-200 rounded ${className}`}
        style={shimmer}
        animate={shimmerAnimation}
      />
    );
  }

  return null;
}

interface MicroInteractionProps {
  children: React.ReactNode;
  variant?: 'hover-lift' | 'hover-glow' | 'click-bounce' | 'magnetic' | 'tilt';
  className?: string;
}

export function MicroInteraction({ 
  children, 
  variant = 'hover-lift',
  className = '' 
}: MicroInteractionProps) {
  const variants = {
    'hover-lift': {
      whileHover: { 
        y: -5,
        transition: { duration: 0.2 }
      },
      whileTap: { 
        y: -2,
        transition: { duration: 0.1 }
      }
    },
    'hover-glow': {
      whileHover: { 
        boxShadow: '0 0 20px rgba(64, 196, 180, 0.4)',
        transition: { duration: 0.2 }
      }
    },
    'click-bounce': {
      whileTap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    },
    'magnetic': {
      whileHover: { 
        scale: 1.05,
        transition: { duration: 0.2 }
      }
    },
    'tilt': {
      whileHover: { 
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.2 }
      }
    }
  };

  return (
    <motion.div
      className={className}
      {...variants[variant]}
    >
      {children}
    </motion.div>
  );
}

interface ProgressBarProps {
  progress: number;
  className?: string;
  variant?: 'linear' | 'circular' | 'wave';
  showPercentage?: boolean;
}

export function ProgressBar({ 
  progress, 
  className = '',
  variant = 'linear',
  showPercentage = false 
}: ProgressBarProps) {
  if (variant === 'circular') {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className={`relative ${className}`}>
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(64, 196, 180, 0.2)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#progress-gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C2185B" />
              <stop offset="100%" stopColor="#40C4B4" />
            </linearGradient>
          </defs>
        </svg>
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold text-brand-text">
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`relative h-4 bg-gray-200 rounded-full overflow-hidden ${className}`}>
        <motion.div
          className="h-full bg-gradient-to-r from-brand-magenta to-brand-turquoise relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-30"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
            }}
          />
        </motion.div>
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white">
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>
    );
  }

  // Linear variant
  return (
    <div className={`relative h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-brand-magenta to-brand-turquoise"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {showPercentage && (
        <div className="absolute top-full left-0 mt-1">
          <span className="text-sm text-brand-muted">
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );
}

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}

export function TypewriterEffect({ 
  text, 
  speed = 50,
  className = '',
  cursor = true 
}: TypewriterProps) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
}

