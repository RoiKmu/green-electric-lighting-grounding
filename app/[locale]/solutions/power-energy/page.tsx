import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Power & Energy Solutions - Green Electric Lightning Protection",
  description: "System stability and lifecycle cost optimization lightning protection solutions for power plants and renewable energy facilities.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const solutionContent = {
  hero: {
    badge: '电力与新能源',
    badgeEn: 'Power & Energy',
    title: '聚焦「系统稳定性与全生命周期成本」',
    titleEn: 'System Stability & Lifecycle Cost',
    subtitle: '跨越地形约束，交付稳定的接地阻值。',
    subtitleEn: 'Overcoming terrain constraints, delivering stable grounding resistance values.',
    description: '在沙漠或多山地带的电力工程中，不稳定的土壤电阻率是 EPC 交付的最大挑战。我们通过降阻模块与深井接地的组合优化，将不确定的地质条件转化为确定的技术指标。我们追求的不是材料的堆砌，而是通过精确的设计余裕（Design Redundancy），在降低总体拥有成本（TCO）的同时，满足 500kV 以上电网的严苛验收。',
    descriptionEn: 'In power engineering projects in desert or mountainous regions, unstable soil resistivity is the biggest challenge for EPC delivery. Through combined optimization of resistance reduction modules and deep well grounding, we transform uncertain geological conditions into certain technical indicators. We pursue not material stacking, but through precise Design Redundancy, while reducing Total Cost of Ownership (TCO), meeting the stringent acceptance requirements of 500kV+ power grids.',
  },
  challenge: {
    title: '挑战',
    titleEn: 'The Challenge',
    subtitle: '大型光伏或变电站关注的是大规模交付的效率和长期可靠性。',
    subtitleEn: 'Large-scale PV or substations focus on delivery efficiency and long-term reliability.',
    items: [
      {
        title: '不稳定土壤电阻率',
        titleEn: 'Unstable Soil Resistivity',
        description: '沙漠或多山地带土壤电阻率变化剧烈，传统接地设计难以保证稳定达标，成为 EPC 交付的最大挑战。',
        descriptionEn: 'Soil resistivity varies dramatically in desert or mountainous regions. Traditional grounding design struggles to ensure stable compliance, becoming the biggest challenge for EPC delivery.',
      },
      {
        title: '大规模交付效率',
        titleEn: 'Large-Scale Delivery Efficiency',
        description: '大型光伏电站或变电站项目占地面积大，接地材料需求量巨大，对供应链和施工效率提出极高要求。',
        descriptionEn: 'Large-scale PV power stations or substation projects cover vast areas with enormous grounding material requirements, placing extremely high demands on supply chain and construction efficiency.',
      },
      {
        title: '严苛验收标准',
        titleEn: 'Stringent Acceptance Standards',
        description: '500kV 以上电网对接地系统有严格的技术指标要求，任何不达标都可能导致项目延期或返工。',
        descriptionEn: 'Power grids above 500kV have strict technical requirements for grounding systems. Any non-compliance can lead to project delays or rework.',
      },
    ],
  },
  insight: {
    title: '见解',
    titleEn: 'The Insight',
    subtitle: '将不确定的地质条件转化为确定的技术指标',
    subtitleEn: 'Transforming uncertain geological conditions into certain technical indicators',
    items: [
      {
        title: '降阻模块组合优化',
        titleEn: 'Resistance Reduction Module Optimization',
        description: '通过降阻模块与深井接地的组合优化，针对不同土壤电阻率提供自适应方案，确保在各种地质条件下都能达到设计目标。',
        descriptionEn: 'Through combined optimization of resistance reduction modules and deep well grounding, provide adaptive solutions for different soil resistivities, ensuring design targets are met under various geological conditions.',
      },
      {
        title: '精确设计余裕',
        titleEn: 'Precise Design Redundancy',
        description: '我们追求的不是材料的堆砌，而是通过精确的设计余裕（Design Redundancy），在保证安全可靠的前提下，优化材料用量。',
        descriptionEn: 'We pursue not material stacking, but through precise Design Redundancy, optimize material usage while ensuring safety and reliability.',
      },
      {
        title: '降低总体拥有成本',
        titleEn: 'Reducing Total Cost of Ownership',
        description: '在降低总体拥有成本（TCO）的同时，满足 500kV 以上电网的严苛验收标准，为 EPC 总包方创造真正的价值。',
        descriptionEn: 'While reducing Total Cost of Ownership (TCO), meeting stringent acceptance standards for 500kV+ power grids, creating real value for EPC contractors.',
      },
    ],
  },
  standards: {
    title: '核心标准',
    titleEn: 'The Standards',
    subtitle: '我们遵循的权威标准',
    subtitleEn: 'Authoritative standards we follow',
    items: [
      {
        code: 'IEC 62305',
        name: '雷电防护系统',
        nameEn: 'Lightning Protection System',
        description: '国际雷电防护系统设计标准',
        descriptionEn: 'International standard for lightning protection system design',
      },
      {
        code: 'DL/T 475',
        name: '接地装置特性参数',
        nameEn: 'Grounding Device Parameters',
        description: '接地装置特性参数测量导则',
        descriptionEn: 'Guidelines for measuring grounding device characteristic parameters',
      },
      {
        code: 'GB/T 50065',
        name: '交流电气装置接地',
        nameEn: 'AC Electrical Installation Grounding',
        description: '交流电气装置接地设计规范',
        descriptionEn: 'Code for grounding design of AC electrical installations',
      },
    ],
  },
};

