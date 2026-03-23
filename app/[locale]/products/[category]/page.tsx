import { setRequestLocale } from 'next-intl/server';
import { Suspense } from "react";
import CategoryPageClient from "./CategoryPageClient";

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
