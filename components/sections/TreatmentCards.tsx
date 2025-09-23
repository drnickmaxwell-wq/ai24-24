"use client";

import React from "react";
import dynamic from "next/dynamic";

const SparkleButton = dynamic(
  () => import("@/components/ui/SparkleButton"),
  { ssr: false }
);

interface TreatmentCard {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "magenta" | "turquoise" | "gold";
  href: string;
}

const treatments: TreatmentCard[] = [
  {
    icon: "🦷",
    title: "3D Digital Dentistry",
    description: "Experience the future with our cutting-edge 3D scanning and treatment planning.",
    buttonText: "Explore 3D Tech",
    buttonVariant: "magenta",
    href: "/treatments/3d-dentistry"
  },
  {
    icon: "✨",
    title: "Porcelain Veneers",
    description: "Transform your smile with our luxury porcelain veneers and cosmetic treatments.",
    buttonText: "Perfect Your Smile",
    buttonVariant: "turquoise",
    href: "/treatments/veneers"
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    description: "Restore your confidence with our premium dental implant solutions.",
    buttonText: "Restore Your Smile",
    buttonVariant: "gold",
    href: "/treatments/implants"
  }
];

export default function TreatmentCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[var(--content)] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-magenta-teal">Luxury Coastal</span>
            <span className="block text-[var(--ink)] mt-2">Dentistry</span>
          </h2>
          <p className="text-xl text-[var(--ink-soft)] max-w-2xl mx-auto">
            Where Innovation Meets Elegance
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="group relative theme-glass theme-border rounded-[var(--radius)] p-8 text-center transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Icon */}
              <div className={`h-16 w-16 rounded-2xl ${
                treatment.buttonVariant === "magenta" ? "grad-pink-teal" :
                treatment.buttonVariant === "turquoise" ? "grad-teal-gold" : "grad-gold-pink"
              } grid place-items-center mx-auto mb-6`}>
                <span className="text-2xl">{treatment.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--ink)] mb-4">
                {treatment.title}
              </h3>
              
              <p className="text-[var(--ink-soft)] mb-8 leading-relaxed">
                {treatment.description}
              </p>

              {/* CTA Button */}
              <SparkleButton
                href={treatment.href}
                variant={treatment.buttonVariant}
                size="md"
                className="w-full"
              >
                {treatment.buttonText}
              </SparkleButton>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-[var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  boxShadow: treatment.buttonVariant === "magenta" ? "var(--glow-magenta)" :
                            treatment.buttonVariant === "turquoise" ? "var(--glow-turquoise)" : "var(--glow-gold)"
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[var(--ink-soft)] mb-6">
            Ready to transform your smile with luxury coastal dentistry?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SparkleButton
              href="/contact"
              variant="magenta"
              size="lg"
            >
              Book Consultation
            </SparkleButton>
            <SparkleButton
              href="/treatments"
              variant="turquoise"
              size="lg"
            >
              View All Treatments
            </SparkleButton>
          </div>
        </div>
      </div>
    </section>
  );
}
