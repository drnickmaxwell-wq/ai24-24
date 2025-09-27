// overlay-treatments.mjs — adds treatment group pages and updates header menu (additive, no overwrites)
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";

const root = process.cwd();
const out = (p, s) => { const f = join(root, p); mkdirSync(dirname(f), { recursive: true }); if (!existsSync(f)) writeFileSync(f, s); };

const stub = (title) => `export const metadata = { title: '${title}' };
export default function Page(){return(<main style={{padding:'2rem'}}><h1>${title}</h1><p>Placeholder page. Content coming shortly.</p></main>)}\n`;

// Create group index pages
[
  ["app/treatments/page.tsx","Treatments"],
  ["app/treatments/general/page.tsx","General Dentistry"],
  ["app/treatments/cosmetic/page.tsx","Cosmetic Dentistry"],
  ["app/treatments/3d-dentistry/page.tsx","3D Dentistry"],
  ["app/treatments/orthodontics/page.tsx","Orthodontics"],
  ["app/treatments/implants/page.tsx","Dental Implants"],
  ["app/treatments/technology/page.tsx","Technology"],
  ["app/patient-info/page.tsx","Patient Info"]
].forEach(([p,t]) => out(p, stub(t)));

// Update header navigationItems in components/layout/header.tsx
const headerPath = join(root, "components/layout/header.tsx");
let src = readFileSync(headerPath, "utf-8");
const newItems = `const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Treatments',
    href: '/treatments',
    submenu: [
      { name: 'General Dentistry', href: '/treatments/general' },
      { name: 'Cosmetic Dentistry', href: '/treatments/cosmetic' },
      { name: '3D Dentistry', href: '/treatments/3d-dentistry' },
      { name: 'Orthodontics', href: '/treatments/orthodontics' },
      { name: 'Implants', href: '/treatments/implants' },
      { name: 'Technology', href: '/treatments/technology' },
    ],
  },
  { name: 'Fees & Plans', href: '/fees' },
  { name: 'Patient Info', href: '/patient-info' },
  { name: 'Contact', href: '/contact' },
];`;
src = src.replace(/const navigationItems\s*=\s*\[[\s\S]*?\];/, newItems);
writeFileSync(headerPath, src, "utf-8");

console.log("✅ Added treatment group pages and updated header menu.");
