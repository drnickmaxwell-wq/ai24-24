'use client';
export default function WebGLWaves({ amplitude = 0.5 }: { amplitude?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-x-0 bottom-0 h-24 opacity-25"
           style={{ background: 'linear-gradient(0deg, rgba(64,196,180,.35), transparent)' }} />
    </div>
  );
}
