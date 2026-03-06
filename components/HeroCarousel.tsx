'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'EPC Total Lightning Protection',
    subtitle: 'Complete Supply · Installation Support · System Integration',
    description: 'Your one-stop solution for EPC projects. We seamlessly integrate with your workflow, providing complete equipment supply and on-site installation guidance.',
    category: 'EPC Solutions',
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Petrochemical & Tank Farm Protection',
    subtitle: 'Defending High-Risk & Explosive Environments',
    description: 'Specialized lightning protection for volatile areas. We deliver certified explosion-proof systems, robust equipotential bonding, and ultra-low resistance grounding (≤1Ω) to ensure absolute facility safety.',
    category: 'Hazardous Areas',
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Power & New Energy Systems',
    subtitle: 'Comprehensive Power Station Security',
    description: 'Safeguarding wind, solar, and traditional power infrastructure. Our systems offer robust direct strike interception, advanced SPD integration, and long-lasting grounding networks.',
    category: 'Energy Sector',
    image: '/images/hero/hero-3.jpg',
  },
  {
    id: 4,
    title: 'End-to-End Engineering Services',
    subtitle: 'Expert Technical Support at Every Step',
    description: 'From product selection and system configuration to on-site installation guidance and final acceptance testing, our 30-year expert team guarantees your project meets every standard.',
    category: 'Technical Support',
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
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
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
                  {slide.category}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                {slide.title}
              </h2>

              <p className="text-xl md:text-2xl mb-4 text-green-electric-200 font-medium">
                {slide.subtitle}
              </p>

              <p className="text-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
                {slide.description}
              </p>
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
