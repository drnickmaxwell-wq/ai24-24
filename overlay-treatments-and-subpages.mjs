// overlay-treatments-and-subpages.mjs
// Adds group index pages + sub-pages under /treatments/* and updates the header menu
// Non-destructive: only creates files that don't already exist.

import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";

const root = process.cwd();
const out = (p, s) => { const f = join(root, p); mkdirSync(dirname(f), { recursive: true }); if (!existsSync(f)) writeFileSync(f, s); };
const stub = (title) => `export const metadata = { title: '${title}' };
export default function Page(){return(<main style={{padding:'2rem'}}><h1>${title}</h1><p>Placeholder page. Content coming shortly.</p></main>)}\n`;

// ---- GROUPS (index pages) ----
const groups = {
  general: {
    title: 'General Dentistry',
    subs: [
      ['check-ups','Check-ups (incl. oral cancer check)'],
      ['tooth-coloured-fillings','Tooth-Coloured Fillings'],
      ['crowns-and-bridges','Crowns & Bridges'],
      ['extractions','Extractions'],
      ['root-canal-treatment','Root Canal Treatment'],
      ['childrens-dentistry','Children’s Dentistry'],
      ['sedation','Sedation'],
      ['emergency-dentistry','Emergency Dentistry'],
    ]
  },
  cosmetic: {
    title: 'Cosmetic Dentistry',
    subs: [
      ['veneers','Veneers'],
      ['teeth-whitening','Teeth Whitening'],
      ['composite-bonding','Composite Bonding'],
    ]
  },
  '3d-dentistry': {
    title: '3D Dentistry',
    subs: [
      ['3d-printed-veneers','3D Printed Veneers'],
      ['3d-same-day-dentures','3D Same-Day Dentures'],
      ['3d-restorative-dentistry','3D Restorative Dentistry'],
      ['3d-implants-overview','3D Implants Overview (Guided + Restorations)'],
    ]
  },
  orthodontics: {
    title: 'Orthodontics',
    subs: [
      ['spark-aligners','Spark Aligners'],
      ['fixed-braces','Fixed Braces'],
    ]
  },
  implants: {
    title: 'Dental Implants',
    subs: [
      ['3d-surgically-guided-implants','3D Surgically-Guided Implants'],
      ['same-day-implants','Same-day Implants'],
      ['3d-printed-restorations','3D Printed Restorations'],
      ['all-on-4-6-same-day','All-on-4/6 Same Day'],
    ]
  },
  technology: {
    title: 'Technology',
    subs: [
      ['soft-tissue-laser','Soft Tissue Laser'],
      ['3d-scanning-and-printing','3D Scanning & Printing'],
      ['the-wand-painless-numbing','The Wand — Painless Numbing'],
    ]
  }
};

// Create /treatments index
out("app/treatments/page.tsx", stub("Treatments"));

// Create group index + sub pages
for (const [slug, def] of Object.entries(groups)) {
  out(`app/treatments/${slug}/page.tsx`, stub(def.title));
  for (const [subSlug, subTitle] of def.subs) {
    out(`app/treatments/${slug}/${subSlug}/page.tsx`, stub(subTitle));
  }
}

// Patient Info hub (parent)
out("app/patient-info/page.tsx", stub("Patient Info"));

// ---- UPDATE HEADER MENU (groups only, not all subs) ----
const headerPath = join(root, "components/layout/header.tsx");
let hdr = readFileSync(headerPath, "utf-8");

// Build grouped submenu (six groups only)
const submenu = [
  "      { name: 'General Dentistry', href: '/treatments/general' },",
  "      { name: 'Cosmetic Dentistry', href: '/treatments/cosmetic' },",
  "      { name: '3D Dentistry', href: '/treatments/3d-dentistry' },",
  "      { name: 'Orthodontics', href: '/treatments/orthodontics' },",
  "      { name: 'Implants', href: '/treatments/implants' },",
  "      { name: 'Technology', href: '/treatments/technology' },",
].join("\n");

const newItems = `const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Treatments',
    href: '/treatments',
    submenu: [
${submenu}
    ]
  },
  { name: 'Fees & Plans', href: '/fees' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Contact', href: '/contact' },
];`;

hdr = hdr.replace(/const navigationItems\s*=\s*\[[\s\S]*?\];/, newItems);
writeFileSync(headerPath, hdr, "utf-8");

console.log("✅ Created group + sub-pages and updated header menu (groups only).");
