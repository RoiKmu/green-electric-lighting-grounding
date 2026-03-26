"use client";

import Image from "next/image";
import { PRODUCT_CATEGORIES, getProductDetailPath, Product, ProductCategory } from "@/data/products";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

interface CategoryPageClientProps {
  categoryId: string;
}

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

function Breadcrumb({ categoryName }: { categoryName: string }) {
  const t = useTranslations('nav');

  return (
    <nav className="flex items-center mb-8 text-base text-industrial-300">
      <Link href="/" className="hover:text-green-electric-400 transition-colors flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        {t('home')}
      </Link>
      <span className="mx-2">/</span>
      <Link href="/products" className="hover:text-green-electric-400 transition-colors">
        {t('products')}
      </Link>
      <span className="mx-2">/</span>
      <span className="text-white font-medium">{categoryName}</span>
    </nav>
  );
}

export default function CategoryPageClient({ categoryId }: CategoryPageClientProps) {
  const t = useTranslations('products');

  const selectedCategory = PRODUCT_CATEGORIES.find(cat => cat.id === categoryId);
  
  if (!selectedCategory) {
    notFound();
  }

  const categoryName = t(`categories.${selectedCategory.id}.name`);
  const categoryDescription = t(`categories.${selectedCategory.id}.description`);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb categoryName={categoryName} />
          
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              {categoryName}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {categoryName}
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              {categoryDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-industrial-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.items.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  categoryId={selectedCategory.id} 
                />
              ))}
            </div>
          </div>
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
