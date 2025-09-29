"use client";

export default function WaveBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--turquoise) 0%, var(--magenta) 50%, transparent 100%)',
          filter: 'blur(80px)',
          opacity: 0.4,
        }}
      />
    </div>
  );
}
