'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { groups } from '@/app/treatments/groups'; // <-- fixed path

export default function GroupSubnav({ group }: { group: keyof typeof groups }) {
  const pathname = usePathname();
  const cfg = groups[group];
  if (!cfg) return null;

  return (
    <div className="mt-2 space-y-1">
      {/* Luxe gradient text + 1s metallic gold flash */}
      <style jsx global>{`
        .lux-sub { display:block; padding:6px 8px; border-radius:8px; font-size:.95rem; line-height:1.4; }
        .lux-sub .txt {
          background-image:linear-gradient(90deg,#C2185B,#40C4B4);
          -webkit-background-clip:text; background-clip:text; color:transparent; position:relative;
        }
        .lux-sub .txt::after {
          content:''; position:absolute; inset:0;
          background-image:linear-gradient(90deg,#b8892d,#ffd873 35%,#b8892d 70%);
          -webkit-background-clip:text; background-clip:text; color:transparent; opacity:0; pointer-events:none;
        }
        .lux-sub:hover .txt::after { animation:luxGoldFlash 1100ms ease-in-out; }
        @keyframes luxGoldFlash { 0%{opacity:0}10%{opacity:1}85%{opacity:1}100%{opacity:0} }
        .lux-sub.active { background:linear-gradient(90deg,rgba(64,196,180,.08),rgba(194,24,91,.08)); }
      `}</style>

      {cfg.items.map((it) => (
        <Link key={it.href} href={it.href} className={cn('lux-sub', pathname === it.href && 'active')}>
          <span className="txt">{it.name}</span>
        </Link>
      ))}
    </div>
  );
}
