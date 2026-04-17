import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';
import { ProductSchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';
import { getCategoryById, getProductById } from '@/data/products';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://green-electric.com';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; product: string; locale: string }> 
}): Promise<Metadata> {
  const { category, product, locale } = await params;
  
  const currentCategory = getCategoryById(category);
  const currentProduct = getProductById(category, product);
  
  if (!currentCategory || !currentProduct) {
    return {
      title: 'Product Not Found',
    };
  }

  const productName = currentProduct.nameEn || currentProduct.name;
  const categoryName = currentCategory.nameEn;
  const description = currentProduct.description || `Professional ${productName} for lightning protection and grounding systems. Compliant with IEC 62561, UL 467, and Saudi Aramco SAES standards.`;

  const titles: Record<string, string> = {
    en: `${productName} | ${categoryName}`,
    zh: `${currentProduct.name} | ${currentCategory.name}`,
    ar: `${productName} | ${categoryName}`
  };

  return {
    title: titles[locale] || titles.en,
    description,
    keywords: [
      productName,
      categoryName,
      'lightning protection',
      'grounding system',
      'IEC 62561',
      'UL 467',
      'Saudi Aramco',
      'EPC project'
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/products/${category}/${product}`,
      languages: {
        en: `${BASE_URL}/en/products/${category}/${product}`,
        zh: `${BASE_URL}/zh/products/${category}/${product}`,
        ar: `${BASE_URL}/ar/products/${category}/${product}`,
      },
    },
  };
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ category: string; product: string; locale: string }> 
}) {
  const { category, product, locale } = await params;
  
  const currentCategory = getCategoryById(category);
  const currentProduct = getProductById(category, product);

  if (!currentCategory || !currentProduct) {
    return <ProductDetailClient params={params} />;
  }

  const productName = currentProduct.nameEn || currentProduct.name;
  const categoryName = currentCategory.nameEn;
  const description = currentProduct.description || `Professional ${productName} for lightning protection and grounding systems.`;

  const breadcrumbs = [
    { name: locale === 'zh' ? '首页' : locale === 'ar' ? 'الرئيسية' : 'Home', url: `${BASE_URL}/${locale}` },
    { name: locale === 'zh' ? '产品' : locale === 'ar' ? 'المنتجات' : 'Products', url: `${BASE_URL}/${locale}/products` },
    { name: categoryName, url: `${BASE_URL}/${locale}/products/${category}` },
    { name: productName, url: `${BASE_URL}/${locale}/products/${category}/${product}` },
  ];

  const specifications = [];
  if (currentProduct.specifications?.material) {
    specifications.push({ name: 'Material', value: currentProduct.specifications.material });
  }
  if (currentProduct.specifications?.size) {
    specifications.push({ name: 'Size', value: currentProduct.specifications.size });
  }
  if (currentProduct.specifications?.standard) {
    specifications.push({ name: 'Standard', value: currentProduct.specifications.standard });
  }

  const standards = ['IEC 62561', 'UL 467', 'IEEE 80'];
  if (currentProduct.specifications?.standard) {
    standards.push(currentProduct.specifications.standard);
  }

  return (
    <>
      <ProductSchema
        locale={locale}
        url={BASE_URL}
        name={productName}
        nameEn={productName}
        description={description}
        image={currentProduct.image}
        category={categoryName}
        specifications={specifications}
        standards={standards}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ProductDetailClient params={params} />
    </>
  );
}
