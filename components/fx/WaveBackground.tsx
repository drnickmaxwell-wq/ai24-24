// components/fx/WaveBackground.tsx
export default function WaveBackground({ amplitude = 0.5 }: { amplitude?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,0.20), transparent 60%)," +
          "radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,0.18), transparent 60%)",
        opacity: 0.35 + amplitude * 0.2,
        filter: "blur(20px)",
      }}
    />
  );
}
