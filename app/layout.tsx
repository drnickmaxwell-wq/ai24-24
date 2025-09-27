import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SimpleChatbot } from "@/components/ai/simple-chatbot";
import { JsonLd, organizationSchema } from "@/components/seo/json-ld";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "St Mary's House Dental Care - Going the Extra Smile | Luxury Dental Shoreham-by-Sea",
  description:
    "Premium dental care at St Mary's House, Shoreham-by-Sea. Luxury treatments including AI-Powered 3D Dentistry, Same-Day Veneers, Digital Twin Smile Simulation & advanced implant restorations. Going the Extra Smile.",
  keywords: [
    "luxury dental clinic Shoreham-by-Sea",
    "coastal dental care West Sussex",
    "premium dentist",
    "3D printed veneers",
    "same-day veneers",
    "dental implants",
    "AI dentistry",
    "digital twin smile simulation",
    "teeth whitening",
    "emergency dentist",
    "dental anxiety treatment",
  ],
  authors: [{ name: "St Mary's House Dental Care" }],
  creator: "St Mary's House Dental Care",
  publisher: "St Mary's House Dental Care",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://smhdental.co.uk"
  ),
  alternates: { canonical: "/" },
  openGraph: {
    title: "St Mary's House Dental Care - Going the Extra Smile",
    description:
      "Experience luxury dental care by the sea in Shoreham-by-Sea, West Sussex. Advanced AI-powered 3D dentistry treatments with a personal touch.",
    url: "/",
    siteName: "St Mary's House Dental Care",
    images: [
      {
        url: "/logos/horizontal-title-turquoise-1024.png",
        width: 1024,
        height: 512,
        alt: "St Mary's House Dental Care Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St Mary's House Dental Care - Going the Extra Smile",
    description:
      "Experience luxury dental care by the sea in Shoreham-by-Sea, West Sussex. Advanced AI-powered 3D dentistry treatments with a personal touch.",
    images: ["/logos/horizontal-title-turquoise-1024.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: process.env.GOOGLE_VERIFICATION_ID },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon & manifest */}
        <link rel="icon" href="/logos/flower-32.png" sizes="32x32" />
        <link rel="icon" href="/logos/flower-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/logos/flower-192.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Viewport (was missing / causing mobile issues) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme meta */}
        <meta name="theme-color" content="#C2185B" />
        <meta name="msapplication-TileColor" content="#C2185B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preloads */}
        <link rel="preload" as="image" href="/videos/hero/hero-poster.jpg" />
      </head>

      <body
        className={`${montserrat.variable} ${lora.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <JsonLd data={organizationSchema} />
        <ThemeProvider>
          {children}
          <SimpleChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
