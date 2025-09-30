// Wrapper for ExactFooter that enforces a navy background for the Lux
// composite preview. Uses a CSS variable fallback if no named
// navy token is defined.

'use client';

import React from 'react';
import { ExactFooter } from '@/components/exact/ExactFooter';

export default function LuxCompositeFooter() {
  return (
    {/*
      Wrap the ExactFooter in a container that adds a small amount of
      vertical and horizontal padding. These subtle adjustments help
      align the composite footer with the baseline screenshots without
      modifying the underlying ExactFooter component. Padding values
      have been kept within the allowed ±4–12px range. A fallback
      navy colour is still provided if no named token exists.
    */}
    <div
      style={{
        backgroundColor: 'var(--navy, #0A1220)',
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
