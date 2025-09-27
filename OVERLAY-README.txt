
SMH OVERLAY V4 — SAFE DROP-IN (no full replacement)
---------------------------------------------------
This overlay only adds/updates a few files. It will NOT remove your existing pages.

How to apply (Windows):
1) Close your dev server in VS Code (Ctrl + C).
2) Unzip this overlay zip directly over your project folder. Choose "Replace" if asked.
3) In VS Code terminal, run:
   pnpm install
   pnpm dev
4) Check:
   /preview/home/lux
   /preview/home/lux-ink
   /3d-showcase

What this overlay contains:
- SSR‑safe 3D page (app/3d-showcase/)
- Luxe preview sections (components/preview/lux/*) + pages (app/preview/home/lux*)
- Drawer leaf link gradient + metallic shimmer helpers (CSS utilities)
- No changes to your production home page
