'use client';

import Link from 'next/link';
import { TREATMENT_GROUPS } from './groups';

export default function GroupSubnav({ group }: { group: keyof typeof TREATMENT_GROUPS }) {
  const g = TREATMENT_GROUPS[group];
  if (!g) return null;

  return (
    <aside className="sticky top-24">
      <div className="text-sm font-semibold mb-2">{g.title}</div>
      <ul className="space-y-1">
        {g.items.map((it) => (
          <li key={it.slug}>
            <Link
              href={`/treatments/${group}/${it.slug}`}
              className="text-sm block px-3 py-2 rounded-md
                bg-gradient-to-r from-[var(--magenta)]/0 to-[var(--turquoise)]/0
                hover:from-[var(--magenta)]/10 hover:to-[var(--turquoise)]/10
                hover:text-[var(--turquoise)]"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
