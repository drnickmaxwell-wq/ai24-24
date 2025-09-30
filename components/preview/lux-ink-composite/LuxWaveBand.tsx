'use client';

import React from 'react';
import Image from 'next/image';

/**
 * LuxWaveBand renders a static wave background between the hero and the next section.
 * It respects prefers-reduced-motion by simply showing the image without animation.
 */
export default function LuxWaveBand() {
  return (
    <div aria-hidden="true">
      <Image
        src="/brand/waves/waves-bg-2560.jpg"
        alt=""
        width={2560}
        height={640}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </div>
  );
}
