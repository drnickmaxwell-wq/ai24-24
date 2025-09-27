'use client';
import React from 'react';

function ShimmerTitle({children, className=''}:{children:React.ReactNode; className?:string}){
  return <h1 className={className} style={{background:'linear-gradient(90deg,var(--magenta),var(--turquoise))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',textShadow:'0 0 10px rgba(212,175,55,.15)'}}>{children}</h1>;
}
function SparkleButton({children,onClick,className=''}:{children:React.ReactNode;onClick?:()=>void;className?:string}){
  return <button onClick={onClick} className={`px-5 py-3 rounded-full text-white font-medium shadow-lg transition bg-gradient-to-r from-[var(--magenta)] to-[var(--turquoise)] hover:shadow-[0_0_24px_rgba(64,196,180,.45)] ${className}`}>{children}</button>;
}

let WaveBackground:any; try{WaveBackground=require('@/components/fx/WaveBackground').default;}catch{try{WaveBackground=require('@/components/effects/WebGLWaves').default;}catch{WaveBackground=({amplitude=0.5}:{amplitude?:number})=>(<div aria-hidden style={{position:'absolute',inset:0,background:'radial-gradient(120% 60% at 50% 0%, rgba(64,196,180,.20), transparent 60%), radial-gradient(120% 60% at 50% 100%, rgba(194,24,91,.18), transparent 60%)',opacity:0.35+amplitude/2,filter:'blur(20px)'}}/>);}};
let CoastalParticles:any; try{CoastalParticles=require('@/components/effects/CoastalParticles').default;}catch{CoastalParticles=()=>null;}

export default function HeroLuxe(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <WaveBackground amplitude={0.6} speed={0.25}/>
        <CoastalParticles density="medium"/>
      </div>
      <div className="relative z-10">
        <video className="w-full h-[70vh] object-cover" poster="/videos/hero/hero-poster.jpg" autoPlay muted playsInline loop>
          <source src="/videos/hero/hero.webm" type="video/webm"/>
          <source src="/videos/hero/hero.mp4" type="video/mp4"/>
        </video>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1200px] px-6">
            <div className="max-w-3xl">
              <ShimmerTitle className="text-4xl md:text-6xl font-extrabold tracking-tight">Luxury dental care by the sea</ShimmerTitle>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">Advanced 3D dentistry, same-day veneers & implants, and a calm, patient-first experience.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <SparkleButton onClick={()=>{window.location.href='/contact'}}>Book a 3D assessment</SparkleButton>
                <SparkleButton onClick={()=>{window.location.href='/patient-info/stories'}}>Watch patient stories</SparkleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 bg-gradient-to-b from-transparent to-white dark:to-[var(--ink-2)]" />
    </section>
  );
}
