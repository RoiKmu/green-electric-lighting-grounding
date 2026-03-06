export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  image: string;
  description?: string;
  features?: string[];
  tier?: 'flagship' | 'core' | 'support';
  isFeatured?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image?: string;
  items: Product[];
  tier?: 'flagship' | 'core' | 'support';
}

export interface ProductTier {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  position: string;
  color: string;
}

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: 'flagship',
    name: 'Flagship Technology Solutions',
    nameEn: 'Flagship Technology Solutions',
    description: 'Core competitiveness, high margin, high technical barriers',
    position: 'Core competitiveness, high margin, high technical barriers',
    color: 'gold',
  },
  {
    id: 'core',
    name: 'Core Grounding & Lightning Protection',
    nameEn: 'Core Grounding & Lightning Protection',
    description: 'Engineering essentials, complete supply',
    position: 'Engineering essentials, complete supply',
    color: 'silver',
  },
  {
    id: 'support',
    name: 'Industrial Safety & Engineering Support',
    nameEn: 'Industrial Safety & Engineering Support',
    description: 'Supporting equipment and auxiliary tools',
    position: 'Supporting equipment and auxiliary tools',
    color: 'bronze',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "lightning-warning",
    name: "Lightning Warning System",
    nameEn: "Lightning Warning System",
    description: "Comprehensive atmospheric electric field monitoring, providing 20-minute early warning",
    tier: "flagship",
    items: [
      { 
        id: "lightning-warning-system", 
        name: "Lightning Warning System", 
        nameEn: "Lightning Warning System",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Comprehensive atmospheric electric field monitoring, providing 20-minute early warning",
        isFeatured: true,
      },
    ],
  },
  {
    id: "early-discharge-system",
    name: "Early Streamer Emission (ESE)",
    nameEn: "Early Streamer Emission (ESE)",
    description: "Active lightning attraction technology, expanded protection radius",
    tier: "flagship",
    items: [
      { 
        id: "early-discharge", 
        name: "Early Streamer Emission Lightning Rod (ESE)", 
        nameEn: "Early Streamer Emission Lightning Rod",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Active lightning attraction technology, expanded protection radius",
        isFeatured: true,
      },
    ],
  },
  {
    id: "copper-clad-steel",
    name: "Copper-Clad Steel Series",
    nameEn: "Copper-Clad Steel Series",
    description: "Molecular-level bonding process, combining conductivity with 50-year long service life",
    tier: "flagship",
    items: [
      { 
        id: "copper-clad-rod", 
        name: "Copper-Clad Steel Grounding Rod", 
        nameEn: "Copper-Clad Steel Grounding Rod",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Molecular-level bonding process, combining conductivity with 50-year long service life",
        isFeatured: true,
      },
      { 
        id: "copper-clad-electrode", 
        name: "Copper-Clad Steel Grounding Electrode", 
        nameEn: "Copper-Clad Steel Grounding Electrode",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Molecular-level bonding process, combining conductivity with 50-year long service life",
      },
    ],
  },
  {
    id: "exothermic-welding",
    name: "Exothermic Welding Series",
    nameEn: "Exothermic Welding Series",
    description: "Achieves molecular-level connections, excellent electrical continuity, safe and reliable construction",
    tier: "flagship",
    items: [
      { 
        id: "welding", 
        name: "Exothermic Welding Series", 
        nameEn: "Exothermic Welding",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Achieves molecular-level connections, excellent electrical continuity, safe and reliable construction",
        isFeatured: true,
      },
      { 
        id: "remote-welding", 
        name: "Remote Exothermic Welding Igniter", 
        nameEn: "Remote Exothermic Welding Igniter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Construction safety tool",
      },
    ],
  },
  {
    id: "lightning-protection",
    name: "Lightning Protection",
    nameEn: "Lightning Protection",
    description: "These devices are responsible for directly intercepting lightning strikes or directing lightning current underground",
    tier: "core",
    items: [
      { 
        id: "lightning-rod", 
        name: "Corrosion-Resistant Steel Pipe Lightning Rod", 
        nameEn: "Corrosion-Resistant Steel Pipe Lightning Rod",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "grounding-wire", 
        name: "Grounding Wire", 
        nameEn: "Grounding Wire",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
    ],
  },
  {
    id: "grounding",
    name: "Grounding Conductors",
    nameEn: "Grounding Conductors",
    description: "These are the core components buried in soil, responsible for dispersing current into the earth",
    tier: "core",
    items: [
      { 
        id: "grounding-electrode", 
        name: "Grounding Electrode", 
        nameEn: "Grounding Electrode",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "ion-electrode", 
        name: "Electrolytic Ion Grounding Electrode", 
        nameEn: "Electrolytic Ion Grounding Electrode",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
      { 
        id: "energy-storage", 
        name: "Energy Storage Grounding Device", 
        nameEn: "Energy Storage Grounding Device",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "nano-carbon", 
        name: "All-Around Nano-Carbon Grounding Series", 
        nameEn: "Nano-Carbon Grounding Series",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "lightning-system", 
        name: "3D Lightning Protection System & Grounding Device", 
        nameEn: "3D Lightning Protection System",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
    ],
  },
  {
    id: "static-protection",
    name: "Static Protection Series",
    nameEn: "Static Protection Series",
    description: "Specialized equipment for flammable and explosive locations (such as oil depots, chemical plants)",
    tier: "support",
    items: [
      { 
        id: "static-alarm", 
        name: "Static Grounding Alarm", 
        nameEn: "Static Grounding Alarm",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "static-elimination", 
        name: "Static Elimination Device", 
        nameEn: "Static Elimination Device",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "floating-roof", 
        name: "Auto-Rewind Floating Roof Tank Grounding Device", 
        nameEn: "Auto-Rewind Floating Roof Tank Grounding",
        description: "Specially designed for large oil tanks",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
      { 
        id: "mobile-grounding", 
        name: "Mobile Grounding Meter", 
        nameEn: "Mobile Grounding Meter",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
    ],
  },
  {
    id: "detection",
    name: "Grounding Detection Terminal",
    nameEn: "Grounding Detection Terminal",
    description: "Used for detecting and monitoring the status of grounding systems",
    tier: "support",
    items: [
      { 
        id: "grounding-box", 
        name: "Grounding Terminal Box", 
        nameEn: "Grounding Terminal Box",
        description: "Centralized connection point",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "detection-well", 
        name: "Grounding Detection Well", 
        nameEn: "Grounding Detection Well",
        description: "Used for measuring grounding resistance later",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "equipotential", 
        name: "Equipotential Connection Components", 
        nameEn: "Equipotential Connection Components",
        description: "Key process for preventing potential difference",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "grounding-terminal", 
        name: "Grounding Terminal Block (Grounding Point)", 
        nameEn: "Grounding Terminal Block",
        image: "/images/products/materials/Steel Thick Plate/9a9c9fba-3853-46a6-a069-2239d4fd51bf.png" 
      },
      { 
        id: "grounding-plate", 
        name: "Grounding Column Plate", 
        nameEn: "Grounding Column Plate",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
      { 
        id: "grounding-center", 
        name: "Grounding Center", 
        nameEn: "Grounding Center",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
    ],
  },
  {
    id: "specialized",
    name: "Specialized Fittings",
    nameEn: "Specialized Fittings",
    description: "Used for firmly connecting various lightning protection components, ensuring electrical continuity",
    tier: "support",
    items: [
      { 
        id: "connector", 
        name: "Connector", 
        nameEn: "Connector",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "rod-clamp", 
        name: "Rod Clamp (For Grounding Rods)", 
        nameEn: "Rod Clamp",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png" 
      },
      { 
        id: "tube-clamp", 
        name: "Tube Clamp (For Steel Pipes)", 
        nameEn: "Tube Clamp",
        image: "/images/products/materials/Steel Channel/bfca186c-3ef0-462a-8f6b-4e2e588d1d22.png" 
      },
      { 
        id: "brackets", 
        name: "Brackets & Clamps (For Grounding Strips/Wires)", 
        nameEn: "Brackets & Clamps",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png" 
      },
    ],
  },
  {
    id: "measuring-tools",
    name: "Precision Measuring Tools",
    nameEn: "Precision Measuring Tools",
    description: "Precision measuring instruments for construction and quality inspection",
    tier: "support",
    items: [
      { 
        id: "resistance-meter", 
        name: "Grounding Resistance Meter", 
        nameEn: "Grounding Resistance Meter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "soil-resistivity", 
        name: "Soil Resistivity Meter", 
        nameEn: "Soil Resistivity Meter",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
    ],
  },
];

export interface MaterialProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface AccessoryProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export const MATERIALS_PRODUCTS: MaterialProduct[] = [
  {
    id: "steel-round-bar",
    name: "Steel Round Bar",
    description: "High-quality steel round bars for machining and fabrication",
    features: ["Various diameters", "Multiple grades", "Precision tolerance"],
    image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
  },
  {
    id: "steel-thick-plate",
    name: "Steel Thick Plate",
    description: "Heavy steel plates for structural and industrial applications",
    features: ["Various thicknesses", "Cut to size", "High strength"],
    image: "/images/products/materials/Steel Thick Plate/9a9c9fba-3853-46a6-a069-2239d4fd51bf.png",
  },
  {
    id: "steel-channel",
    name: "Steel Channel",
    description: "Structural steel channels for construction and fabrication",
    features: ["Standard sizes", "High load capacity", "Versatile use"],
    image: "/images/products/materials/Steel Channel/bfca186c-3ef0-462a-8f6b-4e2e588d1d22.png",
  },
  {
    id: "steel-tube",
    name: "Steel Tube",
    description: "Steel tubes and pipes for various industrial applications",
    features: ["Round and square", "Seamless options", "Various wall thickness"],
    image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
  },
  {
    id: "stainless-bar",
    name: "Stainless Bar",
    description: "Corrosion-resistant stainless steel bars for demanding applications",
    features: ["304/316 grades", "Excellent finish", "Corrosion resistant"],
    image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
  },
  {
    id: "aluminium-plate",
    name: "Aluminium Plate",
    description: "Lightweight aluminium plates for aerospace and general engineering",
    features: ["6061/7075 grades", "High strength-to-weight", "Easy machining"],
    image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
  },
  {
    id: "aluminium-tube",
    name: "Aluminium Tube",
    description: "Aluminium tubes for structural and decorative applications",
    features: ["Round and square", "Anodized options", "Lightweight"],
    image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png",
  },
  {
    id: "aluminium-coil",
    name: "Aluminium Coil",
    description: "Aluminium coils for sheet metal fabrication and forming",
    features: ["Various alloys", "Multiple thicknesses", "Consistent quality"],
    image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png",
  },
];

export const ACCESSORIES_PRODUCTS: AccessoryProduct[] = [
  {
    id: "bolts-nuts",
    name: "Bolts & Nuts",
    description: "High-quality fasteners for industrial and construction applications",
    features: ["Various grades", "Metric and imperial", "Bulk quantities"],
    image: "/images/products/accessories/Bolts n Nuts/c0e43dd2-052d-4898-aaf5-9fb7381987c3.png",
  },
  {
    id: "valves",
    name: "Valves",
    description: "Industrial valves for fluid and gas control systems",
    features: ["Ball, gate, check types", "Various materials", "Pressure rated"],
    image: "/images/products/accessories/Valves/deb2c5f5-0e81-471f-ad86-5c640129ada5.png",
  },
  {
    id: "measuring-tools",
    name: "Measuring Tools",
    description: "Precision measuring instruments for quality control",
    features: ["Calipers, micrometers", "Digital and analog", "High accuracy"],
    image: "/images/products/accessories/Measuring Tools/d59de8dc-d1c7-4cf6-8f17-d98fa50bdf6f.png",
  },
];

export const ALL_PRODUCTS = PRODUCT_CATEGORIES.flatMap(category => 
  category.items.map(product => ({
    ...product,
    categoryId: category.id,
    categoryName: category.name,
    categoryTier: category.tier,
  }))
);

export function getFeaturedProducts() {
  return ALL_PRODUCTS.filter(product => product.isFeatured);
}

export function getProductsByTier(tier: 'flagship' | 'core' | 'support') {
  return PRODUCT_CATEGORIES.filter(category => category.tier === tier);
}

export function getCategoryById(categoryId: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find(cat => cat.id === categoryId);
}

export function getProductById(categoryId: string, productId: string): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.items.find(item => item.id === productId);
}

export function getProductCategoryPath(categoryId: string): string {
  return `/products/${categoryId}`;
}

export function getProductDetailPath(categoryId: string, productId: string): string {
  return `/products/${categoryId}/${productId}`;
}
