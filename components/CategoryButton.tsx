"use client";

import { PRODUCT_CATEGORIES } from "@/data/products";
import { ReactNode, useState } from "react";

interface CategoryButtonProps {
  currentCategoryId?: string;
  onCategoryChange?: (categoryId: string | null) => void;
  children?: ReactNode;
}

export default function CategoryButton({ currentCategoryId, onCategoryChange, children }: CategoryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange?.(categoryId);
    setIsOpen(false);
  };

  const handleShowAll = () => {
    onCategoryChange?.(null);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div 
        className={`fixed left-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto pt-20 pb-6 px-4">
          <button 
            onClick={handleShowAll}
            className={`w-full text-left font-semibold transition-all duration-200 block py-3 px-4 rounded-lg mb-4 ${
              currentCategoryId === undefined || currentCategoryId === null
                ? 'bg-green-electric-600 text-white' 
                : 'bg-industrial-100 text-industrial-700 hover:bg-green-electric-50 hover:text-green-electric-600'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              产品中心
            </span>
          </button>

          <h3 className="text-lg font-bold text-industrial-500 mb-3 flex items-center gap-2 px-4 uppercase tracking-wider">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            分类
          </h3>
          <ul className="space-y-1">
            {PRODUCT_CATEGORIES.map((category) => (
              <li key={category.id}>
                <button 
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full text-left font-medium transition-all duration-200 block py-3 px-4 rounded-lg ${
                    category.id === currentCategoryId 
                      ? 'bg-green-electric-100 text-green-electric-700 border-l-4 border-green-electric-500' 
                      : 'text-industrial-700 hover:text-green-electric-600 hover:bg-green-electric-50'
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-r-full bg-green-electric-600 shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-green-electric-500 hover:shadow-xl ${
          isOpen ? 'left-72' : 'left-0'
        }`}
        aria-label="Toggle categories"
      >
        <svg 
          className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className={`transition-all duration-300 ease-out ${isOpen ? 'ml-72' : 'ml-0'}`}>
        {children}
      </div>
      
      <div 
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
