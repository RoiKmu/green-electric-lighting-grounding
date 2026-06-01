'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Product, ProductCategory, ALL_PRODUCTS } from '@/data/products';
import { ProductSEO } from '@/lib/product-seo';
import Breadcrumb from './Breadcrumb';
import ProductFAQ from './ProductFAQ';
import RelatedProducts from './RelatedProducts';
import { useTranslations } from 'next-intl';

interface ProductTemplateProps {
  product: Product;
  category: ProductCategory;
  seo: ProductSEO;
  lang: string;
  relatedProducts?: typeof ALL_PRODUCTS extends (infer T)[] ? T[] : never;
}

export default function ProductTemplate({ 
  product, 
  category, 
  seo, 
  lang,
  relatedProducts = []
}: ProductTemplateProps) {
  const t = useTranslations('productTemplate');
  const tNav = useTranslations('nav');
  
  const productName = lang === 'zh' ? product.name : product.nameEn || product.name;
  const categoryName = lang === 'zh' ? category.name : category.nameEn;
  
  const seoTitle = seo.title[lang as keyof typeof seo.title] || seo.title.en;
  const seoMetaDesc = seo.metaDesc[lang as keyof typeof seo.metaDesc] || seo.metaDesc.en;
  const seoH1 = seo.h1[lang as keyof typeof seo.h1] || seo.h1.en;
  const seoKeyFeatures = seo.keyFeatures[lang as keyof typeof seo.keyFeatures] || seo.keyFeatures.en;
  const seoApplications = seo.applications[lang as keyof typeof seo.applications] || seo.applications.en;
  const seoFaq = seo.faq[lang as keyof typeof seo.faq] || seo.faq.en;
  
  const specLabels = {
    material: t('material'),
    size: t('size'),
    standard: t('standard'),
    application: t('application'),
  };
  
  const specTable = [
    { label: specLabels.material, value: product.specifications?.material },
    { label: specLabels.size, value: product.specifications?.size },
    { label: specLabels.standard, value: product.specifications?.standard },
    { label: specLabels.application, value: product.specifications?.application },
  ].filter(item => item.value);
  
  const standards = [
    'IEC 62561',
    'UL 467',
    'IEEE 80',
    product.specifications?.standard
  ].filter(Boolean);
  
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <Breadcrumb 
            items={[
              { label: tNav('products'), href: '/products' },
              { label: categoryName, href: `/products/${category.id}` },
              { label: productName, href: '#' }
            ]}
            lang={lang}
          />

          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-industrial-900 mb-4 leading-tight">
              {seoH1}
            </h1>
            <p className="text-lg text-industrial-600 max-w-3xl">
              {seoMetaDesc}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={`${seoH1} for ${seoApplications[0]}`}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div>
              <div className="prose max-w-none mb-8">
                <p className="text-industrial-700 leading-relaxed">
                  {lang === 'zh' ? (
                    <>
                      <strong>{productName}</strong>是一款专为<strong>{seoApplications[0]}</strong>和<strong>{seoApplications[1]}</strong>设计的专业产品。
                      {product.specifications?.standard && `符合${product.specifications.standard}标准制造，`}
                      这款{product.specifications?.material || '专业'}组件确保可靠的电气连续性。
                    </>
                  ) : lang === 'ar' ? (
                    <>
                      <strong>{productName}</strong> is a {seoKeyFeatures[0].toLowerCase()} designed for {seoApplications[0].toLowerCase()} and {seoApplications[1].toLowerCase()}. 
                      {product.specifications?.standard && `Manufactured in compliance with ${product.specifications.standard},`} 
                      this {product.specifications?.material?.toLowerCase() || 'professional'} component ensures reliable electrical continuity.
                    </>
                  ) : (
                    <>
                      The <strong>{productName}</strong> is a {seoKeyFeatures[0].toLowerCase()} designed for {seoApplications[0].toLowerCase()} and {seoApplications[1].toLowerCase()}. 
                      {product.specifications?.standard && `Manufactured in compliance with ${product.specifications.standard},`} 
                      this {product.specifications?.material?.toLowerCase() || 'professional'} component ensures reliable electrical continuity.
                    </>
                  )}
                </p>
                <p className="text-industrial-700 leading-relaxed">
                  {lang === 'zh' ? (
                    <>
                      {seoKeyFeatures[1]}。
                      {product.specifications?.size && `规格${product.specifications.size}，`}
                      支持多种连接方式，非常适合{seoApplications[2]}项目。
                    </>
                  ) : (
                    <>
                      {seoKeyFeatures[1]}. 
                      {product.specifications?.size && `Available in ${product.specifications.size},`} 
                      it supports various connection methods, making it ideal for {seoApplications[2].toLowerCase()} projects.
                    </>
                  )}
                </p>
                <p className="text-industrial-700 leading-relaxed">
                  {lang === 'zh' ? (
                    <>
                      作为领先的<Link href="/about" className="text-green-electric-600 hover:text-green-electric-500 font-medium">防雷接地制造商</Link>，
                      格林电工为全球EPC承包商和基础设施项目供应这款{productName}。
                    </>
                  ) : lang === 'ar' ? (
                    <>
                      As a leading <Link href="/about" className="text-green-electric-600 hover:text-green-electric-500 font-medium">lightning protection manufacturer</Link>, 
                      Green Electric supplies this {productName.toLowerCase()} to global EPC contractors and infrastructure projects.
                    </>
                  ) : (
                    <>
                      As a leading <Link href="/about" className="text-green-electric-600 hover:text-green-electric-500 font-medium">lightning protection manufacturer</Link>, 
                      Green Electric supplies this {productName.toLowerCase()} to global EPC contractors and infrastructure projects.
                    </>
                  )}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-industrial-900 mb-4">{t('keyFeatures')}</h3>
                <ul className="space-y-3">
                  {seoKeyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-industrial-700">
                      <svg className="w-5 h-5 text-green-electric-500 me-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-colors inline-flex items-center"
                >
                  {t('requestQuote')}
                  <svg className="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {specTable.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-industrial-900 mb-6">{t('technicalSpecs')}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <tbody>
                    {specTable.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-industrial-50' : 'bg-white'}>
                        <th className="border border-industrial-200 px-6 py-4 text-left text-industrial-900 font-semibold w-1/3">
                          {item.label}
                        </th>
                        <td className="border border-industrial-200 px-6 py-4 text-industrial-700">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {standards.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-industrial-900 mb-6">{t('compliantStandards')}</h2>
              <div className="flex flex-wrap gap-3">
                {standards.map((standard, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-green-electric-50 text-green-electric-700 rounded-lg font-medium border border-green-electric-200"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-industrial-900 mb-6">{t('applications')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {seoApplications.map((app, index) => (
                <Link 
                  key={index}
                  href={seo.applicationLinks[index] || '/projects'}
                  className="group p-6 bg-industrial-50 rounded-xl hover:bg-green-electric-50 hover:border-green-electric-200 border border-industrial-200 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-industrial-900 font-medium group-hover:text-green-electric-700">{app}</span>
                    <svg className="w-5 h-5 text-industrial-400 group-hover:text-green-electric-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductFAQ faq={seoFaq} title={t('faq')} />

      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} lang={lang} />
      )}

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            {t('contactUs')}
          </Link>
        </div>
      </section>
    </main>
  );
}
