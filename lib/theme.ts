/**
 * St Mary's House Dental Care - Brand Theme Configuration
 * Luxury light theme with coastal-inspired colors
 */

export const brandColors = {
  // Primary brand colors
  magenta: '#C2185B',
  turquoise: '#40C4B4', 
  gold: '#D4AF37',
  
  // Base colors (light luxury theme)
  background: '#F7F7F9',
  surface: '#FFFFFF',
  text: '#1A1C1F',
  muted: '#6A6F7A',
  
  // Extended palette for luxury effects
  magentaLight: '#E91E63',
  magentaDark: '#AD1457',
  turquoiseLight: '#4DD0E1',
  turquoiseDark: '#00ACC1',
  goldLight: '#FFD700',
  goldDark: '#B8860B',
  
  // Semantic colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
} as const;

export const typography = {
  // Font families
  heading: ['Montserrat', 'system-ui', 'sans-serif'],
  body: ['Lora', 'Georgia', 'serif'],
  
  // Font sizes (responsive)
  sizes: {
    // Front page
    frontPage: {
      headline: '4.5rem', // 72px
      subtitle: '2.25rem', // 36px  
      body: '1.5rem', // 24px
    },
    // Content pages
    contentPage: {
      headline: '2.25rem', // 36px
      subtitle: '1.5rem', // 24px
      body: '1.25rem', // 20px
    },
    // Mobile adjustments
    mobile: {
      frontPageHeadline: '3rem', // 48px
      frontPageSubtitle: '1.75rem', // 28px
      contentPageHeadline: '1.875rem', // 30px
    }
  },
  
  // Font weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  }
} as const;

export const spacing = {
  // Border radius for luxury feel
  radius: '18px',
  
  // Container max width
  maxWidth: '1200px',
  
  // Luxury spacing scale
  xs: '0.25rem',
  sm: '0.5rem', 
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const;

export const effects = {
  // Glow effects for luxury feel
  glow: {
    magenta: `0 0 20px ${brandColors.magenta}40`,
    turquoise: `0 0 20px ${brandColors.turquoise}40`,
    gold: `0 0 20px ${brandColors.gold}40`,
    soft: '0 0 30px rgba(255, 255, 255, 0.3)',
  },
  
  // Shimmer animation keyframes
  shimmer: {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
  },
  
  // Breathing animation for favicon
  breathe: {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  },
  
  // Wave animation
  wave: {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' },
  }
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Theme provider context type
export interface ThemeContextType {
  colors: typeof brandColors;
  typography: typeof typography;
  spacing: typeof spacing;
  effects: typeof effects;
  breakpoints: typeof breakpoints;
}

// CSS custom properties for runtime theme switching
export const cssVariables = {
  '--color-magenta': brandColors.magenta,
  '--color-turquoise': brandColors.turquoise,
  '--color-gold': brandColors.gold,
  '--color-background': brandColors.background,
  '--color-surface': brandColors.surface,
  '--color-text': brandColors.text,
  '--color-muted': brandColors.muted,
  '--radius': spacing.radius,
  '--max-width': spacing.maxWidth,
} as const;

