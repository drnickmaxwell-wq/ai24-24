import { TREATMENT_GROUPS } from '@/components/treatments/groups';

export interface Leaf {
  slug: string;
  label: string;
  href: string;
}

export interface Group {
  slug: string;
  name: string;
  leaves: Leaf[];
}

export const groups: Group[] = [
  {
    slug: 'general',
    name: 'General',
    leaves: TREATMENT_GROUPS.general.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/general/${item.slug}`,
    })),
  },
  {
    slug: 'cosmetic',
    name: 'Cosmetic',
    leaves: TREATMENT_GROUPS.cosmetic.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/cosmetic/${item.slug}`,
    })),
  },
  {
    slug: 'implants',
    name: 'Implants',
    leaves: TREATMENT_GROUPS.implants.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/implants/${item.slug}`,
    })),
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    leaves: TREATMENT_GROUPS.orthodontics.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/orthodontics/${item.slug}`,
    })),
  },
  {
    slug: 'hygiene',
    name: 'Hygiene',
    leaves: TREATMENT_GROUPS.technology.items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/technology/${item.slug}`,
    })),
  },
  {
    slug: 'advanced',
    name: 'Advanced',
    leaves: TREATMENT_GROUPS['3d-dentistry'].items.map((item) => ({
      slug: item.slug,
      label: item.label,
      href: `/treatments/3d-dentistry/${item.slug}`,
    })),,
];
)),
  },
];
