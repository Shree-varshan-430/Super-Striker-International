import React from "react";

export default function SportsOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "SuperStriker International Pvt Ltd",
    "url": "https://superstriker.in",
    "logo": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=150&h=150&auto=format&fit=crop",
    "description": "SuperStriker International Pvt Ltd is a premier sports organization establishing a complete football ecosystem in India through professional clubs, academies, grassroots development, and youth coaching.",
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "subOrganization": [
      {
        "@type": "SportsClub",
        "name": "Bangalore Super Strikers FC",
        "sport": "Soccer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "SportsClub",
        "name": "Pondicherry Super Strikers FC",
        "sport": "Soccer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pondicherry",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "SportsClub",
        "name": "Chennai Super Strikers FC",
        "sport": "Soccer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Bangalore Football School",
        "description": "Youth football school specializing in physical literacy, technique development, and elite pathways."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/bangaloresuperstrikers/",
      "https://www.instagram.com/bangaloresuperstrikersfc/?hl=en",
      "https://www.linkedin.com/company/bangalore-super-strikers-football-club/?originalSubdomain=in",
      "https://www.youtube.com/channel/UC1hf_p-XBtiIO3QyI5U43dQ"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
