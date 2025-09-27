'use client';
import React from 'react';
const stories=[
  {name:'Emma',quote:'I smiled on the same day — it felt like magic.',video:'/videos/stories/emma.mp4'},
  {name:'Liam',quote:'I was so nervous, but they made it easy.',video:'/videos/stories/liam.mp4'},
];
export default function TestimonialsLuxe(){
  return (
    <section className="relative py-16">
      <div className="mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map(s=>(
          <div key={s.name} className="rounded-xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
            <video className="w-full h-64 object-cover" controls preload="none" poster="/videos/stories/poster.jpg">
              <source src={s.video} type="video/mp4" />
            </video>
            <div className="p-6">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-[var(--text,#1A1C1F)]/70 mt-1">“{s.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
