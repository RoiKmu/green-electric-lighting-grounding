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
    en: 'Petrochemical & Natural Gas Solutions - Green Electric Lightning Protection',
    zh: '石化与天然气解决方案 - 格林电工防雷接地',
    ar: 'حلول البتروكيميائيات والغاز الطبيعي - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Explosion-proof lightning protection solutions for petrochemical & natural gas facilities, oil depots, refineries, and LNG terminals in extreme heat and high corrosion environments.',
    zh: '为石化与天然气设施、油库、炼油厂和LNG终端提供防爆防雷保护解决方案，适用于极端高温和高腐蚀环境。',
    ar: 'حلول الحماية من الصواعق المقاومة للانفجارات لمنشآت البتروكيميائيات والغاز الطبيعي ومستودعات النفط والمصافي ومحطات الغاز الطبيعي المسال في بيئات الحرارة الشديدة والتآكل العالي.'
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
    badge: '石化与天然气',
    badgeEn: 'Petrochemical & Natural Gas',
    badgeAr: 'البتر والكيماويات والغاز الطبيعي',
    title: '聚焦「极端环境与安全合规」',
    titleEn: 'Extreme Environment & Safety Compliance',
    titleAr: 'البيئات القاسية والامتثال للسلامة',
    subtitle: '在易燃易爆环境中，每一处连接点都是安全防线。',
    subtitleEn: 'In flammable and explosive environments, every connection point is a safety line.',
    subtitleAr: 'في البيئات القابلة للاشتعال والانفجار، كل نقطة اتصال هي خط دفاع للسلامة.',
    description: '针对石化与天然气储罐区的高腐蚀与高风险特性，我们深谙阿美（Aramco）与 IEC 双重标准。不仅提供高导电率的铜包钢接地体，更强调放热焊接（Exothermic Welding）在极端环境下的分子级连接可靠性，确保系统在 30 年生命周期内免维护，彻底消除静电与感应雷引起的火花风险。',
    descriptionEn: 'For the high corrosion and high-risk characteristics of petrochemical & natural gas storage tank areas, we are well-versed in both Aramco and IEC dual standards. We not only provide high-conductivity copper-clad steel grounding bodies, but also emphasize the molecular-level connection reliability of Exothermic Welding in extreme environments, ensuring maintenance-free operation throughout the 30-year lifecycle, completely eliminating spark risks from static electricity and induced lightning.',
    descriptionAr: 'بالنسبة لخصائص التآكل العالي والمخاطر العالية في مناطق تخزين البتروكيميائية والغاز الطبيعي، نحن على دراية جيدة بالمعايير المزدوجة لأرامكو و IEC. لا نقدم فقط أجسام تأريض من الفولاذ المكسو بالنحاس عالية التوصيل، بل نؤكد أيضًا على موثوقية الاتصال على المستوى الجزيئي للحام الحراري في البيئات القاسية.',
  },
  challenges: {
    title: '挑战与行业痛点',
    titleEn: 'Challenges & Pain Points',
    titleAr: 'التحديات ونقاط الألم',
    description: '石化与天然气行业不需要一般的防雷，他们需要的是「绝对的防爆」和「抗腐蚀」。中东及东南亚沿海地区土壤电阻率极高（沙漠环境），且伴有高盐雾腐蚀；石化与天然气储罐区属于极高风险等级，对防爆、静电消除及接地系统的可靠性有着近乎苛刻的验收标准。',
    descriptionEn: 'The petrochemical & natural gas industry doesn\'t need ordinary lightning protection—they need absolute explosion-proof and corrosion resistance. Extremely high soil resistivity in Middle East and Southeast Asian coastal regions, combined with high salt-spray corrosion.',
    descriptionAr: 'صناعة البتروكيميائية والغاز الطبيعي لا تحتاج حماية عادية من الصواعق — بل تحتاج مقاومة مطلقة للانفجار والتآكل. مقاومة تربة عالية جدًا في مناطق الشرق الأوسط وجنوب شرق آسيا الساحلية، مع تآكل عالي بالرذاذ الملحي.',
    items: [
      {
        title: '极端环境适应',
        titleEn: 'Extreme Environment Adaptation',
        titleAr: 'التكيف مع البيئات القاسية',
        description: '波斯湾沿岸高盐雾腐蚀环境，沙漠地区极高土壤电阻率，传统接地材料寿命大幅缩短。',
        descriptionEn: 'High salt-spray corrosion environment along the Persian Gulf, extremely high soil resistivity in desert areas, traditional grounding materials have significantly shortened lifespan.',
        descriptionAr: 'بيئة تآكل عالية بالرذاذ الملحي على طول الخليج العربي، مقاومة تربة عالية جدًا في المناطق الصحراوية.',
      },
      {
        title: '防爆安全合规',
        titleEn: 'Explosion-Proof Safety Compliance',
        titleAr: 'الامتثال لمقاومة الانفجار',
        description: '储罐区属于极高风险等级，对防爆、静电消除及接地系统的可靠性有近乎苛刻的验收标准。',
        descriptionEn: 'Storage tank areas are classified as extremely high-risk zones, with near-stringent acceptance standards for explosion-proof, static elimination, and grounding system reliability.',
        descriptionAr: 'مناطق تخزين الخزانات مصنفة كمناطق عالية المخاطر، مع معايير قبول صارمة لمقاومة الانفجار وإزالة الشحنات الساكنة.',
      },
      {
        title: '国际标准对接',
        titleEn: 'International Standards Alignment',
        titleAr: 'مطابقة المعايير الدولية',
        description: '需同时满足沙特阿美（Aramco）企业标准与 IEC 国际标准的双重认证要求。',
        descriptionEn: 'Must simultaneously meet the dual certification requirements of Saudi Aramco corporate standards and IEC international standards.',
        descriptionAr: 'يجب تلبية متطلبات الشهادة المزدوجة لمعايير أرامكو السعودية ومعايير IEC الدولية.',
      },
      {
        title: '极高土壤电阻率',
        titleEn: 'Extremely High Soil Resistivity',
        titleAr: 'مقاومة تربة عالية جدًا',
        description: '沙漠环境土壤电阻率极高，传统接地难以达标。',
        descriptionEn: 'Desert environments have extremely high soil resistivity, making traditional grounding difficult to meet standards.',
        descriptionAr: 'البيئات الصحراوية لها مقاومة تربة عالية جدًا، مما يجعل التأريض التقليدي صعبًا.',
      },
      {
        title: '高盐雾腐蚀',
        titleEn: 'High Salt-Spray Corrosion',
        titleAr: 'تآكل عالي بالرذاذ الملحي',
        description: '波斯湾等沿海地区盐雾腐蚀严重，材料寿命短。',
        descriptionEn: 'Severe salt-spray corrosion in coastal areas like the Persian Gulf, shortening material lifespan.',
        descriptionAr: 'تآكل شديد بالرذاذ الملحي في المناطق الساحلية مثل الخليج العربي.',
      },
      {
        title: '防爆合规严苛',
        titleEn: 'Stringent Explosion-Proof Compliance',
        titleAr: 'امتثال صارم لمقاومة الانفجار',
        description: '石化与天然气储罐区对防爆、静电消除有近乎苛刻的验收标准。',
        descriptionEn: 'Petrochemical & natural gas storage areas have near-stringent acceptance standards for explosion-proof and static elimination.',
        descriptionAr: 'مناطق تخزين البتروكيميائية والغاز الطبيعي لها معايير قبول صارمة.',
      },
    ],
  },
  solutions: {
    title: '见解与专项方案',
    titleEn: 'Insights & Solutions',
    titleAr: 'الرؤى والحلول',
    description: '我们对该问题的技术看法与解决方案，为石化与天然气设施提供全方位的防爆防雷保护。',
    descriptionEn: 'Our technical perspective and solutions for petrochemical & natural gas facilities, providing comprehensive explosion-proof lightning protection.',
    descriptionAr: 'وجهة نظرنا التقنية والحلول لمنشآت البتروكيميائية والغاز الطبيعي، توفير حماية شاملة من الصواعق مقاومة للانفجار.',
    items: [
      {
        title: '分子级连接可靠性',
        titleEn: 'Molecular-Level Connection Reliability',
        titleAr: 'موثوقية الاتصال على المستوى الجزيئي',
        description: '放热焊接（Exothermic Welding）实现导体间的分子级结合，永不松动腐蚀，确保终身导电性。',
        descriptionEn: 'Exothermic Welding achieves molecular-level bonding between conductors, never loosening or corroding, ensuring lifetime conductivity.',
        descriptionAr: 'الحام الحراري يحقق ربطًا على المستوى الجزيئي بين الموصلات، لا يرتخي ولا يتآكل، يضمن التوصيل مدى الحياة.',
      },
      {
        title: '高厚度铜包钢材料',
        titleEn: 'High-Thickness Copper-Clad Steel',
        titleAr: 'فولاذ مكسو بالنحاس عالي السمك',
        description: '采用高导电率的铜包钢接地体，铜层厚度达到行业领先水平，抗腐蚀性能卓越，确保 30 年以上使用寿命。',
        descriptionEn: 'Using high-conductivity copper-clad steel grounding bodies with industry-leading copper layer thickness, excellent corrosion resistance, ensuring 30+ years service life.',
        descriptionAr: 'استخدام أجسام تأريض من الفولاذ المكسو بالنحاس عالية التوصيل مع سمك طبقة نحاسية رائدة في الصناعة.',
      },
      {
        title: '全生命周期免维护',
        titleEn: 'Lifecycle Maintenance-Free',
        titleAr: 'بدون صيانة طوال دورة الحياة',
        description: '系统设计确保在 30 年生命周期内免维护，彻底消除静电与感应雷引起的火花风险。',
        descriptionEn: 'System design ensures maintenance-free operation throughout the 30-year lifecycle, completely eliminating spark risks from static electricity and induced lightning.',
        descriptionAr: 'تصميم النظام يضمن التشغيل بدون صيانة طوال دورة حياة 30 عامًا.',
      },
      {
        title: '深井接地技术',
        titleEn: 'Deep Well Grounding Technology',
        titleAr: 'تقنية تأريض الآبار العميقة',
        description: '突破高电阻率土壤限制，实现稳定低电阻接地。',
        descriptionEn: 'Break through high resistivity soil limitations, achieve stable low-resistance grounding.',
        descriptionAr: 'اختراق قيود التربة عالية المقاومة، تحقيق تأريض منخفض المقاومة مستقر.',
      },
      {
        title: '放热焊接永久连接',
        titleEn: 'Exothermic Welding Permanent Connection',
        titleAr: 'اتصال دائم بالحام الحراري',
        description: '分子级结合，永不松动腐蚀，确保终身导电性。',
        descriptionEn: 'Molecular-level bonding, never loosens or corrodes, ensuring lifetime conductivity.',
        descriptionAr: 'ربط على المستوى الجزيئي، لا يرتخي ولا يتآكل، يضمن التوصيل مدى الحياة.',
      },
      {
        title: 'ATEX/IECEx 认证静电防护',
        titleEn: 'ATEX/IECEx Certified Static Protection',
        titleAr: 'حماية ساكنة معتمدة ATEX/IECEx',
        description: '符合国际防爆认证的静电防护体系。',
        descriptionEn: 'Static protection system compliant with international explosion-proof certifications.',
        descriptionAr: 'نظام حماية ساكنة متوافق مع شهادات مقاومة الانفجار الدولية.',
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
        code: 'IEC 62305-3/4',
        name: '雷电防护标准',
        nameEn: 'Lightning Protection Standard',
        nameAr: 'معيار حماية الصواعق',
        description: '国际电工委员会雷电防护系统设计与安装标准',
        descriptionEn: 'IEC standard for lightning protection system design and installation',
        descriptionAr: 'معيار IEC لتصميم وتركيب نظام حماية الصواعق',
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
      {
        code: 'Aramco SAES-P-111',
        name: '沙特阿美标准',
        nameEn: 'Saudi Aramco Standard',
        nameAr: 'معيار أرامكو السعودية',
        description: '沙特阿美企业防雷与接地技术规范',
        descriptionEn: 'Saudi Aramco corporate lightning protection and grounding technical specifications',
        descriptionAr: 'المواصفات الفنية لحماية الصواعق والتأريض لأرامكو السعودية',
      },
      {
        code: 'ATEX/IECEx',
        name: '防爆认证',
        nameEn: 'Explosion-Proof Certification',
        nameAr: 'شهادة مقاومة الانفجار',
        description: '国际防爆设备认证体系',
        descriptionEn: 'International explosion-proof equipment certification system',
        descriptionAr: 'نظام شهادة معدات مقاومة الانفجار الدولية',
      },
    ],
  },
};

