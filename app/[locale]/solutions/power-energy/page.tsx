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
    en: 'Power & Energy Solutions - Green Electric Lightning Protection',
    zh: '电力与能源解决方案 - 格林电工防雷接地',
    ar: 'حلول الطاقة والكهرباء - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'System stability and lifecycle cost optimization lightning protection solutions for power plants and renewable energy facilities.',
    zh: '为发电厂和可再生能源设施提供系统稳定性和全生命周期成本优化的防雷保护解决方案。',
    ar: 'حلول الحماية من الصواعق لتحسين استقرار النظام وتكاليف دورة الحياة لمحطات الطاقة ومنشآت الطاقة المتجددة.'
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
    badge: '电力与新能源',
    badgeEn: 'Power & Energy',
    badgeAr: 'الطاقة والطاقة المتجددة',
    title: '聚焦「系统稳定性与全生命周期成本」',
    titleEn: 'System Stability & Lifecycle Cost',
    titleAr: 'استقرار النظام وتكلفة دورة الحياة',
    subtitle: '跨越地形约束，交付稳定的接地阻值。',
    subtitleEn: 'Overcoming terrain constraints, delivering stable grounding resistance values.',
    subtitleAr: 'تجاوز قيود التضاريس، تسليم قيم مقاومة تأريض مستقرة.',
    description: '在沙漠或多山地带的电力工程中，不稳定的土壤电阻率是 EPC 交付的最大挑战。我们通过降阻模块与深井接地的组合优化，将不确定的地质条件转化为确定的技术指标。我们追求的不是材料的堆砌，而是通过精确的设计余裕（Design Redundancy），在降低总体拥有成本（TCO）的同时，满足 500kV 以上电网的严苛验收。',
    descriptionEn: 'In power engineering projects in desert or mountainous regions, unstable soil resistivity is the biggest challenge for EPC delivery. Through combined optimization of resistance reduction modules and deep well grounding, we transform uncertain geological conditions into certain technical indicators. We pursue not material stacking, but through precise Design Redundancy, while reducing Total Cost of Ownership (TCO), meeting the stringent acceptance requirements of 500kV+ power grids.',
    descriptionAr: 'في مشاريع الهندسة الكهربائية في المناطق الصحراوية أو الجبلية، مقاومة التربة غير المستقرة هي أكبر تحدي لتسليم EPC. من خلال التحسين المشترك لوحدات تقليل المقاومة وتأريض الآبار العميقة، نحول الظروف الجيولوجية غير المؤكدة إلى مؤشرات تقنية مؤكدة.',
  },
  challenges: {
    title: '挑战与行业痛点',
    titleEn: 'Challenges & Pain Points',
    titleAr: 'التحديات ونقاط الألم',
    description: '大型光伏或变电站关注的是大规模交付的效率和长期可靠性。新能源（光伏、风电）占地面积巨大，接地网物料成本及物流压力大；海外变电站对接地系统的 50 年长寿命运行有明确要求。',
    descriptionEn: 'Large-scale PV or substations focus on delivery efficiency and long-term reliability. Renewable energy projects cover vast areas, creating significant pressure on material costs and logistics. Overseas substations have explicit 50-year long-life requirements.',
    descriptionAr: 'محطات الطاقة الشمسية الكبيرة أو المحطات الفرعية تركز على كفاءة التسليم والموثوقية طويلة الأمد. مشاريع الطاقة المتجددة تغطي مساحات شاسعة.',
    items: [
      {
        title: '不稳定土壤电阻率',
        titleEn: 'Unstable Soil Resistivity',
        titleAr: 'مقاومة تربة غير مستقرة',
        description: '沙漠或多山地带土壤电阻率变化剧烈，传统接地设计难以保证稳定达标，成为 EPC 交付的最大挑战。',
        descriptionEn: 'Soil resistivity varies dramatically in desert or mountainous regions. Traditional grounding design struggles to ensure stable compliance.',
        descriptionAr: 'مقاومة التربة تختلف بشكل كبير في المناطق الصحراوية أو الجبلية.',
      },
      {
        title: '大规模交付效率',
        titleEn: 'Large-Scale Delivery Efficiency',
        titleAr: 'كفاءة التسليم واسعة النطاق',
        description: '大型光伏电站或变电站项目占地面积大，接地材料需求量巨大，对供应链和施工效率提出极高要求。',
        descriptionEn: 'Large-scale PV power stations or substation projects cover vast areas with enormous grounding material requirements.',
        descriptionAr: 'محطات الطاقة الشمسية الكبيرة أو المحطات الفرعية تغطي مساحات شاسعة.',
      },
      {
        title: '严苛验收标准',
        titleEn: 'Stringent Acceptance Standards',
        titleAr: 'معايير قبول صارمة',
        description: '500kV 以上电网对接地系统有严格的技术指标要求，任何不达标都可能导致项目延期或返工。',
        descriptionEn: 'Power grids above 500kV have strict technical requirements for grounding systems.',
        descriptionAr: 'شبكات الكهرباء فوق 500 كيلوفولت لها متطلبات تقنية صارمة لأنظمة التأريض.',
      },
      {
        title: '占地面积巨大',
        titleEn: 'Massive Coverage Area',
        titleAr: 'مساحة تغطية ضخمة',
        description: '光伏、风电项目占地广阔，接地网物料成本及物流压力大。',
        descriptionEn: 'Solar and wind projects cover vast areas, creating significant pressure on material costs and logistics.',
        descriptionAr: 'مشاريع الطاقة الشمسية والرياح تغطي مساحات شاسعة.',
      },
      {
        title: '50年长寿命要求',
        titleEn: '50-Year Lifespan Requirement',
        titleAr: 'متطلبات عمر 50 عامًا',
        description: '海外变电站对接地系统有明确的50年长寿命运行要求。',
        descriptionEn: 'Overseas substations have explicit 50-year long-life operation requirements for grounding systems.',
        descriptionAr: 'المحطات الفرعية الخارجية لها متطلبات تشغيل طويلة العمر 50 عامًا.',
      },
      {
        title: '极端环境挑战',
        titleEn: 'Extreme Environment Challenges',
        titleAr: 'تحديات البيئة القاسية',
        description: '沙漠干燥、热带雨林等多变环境对接地系统稳定性要求高。',
        descriptionEn: 'Variable environments like dry deserts and tropical rainforests demand high grounding system stability.',
        descriptionAr: 'البيئات المتغيرة مثل الصحاري الجافة والغابات الاستوائية تتطلب استقرارًا عاليًا لنظام التأريض.',
      },
    ],
  },
  solutions: {
    title: '见解与专项方案',
    titleEn: 'Insights & Solutions',
    titleAr: 'الرؤى والحلول',
    description: '将不确定的地质条件转化为确定的技术指标，为电力能源设施提供全方位的防雷保护。',
    descriptionEn: 'Transforming uncertain geological conditions into certain technical indicators, providing comprehensive lightning protection for power and energy facilities.',
    descriptionAr: 'تحويل الظروف الجيولوجية غير المؤكدة إلى مؤشرات تقنية مؤكدة.',
    items: [
      {
        title: '降阻模块组合优化',
        titleEn: 'Resistance Reduction Module Optimization',
        titleAr: 'تحسين وحدات تقليل المقاومة',
        description: '通过降阻模块与深井接地的组合优化，针对不同土壤电阻率提供自适应方案，确保在各种地质条件下都能达到设计目标。',
        descriptionEn: 'Through combined optimization of resistance reduction modules and deep well grounding, provide adaptive solutions for different soil resistivities.',
        descriptionAr: 'من خلال التحسين المشترك لوحدات تقليل المقاومة وتأريض الآبار العميقة.',
      },
      {
        title: '精确设计余裕',
        titleEn: 'Precise Design Redundancy',
        titleAr: 'تكرار التصميم الدقيق',
        description: '我们追求的不是材料的堆砌，而是通过精确的设计余裕（Design Redundancy），在保证安全可靠的前提下，优化材料用量。',
        descriptionEn: 'We pursue not material stacking, but through precise Design Redundancy, optimize material usage while ensuring safety and reliability.',
        descriptionAr: 'نسعى ليس لتكديس المواد، بل من خلال تكرار التصميم الدقيق.',
      },
      {
        title: '降低总体拥有成本',
        titleEn: 'Reducing Total Cost of Ownership',
        titleAr: 'تقليل التكلفة الإجمالية للملكية',
        description: '在降低总体拥有成本（TCO）的同时，满足 500kV 以上电网的严苛验收标准，为 EPC 总包方创造真正的价值。',
        descriptionEn: 'While reducing Total Cost of Ownership (TCO), meeting stringent acceptance standards for 500kV+ power grids.',
        descriptionAr: 'مع تقليل التكلفة الإجمالية للملكية، تلبية معايير القبول الصارمة.',
      },
      {
        title: '长寿命免维护铜包钢接地网',
        titleEn: 'Long-Life Maintenance-Free CCS Grounding',
        titleAr: 'تأريض CCS طويل العمر بدون صيانة',
        description: '50年设计寿命，免维护运行，降低全生命周期成本。',
        descriptionEn: '50-year design life, maintenance-free operation, reducing total lifecycle cost.',
        descriptionAr: 'عمر تصميم 50 عامًا، تشغيل بدون صيانة.',
      },
      {
        title: '定制化高导电接地模块',
        titleEn: 'Customized High-Conductivity Grounding Modules',
        titleAr: 'وحدات تأريض عالية التوصيل مخصصة',
        description: '针对不同土壤条件定制，优化导电性能与成本。',
        descriptionEn: 'Customized for different soil conditions, optimizing conductivity and cost.',
        descriptionAr: 'مخصصة لظروف التربة المختلفة.',
      },
      {
        title: '大型阵列综合防雷方案',
        titleEn: 'Large-Scale Array Integrated Lightning Protection',
        titleAr: 'حماية متكاملة من الصواعق للمصفوفات الكبيرة',
        description: '针对光伏/风电阵列的专业防雷保护体系。',
        descriptionEn: 'Professional lightning protection system for solar/wind arrays.',
        descriptionAr: 'نظام حماية احترافي من الصواعق لمصفوفات الطاقة الشمسية/الرياح.',
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
        code: 'IEC 62305',
        name: '雷电防护系统',
        nameEn: 'Lightning Protection System',
        nameAr: 'نظام حماية الصواعق',
        description: '国际雷电防护系统设计标准',
        descriptionEn: 'International standard for lightning protection system design',
        descriptionAr: 'المعيار الدولي لتصميم نظام حماية الصواعق',
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
        code: 'DL/T 475',
        name: '接地装置特性参数',
        nameEn: 'Grounding Device Parameters',
        nameAr: 'معلمات جهاز التأريض',
        description: '接地装置特性参数测量导则',
        descriptionEn: 'Guidelines for measuring grounding device characteristic parameters',
        descriptionAr: 'إرشادات قياس معلمات جهاز التأريض',
      },
      {
        code: 'GB/T 50065',
        name: '交流电气装置接地',
        nameEn: 'AC Electrical Installation Grounding',
        nameAr: 'تأريض التركيبات الكهربائية AC',
        description: '交流电气装置接地设计规范',
        descriptionEn: 'Code for grounding design of AC electrical installations',
        descriptionAr: 'رمز تصميم تأريض التركيبات الكهربائية AC',
      },
    ],
  },
};

