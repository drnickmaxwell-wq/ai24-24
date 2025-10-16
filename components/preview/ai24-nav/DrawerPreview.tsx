'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { groups } from './MenuDataPreview';

interface DrawerPreviewProps {
  onClose: () => void;
}

const DrawerPreview: React.FC<DrawerPreviewProps> = ({ onClose }) => {
  // Whether the Treatments section is expanded
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  // Which group slug is currently expanded
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (slug: string) => {
    setOpenGroup((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Drawer panel */}
      <div className="relative ml-auto w-80 max-w-full h-full bg-white p-6 overflow-y-auto">
        <button onClick={onClose} aria-label="Close menu" className="mb-4 text-brand-text">
          <X className="w-6 h-6" />
        </button>
        <nav className="space-y-4">
          <Link href="/" onClick={onClose} className="block text-brand-text hover:text-brand-magenta transition-colors">Home</Link>
          <Link href="/about" onClick={onClose} className="block text-brand-text hover:text-brand-magenta transition-colors">About</Link>
          {/* Treatments accordion */}
          <div>
            <button
              type="button"
              className="w-full text-left text-brand-text hover:text-brand-magenta transition-colors"
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              aria-expanded={treatmentsOpen}
            >
              Treatments
            </button>
            {treatmentsOpen && (
              <ul className="mt-2 pl-4 space-y-2">
                {groups.map((group) => (
                  <li key={group.slug}>
                    <button
                      type="button"
                      onClick={() => toggleGroup(group.slug)}
                      className="block w-full text-left font-medium text-brand-text hover:text-brand-magenta transition-colors"
                      aria-expanded={openGroup === group.slug}
                    >
                      {group.name}
                    </button>
                    {openGroup === group.slug && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {group.leaves.map((leaf) => (
                          <li key={leaf.slug}>
                            <Link
                              href={leaf.href}
                              onClick={onClose}
                              className="block text-lux-gradient lux-gold-flash"
                            >
                              {leaf.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link href="/fees" onClick={onClose} className="block text-brand-text hover:text-brand-magenta transition-colors">Fees & Plans</Link>
          <Link href="/patient-info" onClick={onClose} className="block text-brand-text hover:text-brand-magenta transition-colors">Patient Info</Link>
          <Link href="/contact" onClick={onClose} className="block text-brand-text hover:text-brand-magenta transition-colors">Contact</Link>
          {/* CTAs */}
          <div className="mt-6 space-y-3">
            <Link
              href="/emergency"
              onClick={onClose}
              className="block text-center py-2 px-4 border border-brand-turquoise text-brand-turquoise rounded-md hover:bg-brand-turquoise hover:text-white transition-colors"
            >
              Emergency
            </Link>
            <Link
              href="/booking"
              onClick={onClose}
              className="block text-center py-2 px-4 bg-gradient-to-r from-brand-magenta to-brand-turquoise text-white rounded-md hover:shadow-lg glow-magenta transition-shadow"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DrawerPreview;
