export interface ProductSEO {
  slug: string;
  title: { en: string; zh: string; ar: string };
  metaDesc: { en: string; zh: string; ar: string };
  h1: { en: string; zh: string; ar: string };
  keyFeatures: { en: string[]; zh: string[]; ar: string[] };
  applications: { en: string[]; zh: string[]; ar: string[] };
  applicationLinks: string[];
  faq: { en: { q: string; a: string }[]; zh: { q: string; a: string }[]; ar: { q: string; a: string }[] };
  relatedSlugs: string[];
}

export const PRODUCT_SEO_MAP: Record<string, ProductSEO> = {
  'copper-bonded-rod': {
    slug: 'copper-bonded-rod',
    title: {
      en: 'Copper Clad Steel Grounding Rod | IEC 62561-2 Compliant Earth Electrode',
      zh: '铜包钢接地棒 | IEC 62561-2 标准接地电极',
      ar: 'Electrode de mise à la terre en acier plaqué de cuivre | IEC 62561-2'
    },
    metaDesc: {
      en: 'Professional copper bonded grounding rods for substation, solar farm, and petrochemical applications. Molecular bonding ensures 50-year lifespan.',
      zh: '专业铜包钢接地棒，适用于变电站、光伏电站和石化设施。分子键合技术确保50年使用寿命。',
      ar: 'Electrodes de mise à la terre professionnelles pour sous-stations, fermes solaires et installations pétrochimiques.'
    },
    h1: {
      en: 'Copper Clad Steel Grounding Rod for Substation Grounding Grids',
      zh: '铜包钢接地棒 - 变电站接地网专用',
      ar: 'Electrode de mise à la terre en acier plaqué de cuivre pour les réseaux de mise à la terre'
    },
    keyFeatures: {
      en: [
        'Molecular-level copper bonding with 254μm copper thickness',
        '50-year service life in corrosive soil conditions',
        'Low impedance deep earth dissipation'
      ],
      zh: [
        '分子级铜层键合，铜层厚度254μm',
        '腐蚀性土壤环境下50年使用寿命',
        '低阻抗深层大地散流'
      ],
      ar: [
        'Liaison moléculaire du cuivre avec épaisseur de 254μm',
        'Durée de vie de 50 ans dans des conditions de sol corrosif',
        'Dissipation à faible impédance'
      ]
    },
    applications: {
      en: ['Substation Grounding', 'Solar Farm Arrays', 'Petrochemical Facilities'],
      zh: ['变电站接地', '光伏电站阵列', '石化设施'],
      ar: ['Mise à la terre des sous-stations', 'Parcs solaires', 'Installations pétrochimiques']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What is the copper layer thickness?', a: 'The copper layer thickness is 254μm (0.254mm), meeting UL 467 and IEC 62561-2 standards for molecular bonding.' },
        { q: 'What is the expected service life?', a: 'With proper installation, copper bonded rods have a 50-year service life even in corrosive soil conditions.' },
        { q: 'Can these rods be used in high resistivity soil?', a: 'Yes, for high resistivity soil (>3000Ω·m), we recommend combining with ground enhancement material or deep-driven multiple rods.' }
      ],
      zh: [
        { q: '铜层厚度是多少？', a: '铜层厚度为254μm（0.254mm），符合UL 467和IEC 62561-2标准的分子键合要求。' },
        { q: '预期使用寿命是多少？', a: '正确安装情况下，铜包钢接地棒在腐蚀性土壤环境中可使用50年。' },
        { q: '能否用于高土壤电阻率地区？', a: '可以。对于高电阻率土壤（>3000Ω·m），建议配合降阻剂使用或采用多根深埋方式。' }
      ],
      ar: [
        { q: 'Quelle est l\'épaisseur de la couche de cuivre?', a: 'L\'épaisseur de la couche de cuivre est de 254μm (0,254mm), conforme aux normes UL 467 et IEC 62561-2.' },
        { q: 'Quelle est la durée de vie prévue?', a: 'Avec une installation correcte, les électrodes ont une durée de vie de 50 ans.' },
        { q: 'Peut-on les utiliser dans un sol à haute résistivité?', a: 'Oui, pour les sols à haute résistivité (>3000Ω·m), nous recommandons de combiner avec du matériel d\'amélioration du sol.' }
      ]
    },
    relatedSlugs: ['exothermic-welding', 'gem-material', 'grounding-detection-well']
  },

  'electrolytic-ion-electrode': {
    slug: 'electrolytic-ion-electrode',
    title: {
      en: 'Ion Grounding Electrode | High Resistivity Soil Solution',
      zh: '电解离子接地电极 | 高电阻率土壤解决方案',
      ar: 'Electrode de mise à la terre ionique | Solution pour sol à haute résistivité'
    },
    metaDesc: {
      en: 'Chemical electrolytic ion grounding system for high resistivity soil conditions. Reduces grounding resistance by 30-50%.',
      zh: '电解离子接地系统，专为高电阻率土壤设计，可降低接地电阻30-50%。',
      ar: 'Système de mise à la terre ionique pour les sols à haute résistivité.'
    },
    h1: {
      en: 'Chemical Electrolytic Ion Grounding Electrode for Challenging Soil',
      zh: '电解离子接地电极 - 复杂土壤环境专用',
      ar: 'Electrode de mise à la terre ionique pour les sols difficiles'
    },
    keyFeatures: {
      en: [
        'Active ion release technology for reduced resistance',
        'Effective in soil resistivity up to 5000Ω·m',
        'Self-regenerating compound refill system'
      ],
      zh: [
        '活性离子释放技术降低接地电阻',
        '适用于电阻率高达5000Ω·m的土壤',
        '可再填充式化合物系统'
      ],
      ar: [
        'Technologie de libération d\'ions actifs',
        'Efficace dans un sol jusqu\'à 5000Ω·m',
        'Système de recharge auto-régénérant'
      ]
    },
    applications: {
      en: ['Mountainous Terrain', 'Desert Installations', 'Rocky Substations'],
      zh: ['山地地形', '沙漠安装', '岩石地质变电站'],
      ar: ['Terrain montagneux', 'Installations désertiques', 'Sous-stations rocheuses']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'How does ion grounding work?', a: 'The electrode releases electrolytic ions into surrounding soil, creating a low-resistance shell that dramatically improves grounding effectiveness.' },
        { q: 'How often does the compound need refilling?', a: 'The compound typically lasts 3-5 years depending on soil conditions. Refilling is simple through the inspection well.' },
        { q: 'Is this suitable for all soil types?', a: 'Ion electrodes are specifically designed for high resistivity soil (>1000Ω·m) where conventional rods struggle to achieve target resistance.' }
      ],
      zh: [
        { q: '离子接地的工作原理是什么？', a: '电极向周围土壤释放电解离子，形成低电阻壳层，显著提高接地效果。' },
        { q: '化合物需要多久补充一次？', a: '根据土壤条件，化合物通常可使用3-5年。通过检测井可方便补充。' },
        { q: '是否适用于所有土壤类型？', a: '离子接地电极专为高电阻率土壤（>1000Ω·m）设计，在常规接地棒难以达到目标电阻的地区效果显著。' }
      ],
      ar: [
        { q: 'Comment fonctionne la mise à la terre ionique?', a: 'L\'électrode libère des ions électrolytiques dans le sol environnant, créant une enveloppe à faible résistance.' },
        { q: 'À quelle fréquence faut-il recharger le composé?', a: 'Le composé dure généralement 3-5 ans selon les conditions du sol.' },
        { q: 'Est-ce adapté à tous les types de sol?', a: 'Les électrodes ioniques sont conçues pour les sols à haute résistivité (>1000Ω·m).' }
      ]
    },
    relatedSlugs: ['copper-bonded-rod', 'gem-material', 'grounding-detection-well']
  },

  'nano-carbon-grounding': {
    slug: 'nano-carbon-grounding',
    title: {
      en: 'Nano Carbon Grounding Module | Enhanced Conductivity',
      zh: '纳米碳接地模块 | 增强导电性',
      ar: 'Module de mise à la terre en nano-carbone | Conductivité améliorée'
    },
    metaDesc: {
      en: 'High-conductivity nano-carbon enhanced grounding module for telecom towers and renewable energy installations.',
      zh: '高导电纳米碳接地模块，适用于通信塔和新能源设施。',
      ar: 'Module de mise à la terre à haute conductivité pour tours de télécommunication.'
    },
    h1: {
      en: 'Nano Carbon Enhanced Grounding Module for Critical Infrastructure',
      zh: '纳米碳接地模块 - 关键基础设施专用',
      ar: 'Module de mise à la terre en nano-carbone pour infrastructures critiques'
    },
    keyFeatures: {
      en: [
        'Nano-carbon technology for superior conductivity',
        'Reduced grounding resistance by 40-60%',
        'Environmentally stable non-leaching design'
      ],
      zh: [
        '纳米碳技术实现卓越导电性',
        '降低接地电阻40-60%',
        '环境稳定无渗漏设计'
      ],
      ar: [
        'Technologie nano-carbone pour une conductivité supérieure',
        'Réduction de la résistance de 40-60%',
        'Conception stable écologiquement'
      ]
    },
    applications: {
      en: ['Telecom Towers', 'Wind Turbines', 'Data Centers'],
      zh: ['通信塔', '风力发电机', '数据中心'],
      ar: ['Tours de télécommunication', 'Éoliennes', 'Centres de données']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/solutions/infrastructure/'],
    faq: {
      en: [
        { q: 'What makes nano-carbon different?', a: 'Nano-carbon particles create multiple conductive pathways, significantly improving charge dissipation compared to traditional grounding.' },
        { q: 'Is nano-carbon environmentally safe?', a: 'Yes, the nano-carbon compound is chemically stable and does not leach into groundwater, meeting environmental regulations.' },
        { q: 'Can it be combined with copper rods?', a: 'Absolutely. Nano-carbon modules work excellently with copper bonded rods for hybrid grounding systems.' }
      ],
      zh: [
        { q: '纳米碳有什么不同？', a: '纳米碳粒子形成多条导电通道，相比传统接地显著改善电荷耗散。' },
        { q: '纳米碳是否环境安全？', a: '是的，纳米碳化合物化学稳定，不会渗入地下水，符合环保法规。' },
        { q: '能否与铜包钢棒组合使用？', a: '完全可以。纳米碳模块与铜包钢接地棒配合使用效果优异，适合混合接地系统。' }
      ],
      ar: [
        { q: 'Qu\'est-ce qui différencie le nano-carbone?', a: 'Les particules de nano-carbone créent plusieurs voies conductrices.' },
        { q: 'Le nano-carbone est-il écologiquement sûr?', a: 'Oui, le composé nano-carbone est chimiquement stable et ne s\'infiltre pas dans les eaux souterraines.' },
        { q: 'Peut-il être combiné avec des électrodes en cuivre?', a: 'Absolument. Les modules nano-carbone fonctionnent excellent avec les électrodes en cuivre.' }
      ]
    },
    relatedSlugs: ['copper-bonded-rod', 'electrolytic-ion-electrode', 'grounding-module']
  },

  'energy-storage-grounding': {
    slug: 'energy-storage-grounding',
    title: {
      en: 'Energy Storage Grounding Module | BESS Safety System',
      zh: '储能系统接地模块 | BESS安全系统',
      ar: 'Module de mise à la terre pour stockage d\'énergie | Système de sécurité BESS'
    },
    metaDesc: {
      en: 'Dedicated grounding module for battery energy storage systems. Meets NFPA 855 and IEC 62619 safety requirements.',
      zh: '储能系统专用接地模块，符合NFPA 855和IEC 62619安全要求。',
      ar: 'Module de mise à la terre dédié pour systèmes de stockage d\'énergie par batterie.'
    },
    h1: {
      en: 'Energy Storage System Grounding Module for BESS Safety',
      zh: '储能系统接地模块 - BESS安全专用',
      ar: 'Module de mise à la terre pour systèmes de stockage d\'énergie'
    },
    keyFeatures: {
      en: [
        'Designed specifically for BESS installations',
        'Integrated equipotential bonding points',
        'Compliant with NFPA 855 and IEC 62619'
      ],
      zh: [
        '专为储能系统设计',
        '集成等电位连接点',
        '符合NFPA 855和IEC 62619标准'
      ],
      ar: [
        'Conçu spécifiquement pour les installations BESS',
        'Points de liaison équipotentielle intégrés',
        'Conforme à NFPA 855 et IEC 62619'
      ]
    },
    applications: {
      en: ['Battery Storage Facilities', 'Grid-Scale BESS', 'Industrial Energy Systems'],
      zh: ['电池储能设施', '电网级储能系统', '工业能源系统'],
      ar: ['Installations de stockage de batteries', 'BESS à l\'échelle du réseau', 'Systèmes énergétiques industriels']
    },
    applicationLinks: ['/projects/power-energy/', '/solutions/power-energy/', '/projects/infrastructure/'],
    faq: {
      en: [
        { q: 'Why use dedicated BESS grounding?', a: 'Battery energy storage systems require specialized grounding to manage DC fault currents and prevent stray voltage issues.' },
        { q: 'What standards does this meet?', a: 'Our BESS grounding module meets NFPA 855, IEC 62619, and UL 9540A requirements for energy storage safety.' },
        { q: 'How many bonding points are included?', a: 'The module includes 8 equipotential bonding points for comprehensive system integration.' }
      ],
      zh: [
        { q: '为什么需要专用储能接地？', a: '电池储能系统需要专用接地来管理直流故障电流并防止杂散电压问题。' },
        { q: '符合哪些标准？', a: '我们的储能接地模块符合NFPA 855、IEC 62619和UL 9540A储能安全要求。' },
        { q: '包含多少连接点？', a: '模块包含8个等电位连接点，用于全面的系统集成。' }
      ],
      ar: [
        { q: 'Pourquoi utiliser une mise à la terre BESS dédiée?', a: 'Les systèmes de stockage d\'énergie par batterie nécessitent une mise à la terre spécialisée.' },
        { q: 'Quelles normes respecte-t-il?', a: 'Notre module de mise à la terre BESS répond aux exigences NFPA 855, IEC 62619 et UL 9540A.' },
        { q: 'Combien de points de liaison sont inclus?', a: 'Le module comprend 8 points de liaison équipotentielle.' }
      ]
    },
    relatedSlugs: ['copper-bonded-rod', 'equipotential-connector', 'grounding-busbar']
  },

  'grounding-wire': {
    slug: 'grounding-wire',
    title: {
      en: 'Down Conductor | Grounding Wire for Lightning Protection',
      zh: '引下线 | 防雷接地线',
      ar: 'Conducteur de descente | Fil de mise à la terre'
    },
    metaDesc: {
      en: 'High-conductivity down conductor and grounding wire for lightning protection systems. IEC 62305 compliant.',
      zh: '高导电引下线和接地线，用于防雷保护系统，符合IEC 62305标准。',
      ar: 'Conducteur de descente à haute conductivité pour systèmes de protection contre la foudre.'
    },
    h1: {
      en: 'High-Conductivity Down Conductor for Lightning Current Dissipation',
      zh: '引下线 - 雷电流散流专用',
      ar: 'Conducteur de descente à haute conductivité pour la dissipation du courant de foudre'
    },
    keyFeatures: {
      en: [
        '50mm² copper conductor for 200kA impulse current',
        'Multiple insulation options for various environments',
        'IEC 62305-3 compliant sizing and routing'
      ],
      zh: [
        '50mm²铜导体，承受200kA冲击电流',
        '多种绝缘选项适应不同环境',
        '符合IEC 62305-3规格和布线要求'
      ],
      ar: [
        'Conducteur en cuivre de 50mm² pour courant d\'impulsion de 200kA',
        'Options d\'isolation multiples pour divers environnements',
        'Dimensionnement et routage conformes à IEC 62305-3'
      ]
    },
    applications: {
      en: ['Building Lightning Protection', 'Substation Down Conductors', 'Industrial Facilities'],
      zh: ['建筑防雷', '变电站引下线', '工业设施'],
      ar: ['Protection foudre des bâtiments', 'Conducteurs de descente de sous-station', 'Installations industrielles']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What conductor size is required?', a: 'Per IEC 62305-3, minimum 50mm² copper or 80mm² steel for Class I lightning protection systems.' },
        { q: 'Can down conductors be concealed?', a: 'Yes, conductors can be routed within building structures, but must maintain separation from other services and be accessible for testing.' },
        { q: 'What is the maximum spacing between conductors?', a: 'For typical buildings, down conductors should be spaced no more than 10-15 meters apart around the perimeter.' }
      ],
      zh: [
        { q: '需要多大导体截面？', a: '根据IEC 62305-3，I类防雷系统最小需要50mm²铜或80mm²钢。' },
        { q: '引下线可以暗敷吗？', a: '可以，导体可在建筑结构内敷设，但需与其他设施保持间距并便于检测。' },
        { q: '引下线最大间距是多少？', a: '对于典型建筑，引下线沿周边间距不应超过10-15米。' }
      ],
      ar: [
        { q: 'Quelle taille de conducteur est requise?', a: 'Selon IEC 62305-3, minimum 50mm² de cuivre ou 80mm² d\'acier pour les systèmes de protection foudre de Classe I.' },
        { q: 'Les conducteurs de descente peuvent-ils être dissimulés?', a: 'Oui, les conducteurs peuvent être routés dans les structures de bâtiment.' },
        { q: 'Quel est l\'espacement maximum entre conducteurs?', a: 'Pour les bâtiments typiques, les conducteurs de descente doivent être espacés de 10-15 mètres maximum.' }
      ]
    },
    relatedSlugs: ['exothermic-welding', 'grounding-busbar', 'grounding-detection-well']
  },

  'equipotential-connector': {
    slug: 'equipotential-connector',
    title: {
      en: 'Equipotential Bonding Junction Box | IEC 60364 Compliant',
      zh: '等电位连接箱 | IEC 60364标准',
      ar: 'Boîte de jonction de liaison équipotentielle | Conforme IEC 60364'
    },
    metaDesc: {
      en: 'Equipotential bonding junction box for eliminating potential differences. Essential for petrochemical and industrial safety.',
      zh: '等电位连接箱用于消除电位差，是石化和工业安全的关键设备。',
      ar: 'Boîte de jonction de liaison équipotentielle pour éliminer les différences de potentiel.'
    },
    h1: {
      en: 'Equipotential Bonding Junction Box for Electrical Safety',
      zh: '等电位连接箱 - 电气安全专用',
      ar: 'Boîte de jonction de liaison équipotentielle pour la sécurité électrique'
    },
    keyFeatures: {
      en: [
        'Centralized bonding point for multiple conductors',
        'IP65 rated enclosure for harsh environments',
        'Removable cover for inspection and testing'
      ],
      zh: [
        '多导体集中连接点',
        'IP65防护等级适应恶劣环境',
        '可拆卸盖板便于检测'
      ],
      ar: [
        'Point de liaison centralisé pour plusieurs conducteurs',
        'Enceinte classée IP65 pour environnements difficiles',
        'Couvercle amovible pour inspection et test'
      ]
    },
    applications: {
      en: ['Petrochemical Plants', 'Industrial Facilities', 'Commercial Buildings'],
      zh: ['石化工厂', '工业设施', '商业建筑'],
      ar: ['Usines pétrochimiques', 'Installations industrielles', 'Bâtiments commerciaux']
    },
    applicationLinks: ['/projects/petrochemical/', '/projects/infrastructure/', '/solutions/petrochemical/'],
    faq: {
      en: [
        { q: 'What is equipotential bonding?', a: 'Equipotential bonding connects all exposed conductive parts to eliminate voltage differences, preventing electric shock during fault conditions.' },
        { q: 'How many connections can it handle?', a: 'Our junction boxes support 8-16 conductor connections depending on model, suitable for complex bonding networks.' },
        { q: 'Is it suitable for hazardous areas?', a: 'Yes, we offer Ex-rated versions for Zone 1 and Zone 2 hazardous area applications.' }
      ],
      zh: [
        { q: '什么是等电位连接？', a: '等电位连接将所有外露导电部分连接起来消除电位差，防止故障情况下的电击。' },
        { q: '可以连接多少导体？', a: '根据型号，我们的连接箱支持8-16个导体连接，适合复杂的连接网络。' },
        { q: '是否适用于危险区域？', a: '是的，我们提供Ex认证版本，适用于Zone 1和Zone 2危险区域。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que la liaison équipotentielle?', a: 'La liaison équipotentielle connecte toutes les parties conductrices exposées pour éliminer les différences de tension.' },
        { q: 'Combien de connexions peut-il gérer?', a: 'Nos boîtes de jonction supportent 8-16 connexions de conducteurs selon le modèle.' },
        { q: 'Est-il adapté aux zones dangereuses?', a: 'Oui, nous proposons des versions Ex pour les applications en zones dangereuses Zone 1 et Zone 2.' }
      ]
    },
    relatedSlugs: ['grounding-busbar', 'grounding-wire', 'static-grounding-alarm']
  },

  'grounding-busbar': {
    slug: 'grounding-busbar',
    title: {
      en: 'Main Grounding Busbar | Terminal Block System',
      zh: '主接地母排 | 端子排系统',
      ar: 'Barre omnibus de mise à la terre principale | Système de bloc de bornes'
    },
    metaDesc: {
      en: 'High-purity copper main grounding busbar for centralized grounding connections. UL 467 and IEC 61439 compliant.',
      zh: '高纯铜主接地母排，用于集中接地连接，符合UL 467和IEC 61439标准。',
      ar: 'Barre omnibus de mise à la terre principale en cuivre haute pureté.'
    },
    h1: {
      en: 'Main Grounding Busbar for Centralized Grounding Management',
      zh: '主接地母排 - 集中接地管理',
      ar: 'Barre omnibus de mise à la terre principale pour gestion centralisée'
    },
    keyFeatures: {
      en: [
        '99.9% pure copper for maximum conductivity',
        'Multiple termination points (12-24 connections)',
        'Pre-drilled for standard cable lugs'
      ],
      zh: [
        '99.9%纯铜实现最大导电性',
        '多个接线点（12-24连接）',
        '预钻孔适配标准电缆接头'
      ],
      ar: [
        'Cuivre pur à 99,9% pour conductivité maximale',
        'Points de terminaison multiples (12-24 connexions)',
        'Pré-percé pour cosses de câble standard'
      ]
    },
    applications: {
      en: ['Main Distribution Boards', 'Substation Control Rooms', 'Industrial Control Panels'],
      zh: ['主配电柜', '变电站控制室', '工业控制柜'],
      ar: ['Tableaux de distribution principaux', 'Salles de contrôle de sous-station', 'Panneaux de contrôle industriels']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What copper purity is used?', a: 'Our busbars use 99.9% pure electrolytic tough pitch copper (ETP) for maximum conductivity and corrosion resistance.' },
        { q: 'What are the standard sizes?', a: 'Standard sizes range from 600A to 3200A capacity, with dimensions from 40×5mm to 100×10mm cross-section.' },
        { q: 'Can busbars be insulated?', a: 'Yes, we offer both bare copper and insulated versions with heat-shrink or epoxy coating options.' }
      ],
      zh: [
        { q: '使用什么纯度的铜？', a: '我们的母排使用99.9%纯电解韧铜（ETP），实现最大导电性和耐腐蚀性。' },
        { q: '有哪些标准规格？', a: '标准规格从600A到3200A，截面尺寸从40×5mm到100×10mm。' },
        { q: '母排可以绝缘吗？', a: '可以，我们提供裸铜和绝缘版本，绝缘可选热缩或环氧涂层。' }
      ],
      ar: [
        { q: 'Quelle pureté de cuivre est utilisée?', a: 'Nos barres omnibus utilisent du cuivre ETP pur à 99,9%.' },
        { q: 'Quelles sont les tailles standard?', a: 'Les tailles standard vont de 600A à 3200A.' },
        { q: 'Les barres omnibus peuvent-elles être isolées?', a: 'Oui, nous proposons des versions en cuivre nu et isolé.' }
      ]
    },
    relatedSlugs: ['equipotential-connector', 'grounding-wire', 'grounding-detection-well']
  },

  'exothermic-welding': {
    slug: 'exothermic-welding',
    title: {
      en: 'Exothermic Welding Mold | Molecular Bonding Connection',
      zh: '放热焊接模具 | 分子键合连接',
      ar: 'Moule de soudage exothermique | Connexion par liaison moléculaire'
    },
    metaDesc: {
      en: 'Exothermic welding molds for permanent molecular-level connections. Zero contact resistance, IEC 60987 compliant.',
      zh: '放热焊接模具用于永久性分子级连接，零接触电阻，符合IEC 60987标准。',
      ar: 'Moules de soudage exothermique pour connexions permanentes au niveau moléculaire.'
    },
    h1: {
      en: 'Exothermic Welding Mold for Permanent Electrical Connections',
      zh: '放热焊接模具 - 永久电气连接',
      ar: 'Moule de soudage exothermique pour connexions électriques permanentes'
    },
    keyFeatures: {
      en: [
        'Molecular-level copper-to-copper bonding',
        'Zero contact resistance permanent connection',
        'No external power or heat source required'
      ],
      zh: [
        '分子级铜对铜键合',
        '零接触电阻永久连接',
        '无需外部电源或热源'
      ],
      ar: [
        'Liaison cuivre-cuivre au niveau moléculaire',
        'Connexion permanente à résistance de contact nulle',
        'Aucune source d\'énergie externe requise'
      ]
    },
    applications: {
      en: ['Grounding Grid Connections', 'Cable-to-Rod Joints', 'Rebar Bonding'],
      zh: ['接地网连接', '电缆与接地棒连接', '钢筋连接'],
      ar: ['Connexions de réseau de mise à la terre', 'Joints câble-électrode', 'Liaison d\'armatures']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What is exothermic welding?', a: 'Exothermic welding uses a chemical reaction (copper oxide + aluminum) to create molten copper that fuses conductors at molecular level.' },
        { q: 'What is the mold lifespan?', a: 'Graphite molds typically last 50-100 welds depending on proper maintenance and cleaning after each use.' },
        { q: 'What connection types are available?', a: 'We offer molds for rod-to-cable, cable-to-cable, cable-to-rebar, and various T, X, and L configurations.' }
      ],
      zh: [
        { q: '什么是放热焊接？', a: '放热焊接利用化学反应（氧化铜+铝）产生熔融铜，在分子层面融合导体。' },
        { q: '模具寿命是多少？', a: '石墨模具通常可使用50-100次焊接，取决于正确的维护和每次使用后的清洁。' },
        { q: '有哪些连接类型？', a: '我们提供接地棒对电缆、电缆对电缆、电缆对钢筋等多种模具，以及T型、X型、L型配置。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que le soudage exothermique?', a: 'Le soudage exothermique utilise une réaction chimique (oxyde de cuivre + aluminium) pour créer du cuivre fondu.' },
        { q: 'Quelle est la durée de vie du moule?', a: 'Les moules en graphite durent généralement 50-100 soudures.' },
        { q: 'Quels types de connexion sont disponibles?', a: 'Nous proposons des moules pour électrode-câble, câble-câble, câble-armature, et diverses configurations T, X et L.' }
      ]
    },
    relatedSlugs: ['remote-igniter', 'copper-bonded-rod', 'mechanical-connector']
  },

  'remote-igniter': {
    slug: 'remote-igniter',
    title: {
      en: 'Remote Igniter & Welding Powder | Safe Exothermic Welding',
      zh: '远程点火器与焊粉 | 安全放热焊接',
      ar: 'Allumeur à distance et poudre de soudage | Soudage exothermique sûr'
    },
    metaDesc: {
      en: 'Electronic remote igniter and welding powder for safe exothermic welding operations. Essential for field installations.',
      zh: '电子远程点火器和焊粉，用于安全的放热焊接操作，现场安装必备。',
      ar: 'Allumeur électronique à distance et poudre de soudage pour opérations de soudage exothermique sûres.'
    },
    h1: {
      en: 'Electronic Remote Igniter for Safe Exothermic Welding',
      zh: '电子远程点火器 - 安全放热焊接',
      ar: 'Allumeur électronique à distance pour soudage exothermique sûr'
    },
    keyFeatures: {
      en: [
        'Remote ignition from 3 meters distance',
        'Consistent ignition for reliable welds',
        'Complete welding powder assortment'
      ],
      zh: [
        '3米距离远程点火',
        '稳定点火确保可靠焊接',
        '完整焊粉规格系列'
      ],
      ar: [
        'Allumage à distance de 3 mètres',
        'Allumage constant pour soudures fiables',
        'Assortiment complet de poudres de soudage'
      ]
    },
    applications: {
      en: ['Field Welding Operations', 'Substation Construction', 'Grounding Installation'],
      zh: ['现场焊接作业', '变电站建设', '接地安装'],
      ar: ['Opérations de soudage sur site', 'Construction de sous-station', 'Installation de mise à la terre']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'Why use remote ignition?', a: 'Remote ignition keeps the operator at safe distance during the exothermic reaction, preventing burn injuries from spark ejection.' },
        { q: 'What powder sizes are available?', a: 'Welding powder comes in #45, #65, #90, #115, #150, and #200 sizes for different conductor cross-sections.' },
        { q: 'How should powder be stored?', a: 'Store in cool, dry location away from moisture. Properly stored powder has 2-year shelf life.' }
      ],
      zh: [
        { q: '为什么要用远程点火？', a: '远程点火让操作者在放热反应期间保持安全距离，防止火花喷出造成烧伤。' },
        { q: '有哪些焊粉规格？', a: '焊粉有#45、#65、#90、#115、#150和#200规格，适用于不同导体截面。' },
        { q: '焊粉如何储存？', a: '储存在阴凉干燥处，远离潮湿。正确储存的焊粉保质期2年。' }
      ],
      ar: [
        { q: 'Pourquoi utiliser l\'allumage à distance?', a: 'L\'allumage à distance maintient l\'opérateur à une distance sûre pendant la réaction exothermique.' },
        { q: 'Quelles tailles de poudre sont disponibles?', a: 'La poudre de soudage est disponible en tailles #45, #65, #90, #115, #150 et #200.' },
        { q: 'Comment stocker la poudre?', a: 'Stocker dans un endroit frais et sec, à l\'abri de l\'humidité. La poudre correctement stockée a une durée de conservation de 2 ans.' }
      ]
    },
    relatedSlugs: ['exothermic-welding', 'mechanical-connector', 'copper-bonded-rod']
  },

  'mechanical-connector': {
    slug: 'mechanical-connector',
    title: {
      en: 'Mechanical Connector | High-Strength Grounding Connection',
      zh: '机械连接器 | 高强度接地连接',
      ar: 'Connecteur mécanique | Connexion de mise à la terre haute résistance'
    },
    metaDesc: {
      en: 'High-strength mechanical connectors for grounding applications. Bolted connections for inspection and modification.',
      zh: '高强度机械连接器用于接地应用，螺栓连接便于检查和修改。',
      ar: 'Connecteurs mécaniques haute résistance pour applications de mise à la terre.'
    },
    h1: {
      en: 'High-Strength Mechanical Connector for Grounding Systems',
      zh: '机械连接器 - 接地系统专用',
      ar: 'Connecteur mécanique haute résistance pour systèmes de mise à la terre'
    },
    keyFeatures: {
      en: [
        'High-tensile bolted connection design',
        'Removable for system modifications',
        'Stainless steel hardware for corrosion resistance'
      ],
      zh: [
        '高抗拉螺栓连接设计',
        '可拆卸便于系统修改',
        '不锈钢紧固件耐腐蚀'
      ],
      ar: [
        'Conception de connexion boulonnée haute résistance',
        'Amovible pour modifications du système',
        'Quincaillerie en acier inoxydable pour résistance à la corrosion'
      ]
    },
    applications: {
      en: ['Temporary Grounding', 'Modular Systems', 'Inspection Points'],
      zh: ['临时接地', '模块化系统', '检测点'],
      ar: ['Mise à la terre temporaire', 'Systèmes modulaires', 'Points d\'inspection']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'When to use mechanical vs exothermic?', a: 'Use mechanical connectors for temporary installations or where future modification is needed. Use exothermic for permanent connections.' },
        { q: 'What torque is required?', a: 'Torque specifications vary by connector size. Typical values range from 20-60 Nm. Always follow manufacturer specifications.' },
        { q: 'How to prevent galvanic corrosion?', a: 'Use bimetallic connectors or apply joint compound to prevent galvanic corrosion between dissimilar metals.' }
      ],
      zh: [
        { q: '何时使用机械连接器而非放热焊接？', a: '临时安装或需要未来修改时使用机械连接器。永久连接使用放热焊接。' },
        { q: '需要多大扭矩？', a: '扭矩规格因连接器尺寸而异，典型值20-60Nm。请遵循制造商规格。' },
        { q: '如何防止电偶腐蚀？', a: '使用双金属连接器或涂抹导电膏防止异种金属间的电偶腐蚀。' }
      ],
      ar: [
        { q: 'Quand utiliser mécanique vs exothermique?', a: 'Utilisez des connecteurs mécaniques pour les installations temporaires ou lorsque des modifications futures sont nécessaires.' },
        { q: 'Quel couple est requis?', a: 'Les spécifications de couple varient selon la taille du connecteur. Valeurs typiques de 20-60 Nm.' },
        { q: 'Comment prévenir la corrosion galvanique?', a: 'Utilisez des connecteurs bimétalliques ou appliquez du composé de joint.' }
      ]
    },
    relatedSlugs: ['exothermic-welding', 'copper-bonded-rod', 'grounding-busbar']
  },

  'static-grounding-alarm': {
    slug: 'static-grounding-alarm',
    title: {
      en: 'Static Grounding Alarm | Intrinsically Safe Monitoring',
      zh: '静电接地报警器 | 本质安全型监测',
      ar: 'Alarme de mise à la terre statique | Surveillance intrinsèquement sûre'
    },
    metaDesc: {
      en: 'Intrinsically safe static grounding alarm for petrochemical and hazardous area applications. Real-time monitoring.',
      zh: '本质安全型静电接地报警器，用于石化和危险区域应用，实时监测。',
      ar: 'Alarme de mise à la terre statique intrinsèquement sûre pour applications pétrochimiques.'
    },
    h1: {
      en: 'Intrinsically Safe Static Grounding Alarm System',
      zh: '静电接地报警器 - 本质安全型',
      ar: 'Système d\'alarme de mise à la terre statique intrinsèquement sûr'
    },
    keyFeatures: {
      en: [
        'Ex ia IIC T4 intrinsically safe certification',
        'Continuous resistance monitoring (0-1000Ω)',
        'Visual and audible alarm indication'
      ],
      zh: [
        'Ex ia IIC T4本质安全认证',
        '连续电阻监测（0-1000Ω）',
        '声光报警指示'
      ],
      ar: [
        'Certification de sécurité intrinsèque Ex ia IIC T4',
        'Surveillance continue de la résistance (0-1000Ω)',
        'Indication d\'alarme visuelle et sonore'
      ]
    },
    applications: {
      en: ['Tank Truck Loading', 'Railcar Operations', 'Drum Filling Stations'],
      zh: ['槽车装卸', '铁路罐车作业', '桶装灌装站'],
      ar: ['Chargement de camions-citernes', 'Opérations de wagons-citernes', 'Stations de remplissage de fûts']
    },
    applicationLinks: ['/projects/petrochemical/', '/solutions/petrochemical/', '/projects/transportation/'],
    faq: {
      en: [
        { q: 'What is intrinsically safe?', a: 'Intrinsically safe equipment limits electrical energy to prevent ignition in explosive atmospheres, certified per IEC 60079.' },
        { q: 'What resistance threshold triggers alarm?', a: 'Typical threshold is 10Ω. The system monitors continuously and alarms if resistance exceeds setpoint.' },
        { q: 'Can it interlock with loading systems?', a: 'Yes, the alarm provides relay outputs for interlocking with loading arm control systems.' }
      ],
      zh: [
        { q: '什么是本质安全？', a: '本质安全设备限制电能以防止在爆炸性环境中引燃，按IEC 60079认证。' },
        { q: '什么电阻阈值触发报警？', a: '典型阈值为10Ω。系统连续监测，电阻超过设定值时报警。' },
        { q: '能否与装卸系统联锁？', a: '可以，报警器提供继电器输出，可与装卸臂控制系统联锁。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que la sécurité intrinsèque?', a: 'L\'équipement de sécurité intrinsèque limite l\'énergie électrique pour empêcher l\'allumage dans les atmosphères explosives.' },
        { q: 'Quel seuil de résistance déclenche l\'alarme?', a: 'Seuil typique de 10Ω. Le système surveille en continu et alarme si la résistance dépasse le point de consigne.' },
        { q: 'Peut-il être verrouillé avec les systèmes de chargement?', a: 'Oui, l\'alarme fournit des sorties de relais pour le verrouillage avec les systèmes de contrôle de bras de chargement.' }
      ]
    },
    relatedSlugs: ['rga-floating-tank', 'equipotential-connector', 'grounding-resistance-meter']
  },

  'rga-floating-tank': {
    slug: 'rga-floating-tank',
    title: {
      en: 'RGA Floating Roof Tank Grounding | API 650 Compliant',
      zh: '浮顶罐可伸缩接地装置 | API 650标准',
      ar: 'Mise à la terre de réservoir à toit flottant RGA | Conforme API 650'
    },
    metaDesc: {
      en: 'Retractable grounding assembly for floating roof tanks. Maintains grounding during roof movement, API 650 compliant.',
      zh: '浮顶罐可伸缩接地装置，在浮顶移动过程中保持接地，符合API 650标准。',
      ar: 'Assemblage de mise à la terre rétractable pour réservoirs à toit flottant.'
    },
    h1: {
      en: 'Retractable Grounding Assembly for Floating Roof Tanks',
      zh: '可伸缩接地装置 - 浮顶罐专用',
      ar: 'Assemblage de mise à la terre rétractable pour réservoirs à toit flottant'
    },
    keyFeatures: {
      en: [
        'Maintains grounding during roof travel',
        'Retractable cable with constant tension',
        'API 650 and NFPA 780 compliant design'
      ],
      zh: [
        '浮顶移动过程中保持接地',
        '可伸缩电缆恒定张力',
        '符合API 650和NFPA 780设计'
      ],
      ar: [
        'Maintient la mise à la terre pendant le déplacement du toit',
        'Câble rétractable à tension constante',
        'Conception conforme API 650 et NFPA 780'
      ]
    },
    applications: {
      en: ['Floating Roof Tanks', 'Oil Storage Terminals', 'Petrochemical Facilities'],
      zh: ['浮顶罐', '油品储运库', '石化设施'],
      ar: ['Réservoirs à toit flottant', 'Terminaux de stockage de pétrole', 'Installations pétrochimiques']
    },
    applicationLinks: ['/projects/petrochemical/', '/solutions/petrochemical/', '/projects/transportation/'],
    faq: {
      en: [
        { q: 'What is RGA?', a: 'RGA (Retractable Grounding Assembly) provides continuous grounding connection between floating roof and tank shell during roof movement.' },
        { q: 'How many RGA units per tank?', a: 'Per NFPA 780, floating roof tanks require minimum 2 RGA units at opposite sides for redundancy.' },
        { q: 'What is the cable lifespan?', a: 'RGA cables are designed for 10+ years service with proper inspection. Replace if signs of wear or corrosion are found.' }
      ],
      zh: [
        { q: '什么是RGA？', a: 'RGA（可伸缩接地装置）在浮顶移动过程中提供浮顶与罐壁之间的连续接地连接。' },
        { q: '每个罐需要多少套RGA？', a: '根据NFPA 780，浮顶罐至少需要在相对两侧各安装1套RGA以实现冗余。' },
        { q: '电缆寿命是多少？', a: 'RGA电缆设计寿命10年以上，需定期检查。发现磨损或腐蚀迹象应更换。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que RGA?', a: 'RGA (Assemblage de mise à la terre rétractable) fournit une connexion de mise à la terre continue entre le toit flottant et la coque du réservoir.' },
        { q: 'Combien d\'unités RGA par réservoir?', a: 'Selon NFPA 780, les réservoirs à toit flottant nécessitent minimum 2 unités RGA.' },
        { q: 'Quelle est la durée de vie du câble?', a: 'Les câbles RGA sont conçus pour 10+ années de service avec inspection appropriée.' }
      ]
    },
    relatedSlugs: ['static-grounding-alarm', 'equipotential-connector', 'grounding-detection-well']
  },

  'grounding-detection-well': {
    slug: 'grounding-detection-well',
    title: {
      en: 'Grounding Inspection Pit | Observation Well System',
      zh: '接地检测井 | 观测井系统',
      ar: 'Puits d\'inspection de mise à la terre | Système de puits d\'observation'
    },
    metaDesc: {
      en: 'Heavy-duty grounding inspection pit for resistance testing and system maintenance. Load-bearing design.',
      zh: '重型接地检测井，用于电阻测试和系统维护，承重设计。',
      ar: 'Puits d\'inspection de mise à la terre robuste pour tests de résistance et maintenance.'
    },
    h1: {
      en: 'Heavy-Duty Grounding Inspection Pit for System Maintenance',
      zh: '接地检测井 - 系统维护专用',
      ar: 'Puits d\'inspection de mise à la terre robuste pour maintenance du système'
    },
    keyFeatures: {
      en: [
        'Load-bearing capacity up to 5 tons',
        'IP68 rated cover for weather protection',
        'Integrated test terminal for measurements'
      ],
      zh: [
        '承重能力达5吨',
        'IP68防护等级盖板',
        '集成测试端子'
      ],
      ar: [
        'Capacité de charge jusqu\'à 5 tonnes',
        'Couvercle classé IP68 pour protection météorologique',
        'Borne de test intégrée pour mesures'
      ]
    },
    applications: {
      en: ['Commercial Buildings', 'Substation Maintenance', 'Industrial Plants'],
      zh: ['商业建筑', '变电站维护', '工业厂房'],
      ar: ['Bâtiments commerciaux', 'Maintenance de sous-station', 'Usines industrielles']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What is the load-bearing capacity?', a: 'Our inspection wells are rated for 5 tons static load, suitable for vehicle traffic areas with appropriate cover.' },
        { q: 'How does the test terminal work?', a: 'The test terminal allows disconnecting the grounding electrode from the system for isolated resistance measurement.' },
        { q: 'What materials are available?', a: 'We offer HDPE plastic for standard applications and concrete-reinforced for heavy-duty installations.' }
      ],
      zh: [
        { q: '承重能力是多少？', a: '检测井额定静载荷5吨，配合合适盖板可用于车辆通行区域。' },
        { q: '测试端子如何工作？', a: '测试端子可将接地电极与系统断开，进行隔离电阻测量。' },
        { q: '有哪些材质可选？', a: '标准应用提供HDPE塑料材质，重型安装提供混凝土增强材质。' }
      ],
      ar: [
        { q: 'Quelle est la capacité de charge?', a: 'Nos puits d\'inspection sont évalués pour une charge statique de 5 tonnes.' },
        { q: 'Comment fonctionne la borne de test?', a: 'La borne de test permet de déconnecter l\'électrode de mise à la terre du système.' },
        { q: 'Quels matériaux sont disponibles?', a: 'Nous offrons du plastique HDPE pour applications standard et du béton armé pour installations lourdes.' }
      ]
    },
    relatedSlugs: ['grounding-resistance-meter', 'copper-bonded-rod', 'gem-material']
  },

  'grounding-resistance-meter': {
    slug: 'grounding-resistance-meter',
    title: {
      en: 'Grounding Resistance Meter | Digital Precision Tester',
      zh: '接地电阻测试仪 | 数字精密测试仪',
      ar: 'Mesureur de résistance de mise à la terre | Testeur de précision numérique'
    },
    metaDesc: {
      en: 'Digital precision grounding resistance meter for field testing. Three-point and four-point measurement methods.',
      zh: '数字精密接地电阻测试仪，用于现场测试，支持三极法和四极法测量。',
      ar: 'Mesureur de résistance de mise à la terre numérique de précision pour tests sur site.'
    },
    h1: {
      en: 'Digital Precision Grounding Resistance Meter',
      zh: '接地电阻测试仪 - 数字精密型',
      ar: 'Mesureur de résistance de mise à la terre numérique de précision'
    },
    keyFeatures: {
      en: [
        'Three-point fall-of-potential method',
        '0.01Ω to 2000Ω measurement range',
        'Data logging with USB export'
      ],
      zh: [
        '三极法（电位降法）测量',
        '0.01Ω至2000Ω测量范围',
        '数据记录与USB导出'
      ],
      ar: [
        'Méthode de chute de potentiel à trois points',
        'Plage de mesure de 0,01Ω à 2000Ω',
        'Enregistrement de données avec export USB'
      ]
    },
    applications: {
      en: ['Commissioning Tests', 'Periodic Inspections', 'System Verification'],
      zh: ['调试测试', '定期检测', '系统验证'],
      ar: ['Tests de mise en service', 'Inspections périodiques', 'Vérification du système']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What is fall-of-potential method?', a: 'The fall-of-potential method uses two auxiliary electrodes to measure grounding resistance without disconnecting the system.' },
        { q: 'How accurate are measurements?', a: 'Our meters provide ±2% accuracy with 0.01Ω resolution, meeting IEEE 81 testing requirements.' },
        { q: 'Can it measure soil resistivity?', a: 'Yes, using the four-point Wenner method, the meter can calculate soil resistivity for grounding design.' }
      ],
      zh: [
        { q: '什么是电位降法？', a: '电位降法使用两个辅助电极测量接地电阻，无需断开系统。' },
        { q: '测量精度如何？', a: '测试仪精度±2%，分辨率0.01Ω，符合IEEE 81测试要求。' },
        { q: '能否测量土壤电阻率？', a: '可以，使用四极Wenner法，测试仪可计算土壤电阻率用于接地设计。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que la méthode de chute de potentiel?', a: 'La méthode de chute de potentiel utilise deux électrodes auxiliaires pour mesurer la résistance de mise à la terre.' },
        { q: 'Quelle est la précision des mesures?', a: 'Nos mesureurs offrent une précision de ±2% avec une résolution de 0,01Ω.' },
        { q: 'Peut-il mesurer la résistivité du sol?', a: 'Oui, en utilisant la méthode Wenner à quatre points, le mesureur peut calculer la résistivité du sol.' }
      ]
    },
    relatedSlugs: ['grounding-detection-well', 'soil-resistivity-meter', 'copper-bonded-rod']
  },

  'soil-resistivity-meter': {
    slug: 'soil-resistivity-meter',
    title: {
      en: 'Soil Resistivity Analyzer | Four-Electrode Wenner Method',
      zh: '土壤电阻率分析仪 | 四极Wenner法',
      ar: 'Analyseur de résistivité du sol | Méthode Wenner à quatre électrodes'
    },
    metaDesc: {
      en: 'Four-electrode soil resistivity analyzer for grounding system design. Essential for site assessment.',
      zh: '四极土壤电阻率分析仪，用于接地系统设计，现场评估必备。',
      ar: 'Analyseur de résistivité du sol à quatre électrodes pour la conception de systèmes de mise à la terre.'
    },
    h1: {
      en: 'Four-Electrode Soil Resistivity Analyzer',
      zh: '土壤电阻率分析仪 - 四极型',
      ar: 'Analyseur de résistivité du sol à quatre électrodes'
    },
    keyFeatures: {
      en: [
        'Wenner four-point measurement method',
        'Multi-depth profiling capability',
        'Automatic resistivity calculation'
      ],
      zh: [
        'Wenner四极测量法',
        '多深度剖面测量能力',
        '自动电阻率计算'
      ],
      ar: [
        'Méthode de mesure Wenner à quatre points',
        'Capacité de profilage multi-profondeur',
        'Calcul automatique de résistivité'
      ]
    },
    applications: {
      en: ['Site Surveys', 'Grounding Design', 'Corrosion Assessment'],
      zh: ['现场勘测', '接地设计', '腐蚀评估'],
      ar: ['Relevés de site', 'Conception de mise à la terre', 'Évaluation de corrosion']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'Why measure soil resistivity?', a: 'Soil resistivity is essential for designing grounding systems. Higher resistivity requires more electrodes or deeper installation.' },
        { q: 'What is the Wenner method?', a: 'The Wenner method uses four equally-spaced electrodes. Resistivity = 2πaR, where a is spacing and R is measured resistance.' },
        { q: 'How deep should measurements go?', a: 'For grounding design, measure at multiple probe spacings (a) to profile resistivity at different depths: typically 1m, 2m, 5m, 10m spacings.' }
      ],
      zh: [
        { q: '为什么要测量土壤电阻率？', a: '土壤电阻率是设计接地系统的关键参数。电阻率越高，需要更多电极或更深安装。' },
        { q: '什么是Wenner法？', a: 'Wenner法使用四个等间距电极。电阻率=2πaR，其中a为间距，R为测量电阻。' },
        { q: '测量深度应该是多少？', a: '接地设计时，应在多个探针间距（a）下测量以获得不同深度的电阻率剖面：典型间距为1m、2m、5m、10m。' }
      ],
      ar: [
        { q: 'Pourquoi mesurer la résistivité du sol?', a: 'La résistivité du sol est essentielle pour concevoir des systèmes de mise à la terre.' },
        { q: 'Qu\'est-ce que la méthode Wenner?', a: 'La méthode Wenner utilise quatre électrodes espacées de manière égale. Résistivité = 2πaR.' },
        { q: 'Quelle profondeur les mesures doivent-elles atteindre?', a: 'Pour la conception de mise à la terre, mesurez à plusieurs espacements de sonde: typiquement 1m, 2m, 5m, 10m.' }
      ]
    },
    relatedSlugs: ['grounding-resistance-meter', 'copper-bonded-rod', 'gem-material']
  },

  'power-spd-t1': {
    slug: 'power-spd-t1',
    title: {
      en: 'Type 1 SPD | 10/350μs Lightning Current Arrester',
      zh: '一级电源电涌保护器 | 10/350μs雷电流避雷器',
      ar: 'SPD Type 1 | Parafoudre pour courant de foudre 10/350μs'
    },
    metaDesc: {
      en: 'Type 1 surge protective device for lightning current. 10/350μs waveform, IEC 61643-11 compliant.',
      zh: '一级电源电涌保护器，用于雷电流保护，10/350μs波形，符合IEC 61643-11标准。',
      ar: 'Dispositif de protection contre les surtensions Type 1 pour courant de foudre.'
    },
    h1: {
      en: 'Type 1 Surge Protective Device for Lightning Current',
      zh: '一级电源电涌保护器 - 雷电流专用',
      ar: 'Dispositif de protection contre les surtensions Type 1 pour courant de foudre'
    },
    keyFeatures: {
      en: [
        '10/350μs lightning current waveform',
        'Up to 25kA impulse discharge current',
        'IEC 61643-11 Class I tested'
      ],
      zh: [
        '10/350μs雷电流波形',
        '冲击放电电流高达25kA',
        'IEC 61643-11 I级测试'
      ],
      ar: [
        'Forme d\'onde de courant de foudre 10/350μs',
        'Courant de décharge d\'impulsion jusqu\'à 25kA',
        'Testé Classe I IEC 61643-11'
      ]
    },
    applications: {
      en: ['Main Distribution Boards', 'Service Entrance', 'Renewable Energy Inverters'],
      zh: ['主配电柜', '进线柜', '新能源逆变器'],
      ar: ['Tableaux de distribution principaux', 'Entrée de service', 'Onduleurs d\'énergie renouvelable']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/solutions/power-energy/'],
    faq: {
      en: [
        { q: 'What is Type 1 SPD?', a: 'Type 1 SPD handles direct lightning current (10/350μs waveform) and is installed at the main distribution board or service entrance.' },
        { q: 'Type 1 vs Type 2 difference?', a: 'Type 1 handles 10/350μs lightning current (direct strike energy). Type 2 handles 8/20μs surge current (induced surges).' },
        { q: 'Is coordination needed?', a: 'Yes, when using Type 1 and Type 2 together, ensure proper coordination with adequate separation distance or coordinated SPDs.' }
      ],
      zh: [
        { q: '什么是一级SPD？', a: '一级SPD承受直击雷电流（10/350μs波形），安装在主配电柜或进线处。' },
        { q: '一级和二级SPD有什么区别？', a: '一级承受10/350μs雷电流（直击雷能量），二级承受8/20μs浪涌电流（感应浪涌）。' },
        { q: '是否需要配合？', a: '是的，一级和二级SPD配合使用时，需确保足够的去耦距离或使用配合型SPD。' }
      ],
      ar: [
        { q: 'Qu\'est-ce que SPD Type 1?', a: 'SPD Type 1 gère le courant de foudre direct (forme d\'onde 10/350μs) et est installé au tableau de distribution principal.' },
        { q: 'Différence Type 1 vs Type 2?', a: 'Type 1 gère le courant de foudre 10/350μs (énergie de frappe directe). Type 2 gère le courant de surtension 8/20μs (surtensions induites).' },
        { q: 'Une coordination est-elle nécessaire?', a: 'Oui, lors de l\'utilisation de Type 1 et Type 2 ensemble, assurez une coordination appropriée.' }
      ]
    },
    relatedSlugs: ['power-spd-t2', 'signal-spd', 'copper-bonded-rod']
  },

  'power-spd-t2': {
    slug: 'power-spd-t2',
    title: {
      en: 'Type 2 SPD | 8/20μs Surge Protective Device',
      zh: '二级电源电涌保护器 | 8/20μs浪涌保护器',
      ar: 'SPD Type 2 | Dispositif de protection contre les surtensions 8/20μs'
    },
    metaDesc: {
      en: 'Type 2 surge protective device for sub-distribution protection. 8/20μs waveform, IEC 61643-11 compliant.',
      zh: '二级电源电涌保护器，用于分配电保护，8/20μs波形，符合IEC 61643-11标准。',
      ar: 'Dispositif de protection contre les surtensions Type 2 pour protection sous-distribution.'
    },
    h1: {
      en: 'Type 2 Surge Protective Device for Sub-Distribution',
      zh: '二级电源电涌保护器 - 分配电保护',
      ar: 'Dispositif de protection contre les surtensions Type 2 pour sous-distribution'
    },
    keyFeatures: {
      en: [
        '8/20μs surge current waveform',
        'Up to 40kA nominal discharge current',
        'Status indication with remote contact'
      ],
      zh: [
        '8/20μs浪涌电流波形',
        '标称放电电流高达40kA',
        '状态指示与遥信触点'
      ],
      ar: [
        'Forme d\'onde de courant de surtension 8/20μs',
        'Courant de décharge nominal jusqu\'à 40kA',
        'Indication d\'état avec contact à distance'
      ]
    },
    applications: {
      en: ['Sub-Distribution Panels', 'Floor Distribution', 'Equipment Protection'],
      zh: ['分配电柜', '楼层配电', '设备保护'],
      ar: ['Panneaux de sous-distribution', 'Distribution d\'étage', 'Protection d\'équipement']
    },
    applicationLinks: ['/projects/power-energy/', '/projects/infrastructure/', '/solutions/power-energy/'],
    faq: {
      en: [
        { q: 'Where to install Type 2 SPD?', a: 'Type 2 SPDs are installed at sub-distribution boards, downstream from Type 1 devices, protecting branch circuits and equipment.' },
        { q: 'What is the protection level?', a: 'Typical protection level Up is 1.5-2.5kV, protecting equipment with 4kV insulation withstand.' },
        { q: 'How to monitor SPD status?', a: 'Our Type 2 SPDs include visual status indicator and dry contact for remote monitoring of cartridge condition.' }
      ],
      zh: [
        { q: '二级SPD安装在哪里？', a: '二级SPD安装在分配电柜，位于一级SPD下游，保护分支电路和设备。' },
        { q: '保护水平是多少？', a: '典型保护水平Up为1.5-2.5kV，保护4kV绝缘耐压的设备。' },
        { q: '如何监测SPD状态？', a: '我们的二级SPD包含可视状态指示器和干接点，用于远程监测模块状态。' }
      ],
      ar: [
        { q: 'Où installer SPD Type 2?', a: 'Les SPD Type 2 sont installés aux tableaux de sous-distribution, en aval des dispositifs Type 1.' },
        { q: 'Quel est le niveau de protection?', a: 'Niveau de protection typique Up de 1,5-2,5kV, protégeant les équipements avec tenue d\'isolation 4kV.' },
        { q: 'Comment surveiller l\'état SPD?', a: 'Nos SPD Type 2 incluent un indicateur d\'état visuel et un contact sec pour surveillance à distance.' }
      ]
    },
    relatedSlugs: ['power-spd-t1', 'signal-spd', 'grounding-busbar']
  },

  'signal-spd': {
    slug: 'signal-spd',
    title: {
      en: 'Signal SPD | RS485 Surge Protector',
      zh: '信号电涌保护器 | RS485浪涌保护器',
      ar: 'SPD de signal | Protecteur de surtension RS485'
    },
    metaDesc: {
      en: 'Signal surge protector for RS485, RS232, and industrial control lines. Low let-through voltage.',
      zh: '信号电涌保护器，用于RS485、RS232和工业控制线路，低残压。',
      ar: 'Protecteur de surtension de signal pour lignes RS485, RS232 et contrôle industriel.'
    },
    h1: {
      en: 'Signal Surge Protector for Industrial Control Systems',
      zh: '信号电涌保护器 - 工业控制系统专用',
      ar: 'Protecteur de surtension de signal pour systèmes de contrôle industriel'
    },
    keyFeatures: {
      en: [
        'Multi-stage protection circuit',
        'Low capacitance for high-speed signals',
        'Plug-in cartridge for easy replacement'
      ],
      zh: [
        '多级保护电路',
        '低电容适配高速信号',
        '插拔式模块便于更换'
      ],
      ar: [
        'Circuit de protection multi-étages',
        'Faible capacité pour signaux haute vitesse',
        'Cartouche enfichable pour remplacement facile'
      ]
    },
    applications: {
      en: ['Data Centers', 'SCADA Systems', 'Industrial Networks'],
      zh: ['数据中心', 'SCADA系统', '工业网络'],
      ar: ['Centres de données', 'Systèmes SCADA', 'Réseaux industriels']
    },
    applicationLinks: ['/projects/infrastructure/', '/solutions/infrastructure/', '/projects/power-energy/'],
    faq: {
      en: [
        { q: 'What signals can be protected?', a: 'Our signal SPDs protect RS485, RS232, RS422, CAN bus, and other industrial communication protocols.' },
        { q: 'Does it affect signal quality?', a: 'Low capacitance design (<10pF) ensures minimal impact on signal integrity, suitable for high-speed communications up to 10Mbps.' },
        { q: 'How to select correct model?', a: 'Select based on signal voltage (5V, 12V, 24V), interface type, and required protection level.' }
      ],
      zh: [
        { q: '可以保护哪些信号？', a: '我们的信号SPD保护RS485、RS232、RS422、CAN总线等工业通信协议。' },
        { q: '是否影响信号质量？', a: '低电容设计（<10pF）确保对信号完整性影响最小，适用于高达10Mbps的高速通信。' },
        { q: '如何选择正确型号？', a: '根据信号电压（5V、12V、24V）、接口类型和所需保护水平选择。' }
      ],
      ar: [
        { q: 'Quels signaux peuvent être protégés?', a: 'Nos SPD de signal protègent RS485, RS232, RS422, bus CAN et autres protocoles de communication industrielle.' },
        { q: 'Affecte-t-il la qualité du signal?', a: 'La conception à faible capacité (<10pF) assure un impact minimal sur l\'intégrité du signal.' },
        { q: 'Comment sélectionner le bon modèle?', a: 'Sélectionnez en fonction de la tension du signal (5V, 12V, 24V), du type d\'interface et du niveau de protection requis.' }
      ]
    },
    relatedSlugs: ['power-spd-t2', 'power-spd-t1', 'grounding-busbar']
  },

  'gem-material': {
    slug: 'gem-material',
    title: {
      en: 'Ground Enhancement Material (GEM) | Permanent Soil Treatment',
      zh: '降阻剂 | 永久性土壤改良',
      ar: 'Matériau d\'amélioration du sol (GEM) | Traitement permanent du sol'
    },
    metaDesc: {
      en: 'Permanent ground enhancement material for high resistivity soil. Non-leaching, low resistivity compound.',
      zh: '永久性降阻剂，用于高电阻率土壤，无渗漏低电阻率化合物。',
      ar: 'Matériau d\'amélioration du sol permanent pour sol à haute résistivité.'
    },
    h1: {
      en: 'Ground Enhancement Material for Challenging Soil Conditions',
      zh: '降阻剂 - 复杂土壤条件专用',
      ar: 'Matériau d\'amélioration du sol pour conditions de sol difficiles'
    },
    keyFeatures: {
      en: [
        'Resistivity as low as 0.1Ω·m',
        'Non-leaching permanent compound',
        'Environmentally compliant formulation'
      ],
      zh: [
        '电阻率低至0.1Ω·m',
        '无渗漏永久性化合物',
        '环保配方'
      ],
      ar: [
        'Résistivité aussi basse que 0,1Ω·m',
        'Composé permanent non lessivant',
        'Formulation conforme à l\'environnement'
      ]
    },
    applications: {
      en: ['Rocky Terrain', 'Desert Installations', 'Mountain Substations'],
      zh: ['岩石地质', '沙漠安装', '山地变电站'],
      ar: ['Terrain rocheux', 'Installations désertiques', 'Sous-stations de montagne']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'How does GEM work?', a: 'GEM surrounds the electrode with low-resistivity material, effectively increasing electrode diameter and reducing overall resistance.' },
        { q: 'Is GEM environmentally safe?', a: 'Yes, our GEM is non-toxic, non-leaching, and meets environmental regulations for groundwater protection.' },
        { q: 'How much GEM is needed?', a: 'Typical application uses 25-50kg per electrode, depending on soil conditions and target resistance reduction.' }
      ],
      zh: [
        { q: '降阻剂如何工作？', a: '降阻剂用低电阻率材料包围电极，有效增大电极直径，降低整体电阻。' },
        { q: '降阻剂是否环境安全？', a: '是的，我们的降阻剂无毒、无渗漏，符合地下水保护环保法规。' },
        { q: '需要多少降阻剂？', a: '典型应用每根电极使用25-50kg，取决于土壤条件和目标电阻降低值。' }
      ],
      ar: [
        { q: 'Comment fonctionne GEM?', a: 'GEM entoure l\'électrode avec un matériau à faible résistivité, augmentant efficacement le diamètre de l\'électrode.' },
        { q: 'GEM est-il écologiquement sûr?', a: 'Oui, notre GEM est non toxique, non lessivant et respecte les réglementations environnementales.' },
        { q: 'Combien de GEM est nécessaire?', a: 'L\'application typique utilise 25-50kg par électrode, selon les conditions du sol.' }
      ]
    },
    relatedSlugs: ['copper-bonded-rod', 'grounding-module', 'electrolytic-ion-electrode']
  },

  'grounding-module': {
    slug: 'grounding-module',
    title: {
      en: 'Graphite Grounding Module | Low Resistance Electrode',
      zh: '石墨接地模块 | 低电阻电极',
      ar: 'Module de mise à la terre en graphite | Électrode à faible résistance'
    },
    metaDesc: {
      en: 'Low-resistance graphite grounding module for high resistivity soil. Expanded surface area for improved dissipation.',
      zh: '低电阻石墨接地模块，用于高电阻率土壤，扩大表面积改善散流。',
      ar: 'Module de mise à la terre en graphite à faible résistance pour sol à haute résistivité.'
    },
    h1: {
      en: 'Low-Resistance Graphite Grounding Module',
      zh: '石墨接地模块 - 低电阻型',
      ar: 'Module de mise à la terre en graphite à faible résistance'
    },
    keyFeatures: {
      en: [
        'Expanded contact surface area',
        'Non-corrosive graphite construction',
        'Integrated connection terminals'
      ],
      zh: [
        '扩大接触表面积',
        '非腐蚀性石墨结构',
        '集成连接端子'
      ],
      ar: [
        'Surface de contact élargie',
        'Construction en graphite non corrosive',
        'Bornes de connexion intégrées'
      ]
    },
    applications: {
      en: ['High Resistivity Areas', 'Seasonal Frozen Ground', 'Corrosive Soil'],
      zh: ['高电阻率地区', '季节性冻土', '腐蚀性土壤'],
      ar: ['Zones à haute résistivité', 'Sol gelé saisonnier', 'Sol corrosif']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'Why use graphite modules?', a: 'Graphite modules provide large contact surface area in compact form, effective where driving deep rods is impractical.' },
        { q: 'How to install?', a: 'Install in excavated trench, backfill with native soil or GEM material. Multiple modules can be connected in parallel.' },
        { q: 'What is the service life?', a: 'Graphite is chemically inert and non-corrosive, providing 30+ year service life in most soil conditions.' }
      ],
      zh: [
        { q: '为什么使用石墨模块？', a: '石墨模块以紧凑形式提供大接触面积，在无法打入深接地棒的场合效果显著。' },
        { q: '如何安装？', a: '在开挖沟槽中安装，用原土或降阻剂回填。多个模块可并联连接。' },
        { q: '使用寿命是多少？', a: '石墨化学惰性且不腐蚀，在大多数土壤条件下可使用30年以上。' }
      ],
      ar: [
        { q: 'Pourquoi utiliser des modules en graphite?', a: 'Les modules en graphite fournissent une grande surface de contact sous forme compacte.' },
        { q: 'Comment installer?', a: 'Installer dans une tranchée excavée, remblayer avec le sol natif ou du matériau GEM.' },
        { q: 'Quelle est la durée de vie?', a: 'Le graphite est chimiquement inerte et non corrosif, offrant une durée de vie de 30+ ans.' }
      ]
    },
    relatedSlugs: ['gem-material', 'copper-bonded-rod', 'electrolytic-ion-electrode']
  }
};

