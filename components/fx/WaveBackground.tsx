'use client';
export default function WaveBackground({ amplitude = 0.5 }: { amplitude?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000_40%,transparent_70%)]">
      <div className="absolute inset-0 blur-2xl" style={{
        background:
          'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,.25), transparent 60%),' +
          'radial-gradient(120% 60% at 50% 100%, rgba(210,175,55,.12), transparent 60%),' +
          'radial-gradient(60% 60% at 0% 60%, rgba(194,24,91,.20), transparent 60%)'
      }}/>
    </div>
  );
}
