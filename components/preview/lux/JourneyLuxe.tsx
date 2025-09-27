'use client';
import React from 'react';
const steps=[
  {n:1,title:'3D Diagnostics',text:'Digital scans & planning'},
  {n:2,title:'Guided Placement',text:'Predictable, precise surgery'},
  {n:3,title:'Same-day Restoration',text:'Provisional smile (when suitable)'},
  {n:4,title:'Final Smile',text:'Refinement & review'},
];
export default function JourneyLuxe(){
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Implant Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(s=>(
            <div key={s.n} className="p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
              <div className="text-[var(--turquoise)] font-bold">Step {s.n}</div>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="text-sm text-[var(--text,#1A1C1F)]/70 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
