'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { groups, type GroupKey } from '@/app/treatments/groups';

type Props = { group: GroupKey };

export default function GroupSubnav({ group }: Props) {
  const pathname = usePathname();
  const data = groups[group];

  return (
    <nav aria-label={`${data.label} sub-navigation`} className="space-y-4">
      {data.intro && <p className="text-brand-muted">{data.intro}</p>}

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded-xl px-4 py-3 border transition-all",
                  "bg-white/70 backdrop-blur border-gray-100 hover:shadow-lg",
                  active
                    ? "ring-1 ring-brand-gold/40"
                    : "hover:ring-1 hover:ring-brand-magenta/30"
                )}
              >
                <span
                  className={cn(
                    "font-medium bg-clip-text text-transparent",
                    "bg-[linear-gradient(90deg,#C2185B_0%,#40C4B4_100%)]",
                    "relative inline-block shimmer-text"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
