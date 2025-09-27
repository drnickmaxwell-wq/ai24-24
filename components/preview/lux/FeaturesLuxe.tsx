'use client';
import React from 'react';
const features=[
  {title:'3D Printed Veneers',text:'Same-day smile design & fabrication for precise, natural results.'},
  {title:'Same-day Implants',text:'When suitable, placement and restoration coordinated in one visit.'},
  {title:'Calm & Comfortable',text:'Sedation options with a gentle, unhurried approach.'},
  {title:'5★ Stories',text:'Real transformations, told in their own words.'},
];
export default function FeaturesLuxe(){
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f=>(
          <div key={f.title} className="p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-[var(--text,#1A1C1F)]/70">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
