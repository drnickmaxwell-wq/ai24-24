# AI24 Menu Polish Patch

This patch updates **only** the header/nav and adds a small scoped CSS file used for the Treatments flyout gradient + gold shimmer, per the guardrails.

## Files
- `components/layout/header.tsx` (replace existing)
- `components/layout/header.menu.css` (new)

## What changed
- Desktop flyout: Hover **Treatments** shows the **six groups**. Click a group to reveal **only that group's leaves** in-place.
- Mobile drawer: **Treatments** becomes an accordion; tapping a group opens **only that group**.
- Visuals: leaf default text uses a **magenta→turquoise** gradient; **gold shimmer sweep** on hover/focus (~700ms) over the glyphs (not a block).
- Kept sticky glass header blur; added a **thin teal underline** on scroll.
- A11y: keyboard focus-visible is preserved; reduced motion respected.

## Apply
1. Create a work branch:
   ```bash
   git checkout -b feature/a1-ai24-menu-polish
   ```
2. Copy both files from this zip into your repo at the same paths (replace `header.tsx`, add `header.menu.css`).
3. Commit & push, then open PR:
   ```bash
   git add components/layout/header.tsx components/layout/header.menu.css
   git commit -m "feat(ai24): menu polish (groups→leaves, gradient+gold shimmer)"
   git push -u origin feature/a1-ai24-menu-polish
   ```
4. Trigger Vercel preview:
   ```bash
   curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_Z7CNERmWqQi13BFD1vMrjhPgsLRZ/vPMEB9N4xB"
   ```

_No packages, Node or Next version changes required._
