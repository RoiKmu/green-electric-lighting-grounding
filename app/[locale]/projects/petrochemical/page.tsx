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
    en: 'Petrochemical & Natural Gas Projects - Green Electric Lightning Protection',
    zh: '石化与天然气项目 - 格林电工防雷接地',
    ar: 'مشاريع البتروكيميائيات والغاز الطبيعي - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Explosion-proof lightning protection for petrochemical & natural gas facilities, oil depots, refineries, and LNG terminals in extreme heat and high corrosion environments.',
    zh: '为石化与天然气设施、油库、炼油厂和LNG终端提供防爆防雷保护，适用于极端高温和高腐蚀环境。',
    ar: 'حماية من الصواعق مقاومة للانفجارات لمنشآت البتروكيميائيات والغاز الطبيعي ومستودعات النفط والمصافي ومحطات الغاز الطبيعي المسال في بيئات الحرارة الشديدة والتآكل العالي.'
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
    id: 'jafurah-gas-field',
    title: '沙特 Jafurah 非常规气田开发项目',
    titleEn: 'Saudi Jafurah Unconventional Gas Field Development',
    titleAr: 'مشروع تطوير حقل جافورا غير التقليدي للغاز، السعودية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '中东最大的非常规天然气田，沙特能源转型的战略核心。业主：沙特阿美 (Saudi Aramco)，EPC：中国石化 (Sinopec) / SEPCO，设计：Worley / Aramco Engineering。',
    backgroundEn: 'Largest unconventional gas field in the Middle East, strategic core of Saudi energy transition. Owner: Saudi Aramco, EPC: Sinopec / SEPCO, Design: Worley / Aramco Engineering.',
    backgroundAr: 'أكبر حقل غاز غير تقليدي في الشرق الأوسط، جوهر التحول Energy الاستراتيجي السعودي. المالك: أرامكو السعودية، EPC: سينوبك / SEPCO، التصميم: Worley / Aramco Engineering.',
    highlight: '严格执行 Aramco SAES 标准，提供沙漠高电阻率环境下的化学降阻解决方案。',
    highlightEn: 'Strictly executed Aramco SAES standards, provided chemical resistance reduction solutions for desert high-resistivity environment.',
    highlightAr: 'تنفيذ صارم لمعايير Aramco SAES، توفير حلول خفض المقاومة الكيميائية لبيئة الصحراء عالية المقاومة.',
    stats: [
      { value: 'Aramco', valueEn: 'Aramco', valueAr: 'أرامكو', label: '业主/标准', labelEn: 'Owner/Standard', labelAr: 'المالك/المعيار' },
      { value: 'Sinopec/SEPCO', valueEn: 'Sinopec/SEPCO', valueAr: 'سينوبك/SEPCO', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: '在建', valueEn: 'In Progress', valueAr: 'قيد التنفيذ', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      'Aramco SAES 标准严格合规',
      '沙漠高电阻率环境降阻',
      '非常规气田特殊防护要求',
    ],
    challengesEn: [
      'Strict compliance with Aramco SAES standards',
      'Resistance reduction in desert high-resistivity environment',
      'Special protection requirements for unconventional gas field',
    ],
    challengesAr: [
      'الامتثال الصارم لمعايير Aramco SAES',
      'خفض المقاومة في بيئة الصحراء عالية المقاومة',
      'متطلبات حماية خاصة لحقل الغاز غير التقليدي',
    ],
    solutions: [
      '化学降阻解决方案',
      '符合 Aramco SAES 标准设计',
      '沙漠环境专用防腐材料',
    ],
    solutionsEn: [
      'Chemical resistance reduction solutions',
      'Design compliant with Aramco SAES standards',
      'Anti-corrosion materials for desert environment',
    ],
    solutionsAr: [
      'حلول خفض المقاومة الكيميائية',
      'تصميم متوافق مع معايير Aramco SAES',
      'مواد مضادة للتآكل لبيئة الصحراء',
    ],
    results: [
      '设计目标：沙漠环境接地电阻 ≤ 1Ω',
      '符合 Aramco SAES-P-111 设计标准',
      '采用化学降阻方案应对高电阻率土壤',
    ],
    resultsEn: [
      'Design target: Desert environment grounding resistance ≤ 1Ω',
      'Designed to Aramco SAES-P-111 standard',
      'Chemical resistance reduction solution for high-resistivity soil',
    ],
    resultsAr: [
      'هدف التصميم: مقاومة التأريض في البيئة الصحراوية ≤ 1Ω',
      'تصميم متوافق مع معيار Aramco SAES-P-111',
      'حل خفض المقاومة الكيميائي للتربة عالية المقاومة',
    ],
    image: '/images/projects/Petrochemical/20250909145621.png',
  },
  {
    id: 'al-zour-refinery',
    title: '科威特阿祖尔 (Al-Zour) 炼油厂',
    titleEn: 'Kuwait Al-Zour Refinery',
    titleAr: 'مصفاة الزور الكويتية',
    location: '科威特',
    locationEn: 'Kuwait',
    locationAr: 'الكويت',
    year: '2022',
    background: '中东规模最大的炼油厂项目之一。业主：科威特集成石油工业公司 (KIPIC)，EPC：中石化五建 / 塞内卡 (Sinopec / TECNICAS REUNIDAS)，设计：Amec Foster Wheeler。',
    backgroundEn: 'One of the largest refinery projects in the Middle East. Owner: Kuwait Integrated Petroleum Industries Company (KIPIC), EPC: Sinopec Fifth Construction / TECNICAS REUNIDAS, Design: Amec Foster Wheeler.',
    backgroundAr: 'واحدة من أكبر مشاريع المصافي في الشرق الأوسط. المالك: شركة الكويت للصناعات البترولية المتكاملة (KIPIC)، EPC: سينوبك للإنشاءات الخامسة / TECNICAS REUNIDAS، التصميم: Amec Foster Wheeler.',
    highlight: '提供全场防雷集采供应，确保重腐蚀沿海工况下接地系统的超长设计寿命。',
    highlightEn: 'Provided full-site lightning protection centralized procurement supply, ensuring extended design life of grounding system under heavy coastal corrosion conditions.',
    highlightAr: 'توفير توريد مركزي لحماية الصواعق للموقع بالكامل، لضمان عمر تصميمي طويل لنظام التأريض في ظروف التآكل الساحلي الشديد.',
    stats: [
      { value: 'KIPIC', valueEn: 'KIPIC', valueAr: 'KIPIC', label: '业主', labelEn: 'Owner', labelAr: 'المالك' },
      { value: 'Sinopec/TR', valueEn: 'Sinopec/TR', valueAr: 'Sinopec/TR', label: 'EPC 联合体', labelEn: 'EPC Consortium', labelAr: 'اتحاد EPC' },
      { value: '投产', valueEn: 'Operational', valueAr: 'تشغيل', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '重腐蚀沿海工况',
      '接地系统超长设计寿命',
      '大规模防雷集采供应',
    ],
    challengesEn: [
      'Heavy coastal corrosion conditions',
      'Extended design life for grounding system',
      'Large-scale lightning protection centralized procurement',
    ],
    challengesAr: [
      'ظروف التآكل الساحلي الشديد',
      'عمر تصميمي طويل لنظام التأريض',
      'توريد مركزي واسع النطاق لحماية الصواعق',
    ],
    solutions: [
      '重腐蚀环境专用接地材料',
      '全场防雷集采供应',
      '超长设计寿命保障',
    ],
    solutionsEn: [
      'Specialized grounding materials for heavy corrosion environment',
      'Full-site lightning protection centralized procurement supply',
      'Extended design life assurance',
    ],
    solutionsAr: [
      'مواد تأريض متخصصة لبيئة التآكل الشديد',
      'توريد مركزي لحماية الصواعق للموقع بالكامل',
      'ضمان العمر التصميمي الطويل',
    ],
    results: [
      '沿海腐蚀环境接地系统寿命达 35 年',
      '接地电阻从 12Ω 降至 0.6Ω',
      '通过 KIPIC 严格验收',
    ],
    resultsEn: [
      'Coastal corrosion environment grounding system lifespan reached 35 years',
      'Grounding resistance reduced from 12Ω to 0.6Ω',
      'Passed KIPIC stringent acceptance',
    ],
    resultsAr: [
      'عمر نظام التأريض في بيئة التآكل الساحلي وصل إلى 35 سنة',
      'مقاومة التأريض انخفضت من 12Ω إلى 0.6Ω',
      'اجتاز القبول الصارم من KIPIC',
    ],
    image: '/images/projects/Petrochemical/Sinopec completes central unit at Al-Zour refinery project in Kuwait.jpg',
  },
  {
    id: 'fadhili-gas-station',
    title: '沙特 Fadhili 气站增压站项目',
    titleEn: 'Saudi Fadhili Gas Station Booster Project',
    titleAr: 'مشروع محطة تعزيز غاز الفضيلي، السعودية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '中油工程 (CPECC) 承建，沙特阿美关键天然气增压设施。',
    backgroundEn: 'Constructed by CPECC, critical natural gas booster facility for Saudi Aramco.',
    backgroundAr: 'من تنفيذ CPECC، منشأة تعزيز الغاز الطبيعي الحرجة لأرامكو السعودية.',
    highlight: '提供符合沙特阿美标准的防雷接地解决方案，确保气站运行安全。',
    highlightEn: 'Provided lightning protection grounding solutions compliant with Saudi Aramco standards, ensuring safe gas station operation.',
    highlightAr: 'توفير حلول تأريض حماية صواعق متوافقة مع معايير أرامكو السعودية، لضمان التشغيل الآمن لمحطة الغاز.',
    stats: [
      { value: 'CPECC', valueEn: 'CPECC', valueAr: 'CPECC', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: 'Aramco', valueEn: 'Aramco', valueAr: 'أرامكو', label: '标准认证', labelEn: 'Standard Certification', labelAr: 'شهادة المعيار' },
      { value: '在建', valueEn: 'In Progress', valueAr: 'قيد التنفيذ', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '天然气增压站防爆要求',
      '沙特阿美高标准合规',
      '沙漠环境材料耐久性',
    ],
    challengesEn: [
      'Explosion-proof requirements for gas booster station',
      'Saudi Aramco high standard compliance',
      'Material durability in desert environment',
    ],
    challengesAr: [
      'متطلبات مقاومة الانفجار لمحطة تعزيز الغاز',
      'الامتثال للمعايير العالية لأرامكو السعودية',
      'متانة المواد في بيئة الصحراء',
    ],
    solutions: [
      '防爆防雷接地系统',
      '高标准材料供应',
      '专业工程支持',
    ],
    solutionsEn: [
      'Explosion-proof lightning protection grounding system',
      'High-standard material supply',
      'Professional engineering support',
    ],
    solutionsAr: [
      'نظام تأريض حماية صواعق مقاوم للانفجار',
      'توريد مواد عالية المعايير',
      'دعم هندسي متخصص',
    ],
    results: [
      '设计目标：接地电阻 ≤ 0.5Ω',
      '符合 Aramco SAES-P-111 防爆标准',
      '沙漠环境专用防腐材料设计',
    ],
    resultsEn: [
      'Design target: Grounding resistance ≤ 0.5Ω',
      'Designed to Aramco SAES-P-111 explosion-proof standard',
      'Anti-corrosion materials design for desert environment',
    ],
    resultsAr: [
      'هدف التصميم: مقاومة التأريض ≤ 0.5Ω',
      'تصميم متوافق مع معيار Aramco SAES-P-111 للمقاومة للانفجار',
      'تصميم مواد مضادة للتآكل للبيئة الصحراوية',
    ],
    image: '/images/projects/Petrochemical/fadhili-gas-plant.jpg',
  },
];

export default async function PetrochemicalPage({ params }: { params: Promise<{ locale: string }> }) {
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
            src="/images/projects/oil.jpg"
            alt="Petrochemical Projects"
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

            <div className="flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6 border border-orange-500/30 w-fit">
              <svg className="w-5 h-5 text-orange-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">
                {t('石化与天然气', 'Petrochemical & Natural Gas', 'البتر والكيميائيات والغاز الطبيعي')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t('应对极热与高腐蚀环境的防爆级保护，覆盖天然气存储设施', 'Explosion-Proof Protection for Extreme Conditions, Covering Natural Gas Storage Facilities', 'حماية مقاومة للانفجارات للظروف القاسية، تغطي منشآت تخزين الغاز الطبيعي')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(
                '为油库、炼油厂、化工厂和天然气存储设施提供符合严格安全合规的防爆保护，服务80+项目覆盖15个国家。',
                'Explosion-proof protection for oil depots, refineries, chemical plants, and natural gas storage facilities with strict safety compliance. Serving 80+ projects across 15 countries.',
                'حماية مقاومة للانفجارات لمستودعات النفط والمصافي ومصانع الكيماويات ومنشآت تخزين الغاز الطبيعي مع امتثال صارم للسلامة. خدمة أكثر من 80 مشروع في 15 دولة.'
              )}
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-orange-400">80+</div>
                <div className="text-sm text-gray-400">{t('项目案例', 'Projects', 'مشروع')}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-orange-400">15</div>
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
              {t('深入了解我们在石化与天然气行业的标杆项目', 'Explore our landmark projects in the petrochemical & natural gas sector', 'استكشف مشاريعنا البارزة في قطاع البتروكيميائية والغاز الطبيعي')}
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
                      <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
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
                      <span className="text-orange-400 font-medium">{t('背景：', 'Background: ', 'الخلفية: ')}</span>
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
                        <div className="text-xl font-bold text-orange-400">{t(stat.value, stat.valueEn, stat.valueAr)}</div>
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
              <Link href="/projects/power-energy" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('电力与新能源', 'Power & Energy', 'الطاقة والطاقة المتجددة')}
              </Link>
              <Link href="/projects/transportation" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('轨道交通', 'Transportation', 'النقل بالسكك الحديدية')}
              </Link>
              <Link href="/projects/infrastructure" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('基础设施', 'Infrastructure', 'البنية التحتية')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('有石化与天然气项目需求？', 'Have a Petrochemical & Natural Gas Project?', 'لديك مشروع بتروكيميائي أو غاز طبيعي؟')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的防爆防雷解决方案和有竞争力的报价',
              'Contact us for professional explosion-proof lightning protection solutions and competitive pricing',
              'اتصل بنا للحصول على حلول حماية صواعق مقاومة للانفجار وأسعار تنافسية'
            )}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
          </Link>
        </div>
      </section>
    </main>
  );
}
