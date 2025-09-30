// A wrapper around an existing wave background component. This is
// rendered immediately beneath the hero to create the wave band.

'use client';

import React from 'react';
// Import the screenshot waves component used by the exact variants as
// it closely matches the provided screenshots. If you prefer a
// different wave component, you can swap the import here without
// modifying the original component.
import { ExactScreenshotWaves } from '@/components/exact/ExactScreenshotWaves';

export default function LuxWaveSection() {
  return (
    <div className="relative" aria-hidden="true">
      <ExactScreenshotWaves />
    </div>
  );
}
