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
    description: "Early sensing and safe interception technology",
    tier: "flagship",
    items: [
      { 
        id: "lightning-warning-system", 
        name: "雷电预警系统", 
        nameEn: "Lightning Warning System",
        image: "/images/products/Lightning Capture & Warning Systems/Lightning Warning System/1252353425432_202606.png",
        description: "Comprehensive atmospheric electric field monitoring, providing 20-minute early warning",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "ese-air-terminal", 
        name: "提前放电避雷针 (ESE)", 
        nameEn: "Early Streamer Emission (ESE) Air Terminal",
        image: "/images/products/Lightning Capture & Warning Systems/ESE Air Terminal/ese.jpg",
        description: "Active lightning attraction technology, expanded protection radius",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "conventional-air-terminal", 
        name: "防腐钢管避雷针", 
        nameEn: "Corrosion-Resistant Steel Pipe Air Terminal",
        image: "/images/products/Lightning Capture & Warning Systems/Corrosion-Resistant Steel Pipe Air Terminal/crspa.jpg",
        description: "Conventional lightning air terminal with corrosion-resistant coating",
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
        image: "/images/products/Down Conductors & Equipotential Bonding/Down Conducting Wire Cable/Down Conductors & Equipotential Bonding.jpg",
        description: "Conducts lightning current safely to the grounding system",
        tier: "core",
      },
      { 
        id: "equipotential-connector", 
        name: "等电位联结箱", 
        nameEn: "Equipotential Bonding Box",
        image: "/images/products/Down Conductors & Equipotential Bonding/Equipotential Bonding Connector/21085898489_3553462.jpg",
        description: "Key process for preventing potential difference hazards",
        tier: "core",
      },
      { 
        id: "grounding-terminal-box", 
        name: "接地端子箱", 
        nameEn: "Grounding Terminal Box",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Terminal Box/terminal-box.jpg",
        description: "Centralized connection point for grounding system",
        tier: "core",
      },
      { 
        id: "grounding-terminal-block", 
        name: "接地端子排", 
        nameEn: "Grounding Terminal Block",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Terminal Block/b0b5cfb25a81d7a63ddd506b09be0bde.png",
        description: "Terminal block for grounding connections",
        tier: "core",
      },
      { 
        id: "grounding-point", 
        name: "接地端子", 
        nameEn: "Grounding Terminal",
        image: "/images/products/Down Conductors & Equipotential Bonding/ground point/grounding point.jpg",
        description: "Grounding terminal for electrical connections",
        tier: "core",
      },
      { 
        id: "grounding-busbar", 
        name: "接地汇流排", 
        nameEn: "Grounding Busbar / Grounding Center",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Busbar/37d3d539b6003af3144aca903e2ac65c1138b649.jpg",
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
        name: "铜覆钢接地极/接地棒", 
        nameEn: "Copper-Bonded Steel Grounding Electrode/Rod",
        image: "/images/products/Earthing  Grounding Systems/Copper-Bonded Steel Grounding Rod/a2cc7cd98d1001e915956eb9b80e7bec55e797de.jpg",
        description: "Molecular-level copper bonding process (Copper-Bonded), combining conductivity with 50-year service life",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "electrolytic-ion-electrode", 
        name: "电解离子接地极", 
        nameEn: "Electrolytic Ion Grounding Electrode",
        image: "/images/products/Earthing  Grounding Systems/electrolytic ion Grounding/f9198618367adab44aedfb81ab8da41c8701a08b4ee5.jpg",
        description: "Advanced ion technology for reduced grounding resistance",
        tier: "core",
      },
      { 
        id: "nano-carbon-grounding", 
        name: "全方位纳米碳接地系列", 
        nameEn: "All-Around Nano-Carbon Grounding Series",
        image: "/images/products/Earthing  Grounding Systems/ALL-around nano -carbon/carbon.jpg",
        description: "Nano-carbon technology for enhanced conductivity",
        tier: "core",
      },
      { 
        id: "energy-storage-grounding", 
        name: "储能接地装置", 
        nameEn: "Energy Storage Grounding Device",
        image: "/images/products/Earthing  Grounding Systems/energy storage grounding device/energystorage.jpg",
        description: "Integrated energy storage and grounding solution",
        tier: "core",
      },
      { 
        id: "grounding-plate", 
        name: "接地板", 
        nameEn: "Grounding Plate",
        image: "/images/products/Earthing  Grounding Systems/Grounding Column Plate/grounding plate.jpg",
        description: "Plate-type grounding electrode for specific soil conditions",
        tier: "core",
      },
      { 
        id: "grounding-column", 
        name: "接地柱", 
        nameEn: "Grounding Column",
        image: "/images/products/Earthing  Grounding Systems/Grounding Column Plate/O1CN019EoVpW1gMDK5fKisD_!!2212477204127-0-cib.jpg",
        description: "Column-type grounding electrode for vertical installations",
        tier: "core",
      },
    ],
  },
  {
    id: "exothermic-welding-connections",
    name: "放热焊接与电气连接",
    nameEn: "Exothermic Welding & Electrical Connections",
    description: "High profit, high repurchase core consumables",
    tier: "flagship",
    items: [
      { 
        id: "exothermic-welding", 
        name: "放热焊接系列", 
        nameEn: "Exothermic Welding Series",
        image: "/images/products/Exothermic Welding & Electrical Connections/Exothermic Welding Series/Exothermic Welding Series.jpg",
        description: "Achieves molecular-level connections, excellent electrical continuity, safe and reliable construction",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "remote-igniter", 
        name: "点火器与焊粉", 
        nameEn: "Igniter & Welding Powder",
        image: "/images/products/Exothermic Welding & Electrical Connections/Remote Exothermic Welding Igniter/O1CN01MUM66g1v6qXncEX65_!!2218759956124-0-cib.jpg",
        description: "Electronic remote ignition device for construction safety",
        tier: "flagship",
        isFeatured: true,
      },
      { 
        id: "mechanical-connector", 
        name: "连接器", 
        nameEn: "Mechanical Connector",
        image: "/images/products/Exothermic Welding & Electrical Connections/Mechanical Connector/Mechanical Connector.jpg",
        description: "Mechanical connection hardware for electrical continuity",
        tier: "core",
      },
      { 
        id: "rod-clamp", 
        name: "接地棒线夹", 
        nameEn: "Rod Clamp",
        image: "/images/products/Exothermic Welding & Electrical Connections/Rod Clamp/500fd9f9d72a60592df8e9cd2334349b023bba78.jpg",
        description: "Clamp for grounding rod connections",
        tier: "core",
      },
      { 
        id: "tube-clamp", 
        name: "管卡", 
        nameEn: "Tube Clamp",
        image: "/images/products/Exothermic Welding & Electrical Connections/Tube Clamp/29790130f8b34da4a8018e72.jpg",
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
        image: "/images/products/Industrial Static Protection/Static Grounding Alarm/Static Grounding Alarm.jpg",
        description: "Alarm system for static grounding monitoring",
        tier: "support",
      },
      { 
        id: "static-eliminator", 
        name: "静电消除装置", 
        nameEn: "Static Elimination Device",
        image: "/images/products/Industrial Static Protection/Static Elimination device/Static Elimination device.jpg",
        description: "Active static elimination for hazardous environments",
        tier: "support",
      },
      { 
        id: "rga-floating-tank", 
        name: "自动收卷浮顶罐接地装置 (RGA)", 
        nameEn: "RGA - Retractable Grounding Assembly",
        image: "/images/products/Industrial Static Protection/RGA/OIP.jpg",
        description: "Retractable Grounding Assembly (RGA) for floating roof tanks - standard terminology in petrochemical lightning protection",
        tier: "support",
      },
      { 
        id: "mobile-grounding-meter", 
        name: "移动接地仪", 
        nameEn: "Mobile Grounding Meter",
        image: "/images/products/Industrial Static Protection/MOblie grounding meter/3.jpg",
        description: "Portable grounding resistance measurement device",
        tier: "support",
      },
    ],
  },
  {
    id: "testing-fasteners-support",
    name: "紧固件、检测与基建辅材",
    nameEn: "Fasteners, Testing & Support Materials",
    description: "Fasteners and testing tools for engineering support",
    tier: "support",
    items: [
      { 
        id: "grounding-detection-well", 
        name: "接地观测井", 
        nameEn: "Grounding Detection Well",
        image: "/images/products/Fasteners, Testing & Support Materials/Grounding Detection Well/O1CN01HcVx5e1Bs2rBmzl3V_!!0-0-cib.jpg",
        description: "Access point for measuring grounding resistance",
        tier: "support",
      },
      { 
        id: "grounding-resistance-meter", 
        name: "接地电阻测试仪", 
        nameEn: "Grounding Resistance Meter",
        image: "/images/products/Fasteners, Testing & Support Materials/Grounding Resistance Meter/R.jpg",
        description: "Professional instrument for grounding resistance measurement",
        tier: "support",
      },
      { 
        id: "soil-resistivity-meter", 
        name: "土壤电阻率测试仪", 
        nameEn: "Soil Resistivity Meter",
        image: "/images/products/Fasteners, Testing & Support Materials/Soil Resistivity Meter/OIP.jpg",
        description: "Instrument for soil resistivity analysis",
        tier: "support",
      },
      { 
        id: "brackets-clamps", 
        name: "支架与夹具", 
        nameEn: "Brackets & Clamps",
        image: "/images/products/Fasteners, Testing & Support Materials/Brackets & Clamps/Brackets & Clamps.jpg",
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
  const featured = ALL_PRODUCTS.filter(product => product.isFeatured);
  const order = ['lightning-warning-system', 'copper-bonded-rod', 'exothermic-welding', 'ese-air-terminal'];
  return featured.sort((a, b) => {
    const indexA = order.indexOf(a.id);
    const indexB = order.indexOf(b.id);
    return indexA - indexB;
  });
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
