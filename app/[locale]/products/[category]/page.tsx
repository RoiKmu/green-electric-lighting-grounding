import { setRequestLocale } from 'next-intl/server';
import { Suspense } from "react";
import type { Metadata } from "next";
import CategoryPageClient from "./CategoryPageClient";
import { getCategoryById, PRODUCT_CATEGORIES } from "@/data/products";

export function generateStaticParams() {
  const locales = ['en', 'zh', 'ar'];
  return locales.flatMap(locale =>
    PRODUCT_CATEGORIES.map(category => ({
      locale,
      category: category.id,
    }))
  );
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; category: string }> 
}): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = getCategoryById(category);
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
    };
  }
  
  const titles: Record<string, string> = {
    en: `${categoryData.nameEn} - Green Electric Products`,
    zh: `${categoryData.name} - 格林电工产品`,
    ar: `${categoryData.nameEn} - منتجات جرين إلكتريك`
  };
  
  const descriptions: Record<string, string> = {
    en: categoryData.description,
    zh: categoryData.description,
    ar: categoryData.description
  };
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

function CategoryPageLoading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-electric-600"></div>
    </main>
  );
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<CategoryPageLoading />}>
      <CategoryPageClient categoryId={category} />
    </Suspense>
  );
}
