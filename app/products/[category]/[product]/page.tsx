import ProductDetailClient from './ProductDetailClient';

export default function ProductDetailPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  return <ProductDetailClient params={params} />;
}
