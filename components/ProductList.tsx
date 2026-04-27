"use client";

import Image from "next/image";
import { getProductsByTier, getProductDetailPath, Product, ProductCategory, PRODUCT_TIERS, ProductTier } from "@/data/products";
import { Link } from "@/i18n/routing";
import ProductCarousel from "@/components/ProductCarousel";
import { useTranslations } from "next-intl";

function ProductCard({ product, categoryId }: { product: Product; categoryId: string }) {
  const t = useTranslations('products.items');

  return (
    <Link 
      href={getProductDetailPath(categoryId, product.id)}
      className="group block bg-white rounded-xl overflow-hidden border border-industrial-200 hover:shadow-xl hover:border-green-electric-300 transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden bg-industrial-50">
        <Image
          src={product.image}
          alt={t(product.id)}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-industrial-900 mb-2 group-hover:text-green-electric-600 transition-colors">
          {t(product.id)}
        </h4>
        {product.description && (
          <p className="text-sm text-industrial-500 line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  );
}

function CategoryCard({ category }: { category: ProductCategory }) {
  const t = useTranslations('products');
  const tItems = useTranslations('products.items');

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-industrial-200 hover:shadow-lg transition-all duration-300">
      <Link 
        href={getProductDetailPath(category.id, category.items[0]?.id || '')}
        className="block h-40 relative overflow-hidden group bg-industrial-50"
      >
        {category.items[0] && (
          <Image
            src={category.items[0].image}
            alt={t(`categories.${category.id}.name`)}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </Link>
      <div className="p-4">
        <h4 className="font-bold text-industrial-900 mb-2">{t(`categories.${category.id}.name`)}</h4>
        <p className="text-sm text-industrial-600 mb-4 line-clamp-2">
          {t(`categories.${category.id}.description`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {category.items.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={getProductDetailPath(category.id, item.id)}
              className="text-xs px-3 py-1.5 bg-industrial-100 text-industrial-600 rounded-full hover:bg-green-electric-100 hover:text-green-electric-700 transition-colors"
            >
              {tItems(item.id)}
            </Link>
          ))}
          {category.items.length > 3 && (
            <span className="text-xs px-3 py-1.5 text-industrial-400">
              +{category.items.length - 3} {t('more')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickCategoryNav() {
  const t = useTranslations('products');

  const categories = [
    { id: 'lightning-capture-warning', icon: '⚡' },
    { id: 'down-conductors-bonding', icon: '🔗' },
    { id: 'earthing-grounding-systems', icon: '🌍' },
    { id: 'exothermic-welding-connections', icon: '🔥' },
    { id: 'surge-protection', icon: '🛡️' },
    { id: 'ground-enhancement', icon: '📊' },
    { id: 'specialized-conductors', icon: '⚡' },
    { id: 'industrial-static-protection', icon: '🏭' },
    { id: 'testing-fasteners-support', icon: '🔧' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#category-${cat.id}`}
          className="px-4 py-2 bg-white border border-industrial-200 rounded-full text-sm font-medium text-industrial-700 hover:bg-green-electric-50 hover:border-green-electric-300 hover:text-green-electric-700 transition-all duration-300"
        >
          {t(`categories.${cat.id}.name`)}
        </a>
      ))}
    </div>
  );
}

function TierSection({ tier, categories }: { 
  tier: ProductTier; 
  categories: ProductCategory[];
}) {
  const t = useTranslations('products.tiers');

  const tierColors: Record<string, { bg: string; border: string; text: string; badge: string; accent: string }> = {
    'high-performance': {
      bg: 'bg-gradient-to-r from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800',
      accent: 'border-amber-500',
    },
    'engineering-core': {
      bg: 'bg-gradient-to-r from-slate-50 to-gray-50',
      border: 'border-slate-200',
      text: 'text-slate-700',
      badge: 'bg-slate-100 text-slate-800',
      accent: 'border-slate-500',
    },
    'compliance-support': {
      bg: 'bg-gradient-to-r from-orange-50 to-amber-50',
      border: 'border-orange-200',
      text: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-800',
      accent: 'border-orange-500',
    },
  };

  const colors = tierColors[tier.id] || tierColors['compliance-support'];

  if (categories.length === 0) return null;

  return (
    <section className={`rounded-2xl p-8 ${colors.bg} border ${colors.border}`}>
      <div className="flex items-center gap-4 mb-10 border-l-4 ${colors.accent} pl-4">
        <div>
          <h2 className={`text-2xl font-bold ${colors.text}`}>{t(`${tier.id}.title`)}</h2>
          <span className="text-industrial-400 text-sm uppercase tracking-widest">{tier.nameEn}</span>
        </div>
      </div>
      <p className="text-sm text-industrial-500 mb-8 -mt-6">{tier.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} id={`category-${category.id}`}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductList() {
  const t = useTranslations('products');
  const highPerformanceCategories = getProductsByTier('high-performance');
  const coreCategories = getProductsByTier('engineering-core');
  const supportCategories = getProductsByTier('compliance-support');

  const highPerformanceTier = PRODUCT_TIERS.find(tier => tier.id === 'high-performance')!;
  const coreTier = PRODUCT_TIERS.find(tier => tier.id === 'engineering-core')!;
  const supportTier = PRODUCT_TIERS.find(tier => tier.id === 'compliance-support')!;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              {t('badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <ProductCarousel />
        </div>
      </section>

      <section className="py-8 bg-industrial-50 border-y border-industrial-200">
        <div className="container mx-auto px-6">
          <QuickCategoryNav />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 space-y-16">
          <TierSection tier={highPerformanceTier} categories={highPerformanceCategories} />
          <TierSection tier={coreTier} categories={coreCategories} />
          <TierSection tier={supportTier} categories={supportCategories} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('needCustom')}
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            {t('customDescription')}
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            {t('contactForQuote')}
          </Link>
        </div>
      </section>
    </main>
  );
}
