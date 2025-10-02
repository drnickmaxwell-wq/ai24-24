'use client';

import HeaderPreview from '../../../../components/preview/ai24-nav/HeaderPreview';
import '../../../../styles/preview/ai24-nav.css';

export default function Page() {
  return (
    <>
      <HeaderPreview />
      <main data-theme="ink" className="min-h-dvh bg-[#0A1220] text-white" style={{ padding: '2rem' }}>
        <h1>Ai24 Home (Ink)</h1>
        <p>Design preview only. No production impact.</p>
        <div className="mt-4">
          <a href="/preview/home/ai24" className="underline mr-4">Light</a>
          <a href="/preview/home/ai24-ink" className="underline">Ink</a>
        </div>
      </main>
    </>
  );
}
