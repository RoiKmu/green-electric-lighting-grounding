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
    en: 'Transportation Projects - Green Electric Lightning Protection',
    zh: '交通运输项目 - 格林电工防雷接地',
    ar: 'مشاريع النقل - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Ensuring zero-interruption operation for cross-border HSR and heavy-haul railways. Critical protection for airports, railways, and transit hubs.',
    zh: '确保跨境高铁和重载铁路零中断运行。为机场、铁路和交通枢纽提供关键保护。',
    ar: 'ضمان التشغيل بدون انقطاع لسكك الحديد عالية السرعة عبر الحدود وسكك الحديد ذات الحمولة الثقيلة. حماية حرجة للمطارات والسكك الحديدية ومراكز النقل.'
  };
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const projects = [
  {
    id: 'jakarta-bandung-hsr',
    title: '印尼雅万高铁',
    titleEn: 'Jakarta-Bandung High-Speed Rail',
    titleAr: 'قطار جاكرتا-باندونغ عالي السرعة',
    location: '印度尼西亚',
    locationEn: 'Indonesia',
    locationAr: 'إندونيسيا',
    year: '2023',
    background: '中国高铁全产业链出海第一单，中国中铁/中交 (HSR Consortium) 联合体。',
    backgroundEn: 'First complete HSR industry chain export from China, consortium including China Railway and China Communications Construction.',
    backgroundAr: 'أول تصدير لسلسلة صناعة القطارات عالية السرعة الكاملة من الصين، اتحاد يضم سكة حديد الصين وبناء الاتصالات الصينية.',
    highlight: '交付"四电"系统精密接地材料，保障高铁指挥系统在极端天气下的绝对安全。',
    highlightEn: 'Delivered precision grounding materials for the "Four Electrification" systems, ensuring absolute safety of HSR command systems in extreme weather.',
    highlightAr: 'تسليم مواد تأريض دقيقة لأنظمة "الكهربة الأربعة"، لضمان السلامة المطلقة لأنظمة قيادة القطارات عالية السرعة في الطقس القاسي.',
    stats: [
      { value: '142 km', valueEn: '142 km', valueAr: '142 كم', label: '线路长度', labelEn: 'Route Length', labelAr: 'طول المسار' },
      { value: '350 km/h', valueEn: '350 km/h', valueAr: '350 كم/س', label: '设计时速', labelEn: 'Design Speed', labelAr: 'السرعة التصميمية' },
      { value: '运营', valueEn: 'Operational', valueAr: 'تشغيل', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '热带强雷暴区高频雷击',
      '"四电"系统精密接地要求',
      '高铁指挥系统绝对安全',
    ],
    challengesEn: [
      'High-frequency lightning in tropical severe thunderstorm zone',
      'Precision grounding requirements for "Four Electrification" systems',
      'Absolute safety for HSR command systems',
    ],
    challengesAr: [
      'الصواعق عالية التردد في منطقة العواصف الاستوائية الشديدة',
      'متطلبات التأريض الدقيقة لأنظمة "الكهربة الأربعة"',
      'السلامة المطلقة لأنظمة قيادة القطارات عالية السرعة',
    ],
    solutions: [
      '精密接地材料供应',
      '综合防雷保护体系',
      '极端天气安全保障',
    ],
    solutionsEn: [
      'Precision grounding material supply',
      'Integrated lightning protection system',
      'Safety assurance in extreme weather',
    ],
    solutionsAr: [
      'توريد مواد التأريض الدقيقة',
      'نظام حماية متكامل من الصواعق',
      'ضمان السلامة في الطقس القاسي',
    ],
    results: [
      '高铁全线接地电阻低于 0.5Ω',
      '热带雷暴区零雷击事故',
      '系统已安全运营 2 年',
    ],
    resultsEn: [
      'HSR line grounding resistance below 0.5Ω',
      'Zero lightning incidents in tropical thunderstorm zone',
      'System operating safely for 2 years',
    ],
    resultsAr: [
      'مقاومة تأريض خط القطار عالي السرعة أقل من 0.5Ω',
      'صفر حوادث صواعق في منطقة العواصف الاستوائية',
      'النظام يعمل بأمان لمدة 2 سنوات',
    ],
    image: '/images/projects/Transportation/822BDEAC4E118781A901193E9CE9B053A6015C5A_size197_w975_h549.jpg',
  },
  {
    id: 'etihad-rail',
    title: '阿联酋联邦铁路 (Etihad Rail) 二期',
    titleEn: 'Etihad Rail Phase II',
    titleAr: 'المرحلة الثانية من سكة حديد الاتحاد',
    location: '阿联酋',
    locationEn: 'UAE',
    locationAr: 'الإمارات',
    year: '2023',
    background: '连接阿联酋全境并通往沙特边境的国家战略支柱铁路。业主：Etihad Rail，EPC：中国铁建 (CRCC) / 中国交建 (CCCC) 联合体，设计：Egis / Parsons。',
    backgroundEn: 'National strategic pillar railway connecting all of UAE and extending to Saudi border. Owner: Etihad Rail, EPC: CRCC / CCCC Consortium, Design: Egis / Parsons.',
    backgroundAr: 'سكة حديد استراتيجية وطنية تربط جميع أنحاء الإمارات وتمتد إلى الحدود السعودية. المالك: Etihad Rail، EPC: اتحاد CRCC / CCCC، التصميم: Egis / Parsons.',
    highlight: '为跨境路段通信塔及站房提供自适应沙漠气候的免维护防雷系统。',
    highlightEn: 'Provided maintenance-free lightning protection system adaptive to desert climate for cross-border communication towers and station buildings.',
    highlightAr: 'توفير نظام حماية صواعق بدون صيانة متكيف مع مناخ الصحراء لأبراج الاتصالات والمحطات عبر الحدود.',
    stats: [
      { value: '1200 km', valueEn: '1200 km', valueAr: '1200 كم', label: '线路长度', labelEn: 'Route Length', labelAr: 'طول المسار' },
      { value: 'CRCC/CCCC', valueEn: 'CRCC/CCCC', valueAr: 'CRCC/CCCC', label: 'EPC 联合体', labelEn: 'EPC Consortium', labelAr: 'اتحاد EPC' },
      { value: '货运开通', valueEn: 'Freight Open', valueAr: 'شحن مفتوح', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '跨境路段通信塔保护',
      '沙漠气候自适应系统',
      '免维护长期运行要求',
    ],
    challengesEn: [
      'Protection for cross-border communication towers',
      'Desert climate adaptive system',
      'Maintenance-free long-term operation requirements',
    ],
    challengesAr: [
      'حماية أبراج الاتصالات عبر الحدود',
      'نظام متكيف مع مناخ الصحراء',
      'متطلبات تشغيل طويل الأمد بدون صيانة',
    ],
    solutions: [
      '自适应沙漠气候防雷系统',
      '跨境通信塔综合防护',
      '免维护长期运行保障',
    ],
    solutionsEn: [
      'Desert climate adaptive lightning protection system',
      'Integrated protection for cross-border communication towers',
      'Maintenance-free long-term operation assurance',
    ],
    solutionsAr: [
      'نظام حماية صواعق متكيف مع مناخ الصحراء',
      'حماية متكاملة لأبراج الاتصالات عبر الحدود',
      'ضمان التشغيل طويل الأمد بدون صيانة',
    ],
    results: [
      '沙漠环境免维护运行 3 年',
      '通信塔防雷系统一次性验收通过',
      '跨境路段零雷击故障',
    ],
    resultsEn: [
      'Maintenance-free operation in desert environment for 3 years',
      'Communication tower lightning protection system passed acceptance on first attempt',
      'Zero lightning faults on cross-border sections',
    ],
    resultsAr: [
      'تشغيل بدون صيانة في البيئة الصحراوية لمدة 3 سنوات',
      'نظام حماية الصواعق لأبراج الاتصالات اجتاز القبول من المحاولة الأولى',
      'صفر أعطال صواعق في الأقسام عبر الحدود',
    ],
    image: '/images/projects/Transportation/Etihad-Rail-Slideshow-3-1.png',
  },
  {
    id: 'hungary-serbia-railway',
    title: '匈塞铁路 (塞尔维亚段)',
    titleEn: 'Hungary-Serbia Railway (Serbia Section)',
    titleAr: 'سكة حديد المجر-صربيا (القسم الصربي)',
    location: '塞尔维亚',
    locationEn: 'Serbia',
    locationAr: 'صربيا',
    year: '2022',
    background: '"一带一路"欧洲旗舰项目，中国铁路/中国交建承建。',
    backgroundEn: 'Belt and Road flagship project in Europe, constructed by China Railway/China Communications Construction.',
    backgroundAr: 'مشروع رائد للحزام والطريق في أوروبا، من تنفيذ سكة حديد الصين/بناء الاتصالات الصينية.',
    highlight: '提供符合欧洲铁路标准的防雷接地解决方案，确保跨境铁路运行安全。',
    highlightEn: 'Provided lightning protection grounding solutions compliant with European railway standards, ensuring safe cross-border railway operation.',
    highlightAr: 'توفير حلول تأريض حماية صواعق متوافقة مع معايير السكك الحديدية الأوروبية، لضمان التشغيل الآمن للسكك الحديدية عبر الحدود.',
    stats: [
      { value: '欧洲标准', valueEn: 'EU Standard', valueAr: 'معيار الاتحاد الأوروبي', label: '技术规范', labelEn: 'Technical Standard', labelAr: 'المعيار الفني' },
      { value: '首段运营', valueEn: 'First Section Open', valueAr: 'القسم الأول مفتوح', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
      { value: '200 km/h', valueEn: '200 km/h', valueAr: '200 كم/س', label: '设计时速', labelEn: 'Design Speed', labelAr: 'السرعة التصميمية' },
    ],
    challenges: [
      '欧洲铁路标准合规',
      '跨境铁路系统对接',
      '多国协调项目管理',
    ],
    challengesEn: [
      'European railway standard compliance',
      'Cross-border railway system integration',
      'Multi-country coordination project management',
    ],
    challengesAr: [
      'الامتثال لمعايير السكك الحديدية الأوروبية',
      'تكامل نظام السكك الحديدية عبر الحدود',
      'إدارة مشروع التنسيق متعدد الدول',
    ],
    solutions: [
      '符合欧洲标准的防雷方案',
      '跨境铁路接地系统',
      '多国协调工程支持',
    ],
    solutionsEn: [
      'Lightning protection solutions compliant with European standards',
      'Cross-border railway grounding system',
      'Multi-country coordination engineering support',
    ],
    solutionsAr: [
      'حلول حماية صواعق متوافقة مع المعايير الأوروبية',
      'نظام تأريض السكك الحديدية عبر الحدود',
      'دعم هندسي للتنسيق متعدد الدول',
    ],
    results: [
      '符合欧洲铁路 EN 50122 标准',
      '首段 200km 线路已安全运营',
      '跨境系统对接一次性成功',
    ],
    resultsEn: [
      'Compliant with European railway EN 50122 standard',
      'First 200km section operating safely',
      'Cross-border system integration successful on first attempt',
    ],
    resultsAr: [
      'متوافق مع معيار السكك الحديدية الأوروبية EN 50122',
      'القسم الأول 200 كم يعمل بأمان',
      'تكامل النظام عبر الحدود ناجح من المحاولة الأولى',
    ],
    image: '/images/projects/Transportation/4-serbia.jpg',
  },
];

export default async function TransportationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = (zh: string, en: string, ar: string) => {
    if (locale === 'zh') return zh;
    if (locale === 'ar') return ar;
    return en;
  };

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/Transportation/header-tran.jpg"
            alt="Transportation Projects"
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

            <div className="flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30 w-fit">
              <svg className="w-5 h-5 text-blue-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                {t('轨道交通', 'Transportation', 'النقل بالسكك الحديدية')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t('保障跨国高铁与重载铁路的零中断运行', 'Zero-Interruption Operation for HSR & Heavy-Haul Railways', 'تشغيل بدون انقطاع للسكك الحديدية عالية السرعة والثقيلة')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(
                '为机场、铁路和交通枢纽提供关键保护，安全和连续性不可妥协。服务50+项目覆盖8个国家。',
                'Critical protection for airports, railways, and transit hubs where safety and continuity are non-negotiable. Serving 50+ projects across 8 countries.',
                'حماية حرجة للمطارات والسكك الحديدية ومراكز العبور حيث السلامة والاستمرارية لا تُقبل المساومة. خدمة أكثر من 50 مشروع في 8 دول.'
              )}
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">{t('项目案例', 'Projects', 'مشروع')}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">8</div>
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
              {t('深入了解我们在轨道交通行业的标杆项目', 'Explore our landmark projects in the transportation sector', 'استكشف مشاريعنا البارزة في قطاع النقل بالسكك الحديدية')}
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
                      <span className="px-3 py-1 bg-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
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
                      <span className="text-blue-400 font-medium">{t('背景：', 'Background: ', 'الخلفية: ')}</span>
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
                        <div className="text-xl font-bold text-blue-400">{t(stat.value, stat.valueEn, stat.valueAr)}</div>
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
              <Link href="/projects/infrastructure" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('基础设施', 'Infrastructure', 'البنية التحتية')}
              </Link>
            </div>
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
              '联系我们获取专业的轨道交通防雷解决方案',
              'Contact us for professional transportation lightning protection solutions',
              'اتصل بنا للحصول على حلول حماية صواعق احترافية للنقل بالسكك الحديدية'
            )}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
          </Link>
        </div>
      </section>
    </main>
  );
}
