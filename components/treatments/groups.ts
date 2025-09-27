export const TREATMENT_GROUPS: Record<string, { title: string; items: { slug: string; label: string }[] }> = {
  general: {
    title: 'General Dentistry',
    items: [
      { slug: 'check-ups', label: 'Check-ups (incl. oral cancer check)' },
      { slug: 'tooth-coloured-fillings', label: 'Tooth-Coloured Fillings' },
      { slug: 'crowns-and-bridges', label: 'Crowns & Bridges' },
      { slug: 'extractions', label: 'Extractions' },
      { slug: 'root-canal-treatment', label: 'Root Canal Treatment' },
      { slug: 'childrens-dentistry', label: 'Children’s Dentistry' },
      { slug: 'sedation', label: 'Sedation' },
      { slug: 'emergency-dentistry', label: 'Emergency Dentistry' },
    ],
  },
  cosmetic: {
    title: 'Cosmetic Dentistry',
    items: [
      { slug: 'veneers', label: 'Veneers' },
      { slug: 'teeth-whitening', label: 'Teeth Whitening' },
      { slug: 'composite-bonding', label: 'Composite Bonding' },
    ],
  },
  '3d-dentistry': {
    title: '3D Dentistry',
    items: [
      { slug: '3d-printed-veneers', label: '3D Printed Veneers' },
      { slug: '3d-same-day-dentures', label: '3D Same-Day Dentures' },
      { slug: '3d-restorative-dentistry', label: '3D Restorative Dentistry' },
      { slug: '3d-implants-overview', label: '3D Implants Overview' },
    ],
  },
  orthodontics: {
    title: 'Orthodontics',
    items: [
      { slug: 'spark-aligners', label: 'Spark Aligners' },
      { slug: 'fixed-braces', label: 'Fixed Braces' },
    ],
  },
  implants: {
    title: 'Dental Implants',
    items: [
      { slug: '3d-surgically-guided-implants', label: '3D Surgically-Guided Implants' },
      { slug: 'same-day-implants', label: 'Same-day Implants' },
      { slug: '3d-printed-restorations', label: '3D Printed Restorations' },
      { slug: 'all-on-4-6-same-day', label: 'All-on-4/6 Same Day' },
    ],
  },
  technology: {
    title: 'Technology',
    items: [
      { slug: 'soft-tissue-laser', label: 'Soft Tissue Laser' },
      { slug: '3d-scanning-and-printing', label: '3D Scanning & Printing' },
      { slug: 'the-wand-painless-numbing', label: 'The Wand — Painless Numbing' },
    ],
  },
};
