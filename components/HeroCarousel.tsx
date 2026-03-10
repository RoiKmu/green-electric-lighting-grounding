'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const slideKeys = ['slide1', 'slide2', 'slide3', 'slide4'] as const;
const slideImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1.08);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('home.carousel');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideKeys.length);
    }, 10000);
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
      {slideKeys.map((slideKey, index) => (
        <div
          key={slideKey}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={slideImages[index]}
            alt={t(`${slideKey}.title`)}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/90 via-industrial-900/70 to-industrial-950/50" />

          <div className="relative container mx-auto px-6 h-full flex items-center z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-green-electric-600/90 backdrop-blur-sm rounded-full mb-6 border border-green-electric-500/30">
                <div className="w-2 h-2 bg-green-electric-300 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  {t(`${slideKey}.category`)}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                {t(`${slideKey}.title`)}
              </h2>

              <p className="text-xl md:text-2xl mb-4 text-green-electric-200 font-medium">
                {t(`${slideKey}.subtitle`)}
              </p>

              <p className="text-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
                {t(`${slideKey}.description`)}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-20">
        {slideKeys.map((slideKey, index) => (
          <button
            key={slideKey}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-green-electric-500 rounded-full'
                : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to ${t(`${slideKey}.category`)} slide`}
          />
        ))}
      </div>

      <button
        onClick={() => goToSlide((currentSlide - 1 + slideKeys.length) % slideKeys.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slideKeys.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 border border-white/10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-industrial-950/50 to-transparent z-10" />
    </section>
  );
}
