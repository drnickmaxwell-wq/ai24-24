'use client';

export default function Page() {
  return (
    <main data-theme="ink" className="min-h-dvh bg-[#0A1220] text-white" style={{ padding: '2rem' }}>
      <h1>AI24 Home (Ink)</h1>
      <p>Design preview only. No production impact.</p>
      <div className="mt-4">
        <a href="/preview/home/ai24" className="underline mr-4">Light</a>
        <a href="/preview/home/ai24-ink" className="underline">Ink</a>
      </div>
    </main>
  );
}
