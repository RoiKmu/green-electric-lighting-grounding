"use client";

import CategoryButton from "@/components/CategoryButton";
import ProductList from "@/components/ProductList";

interface ProductsClientProps {
  locale: string;
}

export default function ProductsClient({ locale }: ProductsClientProps) {
  return (
    <CategoryButton>
      <ProductList />
    </CategoryButton>
  );
}
