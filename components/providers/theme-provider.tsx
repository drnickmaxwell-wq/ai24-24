'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { brandColors, typography, spacing, effects, breakpoints, type ThemeContextType } from '@/lib/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme: ThemeContextType = {
    colors: brandColors,
    typography,
    spacing,
    effects,
    breakpoints,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Hook for accessing brand colors directly
export function useBrandColors() {
  const { colors } = useTheme();
  return colors;
}

// Hook for accessing typography settings
export function useTypography() {
  const { typography } = useTheme();
  return typography;
}

// Hook for accessing spacing values
export function useSpacing() {
  const { spacing } = useTheme();
  return spacing;
}

// Hook for accessing effects
export function useEffects() {
  const { effects } = useTheme();
  return effects;
}

