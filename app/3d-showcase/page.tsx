'use client';

import dynamic from 'next/dynamic';

export const metadata = { title: '3D Showcase' };

// Client-only dynamic import is allowed now because this file is a Client Component
const ViewerClient = dynamic(() => import('./viewer-client'), {
  ssr: false,
  loading: () => (
    <div className="mt-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 p-6">
      Loading 3D viewer…
    </div>
  ),
});

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold">3D Showcase</h1>
      <p className="mt-3 text-[var(--text,#1A1C1F)]/80">
        Interactive 3D viewer loads in the browser (SSR-safe).
      </p>
      <ViewerClient />
    </main>
  );
}