export default async function PowerEnergySolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-3.jpg"
            alt="Power & Energy Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-900/80 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center text-green-electric-400 hover:text-green-electric-300 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isZh ? '返回首页' : 'Back to Home'}
            </Link>

            <div className="flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30 w-fit">
              <svg className="w-5 h-5 text-yellow-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                {isZh ? solutionContent.hero.badge : solutionContent.hero.badgeEn}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {isZh ? solutionContent.hero.title : solutionContent.hero.titleEn}
            </h1>
            
            <p className="text-2xl text-yellow-400 mb-6 font-medium italic">
              &ldquo;{isZh ? solutionContent.hero.subtitle : solutionContent.hero.subtitleEn}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {isZh ? solutionContent.hero.description : solutionContent.hero.descriptionEn}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/power-energy"
                className="px-6 py-3 bg-yellow-500 text-industrial-900 rounded-lg hover:bg-yellow-400 font-semibold transition-colors"
              >
                {isZh ? '查看项目案例' : 'View Projects'}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 font-semibold transition-colors"
              >
                {isZh ? '获取报价' : 'Get Quote'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? solutionContent.challenge.title : solutionContent.challenge.titleEn}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? solutionContent.challenge.subtitle : solutionContent.challenge.subtitleEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionContent.challenge.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-red-500/20 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isZh ? item.title : item.titleEn}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {isZh ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-electric-500/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? solutionContent.insight.title : solutionContent.insight.titleEn}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? solutionContent.insight.subtitle : solutionContent.insight.subtitleEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionContent.insight.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-green-electric-500/20 p-8 rounded-2xl">
                <div className="w-14 h-14 bg-green-electric-500/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v3m-3-3h6m-6-3h6m-6 0V7m3 10V7m0 0V4m0 3h.01M9 7V4m0 3h6" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.657 0 3 .895 3 2s-1.343 2-3 2m0-8c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V4z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {isZh ? item.title : item.titleEn}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {isZh ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? solutionContent.standards.title : solutionContent.standards.titleEn}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? solutionContent.standards.subtitle : solutionContent.standards.subtitleEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionContent.standards.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-blue-500/20 p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">{item.code}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isZh ? item.name : item.nameEn}
                </h3>
                <p className="text-gray-400 text-sm">
                  {isZh ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            {isZh ? '有电力或新能源项目需求？' : 'Have a Power & Energy Project?'}
          </h2>
          <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的接地系统解决方案和有竞争力的报价'
              : 'Contact us for professional grounding system solutions and competitive pricing'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-industrial-900 text-white rounded-lg hover:bg-industrial-800 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/projects/power-energy"
              className="px-8 py-4 border-2 border-industrial-900 text-industrial-900 rounded-lg hover:bg-industrial-900 hover:text-white font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '查看项目案例' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
