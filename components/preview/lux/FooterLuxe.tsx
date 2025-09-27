'use client';

export default function FooterLuxe() {
  return (
    <footer className="mt-16">
      <div className="h-24 bg-gradient-to-t from-[var(--ink-3,#12141a)] to-transparent" />
      <div className="bg-[var(--ink-2,#0b0b0e)] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-10 border-t border-white/10">
          <div className="text-sm opacity-80">© {new Date().getFullYear()} St Mary’s House Dental Care — Shoreham-by-Sea</div>
        </div>
      </div>
    </footer>
  );
}
