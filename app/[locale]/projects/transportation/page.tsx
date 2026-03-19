import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Transportation Projects - Green Electric Lightning Protection",
  description: "Ensuring zero-interruption operation for cross-border HSR and heavy-haul railways. Critical protection for airports, railways, and transit hubs.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const industryPainPoints = {
  title: '行业痛点',
  titleEn: 'Industry Pain Points',
  description: '轨道交通沿线地质多变，强电（牵引供电）与弱电（信号通讯）共用走廊，需严格防止雷电感应导致的信号误码及系统瘫痪。',
  descriptionEn: 'Variable geology along rail transit routes, with shared corridors for high-voltage (traction power) and low-voltage (signaling/communication) systems. Strict prevention of signal errors and system failures caused by lightning induction is essential.',
  items: [
    {
      icon: 'geology',
      title: '沿线地质多变',
      titleEn: 'Variable Geology Along Routes',
      description: '轨道交通沿线地质条件复杂多变，接地系统设计难度大',
      descriptionEn: 'Complex and variable geological conditions along rail routes, making grounding system design challenging'
    },
    {
      icon: 'interference',
      title: '强弱电共用走廊',
      titleEn: 'Shared HV/LV Corridors',
      description: '牵引供电与信号通讯共用走廊，雷电感应风险高',
      descriptionEn: 'Traction power and signaling/communication share corridors, creating high lightning induction risk'
    },
    {
      icon: 'signal',
      title: '信号误码风险',
      titleEn: 'Signal Error Risk',
      description: '雷电感应可能导致信号误码及系统瘫痪',
      descriptionEn: 'Lightning induction can cause signal errors and system failures'
    }
  ]
};

const specializedSolutions = {
  title: '专项方案',
  titleEn: 'Specialized Solutions',
  items: [
    {
      icon: 'grounding',
      title: '综合贯通地线系统',
      titleEn: 'Integrated Through Grounding System',
      description: '全线贯通的接地网络，确保电气连续性',
      descriptionEn: 'Through grounding network for the entire route, ensuring electrical continuity'
    },
    {
      icon: 'isolation',
      title: '强弱电物理隔离接地',
      titleEn: 'HV/LV Physical Isolation Grounding',
      description: '有效隔离强电与弱电系统，防止电磁干扰',
      descriptionEn: 'Effective isolation between HV and LV systems, preventing electromagnetic interference'
    },
    {
      icon: 'lemp',
      title: 'LEMP 防护',
      titleEn: 'LEMP Protection',
      description: '防雷电磁脉冲 (LEMP) 防护，保护敏感电子设备',
      descriptionEn: 'Lightning Electromagnetic Impulse (LEMP) protection for sensitive electronic equipment'
    }
  ]
};

