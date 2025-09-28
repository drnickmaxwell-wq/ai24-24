'use client';

import React from "react";

interface InkThemeProps {
  children: React.ReactNode;
}

export default function InkTheme({ children }: InkThemeProps) {
  return <section className="ink">{children}</section>;
}
