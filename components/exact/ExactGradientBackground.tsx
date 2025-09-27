'use client';

interface ExactGradientBackgroundProps {
  theme: 'light' | 'ink';
}

export default function ExactGradientBackground({ theme }: ExactGradientBackgroundProps) {
  const gradientClass = theme === 'light' 
    ? 'bg-gradient-to-br from-[#8B5A96] via-[#6B4C93] to-[#2D8B8B]'
    : 'bg-gradient-to-br from-[#0B1020] via-[#1a1a2e] to-[#16213e]';

  return (
    <div className={`fixed inset-0 ${gradientClass}`} />
  );
}