export default async function PowerEnergySolutionPage({ params }: { params: Promise<{ locale: string }> }) {
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
              {t('返回首页', 'Back to Home', 'العودة للرئيسية')}
            </Link>

            <div className="flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30 w-fit">
              <svg className="w-5 h-5 text-yellow-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                {t(solutionContent.hero.badge, solutionContent.hero.badgeEn, solutionContent.hero.badgeAr)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {t(solutionContent.hero.title, solutionContent.hero.titleEn, solutionContent.hero.titleAr)}
            </h1>
            
            <p className="text-2xl text-yellow-400 mb-6 font-medium italic">
              &ldquo;{t(solutionContent.hero.subtitle, solutionContent.hero.subtitleEn, solutionContent.hero.subtitleAr)}&rdquo;
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {t(solutionContent.hero.description, solutionContent.hero.descriptionEn, solutionContent.hero.descriptionAr)}
            </p>

            <div className="flex gap-4">
              <Link
                href="/projects/power-energy"
                className="px-6 py-3 bg-yellow-500 text-industrial-900 rounded-lg hover:bg-yellow-400 font-semibold transition-colors"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v3m-3-3h6m-6-3h6m-6 0V7m3 10V7m0 0V4m0 3h.01M9 7V4m0 3h6" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.657 0 3 .895 3 2s-1.343 2-3 2m0-8c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V4z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {index === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {index === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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

      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
            {t('有电力或新能源项目需求？', 'Have a Power & Energy Project?', 'لديك مشروع طاقة أو طاقة متجددة؟')}
          </h2>
          <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的接地系统解决方案和有竞争力的报价',
              'Contact us for professional grounding system solutions and competitive pricing',
              'اتصل بنا للحصول على حلول نظام تأريض احترافية وأسعار تنافسية'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-industrial-900 text-white rounded-lg hover:bg-industrial-800 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
            </Link>
            <Link
              href="/projects/power-energy"
              className="px-8 py-4 border-2 border-industrial-900 text-industrial-900 rounded-lg hover:bg-industrial-900 hover:text-white font-semibold text-lg transition-all duration-300"
            >
              {t('查看项目案例', 'View Projects', 'عرض المشاريع')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
