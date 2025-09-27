'use client';

import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const ToothModelViewer   = dynamic(() => import('@/components/3d/tooth-model-viewer').then(m => m.ToothModelViewer), { ssr: false });
const BeforeAfterViewer  = dynamic(() => import('@/components/3d/tooth-model-viewer').then(m => m.BeforeAfterViewer), { ssr: false });
const ARSmileTryOn       = dynamic(() => import('@/components/3d/ar-smile-tryOn').then(m => m.ARSmileTryOn), { ssr: false });
const VirtualOfficeTour  = dynamic(() => import('@/components/3d/virtual-office-tour').then(m => m.VirtualOfficeTour), { ssr: false });

export const metadata: Metadata = { title: "3D Showcase" };

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-8 grid gap-10">
      <section>
        <h1 className="text-2xl md:text-3xl font-semibold">3D Showcase</h1>
        <p className="text-brand-muted">Interactive 3D, AR try‑on and virtual tour.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">3D Models</h2>
        <ToothModelViewer height="400px" />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">AR Smile Try‑on</h2>
        <ARSmileTryOn />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Before & After</h2>
        <BeforeAfterViewer height="500px" />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium">Virtual Practice Tour</h2>
        <VirtualOfficeTour height="600px" autoPlay />
      </section>
    </main>
  );
}
