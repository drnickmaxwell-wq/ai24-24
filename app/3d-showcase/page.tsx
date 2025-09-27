'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ToothModelViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.ToothModelViewer),
  { ssr:false, loading: () => <div style={{height:320}} className="bg-muted/20 rounded-lg" /> }
);
const BeforeAfterViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.BeforeAfterViewer),
  { ssr:false, loading: () => <div style={{height:320}} className="bg-muted/20 rounded-lg" /> }
);
const ARSmileTryOn = dynamic(
  () => import('@/components/3d/ar-smile-tryOn').then(m => m.ARSmileTryOn),
  { ssr:false, loading: () => <div style={{height:280}} className="bg-muted/20 rounded-lg" /> }
);
const VirtualOfficeTour = dynamic(
  () => import('@/components/3d/virtual-office-tour').then(m => m.VirtualOfficeTour),
  { ssr:false, loading: () => <div style={{height:360}} className="bg-muted/20 rounded-lg" /> }
);

export const metadata = { title: '3D Showcase' };

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-8 grid grid-cols-1 gap-10">
      <section><h1 className="text-2xl md:text-3xl font-semibold">3D Showcase</h1></section>
      <section className="grid md:grid-cols-2 gap-8">
        <div><h2 className="font-medium mb-2">Interactive 3D Models</h2><ToothModelViewer height="400px" /></div>
        <div><h2 className="font-medium mb-2">AR Smile Try‑On</h2><ARSmileTryOn /></div>
      </section>
      <section><h2 className="font-medium mb-2">Before / After</h2><BeforeAfterViewer height="420px" /></section>
      <section><h2 className="font-medium mb-2">Virtual Office Tour</h2><VirtualOfficeTour height="560px" autoPlay /></section>
    </main>
  );
}
