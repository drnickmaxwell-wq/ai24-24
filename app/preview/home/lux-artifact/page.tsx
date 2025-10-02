'use client';
import '@/styles/preview/lux-pages.css';
export default function LuxArtifactPreviewPage() {
  return (
    <main className="lux-page p-8">
      <div className="mx-auto max-w-screen-lg rounded-xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">LUX Artifact Preview (temporarily stubbed)</h1>
        <p className="mt-3 opacity-80">
          This preview route referenced a non-existent alias (<code>@artifact/*</code>). The page is stubbed to keep CI green.
          Original code remains in Git history. Once the correct artifact paths exist, swap this stub back to real imports.
        </p>
      </div>
    </main>
  );
}
