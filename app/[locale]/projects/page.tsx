import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import WorldMap from "@/components/WorldMap";
import ProjectsScrollSnapHandler from "@/components/ProjectsScrollSnapHandler";

export const metadata: Metadata = {
  title: "Projects - Green Electric Lightning Protection & Grounding Solutions",
  description: "Empowering Global EPC Deliveries - Deep involvement in 265+ landmark EPC projects worldwide, specializing in Middle East and Southeast Asia harsh environment lightning protection delivery.",
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const industries = [
  {
    id: 'petrochemical',
    title: '石化与天然气',
    titleEn: 'Petrochemical & Natural Gas',
    titleAr: 'البتر والكيميائيات والغاز الطبيعي',
    description: '应对极热与高腐蚀环境的防爆级保护，覆盖天然气存储设施',
    descriptionEn: 'Explosion-proof protection for extreme heat and high corrosion environments, covering natural gas storage facilities',
    descriptionAr: 'حماية مقاومة للانفجارات للحرارة الشديدة والبيئات شديدة التآكل، تغطي منشآت تخزين الغاز الطبيعي',
    image: '/images/projects/oil.jpg',
    href: '/projects/petrochemical',
    stats: { projects: '80+', countries: '15' },
  },
  {
    id: 'power-energy',
    title: '电力与新能源',
    titleEn: 'Power & Energy',
    titleAr: 'الطاقة والطاقة المتجددة',
    description: '跨越沙漠与雨林的高压电网与光伏接地体系',
    descriptionEn: 'High-voltage grid and solar grounding systems across deserts and rainforests',
    descriptionAr: 'شبكات الجهد العالي وأنظمة التأريض الشمسية عبر الصحاري والغابات',
    image: '/images/projects/Substation.jpg',
    href: '/projects/power-energy',
    stats: { projects: '65+', countries: '12' },
  },
  {
    id: 'transportation',
    title: '轨道交通',
    titleEn: 'Transportation',
    titleAr: 'النقل بالسكك الحديدية',
    description: '保障跨国高铁与重载铁路的零中断运行',
    descriptionEn: 'Ensuring zero-interruption operation for cross-border HSR and heavy-haul railways',
    descriptionAr: 'تشغيل بدون انقطاع للسكك الحديدية عالية السرعة والثقيلة',
    image: '/images/projects/Transportation/header-tran.jpg',
    href: '/projects/transportation',
    stats: { projects: '50+', countries: '8' },
  },
  {
    id: 'infrastructure',
    title: '基础设施',
    titleEn: 'Infrastructure',
    titleAr: 'البنية التحتية',
    description: '商业中心、场馆与大型基础设施的系统级防护',
    descriptionEn: 'System-level protection for commercial centers, stadiums, and large infrastructure',
    descriptionAr: 'حماية على مستوى النظام للمراكز التجارية والملاعب وبنية تحتية كبيرة',
    image: '/images/projects/Infrastructure/P020220715559196933502.jpg',
    href: '/projects/infrastructure',
    stats: { projects: '70+', countries: '18' },
  },
];

const globalStats = [
  { value: '265+', label: '头部EPC项目', labelEn: 'Top EPC Projects', labelAr: 'مشاريع EPC الرائدة' },
  { value: '30+', label: '服务国家', labelEn: 'Countries Served', labelAr: 'دولة نخدمها' },
  { value: '100%', label: '验收通过率', labelEn: 'Acceptance Rate', labelAr: 'معدل القبول' },
  { value: '0', label: '安全事故', labelEn: 'Safety Incidents', labelAr: 'حوادث السلامة' },
];

const highlightedCountries = [
  { name: '沙特阿拉伯', nameEn: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', region: '中东', regionEn: 'Middle East', regionAr: 'الشرق الأوسط' },
  { name: '阿联酋', nameEn: 'UAE', nameAr: 'الإمارات', region: '中东', regionEn: 'Middle East', regionAr: 'الشرق الأوسط' },
  { name: '印度尼西亚', nameEn: 'Indonesia', nameAr: 'إندونيسيا', region: '东南亚', regionEn: 'Southeast Asia', regionAr: 'جنوب شرق آسيا' },
  { name: '马来西亚', nameEn: 'Malaysia', nameAr: 'ماليزيا', region: '东南亚', regionEn: 'Southeast Asia', regionAr: 'جنوب شرق آسيا' },
  { name: '尼日利亚', nameEn: 'Nigeria', nameAr: 'نيجيريا', region: '非洲', regionEn: 'Africa', regionAr: 'أفريقيا' },
  { name: '埃及', nameEn: 'Egypt', nameAr: 'مصر', region: '非洲', regionEn: 'Africa', regionAr: 'أفريقيا' },
  { name: '巴基斯坦', nameEn: 'Pakistan', nameAr: 'باكستان', region: '西亚', regionEn: 'West Asia', regionAr: 'غرب آسيا' },
  { name: '巴西', nameEn: 'Brazil', nameAr: 'البرازيل', region: '拉丁美洲', regionEn: 'Latin America', regionAr: 'أمريكا اللاتينية' },
];

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = (zh: string, en: string, ar: string) => {
    if (locale === 'zh') return zh;
    if (locale === 'ar') return ar;
    return en;
  };

  return (
    <main className="min-h-screen bg-industrial-950">
      <ProjectsScrollSnapHandler />
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden scroll-mt-0">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/golbalepc.jpg"
            alt="Global EPC Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-900/80 to-industrial-950/70" />
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="animate-zoom-in">
              <div className="inline-flex items-center px-4 py-2 bg-green-electric-600/20 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30">
                <div className="w-2 h-2 bg-green-electric-400 rounded-full me-3 animate-pulse" />
                <span className="text-sm font-semibold text-green-electric-300 uppercase tracking-wider">
                  {t('中国EPC出海金牌防雷配套商', 'Premier Lightning Protection Partner for Chinese EPCs Going Global', 'شريك حماية الصواعق الأول لمقاولي EPC الصينيين المتجهين عالمياً')}
                </span>
              </div>
            </div>

            <h1 className="animate-zoom-in text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight" style={{ transitionDelay: '100ms' }}>
              {locale === 'zh' ? (
                <>
                  护航中国 <span className="text-green-electric-400">EPC</span>
                  <br />
                  走向世界
                </>
              ) : locale === 'ar' ? (
                <>
                  تمكين تسليمات
                  <br />
                  <span className="text-green-electric-400">EPC</span> العالمية
                </>
              ) : (
                <>
                  Empowering Global
                  <br />
                  <span className="text-green-electric-400">EPC</span> Deliveries
                </>
              )}
            </h1>
            
            <p className="animate-zoom-in text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl" style={{ transitionDelay: '200ms' }}>
              {t(
                '深度参与全球 265+ 头部EPC的工程项目，聚焦中东与东南亚严苛环境防雷交付。',
                'Deep involvement in 265+ landmark EPC projects worldwide, specializing in Middle East and Southeast Asia harsh environment lightning protection delivery.',
                'مشاركة عميقة في أكثر من 265 مشروع EPC بارز حول العالم، متخصصون في تسليم حماية الصواعق في البيئات القاسية بالشرق الأوسط وجنوب شرق آسيا.'
              )}
            </p>

            <div className="animate-zoom-in grid grid-cols-2 md:grid-cols-4 gap-6 mb-10" style={{ transitionDelay: '300ms' }}>
              {globalStats.map((stat, index) => (
                <div key={index} className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 p-5 rounded-xl hover:border-green-electric-500/50 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-green-electric-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{t(stat.label, stat.labelEn, stat.labelAr)}</div>
                </div>
              ))}
            </div>

            <div className="animate-zoom-in flex flex-wrap gap-4" style={{ transitionDelay: '400ms' }}>
              <Link
                href="/projects/petrochemical"
                className="group px-8 py-4 bg-green-electric-600 hover:bg-green-electric-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
              >
                {t('探索项目案例', 'Explore Projects', 'استكشف المشاريع')}
                <svg className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 hover:border-green-electric-400 text-white rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {t('联系我们', 'Contact Us', 'اتصل بنا')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 start-0 end-0 h-40 bg-gradient-to-t from-industrial-950 to-transparent z-10 pointer-events-none" />
      </section>

      <section id="global-footprint" className="py-24 bg-industrial-900 scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {t('全球出海版图', 'Global Footprint', 'البصمة العالمية')}
            </span>
            <h2 className="animate-slide-up text-3xl md:text-5xl font-bold text-white mb-4" style={{ transitionDelay: '100ms' }}>
              {t('一带一路沿线亮点', 'Belt & Road Highlights', 'أبرز مشروعات الحزام والطريق')}
            </h2>
            <p className="animate-slide-up text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed" style={{ transitionDelay: '200ms' }}>
              {t(
                '熟悉主流国际标准（IEC/UL），无缝对接中国头部 EPC 总包方工作流，提供从深化设计、物资集采到海外现场督导的一站式闭环服务。',
                'Familiar with mainstream international standards (IEC/UL), seamlessly integrating with Chinese top EPC contractors workflow, providing one-stop closed-loop service from detailed design, material procurement to overseas on-site supervision.',
                'على دراية بالمعايير الدولية الرئيسية (IEC/UL)، التكامل السلس مع سير عمل كبار مقاولي EPC الصينيين، وتقديم خدمة شاملة مغلقة الحلقة من التصميم التفصيلي وشراء المواد إلى الإشراف الميداني في الخارج.'
              )}
            </p>
          </div>

          <div className="animate-zoom-in relative bg-industrial-800/50 rounded-3xl p-8 md:p-12 border border-industrial-700" style={{ transitionDelay: '300ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 pt-0">
                <div className="space-y-4">
                  {highlightedCountries.map((country, index) => (
                    <div key={index} className="animate-slide-left" style={{ transitionDelay: `${(index + 1) * 80}ms` }}>
                      <div className="flex items-center justify-between p-4 bg-industrial-900/50 rounded-xl border border-industrial-700 hover:border-green-electric-500/50 transition-colors">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-electric-400 rounded-full me-4" />
                          <span className="text-white font-medium">{t(country.name, country.nameEn, country.nameAr)}</span>
                        </div>
                        <span className="text-sm text-gray-400 px-3 py-1 bg-industrial-800 rounded-full">
                          {t(country.region, country.regionEn, country.regionAr)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 relative h-[450px] md:h-[600px] bg-industrial-800 rounded-2xl overflow-hidden">
                <WorldMap locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution-cases" className="py-24 bg-industrial-950 scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {t('解决方案案例', 'Solution Cases', 'حالات الحلول')}
            </span>
            <h2 className="animate-slide-up text-3xl md:text-5xl font-bold text-white mb-4" style={{ transitionDelay: '100ms' }}>
              {t('聚焦核心行业', 'Focus on Core Industries', 'التركيز على الصناعات الأساسية')}
            </h2>
            <p className="animate-slide-up text-xl text-gray-400 max-w-3xl mx-auto" style={{ transitionDelay: '200ms' }}>
              {t(
                '为全球关键基础设施提供专业防雷接地解决方案',
                'Providing professional lightning protection and grounding solutions for critical infrastructure worldwide',
                'تقديم حلول حماية صواعق وتأريض احترافية للبنية التحتية الحرجة حول العالم'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.id} className="animate-zoom-in" style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
                <Link
                  href={industry.href}
                  className="group relative h-80 rounded-2xl overflow-hidden block"
                >
                  <Image
                    src={industry.image}
                    alt={t(industry.title, industry.titleEn, industry.titleAr)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/60 to-transparent" />
                  
                  <div className="absolute bottom-0 start-0 end-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {t(industry.title, industry.titleEn, industry.titleAr)}
                      </h3>
                      <div className="flex gap-4 text-sm">
                        <span className="px-3 py-1 bg-green-electric-600/30 text-green-electric-300 rounded-full">
                          {industry.stats.projects} {t('项目', 'Projects', 'مشروع')}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">
                      {t(industry.description, industry.descriptionEn, industry.descriptionAr)}
                    </p>
                    <div className="flex items-center text-green-electric-400 font-medium">
                      {t('查看案例', 'View Cases', 'عرض الحالات')}
                      <svg className="w-5 h-5 ms-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-gradient-to-r from-green-electric-700 to-green-electric-600 scroll-mt-0">
        <div className="container mx-auto px-6 text-center">
          <h2 className="animate-slide-up text-3xl md:text-4xl font-bold text-white mb-4">
            {t('准备开始您的项目？', 'Ready to Start Your Project?', 'مستعد لبدء مشروعك؟')}
          </h2>
          <p className="animate-slide-up text-xl text-green-electric-100 mb-4 max-w-2xl mx-auto" style={{ transitionDelay: '100ms' }}>
            {t(
              '发送您的项目需求——我们将在48小时内提供定制解决方案。',
              'Send us your project requirements — we\'ll provide a tailored solution within 48 hours.',
              'أرسل متطلبات مشروعك — سنقدم حلاً مخصصاً خلال 48 ساعة.'
            )}
          </p>
          <p className="animate-slide-up text-lg text-green-electric-200 mb-8" style={{ transitionDelay: '200ms' }}>
            {t(
              '立即联系我们，获取有竞争力的价格和专业咨询',
              'Contact us today for competitive pricing and expert consultation',
              'اتصل بنا اليوم للحصول على أسعار تنافسية واستشارة متخصصة'
            )}
          </p>
          <div className="animate-zoom-in flex flex-wrap justify-center gap-4" style={{ transitionDelay: '300ms' }}>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {t('提交项目咨询', 'Submit Project Inquiry', 'إرسال استفسار المشروع')}
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
            >
              {t('浏览产品组件', 'Browse Components', 'تصفح المكونات')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
