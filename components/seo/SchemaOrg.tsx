interface OrganizationSchemaProps {
  locale: string;
  url: string;
}

export function OrganizationSchema({ locale, url }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "无锡市格林电工装备有限公司",
    "alternateName": [
      "Green Electric",
      "格林电工",
      "Wuxi Green Electric Equipment Co., Ltd.",
      "Green Electric Lightning Protection"
    ],
    "legalName": "Wuxi Green Electric Equipment Co., Ltd.",
    "url": url,
    "logo": `${url}/logo.png`,
    "description": locale === 'zh' 
      ? "认证防雷接地材料供应商。完全符合IEC 62561、UL 467和沙特阿美SAES标准。自1993年起专注于防腐型接地装置。"
      : locale === 'ar'
      ? "مورد معتمد لمواد الحماية من الصواعق والتأريض. متوافق تماماً مع معايير IEC 62561 و UL 467 و Saudi Aramco SAES. متخصصون في أجهزة التأريض المقاومة للتآكل منذ عام 1993."
      : "Certified Lightning Protection & Grounding Materials Supplier. Fully compliant with IEC 62561, UL 467, and Saudi Aramco SAES standards. Specializing in anti-corrosion grounding devices since 1993.",
    "foundingDate": "1993",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.9, Su Tie Rd, Binhu District",
      "addressLocality": "Wuxi",
      "addressRegion": "Jiangsu",
      "addressCountry": "CN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/wuxi-green-electric",
      "https://wxgreenelectric.en.alibaba.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-177-6635-3591",
      "contactType": "sales",
      "email": "sales@wuxigreen.com",
      "areaServed": ["SA", "AE", "KW", "CN"],
      "availableLanguage": ["Chinese", "English", "Arabic"]
    },
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
      "EPC Project Supply",
      "防雷接地",
      "避雷针",
      "接地极"
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
      "name": "无锡市格林电工装备有限公司",
      "alternateName": "Wuxi Green Electric Equipment Co., Ltd."
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
        "name": "无锡市格林电工装备有限公司"
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
      "name": "无锡市格林电工装备有限公司"
    },
    "publisher": {
      "@type": "Organization",
      "name": "无锡市格林电工装备有限公司",
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/logo.png`
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
      "EPC Project",
      "Green Electric",
      "wxgreenelectric"
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
    "name": "格林电工 | 无锡市格林电工装备有限公司",
    "alternateName": "Green Electric | Wuxi Green Electric Equipment Co., Ltd.",
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
    "name": "无锡市格林电工装备有限公司",
    "alternateName": "Green Electric",
    "description": locale === 'ar'
      ? "مورد معتمد لمواد الحماية من الصواعق والتأريض. متوافق تماماً مع معايير IEC 62561 و UL 467 و Saudi Aramco SAES. متخصصون في أجهزة التأريض المقاومة للتآكل منذ عام 1993."
      : locale === 'zh'
      ? "认证防雷接地材料供应商。完全符合IEC 62561、UL 467和沙特阿美SAES标准。自1993年起专注于防腐型接地装置。"
      : "Certified Lightning Protection & Grounding Materials Supplier. Fully compliant with IEC 62561, UL 467, and Saudi Aramco SAES standards. Specializing in anti-corrosion grounding devices since 1993.",
    "url": url,
    "telephone": "+86-177-6635-3591",
    "email": "sales@wuxigreen.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.9, Su Tie Rd, Binhu District",
      "addressLocality": "Wuxi",
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
