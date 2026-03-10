'use client';

import Image from 'next/image';
import { use } from 'react';
import { Link } from "@/i18n/routing";
import { getProductDetailPath } from '@/lib/routes';
import { getCategoryById, getProductById } from '@/data/products';
import { EarlyDischargeLightningRod, LightningWarningSystem } from '@/components/product-templates';
import { useTranslations } from 'next-intl';

interface ProductDetailClientProps {
  params: Promise<{ category: string; product: string; locale: string }>;
}

export default function ProductDetailClient({ params }: ProductDetailClientProps) {
  const { category, product } = use(params);
  const t = useTranslations('products.detail');

  const currentCategory = getCategoryById(category);
  const currentProduct = getProductById(category, product);

  if (!currentCategory || !currentProduct) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-industrial-900 mb-4">{t('notFound')}</h1>
              <p className="text-xl text-industrial-600 mb-8">{t('notFoundDescription')}</p>
              <Link
                href="/products"
                className="px-6 py-3 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-colors"
              >
                {t('backToProducts')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (currentCategory.tier === 'flagship') {
    switch (product) {
      case 'early-discharge':
        return <EarlyDischargeLightningRod image={currentProduct.image} />;
      case 'lightning-warning-system':
        return <LightningWarningSystem image={currentProduct.image} />;
      default:
        return <EarlyDischargeLightningRod image={currentProduct.image} />;
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 text-sm text-industrial-600">
            <Link href="/" className="hover:text-green-electric-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-green-electric-400 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${category}`} className="hover:text-green-electric-400 transition-colors">{currentCategory.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-900 font-medium">{currentProduct.name}</span>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-2">{currentProduct.name}</h1>
            {currentProduct.nameEn && (
              <p className="text-xl text-industrial-500">{currentProduct.nameEn}</p>
            )}
            <p className="text-industrial-600 mt-2">{currentCategory.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-industrial-600 mb-6">
                This is the {currentProduct.name} product from the {currentCategory.name} series. The product is designed to meet the highest industry standards and provides reliable performance in various application scenarios.
              </p>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">{t('features')}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('feature1')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('feature2')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('feature3')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('feature4')}
                </li>
              </ul>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">{t('applications')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('app1')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('app2')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('app3')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('app4')}</div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-industrial-900 mb-8">{t('relatedProducts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentCategory.items
                .filter(item => item.id !== product)
                .slice(0, 4)
                .map((item) => (
                <Link key={item.id} href={getProductDetailPath(category, item.id)} className="group">
                  <div className="border border-industrial-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-48 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-industrial-900 mb-2">{item.name}</h4>
                      <div className="text-green-electric-600 hover:text-green-electric-500 font-medium text-sm inline-flex items-center">
                        {t('viewDetails')}
                        <svg className="w-4 h-4 ms-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('needQuote')}</h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            {t('quoteDescription')}
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            {t('requestQuote')}
          </Link>
        </div>
      </section>
    </main>
  );
}
