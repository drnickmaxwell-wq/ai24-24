// "TreatmentsMenu" provides an accessible mega‑menu for the Treatments navigation item.
// It exposes a button that toggles a fly‑out panel containing category columns.
// Each category lists its own sub‑items pulled from the shared TREATMENT_GROUPS export.
// The menu supports mouse and keyboard interaction: clicking or hovering the top‑level item
// opens the panel, pressing Escape closes it, and clicking outside will also close it.
// Tab order proceeds through the links naturally. When the menu closes, focus returns
// to the trigger button.

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TREATMENT_GROUPS } from '@/components/treatments/groups';

/**
 * TreatmentsMenu renders a disclosure style mega‑menu for the "Treatments" nav item.
 * This component should be inserted in the header wherever the Treatments item would live.
 */
export default function TreatmentsMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside of the trigger or panel
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (panelRef.current && !panelRef.current.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        // Return focus back to the trigger for accessibility
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        ref={buttonRef}
        className="text-brand-text hover:text-brand-magenta transition-colors duration-300 font-medium relative group px-2 py-1"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
      >
        Treatments
        {/* underline animation */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-magenta to-brand-turquoise group-hover:w-full transition-all duration-300" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white shadow-xl rounded-xl border border-gray-100 px-6 py-4 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="menu"
            aria-label="Treatments submenu"
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {Object.entries(TREATMENT_GROUPS).map(([key, group]) => (
                <div key={key} className="min-w-[140px]">
                  <div className="uppercase text-xs font-semibold mb-2 shimmer-text">
                    {group.title}
                  </div>
                  <ul className="space-y-1">
                    {group.items.map((leaf) => (
                      <li key={leaf.slug}>
                        <Link
                          href={`/treatments/${key}/${leaf.slug}`}
                          className="block text-sm gradient-text lux-gold-flash px-1 py-0.5"
                          // When a link is clicked we close the panel automatically
                          onClick={() => setOpen(false)}
                          onMouseLeave={(e) => {
                            // restore gradient after hover ends
                            const el = e.currentTarget as HTMLElement;
                            el.classList.remove('text-brand-gold');
                          }}
                        >
                          {leaf.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