export function getProductSEO(id: string, nameEn?: string, desc?: string, lang: string = 'en'): ProductSEO {
  if (PRODUCT_SEO_MAP[id]) {
    return PRODUCT_SEO_MAP[id];
  }
  
  const fallbackTitle = nameEn ? `${nameEn} | Lightning Protection & Grounding` : 'Product | Lightning Protection';
  const fallbackDesc = desc || `Professional ${nameEn || 'product'} for lightning protection and grounding systems.`;
  
  return {
    slug: id,
    title: { en: fallbackTitle.slice(0, 60), zh: fallbackTitle.slice(0, 60), ar: fallbackTitle.slice(0, 60) },
    metaDesc: { en: fallbackDesc.slice(0, 160), zh: fallbackDesc.slice(0, 160), ar: fallbackDesc.slice(0, 160) },
    h1: { en: nameEn || id, zh: nameEn || id, ar: nameEn || id },
    keyFeatures: {
      en: ['Professional grade construction', 'International standard compliant', 'Reliable performance'],
      zh: ['专业级结构', '符合国际标准', '可靠性能'],
      ar: ['Construction de qualité professionnelle', 'Conforme aux normes internationales', 'Performance fiable']
    },
    applications: {
      en: ['Industrial Facilities', 'Commercial Buildings', 'Infrastructure'],
      zh: ['工业设施', '商业建筑', '基础设施'],
      ar: ['Installations industrielles', 'Bâtiments commerciaux', 'Infrastructure']
    },
    applicationLinks: ['/projects/infrastructure/', '/projects/power-energy/', '/projects/petrochemical/'],
    faq: {
      en: [
        { q: 'What standards does this meet?', a: 'Our products comply with IEC 62561, UL 467, and relevant international standards.' },
        { q: 'Is technical support available?', a: 'Yes, we provide comprehensive technical support and installation guidance.' },
        { q: 'What is the warranty?', a: 'Standard warranty is 2 years, with extended warranties available.' }
      ],
      zh: [
        { q: '符合哪些标准？', a: '我们的产品符合IEC 62561、UL 467及相关国际标准。' },
        { q: '是否提供技术支持？', a: '是的，我们提供全面的技术支持和安装指导。' },
        { q: '质保期多长？', a: '标准质保2年，可提供延保服务。' }
      ],
      ar: [
        { q: 'Quelles normes respecte-t-il?', a: 'Nos produits sont conformes à IEC 62561, UL 467 et aux normes internationales pertinentes.' },
        { q: 'Le support technique est-il disponible?', a: 'Oui, nous fournissons un support technique complet et des conseils d\'installation.' },
        { q: 'Quelle est la garantie?', a: 'La garantie standard est de 2 ans, avec des garanties prolongées disponibles.' }
      ]
    },
    relatedSlugs: ['copper-bonded-rod', 'exothermic-welding', 'grounding-detection-well']
  };
}

export function getRelatedProductSEO(currentId: string): ProductSEO[] {
  const currentSEO = PRODUCT_SEO_MAP[currentId];
  if (!currentSEO) return [];
  
  return currentSEO.relatedSlugs
    .map(slug => PRODUCT_SEO_MAP[slug])
    .filter((seo): seo is ProductSEO => seo !== undefined);
}
