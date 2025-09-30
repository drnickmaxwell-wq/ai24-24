// Wrapper for ExactFooter that enforces a navy background for the Lux
// composite preview. Uses a CSS variable fallback if no named
// navy token is defined.

'use client';

import React from 'react';
import { ExactFooter } from '@/components/exact/ExactFooter';

export default function LuxCompositeFooter() {
  return (
    <div style={{ backgroundColor: 'var(--navy, #0A1220)' }}>
      <ExactFooter />
    </div>
  );
}
