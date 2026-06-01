'use client';

import { use } from 'react';
import { Link } from "@/i18n/routing";
import { getCategoryById, getProductById, ALL_PRODUCTS } from '@/data/products';
import { EarlyDischargeLightningRod, LightningWarningSystem, ExothermicWelding } from '@/components/product-templates';
import CopperBondedRod from '@/components/product-templates/pages/CopperBondedRod';
import IgniterWeldingPowder from '@/components/product-templates/pages/IgniterWeldingPowder';
import { useTranslations } from 'next-intl';
import ProductTemplate from '@/components/products/ProductTemplate';
import { getProductSEO, getRelatedProductSEO } from '@/lib/product-seo';

const FLAGSHIP_PRODUCTS = [
  'ese-air-terminal',
  'lightning-warning-system',
  'copper-bonded-rod',
  'exothermic-welding',
  'remote-igniter'
];

interface ProductDetailClientProps {
  params: Promise<{ category: string; product: string; locale: string }>;
}

export default function ProductDetailClient({ params }: ProductDetailClientProps) {
  const { category, product, locale } = use(params);
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

  if (FLAGSHIP_PRODUCTS.includes(product)) {
    switch (product) {
      case 'ese-air-terminal':
        return <EarlyDischargeLightningRod image={currentProduct.image} />;
      case 'lightning-warning-system':
        return <LightningWarningSystem image={currentProduct.image} />;
      case 'copper-bonded-rod':
        return <CopperBondedRod image={currentProduct.image} />;
      case 'exothermic-welding':
        return <ExothermicWelding image={currentProduct.image} />;
      case 'remote-igniter':
        return <IgniterWeldingPowder image={currentProduct.image} />;
      default:
        break;
    }
  }

  const seo = getProductSEO(product, currentProduct.nameEn, currentProduct.description);
  const relatedSEO = getRelatedProductSEO(product);
  const relatedProducts = relatedSEO
    .map(seoItem => ALL_PRODUCTS.find(p => p.id === seoItem.slug))
    .filter((p): p is NonNullable<typeof ALL_PRODUCTS[number]> => p !== undefined)
    .slice(0, 3);

  return (
    <ProductTemplate 
      product={currentProduct}
      category={currentCategory}
      seo={seo}
      lang={locale}
      relatedProducts={relatedProducts}
    />
  );
}
