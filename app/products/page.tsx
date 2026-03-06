"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import CategoryButton from "@/components/CategoryButton";
import ProductCarousel from "@/components/ProductCarousel";
import { PRODUCT_CATEGORIES, getProductsByTier, getProductDetailPath, Product, ProductCategory } from "@/data/products";
import { ROUTES } from "@/lib/routes";

function ProductCard({ product, categoryId }: { product: Product; categoryId: string }) {
  return (
    <Link 
      href={getProductDetailPath(categoryId, product.id)}
      className="group block bg-white rounded-xl overflow-hidden border border-industrial-200 hover:shadow-xl hover:border-green-electric-300 transition-all duration-300"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-industrial-900 mb-2 group-hover:text-green-electric-600 transition-colors">
          {product.name}
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
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-industrial-200 hover:shadow-lg transition-all duration-300">
      <Link 
        href={getProductDetailPath(category.id, category.items[0]?.id || '')}
        className="block h-40 relative overflow-hidden group"
      >
        {category.items[0] && (
          <Image
            src={category.items[0].image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="font-bold text-white text-lg">{category.name}</h4>
          {category.nameEn && (
            <p className="text-sm text-gray-300">{category.nameEn}</p>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-sm text-industrial-600 mb-4 line-clamp-2">
          {category.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {category.items.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={getProductDetailPath(category.id, item.id)}
              className="text-xs px-3 py-1.5 bg-industrial-100 text-industrial-600 rounded-full hover:bg-green-electric-100 hover:text-green-electric-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {category.items.length > 3 && (
            <span className="text-xs px-3 py-1.5 text-industrial-400">
              +{category.items.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function TierSection({ tierId, tierName, tierDescription, categories }: { 
  tierId: string; 
  tierName: string; 
  tierDescription: string;
  categories: ProductCategory[];
}) {
  const tierColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    flagship: {
      bg: 'bg-gradient-to-r from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800',
    },
    core: {
      bg: 'bg-gradient-to-r from-slate-50 to-gray-50',
      border: 'border-slate-200',
      text: 'text-slate-700',
      badge: 'bg-slate-100 text-slate-800',
    },
    support: {
      bg: 'bg-gradient-to-r from-orange-50 to-amber-50',
      border: 'border-orange-200',
      text: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-800',
    },
  };

  const colors = tierColors[tierId] || tierColors.support;

  const tierNamesEn: Record<string, string> = {
    flagship: 'Featured Products',
    core: 'Core Grounding & Lightning Protection',
    support: 'Industrial Safety & Engineering Support',
  };

  const tierDescriptionsEn: Record<string, string> = {
    flagship: 'Our most popular products trusted by customers worldwide',
    core: 'Engineering essentials, complete supply',
    support: 'Supporting equipment and auxiliary tools',
  };

  return (
    <section className={`rounded-2xl p-8 ${colors.bg} border ${colors.border}`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${colors.text}`}>{tierNamesEn[tierId]}</h2>
        <p className="text-sm text-industrial-500">{tierDescriptionsEn[tierId]}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

function Breadcrumb({ categoryName }: { categoryName: string }) {
  return (
    <nav className="flex items-center mb-8 text-sm text-industrial-600">
      <Link href={ROUTES.PRODUCTS} className="hover:text-green-electric-600 transition-colors">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link href={ROUTES.PRODUCTS} className="hover:text-green-electric-600 transition-colors">
        Products
      </Link>
      <span className="mx-2">/</span>
      <span className="text-industrial-900 font-medium">{categoryName}</span>
    </nav>
  );
}

function ProductList({ selectedCategoryId = null }: ProductListProps) {
  const flagshipCategories = getProductsByTier('flagship');
  const coreCategories = getProductsByTier('core');
  const supportCategories = getProductsByTier('support');

  if (selectedCategoryId) {
    const selectedCategory = PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategoryId);
    if (!selectedCategory) return null;

    return (
      <main className="min-h-screen bg-white">
        <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <Breadcrumb categoryName={selectedCategory.name} />
            
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
                {selectedCategory.name}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {selectedCategory.name}
              </h1>
              <p className="text-xl text-industrial-300 leading-relaxed">
                {selectedCategory.description}
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
      </main>
    );
  }

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
              Products
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Lightning Protection & Grounding Solutions
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              Explore our comprehensive three-tier product system, from flagship technology solutions to core grounding equipment and industrial safety support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ProductCarousel />
        </div>
      </section>

      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          {flagshipCategories.length > 0 && (
            <TierSection 
              tierId="flagship"
              tierName="Flagship Technology Solutions"
              tierDescription="Core competitiveness, high margin, high technical barriers"
              categories={flagshipCategories}
            />
          )}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          {coreCategories.length > 0 && (
            <TierSection 
              tierId="core"
              tierName="Core Grounding & Lightning Protection"
              tierDescription="Engineering essentials, complete supply"
              categories={coreCategories}
            />
          )}
        </div>
      </section>

      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          {supportCategories.length > 0 && (
            <TierSection 
              tierId="support"
              tierName="Industrial Safety & Engineering Support"
              tierDescription="Supporting equipment and auxiliary tools"
              categories={supportCategories}
            />
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            Contact our technical team for personalized product recommendations and comprehensive project support.
          </p>
          <Link href={ROUTES.CONTACT} className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            Contact Us for Quote
          </Link>
        </div>
      </section>
    </main>
  );
}

interface ProductListProps {
  selectedCategoryId?: string | null;
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageLoading />}>
      <ProductsPageContent />
    </Suspense>
  );
}

function ProductsPageLoading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-electric-600"></div>
    </main>
  );
}

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFromUrl);

  useEffect(() => {
    setSelectedCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      router.push(`${pathname}?category=${categoryId}`, { scroll: false });
    } else {
      router.push(pathname, { scroll: false });
    }
  };

  return (
    <CategoryButton 
      currentCategoryId={selectedCategory ?? undefined} 
      onCategoryChange={handleCategoryChange}
    >
      <ProductList selectedCategoryId={selectedCategory} />
    </CategoryButton>
  );
}
