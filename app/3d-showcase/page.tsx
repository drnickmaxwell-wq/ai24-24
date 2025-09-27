import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = { title: '3D Showcase' };

// Client components are lazy loaded with SSR disabled:
const ToothModelViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.ToothModelViewer),
  { ssr: false, loading: () => <div style={{height:400}} /> }
);
const BeforeAfterViewer = dynamic(
  () => import('@/components/3d/tooth-model-viewer').then(m => m.BeforeAfterViewer),
  { ssr: false, loading: () => <div style={{height:500}} /> }
);
const ARSmileTryOn = dynamic(
  () => import('@/components/3d/ar-smile-tryOn').then(m => m.ARSmileTryOn),
  { ssr: false, loading: () => <div style={{height:400}} /> }
);
const VirtualOfficeTour = dynamic(
  () => import('@/components/3d/virtual-office-tour').then(m => m.VirtualOfficeTour),
  { ssr: false, loading: () => <div style={{height:500}} /> }
);

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12 grid gap-12">
      <section className="grid gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold">3D Showcase</h1>
        <p className="text-lg text-muted-foreground">
          Explore our interactive 3D models, AR try‑on and virtual office tour.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div className="grid gap-3">
          <h2 className="text-xl font-semibold">Interactive 3D Models</h2>
          <ToothModelViewer />
        </div>

        <div className="grid gap-3">
          <h2 className="text-xl font-semibold">AR Smile Try‑on</h2>
          <ARSmileTryOn />
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-xl font-semibold">Before & After</h2>
        <BeforeAfterViewer />
      </section>

      <section className="grid gap-6">
        <h2 className="text-xl font-semibold">Virtual Office Tour</h2>
        <VirtualOfficeTour />
      </section>
    </main>
  );
}
