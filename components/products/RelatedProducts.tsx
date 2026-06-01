'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { ALL_PRODUCTS } from '@/data/products';
import { useTranslations } from 'next-intl';

type ProductWithCategory = typeof ALL_PRODUCTS extends (infer T)[] ? T : never;

interface RelatedProductsProps {
  products: ProductWithCategory[];
  lang: string;
}

export default function RelatedProducts({ products, lang }: RelatedProductsProps) {
  const t = useTranslations('productTemplate');
  
  if (products.length === 0) return null;
  
  return (
    <section className="py-12 bg-industrial-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-industrial-900 mb-8">
          {t('relatedProducts')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.categoryId}/${product.id}`}
              className="group"
            >
              <div className="border border-industrial-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-green-electric-300 transition-all duration-300 bg-white">
                <div className="h-48 relative">
                  <Image
                    src={product.image}
                    alt={product.nameEn || product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-industrial-900 mb-2 line-clamp-2">
                    {lang === 'zh' ? product.name : product.nameEn || product.name}
                  </h4>
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
    </section>
  );
}
