export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://asjinevents.xyz",
    "name": "Asjin Events",
    "alternateName": "Asjin Events Wedding Decor",
    "description": "Premium wedding decor and event management services in Nagercoil, Kanyakumari District. Professional mandap decorations, floral arrangements, and complete event planning.",
    "url": "https://asjinevents.xyz",
    "telephone": "+91-8903821128",
    "priceRange": "₹₹₹",
    "image": [
      "https://asjinevents.xyz/og-image.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
      "postalCode": "629001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.1774,
      "longitude": 77.4349
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nagercoil"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kanyakumari District"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 8.1774,
        "longitude": 77.4349
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8903821128",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    },
    "sameAs": [
      "https://instagram.com/asjin_events",
      "https://facebook.com/asjinevents",
      "https://youtube.com/@asjinevents"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Decor Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Decorations",
            "description": "Complete wedding decor including mandap, stage, and venue decorations"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Event Planning",
            "description": "Complete event management from planning to execution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Floral Arrangements",
            "description": "Exquisite floral decorations using fresh flowers"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

export function generateWeddingDecorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://asjinevents.xyz/wedding-decor-nagercoil",
    "name": "Wedding Decor in Nagercoil",
    "alternateName": "Wedding Decoration Services Nagercoil",
    "description": "Professional wedding decor services in Nagercoil, Kanyakumari District. Mandap decorations, floral arrangements, stage setups, and complete event styling for Tamil and contemporary weddings.",
    "url": "https://asjinevents.xyz/wedding-decor-nagercoil",
    "category": "Wedding Decoration Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Asjin Events",
      "telephone": "+91-8903821128",
      "url": "https://asjinevents.xyz"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nagercoil",
        "containedInPlace": {
          "@type": "State",
          "name": "Tamil Nadu",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        }
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Kanyakumari District"
      }
    ],
    "serviceType": "Wedding Decoration",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Decoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Traditional Mandap Decorations",
            "description": "Authentic Tamil wedding mandap decorations with flowers and traditional elements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Modern Wedding Decor",
            "description": "Contemporary wedding decorations with elegant designs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floral Arrangements", 
            "description": "Fresh flower decorations and arrangements for wedding ceremonies"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "priceRange": "₹25000-₹200000"
    }
  };
}