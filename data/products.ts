export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  image: string;
  description?: string;
  features?: string[];
  tier?: 'high-performance' | 'engineering-core' | 'compliance-support';
  isFeatured?: boolean;
  categoryId?: string;
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
  tier?: 'high-performance' | 'engineering-core' | 'compliance-support';
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
    id: 'high-performance',
    name: '高性能系统',
    nameEn: 'High-Performance Systems',
    description: '专为极端环境与关键基础设施设计的尖端防护方案，具备极高的技术门槛与系统集成度。',
    position: '技术领先 · 极端工况 · 系统化防护',
    color: 'gold',
  },
  {
    id: 'engineering-core',
    name: '专业工程组件',
    nameEn: 'Professional Engineering Components',
    description: '符合国际主流标准的标准化防雷接地组件，为大型工程提供稳定的基础供应支持。',
    position: '标准合规 · 高效供应 · 工程必备',
    color: 'silver',
  },
  {
    id: 'compliance-support',
    name: '系统配套与合规',
    nameEn: 'System Support & Compliance',
    description: '确保安装品质、电气连续性及系统合规性的专项配套组件与检测工具。',
    position: '安装优化 · 检测合规 · 长期运维',
    color: 'bronze',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "lightning-capture-warning",
    name: "接闪器与雷电预警系统",
    nameEn: "Air Termination & Lightning Warning Systems",
    description: "Active and passive air termination technology complying with NFC 17-102 and IEC 62305 standards",
    tier: "high-performance",
    items: [
      { 
        id: "lightning-warning-system", 
        name: "智能大气电场监测与预警系统", 
        nameEn: "Intelligent Atmospheric Electric Field Monitoring & Warning System",
        image: "/images/products/Lightning Capture & Warning Systems/Lightning Warning System/1252353425432_202606.png",
        description: "Comprehensive atmospheric electric field monitoring, providing 20-minute early warning",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "ese-air-terminal", 
        name: "高性能提前放电 (ESE) 接闪器", 
        nameEn: "High-Performance Early Streamer Emission (ESE) Air Terminal",
        image: "/images/products/Lightning Capture & Warning Systems/ESE Air Terminal/ese.jpg",
        description: "Active lightning attraction technology, expanded protection radius",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "conventional-air-terminal", 
        name: "工业级耐腐蚀接闪杆", 
        nameEn: "Industrial-Grade Corrosion-Resistant Air Terminal Rod",
        image: "/images/products/Lightning Capture & Warning Systems/Corrosion-Resistant Steel Pipe Air Terminal/5_Al_Air_Terminal_with_Ss_Base.png",
        description: "Conventional lightning air terminal with corrosion-resistant coating",
        tier: "engineering-core",
      },
    ],
  },
  {
    id: "down-conductors-bonding",
    name: "导体系统与等电位连接",
    nameEn: "Conductor Systems & Equipotential Bonding",
    description: "Core connection components ensuring safe lightning current paths and eliminating potential differences",
    tier: "engineering-core",
    items: [
      { 
        id: "grounding-wire", 
        name: "高导电引下线导体", 
        nameEn: "High-Conductivity Down Conductor",
        image: "/images/products/Down Conductors & Equipotential Bonding/Down Conducting Wire Cable/Down Conductors & Equipotential Bonding.jpg",
        description: "Conducts lightning current safely to the grounding system",
        tier: "engineering-core",
      },
      { 
        id: "equipotential-connector", 
        name: "等电位联结汇流箱", 
        nameEn: "Equipotential Bonding Junction Box",
        image: "/images/products/Down Conductors & Equipotential Bonding/Equipotential Bonding Connector/21085898489_3553462.jpg",
        description: "Key process for preventing potential difference hazards",
        tier: "engineering-core",
      },
      { 
        id: "grounding-terminal-box", 
        name: "分级接地测试端子箱", 
        nameEn: "Graded Grounding Test Terminal Box",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Terminal Box/terminal-box.jpg",
        description: "Centralized connection point for grounding system",
        tier: "engineering-core",
      },
      { 
        id: "grounding-terminal-block", 
        name: "高纯铜接地端子排", 
        nameEn: "High-Purity Copper Grounding Terminal Block",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Terminal Block/1_ELECTRAPICK_Wall_Mounted_Copper_Grounding.png",
        description: "Terminal block for grounding connections",
        tier: "engineering-core",
      },
      { 
        id: "grounding-point", 
        name: "预埋式专用接地端子", 
        nameEn: "Pre-embedded Dedicated Grounding Terminal",
        image: "/images/products/Down Conductors & Equipotential Bonding/ground point/2_Dehn_478_011_Grounding_fixed_point.png",
        description: "Grounding terminal for electrical connections",
        tier: "engineering-core",
      },
      { 
        id: "grounding-busbar", 
        name: "主接地汇流排", 
        nameEn: "Main Grounding Busbar",
        image: "/images/products/Down Conductors & Equipotential Bonding/Grounding Busbar/37d3d539b6003af3144aca903e2ac65c1138b649.jpg",
        description: "Central grounding collection point",
        tier: "engineering-core",
      },
    ],
  },
  {
    id: "earthing-grounding-systems",
    name: "接地电极与地下系统",
    nameEn: "Earthing Electrodes & Underground Systems",
    description: "High-lifespan, low-impedance deep earth dissipation solutions meeting UL 467 and IEEE 80 standards",
    tier: "high-performance",
    items: [
      { 
        id: "copper-bonded-rod", 
        name: "分子键合铜包钢接地电极", 
        nameEn: "Molecular-Bonded Copper-Clad Steel Grounding Electrode",
        image: "/images/products/Earthing  Grounding Systems/3_Copper_Bonded_Ground_Rod_Pointed.jpg",
        description: "Molecular-level copper bonding process (Copper-Bonded), combining conductivity with 50-year service life",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "electrolytic-ion-electrode", 
        name: "化学电解离子接地系统", 
        nameEn: "Chemical Electrolytic Ion Grounding System",
        image: "/images/products/Earthing  Grounding Systems/6_Durable_and_Versatile_electrolytic.png",
        description: "Advanced ion technology for reduced grounding resistance",
        tier: "engineering-core",
      },
      { 
        id: "nano-carbon-grounding", 
        name: "高导电纳米碳增效接地系列", 
        nameEn: "High-Conductivity Nano-Carbon Enhanced Grounding Series",
        image: "/images/products/Earthing  Grounding Systems/ALL-around nano -carbon/carbon.jpg",
        description: "Nano-carbon technology for enhanced conductivity",
        tier: "engineering-core",
      },
      { 
        id: "energy-storage-grounding", 
        name: "储能系统专用接地模块", 
        nameEn: "Dedicated Grounding Module for Energy Storage Systems",
        image: "/images/products/Earthing  Grounding Systems/energy storage grounding device/energystorage.jpg",
        description: "Integrated energy storage and grounding solution",
        tier: "engineering-core",
      },
      { 
        id: "grounding-plate", 
        name: "板式接地电极", 
        nameEn: "Plate-Type Grounding Electrode",
        image: "/images/products/Earthing  Grounding Systems/Grounding Column Plate/grounding plate.jpg",
        description: "Plate-type grounding electrode for specific soil conditions",
        tier: "engineering-core",
      },
      { 
        id: "grounding-column", 
        name: "深埋式接地柱", 
        nameEn: "Deep-Buried Grounding Column",
        image: "/images/products/Earthing  Grounding Systems/Grounding Column Plate/O1CN019EoVpW1gMDK5fKisD_!!2212477204127-0-cib.jpg",
        description: "Column-type grounding electrode for vertical installations",
        tier: "engineering-core",
      },
    ],
  },
  {
    id: "exothermic-welding-connections",
    name: "分子键合与放热焊接",
    nameEn: "Molecular Bonding & Exothermic Welding",
    description: "Permanent molecular-level electrical connections eliminating contact resistance",
    tier: "high-performance",
    items: [
      { 
        id: "exothermic-welding", 
        name: "分子级放热焊接模具", 
        nameEn: "Molecular-Level Exothermic Welding Mold",
        image: "/images/products/Exothermic Welding & Electrical Connections/Exothermic Welding Series/Exothermic Welding Series.jpg",
        description: "Achieves molecular-level connections, excellent electrical continuity, safe and reliable construction",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "remote-igniter", 
        name: "电子远程点火器与专用焊粉", 
        nameEn: "Electronic Remote Igniter & Dedicated Welding Powder",
        image: "/images/products/Exothermic Welding & Electrical Connections/Remote Exothermic Welding Igniter/O1CN01MUM66g1v6qXncEX65_!!2218759956124-0-cib.jpg",
        description: "Electronic remote ignition device for construction safety",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "mechanical-connector", 
        name: "高强度机械连接器", 
        nameEn: "High-Strength Mechanical Connector",
        image: "/images/products/Exothermic Welding & Electrical Connections/Mechanical Connector/3_3_4_Earth_rod_clamp.png",
        description: "Mechanical connection hardware for electrical continuity",
        tier: "engineering-core",
      },
      { 
        id: "rod-clamp", 
        name: "电极专用高应力线夹", 
        nameEn: "Electrode-Specific High-Stress Clamp",
        image: "/images/products/Exothermic Welding & Electrical Connections/Rod Clamp/500fd9f9d72a60592df8e9cd2334349b023bba78.jpg",
        description: "Clamp for grounding rod connections",
        tier: "engineering-core",
      },
      { 
        id: "tube-clamp", 
        name: "重型管路支撑夹具", 
        nameEn: "Heavy-Duty Pipe Support Clamp",
        image: "/images/products/Exothermic Welding & Electrical Connections/Tube Clamp/29790130f8b34da4a8018e72.jpg",
        description: "Clamp for steel pipe connections",
        tier: "engineering-core",
      },
    ],
  },
  {
    id: "industrial-static-protection",
    name: "特种工业静电防护",
    nameEn: "Specialized Industrial Static Protection",
    description: "Intrinsically safe protection devices designed for petrochemical, natural gas, and energy storage areas",
    tier: "compliance-support",
    items: [
      { 
        id: "static-grounding-alarm", 
        name: "本安型静电接地报警仪", 
        nameEn: "Intrinsically Safe Static Grounding Alarm",
        image: "/images/products/Industrial Static Protection/Static Grounding Alarm/6_Static_Electricity_Releasing_Static.png",
        description: "Alarm system for static grounding monitoring",
        tier: "compliance-support",
      },
      { 
        id: "static-eliminator", 
        name: "工业级主动静电消除装置", 
        nameEn: "Industrial-Grade Active Static Elimination Device",
        image: "/images/products/Industrial Static Protection/Static Elimination device/Static Elimination device.jpg",
        description: "Active static elimination for hazardous environments",
        tier: "compliance-support",
      },
      { 
        id: "rga-floating-tank", 
        name: "浮顶罐伸缩式接地补偿装置", 
        nameEn: "Retractable Grounding Assembly for Floating Roof Tanks",
        image: "/images/products/Industrial Static Protection/RGA/7_Retractable_Grounding_Assembly_Storage.png",
        description: "Retractable Grounding Assembly (RGA) for floating roof tanks - standard terminology in petrochemical lightning protection",
        tier: "compliance-support",
      },
      { 
        id: "mobile-grounding-meter", 
        name: "便携式等电位连续性测试仪", 
        nameEn: "Portable Equipotential Continuity Tester",
        image: "/images/products/Industrial Static Protection/MOblie grounding meter/3.jpg",
        description: "Portable grounding resistance measurement device",
        tier: "compliance-support",
      },
    ],
  },
  {
    id: "testing-fasteners-support",
    name: "系统组件与合规检测",
    nameEn: "System Components & Compliance Testing",
    description: "Professional mounting brackets, fasteners, and standard-compliant field testing tools",
    tier: "compliance-support",
    items: [
      { 
        id: "grounding-detection-well", 
        name: "重型防护接地观测井", 
        nameEn: "Heavy-Duty Protected Grounding Observation Well",
        image: "/images/products/Fasteners, Testing & Support Materials/Grounding Detection Well/O1CN01HcVx5e1Bs2rBmzl3V_!!0-0-cib.jpg",
        description: "Access point for measuring grounding resistance",
        tier: "compliance-support",
      },
      { 
        id: "grounding-resistance-meter", 
        name: "数显精密接地电阻测试仪", 
        nameEn: "Digital Precision Grounding Resistance Meter",
        image: "/images/products/Fasteners, Testing & Support Materials/Grounding Resistance Meter/R.jpg",
        description: "Professional instrument for grounding resistance measurement",
        tier: "compliance-support",
      },
      { 
        id: "soil-resistivity-meter", 
        name: "四极法土壤电阻率分析仪", 
        nameEn: "Four-Electrode Soil Resistivity Analyzer",
        image: "/images/products/Fasteners, Testing & Support Materials/Soil Resistivity Meter/OIP.jpg",
        description: "Instrument for soil resistivity analysis",
        tier: "compliance-support",
      },
      { 
        id: "brackets-clamps", 
        name: "系统专用支架与紧固组件", 
        nameEn: "System-Specific Brackets & Fastening Components",
        image: "/images/products/Fasteners, Testing & Support Materials/Brackets & Clamps/9_3M_Cross_Arm_Mounting_Brackets_MB.png",
        description: "Mounting hardware for grounding strips and wires",
        tier: "compliance-support",
      },
    ],
  },
  {
    id: "surge-protection",
    name: "电涌保护系统",
    nameEn: "Surge Protection Devices (SPD)",
    description: "Internal lightning protection for power and data lines, IEC 61643 compliant",
    tier: "high-performance",
    items: [
      { 
        id: "power-spd-t1", 
        name: "一级电源电涌保护器", 
        nameEn: "Type 1 Power SPD",
        image: "/images/products/Surge Protection Devices (SPD)/Surge Protection Device1.webp",
        description: "High surge capacity, 10/350µs waveform, IEC 61643 compliant",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "power-spd-t2", 
        name: "二级电源电涌保护器", 
        nameEn: "Type 2 Power SPD",
        image: "/images/products/Surge Protection Devices (SPD)/2_Type_2_3_SPD_Surge_Protection_Device.png",
        description: "8/20µs waveform for sub-distribution protection",
        tier: "engineering-core",
      },
      { 
        id: "signal-spd", 
        name: "工业控制信号保护器", 
        nameEn: "Industrial Control Signal Protector",
        image: "/images/products/Surge Protection Devices (SPD)/indestrial rs 485 controller.jpg",
        description: "Surge protection for RS485/PLC industrial control signals",
        tier: "engineering-core",
      },
      { 
        id: "isolating-spark-gap", 
        name: "防爆型隔离火花间隙", 
        nameEn: "Isolating Spark Gap (Ex)",
        image: "/images/products/Surge Protection Devices (SPD)/isg.jpg",
        description: "Ex d IIC T6 certified, for equipotential bonding in hazardous zones",
        tier: "high-performance",
        isFeatured: true,
      },
    ],
  },
  {
    id: "ground-enhancement",
    name: "降阻改良与特殊环境接地",
    nameEn: "Ground Enhancement & Soil Modification",
    description: "Solutions for rocky or high-resistivity soil conditions",
    tier: "engineering-core",
    items: [
      { 
        id: "gem-material", 
        name: "永久性降阻改良材料", 
        nameEn: "Ground Enhancement Material (GEM)",
        image: "/images/products/Ground Enhancement & Soil Modification/6_GEM_High_Effective_Bentonite_Earthing.png",
        description: "Low resistivity, non-leaching, permanent solution for high-resistivity soil",
        tier: "engineering-core",
      },
      { 
        id: "grounding-module", 
        name: "低电阻石墨化接地模块", 
        nameEn: "Low-Resistance Graphite Grounding Module",
        image: "/images/products/Ground Enhancement & Soil Modification/7_Low_Resistance_Graphite_Grounding.png",
        description: "Graphite-based grounding module for challenging soil conditions",
        tier: "engineering-core",
      },
    ],
  },
  {
    id: "specialized-conductors",
    name: "高级导体与屏蔽系统",
    nameEn: "Specialized Conductors & Shielding",
    description: "Advanced paths for lightning currents and bonding",
    tier: "high-performance",
    items: [
      { 
        id: "shielded-down-conductor", 
        name: "高压抗干扰屏蔽引下线", 
        nameEn: "Shielded Down-Conductor",
        image: "/images/products/Specialized Conductors & Shielding Systems/high level shielding line.webp",
        description: "Reduced separation distance, prevents side-flashing, minimizes EMI",
        tier: "high-performance",
        isFeatured: true,
      },
      { 
        id: "bi-metallic-connector", 
        name: "铜铝过渡双金属连接件", 
        nameEn: "Bi-metallic Connectors",
        image: "/images/products/Specialized Conductors & Shielding Systems/aluminum connetor.jpg",
        description: "Prevents galvanic corrosion, friction welded, outdoor rated",
        tier: "engineering-core",
      },
      { 
        id: "flexible-braid", 
        name: "高频柔性铜编织接地带", 
        nameEn: "Flexible Copper Braided Grounding Strap",
        image: "/images/products/Specialized Conductors & Shielding Systems/grounding wire mesh.webp",
        description: "High-frequency flexible grounding for vibration compensation",
        tier: "engineering-core",
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
  const heroIds = [
    'lightning-warning-system',
    'ese-air-terminal',
    'copper-bonded-rod',
    'exothermic-welding',
    'remote-igniter',
  ];
  
  return heroIds
    .map(id => ALL_PRODUCTS.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof ALL_PRODUCTS[number]> => p !== undefined);
}

export function getProductsByTier(tier: 'high-performance' | 'engineering-core' | 'compliance-support') {
  return PRODUCT_CATEGORIES.filter(category => category.tier === tier);
}

export function getCategoryById(categoryId: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find(cat => cat.id === categoryId);
}

export function getProductById(categoryId: string, productId: string): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.items.find(item => item.id === productId);
}

export function getRelatedProducts(productTier?: 'high-performance' | 'engineering-core' | 'compliance-support', excludeProductId?: string): Product[] {
  if (productTier === 'high-performance') {
    const coreProducts = ALL_PRODUCTS.filter(p => p.tier === 'engineering-core');
    return coreProducts.slice(0, 4);
  }
  
  if (productTier === 'engineering-core') {
    const supportProducts = ALL_PRODUCTS.filter(p => p.tier === 'compliance-support');
    return supportProducts.slice(0, 4);
  }
  
  return ALL_PRODUCTS.filter(p => p.id !== excludeProductId).slice(0, 4);
}

export function getProductCategoryPath(categoryId: string): string {
  return `/products/${categoryId}`;
}

export function getProductDetailPath(categoryId: string, productId: string): string {
  return `/products/${categoryId}/${productId}`;
}
