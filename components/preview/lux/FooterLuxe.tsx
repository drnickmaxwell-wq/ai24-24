'use client';
export default function FooterLuxe(){
  return (
    <footer className="mt-16">
      <div className="h-24 bg-gradient-to-t from-[var(--ink-3,#12141a)] to-transparent" />
      <div className="relative bg-[var(--ink-2,#0b0b0e)] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(64,196,180,.35), transparent)'}}/>
        <div className="pointer-events-none absolute -bottom-24 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{background:'radial-gradient(closest-side, rgba(194,24,91,.28), transparent)'}}/>
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-10 border-t border-[rgba(212,175,55,.25)]">
          <div className="text-sm opacity-80">© {new Date().getFullYear()} St Mary’s House Dental Care — Shoreham-by-Sea</div>
        </div>
      </div>
    </footer>
  );
}
