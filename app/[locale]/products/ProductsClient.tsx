"use client";

import { useState } from "react";
import CategoryButton from "@/components/CategoryButton";
import ProductList from "@/components/ProductList";

interface ProductsClientProps {
  locale: string;
}

export default function ProductsClient({ locale }: ProductsClientProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <CategoryButton 
      currentCategoryId={selectedCategoryId || undefined}
      onCategoryChange={handleCategoryChange}
    >
      <ProductList selectedCategoryId={selectedCategoryId} />
    </CategoryButton>
  );
}
