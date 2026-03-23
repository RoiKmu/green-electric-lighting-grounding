export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  image: string;
  description?: string;
  features?: string[];
  tier?: 'flagship' | 'core' | 'support';
  isFeatured?: boolean;
  specifications?: {
    material?: string;
    size?: string;
    standard?: string;
    application?: string;
  };
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
    id: "lightning-capture-warning",
    name: "智能预警与接闪系统",
    nameEn: "Lightning Capture & Warning Systems",
    description: "Early sensing and safe interception - corresponds to ERICO Air Terminals and System 3000 series",
    tier: "flagship",
    items: [
      { 
        id: "lightning-warning-system", 
        name: "雷电预警系统", 
        nameEn: "Lightning Warning System",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Comprehensive atmospheric electric field monitoring, providing 20-minute early warning",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "ese-air-terminal", 
        name: "提前放电避雷针 (ESE)", 
        nameEn: "Early Streamer Emission (ESE) Air Terminal",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Active lightning attraction technology, expanded protection radius",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "conventional-air-terminal", 
        name: "防腐钢管避雷针", 
        nameEn: "Corrosion-Resistant Steel Pipe Air Terminal",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Conventional lightning air terminal with corrosion-resistant coating",
        tier: "core",
      },
      { 
        id: "3d-lightning-system", 
        name: "3D 防雷系统", 
        nameEn: "3D Lightning Protection System",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Comprehensive three-dimensional lightning protection solution",
        tier: "core",
      },
    ],
  },
  {
    id: "down-conductors-bonding",
    name: "引下与等电位连接方案",
    nameEn: "Down Conductors & Equipotential Bonding",
    description: "Safely conducts lightning current to ground and eliminates potential differences",
    tier: "core",
    items: [
      { 
        id: "grounding-wire", 
        name: "接地线", 
        nameEn: "Grounding Wire / Down Conductor",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png",
        description: "Conducts lightning current safely to the grounding system",
        tier: "core",
      },
      { 
        id: "equipotential-connector", 
        name: "等电位连接件", 
        nameEn: "Equipotential Connection Components",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Key process for preventing potential difference hazards",
        tier: "core",
      },
      { 
        id: "grounding-terminal-box", 
        name: "接地端子箱", 
        nameEn: "Grounding Terminal Box",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Centralized connection point for grounding system",
        tier: "core",
      },
      { 
        id: "grounding-terminal-block", 
        name: "接地端子排/接地点", 
        nameEn: "Grounding Terminal Block",
        image: "/images/products/materials/Steel Thick Plate/9a9c9fba-3853-46a6-a069-2239d4fd51bf.png",
        description: "Terminal block for grounding connections",
        tier: "core",
      },
      { 
        id: "grounding-busbar", 
        name: "接地汇流排", 
        nameEn: "Grounding Busbar / Grounding Center",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png",
        description: "Central grounding collection point",
        tier: "core",
      },
    ],
  },
  {
    id: "earthing-grounding-systems",
    name: "高性能接地系统",
    nameEn: "Earthing / Grounding Systems",
    description: "Core business line - efficiently disperses current into the earth (IEC: Earthing, IEEE: Grounding)",
    tier: "flagship",
    items: [
      { 
        id: "copper-bonded-rod", 
        name: "镀铜钢接地棒", 
        nameEn: "Copper-Bonded Steel Grounding Rod",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Molecular-level copper bonding process (Copper-Bonded), combining conductivity with 50-year service life",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "copper-bonded-electrode", 
        name: "镀铜钢接地极", 
        nameEn: "Copper-Bonded Steel Grounding Electrode",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Molecular-level copper bonding technology for superior performance",
        tier: "flagship",
      },
      { 
        id: "electrolytic-ion-electrode", 
        name: "电解离子接地极", 
        nameEn: "Electrolytic Ion Grounding Electrode",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png",
        description: "Advanced ion technology for reduced grounding resistance",
        tier: "core",
      },
      { 
        id: "nano-carbon-grounding", 
        name: "全方位纳米碳接地系列", 
        nameEn: "All-Around Nano-Carbon Grounding Series",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Nano-carbon technology for enhanced conductivity",
        tier: "core",
      },
      { 
        id: "energy-storage-grounding", 
        name: "储能接地装置", 
        nameEn: "Energy Storage Grounding Device",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Integrated energy storage and grounding solution",
        tier: "core",
      },
      { 
        id: "grounding-column-plate", 
        name: "接地柱/板", 
        nameEn: "Grounding Column Plate",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Plate-type grounding electrode for specific soil conditions",
        tier: "core",
      },
    ],
  },
  {
    id: "exothermic-welding-connections",
    name: "放热焊接与电气连接",
    nameEn: "Exothermic Welding & Electrical Connections",
    description: "Corresponds to ERICO CADWELD series - high profit, high repurchase core consumables",
    tier: "flagship",
    items: [
      { 
        id: "exothermic-welding", 
        name: "放热焊接系列", 
        nameEn: "Exothermic Welding Series",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "Achieves molecular-level connections, excellent electrical continuity, safe and reliable construction",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "remote-igniter", 
        name: "电子/远程点火器", 
        nameEn: "Remote Exothermic Welding Igniter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Electronic remote ignition device for construction safety",
        tier: "core",
      },
      { 
        id: "mechanical-connector", 
        name: "连接器", 
        nameEn: "Mechanical Connector",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Mechanical connection hardware for electrical continuity",
        tier: "core",
      },
      { 
        id: "rod-clamp", 
        name: "接地棒线夹", 
        nameEn: "Rod Clamp",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png",
        description: "Clamp for grounding rod connections",
        tier: "core",
      },
      { 
        id: "tube-clamp", 
        name: "管卡", 
        nameEn: "Tube Clamp",
        image: "/images/products/materials/Steel Channel/bfca186c-3ef0-462a-8f6b-4e2e588d1d22.png",
        description: "Clamp for steel pipe connections",
        tier: "core",
      },
    ],
  },
  {
    id: "industrial-static-protection",
    name: "工业静电防护专区",
    nameEn: "Industrial Static Protection",
    description: "Specialized equipment for petrochemical, energy and other industrial applications",
    tier: "support",
    items: [
      { 
        id: "static-grounding-alarm", 
        name: "静电接地报警器", 
        nameEn: "Static Grounding Alarm",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Alarm system for static grounding monitoring",
        tier: "support",
      },
      { 
        id: "static-eliminator", 
        name: "静电消除装置", 
        nameEn: "Static Elimination Device",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Active static elimination for hazardous environments",
        tier: "support",
      },
      { 
        id: "rga-floating-tank", 
        name: "自动收卷浮顶罐接地装置 (RGA)", 
        nameEn: "RGA - Retractable Grounding Assembly",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png",
        description: "Retractable Grounding Assembly (RGA) for floating roof tanks - standard terminology in petrochemical lightning protection",
        tier: "support",
      },
      { 
        id: "mobile-grounding-meter", 
        name: "移动接地仪", 
        nameEn: "Mobile Grounding Meter",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Portable grounding resistance measurement device",
        tier: "support",
      },
    ],
  },
  {
    id: "testing-fasteners-support",
    name: "紧固件、检测与基建辅材",
    nameEn: "Fasteners, Testing & Support Materials",
    description: "Corresponds to ERICO CADDY fastener brand and testing tools",
    tier: "support",
    items: [
      { 
        id: "grounding-detection-well", 
        name: "接地观测井", 
        nameEn: "Grounding Detection Well",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "Access point for measuring grounding resistance",
        tier: "support",
      },
      { 
        id: "grounding-resistance-meter", 
        name: "接地电阻测试仪", 
        nameEn: "Grounding Resistance Meter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "Professional instrument for grounding resistance measurement",
        tier: "support",
      },
      { 
        id: "soil-resistivity-meter", 
        name: "土壤电阻率测试仪", 
        nameEn: "Soil Resistivity Meter",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "Instrument for soil resistivity analysis",
        tier: "support",
      },
      { 
        id: "brackets-clamps", 
        name: "支架与夹具", 
        nameEn: "Brackets & Clamps",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png",
        description: "Mounting hardware for grounding strips and wires",
        tier: "support",
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
