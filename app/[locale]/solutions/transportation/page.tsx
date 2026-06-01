import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Transportation Solutions - Green Electric Lightning Protection',
    zh: '交通运输解决方案 - 格林电工防雷接地',
    ar: 'حلول النقل - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Electromagnetic compatibility and signal integrity lightning protection solutions for railway and transportation infrastructure.',
    zh: '为铁路和交通基础设施提供电磁兼容和信号完整性防雷保护解决方案。',
    ar: 'حلول الحماية من الصواعق للتوافق الكهرومغناطيسي وسلامة الإشارة للسكك الحديدية والبنية التحتية للنقل.'
  };
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const solutionContent = {
  hero: {
    badge: '轨道交通',
    badgeEn: 'Transportation',
    badgeAr: 'النقل بالسكك الحديدية',
    title: '聚焦「电磁兼容与信号完整性」',
    titleEn: 'Electromagnetic Compatibility & Signal Integrity',
    titleAr: 'التوافق الكهرومغناطيسي وسلامة الإشارة',
    subtitle: '从供电到信号：构建轨道交通的电磁屏障。',
    subtitleEn: 'From Power to Signal: Building an Electromagnetic Barrier for Rail Transit.',
    subtitleAr: 'من الطاقة إلى الإشارة: بناء حاجز كهرومغناطيسي للنقل بالسكك الحديدية.',
    description: '现代高速铁路的复杂性在于强弱电系统的高密度交织。我们的见解在于综合贯通地线（Common Grounding）的精密设计。通过精准的等电位分区与电磁脉冲（LEMP）防护，我们确保在雷击发生时，信号系统的残压被控制在微秒级的容差范围内，保障列车运行指令的零误码、零中断。',
    descriptionEn: 'The complexity of modern high-speed railways lies in the high-density interweaving of strong and weak current systems. Our insight lies in the precision design of Common Grounding. Through precise equipotential zoning and LEMP protection, we ensure that during lightning strikes, the residual voltage of the signal system is controlled within microsecond tolerance ranges, guaranteeing zero bit errors and zero interruptions in train operation commands.',
    descriptionAr: 'تكمن تعقيدات السكك الحديدية عالية السرعة الحديثة في التداخل عالي الكثافة بين أنظمة التيار القوي والضعيف. رؤيتنا تكمن في التصميم الدقيق للتأريض المشترك.',
  },
  challenges: {
    title: '挑战与行业痛点',
    titleEn: 'Challenges & Pain Points',
    titleAr: 'التحديات ونقاط الألم',
    description: '铁路行业最怕的是雷电感应导致信号系统（Signaling）出错，这关系到运维安全。轨道交通沿线地质多变，强电（牵引供电）与弱电（信号通讯）共用走廊，需严格防止雷电感应导致的信号误码及系统瘫痪。',
    descriptionEn: 'The railway industry\'s greatest fear is lightning-induced errors in signaling systems, which directly impacts operational safety. Variable geology along rail routes, with shared corridors for HV and LV systems, requires strict prevention of signal errors and system failures.',
    descriptionAr: 'أكبر مخاوف صناعة السكك الحديدية هو الأخطاء الناتجة عن الصواعق في أنظمة الإشارات.',
    items: [
      {
        title: '信号系统脆弱性',
        titleEn: 'Signaling System Vulnerability',
        titleAr: 'هشاشة نظام الإشارات',
        description: '现代铁路信号系统采用大量微电子设备，对雷电电磁脉冲（LEMP）极为敏感，一次感应过电压可能导致系统瘫痪。',
        descriptionEn: 'Modern railway signaling systems use numerous microelectronic devices that are extremely sensitive to LEMP. A single induced overvoltage can cause system paralysis.',
        descriptionAr: 'أنظمة إشارات السكك الحديدية الحديثة تستخدم العديد من الأجهزة الدقيقة الإلكترونية.',
      },
      {
        title: '强弱电交织',
        titleEn: 'Strong-Weak Current Interweaving',
        titleAr: 'تداخل التيار القوي والضعيف',
        description: '牵引供电系统与信号通信系统在同一走廊内高密度共存，电磁干扰问题复杂。',
        descriptionEn: 'Traction power supply and signal communication systems coexist in high density within the same corridor, creating complex electromagnetic interference issues.',
        descriptionAr: 'أنظمة إمداد الطاقة والاتصالات تتعايش بكثافة عالية.',
      },
      {
        title: '零中断要求',
        titleEn: 'Zero Interruption Requirement',
        titleAr: 'متطلبات عدم الانقطاع',
        description: '高速铁路对运行可靠性要求极高，任何信号中断都可能造成严重的运营事故和经济损失。',
        descriptionEn: 'High-speed railways have extremely high requirements for operational reliability. Any signal interruption can cause serious operational accidents and economic losses.',
        descriptionAr: 'السكك الحديدية عالية السرعة لها متطلبات عالية جدًا للموثوقية التشغيلية.',
      },
      {
        title: '沿线地质多变',
        titleEn: 'Variable Geology Along Routes',
        titleAr: 'جيولوجيا متغيرة على طول المسارات',
        description: '轨道交通沿线地质条件复杂多变，接地系统设计难度大。',
        descriptionEn: 'Complex and variable geological conditions along rail routes, making grounding system design challenging.',
        descriptionAr: 'ظروف جيولوجية معقدة ومتغيرة على طول مسارات السكك الحديدية.',
      },
      {
        title: '强弱电共用走廊',
        titleEn: 'Shared HV/LV Corridors',
        titleAr: 'ممرات مشتركة عالية/منخفضة الجهد',
        description: '牵引供电与信号通讯共用走廊，雷电感应风险高。',
        descriptionEn: 'Traction power and signaling/communication share corridors, creating high lightning induction risk.',
        descriptionAr: 'إمداد الطاقة والإشارات/الاتصالات تتشارك الممرات.',
      },
      {
        title: '信号误码风险',
        titleEn: 'Signal Error Risk',
        titleAr: 'خطر أخطاء الإشارة',
        description: '雷电感应可能导致信号误码及系统瘫痪。',
        descriptionEn: 'Lightning induction can cause signal errors and system failures.',
        descriptionAr: 'الحث الكهرومغناطيسي يمكن أن يسبب أخطاء إشارة وفشل النظام.',
      },
    ],
  },
  solutions: {
    title: '见解与专项方案',
    titleEn: 'Insights & Solutions',
    titleAr: 'الرؤى والحلول',
    description: '从「保护建筑」上升到「保护弱电系统和数据传输」，为轨道交通提供全方位的防雷解决方案。',
    descriptionEn: 'Elevating from "protecting buildings" to "protecting weak current systems and data transmission", providing comprehensive lightning protection solutions for rail transit.',
    descriptionAr: 'الارتقاء من "حماية المباني" إلى "حماية أنظمة التيار الضعيف ونقل البيانات".',
    items: [
      {
        title: '综合贯通地线设计',
        titleEn: 'Common Grounding Design',
        titleAr: 'تصميم التأريض المشترك',
        description: '通过精密的综合贯通地线（Common Grounding）设计，实现牵引供电系统与信号系统的协调共地，有效抑制地电位差引起的干扰。',
        descriptionEn: 'Through precision Common Grounding design, achieve coordinated shared grounding between traction power supply and signaling systems, effectively suppressing interference caused by ground potential differences.',
        descriptionAr: 'من خلال التصميم الدقيق للتأريض المشترك.',
      },
      {
        title: '等电位分区防护',
        titleEn: 'Equipotential Zoning Protection',
        titleAr: 'حماية التقسيم متساوي الجهد',
        description: '采用精准的等电位分区技术，将雷击电流限制在特定区域内，防止跨区域电位差对敏感设备造成损害。',
        descriptionEn: 'Using precise equipotential zoning technology, limit lightning current to specific areas, preventing cross-regional potential differences from damaging sensitive equipment.',
        descriptionAr: 'استخدام تقنية التقسيم متساوي الجهد الدقيقة.',
      },
      {
        title: 'LEMP 微秒级防护',
        titleEn: 'LEMP Microsecond Protection',
        titleAr: 'حماية LEMP بالميكروثانية',
        description: '电磁脉冲（LEMP）防护确保在雷击发生时，信号系统的残压被控制在微秒级的容差范围内，保障列车运行指令的零误码、零中断。',
        descriptionEn: 'LEMP protection ensures that during lightning strikes, the residual voltage of the signal system is controlled within microsecond tolerance ranges, guaranteeing zero bit errors and zero interruptions.',
        descriptionAr: 'حماية LEMP تضمن التحكم في الجهد المتبقي.',
      },
      {
        title: '综合贯通地线系统',
        titleEn: 'Integrated Through Grounding System',
        titleAr: 'نظام تأريض متكامل',
        description: '全线贯通的接地网络，确保电气连续性。',
        descriptionEn: 'Through grounding network for the entire route, ensuring electrical continuity.',
        descriptionAr: 'شبكة تأريض متكاملة للمسار بالكامل.',
      },
      {
        title: '强弱电物理隔离接地',
        titleEn: 'HV/LV Physical Isolation Grounding',
        titleAr: 'تأريض عزل فيزيائي عالي/منخفض الجهد',
        description: '有效隔离强电与弱电系统，防止电磁干扰。',
        descriptionEn: 'Effective isolation between HV and LV systems, preventing electromagnetic interference.',
        descriptionAr: 'عزل فعال بين أنظمة الجهد العالي والمنخفض.',
      },
      {
        title: 'LEMP 防护系统',
        titleEn: 'LEMP Protection System',
        titleAr: 'نظام حماية LEMP',
        description: '防雷电磁脉冲 (LEMP) 防护，保护敏感电子设备。',
        descriptionEn: 'Lightning Electromagnetic Impulse (LEMP) protection for sensitive electronic equipment.',
        descriptionAr: 'حماية من النبضات الكهرومغناطيسية للصواعق.',
      },
    ],
  },
  standards: {
    title: '核心标准',
    titleEn: 'The Standards',
    titleAr: 'المعايير الأساسية',
    subtitle: '我们遵循的权威标准',
    subtitleEn: 'Authoritative standards we follow',
    subtitleAr: 'المعايير الموثوقة التي نتبعها',
    items: [
      {
        code: 'IEC 62305-4',
        name: 'LEMP 防护标准',
        nameEn: 'LEMP Protection Standard',
        nameAr: 'معيار حماية LEMP',
        description: '雷电电磁脉冲防护设计指南',
        descriptionEn: 'Guide for Lightning Electromagnetic Pulse protection design',
        descriptionAr: 'دليل تصميم حماية النبضات الكهرومغناطيسية للصواعق',
      },
      {
        code: 'UL 467',
        name: '接地设备标准',
        nameEn: 'Grounding Equipment Standard',
        nameAr: 'معيار معدات التأريض',
        description: '美国保险商实验室接地与接地设备安全标准',
        descriptionEn: 'UL standard for grounding and bonding equipment',
        descriptionAr: 'معيار UL لمعدات التأريض والربط',
      },
    ],
  },
};

