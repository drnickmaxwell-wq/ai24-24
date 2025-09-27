'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import groups from '@/treatments/groups';
import { cn } from '@/lib/utils';

type GroupKey = keyof typeof groups;

export default function GroupSubnav({
  group: initial,
}: {
  group?: GroupKey;
}) {
  const [open, setOpen] = React.useState<GroupKey | null>(initial ?? null);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 w-[min(100vw,1100px)]">
      {(Object.keys(groups) as GroupKey[]).map((key) => {
        const isOpen = open === key;
        const g = groups[key];

        return (
          <div key={key} className="rounded-xl bg-card/70 backdrop-blur p-4 border">
            <button
              type="button"
              className={cn(
                'w-full text-left text-lg font-semibold tracking-tight',
                'text-lux-gradient hover:lux-gold-flash transition-[background-position] duration-500'
              )}
              onClick={() => setOpen(isOpen ? null : key)}
              aria-expanded={isOpen}
              aria-controls={`panel-${key}`}
            >
              {g.title}
            </button>

            <div
              id={`panel-${key}`}
              hidden={!isOpen}
              className="mt-3 grid gap-2"
            >
              {g.items.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className={cn(
                    'inline-flex w-max rounded-full px-3 py-1 text-sm',
                    'text-lux-gradient hover:lux-gold-flash transition-[background-position] duration-500'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
