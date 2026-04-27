'use client';

import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, getProductDetailPath } from '@/data/products';
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

interface ProductMegaMenuProps {
  isOpen: boolean;
}

export default function ProductMegaMenu({ isOpen }: ProductMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0]?.id || '');
  
  const tCategories = useTranslations('products.categories');
  const tItems = useTranslations('products.items');
  
  const currentCategory = PRODUCT_CATEGORIES.find(cat => cat.id === activeCategory);

  if (!isOpen) return null;

  return (
    <div className="w-full bg-industrial-950 border-t border-industrial-800 overflow-hidden animate-fade-in">
      <div className="container mx-auto flex min-h-[380px]">
        
        <div className="w-1/4 border-r border-industrial-800 bg-industrial-900/30 py-5">
          <ul className="space-y-0.5 px-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <li
                key={category.id}
                onMouseEnter={() => setActiveCategory(category.id)}
                className={`
                  group flex items-center justify-between px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200
                  ${activeCategory === category.id 
                    ? 'bg-industrial-800 text-green-electric-400 shadow-sm font-semibold' 
                    : 'text-industrial-300 hover:bg-industrial-800/60 hover:text-industrial-100'}
                `}
              >
                <span className="text-sm">{tCategories(`${category.id}.name`)}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeCategory === category.id ? 'translate-x-1 text-green-electric-400' : 'opacity-0 group-hover:opacity-50'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 p-6 bg-industrial-950 overflow-y-auto">
          <div className="flex justify-between items-center mb-4 border-b border-industrial-800 pb-3">
            <div>
              <h3 className="text-lg font-bold text-white">{currentCategory && tCategories(`${currentCategory.id}.name`)}</h3>
              <p className="text-xs text-industrial-400 mt-0.5">{currentCategory?.description}</p>
            </div>
            <Link 
              href={`/products?category=${currentCategory?.id}`} 
              className="text-xs text-green-electric-400 hover:text-green-electric-300 font-medium transition-colors whitespace-nowrap"
            >
              {tCategories('viewAll')} →
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-2.5">
            {currentCategory?.items.map((product) => (
              <Link
                key={product.id}
                href={getProductDetailPath(currentCategory.id, product.id)}
                className="group flex flex-col p-2 rounded-lg hover:bg-industrial-900 transition-all duration-200"
              >
                <div className="w-full aspect-square bg-industrial-800 rounded-lg overflow-hidden border border-industrial-700 mb-1.5 flex items-center justify-center p-1.5">
                  <img
                    src={product.image}
                    alt={tItems(product.id)}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-industrial-200 group-hover:text-green-electric-400 transition-colors line-clamp-2 leading-tight">
                    {tItems(product.id)}
                  </h4>
                  {product.tier && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded mt-1 inline-block ${
                      product.tier === 'high-performance' 
                        ? 'bg-amber-900/30 text-amber-400' 
                        : product.tier === 'engineering-core'
                        ? 'bg-slate-700/50 text-slate-300'
                        : 'bg-orange-900/30 text-orange-400'
                    }`}>
                      {product.tier === 'high-performance' ? '核心组件' : product.tier === 'engineering-core' ? '工程组件' : '配套'}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
