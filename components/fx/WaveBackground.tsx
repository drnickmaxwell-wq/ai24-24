'use client';

export default function WaveBackground({ amplitude = 0.5 }: { amplitude?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        maskImage: 'radial-gradient(120% 60% at 50% 0%, #000 0%, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(120% 60% at 50% 0%, #000 0%, transparent 60%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,0.16), transparent 60%), radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,0.14), transparent 60%)',
          opacity: 0.9,
        }}
      />
      <div
        className="absolute inset-x-0 -bottom-10 h-[140px] blur-2xl"
        style={{
          background: 'linear-gradient(90deg, rgba(194,24,91,0.35), rgba(64,196,180,0.35))',
          opacity: 0.8 * (0.7 + amplitude * 0.6),
        }}
      />
    </div>
  );
}
