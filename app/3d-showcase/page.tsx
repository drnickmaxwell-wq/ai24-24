import ViewerClient from './viewer-client';


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
