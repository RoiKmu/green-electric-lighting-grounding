import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES, getCategoryById, getProductDetailPath } from "@/data/products";
import { PRODUCT_CATEGORY_ROUTES } from "@/lib/routes";
import CategoryButton from "@/components/CategoryButton";

interface CategoryPageProps {
  categoryId: string;
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const currentCategory = getCategoryById(categoryId);
  
  if (!currentCategory) {
    return (
      <CategoryButton>
        <main className="min-h-screen bg-white">
          <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-industrial-900 mb-4">Category Not Found</h1>
                <p className="text-xl text-industrial-600 mb-8">The category you are looking for does not exist.</p>
                <Link
                  href="/products"
                  className="px-6 py-3 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </section>
        </main>
      </CategoryButton>
    );
  }

  return (
    <CategoryButton currentCategoryId={categoryId}>
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">
                {currentCategory.name}
              </h1>
              <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-industrial-100">
              <h3 className="text-2xl font-bold text-industrial-900 mb-6">{currentCategory.name} Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.items.map((product, index) => (
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
                        href={getProductDetailPath(categoryId, product.id)} 
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
    </CategoryButton>
  );
}
