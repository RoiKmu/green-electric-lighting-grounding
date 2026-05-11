import { setRequestLocale } from 'next-intl/server';
import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Products - Green Electric Lightning Protection & Grounding Systems',
    zh: '产品中心 - 格林电工防雷接地系统',
    ar: 'المنتجات - جرين إلكتريك لأنظمة الحماية من الصواعق والتأريض'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Professional lightning protection & grounding products: ESE air terminals, copper-bonded rods, exothermic welding, and more. IEC 62561, UL 467, IEEE 80 compliant.',
    zh: '专业防雷接地产品：提前放电避雷针、铜包钢接地极、放热焊接等。符合IEC 62561、UL 467、IEEE 80标准。',
    ar: 'منتجات احترافية للحماية من الصواعق والتأريض: أقطاب هوية ESE، قضبان التأريض المغلفة بالنحاس، اللحام الحراري، والمزيد. متوافقة مع IEC 62561 و UL 467 و IEEE 80.'
  };
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

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
