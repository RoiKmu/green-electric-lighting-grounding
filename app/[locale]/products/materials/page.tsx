import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://green-electric.com';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Material Comparison - Grounding Materials for Desert Environments',
    zh: '材质对比 - 沙漠环境接地材料选择指南',
    ar: 'مقارنة المواد - دليل اختيار مواد التأريض للبيئات الصحراوية'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Technical comparison of 304 Stainless Steel, 316L Stainless Steel, Copper-Bonded Steel, and Pure Copper for grounding systems in desert and coastal environments.',
    zh: '304不锈钢、316L不锈钢、铜包钢和纯铜在沙漠及沿海环境中的接地系统技术对比。',
    ar: 'مقارنة تقنية للفولاذ المقاوم للصدأ 304 و 316L والفولاذ المكسو بالنحاس والنحاس النقي لأنظمة التأريض في البيئات الصحراوية والساحلية.'
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      'material comparison',
      'grounding materials',
      '316L stainless steel',
      'copper-bonded steel',
      'desert environment',
      'corrosion resistance',
      'IEC 62561',
      'UL 467'
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/products/materials`,
      languages: {
        en: `${BASE_URL}/en/products/materials`,
        zh: `${BASE_URL}/zh/products/materials`,
        ar: `${BASE_URL}/ar/products/materials`,
      }
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

const materials = [
  {
    id: '304-stainless',
    name: '304 不锈钢',
    nameEn: '304 Stainless Steel',
    nameAr: 'الفولاذ المقاوم للصدأ 304',
    corrosionYears: '15-20',
    corrosionYearsScore: 60,
    conductivity: '0.14',
    conductivityIACS: '2.4%',
    conductivityScore: 30,
    desertScore: 50,
    coastalScore: 40,
    costScore: 80,
    lifespan: '15-20 年',
    lifespanEn: '15-20 years',
    lifespanAr: '15-20 سنة',
    bestFor: '一般工业环境',
    bestForEn: 'General industrial environments',
    bestForAr: 'البيئات الصناعية العامة',
    limitations: '沙漠高盐雾环境下腐蚀较快',
    limitationsEn: 'Rapid corrosion in desert high salt-spray environments',
    limitationsAr: 'تآكل سريع في بيئات الصحراء عالية الرذاذ الملحي',
  },
  {
    id: '316l-stainless',
    name: '316L 不锈钢',
    nameEn: '316L Stainless Steel',
    nameAr: 'الفولاذ المقاوم للصدأ 316L',
    corrosionYears: '25-35',
    corrosionYearsScore: 85,
    conductivity: '0.13',
    conductivityIACS: '2.2%',
    conductivityScore: 25,
    desertScore: 85,
    coastalScore: 90,
    costScore: 50,
    lifespan: '25-35 年',
    lifespanEn: '25-35 years',
    lifespanAr: '25-35 سنة',
    bestFor: '沙漠沿海高腐蚀环境',
    bestForEn: 'Desert and coastal high-corrosion environments',
    bestForAr: 'البيئات الصحراوية والساحلية عالية التآكل',
    limitations: '成本较高，导电率较低',
    limitationsEn: 'Higher cost, lower conductivity',
    limitationsAr: 'تكلفة أعلى، موصلية أقل',
  },
  {
    id: 'copper-bonded-steel',
    name: '铜包钢',
    nameEn: 'Copper-Bonded Steel',
    nameAr: 'الفولاذ المكسو بالنحاس',
    corrosionYears: '30-40',
    corrosionYearsScore: 90,
    conductivity: '1.16',
    conductivityIACS: '20%',
    conductivityScore: 80,
    desertScore: 80,
    coastalScore: 75,
    costScore: 70,
    lifespan: '30-40 年',
    lifespanEn: '30-40 years',
    lifespanAr: '30-40 سنة',
    bestFor: '沙漠环境接地系统',
    bestForEn: 'Desert environment grounding systems',
    bestForAr: 'أنظمة التأريض في البيئات الصحراوية',
    limitations: '铜层破损处易腐蚀',
    limitationsEn: 'Corrosion at copper layer damage points',
    limitationsAr: 'التآكل عند نقاط تلف طبقة النحاس',
  },
  {
    id: 'pure-copper',
    name: '纯铜',
    nameEn: 'Pure Copper',
    nameAr: 'النحاس النقي',
    corrosionYears: '40-50',
    corrosionYearsScore: 100,
    conductivity: '5.96',
    conductivityIACS: '100%',
    conductivityScore: 100,
    desertScore: 90,
    coastalScore: 85,
    costScore: 30,
    lifespan: '40-50 年',
    lifespanEn: '40-50 years',
    lifespanAr: '40-50 سنة',
    bestFor: '高要求关键设施',
    bestForEn: 'High-requirement critical facilities',
    bestForAr: 'المرافق الحرجة ذات المتطلبات العالية',
    limitations: '成本最高，机械强度较低',
    limitationsEn: 'Highest cost, lower mechanical strength',
    limitationsAr: 'أعلى تكلفة، قوة ميكانيكية أقل',
  },
];

export default async function MaterialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = (zh: string, en: string, ar: string) => {
    if (locale === 'zh') return zh;
    if (locale === 'ar') return ar;
    return en;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-electric-400';
    if (score >= 70) return 'text-cyan-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-electric-500/20';
    if (score >= 70) return 'bg-cyan-500/20';
    if (score >= 50) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  return (
    <main className="min-h-screen bg-industrial-950">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Link 
              href="/products" 
              className="inline-flex items-center text-green-electric-400 hover:text-green-electric-300 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('返回产品', 'Back to Products', 'العودة للمنتجات')}
            </Link>

            <div className="flex items-center px-4 py-2 bg-green-electric-500/20 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30 w-fit">
              <svg className="w-5 h-5 text-green-electric-400 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-semibold text-green-electric-300 uppercase tracking-wider">
                {t('技术参考', 'Technical Reference', 'مرجع تقني')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {t('沙漠环境接地材质对比', 'Grounding Material Comparison for Desert Environments', 'مقارنة مواد التأريض للبيئات الصحراوية')}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t(
                '基于沙特、阿联酋、科威特等中东地区 30+ 项目的实际数据，为您提供客观的材质选择参考。',
                'Based on actual data from 30+ projects in Saudi Arabia, UAE, Kuwait, and other Middle East regions, providing objective material selection reference.',
                'بناءً على بيانات فعلية من أكثر من 30 مشروع في السعودية والإمارات والكويت ومناطق أخرى في الشرق الأوسط، توفير مرجع اختيار مواد موضوعي.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-industrial-800">
                  <th className="border border-industrial-700 px-6 py-4 text-left text-white font-bold">
                    {t('对比维度', 'Comparison Category', 'فئة المقارنة')}
                  </th>
                  {materials.map((material) => (
                    <th key={material.id} className="border border-industrial-700 px-6 py-4 text-center text-white font-bold">
                      {t(material.name, material.nameEn, material.nameAr)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('预期使用寿命', 'Expected Lifespan', 'العمر التشغيلي المتوقع')}</div>
                    <div className="text-sm text-gray-500">{t('沙漠及沿海环境', 'Desert & Coastal', 'الصحراء والساحل')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center">
                      <span className={`text-xl font-bold ${getScoreColor(material.corrosionYearsScore)}`}>
                        {t(material.lifespan, material.lifespanEn, material.lifespanAr)}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('导电率', 'Conductivity', 'التوصيل')}</div>
                    <div className="text-sm text-gray-500">×10⁷ S/m (IACS)</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center">
                      <div className={`text-xl font-bold ${getScoreColor(material.conductivityScore)}`}>
                        {material.conductivity}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">({material.conductivityIACS})</div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('沙漠环境适应性', 'Desert Adaptability', 'التكيف الصحراوي')}</div>
                    <div className="text-sm text-gray-500">{t('满分 100', 'Score out of 100', 'الدرجة من 100')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBg(material.desertScore)}`}>
                        <span className={`text-xl font-bold ${getScoreColor(material.desertScore)}`}>
                          {material.desertScore}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('沿海盐雾适应性', 'Coastal Adaptability', 'التكيف الساحلي')}</div>
                    <div className="text-sm text-gray-500">{t('满分 100', 'Score out of 100', 'الدرجة من 100')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBg(material.coastalScore)}`}>
                        <span className={`text-xl font-bold ${getScoreColor(material.coastalScore)}`}>
                          {material.coastalScore}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('成本效益', 'Cost Effectiveness', 'فعالية التكلفة')}</div>
                    <div className="text-sm text-gray-500">{t('满分 100', 'Score out of 100', 'الدرجة من 100')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBg(material.costScore)}`}>
                        <span className={`text-xl font-bold ${getScoreColor(material.costScore)}`}>
                          {material.costScore}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50 bg-industrial-800/30">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('推荐应用场景', 'Recommended Application', 'التطبيق الموصى به')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center text-sm text-gray-300">
                      {t(material.bestFor, material.bestForEn, material.bestForAr)}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-industrial-800/50">
                  <td className="border border-industrial-700 px-6 py-4 text-industrial-300">
                    <div className="font-medium">{t('主要局限', 'Main Limitations', 'القيود الرئيسية')}</div>
                  </td>
                  {materials.map((material) => (
                    <td key={material.id} className="border border-industrial-700 px-6 py-4 text-center text-sm text-gray-400">
                      {t(material.limitations, material.limitationsEn, material.limitationsAr)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-industrial-950">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">
            {t('材质详解', 'Material Details', 'تفاصيل المواد')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material) => (
              <div key={material.id} className="bg-industrial-800/50 border border-industrial-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t(material.name, material.nameEn, material.nameAr)}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t('预期寿命', 'Lifespan', 'العمر')}</span>
                    <span className={`font-bold ${getScoreColor(material.corrosionYearsScore)}`}>
                      {t(material.lifespan, material.lifespanEn, material.lifespanAr)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{t('导电率', 'Conductivity', 'التوصيل')}</span>
                    <span className={`font-bold ${getScoreColor(material.conductivityScore)}`}>
                      {material.conductivity} ×10⁷ S/m <span className="text-gray-500 text-sm">({material.conductivityIACS} IACS)</span>
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-industrial-700">
                    <div className="text-sm text-gray-400 mb-2">{t('推荐场景', 'Recommended For', 'موصى به لـ')}</div>
                    <div className="text-gray-300">{t(material.bestFor, material.bestForEn, material.bestForAr)}</div>
                  </div>
                  
                  <div className="pt-4 border-t border-industrial-700">
                    <div className="text-sm text-gray-400 mb-2">{t('注意事项', 'Note', 'ملاحظة')}</div>
                    <div className="text-gray-400 text-sm">{t(material.limitations, material.limitationsEn, material.limitationsAr)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-industrial-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('沙特市场推荐', 'Saudi Market Recommendation', 'توصية السوق السعودي')}
            </h2>
            
            <div className="bg-gradient-to-r from-green-electric-500/10 to-cyan-500/10 border border-green-electric-500/30 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-electric-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t('首选：铜包钢 + 316L 不锈钢组合方案', 'Recommended: Copper-Bonded Steel + 316L Stainless Steel Combination', 'موصى به: الفولاذ المكسو بالنحاس + الفولاذ المقاوم للصدأ 316L')}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {t(
                      '基于沙特东部省（波斯湾沿岸）和内陆沙漠地区的实际项目经验，我们推荐：接地主体采用 20% IACS 铜包钢材料（趋肤效应下雷电流导电性优异，性价比最优），连接件和地表设备采用 316L 不锈钢（耐盐雾腐蚀最佳）。此方案已在 Aramco 多个项目中验证，符合 SAES-P-111 标准。',
                      'Based on actual project experience in Saudi Eastern Province (Persian Gulf coast) and inland desert regions, we recommend: 20% IACS copper-bonded steel for main grounding body (excellent lightning current conductivity due to skin effect, best cost-performance), 316L stainless steel for connectors and surface equipment (best salt-spray corrosion resistance). This solution has been validated in multiple Aramco projects, compliant with SAES-P-111 standard.',
                      'بناءً على خبرة المشروع الفعلية في المنطقة الشرقية (ساحل الخليج العربي) ومناطق الصحراء الداخلية، نوصي: الفولاذ المكسو بالنحاس 20% IACS لجسم التأريض الرئيسي (موصلية ممتازة لتيار الصواعق بسبب تأثير الجلد، أفضل تكلفة-أداء)، الفولاذ المقاوم للصدأ 316L للموصلات والمعدات السطحية (أفضل مقاومة لتآكل الرذاذ الملحي). تم التحقق من هذا الحل في مشاريع أرامكو متعددة، متوافق مع معيار SAES-P-111.'
                    )}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-green-electric-500/20 text-green-electric-400 rounded-full text-sm">
                      {t('符合 SAES-P-111', 'SAES-P-111 Compliant', 'متوافق مع SAES-P-111')}
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {t('30+ 项目验证', '30+ Projects Validated', 'تم التحقق في 30+ مشروع')}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      {t('最优性价比', 'Best Cost-Performance', 'أفضل تكلفة-أداء')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-600 to-green-electric-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('需要材质选择建议？', 'Need Material Selection Advice?', 'تحتاج نصيحة اختيار المواد؟')}
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            {t(
              '联系我们获取针对您项目环境的专业材质建议',
              'Contact us for professional material advice tailored to your project environment',
              'اتصل بنا للحصول على نصيحة مواد احترافية مخصصة لبيئة مشروعك'
            )}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-green-electric-600 rounded-lg hover:bg-green-electric-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('提交咨询', 'Submit Inquiry', 'إرسال استفسار')}
          </Link>
        </div>
      </section>
    </main>
  );
}
