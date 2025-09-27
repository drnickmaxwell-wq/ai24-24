'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
export default function ShimmerTitle({ children, className }:{children:React.ReactNode,className?:string}){
  return (<span className={cn('lux-gradient-text relative inline-block', className)}>
    {children}<span aria-hidden className="lux-gold-shimmer"/></span>);
}
