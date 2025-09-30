"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { groups } from './MenuDataPreview';
import DrawerPreview from './DrawerPreview';

function PreviewTreatmentsMenu() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(groups[0]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="inline-flex items-center px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Treatments
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 grid grid-cols-3 bg-white shadow-lg border z-50">
          <div className="border-r">
            <ul>
              {groups.map((group) => (
                <li key={group.slug}>
                  <button
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 ${activeGroup.slug === group.slug ? 'font-semibold' : ''}`}
                    onClick={() => setActiveGroup(group)}
                  >
                    {group.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 p-4">
            <ul>
              {activeGroup.leaves.map((leaf) => (
                <li key={leaf.slug}>
                  <Link href={leaf.href} className="block px-2 py-1 text-lux-gradient hover:lux-gold-flash focus:lux-gold-flash focus:outline-none">
                    {leaf.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HeaderPreview() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/80">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <div className="flex items-center w-full justify-between md:justify-start">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.svg" alt="Logo" width={130} height={36} />
          </Link>
          <div className="hidden md:flex space-x-6 ml-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <PreviewTreatmentsMenu />
            <Link href="/fees-and-plans">Fees &amp; Plans</Link>
            <Link href="/patient-info">Patient Info</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="hidden md:flex space-x-4 ml-auto">
            <Link href="/emergency" className="text-sm font-medium hover:underline">Emergency</Link>
            <Link href="/book-consultation" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-brand-magenta text-white hover:bg-brand-magenta/90">
              Book Consultation
            </Link>
          </div>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu />
        </button>
      </nav>
      {drawerOpen && <DrawerPreview open={drawerOpen} setOpen={setDrawerOpen} />}
    </header>
  );
}
