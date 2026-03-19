import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Petrochemical Solutions - Green Electric Lightning Protection",
  description: "Explosion-proof lightning protection solutions for petrochemical facilities, oil depots, and refineries in extreme heat and high corrosion environments.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const solutionContent = {
  hero: {
    badge: '石油与化工',
    badgeEn: 'Petrochemical',
    title: '聚焦「极端环境与安全合规」',
    titleEn: 'Extreme Environment & Safety Compliance',
    subtitle: '在易燃易爆环境中，每一处连接点都是安全防线。',
    subtitleEn: 'In flammable and explosive environments, every connection point is a safety line.',
    description: '针对石化储罐区的高腐蚀与高风险特性，我们深谙阿美（Aramco）与 IEC 双重标准。不仅提供高导电率的铜包钢接地体，更强调放热焊接（Exothermic Welding）在极端环境下的分子级连接可靠性，确保系统在 30 年生命周期内免维护，彻底消除静电与感应雷引起的火花风险。',
    descriptionEn: 'For the high corrosion and high-risk characteristics of petrochemical storage tank areas, we are well-versed in both Aramco and IEC dual standards. We not only provide high-conductivity copper-clad steel grounding bodies, but also emphasize the molecular-level connection reliability of Exothermic Welding in extreme environments, ensuring maintenance-free operation throughout the 30-year lifecycle, completely eliminating spark risks from static electricity and induced lightning.',
  },
  challenge: {
    title: '挑战',
    titleEn: 'The Challenge',
    subtitle: '石化行业不需要一般的防雷，他们需要的是「绝对的防爆」和「抗腐蚀」。',
    subtitleEn: 'The petrochemical industry doesn\'t need ordinary lightning protection—they need absolute explosion-proof and corrosion resistance.',
    items: [
      {
        title: '极端环境适应',
        titleEn: 'Extreme Environment Adaptation',
        description: '波斯湾沿岸高盐雾腐蚀环境，沙漠地区极高土壤电阻率，传统接地材料寿命大幅缩短。',
        descriptionEn: 'High salt-spray corrosion environment along the Persian Gulf, extremely high soil resistivity in desert areas, traditional grounding materials have significantly shortened lifespan.',
      },
      {
        title: '防爆安全合规',
        titleEn: 'Explosion-Proof Safety Compliance',
        description: '储罐区属于极高风险等级，对防爆、静电消除及接地系统的可靠性有近乎苛刻的验收标准。',
        descriptionEn: 'Storage tank areas are classified as extremely high-risk zones, with near-stringent acceptance standards for explosion-proof, static elimination, and grounding system reliability.',
      },
      {
        title: '国际标准对接',
        titleEn: 'International Standards Alignment',
        description: '需同时满足沙特阿美（Aramco）企业标准与 IEC 国际标准的双重认证要求。',
        descriptionEn: 'Must simultaneously meet the dual certification requirements of Saudi Aramco corporate standards and IEC international standards.',
      },
    ],
  },
  insight: {
    title: '见解',
    titleEn: 'The Insight',
    subtitle: '我们对该问题的技术看法',
    subtitleEn: 'Our technical perspective on this problem',
    items: [
      {
        title: '分子级连接可靠性',
        titleEn: 'Molecular-Level Connection Reliability',
        description: '放热焊接（Exothermic Welding）实现导体间的分子级结合，永不松动腐蚀，确保终身导电性。在极端温度变化和振动环境下，传统机械连接可能失效，而放热焊接始终保持稳定。',
        descriptionEn: 'Exothermic Welding achieves molecular-level bonding between conductors, never loosening or corroding, ensuring lifetime conductivity. Under extreme temperature changes and vibration environments, traditional mechanical connections may fail, while exothermic welding remains stable.',
      },
      {
        title: '高厚度铜包钢材料',
        titleEn: 'High-Thickness Copper-Clad Steel',
        description: '采用高导电率的铜包钢接地体，铜层厚度达到行业领先水平，抗腐蚀性能卓越，确保 30 年以上使用寿命。特别适用于波斯湾等高盐雾腐蚀环境。',
        descriptionEn: 'Using high-conductivity copper-clad steel grounding bodies with industry-leading copper layer thickness, excellent corrosion resistance, ensuring 30+ years service life. Particularly suitable for high salt-spray corrosion environments like the Persian Gulf.',
      },
      {
        title: '全生命周期免维护',
        titleEn: 'Lifecycle Maintenance-Free',
        description: '系统设计确保在 30 年生命周期内免维护，彻底消除静电与感应雷引起的火花风险。降低 EPC 总包方的后期运维成本和风险。',
        descriptionEn: 'System design ensures maintenance-free operation throughout the 30-year lifecycle, completely eliminating spark risks from static electricity and induced lightning. Reduces post-operation maintenance costs and risks for EPC contractors.',
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
        code: 'IEC 62305-3/4',
        name: '雷电防护标准',
        nameEn: 'Lightning Protection Standard',
        description: '国际电工委员会雷电防护系统设计与安装标准',
        descriptionEn: 'IEC standard for lightning protection system design and installation',
      },
      {
        code: 'Aramco SAES-P-111',
        name: '沙特阿美标准',
        nameEn: 'Saudi Aramco Standard',
        description: '沙特阿美企业防雷与接地技术规范',
        descriptionEn: 'Saudi Aramco corporate lightning protection and grounding technical specifications',
      },
      {
        code: 'ATEX/IECEx',
        name: '防爆认证',
        nameEn: 'Explosion-Proof Certification',
        description: '国际防爆设备认证体系',
        descriptionEn: 'International explosion-proof equipment certification system',
      },
    ],
  },
};

export default async function PetrochemicalSolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Petrochemical Solutions"
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

            <div className="flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30 w-fit">
              <svg className="w-5 h-5 text-orange-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                {isZh ? solutionContent.hero.badge : solutionContent.hero.badgeEn}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {isZh ? solutionContent.hero.title : solutionContent.hero.titleEn}
            </h1>
            
            <p className="text-2xl text-orange-400 mb-6 font-medium italic">
              &ldquo;{isZh ? solutionContent.hero.subtitle : solutionContent.hero.subtitleEn}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {isZh ? solutionContent.hero.description : solutionContent.hero.descriptionEn}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/petrochemical"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold transition-colors"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/projects/petrochemical"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '查看项目案例' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
