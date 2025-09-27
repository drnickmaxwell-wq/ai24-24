'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/** Minimal Slot so <Button asChild><Link/></Button> works without extra deps */
function Slot({ children, className, ...props }: { children: React.ReactElement; className?: string }) {
  return React.cloneElement(children, {
    className: cn(children.props.className, className),
    ...props,
  });
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const base =
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50';

const variants = {
  default: 'bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white shadow hover:opacity-90',
  outline: 'border border-brand-magenta text-brand-magenta hover:bg-brand-magenta/10',
  ghost: 'hover:bg-gray-50 text-brand-text',
} as const;

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-6 text-base',
} as const;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'default', size = 'md', ...props }, ref) => {
    const Comp: any = asChild ? Slot : 'button';
    return <Comp ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
