interface OrganizationSchemaProps {
  locale: string;
  url: string;
}

export function OrganizationSchema({ locale, url }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Green Electric Lightning Protection",
    "alternateName": "Green Electric",
    "url": url,
    "logo": `${url}/images/logo.png`,
    "description": locale === 'ar' 
      ? "حلول احترافية للحماية من الصواعق والتأريض لمشاريع EPC - متوافقة مع معايير IEC 62561 و UL 467"
      : locale === 'zh'
      ? "专业防雷接地解决方案供应商 - 符合 IEC 62561 和 UL 467 标准，服务 EPC 工程总承包项目"
      : "Professional Lightning Protection & Grounding Solutions for EPC Projects - Compliant with IEC 62561, UL 467, IEEE 80, and Saudi Aramco SAES Standards",
    "foundingDate": "1993",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN",
      "addressRegion": "Jiangsu"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+86-512-6288-6288",
        "contactType": "sales",
        "availableLanguage": ["English", "Chinese", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+86-512-6288-6288",
        "contactType": "technical support",
        "availableLanguage": ["English", "Chinese"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/green-electric-industrial-supply"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 25.0,
        "longitude": 45.0
      },
      "geoRadius": "50000000"
    },
    "knowsAbout": [
      "Lightning Protection Systems",
      "Grounding and Earthing Systems",
      "ESE Lightning Rods",
      "Copper-Bonded Steel Grounding Rods",
      "Exothermic Welding",
      "IEC 62561",
      "UL 467",
      "IEEE 80",
      "Saudi Aramco SAES Standards",
      "SASO Standards",
      "EPC Project Supply"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  locale: string;
  url: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  category: string;
  specifications?: {
    name: string;
    value: string;
  }[];
  standards?: string[];
}

export function ProductSchema({ 
  locale: _locale, 
  url, 
  name, 
  nameEn, 
  description, 
  image, 
  category,
  specifications = [],
  standards = []
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "alternateName": nameEn,
    "description": description,
    "image": image.startsWith('http') ? image : `${url}${image}`,
    "brand": {
      "@type": "Brand",
      "name": "Green Electric"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Green Electric Lightning Protection"
    },
    "category": category,
    "additionalProperty": specifications.map(spec => ({
      "@type": "PropertyValue",
      "name": spec.name,
      "value": spec.value
    })),
    "hasCertification": standards.map(standard => ({
      "@type": "Certification",
      "name": standard
    })),
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Green Electric Lightning Protection"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CaseStudySchemaProps {
  locale: string;
  url: string;
  name: string;
  description: string;
  image: string;
  industry: string;
  location: string;
  owner?: string;
  epc?: string;
  year?: string;
}

export function CaseStudySchema({
  locale,
  url,
  name,
  description,
  image,
  industry,
  location,
  owner,
  epc,
  year: _year
}: CaseStudySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": name,
    "description": description,
    "image": image.startsWith('http') ? image : `${url}${image}`,
    "author": {
      "@type": "Organization",
      "name": "Green Electric Lightning Protection"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Green Electric Lightning Protection",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": industry,
    "locationCreated": location,
    "mentions": [
      ...(owner ? [{ "@type": "Organization", "name": owner }] : []),
      ...(epc ? [{ "@type": "Organization", "name": epc }] : [])
    ],
    "keywords": [
      "Lightning Protection",
      "Grounding System",
      industry,
      location,
      "EPC Project"
    ],
    "inLanguage": locale
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  url: string;
  locale: string;
}

export function WebSiteSchema({ url, locale }: WebSiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Green Electric Lightning Protection",
    "url": url,
    "inLanguage": locale,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  locale: string;
  url: string;
}

export function LocalBusinessSchema({ locale, url }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    "name": "Green Electric Lightning Protection",
    "description": locale === 'ar'
      ? "مورد معتمد لمواد الحماية من الصواعق والتأريض لمشاريع EPC في الشرق الأوسط"
      : locale === 'zh'
      ? "中东地区 EPC 项目防雷接地材料认证供应商"
      : "Certified Lightning Protection & Grounding Materials Supplier for EPC Projects in Middle East",
    "url": url,
    "telephone": "+86-512-6288-6288",
    "email": "info@green-electric.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industrial Zone",
      "addressLocality": "Suzhou",
      "addressRegion": "Jiangsu",
      "addressCountry": "CN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.2989,
      "longitude": 120.5853
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