export default async function TransportationSolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';
  const isAr = locale === 'ar';

  const t = (zh: string, en: string, ar: string) => {
    if (isZh) return zh;
    if (isAr) return ar;
    return en;
  };

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="Lightning protection solutions for transportation infrastructure including high-speed rail and airports"
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
              {t('返回首页', 'Back to Home', 'العودة للرئيسية')}
            </Link>

            <div className="flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 w-fit">
              <svg className="w-5 h-5 text-blue-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                {t(solutionContent.hero.badge, solutionContent.hero.badgeEn, solutionContent.hero.badgeAr)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {t(solutionContent.hero.title, solutionContent.hero.titleEn, solutionContent.hero.titleAr)}
            </h1>
            
            <p className="text-2xl text-blue-400 mb-6 font-medium italic">
              &ldquo;{t(solutionContent.hero.subtitle, solutionContent.hero.subtitleEn, solutionContent.hero.subtitleAr)}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t(solutionContent.hero.description, solutionContent.hero.descriptionEn, solutionContent.hero.descriptionAr)}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/transportation"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
              >
                {t('查看项目案例', 'View Projects', 'عرض المشاريع')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4">
              {t(solutionContent.challenges.title, solutionContent.challenges.titleEn, solutionContent.challenges.titleAr)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(solutionContent.challenges.description, solutionContent.challenges.descriptionEn, solutionContent.challenges.descriptionAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionContent.challenges.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-red-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(item.title, item.titleEn, item.titleAr)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(item.description, item.descriptionEn, item.descriptionAr)}
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
              {t(solutionContent.solutions.title, solutionContent.solutions.titleEn, solutionContent.solutions.titleAr)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(solutionContent.solutions.description, solutionContent.solutions.descriptionEn, solutionContent.solutions.descriptionAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionContent.solutions.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-green-electric-500/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-electric-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(item.title, item.titleEn, item.titleAr)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(item.description, item.descriptionEn, item.descriptionAr)}
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
              {t(solutionContent.standards.title, solutionContent.standards.titleEn, solutionContent.standards.titleAr)}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t(solutionContent.standards.subtitle, solutionContent.standards.subtitleEn, solutionContent.standards.subtitleAr)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionContent.standards.items.map((item, index) => (
              <div key={index} className="bg-industrial-800/50 border border-blue-500/20 p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">{item.code}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(item.name, item.nameEn, item.nameAr)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(item.description, item.descriptionEn, item.descriptionAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('有轨道交通项目需求？', 'Have a Transportation Project?', 'لديك مشروع نقل بالسكك الحديدية؟')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的电磁兼容与信号防护解决方案',
              'Contact us for professional EMC and signal protection solutions',
              'اتصل بنا للحصول على حلول التوافق الكهرومغناطيسي وحماية الإشارات'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
            </Link>
            <Link
              href="/projects/transportation"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all duration-300"
            >
              {t('查看项目案例', 'View Projects', 'عرض المشاريع')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
