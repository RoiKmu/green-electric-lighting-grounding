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
  const t = useTranslations('products');
  const tItems = useTranslations('products.items');
  const tNav = useTranslations('nav');

  const currentCategory = getCategoryById(category);
  const currentProduct = getProductById(category, product);

  if (!currentCategory || !currentProduct) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-industrial-900 mb-4">{t('detail.notFound')}</h1>
              <p className="text-xl text-industrial-600 mb-8">{t('detail.notFoundDescription')}</p>
              <Link
                href="/products"
                className="px-6 py-3 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-colors"
              >
                {t('detail.backToProducts')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (currentCategory.tier === 'flagship') {
    switch (product) {
      case 'ese-air-terminal':
        return <EarlyDischargeLightningRod image={currentProduct.image} />;
      case 'lightning-warning-system':
        return <LightningWarningSystem image={currentProduct.image} />;
      default:
        return <EarlyDischargeLightningRod image={currentProduct.image} />;
    }
  }

  const categoryName = t(`categories.${currentCategory.id}.name`);
  const productName = tItems(currentProduct.id);

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <nav className="flex items-center mb-8 text-base text-industrial-600">
            <Link href="/" className="hover:text-green-electric-400 transition-colors flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              {tNav('home')}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-green-electric-400 transition-colors">{tNav('products')}</Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${category}`} className="hover:text-green-electric-400 transition-colors">{categoryName}</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-900 font-medium">{productName}</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-2">{productName}</h1>
            <p className="text-industrial-600 mt-2">{categoryName}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={currentProduct.image}
                alt={productName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-industrial-600 mb-6">
                {t('detail.productDescription', { name: productName, category: categoryName })}
              </p>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">{t('detail.features')}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('detail.feature1')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('detail.feature2')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('detail.feature3')}
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('detail.feature4')}
                </li>
              </ul>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">{t('detail.applications')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('detail.app1')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('detail.app2')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('detail.app3')}</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">{t('detail.app4')}</div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-industrial-900 mb-8">{t('detail.relatedProducts')}</h2>
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
                        alt={tItems(item.id)}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-industrial-900 mb-2">{tItems(item.id)}</h4>
                      <div className="text-green-electric-600 hover:text-green-electric-500 font-medium text-sm inline-flex items-center">
                        {t('detail.viewDetails')}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('detail.needQuote')}</h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            {t('detail.quoteDescription')}
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            {t('detail.requestQuote')}
          </Link>
        </div>
      </section>
    </main>
  );
}
