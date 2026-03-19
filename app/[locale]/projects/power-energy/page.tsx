import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Power & Energy Projects - Green Electric Lightning Protection",
  description: "High-voltage grid and solar grounding systems across deserts and rainforests. UHV substation protection and grid-scale grounding solutions.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const industryPainPoints = {
  title: '行业痛点',
  titleEn: 'Industry Pain Points',
  description: '新能源（光伏、风电）占地面积巨大，接地网物料成本及物流压力大；海外变电站对接地系统的 50 年长寿命运行有明确要求。',
  descriptionEn: 'Renewable energy (solar, wind) projects cover vast areas, creating significant pressure on grounding network material costs and logistics. Overseas substations have explicit requirements for 50-year long-life operation of grounding systems.',
  items: [
    {
      icon: 'area',
      title: '占地面积巨大',
      titleEn: 'Massive Coverage Area',
      description: '光伏、风电项目占地广阔，接地网物料成本及物流压力大',
      descriptionEn: 'Solar and wind projects cover vast areas, creating significant pressure on material costs and logistics'
    },
    {
      icon: 'lifespan',
      title: '50年长寿命要求',
      titleEn: '50-Year Lifespan Requirement',
      description: '海外变电站对接地系统有明确的50年长寿命运行要求',
      descriptionEn: 'Overseas substations have explicit 50-year long-life operation requirements for grounding systems'
    },
    {
      icon: 'environment',
      title: '极端环境挑战',
      titleEn: 'Extreme Environment Challenges',
      description: '沙漠干燥、热带雨林等多变环境对接地系统稳定性要求高',
      descriptionEn: 'Variable environments like dry deserts and tropical rainforests demand high grounding system stability'
    }
  ]
};

const specializedSolutions = {
  title: '专项方案',
  titleEn: 'Specialized Solutions',
  items: [
    {
      icon: 'lifespan',
      title: '长寿命免维护铜包钢接地网',
      titleEn: 'Long-Life Maintenance-Free CCS Grounding',
      description: '50年设计寿命，免维护运行，降低全生命周期成本',
      descriptionEn: '50-year design life, maintenance-free operation, reducing total lifecycle cost'
    },
    {
      icon: 'module',
      title: '定制化高导电接地模块',
      titleEn: 'Customized High-Conductivity Grounding Modules',
      description: '针对不同土壤条件定制，优化导电性能与成本',
      descriptionEn: 'Customized for different soil conditions, optimizing conductivity and cost'
    },
    {
      icon: 'array',
      title: '大型阵列综合防雷方案',
      titleEn: 'Large-Scale Array Integrated Lightning Protection',
      description: '针对光伏/风电阵列的专业防雷保护体系',
      descriptionEn: 'Professional lightning protection system for solar/wind arrays'
    }
  ]
};

