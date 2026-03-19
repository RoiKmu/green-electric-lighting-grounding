import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Transportation Solutions - Green Electric Lightning Protection",
  description: "Electromagnetic compatibility and signal integrity lightning protection solutions for railway and transportation infrastructure.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const solutionContent = {
  hero: {
    badge: '轨道交通',
    badgeEn: 'Transportation',
    title: '聚焦「电磁兼容与信号完整性」',
    titleEn: 'Electromagnetic Compatibility & Signal Integrity',
    subtitle: '从供电到信号：构建轨道交通的电磁屏障。',
    subtitleEn: 'From Power to Signal: Building an Electromagnetic Barrier for Rail Transit.',
    description: '现代高速铁路的复杂性在于强弱电系统的高密度交织。我们的见解在于综合贯通地线（Common Grounding）的精密设计。通过精准的等电位分区与电磁脉冲（LEMP）防护，我们确保在雷击发生时，信号系统的残压被控制在微秒级的容差范围内，保障列车运行指令的零误码、零中断。',
    descriptionEn: 'The complexity of modern high-speed railways lies in the high-density interweaving of strong and weak current systems. Our insight lies in the precision design of Common Grounding. Through precise equipotential zoning and LEMP protection, we ensure that during lightning strikes, the residual voltage of the signal system is controlled within microsecond tolerance ranges, guaranteeing zero bit errors and zero interruptions in train operation commands.',
  },
  challenge: {
    title: '挑战',
    titleEn: 'The Challenge',
    subtitle: '铁路行业最怕的是雷电感应导致信号系统（Signaling）出错，这关系到运维安全。',
    subtitleEn: 'The railway industry\'s greatest fear is lightning-induced errors in signaling systems, which directly impacts operational safety.',
    items: [
      {
        title: '信号系统脆弱性',
        titleEn: 'Signaling System Vulnerability',
        description: '现代铁路信号系统采用大量微电子设备，对雷电电磁脉冲（LEMP）极为敏感，一次感应过电压可能导致系统瘫痪。',
        descriptionEn: 'Modern railway signaling systems use numerous microelectronic devices that are extremely sensitive to Lightning Electromagnetic Pulses (LEMP). A single induced overvoltage can cause system paralysis.',
      },
      {
        title: '强弱电交织',
        titleEn: 'Strong-Weak Current Interweaving',
        description: '牵引供电系统与信号通信系统在同一走廊内高密度共存，电磁干扰问题复杂。',
        descriptionEn: 'Traction power supply systems and signal communication systems coexist in high density within the same corridor, creating complex electromagnetic interference issues.',
      },
      {
        title: '零中断要求',
        titleEn: 'Zero Interruption Requirement',
        description: '高速铁路对运行可靠性要求极高，任何信号中断都可能造成严重的运营事故和经济损失。',
        descriptionEn: 'High-speed railways have extremely high requirements for operational reliability. Any signal interruption can cause serious operational accidents and economic losses.',
      },
    ],
  },
  insight: {
    title: '见解',
    titleEn: 'The Insight',
    subtitle: '从「保护建筑」上升到「保护弱电系统和数据传输」',
    subtitleEn: 'Elevating from "protecting buildings" to "protecting weak current systems and data transmission"',
    items: [
      {
        title: '综合贯通地线设计',
        titleEn: 'Common Grounding Design',
        description: '通过精密的综合贯通地线（Common Grounding）设计，实现牵引供电系统与信号系统的协调共地，有效抑制地电位差引起的干扰。',
        descriptionEn: 'Through precision Common Grounding design, achieve coordinated shared grounding between traction power supply systems and signaling systems, effectively suppressing interference caused by ground potential differences.',
      },
      {
        title: '等电位分区防护',
        titleEn: 'Equipotential Zoning Protection',
        description: '采用精准的等电位分区技术，将雷击电流限制在特定区域内，防止跨区域电位差对敏感设备造成损害。',
        descriptionEn: 'Using precise equipotential zoning technology, limit lightning current to specific areas, preventing cross-regional potential differences from damaging sensitive equipment.',
      },
      {
        title: 'LEMP 微秒级防护',
        titleEn: 'LEMP Microsecond Protection',
        description: '电磁脉冲（LEMP）防护确保在雷击发生时，信号系统的残压被控制在微秒级的容差范围内，保障列车运行指令的零误码、零中断。',
        descriptionEn: 'LEMP protection ensures that during lightning strikes, the residual voltage of the signal system is controlled within microsecond tolerance ranges, guaranteeing zero bit errors and zero interruptions in train operation commands.',
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
        code: 'IEC 62305-4',
        name: 'LEMP 防护标准',
        nameEn: 'LEMP Protection Standard',
        description: '雷电电磁脉冲防护设计指南',
        descriptionEn: 'Guide for Lightning Electromagnetic Pulse protection design',
      },
      {
        code: 'EN 50121',
        name: '铁路电磁兼容',
        nameEn: 'Railway EMC',
        description: '铁路应用电磁兼容性标准',
        descriptionEn: 'Railway applications electromagnetic compatibility standard',
      },
      {
        code: 'TB/T 3074',
        name: '铁路防雷技术',
        nameEn: 'Railway Lightning Protection',
        description: '铁路信号设备防雷技术条件',
        descriptionEn: 'Technical conditions for lightning protection of railway signal equipment',
      },
    ],
  },
};

export default async function TransportationSolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Transportation Solutions"
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

            <div className="flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 w-fit">
              <svg className="w-5 h-5 text-blue-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                {isZh ? solutionContent.hero.badge : solutionContent.hero.badgeEn}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {isZh ? solutionContent.hero.title : solutionContent.hero.titleEn}
            </h1>
            
            <p className="text-2xl text-blue-400 mb-6 font-medium italic">
              &ldquo;{isZh ? solutionContent.hero.subtitle : solutionContent.hero.subtitleEn}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {isZh ? solutionContent.hero.description : solutionContent.hero.descriptionEn}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/transportation"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有轨道交通项目需求？' : 'Have a Transportation Project?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的电磁兼容与信号防护解决方案'
              : 'Contact us for professional EMC and signal protection solutions'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/projects/transportation"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '查看项目案例' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
