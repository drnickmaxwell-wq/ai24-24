/**
 * Wrapper for ExactFooter that applies a magenta→turquoise gradient
 * background for the Lux Ink composite preview. Uses brand tokens only.
 */

'use client';

import React from 'react';
import { ExactFooter } from '@/components/exact/ExactFooter';
export default function LuxInkCompositeFooter() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, var(--magenta), var(--turquoise))',
      }}
    >
      <ExactFooter />
    </div>
  );
}
