import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import WorldMap from "@/components/WorldMap";

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
    title: '石油与化工',
    titleEn: 'Petrochemical',
    description: '应对极热与高腐蚀环境的防爆级保护',
    descriptionEn: 'Explosion-proof protection for extreme heat and high corrosion environments',
    image: '/images/hero/hero-1.jpg',
    href: '/projects/petrochemical',
    stats: { projects: '80+', countries: '15' },
  },
  {
    id: 'power-energy',
    title: '电力与新能源',
    titleEn: 'Power & Energy',
    description: '跨越沙漠与雨林的高压电网与光伏接地体系',
    descriptionEn: 'High-voltage grid and solar grounding systems across deserts and rainforests',
    image: '/images/hero/hero-3.jpg',
    href: '/projects/power-energy',
    stats: { projects: '65+', countries: '12' },
  },
  {
    id: 'transportation',
    title: '轨道交通',
    titleEn: 'Transportation',
    description: '保障跨国高铁与重载铁路的零中断运行',
    descriptionEn: 'Ensuring zero-interruption operation for cross-border HSR and heavy-haul railways',
    image: '/images/hero/hero-2.jpg',
    href: '/projects/transportation',
    stats: { projects: '50+', countries: '8' },
  },
  {
    id: 'infrastructure',
    title: '基础设施',
    titleEn: 'Infrastructure',
    description: '商业中心、场馆与大型基础设施的系统级防护',
    descriptionEn: 'System-level protection for commercial centers, stadiums, and large infrastructure',
    image: '/images/hero/hero-1.jpg',
    href: '/projects/infrastructure',
    stats: { projects: '70+', countries: '18' },
  },
];

const globalStats = [
  { value: '265+', label: '头部EPC项目', labelEn: 'Top EPC Projects' },
  { value: '30+', label: '服务国家', labelEn: 'Countries Served' },
  { value: '100%', label: '验收通过率', labelEn: 'Acceptance Rate' },
  { value: '0', label: '安全事故', labelEn: 'Safety Incidents' },
];

const highlightedCountries = [
  { name: '沙特阿拉伯', nameEn: 'Saudi Arabia', region: '中东', regionEn: 'Middle East' },
  { name: '阿联酋', nameEn: 'UAE', region: '中东', regionEn: 'Middle East' },
  { name: '印度尼西亚', nameEn: 'Indonesia', region: '东南亚', regionEn: 'Southeast Asia' },
  { name: '马来西亚', nameEn: 'Malaysia', region: '东南亚', regionEn: 'Southeast Asia' },
  { name: '尼日利亚', nameEn: 'Nigeria', region: '非洲', regionEn: 'Africa' },
  { name: '埃及', nameEn: 'Egypt', region: '非洲', regionEn: 'Africa' },
  { name: '巴基斯坦', nameEn: 'Pakistan', region: '西亚', regionEn: 'West Asia' },
  { name: '巴西', nameEn: 'Brazil', region: '拉丁美洲', regionEn: 'Latin America' },
];

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Global EPC Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-900/80 to-industrial-950/70" />
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-green-electric-600/20 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30">
              <div className="w-2 h-2 bg-green-electric-400 rounded-full me-3 animate-pulse" />
              <span className="text-sm font-semibold text-green-electric-300 uppercase tracking-wider">
                {isZh ? '中国EPC出海金牌防雷配套商' : 'Premier Lightning Protection Partner for Chinese EPCs Going Global'}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              {isZh ? (
                <>
                  护航中国 <span className="text-green-electric-400">EPC</span>
                  <br />
                  走向世界
                </>
              ) : (
                <>
                  Empowering Global
                  <br />
                  <span className="text-green-electric-400">EPC</span> Deliveries
                </>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              {isZh 
                ? '深度参与全球 265+ 头部EPC的工程项目，聚焦中东与东南亚严苛环境防雷交付。'
                : 'Deep involvement in 265+ landmark EPC projects worldwide, specializing in Middle East and Southeast Asia harsh environment lightning protection delivery.'
              }
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {globalStats.map((stat, index) => (
                <div key={index} className="bg-industrial-900/50 backdrop-blur-sm border border-white/10 p-5 rounded-xl">
                  <div className="text-3xl md:text-4xl font-bold text-green-electric-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{isZh ? stat.label : stat.labelEn}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects/petrochemical"
                className="group px-8 py-4 bg-green-electric-600 hover:bg-green-electric-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center"
              >
                {isZh ? '探索项目案例' : 'Explore Projects'}
                <svg className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 hover:border-green-electric-400 text-white rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {isZh ? '联系我们' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 start-0 end-0 h-40 bg-gradient-to-t from-industrial-950 to-transparent z-10 pointer-events-none" />
      </section>

      <section className="py-24 bg-industrial-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? '行业解决方案' : 'Industry Solutions'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {isZh ? '聚焦核心行业' : 'Focus on Core Industries'}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {isZh 
                ? '为全球关键基础设施提供专业防雷接地解决方案'
                : 'Providing professional lightning protection and grounding solutions for critical infrastructure worldwide'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.href}
                className="group relative h-80 rounded-2xl overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt={isZh ? industry.title : industry.titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-900/60 to-transparent" />
                
                <div className="absolute bottom-0 start-0 end-0 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {isZh ? industry.title : industry.titleEn}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      <span className="px-3 py-1 bg-green-electric-600/30 text-green-electric-300 rounded-full">
                        {industry.stats.projects} {isZh ? '项目' : 'Projects'}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-4">
                    {isZh ? industry.description : industry.descriptionEn}
                  </p>
                  <div className="flex items-center text-green-electric-400 font-medium">
                    {isZh ? '查看案例' : 'View Cases'}
                    <svg className="w-5 h-5 ms-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              {isZh ? '全球出海版图' : 'Global Footprint'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {isZh ? '一带一路沿线亮点' : 'Belt & Road Highlights'}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {isZh 
                ? '熟悉主流国际标准（IEC/UL），无缝对接中国头部 EPC 总包方工作流，提供从深化设计、物资集采到海外现场督导的一站式闭环服务。'
                : 'Familiar with mainstream international standards (IEC/UL), seamlessly integrating with Chinese top EPC contractors workflow, providing one-stop closed-loop service from detailed design, material procurement to overseas on-site supervision.'
              }
            </p>
          </div>

          <div className="relative bg-industrial-800/50 rounded-3xl p-8 md:p-12 border border-industrial-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 pt-0">
                <div className="space-y-4">
                  {highlightedCountries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-industrial-900/50 rounded-xl border border-industrial-700 hover:border-green-electric-500/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-electric-400 rounded-full me-4" />
                        <span className="text-white font-medium">{isZh ? country.name : country.nameEn}</span>
                      </div>
                      <span className="text-sm text-gray-400 px-3 py-1 bg-industrial-800 rounded-full">
                        {isZh ? country.region : country.regionEn}
                      </span>
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

      <section className="py-24 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isZh ? '准备开始您的项目？' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-xl text-green-electric-100 mb-4 max-w-2xl mx-auto">
            {isZh 
              ? '发送您的项目需求——我们将在48小时内提供定制解决方案。'
              : 'Send us your project requirements — we\'ll provide a tailored solution within 48 hours.'
            }
          </p>
          <p className="text-lg text-green-electric-200 mb-8">
            {isZh 
              ? '立即联系我们，获取有竞争力的价格和专业咨询'
              : 'Contact us today for competitive pricing and expert consultation'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {isZh ? '提交项目咨询' : 'Submit Project Inquiry'}
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
            >
              {isZh ? '浏览产品组件' : 'Browse Components'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
