'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { groups } from '@/treatments/groups';

export default function GroupSubnav({ group }: { group: keyof typeof groups }) {
  const pathname = usePathname();
  const items = groups[group] ?? [];
  return (
    <nav className="mt-2 space-y-2">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={cn(
              'block rounded-md px-3 py-2 text-sm transition-all duration-300 relative',
              'lux-sub-gradient-text',
              active && 'ring-1 ring-brand-turquoise/40 bg-white/30 dark:bg-white/5'
            )}
          >
            <span className="relative z-10">{it.label}</span>
            <span className="lux-sub-gold-shimmer" aria-hidden />
          </Link>
        );
      })}
    </nav>
  );
}
