import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Petrochemical Projects - Green Electric Lightning Protection",
  description: "Explosion-proof lightning protection for petrochemical facilities, oil depots, and refineries in extreme heat and high corrosion environments.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const industryPainPoints = {
  title: '行业痛点',
  titleEn: 'Industry Pain Points',
  description: '中东及东南亚沿海地区土壤电阻率极高（沙漠环境），且伴有高盐雾腐蚀；石化储罐区属于极高风险等级，对防爆、静电消除及接地系统的可靠性有着近乎苛刻的验收标准。',
  descriptionEn: 'Extremely high soil resistivity in Middle East and Southeast Asian coastal regions (desert environments), combined with high salt-spray corrosion. Petrochemical storage tank areas are classified as extremely high-risk zones, with near-stringent acceptance standards for explosion-proof, static elimination, and grounding system reliability.',
  items: [
    {
      icon: 'resistance',
      title: '极高土壤电阻率',
      titleEn: 'Extremely High Soil Resistivity',
      description: '沙漠环境土壤电阻率极高，传统接地难以达标',
      descriptionEn: 'Desert environments have extremely high soil resistivity, making traditional grounding difficult to meet standards'
    },
    {
      icon: 'corrosion',
      title: '高盐雾腐蚀',
      titleEn: 'High Salt-Spray Corrosion',
      description: '波斯湾等沿海地区盐雾腐蚀严重，材料寿命短',
      descriptionEn: 'Severe salt-spray corrosion in coastal areas like the Persian Gulf, shortening material lifespan'
    },
    {
      icon: 'explosion',
      title: '防爆合规严苛',
      titleEn: 'Stringent Explosion-Proof Compliance',
      description: '石化储罐区对防爆、静电消除有近乎苛刻的验收标准',
      descriptionEn: 'Petrochemical storage areas have near-stringent acceptance standards for explosion-proof and static elimination'
    }
  ]
};

const specializedSolutions = {
  title: '专项方案',
  titleEn: 'Specialized Solutions',
  items: [
    {
      icon: 'well',
      title: '深井接地技术',
      titleEn: 'Deep Well Grounding Technology',
      description: '突破高电阻率土壤限制，实现稳定低电阻接地',
      descriptionEn: 'Break through high resistivity soil limitations, achieve stable low-resistance grounding'
    },
    {
      icon: 'copper',
      title: '高厚度铜包钢材料',
      titleEn: 'High-Thickness Copper-Clad Steel',
      description: '抗腐蚀性能卓越，确保30年以上使用寿命',
      descriptionEn: 'Excellent corrosion resistance, ensuring 30+ years service life'
    },
    {
      icon: 'welding',
      title: '放热焊接永久连接',
      titleEn: 'Exothermic Welding Permanent Connection',
      description: '分子级结合，永不松动腐蚀，确保终身导电性',
      descriptionEn: 'Molecular-level bonding, never loosens or corrodes, ensuring lifetime conductivity'
    },
    {
      icon: 'certification',
      title: 'ATEX/IECEx 认证静电防护',
      titleEn: 'ATEX/IECEx Certified Static Protection',
      description: '符合国际防爆认证的静电防护体系',
      descriptionEn: 'Static protection system compliant with international explosion-proof certifications'
    }
  ]
};

