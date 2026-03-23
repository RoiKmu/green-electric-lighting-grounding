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
    badge: '基础设施与公建',
    badgeEn: 'Infrastructure',
    title: '聚焦「美学融合与智能监测」',
    titleEn: 'Aesthetic Integration & Intelligent Monitoring',
    subtitle: '让防雷系统与现代建筑美学无缝共生。',
    subtitleEn: 'Seamlessly integrating lightning protection with modern architectural aesthetics.',
    description: '标志性建筑的防雷设计不应以牺牲外观为代价。我们提倡建筑结构一体化接闪体系，将避雷终端与幕墙骨架融合。同时，通过部署智慧雷击监测感应器，将传统的被动防御升级为主动预警，为物业业主提供可视化的设备健康数据，确保公共安全隐于无形。',
    descriptionEn: 'Lightning protection design for iconic buildings should not come at the expense of appearance. We advocate building structure integrated air termination systems, fusing lightning terminals with curtain wall frameworks. Meanwhile, through deploying intelligent lightning monitoring sensors, we upgrade traditional passive defense to active early warning, providing property owners with visualized equipment health data, ensuring public safety remains invisible.',
  },
  challenges: {
    title: '挑战与行业痛点',
    titleEn: 'Challenges & Pain Points',
    description: '体育场、航站楼等建筑对外观和维护便捷性有极高要求。地标性建筑（场馆、枢纽）高度高且结构复杂，对侧击雷防护、接闪器隐蔽性以及建筑整体电磁兼容性要求极高。',
    descriptionEn: 'Stadiums, terminals, and similar buildings have extremely high requirements for appearance and maintenance convenience. Landmark buildings are tall with complex structures, requiring extremely high standards for side-strike protection, concealed air terminals, and overall EMC.',
    items: [
      {
        title: '建筑美学要求',
        titleEn: 'Architectural Aesthetics Requirements',
        description: '标志性公共建筑对外观有极高要求，传统外露式防雷装置会破坏建筑整体美感，难以被建筑师和业主接受。',
        descriptionEn: 'Iconic public buildings have extremely high requirements for appearance. Traditional exposed lightning protection devices disrupt the overall architectural aesthetics.',
      },
      {
        title: '维护便捷性',
        titleEn: 'Maintenance Convenience',
        description: '大型公共建筑结构复杂，传统防雷系统维护困难，需要频繁的人工检测，运维成本高昂。',
        descriptionEn: 'Large public buildings have complex structures. Traditional lightning protection systems are difficult to maintain with high operation costs.',
      },
      {
        title: '公共安全责任',
        titleEn: 'Public Safety Responsibility',
        description: '体育场、航站楼等人员密集场所，一旦发生雷击事故，后果不堪设想，对防雷系统的可靠性要求极高。',
        descriptionEn: 'For densely populated venues like stadiums and terminals, the consequences of a lightning strike accident are unimaginable.',
      },
      {
        title: '建筑高度高结构复杂',
        titleEn: 'Tall & Complex Structures',
        description: '地标性建筑高度高且结构复杂，防雷设计难度大。',
        descriptionEn: 'Landmark buildings are tall with complex structures, making lightning protection design challenging.',
      },
      {
        title: '侧击雷防护要求',
        titleEn: 'Side-Strike Protection Requirements',
        description: '超高层建筑对侧击雷防护有极高要求。',
        descriptionEn: 'Super-tall buildings have extremely high requirements for side-strike lightning protection.',
      },
      {
        title: '接闪器隐蔽性',
        titleEn: 'Concealed Air Terminals',
        description: '建筑美学要求接闪器隐蔽，不影响建筑外观。',
        descriptionEn: 'Architectural aesthetics require concealed air terminals without affecting building appearance.',
      },
    ],
  },
  solutions: {
    title: '见解与专项方案',
    titleEn: 'Insights & Solutions',
    description: '将传统的被动防御升级为主动预警，为基础设施提供全方位的防雷保护。',
    descriptionEn: 'Upgrading traditional passive defense to active early warning, providing comprehensive lightning protection for infrastructure.',
    items: [
      {
        title: '建筑结构一体化',
        titleEn: 'Building Structure Integration',
        description: '我们提倡建筑结构一体化接闪体系，将避雷终端与幕墙骨架融合，实现防雷功能与建筑美学的完美统一。',
        descriptionEn: 'We advocate building structure integrated air termination systems, fusing lightning terminals with curtain wall frameworks.',
      },
      {
        title: '智慧雷击监测',
        titleEn: 'Intelligent Lightning Monitoring',
        description: '通过部署智慧雷击监测感应器，实时监测雷击事件和系统健康状态，将传统的被动防御升级为主动预警。',
        descriptionEn: 'Through deploying intelligent lightning monitoring sensors, real-time monitoring of lightning events and system health status.',
      },
      {
        title: '可视化运维数据',
        titleEn: 'Visualized Operation Data',
        description: '为物业业主提供可视化的设备健康数据，确保公共安全隐于无形，降低运维成本，提高管理效率。',
        descriptionEn: 'Providing property owners with visualized equipment health data, ensuring public safety remains invisible.',
      },
      {
        title: '3D 综合防雷系统',
        titleEn: '3D Integrated Lightning Protection',
        description: '三维空间防雷保护，覆盖建筑全方位。',
        descriptionEn: 'Three-dimensional lightning protection, covering all aspects of the building.',
      },
      {
        title: '与建筑结构融合的接闪体系',
        titleEn: 'Structure-Integrated Air Terminal System',
        description: '接闪器与建筑结构完美融合，不影响建筑美学。',
        descriptionEn: 'Air terminals perfectly integrated with building structure, preserving architectural aesthetics.',
      },
      {
        title: '智能雷击监测平台',
        titleEn: 'Smart Lightning Monitoring Platform',
        description: '实时监测雷击状态，智能预警与运维。',
        descriptionEn: 'Real-time lightning status monitoring, intelligent warning and maintenance.',
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
        code: 'IEC 62305-3',
        name: '建筑物防雷',
        nameEn: 'Building Lightning Protection',
        description: '建筑物雷电防护系统设计与安装',
        descriptionEn: 'Lightning protection system design and installation for buildings',
      },
      {
        code: 'GB 50057',
        name: '建筑物防雷设计规范',
        nameEn: 'Building Lightning Protection Code',
        description: '中国建筑物防雷设计技术规范',
        descriptionEn: 'Chinese technical code for building lightning protection design',
      },
      {
        code: 'NFPA 780',
        name: '美国防雷标准',
        nameEn: 'US Lightning Protection Standard',
        description: '美国国家消防协会防雷安装标准',
        descriptionEn: 'NFPA standard for lightning protection installation',
      },
      {
        code: 'UL 96A',
        name: '防雷系统认证',
        nameEn: 'Lightning Protection Certification',
        description: '美国保险商实验室防雷系统安装认证',
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
              {isZh ? '返回首页' : 'Back to Home'}
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
              {isZh ? solutionContent.challenges.title : solutionContent.challenges.titleEn}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? solutionContent.challenges.description : solutionContent.challenges.descriptionEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionContent.challenges.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-red-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    )}
                    {index === 1 && (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 5 && (
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

      <section className="py-20 bg-industrial-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-electric-500/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? solutionContent.solutions.title : solutionContent.solutions.titleEn}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isZh ? solutionContent.solutions.description : solutionContent.solutions.descriptionEn}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionContent.solutions.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-green-electric-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-electric-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                    {index === 5 && (
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
            {isZh ? '有基础设施项目需求？' : 'Have an Infrastructure Project?'}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们获取专业的美学融合防雷解决方案'
              : 'Contact us for professional aesthetic-integrated lightning protection solutions'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/projects/infrastructure"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '查看项目案例' : 'View Projects'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
