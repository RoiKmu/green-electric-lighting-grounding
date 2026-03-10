import ProductDetailClient from './ProductDetailClient';

export default function ProductDetailPage({ params }: { params: Promise<{ category: string; product: string; locale: string }> }) {
  return <ProductDetailClient params={params} />;
}
