'use client';
import React from 'react';
const faqs=[
  {q:'Do you offer same-day appointments?',a:'We do our best for urgent cases. Call 01273 453109.'},
  {q:'Do you provide Spark Aligners?',a:'Yes. We plan treatments in-house with digital scans.'},
  {q:'Is there parking?',a:'Yes, parking is available nearby on St Mary’s Road.'},
  {q:'Is sedation available?',a:'Sedation can be arranged after assessment.'},
];
export default function FaqLuxe(){
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">FAQs</h2>
        <div className="divide-y divide-slate-200 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
          {faqs.map((f,i)=>(
            <details key={i} className="px-6 py-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-[var(--text,#1A1C1F)]/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
