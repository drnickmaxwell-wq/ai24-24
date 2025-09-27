'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
// IMPORTANT: import from /app/treatments/groups (this was the Vercel error)
import { groups } from '@/app/treatments/groups';

export default function GroupSubnav({ group }: { group: keyof typeof groups }) {
  const pathname = usePathname();
  const data = groups[group];
  if (!data) return null;

  return (
    <aside className="space-y-3">
      <h3 className="text-base font-semibold tracking-wide text-brand-text/80">{data.title}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {data.items.map((item) => {
          const href = `/treatments/${group}/${item.slug}`;
          const active = pathname?.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'block rounded-md px-3 py-1.5 text-sm transition-all',
                  'gradient-text hover:gold-shimmer', // luxurious gradient + sparkle on hover
                  active && 'gold-shimmer'            // active = hold the gold
                )}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