const projects = [
  {
    id: 'saudi-mega-refinery',
    title: '沙特某国家级炼化综合体',
    titleEn: 'Saudi Mega Refinery',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    year: '2024',
    background: '中国顶级石化 EPC 总包，对接沙特阿美 (Aramco) 标准。',
    backgroundEn: 'Top-tier Chinese petrochemical EPC contractor, aligned with Saudi Aramco standards.',
    highlight: '针对波斯湾高盐雾环境，交付 50,000 米抗腐蚀铜包钢接地系统。',
    highlightEn: 'Delivered 50,000 meters of corrosion-resistant copper-clad steel grounding system for the high salt-spray environment of the Persian Gulf.',
    stats: [
      { value: '50,000m', label: '铜包钢接地系统', labelEn: 'Copper-Clad Steel Grounding' },
      { value: 'Aramco', label: '标准认证', labelEn: 'Standard Certification' },
      { value: '30+', label: '设计寿命 (年)', labelEn: 'Design Life (Years)' },
    ],
    challenges: [
      '波斯湾高盐雾腐蚀环境',
      '沙特阿美严苛验收标准',
      '大规模接地系统协调',
    ],
    challengesEn: [
      'High salt-spray corrosion environment of the Persian Gulf',
      'Stringent Saudi Aramco acceptance standards',
      'Large-scale grounding system coordination',
    ],
    solutions: [
      '高厚度铜包钢抗腐蚀材料',
      '放热焊接确保永久连接',
      '符合 Aramco 标准的设计方案',
    ],
    solutionsEn: [
      'High-thickness copper-clad steel corrosion-resistant materials',
      'Exothermic welding for permanent connections',
      'Design solutions compliant with Aramco standards',
    ],
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 'kuwait-al-zour-refinery',
    title: '科威特阿祖尔炼油厂',
    titleEn: 'Kuwait Al-Zour Refinery',
    location: '科威特',
    locationEn: 'Kuwait',
    year: '2023',
    background: '中东地区规模最大的炼油厂之一，由中国石化五建等 EPC 参与。',
    backgroundEn: 'One of the largest refineries in the Middle East, with participation from SINOPEC Fifth Construction and other EPCs.',
    highlight: '提供了全场防雷集采供应，确保复杂工况下接地电阻持续达标。',
    highlightEn: 'Provided full-site lightning protection centralized procurement supply, ensuring grounding resistance continues to meet standards under complex conditions.',
    stats: [
      { value: '全厂', label: '防雷集采供应', labelEn: 'Full-Site Supply' },
      { value: '50°C+', label: '极端高温耐受', labelEn: 'Extreme Heat Resistance' },
      { value: '100%', label: '验收通过率', labelEn: 'Acceptance Rate' },
    ],
    challenges: [
      '极端高温下的材料稳定性',
      '大面积等电位连接',
      '复杂工况下接地电阻控制',
    ],
    challengesEn: [
      'Material stability under extreme high temperatures',
      'Large-area equipotential bonding',
      'Grounding resistance control under complex conditions',
    ],
    solutions: [
      '耐高温特种接地材料',
      '全场等电位连接系统',
      '持续达标的接地电阻保障',
    ],
    solutionsEn: [
      'High-temperature resistant specialty grounding materials',
      'Full-site equipotential bonding system',
      'Continuously compliant grounding resistance assurance',
    ],
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 'pengerang-terminal',
    title: '马来西亚边佳兰深水枢纽',
    titleEn: 'Pengerang Deepwater Terminal',
    location: '马来西亚',
    locationEn: 'Malaysia',
    year: '2023',
    background: '东南亚大型能源中心，热带雨林气候，雷暴日 >150 天。',
    backgroundEn: 'Large-scale energy hub in Southeast Asia, tropical rainforest climate with >150 thunderstorm days.',
    highlight: '采用 ESE 提前放电避雷针阵列与纳米碳回填料，攻克热带雨林气候的高频雷击难题。',
    highlightEn: 'Adopted ESE early streamer emission lightning rod arrays and nano-carbon backfill materials to overcome high-frequency lightning challenges in tropical rainforest climate.',
    stats: [
      { value: '150+', label: '雷暴日/年', labelEn: 'Thunderstorm Days/Year' },
      { value: 'ESE', label: '避雷针阵列', labelEn: 'Lightning Rod Array' },
      { value: '< 1Ω', label: '接地电阻', labelEn: 'Ground Resistance' },
    ],
    challenges: [
      '热带雨林高频雷击环境',
      '雷暴日超过150天/年',
      '高湿度对接地系统的影响',
    ],
    challengesEn: [
      'High-frequency lightning in tropical rainforest environment',
      'Over 150 thunderstorm days per year',
      'Impact of high humidity on grounding system',
    ],
    solutions: [
      'ESE提前放电避雷针阵列',
      '纳米碳回填料降阻',
      '高频雷击防护体系',
    ],
    solutionsEn: [
      'ESE early streamer emission lightning rod arrays',
      'Nano-carbon backfill for resistance reduction',
      'High-frequency lightning protection system',
    ],
    image: '/images/hero/hero-3.jpg',
  },
];

export default async function PetrochemicalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Petrochemical Projects"
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

            <div className="flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30 w-fit">
              <svg className="w-5 h-5 text-orange-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                {isZh ? '石油与化工' : 'Petrochemical'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {isZh ? '应对极热与高腐蚀环境的防爆级保护' : 'Explosion-Proof Protection for Extreme Conditions'}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isZh 
                ? '为油库、炼油厂和化工厂提供符合严格安全合规的防爆保护，服务80+项目覆盖15个国家。'
                : 'Explosion-proof protection for oil depots, refineries, and chemical plants with strict safety compliance. Serving 80+ projects across 15 countries.'
              }
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-orange-400">80+</div>
                <div className="text-sm text-gray-400">{isZh ? '项目案例' : 'Projects'}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-orange-400">15</div>
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
                    {item.icon === 'resistance' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {item.icon === 'corrosion' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    )}
                    {item.icon === 'explosion' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSolutions.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-green-electric-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-electric-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === 'well' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {item.icon === 'copper' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {item.icon === 'welding' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    )}
                    {item.icon === 'certification' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              {isZh ? '深入了解我们在石化行业的标杆项目' : 'Explore our landmark projects in the petrochemical sector'}
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
                      <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
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
                      <span className="text-orange-400 font-medium">{isZh ? '背景：' : 'Background: '}</span>
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
                        <div className="text-xl font-bold text-orange-400">{stat.value}</div>
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
              <Link href="/projects/power-energy" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '电力与新能源' : 'Power & Energy'}
              </Link>
              <Link href="/projects/transportation" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '轨道交通' : 'Transportation'}
              </Link>
              <Link href="/projects/infrastructure" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {isZh ? '基础设施' : 'Infrastructure'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有石化项目需求？' : 'Have a Petrochemical Project?'}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的防爆防雷解决方案和有竞争力的报价'
              : 'Contact us for professional explosion-proof lightning protection solutions and competitive pricing'
            }
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
          </Link>
        </div>
      </section>
    </main>
  );
}
