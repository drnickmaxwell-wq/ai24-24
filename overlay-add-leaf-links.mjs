import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const groups = {
  general: [
    ['check-ups','Check-ups (incl. oral cancer check)'],
    ['tooth-coloured-fillings','Tooth-Coloured Fillings'],
    ['crowns-and-bridges','Crowns & Bridges'],
    ['extractions','Extractions'],
    ['root-canal-treatment','Root Canal Treatment'],
    ['childrens-dentistry','Children’s Dentistry'],
    ['sedation','Sedation'],
    ['emergency-dentistry','Emergency Dentistry'],
  ],
  cosmetic: [
    ['veneers','Veneers'],
    ['teeth-whitening','Teeth Whitening'],
    ['composite-bonding','Composite Bonding'],
  ],
  '3d-dentistry': [
    ['3d-printed-veneers','3D Printed Veneers'],
    ['3d-same-day-dentures','3D Same-Day Dentures'],
    ['3d-restorative-dentistry','3D Restorative Dentistry'],
    ['3d-implants-overview','3D Implants Overview'],
  ],
  orthodontics: [
    ['spark-aligners','Spark Aligners'],
    ['fixed-braces','Fixed Braces'],
  ],
  implants: [
    ['3d-surgically-guided-implants','3D Surgically-Guided Implants'],
    ['same-day-implants','Same-day Implants'],
    ['3d-printed-restorations','3D Printed Restorations'],
    ['all-on-4-6-same-day','All-on-4/6 Same Day'],
  ],
  technology: [
    ['soft-tissue-laser','Soft Tissue Laser'],
    ['3d-scanning-and-printing','3D Scanning & Printing'],
    ['the-wand-painless-numbing','The Wand — Painless Numbing'],
  ]
};

for (const group of Object.keys(groups)) {
  const p = join(root, `app/treatments/${group}/page.tsx`);
  let src = readFileSync(p, "utf-8");
  if (!src.includes("/* SUBLINKS */")) {
    const list = groups[group]
      .map(([slug, label]) => `        <li><a href="/treatments/${group}/${slug}" className="text-[var(--turquoise)] hover:underline">${label}</a></li>`)
      .join("\n");
    src = src.replace(
      /<\/section>\s*<\/main>\s*$/s,
      `  <div className="mt-6">\n    <h2 className="text-lg font-semibold mb-2">More in ${group.replace('-', ' ')}</h2>\n    <ul className="space-y-1">\n${list}\n    </ul>\n  </div>\n</section>\n</main>\n`
    ).replace("Overview of this category.", "Overview of this category. /* SUBLINKS */");
    writeFileSync(p, src, "utf-8");
  }
}

console.log("✅ Injected sub-links into each group page.");
