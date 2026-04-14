import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Power & Energy Projects - Green Electric Lightning Protection",
  description: "High-voltage grid and solar grounding systems across deserts and rainforests. UHV substation protection and grid-scale grounding solutions.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const projects = [
  {
    id: 'al-dhafra-solar',
    title: '阿联酋 Al Dhafra 光伏电站 (2.1GW)',
    titleEn: 'Al Dhafra 2.1GW Solar PV Plant, UAE',
    titleAr: 'محطة الطاقة الشمسية الضوئية 2.1 جيجاواط في الظفرة، الإمارات',
    location: '阿联酋',
    locationEn: 'UAE',
    locationAr: 'الإمارات',
    year: '2023',
    background: '中东乃至全球单体容量领先的光伏标杆项目。业主：TAQA / Masdar / EDF / Jinko Power，EPC：中国能建 (CEEC)，设计：CEEC NWPDI。',
    backgroundEn: 'Leading solar benchmark project in the Middle East and globally for single-unit capacity. Owner: TAQA / Masdar / EDF / Jinko Power, EPC: CEEC, Design: CEEC NWPDI.',
    backgroundAr: 'مشروع طاقة شمسية رائد في الشرق الأوسط وعالمياً من حيث السعة أحادية الوحدة. المالك: TAQA / Masdar / EDF / Jinko Power، EPC: CEEC، التصميم: CEEC NWPDI.',
    highlight: '成功解决沙漠极端干旱条件下的接地电阻稳定性难题。',
    highlightEn: 'Successfully solved grounding resistance stability challenges under extreme arid desert conditions.',
    highlightAr: 'حل ناجح لتحديات استقرار مقاومة التأريض في ظروف الصحراء الجافة القاسية.',
    stats: [
      { value: '2.1 GW', valueEn: '2.1 GW', valueAr: '2.1 جيجاواط', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: 'TAQA/Masdar', valueEn: 'TAQA/Masdar', valueAr: 'TAQA/Masdar', label: '业主', labelEn: 'Owner', labelAr: 'المالك' },
      { value: 'CEEC', valueEn: 'CEEC', valueAr: 'CEEC', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
    ],
    challenges: [
      '沙漠极端干旱条件',
      '接地电阻稳定性',
      '全球标杆项目高标准',
    ],
    challengesEn: [
      'Extreme arid desert conditions',
      'Grounding resistance stability',
      'High standards for global benchmark project',
    ],
    challengesAr: [
      'ظروف الصحراء الجافة القاسية',
      'استقرار مقاومة التأريض',
      'معايير عالية لمشروع عالمي رائد',
    ],
    solutions: [
      '沙漠极端干旱环境解决方案',
      '接地电阻稳定性保障',
      '全球标杆级防护体系',
    ],
    solutionsEn: [
      'Solutions for extreme arid desert environment',
      'Grounding resistance stability assurance',
      'Global benchmark-level protection system',
    ],
    solutionsAr: [
      'حلول لبيئة الصحراء الجافة القاسية',
      'ضمان استقرار مقاومة التأريض',
      'نظام حماية بمستوى عالمي رائد',
    ],
    image: '/images/projects/Power & Energy/Image-2-Al-Dhafra-Solar-Project.jpg',
  },
  {
    id: 'hassyan-power',
    title: '迪拜哈斯彦清洁燃煤/天然气电站',
    titleEn: 'Hassyan Clean Coal/Gas Power Plant, Dubai',
    titleAr: 'محطة حسان للطاقة النظيفة بالفحم/الغاز، دبي',
    location: '迪拜',
    locationEn: 'Dubai',
    locationAr: 'دبي',
    year: '2023',
    background: '"一带一路"框架下中东首个清洁煤电站，由哈尔滨电气 (HE) EPC 总包。',
    backgroundEn: 'First clean coal power plant in the Middle East under the Belt and Road framework, EPC by Harbin Electric.',
    backgroundAr: 'أول محطة طاقة نظيفة بالفحم في الشرق الأوسط ضمن إطار الحزام والطريق، من تنفيذ هاربين إليكتريك.',
    highlight: '提供符合中东电网标准的接地网深化设计配套与高标准铜包钢供应。',
    highlightEn: 'Provided grounding network deepening design support compliant with Middle East grid standards and high-standard copper-clad steel supply.',
    highlightAr: 'توفير دعم تصميم متعمق لشبكة التأريض متوافق مع معايير شبكة الشرق الأوسط وتوريد فولاذ مكسو بالنحاس عالي المعايير.',
    stats: [
      { value: '2400 MW', valueEn: '2400 MW', valueAr: '2400 ميجاواط', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: '哈尔滨电气', valueEn: 'Harbin Electric', valueAr: 'هاربين إليكتريك', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: '全并网', valueEn: 'Fully Connected', valueAr: 'متصل بالكامل', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '中东电网标准合规',
      '清洁煤电站特殊防护要求',
      '高标准铜包钢供应',
    ],
    challengesEn: [
      'Middle East grid standard compliance',
      'Special protection requirements for clean coal power plant',
      'High-standard copper-clad steel supply',
    ],
    challengesAr: [
      'الامتثال لمعايير شبكة الشرق الأوسط',
      'متطلبات الحماية الخاصة بمحطة الطاقة النظيفة بالفحم',
      'توريد فولاذ مكسو بالنحاس عالي المعايير',
    ],
    solutions: [
      '接地网深化设计配套',
      '高标准铜包钢材料供应',
      '符合中东电网标准',
    ],
    solutionsEn: [
      'Grounding network deepening design support',
      'High-standard copper-clad steel material supply',
      'Compliant with Middle East grid standards',
    ],
    solutionsAr: [
      'دعم تصميم متعمق لشبكة التأريض',
      'توريد مواد فولاذية مكسوة بالنحاس عالية المعايير',
      'متوافق مع معايير شبكة الشرق الأوسط',
    ],
    image: '/images/projects/Power & Energy/Image-2-Hassyan-Power-Complex.jpg',
  },
  {
    id: 'al-shuaibah-solar',
    title: '沙特阿尔舒艾巴 (Al Shuaibah) 2.6GW 光伏项目',
    titleEn: 'Saudi Al Shuaibah 2.6GW Solar PV Project',
    titleAr: 'مشروع الطاقة الشمسية الشعيبة 2.6 جيجاواط، السعودية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '沙特 Vision 2030 框架下目前单体规模最大的光伏电站。业主：ACWA Power / PIF (沙特主权基金)，EPC：中国能建 (CEEC)，设计：CEEC NWPDI。',
    backgroundEn: 'Largest single-unit solar power plant under Saudi Vision 2030 framework. Owner: ACWA Power / PIF (Saudi Sovereign Fund), EPC: CEEC, Design: CEEC NWPDI.',
    backgroundAr: 'أكبر محطة طاقة شمسية أحادية الوحدة ضمن إطار رؤية السعودية 2030. المالك: ACWA Power / PIF (صندوق السيادة السعودي)، EPC: CEEC، التصميم: CEEC NWPDI.',
    highlight: '针对 2GW+ 大规模方阵提供低成本、高效率的防雷接地集采方案。',
    highlightEn: 'Provided low-cost, high-efficiency lightning protection grounding centralized procurement solution for 2GW+ large-scale arrays.',
    highlightAr: 'توفير حلول توريد مركزي منخفضة التكلفة وعالية الكفاءة لحماية الصواعق والتأريض لمصفوفات واسعة النطاق تزيد عن 2 جيجاواط.',
    stats: [
      { value: '2.6 GW', valueEn: '2.6 GW', valueAr: '2.6 جيجاواط', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: 'ACWA/PIF', valueEn: 'ACWA/PIF', valueAr: 'ACWA/PIF', label: '业主', labelEn: 'Owner', labelAr: 'المالك' },
      { value: 'CEEC', valueEn: 'CEEC', valueAr: 'CEEC', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
    ],
    challenges: [
      '2GW+ 大规模方阵防护',
      '低成本高效率方案',
      '沙特 Vision 2030 高标准',
    ],
    challengesEn: [
      'Protection for 2GW+ large-scale arrays',
      'Low-cost high-efficiency solution',
      'High standards for Saudi Vision 2030',
    ],
    challengesAr: [
      'حماية مصفوفات واسعة النطاق تزيد عن 2 جيجاواط',
      'حلول منخفضة التكلفة وعالية الكفاءة',
      'معايير عالية لرؤية السعودية 2030',
    ],
    solutions: [
      '大规模方阵防雷接地方案',
      '低成本高效率集采供应',
      '符合 Vision 2030 标准',
    ],
    solutionsEn: [
      'Large-scale array lightning protection grounding solution',
      'Low-cost high-efficiency centralized procurement supply',
      'Compliant with Vision 2030 standards',
    ],
    solutionsAr: [
      'حلول حماية الصواعق والتأريض للمصفوفات واسعة النطاق',
      'توريد مركزي منخفض التكلفة وعالي الكفاءة',
      'متوافق مع معايير رؤية 2030',
    ],
    image: '/images/projects/Power & Energy/saudi-arabias-al-shuaibah-1-solar-park-reaches-commercial-operation-1266513.jpg',
  },
];

export default async function PowerEnergyPage({ params }: { params: Promise<{ locale: string }> }) {
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
            src="/images/projects/Substation.jpg"
            alt="Power & Energy Projects"
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

            <div className="flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full mb-6 border border-yellow-500/30 w-fit">
              <svg className="w-5 h-5 text-yellow-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
                {t('电力与新能源', 'Power & Energy', 'الطاقة والطاقة المتجددة')}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {t('跨越沙漠与雨林的高压电网与光伏接地体系', 'High-Voltage Grid & Solar Grounding Across Deserts & Rainforests', 'شبكات الجهد العالي والتأريض الشمسي عبر الصحاري والغابات')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(
                '为特高压变电站和国家电网基础设施提供保护和大规模接地，服务65+项目覆盖12个国家。',
                'UHV substation protection and grid-scale grounding for national power infrastructure. Serving 65+ projects across 12 countries.',
                'حماية محطات الجهد الفائق والتأريض على نطاق الشبكة للبنية التحتية للطاقة الوطنية. خدمة أكثر من 65 مشروع في 12 دولة.'
              )}
            </p>

            <div className="flex gap-6">
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">65+</div>
                <div className="text-sm text-gray-400">{t('项目案例', 'Projects', 'مشروع')}</div>
              </div>
              <div className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">12</div>
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
              {t('深入了解我们在电力能源行业的标杆项目', 'Explore our landmark projects in the power & energy sector', 'استكشف مشاريعنا البارزة في قطاع الطاقة والكهرباء')}
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
                      <span className="px-3 py-1 bg-yellow-500/30 text-yellow-300 rounded-full text-sm font-medium">
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
                      <span className="text-yellow-400 font-medium">{t('背景：', 'Background: ', 'الخلفية: ')}</span>
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
                        <div className="text-xl font-bold text-yellow-400">{t(stat.value, stat.valueEn, stat.valueAr)}</div>
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
              <Link href="/projects/petrochemical" className="px-6 py-3 bg-industrial-800 hover:bg-industrial-700 text-white rounded-lg transition-colors">
                {t('石化与天然气', 'Petrochemical & Natural Gas', 'البتر والكيميائيات والغاز الطبيعي')}
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

      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('有电力能源项目需求？', 'Have a Power & Energy Project?', 'لديك مشروع طاقة أو كهرباء؟')}
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取专业的高压电网和新能源防雷解决方案',
              'Contact us for professional high-voltage grid and renewable energy lightning protection solutions',
              'اتصل بنا للحصول على حلول حماية صواعق احترافية لشبكات الجهد العالي والطاقة المتجددة'
            )}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-yellow-600 rounded-lg hover:bg-yellow-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
          </Link>
        </div>
      </section>
    </main>
  );
}
