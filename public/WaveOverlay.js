export default function WaveOverlay(){
  return (
    <div className="wave-overlay" aria-hidden="true">
      <svg viewBox="0 0 1600 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#40C4B4" />
            <stop offset="100%" stopColor="#C2185B" />
          </linearGradient>
        </defs>

        {/* two long groups that slide to create infinite wave motion */}
        <g className="layer-1" style={{transformBox:'fill-box', transformOrigin:'center'}}>
          <path d="M0,350 C300,300 500,420 800,370 C1100,320 1300,420 1600,360 L1600,600 L0,600 Z"
                fill="url(#waveGradient)" opacity="0.35"/>
          <path d="M0,420 C300,370 500,490 800,440 C1100,390 1300,490 1600,430 L1600,600 L0,600 Z"
                fill="url(#waveGradient)" opacity="0.22"/>
        </g>

        <g className="layer-2" style={{transformBox:'fill-box', transformOrigin:'center'}}>
          <path d="M0,300 C300,250 500,370 800,320 C1100,270 1300,370 1600,310 L1600,600 L0,600 Z"
                fill="url(#waveGradient)" opacity="0.18"/>
          <path d="M0,470 C300,420 500,540 800,490 C1100,440 1300,540 1600,480 L1600,600 L0,600 Z"
                fill="url(#waveGradient)" opacity="0.3"/>
        </g>
      </svg>
    </div>
  );
}
