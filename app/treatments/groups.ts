// app/treatments/groups.ts
export type GroupKey =
  | "general"
  | "cosmetic"
  | "3d-dentistry"
  | "orthodontics"
  | "implants"
  | "technology";

export type Leaf = { label: string; href: string };

export const groups: Record<
  GroupKey,
  { label: string; intro?: string; items: Leaf[] }
> = {
  general: {
    label: "General Dentistry",
    intro: "Everyday care delivered calmly and carefully.",
    items: [
      { label: "Check-ups (incl. oral cancer check)", href: "/treatments/general/check-ups" },
      { label: "Tooth-Coloured Fillings", href: "/treatments/general/tooth-coloured-fillings" },
      { label: "Crowns & Bridges", href: "/treatments/general/crowns-and-bridges" },
      { label: "Extractions", href: "/treatments/general/extractions" },
      { label: "Root Canal Treatment", href: "/treatments/general/root-canal-treatment" },
      { label: "Children’s Dentistry", href: "/treatments/general/childrens-dentistry" },
      { label: "Sedation", href: "/treatments/general/sedation" },
      { label: "Emergency Dentistry", href: "/treatments/general/emergency-dentistry" },
    ],
  },
  cosmetic: {
    label: "Cosmetic Dentistry",
    items: [
      { label: "Veneers", href: "/treatments/cosmetic/veneers" },
      { label: "Teeth Whitening", href: "/treatments/cosmetic/teeth-whitening" },
      { label: "Composite Bonding", href: "/treatments/cosmetic/composite-bonding" },
    ],
  },
  "3d-dentistry": {
    label: "3D Dentistry",
    items: [
      { label: "3D Printed Veneers", href: "/treatments/3d-dentistry/3d-printed-veneers" },
      { label: "3D Same-Day Dentures", href: "/treatments/3d-dentistry/3d-same-day-dentures" },
      { label: "3D Restorative Dentistry", href: "/treatments/3d-dentistry/3d-restorative" },
      { label: "3D Implants Overview", href: "/treatments/3d-dentistry/3d-implants-overview" },
    ],
  },
  orthodontics: {
    label: "Orthodontics",
    items: [
      { label: "Spark Aligners", href: "/treatments/orthodontics/spark-aligners" },
      { label: "Fixed Braces", href: "/treatments/orthodontics/fixed-braces" },
    ],
  },
  implants: {
    label: "Implants",
    items: [
      { label: "Single Tooth", href: "/treatments/implants/single-tooth" },
      { label: "Multiple Teeth", href: "/treatments/implants/multiple-teeth" },
      { label: "Full Arch (All‑on‑X)", href: "/treatments/implants/full-arch" },
    ],
  },
  technology: {
    label: "Technology",
    items: [
      { label: "The Wand", href: "/treatments/technology/the-wand" },
      { label: "3D Scanning and Printing", href: "/treatments/technology/scanning-and-printing" },
      { label: "Soft Tissue Laser", href: "/treatments/technology/soft-tissue-laser" },
    ],
  },
};
