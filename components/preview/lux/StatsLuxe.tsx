'use client';
import React from 'react';
export default function StatsLuxe(){
  const stats=[
    {value:'3D',label:'Printed Veneers'},
    {value:'Same-day',label:'Implants & Restorations'},
    {value:'5★',label:'Patient Reviews'},
    {value:'Calm',label:'Sedation Available'},
  ];
  return (
    <section className="relative z-10 py-12">
      <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s=>(
          <div key={s.label} className="p-6 text-center rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
            <div className="text-xl md:text-2xl font-semibold text-[var(--turquoise)]">{s.value}</div>
            <div className="text-sm text-[var(--text,#1A1C1F)]/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
