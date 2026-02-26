"use client";

import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES, getProductDetailPath } from "@/data/products";

interface ProductListProps {
  selectedCategoryId?: string | null;
}

export default function ProductList({ selectedCategoryId = null }: ProductListProps) {
  const categories = selectedCategoryId 
    ? PRODUCT_CATEGORIES.filter(cat => cat.id === selectedCategoryId)
    : PRODUCT_CATEGORIES;

  const currentCategory = selectedCategoryId 
    ? PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategoryId)
    : null;

  const allProducts = categories.flatMap((category) => 
    category.items.map((product) => ({ ...product, categoryId: category.id, categoryName: category.name }))
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">
              {currentCategory ? currentCategory.name : 'Products'}
            </h1>
            <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              {currentCategory ? currentCategory.description : 'Comprehensive range of lightning protection and grounding solutions'}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-industrial-100">
            <h3 className="text-2xl font-bold text-industrial-900 mb-6">
              {currentCategory ? `${currentCategory.name} Products` : 'All Products'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="border border-industrial-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-industrial-900 mb-2">{product.name}</h4>
                    <Link 
                      href={getProductDetailPath(product.categoryId, product.id)} 
                      className="text-green-electric-600 hover:text-green-electric-500 font-medium text-sm inline-flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
