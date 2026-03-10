"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PRODUCT_CATEGORIES, getProductDetailPath } from "@/data/products";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const t = useTranslations('nav');
  const tCategories = useTranslations('products.categories');
  const tItems = useTranslations('products.items');

  return (
    <header 
      className="bg-industrial-950 text-white sticky top-0 z-50 transition-all duration-300"
      onMouseLeave={() => setIsProductsOpen(false)}
    >
      <nav className="container mx-auto px-6 py-4 relative z-20 bg-industrial-950">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center min-w-[180px]">
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold text-green-electric-400 flex items-start">
                  Green Electric
                  <sup className="text-[10px] ms-0.5 mt-1 text-green-electric-400">®</sup>
                </h1>
              </div>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="hidden lg:flex items-center">
              <div className="h-6 w-px bg-industrial-700"></div>
              <div 
                className="nav-link relative group px-8"
                onMouseEnter={() => setIsProductsOpen(false)}
              >
                <Link href="/" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors duration-300 py-2 block text-center">
                  {t('home')}
                </Link>
                <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-green-electric-400 transition-all duration-300 group-hover:w-full"></span>
              </div>
              
              <div className="h-6 w-px bg-industrial-700"></div>
              
              <div 
                className="products-nav relative group px-8"
                onMouseEnter={() => setIsProductsOpen(true)}
              >
                <Link href="/products" className={`font-medium transition-colors duration-300 py-2 block text-center ${isProductsOpen ? 'text-green-electric-400' : 'text-industrial-300 hover:text-green-electric-400'}`}>
                  {t('products')}
                </Link>
                <span className={`absolute bottom-0 start-0 h-0.5 bg-green-electric-400 transition-all duration-300 ${isProductsOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </div>
              
              <div className="h-6 w-px bg-industrial-700"></div>
              
              <div 
                className="nav-link relative group px-8"
                onMouseEnter={() => setIsProductsOpen(false)}
              >
                <Link href="/about" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors duration-300 py-2 block text-center">
                  {t('about')}
                </Link>
                <span className="absolute bottom-0 start-0 w-0 h-0.5 bg-green-electric-400 transition-all duration-300 group-hover:w-full"></span>
              </div>
              <div className="h-6 w-px bg-industrial-700"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>

        </div>
      </nav>

      <div 
        className={`w-full bg-industrial-950 border-t border-industrial-800 overflow-hidden transition-all duration-500 ease-in-out ${
          isProductsOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pt-6">
          <div className="grid grid-cols-6 gap-8">
            {[...PRODUCT_CATEGORIES].sort((a, b) => a.items.length - b.items.length).map((category) => (
              <div key={category.id} className="product-category">
                <h4 className="text-lg font-semibold text-green-electric-400 mb-4">
                  {tCategories(`${category.id}.name`)}
                </h4>
                <ul className="space-y-2">
                  {category.items.slice(0, 5).map((product) => (
                    <li key={product.id}>
                      <Link 
                        href={getProductDetailPath(category.id, product.id)} 
                        className="text-industrial-300 hover:text-green-electric-400 text-sm transition-colors block py-1"
                      >
                        {tItems(product.id)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
