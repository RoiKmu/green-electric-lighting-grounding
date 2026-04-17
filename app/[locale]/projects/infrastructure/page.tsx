import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { CaseStudySchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://green-electric.com';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Infrastructure Projects - Super High-Rise & Large Public Buildings',
    zh: '基础设施项目 - 超高层建筑与大型公建防雷',
    ar: 'مشاريع البنية التحتية - حماية الصواعق للمباني الشاهقة'
  };
  
  const descriptions: Record<string, string> = {
    en: 'System-level lightning protection for commercial centers, stadiums, and data centers. Serving 70+ projects across 18 countries. Compliant with IEC 62561 and Saudi Aramco SAES standards.',
    zh: '为商业建筑、体育场馆和公共设施提供防雷保护解决方案。服务70+项目覆盖18个国家。符合IEC 62561和沙特阿美SAES标准。',
    ar: 'حلول حماية الصواعق للمباني التجارية والاستادات والمنشآت العامة. خدمة أكثر من 70 مشروع في 18 دولة. متوافقة مع معايير IEC 62561 و Saudi Aramco SAES.'
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      'infrastructure lightning protection',
      'super high-rise building',
      'stadium protection',
      'data center grounding',
      'EPC project',
      'Saudi Arabia',
      'IEC 62561',
      'SAES'
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/projects/infrastructure`,
      languages: {
        en: `${BASE_URL}/en/projects/infrastructure`,
        zh: `${BASE_URL}/zh/projects/infrastructure`,
        ar: `${BASE_URL}/ar/projects/infrastructure`,
      }
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const projects = [
  {
    id: 'egypt-cbd',
    title: '埃及新行政首都 CBD 项目',
    titleEn: 'Egypt New Administrative Capital CBD',
    titleAr: 'المنطقة المركزية للعاصمة الإدارية الجديدة، مصر',
    location: '埃及',
    locationEn: 'Egypt',
    locationAr: 'مصر',
    year: '2016',
    background: '中国建筑 (CSCEC) 承建，含非洲第一高楼。',
    backgroundEn: 'Constructed by CSCEC, including the tallest building in Africa.',
    backgroundAr: 'من تنفيذ CSCEC، بما في ذلك أطول مبنى في أفريقيا.',
    highlight: '提供了全套高层建筑防雷技术方案与抗拉力接地导体。',
    highlightEn: 'Provided complete high-rise building lightning protection technical solution and tensile grounding conductors.',
    highlightAr: 'توفير حل تقني كامل لحماية المباني الشاهقة من الصواعق وموصلات تأريض قابلة للشد.',
    stats: [
      { value: '385m', valueEn: '385m', valueAr: '385م', label: '非洲第一高楼', labelEn: "Africa's Tallest", labelAr: 'أطول مبنى في أفريقيا' },
      { value: 'CSCEC', valueEn: 'CSCEC', valueAr: 'CSCEC', label: '承建方', labelEn: 'Contractor', labelAr: 'المقاول' },
      { value: '运营中', valueEn: 'Operational', valueAr: 'تشغيل', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '超高层建筑引下线补偿',
      '侧击雷防护',
      '非洲第一高楼特殊要求',
    ],
    challengesEn: [
      'Down conductor compensation for super-tall building',
      'Side-strike lightning protection',
      "Special requirements for Africa's tallest building",
    ],
    challengesAr: [
      'تعويض الموصل الهابط للمبنى الشاهق',
      'حماية من ضربات الصاعقة الجانبية',
      'متطلبات خاصة لأطول مبنى في أفريقيا',
    ],
    solutions: [
      '高层建筑防雷技术方案',
      '抗拉力接地导体',
      '侧击雷防护体系',
    ],
    solutionsEn: [
      'High-rise building lightning protection technical solution',
      'Tensile grounding conductors',
      'Side-strike lightning protection system',
    ],
    solutionsAr: [
      'حل تقني لحماية المباني الشاهقة من الصواعق',
      'موصلات تأريض قابلة للشد',
      'نظام حماية من ضربات الصاعقة الجانبية',
    ],
    results: [
      '接地电阻稳定在 0.5Ω 以下',
      '防雷系统已安全运行 8 年零故障',
      '通过 IEC 62561 认证验收',
    ],
    resultsEn: [
      'Grounding resistance stabilized below 0.5Ω',
      'Lightning protection system operating safely for 8 years with zero failures',
      'Passed IEC 62561 certification acceptance',
    ],
    resultsAr: [
      'مقاومة التأريض مستقرة أقل من 0.5Ω',
      'نظام حماية الصواعق يعمل بأمان لمدة 8 سنوات بدون أعطال',
      'اجتاز فحص شهادة IEC 62561',
    ],
    image: '/images/projects/Infrastructure/Algeria-mosque-eyecatcher-valbeveiliging2.jpg',
  },
  {
    id: 'lusail-stadium',
    title: '卡塔尔卢塞尔体育场',
    titleEn: 'Lusail Stadium, Qatar',
    titleAr: 'ملعب لوسيل، قطر',
    location: '卡塔尔',
    locationEn: 'Qatar',
    locationAr: 'قطر',
    year: '2022',
    background: '2022 世界杯决赛主场馆，由中国铁建 (CRCC) 承建。',
    backgroundEn: 'Main venue for the 2022 World Cup Final, constructed by CRCC.',
    backgroundAr: 'الملعب الرئيسي لنهائي كأس العالم 2022، من تنفيذ CRCC.',
    highlight: '配套供应了高可靠性的等电位联结箱与防雷关键组件。',
    highlightEn: 'Supplied high-reliability equipotential bonding components and critical lightning protection components.',
    highlightAr: 'توفير مكونات توصيل متساوي الجهد عالية الموثوقية ومكونات حماية الصواعق الحرجة.',
    stats: [
      { value: '80,000', valueEn: '80,000', valueAr: '80,000', label: '观众容量', labelEn: 'Spectator Capacity', labelAr: 'سعة المتفرجين' },
      { value: '世界杯', valueEn: 'World Cup', valueAr: 'كأس العالم', label: '决赛场馆', labelEn: 'Final Venue', labelAr: 'ملعب النهائي' },
      { value: 'CRCC', valueEn: 'CRCC', valueAr: 'CRCC', label: '承建方', labelEn: 'Contractor', labelAr: 'المقاول' },
    ],
    challenges: [
      '全钢结构大跨度建筑',
      '雷电流泄放路径设计',
      '国际赛事高标准要求',
    ],
    challengesEn: [
      'Full steel structure with large span',
      'Lightning current discharge path design',
      'High standards for international events',
    ],
    challengesAr: [
      'هيكل فولاذي كامل بامتداد واسع',
      'تصميم مسار تفريغ تيار الصاعقة',
      'معايير عالية للفعاليات الدولية',
    ],
    solutions: [
      '高可靠性等电位联结箱',
      '防雷关键组件供应',
      '钢结构雷电流泄放设计',
    ],
    solutionsEn: [
      'High-reliability equipotential bonding components',
      'Critical lightning protection component supply',
      'Steel structure lightning current discharge design',
    ],
    solutionsAr: [
      'مكونات توصيل متساوي الجهد عالية الموثوقية',
      'توريد مكونات حماية الصواعق الحرجة',
      'تصميم تفريغ تيار الصاعقة للهيكل الفولاذي',
    ],
    results: [
      '世界杯期间零雷击事故',
      '等电位联结系统一次性通过验收',
      '防雷组件服役 3 年零维护',
    ],
    resultsEn: [
      'Zero lightning incidents during World Cup',
      'Equipotential bonding system passed acceptance on first attempt',
      'Lightning protection components operating for 3 years with zero maintenance',
    ],
    resultsAr: [
      'صفر حوادث صواعق خلال كأس العالم',
      'نظام التوصيل متساوي الجهد اجتاز القبول من المحاولة الأولى',
      'مكونات حماية الصواعق تعمل لمدة 3 سنوات بدون صيانة',
    ],
    image: '/images/projects/Infrastructure/lusail_stadium_afl_architects1.jpg',
  },
  {
    id: 'riyadh-metro',
    title: '沙特利雅得地铁 KAFD 地标车站',
    titleEn: 'Riyadh Metro KAFD Landmark Station',
    titleAr: 'محطة مترو الرياض KAFD المعلمية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '沙特 Vision 2030 核心交通枢纽，位于阿卜杜拉国王金融区，由 BACS 联合体承建。',
    backgroundEn: 'Core transportation hub of Saudi Vision 2030, located in King Abdullah Financial District, constructed by BACS Consortium.',
    backgroundAr: 'محور نقل رئيسي لرؤية السعودية 2030، يقع في منطقة الملك عبدالله المالية، من تنفيذ اتحاد BACS.',
    highlight: '在复杂城区环境下实现深基坑降阻与精密电子设备防雷屏蔽。',
    highlightEn: 'Achieved deep foundation pit resistance reduction and precision electronic equipment lightning shielding in complex urban environment.',
    highlightAr: 'تحقيق خفض مقاومة الحفر العميق ودرع حماية الصواعق للمعدات الإلكترونية الدقيقة في بيئة حضرية معقدة.',
    stats: [
      { value: 'Vision 2030', valueEn: 'Vision 2030', valueAr: 'رؤية 2030', label: '战略项目', labelEn: 'Strategic Project', labelAr: 'مشروع استراتيجي' },
      { value: 'BACS', valueEn: 'BACS', valueAr: 'BACS', label: 'EPC 联合体', labelEn: 'EPC Consortium', labelAr: 'اتحاد EPC' },
      { value: '在建', valueEn: 'In Progress', valueAr: 'قيد التنفيذ', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '复杂城区深基坑降阻',
      '精密电子设备防雷屏蔽',
      '地下交通枢纽综合防护',
    ],
    challengesEn: [
      'Deep foundation pit resistance reduction in complex urban area',
      'Lightning shielding for precision electronic equipment',
      'Integrated protection for underground transit hub',
    ],
    challengesAr: [
      'خفض مقاومة الحفر العميق في منطقة حضرية معقدة',
      'درع حماية الصواعق للمعدات الإلكترونية الدقيقة',
      'حماية متكاملة لمحطة النقل تحت الأرض',
    ],
    solutions: [
      '深基坑降阻技术方案',
      '精密电子设备防雷屏蔽系统',
      '地下枢纽综合防护体系',
    ],
    solutionsEn: [
      'Deep foundation pit resistance reduction technical solution',
      'Lightning shielding system for precision electronic equipment',
      'Integrated protection system for underground hub',
    ],
    solutionsAr: [
      'حل تقني لخفض مقاومة الحفر العميق',
      'نظام درع حماية الصواعق للمعدات الإلكترونية الدقيقة',
      'نظام حماية متكامل للمحطة تحت الأرض',
    ],
    results: [
      '设计目标：接地电阻 ≤ 1Ω',
      '设计目标：电子设备屏蔽效能 ≥ 60dB',
      '符合 Aramco SAES-P-111 标准设计',
    ],
    resultsEn: [
      'Design target: Grounding resistance ≤ 1Ω',
      'Design target: Electronic equipment shielding effectiveness ≥ 60dB',
      'Designed to Aramco SAES-P-111 standard',
    ],
    resultsAr: [
      'هدف التصميم: مقاومة التأريض ≤ 1Ω',
      'هدف التصميم: فعالية درع المعدات الإلكترونية ≥ 60dB',
      'تصميم متوافق مع معيار Aramco SAES-P-111',
    ],
    image: '/images/projects/Infrastructure/KAFD.png',
  },
];

export default async function InfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = (zh: string, en: string, ar: string) => {
    if (locale === 'zh') return zh;
    if (locale === 'ar') return ar;
    return en;
  };

  const breadcrumbs = [
    { name: t('首页', 'Home', 'الرئيسية'), url: `${BASE_URL}/${locale}` },
    { name: t('项目案例', 'Projects', 'المشاريع'), url: `${BASE_URL}/${locale}/projects` },
    { name: t('基础设施', 'Infrastructure', 'البنية التحتية'), url: `${BASE_URL}/${locale}/projects/infrastructure` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {projects.slice(0, 1).map((project) => (
        <CaseStudySchema
          key={project.id}
          locale={locale}
          url={BASE_URL}
          name={t(project.title, project.titleEn, project.titleAr)}
          description={t(project.highlight, project.highlightEn, project.highlightAr)}
          image={project.image}
          industry={t('基础设施', 'Infrastructure', 'البنية التحتية')}
          location={t(project.location, project.locationEn, project.locationAr)}
        />
      ))}
      <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/Infrastructure/P020220715559196933502.jpg"
            alt="Infrastructure Projects"
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
              {t('返回项目总览', 'Back to Projects', 'العودة إلى المشاريع')}
            </Link>

            <div className="flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30 w-fit">
              <svg className="w-5 h-5 text-purple-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                {t('大型基础设施', 'Infrastructure', 'البنية التحتية الكبرى')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t('超高层建筑与大型公建的防雷稳定性', 'Lightning Protection Stability for Super High-Rise & Large Public Buildings', 'استقرار حماية الصواعق للمباني الشاهقة والمباني العامة الكبيرة')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(
                '为商业建筑、体育场馆和公共设施提供保护解决方案。服务70+项目覆盖18个国家。',
                'Protection solutions for commercial buildings, stadiums, and public facilities. Serving 70+ projects across 18 countries.',
                'حلول حماية للمباني التجارية والاستادات والمنشآت العامة. خدمة أكثر من 70 مشروع في 18 دولة.'
              )}
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">70+</div>
                <div className="text-sm text-gray-400">{t('项目案例', 'Projects', 'مشروع')}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-purple-400">18</div>
                <div className="text-sm text-gray-400">{t('服务国家', 'Countries', 'دولة')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('三大标杆案例', 'Three Landmark Projects', 'ثلاثة مشاريع بارزة')}
            </h2>
            <p className="text-gray-400">
              {t('深入了解我们在基础设施行业的标杆项目', 'Explore our landmark projects in the infrastructure sector', 'استكشف مشاريعنا البارزة في قطاع البنية التحتية')}
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
                      alt={t(project.title, project.titleEn, project.titleAr)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 to-transparent" />
                    <div className="absolute bottom-6 start-6">
                      <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
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
                    <span className="text-sm">{t(project.location, project.locationEn, project.locationAr)}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t(project.title, project.titleEn, project.titleAr)}
                  </h3>

                  <div className="bg-industrial-800/50 border border-industrial-700 p-4 rounded-xl mb-4">
                    <p className="text-gray-300 text-sm">
                      <span className="text-purple-400 font-medium">{t('背景：', 'Background: ', 'الخلفية: ')}</span>
                      {t(project.background, project.backgroundEn, project.backgroundAr)}
                    </p>
                  </div>

                  <div className="bg-green-electric-500/10 border border-green-electric-500/30 p-4 rounded-xl mb-6">
                    <p className="text-gray-300 text-sm">
                      <span className="text-green-electric-400 font-medium">{t('亮点：', 'Highlight: ', 'التميز: ')}</span>
                      {t(project.highlight, project.highlightEn, project.highlightAr)}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-industrial-800/50 border border-industrial-700 p-4 rounded-xl">
                        <div className="text-xl font-bold text-purple-400">{t(stat.value, stat.valueEn, stat.valueAr)}</div>
                        <div className="text-xs text-gray-400">{t(stat.label, stat.labelEn, stat.labelAr)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <svg className="w-5 h-5 text-red-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {t('项目挑战', 'Challenges', 'التحديات')}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'zh' ? project.challenges : locale === 'ar' ? project.challengesAr : project.challengesEn).map((item, i) => (
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
                        {t('解决方案', 'Solutions', 'الحلول')}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'zh' ? project.solutions : locale === 'ar' ? project.solutionsAr : project.solutionsEn).map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-electric-400 rounded-full mt-2 me-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {project.results && (
                    <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <svg className="w-5 h-5 text-cyan-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        {t('项目成果', 'Results', 'النتائج')}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'zh' ? project.results : locale === 'ar' ? project.resultsAr : project.resultsEn).map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 me-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                {t('探索其他行业项目', 'Explore Other Industries', 'استكشف مشاريع صناعات أخرى')}
              </h3>
              <p className="text-gray-400">
                {t('查看我们在其他行业的项目案例', 'View our projects in other industries', 'شاهد مشاريعنا في صناعات أخرى')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects/petrochemical" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('石化与天然气', 'Petrochemical & Natural Gas', 'البتر والكيميائيات والغاز الطبيعي')}
              </Link>
              <Link href="/projects/power-energy" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('电力与新能源', 'Power & Energy', 'الطاقة والطاقة المتجددة')}
              </Link>
              <Link href="/projects/transportation" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('轨道交通', 'Transportation', 'النقل بالسكك الحديدية')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('有基础设施项目需求？', 'Have an Infrastructure Project?', 'لديك مشروع بنية تحتية؟')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的基础设施防雷解决方案',
              'Contact us for professional infrastructure lightning protection solutions',
              'اتصل بنا للحصول على حلول حماية صواعق احترافية للبنية التحتية'
            )}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
