'use client';
import '@/styles/preview/lux-composite.css';

export default function LuxArtifactPreviewPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10 text-center">
      <div>
        <h1 className="text-2xl font-semibold">LUX Artifact Preview (temporarily stubbed)</h1>
        <p className="mt-3 opacity-80">
          Unresolved <code>@artifact/*</code> imports have been removed to unblock the build.
          The original artifact code remains untouched elsewhere.
        </p>
      </div>
    </main>
  );
}
