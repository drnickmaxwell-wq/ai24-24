import GroupSubnav from '@/components/treatments/GroupSubnav';
export const metadata = { title: 'Cosmetic Dentistry' };
export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
      <GroupSubnav group="cosmetic" />
      <section>
        <h1 className="text-2xl md:text-3xl font-semibold">Cosmetic Dentistry</h1>
        <p className="mt-3 text-[var(--text)]/80">Overview of this category.</p>
      </section>
    </main>
  );
}