const projects = [
  {
    id: 'jakarta-bandung-hsr',
    title: '印尼雅万高铁',
    titleEn: 'Jakarta-Bandung High-Speed Rail',
    location: '印度尼西亚',
    locationEn: 'Indonesia',
    year: '2023',
    background: '中国高铁全产业链出海第一单，中铁、中交等联合体。',
    backgroundEn: 'First complete HSR industry chain export from China, consortium including China Railway and China Communications Construction.',
    highlight: '交付"四电"系统精密接地材料，保障高铁指挥系统在极端天气下的绝对安全。',
    highlightEn: 'Delivered precision grounding materials for the "Four Electrification" systems, ensuring absolute safety of HSR command systems in extreme weather.',
    stats: [
      { value: '142 km', label: '线路长度', labelEn: 'Route Length' },
      { value: '350 km/h', label: '设计时速', labelEn: 'Design Speed' },
      { value: '四电', label: '系统集成', labelEn: 'System Integration' },
    ],
    challenges: [
      '热带强雷暴区高频雷击',
      '"四电"系统精密接地要求',
      '高铁指挥系统绝对安全',
    ],
    challengesEn: [
      'High-frequency lightning in tropical severe thunderstorm zone',
      'Precision grounding requirements for "Four Electrification" systems',
      'Absolute safety for HSR command systems',
    ],
    solutions: [
      '精密接地材料供应',
      '综合防雷保护体系',
      '极端天气安全保障',
    ],
    solutionsEn: [
      'Precision grounding material supply',
      'Integrated lightning protection system',
      'Safety assurance in extreme weather',
    ],
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 'etihad-rail',
    title: '阿联酋联邦铁路二期',
    titleEn: 'Etihad Rail Phase II',
    location: '阿联酋',
    locationEn: 'UAE',
    year: '2024',
    background: '连接阿联酋全境的大型铁路网，由中国铁建 (CRCC) 等参与。',
    backgroundEn: 'Large-scale railway network connecting all of UAE, with participation from CRCC and others.',
    highlight: '为全线通信基站和控制中心提供自适应沙漠环境的接地系统。',
    highlightEn: 'Provided adaptive desert environment grounding systems for all communication base stations and control centers along the route.',
    stats: [
      { value: '1200 km', label: '线路长度', labelEn: 'Route Length' },
      { value: '沙漠', label: '特殊环境', labelEn: 'Special Environment' },
      { value: '全境', label: '覆盖范围', labelEn: 'Coverage' },
    ],
    challenges: [
      '沙漠环境自适应接地',
      '全线通信基站保护',
      '控制中心关键设施防护',
    ],
    challengesEn: [
      'Desert environment adaptive grounding',
      'Protection for all communication base stations',
      'Critical facility protection for control centers',
    ],
    solutions: [
      '自适应沙漠环境接地系统',
      '通信基站综合防护',
      '控制中心关键设施保护',
    ],
    solutionsEn: [
      'Adaptive desert environment grounding system',
      'Integrated protection for communication base stations',
      'Critical facility protection for control centers',
    ],
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 'mecca-metro',
    title: '沙特麦加轻轨及维护中心',
    titleEn: 'Mecca Metro & Maintenance Center',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    year: '2023',
    background: '保障朝觐季节超大规模人流运送的关键基建。',
    backgroundEn: 'Critical infrastructure ensuring massive passenger transport during Hajj season.',
    highlight: '针对车辆段和枢纽站进行防雷改造，提供静电泄放与设备保护闭环服务。',
    highlightEn: 'Lightning protection retrofit for depot and hub stations, providing closed-loop static discharge and equipment protection services.',
    stats: [
      { value: '朝觐', label: '关键保障', labelEn: 'Critical Support' },
      { value: '车辆段', label: '防雷改造', labelEn: 'Depot Retrofit' },
      { value: '闭环', label: '服务体系', labelEn: 'Closed-Loop Service' },
    ],
    challenges: [
      '朝觐季节超大规模人流',
      '车辆段防雷改造',
      '枢纽站静电泄放',
    ],
    challengesEn: [
      'Massive passenger flow during Hajj season',
      'Lightning protection retrofit for depot',
      'Static discharge for hub stations',
    ],
    solutions: [
      '防雷改造工程',
      '静电泄放系统',
      '设备保护闭环服务',
    ],
    solutionsEn: [
      'Lightning protection retrofit engineering',
      'Static discharge system',
      'Closed-loop equipment protection service',
    ],
    image: '/images/hero/hero-3.jpg',
  },
];

export default async function TransportationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Transportation Projects"
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

            <div className="flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 w-fit">
              <svg className="w-5 h-5 text-blue-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                {isZh ? '轨道交通' : 'Transportation'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {isZh ? '保障跨国高铁与重载铁路的零中断运行' : 'Zero-Interruption Operation for HSR & Heavy-Haul Railways'}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isZh 
                ? '为机场、铁路和交通枢纽提供关键保护，安全和连续性不可妥协。服务50+项目覆盖8个国家。'
                : 'Critical protection for airports, railways, and transit hubs where safety and continuity are non-negotiable. Serving 50+ projects across 8 countries.'
              }
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">{isZh ? '项目案例' : 'Projects'}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">8</div>
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
                    {item.icon === 'geology' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {item.icon === 'interference' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {item.icon === 'signal' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
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
                    {item.icon === 'grounding' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {item.icon === 'isolation' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {item.icon === 'lemp' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              {isZh ? '深入了解我们在轨道交通行业的标杆项目' : 'Explore our landmark projects in the transportation sector'}
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
                      <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
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
                      <span className="text-blue-400 font-medium">{isZh ? '背景：' : 'Background: '}</span>
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
                        <div className="text-xl font-bold text-blue-400">{stat.value}</div>
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
              <Link href="/projects/infrastructure" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '基础设施' : 'Infrastructure'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有轨道交通项目需求？' : 'Have a Transportation Project?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的轨道交通防雷解决方案'
              : 'Contact us for professional transportation lightning protection solutions'
            }
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
          </Link>
        </div>
      </section>
    </main>
  );
}
