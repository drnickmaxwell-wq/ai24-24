'use client';
export default function CoastalParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes floatY { 0%{transform:translateY(0) translateX(0);opacity:0;}
          10%{opacity:.9;} 100%{transform:translateY(-160%) translateX(10%);opacity:0;} }
        .dot{position:absolute;width:6px;height:6px;border-radius:9999px;
          background:radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0.15) 60%, transparent 70%);
          filter:drop-shadow(0 0 6px rgba(212,175,55,0.6));animation:floatY 9s linear infinite;}
        @media (prefers-reduced-motion){.dot{display:none;}}
      `}</style>
      {Array.from({length:18}).map((_,i)=>(
        <span key={i} className="dot"
          style={{left:`${(i*53)%100}%`,bottom:`${(i*37)%100}%`,animationDelay:`${(i*0.4)%6}s`}}/>
      ))}
    </div>
  );
}
