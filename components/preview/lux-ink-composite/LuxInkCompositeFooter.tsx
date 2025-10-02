/**
 * Wrapper for ExactFooter that applies a magenta–turquoise gradient
 * background to the Lux Ink composite preview. Uses brand tokens only.
 */

'use client';

import React from 'react';
import { ExactFooter } from '@/components/exact/ExactFooter';

export default function LuxInkCompositeFooter() {
  return (
    /*
      Wrap the ExactFooter in a container that adds vertical and horizontal
      padding and refines the gradient stop positions. These subtle
      adjustments help align the composite footer with baseline slices
      without altering the underlying ExactFooter component. Only token
      colours are used, and the angle remains 90deg as per brand design.
    */
    <div
      style={{
        background: 'linear-gradient(90deg, var(--magenta) 0%, var(--magenta) 55%, var(--turquoise) 100%)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <ExactFooter />
    </div>
  );
}