const projects = [
  {
    id: 'al-dhafra-solar',
    title: '阿联酋 Al Dhafra 2.1GW 光伏电站',
    titleEn: 'Al Dhafra 2.1GW Solar PV Plant, UAE',
    location: '阿联酋',
    locationEn: 'UAE',
    year: '2024',
    background: '中国能建/中信博等主导的中东光伏标杆项目。',
    backgroundEn: 'Middle East solar benchmark project led by CEEC/Arctech and others.',
    highlight: '交付了定制化接地模块及数万套放热焊接耗材，攻克极端干燥沙漠土壤电阻率调节难题。',
    highlightEn: 'Delivered customized grounding modules and tens of thousands of exothermic welding consumables, overcoming extreme dry desert soil resistivity challenges.',
    stats: [
      { value: '2.1 GW', label: '装机容量', labelEn: 'Capacity' },
      { value: '数万套', label: '放热焊接耗材', labelEn: 'Welding Consumables' },
      { value: '定制化', label: '接地模块', labelEn: 'Custom Modules' },
    ],
    challenges: [
      '极端干燥沙漠土壤电阻率调节',
      '数万个组件方阵的均压网',
      '大规模物料物流与成本控制',
    ],
    challengesEn: [
      'Extreme dry desert soil resistivity adjustment',
      'Equalizing network for tens of thousands of component arrays',
      'Large-scale material logistics and cost control',
    ],
    solutions: [
      '定制化接地模块应对高电阻率',
      '放热焊接耗材批量供应',
      '均压网优化设计',
    ],
    solutionsEn: [
      'Customized grounding modules for high resistivity',
      'Batch supply of exothermic welding consumables',
      'Optimized equalizing network design',
    ],
    image: '/images/hero/hero-3.jpg',
  },
  {
    id: 'hassyan-power',
    title: '迪拜哈斯彦清洁燃煤/天然气电站',
    titleEn: 'Hassyan Clean Coal/Gas Power Plant, Dubai',
    location: '迪拜',
    locationEn: 'Dubai',
    year: '2023',
    background: '"一带一路"框架下中东首个清洁煤电站，由哈尔滨电气 EPC 总包。',
    backgroundEn: 'First clean coal power plant in the Middle East under the Belt and Road framework, EPC by Harbin Electric.',
    highlight: '提供符合中东电网标准的接地网深化设计配套与高标准铜包钢供应。',
    highlightEn: 'Provided grounding network deepening design support compliant with Middle East grid standards and high-standard copper-clad steel supply.',
    stats: [
      { value: '2400 MW', label: '装机容量', labelEn: 'Capacity' },
      { value: '哈电', label: 'EPC 总包', labelEn: 'EPC Contractor' },
      { value: '50年', label: '设计寿命', labelEn: 'Design Life' },
    ],
    challenges: [
      '中东电网标准合规',
      '清洁煤电站特殊防护要求',
      '高标准铜包钢供应',
    ],
    challengesEn: [
      'Middle East grid standard compliance',
      'Special protection requirements for clean coal power plant',
      'High-standard copper-clad steel supply',
    ],
    solutions: [
      '接地网深化设计配套',
      '高标准铜包钢材料供应',
      '符合中东电网标准',
    ],
    solutionsEn: [
      'Grounding network deepening design support',
      'High-standard copper-clad steel material supply',
      'Compliant with Middle East grid standards',
    ],
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 'java-substation',
    title: '印尼爪哇岛 500kV 骨干变电站',
    titleEn: 'Java 500kV Backbone Substation, Indonesia',
    location: '印度尼西亚',
    locationEn: 'Indonesia',
    year: '2023',
    background: '中国电建参与的东南亚电网升级项目。',
    backgroundEn: 'Southeast Asian grid upgrade project with participation from PowerChina.',
    highlight: '针对热带酸性土壤提供高厚度镀铜钢绞线与电解离子接地极。',
    highlightEn: 'Provided high-thickness copper-clad steel stranded wire and electrolytic ion grounding electrodes for tropical acidic soil.',
    stats: [
      { value: '500 kV', label: '电压等级', labelEn: 'Voltage Level' },
      { value: '酸性土壤', label: '特殊地质', labelEn: 'Special Geology' },
      { value: '< 0.5Ω', label: '接地电阻', labelEn: 'Ground Resistance' },
    ],
    challenges: [
      '热带酸性土壤腐蚀',
      '500kV高压变电站防护',
      '东南亚电网标准合规',
    ],
    challengesEn: [
      'Tropical acidic soil corrosion',
      '500kV high-voltage substation protection',
      'Southeast Asian grid standard compliance',
    ],
    solutions: [
      '高厚度镀铜钢绞线',
      '电解离子接地极',
      '热带环境专用防腐方案',
    ],
    solutionsEn: [
      'High-thickness copper-clad steel stranded wire',
      'Electrolytic ion grounding electrodes',
      'Specialized anti-corrosion solution for tropical environment',
    ],
    image: '/images/hero/hero-2.jpg',
  },
];

export default async function PowerEnergyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-3.jpg"
            alt="Power & Energy Projects"
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

            <div className="flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30 w-fit">
              <svg className="w-5 h-5 text-yellow-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                {isZh ? '电力与新能源' : 'Power & Energy'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {isZh ? '跨越沙漠与雨林的高压电网与光伏接地体系' : 'High-Voltage Grid & Solar Grounding Across Deserts & Rainforests'}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {isZh 
                ? '为特高压变电站和国家电网基础设施提供保护和大规模接地，服务65+项目覆盖12个国家。'
                : 'UHV substation protection and grid-scale grounding for national power infrastructure. Serving 65+ projects across 12 countries.'
              }
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">65+</div>
                <div className="text-sm text-gray-400">{isZh ? '项目案例' : 'Projects'}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">12</div>
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
                    {item.icon === 'area' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                    {item.icon === 'lifespan' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {item.icon === 'environment' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    {item.icon === 'lifespan' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {item.icon === 'module' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {item.icon === 'array' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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
              {isZh ? '深入了解我们在电力能源行业的标杆项目' : 'Explore our landmark projects in the power & energy sector'}
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
                      <span className="px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-full text-sm font-medium">
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
                      <span className="text-yellow-400 font-medium">{isZh ? '背景：' : 'Background: '}</span>
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
                        <div className="text-xl font-bold text-yellow-400">{stat.value}</div>
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

      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有电力能源项目需求？' : 'Have a Power & Energy Project?'}
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的高压电网和新能源防雷解决方案'
              : 'Contact us for professional high-voltage grid and renewable energy lightning protection solutions'
            }
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-yellow-600 rounded-lg hover:bg-yellow-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
          </Link>
        </div>
      </section>
    </main>
  );
}
