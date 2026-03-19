import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Infrastructure Solutions - Green Electric Lightning Protection",
  description: "Aesthetic integration and intelligent monitoring lightning protection solutions for stadiums, airports, and public buildings.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const solutionContent = {
  hero: {
    badge: '基礎設施與公建',
    badgeEn: 'Infrastructure',
    title: '聚焦「美學融合與智能監測」',
    titleEn: 'Aesthetic Integration & Intelligent Monitoring',
    subtitle: '讓防雷系統與現代建築美學無縫共生。',
    subtitleEn: 'Seamlessly integrating lightning protection with modern architectural aesthetics.',
    description: '標誌性建築的防雷設計不應以犧牲外觀為代價。我們提倡建築結構一體化接閃體系，將避雷終端與幕牆骨架融合。同時，通過部署智慧雷擊監測感應器，將傳統的被動防禦升級為主動預警，為物業業主提供可視化的設備健康數據，確保公共安全隱於無形。',
    descriptionEn: 'Lightning protection design for iconic buildings should not come at the expense of appearance. We advocate building structure integrated air termination systems, fusing lightning terminals with curtain wall frameworks. Meanwhile, through deploying intelligent lightning monitoring sensors, we upgrade traditional passive defense to active early warning, providing property owners with visualized equipment health data, ensuring public safety remains invisible.',
  },
  challenge: {
    title: '挑戰',
    titleEn: 'The Challenge',
    subtitle: '體育場、航站樓等建築對外觀和維護便捷性有極高要求。',
    subtitleEn: 'Stadiums, terminals, and similar buildings have extremely high requirements for appearance and maintenance convenience.',
    items: [
      {
        title: '建築美學要求',
        titleEn: 'Architectural Aesthetics Requirements',
        description: '標誌性公共建築對外觀有極高要求，傳統外露式防雷裝置會破壞建築整體美感，難以被建築師和業主接受。',
        descriptionEn: 'Iconic public buildings have extremely high requirements for appearance. Traditional exposed lightning protection devices disrupt the overall architectural aesthetics and are difficult for architects and owners to accept.',
      },
      {
        title: '維護便捷性',
        titleEn: 'Maintenance Convenience',
        description: '大型公共建築結構複雜，傳統防雷系統維護困難，需要頻繁的人工檢測，運維成本高昂。',
        descriptionEn: 'Large public buildings have complex structures. Traditional lightning protection systems are difficult to maintain, requiring frequent manual inspections with high operation and maintenance costs.',
      },
      {
        title: '公共安全責任',
        titleEn: 'Public Safety Responsibility',
        description: '體育場、航站樓等人員密集場所，一旦發生雷擊事故，後果不堪設想，對防雷系統的可靠性要求極高。',
        descriptionEn: 'For densely populated venues like stadiums and terminals, the consequences of a lightning strike accident are unimaginable, placing extremely high reliability requirements on lightning protection systems.',
      },
    ],
  },
  insight: {
    title: '見解',
    titleEn: 'The Insight',
    subtitle: '將傳統的被動防禦升級為主動預警',
    subtitleEn: 'Upgrading traditional passive defense to active early warning',
    items: [
      {
        title: '建築結構一體化',
        titleEn: 'Building Structure Integration',
        description: '我們提倡建築結構一體化接閃體系，將避雷終端與幕牆骨架融合，實現防雷功能與建築美學的完美統一。',
        descriptionEn: 'We advocate building structure integrated air termination systems, fusing lightning terminals with curtain wall frameworks, achieving perfect unity of lightning protection function and architectural aesthetics.',
      },
      {
        title: '智慧雷擊監測',
        titleEn: 'Intelligent Lightning Monitoring',
        description: '通過部署智慧雷擊監測感應器，實時監測雷擊事件和系統健康狀態，將傳統的被動防禦升級為主動預警。',
        descriptionEn: 'Through deploying intelligent lightning monitoring sensors, real-time monitoring of lightning events and system health status, upgrading traditional passive defense to active early warning.',
      },
      {
        title: '可視化運維數據',
        titleEn: 'Visualized Operation Data',
        description: '為物業業主提供可視化的設備健康數據，確保公共安全隱於無形，降低運維成本，提高管理效率。',
        descriptionEn: 'Providing property owners with visualized equipment health data, ensuring public safety remains invisible, reducing operation costs, and improving management efficiency.',
      },
    ],
  },
  standards: {
    title: '核心標準',
    titleEn: 'The Standards',
    subtitle: '我們遵循的權威標準',
    subtitleEn: 'Authoritative standards we follow',
    items: [
      {
        code: 'IEC 62305-3',
        name: '建築物防雷',
        nameEn: 'Building Lightning Protection',
        description: '建築物雷電防護系統設計與安裝',
        descriptionEn: 'Lightning protection system design and installation for buildings',
      },
      {
        code: 'GB 50057',
        name: '建築物防雷設計規範',
        nameEn: 'Building Lightning Protection Code',
        description: '中國建築物防雷設計技術規範',
        descriptionEn: 'Chinese technical code for building lightning protection design',
      },
      {
        code: 'NFPA 780',
        name: '美國防雷標準',
        nameEn: 'US Lightning Protection Standard',
        description: '美國國家消防協會防雷安裝標準',
        descriptionEn: 'NFPA standard for lightning protection installation',
      },
      {
        code: 'UL 96A',
        name: '防雷系統認證',
        nameEn: 'Lightning Protection Certification',
        description: '美國保險商實驗室防雷系統安裝認證',
        descriptionEn: 'UL certification for lightning protection system installation',
      },
    ],
  },
};

export default async function InfrastructureSolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Infrastructure Solutions"
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
              {isZh ? '返回首頁' : 'Back to Home'}
            </Link>

            <div className="flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30 w-fit">
              <svg className="w-5 h-5 text-purple-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                {isZh ? solutionContent.hero.badge : solutionContent.hero.badgeEn}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {isZh ? solutionContent.hero.title : solutionContent.hero.titleEn}
            </h1>
            
            <p className="text-2xl text-purple-400 mb-6 font-medium italic">
              &ldquo;{isZh ? solutionContent.hero.subtitle : solutionContent.hero.subtitleEn}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {isZh ? solutionContent.hero.description : solutionContent.hero.descriptionEn}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/infrastructure"
                className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold transition-colors"
              >
                {isZh ? '查看項目案例' : 'View Projects'}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 font-semibold transition-colors"
              >
                {isZh ? '獲取報價' : 'Get Quote'}
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    )}
                    {index === 1 && (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '有基礎設施項目需求？' : 'Have an Infrastructure Project?'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '聯繫我們獲取專業的美學融合防雷解決方案'
              : 'Contact us for professional aesthetic-integrated lightning protection solutions'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交項目諮詢' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/projects/infrastructure"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '查看項目案例' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