export default async function PetrochemicalSolutionPage({ params }: { params: Promise<{ locale: string }> }) {
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
              {t('返回首页', 'Back to Home', 'العودة للرئيسية')}
            </Link>

            <div className="flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30 w-fit">
              <svg className="w-5 h-5 text-orange-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                {t(solutionContent.hero.badge, solutionContent.hero.badgeEn, solutionContent.hero.badgeAr)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {t(solutionContent.hero.title, solutionContent.hero.titleEn, solutionContent.hero.titleAr)}
            </h1>
            
            <p className="text-2xl text-orange-400 mb-6 font-medium italic">
              &ldquo;{t(solutionContent.hero.subtitle, solutionContent.hero.subtitleEn, solutionContent.hero.subtitleAr)}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t(solutionContent.hero.description, solutionContent.hero.descriptionEn, solutionContent.hero.descriptionAr)}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/petrochemical"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold transition-colors"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('有石化与天然气项目需求？', 'Have a Petrochemical & Natural Gas Project?', 'لديك مشروع بتروكيميائية أو غاز طبيعي؟')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的防爆防雷解决方案和有竞争力的报价',
              'Contact us for professional explosion-proof lightning protection solutions and competitive pricing',
              'اتصل بنا للحصول على حلول حماية من الصواعق مقاومة للانفجار وأسعار تنافسية'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
            </Link>
            <Link
              href="/projects/petrochemical"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 font-semibold text-lg transition-all duration-300"
            >
              {t('查看项目案例', 'View Projects', 'عرض المشاريع')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
