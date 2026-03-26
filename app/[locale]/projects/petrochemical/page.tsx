import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Petrochemical & Natural Gas Projects - Green Electric Lightning Protection",
  description: "Explosion-proof lightning protection for petrochemical & natural gas facilities, oil depots, refineries, and LNG terminals in extreme heat and high corrosion environments.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const projects = [
  {
    id: 'jafurah-gas-field',
    title: '沙特 Jafurah 气田二期',
    titleEn: 'Saudi Jafurah Gas Field Phase II',
    titleAr: 'المرحلة الثانية من حقل جافورا للغاز، السعودية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '中石化 (Sinopec) 承建，沙特阿美 (Aramco) 超大型天然气开发项目。',
    backgroundEn: 'Constructed by Sinopec, mega natural gas development project for Saudi Aramco.',
    backgroundAr: 'من تنفيذ سينوبك، مشروع تطوير ضخم للغاز الطبيعي لأرامكو السعودية.',
    highlight: '针对沙漠环境提供防爆级防雷接地系统，符合沙特阿美最高安全标准。',
    highlightEn: 'Provided explosion-proof lightning protection grounding system for desert environment, meeting Saudi Aramco highest safety standards.',
    highlightAr: 'توفير نظام تأريض حماية صواعق مقاوم للانفجار لبيئة الصحراء، يلبي أعلى معايير السلامة لأرامكو السعودية.',
    stats: [
      { value: 'Aramco', valueEn: 'Aramco', valueAr: 'أرامكو', label: '标准认证', labelEn: 'Standard Certification', labelAr: 'شهادة المعيار' },
      { value: '中石化', valueEn: 'Sinopec', valueAr: 'سينوبك', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: '在建', valueEn: 'In Progress', valueAr: 'قيد التنفيذ', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '沙特阿美严苛验收标准',
      '沙漠极端环境防爆要求',
      '大规模天然气设施防护',
    ],
    challengesEn: [
      'Stringent Saudi Aramco acceptance standards',
      'Explosion-proof requirements for extreme desert environment',
      'Large-scale natural gas facility protection',
    ],
    challengesAr: [
      'معايير قبول أرامكو السعودية الصارمة',
      'متطلبات مقاومة الانفجار لبيئة الصحراء القاسية',
      'حماية منشآت الغاز الطبيعي واسعة النطاق',
    ],
    solutions: [
      '防爆级防雷接地系统',
      '符合 Aramco 标准的设计方案',
      '沙漠环境专用防腐材料',
    ],
    solutionsEn: [
      'Explosion-proof lightning protection grounding system',
      'Design solutions compliant with Aramco standards',
      'Anti-corrosion materials for desert environment',
    ],
    solutionsAr: [
      'نظام تأريض حماية صواعق مقاوم للانفجار',
      'حلول تصميم متوافقة مع معايير أرامكو',
      'مواد مضادة للتآكل لبيئة الصحراء',
    ],
    image: '/images/projects/Petrochemical/20250909145621.png',
  },
  {
    id: 'kuwait-al-zour-refinery',
    title: '科威特阿祖尔炼油厂',
    titleEn: 'Kuwait Al-Zour Refinery',
    titleAr: 'مصفاة الزور الكويتية',
    location: '科威特',
    locationEn: 'Kuwait',
    locationAr: 'الكويت',
    year: '2022',
    background: '中石化五建 (Sinopec) 承建，中东地区规模最大的炼油厂之一。',
    backgroundEn: 'Constructed by Sinopec Fifth Construction, one of the largest refineries in the Middle East.',
    backgroundAr: 'من تنفيذ سينوبك للإنشاءات الخامسة، واحدة من أكبر المصافي في الشرق الأوسط.',
    highlight: '提供了全场防雷集采供应，确保复杂工况下接地电阻持续达标。',
    highlightEn: 'Provided full-site lightning protection centralized procurement supply, ensuring grounding resistance continues to meet standards under complex conditions.',
    highlightAr: 'توفير توريد مركزي لحماية الصواعق للموقع بالكامل، لضمان استمرار مقاومة التأريض في تلبية المعايير.',
    stats: [
      { value: '全厂', valueEn: 'Full Site', valueAr: 'الموقع بالكامل', label: '防雷集采供应', labelEn: 'Full-Site Supply', labelAr: 'توريد الموقع بالكامل' },
      { value: '50°C+', valueEn: '50°C+', valueAr: '50°C+', label: '极端高温耐受', labelEn: 'Extreme Heat Resistance', labelAr: 'مقاومة الحرارة الشديدة' },
      { value: '投产', valueEn: 'Operational', valueAr: 'تشغيل', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '极端高温下的材料稳定性',
      '大面积等电位连接',
      '复杂工况下接地电阻控制',
    ],
    challengesEn: [
      'Material stability under extreme high temperatures',
      'Large-area equipotential bonding',
      'Grounding resistance control under complex conditions',
    ],
    challengesAr: [
      'استقرار المواد في درجات الحرارة الشديدة',
      'التوصيل متساوي الجهد للمساحات الكبيرة',
      'التحكم في مقاومة التأريض في الظروف المعقدة',
    ],
    solutions: [
      '耐高温特种接地材料',
      '全场等电位连接系统',
      '持续达标的接地电阻保障',
    ],
    solutionsEn: [
      'High-temperature resistant specialty grounding materials',
      'Full-site equipotential bonding system',
      'Continuously compliant grounding resistance assurance',
    ],
    solutionsAr: [
      'مواد تأريض متخصصة مقاومة لدرجات الحرارة العالية',
      'نظام توصيل متساوي الجهد للموقع بالكامل',
      'ضمان استمرار مقاومة التأريض المتوافقة',
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
