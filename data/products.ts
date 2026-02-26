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
    name: '旗舰技术解决方案',
    nameEn: 'Flagship Technology Solutions',
    description: '核心竞争力，高毛利、高技术壁垒',
    position: '核心竞争力，高毛利、高技术壁垒',
    color: 'gold',
  },
  {
    id: 'core',
    name: '核心接地与直击雷防护',
    nameEn: 'Core Grounding & Lightning Protection',
    description: '工程刚需，成套供应',
    position: '工程刚需，成套供应',
    color: 'silver',
  },
  {
    id: 'support',
    name: '工业安防与工程配套',
    nameEn: 'Industrial Safety & Engineering Support',
    description: '配套设备与辅助工具',
    position: '配套设备与辅助工具',
    color: 'bronze',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "lightning-warning",
    name: "雷电预警系统",
    nameEn: "Lightning Warning System",
    description: "全方位大气电场监测，提供 20 分钟预警时间",
    tier: "flagship",
    items: [
      { 
        id: "lightning-warning-system", 
        name: "雷电预警系统", 
        nameEn: "Lightning Warning System",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "全方位大气电场监测，提供 20 分钟预警时间",
        isFeatured: true,
      },
    ],
  },
  {
    id: "early-discharge-system",
    name: "提前放电避雷针",
    nameEn: "Early Streamer Emission (ESE)",
    description: "主动式引雷技术，扩大保护半径",
    tier: "flagship",
    items: [
      { 
        id: "early-discharge", 
        name: "提前放电避雷针 (ESE)", 
        nameEn: "Early Streamer Emission Lightning Rod",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png",
        description: "主动式引雷技术，扩大保护半径",
        isFeatured: true,
      },
    ],
  },
  {
    id: "copper-clad-steel",
    name: "铜包钢系列",
    nameEn: "Copper-Clad Steel Series",
    description: "分子级结合工艺，兼顾导电性与 50 年长寿命",
    tier: "flagship",
    items: [
      { 
        id: "copper-clad-rod", 
        name: "铜包钢接地棒", 
        nameEn: "Copper-Clad Steel Grounding Rod",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "分子级结合工艺，兼顾导电性与 50 年长寿命",
        isFeatured: true,
      },
      { 
        id: "copper-clad-electrode", 
        name: "铜包钢接地极", 
        nameEn: "Copper-Clad Steel Grounding Electrode",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png",
        description: "分子级结合工艺，兼顾导电性与 50 年长寿命",
      },
    ],
  },
  {
    id: "exothermic-welding",
    name: "熔焊系列",
    nameEn: "Exothermic Welding Series",
    description: "实现分子级连接，电气连续性极佳，施工安全可靠",
    tier: "flagship",
    items: [
      { 
        id: "welding", 
        name: "熔焊系列（放热焊接）", 
        nameEn: "Exothermic Welding",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png",
        description: "实现分子级连接，电气连续性极佳，施工安全可靠",
        isFeatured: true,
      },
      { 
        id: "remote-welding", 
        name: "遥控放热焊接引燃器", 
        nameEn: "Remote Exothermic Welding Igniter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png",
        description: "施工安全工具",
      },
    ],
  },
  {
    id: "lightning-protection",
    name: "闪接器系统",
    nameEn: "Lightning Protection",
    description: "这类设备负责直接拦截雷击或将雷电流引向地下",
    tier: "core",
    items: [
      { 
        id: "lightning-rod", 
        name: "防腐型钢管(杆)避雷针", 
        nameEn: "Corrosion-Resistant Steel Pipe Lightning Rod",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "grounding-wire", 
        name: "接地线", 
        nameEn: "Grounding Wire",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
    ],
  },
  {
    id: "grounding",
    name: "接地导体系统",
    nameEn: "Grounding Conductors",
    description: "这些是埋入土壤中，负责将电流扩散到大地里的核心部分",
    tier: "core",
    items: [
      { 
        id: "grounding-electrode", 
        name: "接地体", 
        nameEn: "Grounding Electrode",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "ion-electrode", 
        name: "电解离子接地极", 
        nameEn: "Electrolytic Ion Grounding Electrode",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
      { 
        id: "energy-storage", 
        name: "储能型接地装置", 
        nameEn: "Energy Storage Grounding Device",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "nano-carbon", 
        name: "全能型纳米碳接地系列", 
        nameEn: "Nano-Carbon Grounding Series",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "lightning-system", 
        name: "立体式防雷系统与接地装置", 
        nameEn: "3D Lightning Protection System",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
    ],
  },
  {
    id: "static-protection",
    name: "静电防护系列",
    nameEn: "Static Protection Series",
    description: "针对易燃易爆场所（如油库、化工厂）的专用设备",
    tier: "support",
    items: [
      { 
        id: "static-alarm", 
        name: "静电接地报警器", 
        nameEn: "Static Grounding Alarm",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "static-elimination", 
        name: "静电消除装置", 
        nameEn: "Static Elimination Device",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "floating-roof", 
        name: "自动收线浮顶罐用接地装置", 
        nameEn: "Auto-Rewind Floating Roof Tank Grounding",
        description: "专门用于大型油罐",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
      { 
        id: "mobile-grounding", 
        name: "移动式接地仪", 
        nameEn: "Mobile Grounding Meter",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
    ],
  },
  {
    id: "detection",
    name: "接地检测终端",
    nameEn: "Grounding Detection Terminal",
    description: "用于检测和监控接地系统的状态",
    tier: "support",
    items: [
      { 
        id: "grounding-box", 
        name: "接地端子箱", 
        nameEn: "Grounding Terminal Box",
        description: "集中连接点",
        image: "/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png" 
      },
      { 
        id: "detection-well", 
        name: "接地检测井", 
        nameEn: "Grounding Detection Well",
        description: "用于后期测量接地电阻",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "equipotential", 
        name: "等电位联接组件", 
        nameEn: "Equipotential Connection Components",
        description: "防止电位差的关键工艺",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "grounding-terminal", 
        name: "接地端子座(接地点)", 
        nameEn: "Grounding Terminal Block",
        image: "/images/products/materials/Steel Thick Plate/9a9c9fba-3853-46a6-a069-2239d4fd51bf.png" 
      },
      { 
        id: "grounding-plate", 
        name: "接地柱板", 
        nameEn: "Grounding Column Plate",
        image: "/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png" 
      },
      { 
        id: "grounding-center", 
        name: "接地中心", 
        nameEn: "Grounding Center",
        image: "/images/products/materials/Aluminium Coil/39ad30ad-d156-4761-a758-0962f10b7be2.png" 
      },
    ],
  },
  {
    id: "specialized",
    name: "连接、紧固与导电金具",
    nameEn: "Specialized Fittings",
    description: "用于将各个防雷组件牢固地连接在一起，确保导电连续性",
    tier: "support",
    items: [
      { 
        id: "connector", 
        name: "连接器", 
        nameEn: "Connector",
        image: "/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png" 
      },
      { 
        id: "rod-clamp", 
        name: "棒夹（连接接地棒）", 
        nameEn: "Rod Clamp",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png" 
      },
      { 
        id: "tube-clamp", 
        name: "管夹（连接钢管）", 
        nameEn: "Tube Clamp",
        image: "/images/products/materials/Steel Channel/bfca186c-3ef0-462a-8f6b-4e2e588d1d22.png" 
      },
      { 
        id: "brackets", 
        name: "支架、带夹（固定接地带/线）", 
        nameEn: "Brackets & Clamps",
        image: "/images/products/materials/Aluminium Tube/3d41fd82-fc64-48b2-8faa-fd209170dd29.png" 
      },
    ],
  },
  {
    id: "measuring-tools",
    name: "精密测量工具",
    nameEn: "Precision Measuring Tools",
    description: "用于施工和质量检测的精密测量仪器",
    tier: "support",
    items: [
      { 
        id: "resistance-meter", 
        name: "接地电阻测试仪", 
        nameEn: "Grounding Resistance Meter",
        image: "/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png" 
      },
      { 
        id: "soil-resistivity", 
        name: "土壤电阻率测试仪", 
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
