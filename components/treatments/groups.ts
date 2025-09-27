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
    ],export type Leaf = { label: string; slug: string }
export type GroupKey = 'general' | 'cosmetic' | 'orthodontics' | 'implants' | '3d-dentistry' | 'facial-aesthetics'

export const groups: Record<GroupKey, { title: string; intro?: string; items: Leaf[] }> = {
  general: {
    title: 'General Dentistry',
    intro: 'Everyday care delivered calmly and carefully.',
    items: [
      { label: 'Check-ups (incl. oral cancer check)', slug: '/treatments/general/check-ups' },
      { label: 'Tooth-Coloured Fillings', slug: '/treatments/general/tooth-coloured-fillings' },
      { label: 'Crowns & Bridges', slug: '/treatments/general/crowns-and-bridges' },
      { label: 'Extractions', slug: '/treatments/general/extractions' },
      { label: 'Root Canal Treatment', slug: '/treatments/general/root-canal-treatment' },
      { label: 'Children’s Dentistry', slug: '/treatments/general/childrens-dentistry' },
      { label: 'Sedation', slug: '/treatments/general/sedation' },
      { label: 'Emergency Dentistry', slug: '/treatments/general/emergency-dentistry' },
    ],
  },
  cosmetic: {
    title: 'Cosmetic Dentistry',
    items: [
      { label: 'Veneers', slug: '/treatments/cosmetic/veneers' },
      { label: 'Teeth Whitening', slug: '/treatments/cosmetic/teeth-whitening' },
      { label: 'Composite Bonding', slug: '/treatments/cosmetic/composite-bonding' },
    ],
  },
  '3d-dentistry': {
    title: '3D Dentistry',
    items: [
      { label: '3D Printed Veneers', slug: '/treatments/3d-dentistry/3d-printed-veneers' },
      { label: '3D Same-Day Dentures', slug: '/treatments/3d-dentistry/3d-same-day-dentures' },
      { label: '3D Restorative Dentistry', slug: '/treatments/3d-dentistry/3d-restorative' },
      { label: '3D Implants Overview', slug: '/treatments/3d-dentistry/3d-implants' },
    ],
  },
  orthodontics: {
    title: 'Orthodontics',
    items: [
      { label: 'Spark Aligners', slug: '/treatments/orthodontics/spark-aligners' },
      { label: 'Fixed Braces', slug: '/treatments/orthodontics/fixed-braces' },
    ],
  },
  implants: {
    title: 'Dental Implants',
    items: [
      { label: 'Single Tooth', slug: '/treatments/implants/single-tooth' },
      { label: 'Same‑day Implants', slug: '/treatments/implants/same-day' },
    ],
  },
  'facial-aesthetics': {
    title: 'Facial Aesthetics',
    items: [
      { label: 'Skin Treatments', slug: '/treatments/facial-aesthetics/skin-treatments' },
    ],
  },
}

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
