import { setRequestLocale } from 'next-intl/server';
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

function ProductsPageLoading() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-electric-600"></div>
    </main>
  );
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<ProductsPageLoading />}>
      <ProductsClient locale={locale} />
    </Suspense>
  );
}
