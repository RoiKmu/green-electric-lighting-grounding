'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getFeaturedProducts, getProductDetailPath, Product } from '@/data/products';

export default function ProductCarousel() {
  const featuredProducts = getFeaturedProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying && featuredProducts.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, featuredProducts.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (featuredProducts.length === 0) return null;

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {featuredProducts.map((product, index) => (
        <Link
          key={product.id}
          href={getProductDetailPath(product.categoryId || '', product.id)}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/90 via-industrial-900/60 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8 md:px-12">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center px-4 py-2 bg-green-electric-600/90 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30">
                    <div className="w-2 h-2 bg-green-electric-300 rounded-full mr-3 animate-pulse" />
                    <span className="text-sm font-semibold text-white uppercase tracking-wider">
                      Featured Product
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight tracking-tight">
                    {product.name}
                  </h2>

                  {product.nameEn && (
                    <p className="text-xl md:text-2xl mb-4 text-green-electric-200 font-medium">
                      {product.nameEn}
                    </p>
                  )}

                  {product.description && (
                    <p className="text-lg mb-8 text-gray-300 max-w-xl leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <div className="inline-flex items-center px-8 py-4 bg-green-electric-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-electric-900/30 group-hover:bg-green-electric-500">
                    View Details
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <button
        onClick={(e) => {
          e.preventDefault();
          goToPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              goToSlide(index);
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-10 h-3 bg-green-electric-500 rounded-full'
                : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
