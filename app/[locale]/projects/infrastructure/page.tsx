import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Infrastructure Projects - Green Electric Lightning Protection",
  description: "System-level protection for commercial centers, stadiums, and data centers. Comprehensive lightning protection solutions for large-scale infrastructure.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const industryPainPoints = {
  title: '行业痛点',
  titleEn: 'Industry Pain Points',
  description: '地标性建筑（场馆、枢纽）高度高且结构复杂，对侧击雷防护、接闪器隐蔽性以及建筑整体电磁兼容性要求极高。',
  descriptionEn: 'Landmark buildings (stadiums, hubs) are tall with complex structures, requiring extremely high standards for side-strike lightning protection, concealed air terminal systems, and overall building electromagnetic compatibility.',
  items: [
    {
      icon: 'height',
      title: '建筑高度高结构复杂',
      titleEn: 'Tall & Complex Structures',
      description: '地标性建筑高度高且结构复杂，防雷设计难度大',
      descriptionEn: 'Landmark buildings are tall with complex structures, making lightning protection design challenging'
    },
    {
      icon: 'side',
      title: '侧击雷防护要求',
      titleEn: 'Side-Strike Protection Requirements',
      description: '超高层建筑对侧击雷防护有极高要求',
      descriptionEn: 'Super-tall buildings have extremely high requirements for side-strike lightning protection'
    },
    {
      icon: 'concealment',
      title: '接闪器隐蔽性',
      titleEn: 'Concealed Air Terminals',
      description: '建筑美学要求接闪器隐蔽，不影响建筑外观',
      descriptionEn: 'Architectural aesthetics require concealed air terminals without affecting building appearance'
    }
  ]
};

const specializedSolutions = {
  title: '专项方案',
  titleEn: 'Specialized Solutions',
  items: [
    {
      icon: '3d',
      title: '3D 综合防雷系统',
      titleEn: '3D Integrated Lightning Protection',
      description: '三维空间防雷保护，覆盖建筑全方位',
      descriptionEn: 'Three-dimensional lightning protection, covering all aspects of the building'
    },
    {
      icon: 'integrated',
      title: '与建筑结构融合的接闪体系',
      titleEn: 'Structure-Integrated Air Terminal System',
      description: '接闪器与建筑结构完美融合，不影响建筑美学',
      descriptionEn: 'Air terminals perfectly integrated with building structure, preserving architectural aesthetics'
    },
    {
      icon: 'smart',
      title: '智能雷击监测平台',
      titleEn: 'Smart Lightning Monitoring Platform',
      description: '实时监测雷击状态，智能预警与运维',
      descriptionEn: 'Real-time lightning status monitoring, intelligent warning and maintenance'
    }
  ]
};

const projects = [
  {
    id: 'lusail-stadium',
    title: '卡塔尔卢塞尔体育场',
    titleEn: 'Lusail Stadium, Qatar',
    location: '卡塔尔',
    locationEn: 'Qatar',
    year: '2022',
    background: '2022 世界杯决赛主场馆，由中国铁建 (CRCC) 承建。',
    backgroundEn: 'Main venue for the 2022 World Cup Final, constructed by CRCC.',
    highlight: '配套供应了高可靠性的等电位连接件与防雷关键组件。',
    highlightEn: 'Supplied high-reliability equipotential bonding components and critical lightning protection components.',
    stats: [
      { value: '80,000', label: '观众容量', labelEn: 'Spectator Capacity' },
      { value: '世界杯', label: '决赛场馆', labelEn: 'Final Venue' },
      { value: 'CRCC', label: '承建方', labelEn: 'Contractor' },
    ],
    challenges: [
      '全钢结构大跨度建筑',
      '雷电流泄放路径设计',
      '国际赛事高标准要求',
    ],
    challengesEn: [
      'Full steel structure with large span',
      'Lightning current discharge path design',
      'High standards for international events',
    ],
    solutions: [
      '高可靠性等电位连接件',
      '防雷关键组件供应',
      '钢结构雷电流泄放设计',
    ],
    solutionsEn: [
      'High-reliability equipotential bonding components',
      'Critical lightning protection component supply',
      'Steel structure lightning current discharge design',
    ],
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 'neom-city',
    title: '沙特新未来城 (NEOM) 先导区基础设施',
    titleEn: 'NEOM Pilot Zone Infrastructure',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    year: '2024',
    background: '全球关注的未来城市项目。',
    backgroundEn: 'Globally watched future city project.',
    highlight: '提供隐蔽式避雷终端与云端实时雷击预警系统，满足高端城市景观与智能运维要求。',
    highlightEn: 'Provided concealed lightning terminals and cloud-based real-time lightning warning system, meeting high-end urban landscape and intelligent O&M requirements.',
    stats: [
      { value: 'NEOM', label: '未来城市', labelEn: 'Future City' },
      { value: '隐蔽式', label: '避雷终端', labelEn: 'Concealed Terminal' },
      { value: '云端', label: '智能预警', labelEn: 'Cloud Warning' },
    ],
    challenges: [
      '高端城市景观要求',
      '智能运维需求',
      '未来城市标准',
    ],
    challengesEn: [
      'High-end urban landscape requirements',
      'Intelligent O&M requirements',
      'Future city standards',
    ],
    solutions: [
      '隐蔽式避雷终端',
      '云端实时雷击预警系统',
      '智能运维平台',
    ],
    solutionsEn: [
      'Concealed lightning terminals',
      'Cloud-based real-time lightning warning system',
      'Intelligent O&M platform',
    ],
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 'egypt-cbd',
    title: '埃及新行政首都中央商务区 (CBD)',
    titleEn: 'Egypt New Administrative Capital CBD',
    location: '埃及',
    locationEn: 'Egypt',
    year: '2024',
    background: '由中国建筑 (CSCEC) 承建，含非洲第一高楼。',
    backgroundEn: 'Constructed by CSCEC, including the tallest building in Africa.',
    highlight: '提供了全套高层建筑防雷技术方案与抗拉力接地导体。',
    highlightEn: 'Provided complete high-rise building lightning protection technical solution and tensile grounding conductors.',
    stats: [
      { value: '385m', label: '非洲第一高楼', labelEn: "Africa's Tallest" },
      { value: 'CSCEC', label: '承建方', labelEn: 'Contractor' },
      { value: 'CBD', label: '中央商务区', labelEn: 'CBD' },
    ],
    challenges: [
      '超高层建筑引下线补偿',
      '侧击雷防护',
      '非洲第一高楼特殊要求',
    ],
    challengesEn: [
      'Down conductor compensation for super-tall building',
      'Side-strike lightning protection',
      'Special requirements for Africa\'s tallest building',
    ],
    solutions: [
      '高层建筑防雷技术方案',
      '抗拉力接地导体',
      '侧击雷防护体系',
    ],
    solutionsEn: [
      'High-rise building lightning protection technical solution',
      'Tensile grounding conductors',
      'Side-strike lightning protection system',
    ],
    image: '/images/hero/hero-3.jpg',
  },
];

