import React from "react";

interface JsonLdProps {
  data: object;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "St Mary\"s House Dental Care",
  url: "https://smhdental.co.uk",
  logo: "https://smhdental.co.uk/logos/horizontal-title-turquoise-1024.png",
  telephone: "+441273453109",
  email: "info@smhdental.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "St Mary\"s House",
    addressLocality: "Shoreham-by-Sea",
    addressRegion: "West Sussex",
    postalCode: "BN43 5ZA",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/smhdental",
    "https://www.instagram.com/smhdental",
  ],
  priceRange: "£££",
  image: "https://smhdental.co.uk/logos/og-image.jpg",
  description: "Luxury coastal dentistry with advanced 3D technology, AI-powered diagnostics, and same-day treatments in Shoreham-by-Sea, West Sussex.",
  hasMap: "https://goo.gl/maps/example",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.8333",
    longitude: "-0.2667",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "50.8333",
      longitude: "-0.2667",
    },
    geoRadius: "30",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
  },
};


