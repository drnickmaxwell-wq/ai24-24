"use client";

export default function WebGLWaves() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="wave-layer" />
      <style jsx>{`
        .wave-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, var(--turquoise), var(--magenta));
          opacity: 0.3;
          animation: waveMove 8s ease-in-out infinite alternate;
        }
        @keyframes waveMove {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-10%) scale(1.05);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-layer {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
