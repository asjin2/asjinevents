export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://asjinevents.xyz",
    "name": "Asjin Events",
    "alternateName": ["Asjin Events Wedding Decor", "Best Wedding Decorators Nagercoil", "Wedding Decorators Kanyakumari"],
    "description": "Best wedding decorators in Nagercoil, Kanyakumari District. Premium mandap decorations, floral arrangements, stage decor, and complete event planning services. 500+ happy couples, 10+ years experience.",
    "url": "https://asjinevents.xyz",
    "telephone": "+91-8903821128",
    "priceRange": "₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI, Card",
    "image": [
      "https://asjinevents.xyz/og-image.jpg",
      "https://res.cloudinary.com/dszxkjpev/image/upload/v1756055931/2151481511_bskp0a.jpg",
      "https://res.cloudinary.com/dszxkjpev/image/upload/v1756058622/fc15a08055e0e0b6eb16e343dc0a9d31_fdvp7v.jpg"
    ],
    "logo": "https://asjinevents.xyz/logo.svg",
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
        "name": "Nagercoil",
        "containedInPlace": {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      },
      {
        "@type": "City",
        "name": "Kanyakumari"
      },
      {
        "@type": "City", 
        "name": "Marthandam"
      },
      {
        "@type": "City",
        "name": "Padmanabhapuram"
      },
      {
        "@type": "City",
        "name": "Thuckalay"
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
      "availableLanguage": ["English", "Tamil", "Hindi"],
      "areaServed": "IN"
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
            "description": "Complete wedding decor including mandap, stage, and venue decorations",
            "category": "Wedding Services"
          },
          "priceCurrency": "INR",
          "priceRange": "₹25000-₹200000"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Event Planning",
            "description": "Complete event management from planning to execution",
            "category": "Event Management"
          },
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Floral Arrangements",
            "description": "Exquisite floral decorations using fresh flowers",
            "category": "Floral Services"
          },
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mandap Decorations",
            "description": "Traditional and modern mandap decorations for weddings",
            "category": "Wedding Decorations"
          },
          "priceCurrency": "INR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Priya Karthik"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Asjin Events made our dream wedding come true! The mandap decoration was absolutely stunning and exactly what we envisioned. Their attention to detail and professionalism is unmatched in Nagercoil. Best wedding decorators in Kanyakumari district!",
        "datePublished": "2024-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Meera Rajesh"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding wedding decoration service! The floral arrangements were breathtaking and the entire venue looked like a fairy tale. Best wedding decorators in Kanyakumari district. Highly recommend for anyone looking for premium wedding decor in Nagercoil.",
        "datePublished": "2024-01-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Divya Arun"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent service from Asjin Events for our engagement decoration. Professional team, beautiful decorations, and affordable prices. They are definitely the best wedding decorators in Nagercoil.",
        "datePublished": "2024-01-05"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Wedding Decoration Package",
        "description": "Complete wedding decoration services including mandap, stage, and venue decorations",
        "priceCurrency": "INR",
        "priceRange": "₹25000-₹200000",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "areaServed": {
          "@type": "City",
          "name": "Nagercoil"
        }
      },
      {
        "@type": "Offer",
        "name": "Mandap Decoration Service",
        "description": "Traditional and modern mandap decorations for Tamil weddings",
        "priceCurrency": "INR",
        "priceRange": "₹15000-₹100000",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Kanyakumari District"
        }
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Asjin"
    },
    "foundingDate": "2014",
    "slogan": "Creating Magical Wedding Moments",
    "knowsAbout": [
      "Wedding Decorations",
      "Event Planning", 
      "Mandap Decorations",
      "Floral Arrangements",
      "Reception Decorations",
      "Tamil Wedding Traditions",
      "Event Management"
    ]
  };
}

export function generateWeddingDecorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://asjinevents.xyz/wedding-decor-nagercoil",
    "name": "Wedding Decor in Nagercoil",
    "alternateName": ["Wedding Decoration Services Nagercoil", "Mandap Decoration Nagercoil", "Best Wedding Decorators Nagercoil"],
    "description": "Professional wedding decor services in Nagercoil, Kanyakumari District. Best mandap decorations, floral arrangements, stage setups, and complete event styling for Tamil and contemporary weddings. 500+ happy couples, affordable packages.",
    "url": "https://asjinevents.xyz/wedding-decor-nagercoil",
    "category": "Wedding Decoration Service",
    "serviceType": "Wedding Decoration",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Asjin Events",
      "telephone": "+91-8903821128",
      "url": "https://asjinevents.xyz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
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
        "@type": "City",
        "name": "Kanyakumari"
      },
      {
        "@type": "City",
        "name": "Marthandam"
      },
      {
        "@type": "City",
        "name": "Padmanabhapuram"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Kanyakumari District"
      }
    ],
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
          },
          "priceCurrency": "INR",
          "priceRange": "₹15000-₹100000"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Modern Wedding Decor",
            "description": "Contemporary wedding decorations with elegant designs"
          },
          "priceCurrency": "INR",
          "priceRange": "₹20000-₹150000"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floral Arrangements", 
            "description": "Fresh flower decorations and arrangements for wedding ceremonies"
          },
          "priceCurrency": "INR",
          "priceRange": "₹5000-₹50000"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stage Decorations",
            "description": "Beautiful stage setups and backdrops for wedding ceremonies"
          },
          "priceCurrency": "INR",
          "priceRange": "₹10000-₹75000"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "priceRange": "₹25000-₹200000",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "image": [
      "https://res.cloudinary.com/dszxkjpev/image/upload/v1756058622/fc15a08055e0e0b6eb16e343dc0a9d31_fdvp7v.jpg",
      "https://res.cloudinary.com/dszxkjpev/image/upload/v1756056180/Breathtaking_Wedding_Stage_Designs_1_k6ycgv.jpg"
    ]
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of wedding decorations do you offer in Nagercoil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive wedding decoration services including traditional mandap decorations, modern stage setups, floral arrangements, entrance decorations, reception hall styling, and lighting design. Our services cater to both traditional Tamil weddings and contemporary celebrations in Nagercoil and Kanyakumari district."
        }
      },
      {
        "@type": "Question",
        "name": "How much does wedding decoration cost in Nagercoil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wedding decoration costs vary based on the venue size, decoration complexity, and services required. Our packages start from ₹25,000 for basic decorations and can go up to ₹2,00,000+ for grand celebrations. We are the most affordable wedding decorators in Nagercoil with best quality. Contact us for a detailed quote."
        }
      },
      {
        "@type": "Question",
        "name": "Are you the best wedding decorators in Nagercoil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Asjin Events is recognized as the best wedding decorators in Nagercoil and Kanyakumari district. We have decorated 500+ weddings with 4.9/5 rating, 10+ years experience, and 100% customer satisfaction. Our expertise in traditional Tamil wedding decorations and modern designs makes us the top choice."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide wedding decoration services outside Nagercoil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide wedding decoration services across the entire Kanyakumari district including Kanyakumari, Marthandam, Padmanabhapuram, Thuckalay, Colachel, and surrounding areas. We are the leading wedding decorators serving all major locations in the district."
        }
      }
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}