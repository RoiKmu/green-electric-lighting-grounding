'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES, PRODUCT_CATEGORY_ROUTES } from '@/lib/routes';

const slides = [
  {
    id: 1,
    title: 'End-to-End Lightning Ecosystem',
    subtitle: '一站式防雷接地解决方案',
    description: '从方案设计、产品供应到施工指导，我们提供完美兼容的完整安全系统，让您的采购与安装流程更高效、更省心。',
    category: 'One-Stop Solution',
    href: '/products', // 引导去查看完整产品线
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Expert Engineering & Problem Solving',
    subtitle: '专业驱动，攻克复杂防护难题',
    description: '30年深耕制造与工业领域，针对高风险、易燃易爆及极端环境，提供定制化的高性能防雷与静电防护技术。',
    category: 'Professional Expertise',
    href: ROUTES.ABOUT, // 引导去了解公司实力
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Uncompromising System Reliability',
    subtitle: '高品质材料与精湛工艺',
    description: '精选优质原材，结合领先的提前放电（ESE）与放热焊接技术，确保分子级连接，保障系统终身导电连续性与安全性。',
    category: 'Premium Quality',
    href: '/products/specialized', // 引导去查看核心技术/工艺
    image: '/images/hero/hero-3.jpg',
  },
  {
    id: 4,
    title: 'Dedicated Lifecycle Support',
    subtitle: '全生命周期技术与售后保障',
    description: '从现场勘测、安装监测到售后维护，我们的技术专家团队为您提供全方位的快速响应与专业支持，免除后顾之忧。',
    category: 'After-Sales Service',
    href: ROUTES.CONTACT, // 引导去联系技术支持
    image: '/images/hero/hero-4.jpg',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1.08);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current?.offsetHeight || windowHeight;
      
      if (scrollY <= 0) {
        setScale(1.12);
      } else if (scrollY < sectionHeight * 0.8) {
        const progress = scrollY / (sectionHeight * 0.8);
        const newScale = 1.12 - progress * 0.12;
        setScale(Math.max(1, newScale));
      } else {
        setScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen md:h-screen overflow-hidden">
      <div 
        className="absolute -inset-[6%] w-[112%] h-[112%] transition-transform duration-700 ease-out"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/90 via-industrial-900/70 to-industrial-950/50" />

          {/* Content */}
          <div className="relative container mx-auto px-6 h-full flex items-center z-10">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-electric-600/90 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30">
                <div className="w-2 h-2 bg-green-electric-300 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  {slide.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                {slide.title}
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-4 text-green-electric-200 font-medium">
                {slide.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="group px-8 py-4 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-electric-900/30 flex items-center"
                >
                  Explore {slide.category}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={ROUTES.CONTACT}
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white hover:text-industrial-900 font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-green-electric-500 rounded-full'
                : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to ${slide.category} slide`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-industrial-950/50 to-transparent z-10" />
    </section>
  );
}