export default async function InfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Infrastructure Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-900/80 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <Link 
              href="/projects" 
              className="inline-flex items-center text-green-electric-400 hover:text-green-electric-300 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isZh ? '返回项目总览' : 'Back to Projects'}
            </Link>

            <div className="flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30 w-fit">
              <svg className="w-5 h-5 text-purple-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                {isZh ? '大型基础设施' : 'Infrastructure'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {isZh ? '商业中心、场馆与数据中心的系统级防护' : 'System-Level Protection for Commercial Centers, Stadiums & Data Centers'}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isZh 
                ? '为商业建筑、体育场馆和公共设施提供保护解决方案。服务70+项目覆盖18个国家。'
                : 'Protection solutions for commercial buildings, stadiums, and public facilities. Serving 70+ projects across 18 countries.'
              }
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">70+</div>
                <div className="text-sm text-gray-400">{isZh ? '项目案例' : 'Projects'}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">18</div>
                <div className="text-sm text-gray-400">{isZh ? '服务国家' : 'Countries'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isZh ? industryPainPoints.title : industryPainPoints.titleEn}
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              {isZh ? industryPainPoints.description : industryPainPoints.descriptionEn}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryPainPoints.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-red-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === 'height' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {item.icon === 'side' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {item.icon === 'concealment' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isZh ? item.title : item.titleEn}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isZh ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-industrial-950">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              {isZh ? specializedSolutions.title : specializedSolutions.titleEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializedSolutions.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-green-electric-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-electric-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === '3d' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    )}
                    {item.icon === 'integrated' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {item.icon === 'smart' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isZh ? item.title : item.titleEn}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isZh ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {isZh ? '三大标杆案例' : 'Three Landmark Projects'}
            </h2>
            <p className="text-gray-400">
              {isZh ? '深入了解我们在基础设施行业的标杆项目' : 'Explore our landmark projects in the infrastructure sector'}
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={isZh ? project.title : project.titleEn}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 to-transparent" />
                    <div className="absolute bottom-6 start-6">
                      <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-green-electric-400 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{isZh ? project.location : project.locationEn}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {isZh ? project.title : project.titleEn}
                  </h3>

                  <div className="bg-industrial-800/50 border border-industrial-700 p-4 rounded-xl mb-4">
                    <p className="text-gray-300 text-sm">
                      <span className="text-purple-400 font-medium">{isZh ? '背景：' : 'Background: '}</span>
                      {isZh ? project.background : project.backgroundEn}
                    </p>
                  </div>

                  <div className="bg-green-electric-500/10 border border-green-electric-500/30 p-4 rounded-xl mb-6">
                    <p className="text-gray-300 text-sm">
                      <span className="text-green-electric-400 font-medium">{isZh ? '亮点：' : 'Highlight: '}</span>
                      {isZh ? project.highlight : project.highlightEn}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-industrial-800/50 border border-industrial-700 p-4 rounded-xl">
                        <div className="text-xl font-bold text-purple-400">{stat.value}</div>
                        <div className="text-xs text-gray-400">{isZh ? stat.label : stat.labelEn}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <svg className="w-5 h-5 text-red-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {isZh ? '项目挑战' : 'Challenges'}
                      </h4>
                      <ul className="space-y-2">
                        {(isZh ? project.challenges : project.challengesEn).map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 me-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <svg className="w-5 h-5 text-green-electric-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {isZh ? '解决方案' : 'Solutions'}
                      </h4>
                      <ul className="space-y-2">
                        {(isZh ? project.solutions : project.solutionsEn).map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-electric-400 rounded-full mt-2 me-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-industrial-950 border-t border-industrial-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isZh ? '探索其他行业项目' : 'Explore Other Industries'}
              </h3>
              <p className="text-gray-400">
                {isZh ? '查看我们在其他行业的项目案例' : 'View our projects in other industries'}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects/petrochemical" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '石油与化工' : 'Petrochemical'}
              </Link>
              <Link href="/projects/power-energy" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '电力与新能源' : 'Power & Energy'}
              </Link>
              <Link href="/projects/transportation" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '轨道交通' : 'Transportation'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有基础设施项目需求？' : 'Have an Infrastructure Project?'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的基础设施防雷解决方案'
              : 'Contact us for professional infrastructure lightning protection solutions'
            }
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
          </Link>
        </div>
      </section>
    </main>
  );
}
