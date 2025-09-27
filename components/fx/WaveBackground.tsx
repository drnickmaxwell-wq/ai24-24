'use client';
import React from 'react';

let Impl: any;
try {
  // Prefer your original implementation if it exists:
  // /components/effects/WaveBackground.tsx
  // @ts-ignore
  Impl = require('../effects/WaveBackground').default;
} catch {
  // Fallback: a soft luxe gradient so Hero never breaks
  Impl = function WaveBackground({ amplitude = 0.5 }: { amplitude?: number }) {
    return (
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,0.20), transparent 60%),' +
            'radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,0.18), transparent 60%)',
          opacity: 0.35 + amplitude * 0.2,
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />
    );
  };
}

export default function WaveBackground(props: { amplitude?: number }) {
  return <Impl {...props} />;
}
