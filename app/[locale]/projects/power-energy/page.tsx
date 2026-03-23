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
    background: '中国能建 (CEEC) 主导，中东光伏标杆项目。',
    backgroundEn: 'Led by CEEC, Middle East solar benchmark project.',
    backgroundAr: 'قيادة CEEC، مشروع طاقة شمسية رائد في الشرق الأوسط.',
    highlight: '交付了定制化接地模块及数万套放热焊接耗材，攻克极端干燥沙漠土壤电阻率调节难题。',
    highlightEn: 'Delivered customized grounding modules and tens of thousands of exothermic welding consumables, overcoming extreme dry desert soil resistivity challenges.',
    highlightAr: 'تسليم وحدات تأريض مخصصة وعشرات الآلاف من مستهلكات اللحام الحراري، للتغلب على تحديات مقاومة تربة الصحراء الجافة الشديدة.',
    stats: [
      { value: '2.1 GW', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: '数万套', label: '放热焊接耗材', labelEn: 'Welding Consumables', labelAr: 'مستهلكات اللحام' },
      { value: '并网', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '极端干燥沙漠土壤电阻率调节',
      '数万个组件方阵的均压网',
      '大规模物料物流与成本控制',
    ],
    challengesEn: [
      'Extreme dry desert soil resistivity adjustment',
      'Equalizing network for tens of thousands of component arrays',
      'Large-scale material logistics and cost control',
    ],
    challengesAr: [
      'تعديل مقاومة تربة الصحراء الجافة الشديدة',
      'شبكة توازن لعشرات الآلاف من مصفوفات المكونات',
      'لوجستيات المواد واسعة النطاق والتحكم في التكاليف',
    ],
    solutions: [
      '定制化接地模块应对高电阻率',
      '放热焊接耗材批量供应',
      '均压网优化设计',
    ],
    solutionsEn: [
      'Customized grounding modules for high resistivity',
      'Batch supply of exothermic welding consumables',
      'Optimized equalizing network design',
    ],
    solutionsAr: [
      'وحدات تأريض مخصصة للمقاومة العالية',
      'توريد دفعات من مستهلكات اللحام الحراري',
      'تصميم محسن لشبكة التوازن',
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
      { value: '2400 MW', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: '哈尔滨电气', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: '全并网', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
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
    id: 'al-shuaib-solar',
    title: '沙特阿尔舒巴赫光伏项目 (2.6GW)',
    titleEn: 'Al Shuaib Solar Project 2.6GW, Saudi Arabia',
    titleAr: 'مشروع الطاقة الشمسية الشعيبة 2.6 جيجاواط، السعودية',
    location: '沙特阿拉伯',
    locationEn: 'Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    year: '2024',
    background: '中国能建 (CEEC) 承建，沙特大型光伏项目。',
    backgroundEn: 'Constructed by CEEC, large-scale solar project in Saudi Arabia.',
    backgroundAr: 'من تنفيذ CEEC، مشروع طاقة شمسية واسع النطاق في المملكة العربية السعودية.',
    highlight: '针对沙漠高温环境提供大规模光伏接地系统解决方案。',
    highlightEn: 'Provided large-scale solar grounding system solutions for desert high-temperature environment.',
    highlightAr: 'توفير حلول نظام التأريض للطاقة الشمسية واسع النطاق لبيئة الصحراء ذات درجة الحرارة العالية.',
    stats: [
      { value: '2.6 GW', label: '装机容量', labelEn: 'Capacity', labelAr: 'السعة' },
      { value: '中国能建', label: 'EPC 总包', labelEn: 'EPC Contractor', labelAr: 'مقاول EPC' },
      { value: '在建', label: '项目状态', labelEn: 'Status', labelAr: 'الحالة' },
    ],
    challenges: [
      '沙漠高温环境接地挑战',
      '大规模光伏场站防护',
      '沙特电网标准合规',
    ],
    challengesEn: [
      'Grounding challenges in desert high-temperature environment',
      'Large-scale solar farm protection',
      'Saudi grid standard compliance',
    ],
    challengesAr: [
      'تحديات التأريض في بيئة الصحراء ذات درجة الحرارة العالية',
      'حماية محطات الطاقة الشمسية واسعة النطاق',
      'الامتثال لمعايير شبكة الكهرباء السعودية',
    ],
    solutions: [
      '沙漠环境专用接地材料',
      '大规模光伏场站防护方案',
      '符合沙特电网标准',
    ],
    solutionsEn: [
      'Specialized grounding materials for desert environment',
      'Large-scale solar farm protection solutions',
      'Compliant with Saudi grid standards',
    ],
    solutionsAr: [
      'مواد تأريض متخصصة لبيئة الصحراء',
      'حلول حماية محطات الطاقة الشمسية واسعة النطاق',
      'متوافق مع معايير شبكة الكهرباء السعودية',
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
                        <div className="text-xl font-bold text-yellow-400">{stat.value}</div>
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
