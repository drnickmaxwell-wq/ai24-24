'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export default function ShimmerText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('gradient-text hover:gold-shimmer transition-[background-position] duration-700', className)}>
      {children}
    </span>
  );
}
