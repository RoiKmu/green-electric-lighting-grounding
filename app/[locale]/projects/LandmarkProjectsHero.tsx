'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

const projects = [
  {
    id: 1,
    title: 'National Reserve Oil Depot Protection',
    subtitle: 'Zhoushan, Zhejiang | Completed 2023',
    description: 'Designed and implemented a comprehensive direct strike lightning and intelligent grounding system for one of the largest national oil reserves, overcoming extreme coastal salt-spray corrosion challenges.',
    industry: 'Petrochemical & Natural Gas',
    stats: [
      { label: 'Coverage Area', value: '500,000 m²' },
      { label: 'Safety Record', value: '100% Incident-Free' },
      { label: 'Design Life', value: '30+ Years' }
    ],
    href: '/projects#zhoushan-oil-depot',
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Hyperscale Cloud Data Center',
    subtitle: 'Gui\'an New Area | Completed 2024',
    description: 'Provided an end-to-end electromagnetic shielding and equipotential bonding solution, ensuring zero downtime for critical servers during severe thunderstorm seasons in mountainous terrain.',
    industry: 'Data Center',
    stats: [
      { label: 'Server Racks', value: '15,000+' },
      { label: 'Uptime', value: '99.999%' },
      { label: 'Response Time', value: '< 1ms' }
    ],
    href: '/projects#guian-data-center',
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Ultra-High Voltage (UHV) Substation',
    subtitle: 'Xinjiang | Completed 2022',
    description: 'Custom-engineered high-performance surge protection devices (SPDs) and deep-well grounding systems adapted for extreme desert climates, safeguarding the backbone of the national power grid.',
    industry: 'Power & Energy',
    stats: [
      { label: 'Voltage Level', value: '±800 kV' },
      { label: 'Ground Resistance', value: '< 0.5 Ω' },
      { label: 'Soil Type', value: 'High Resistivity' }
    ],
    href: '/projects#xinjiang-uhv',
    image: '/images/hero/hero-3.jpg',
  },
];

export default function LandmarkProjectsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1.08);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations('projects');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 12000);
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
    <section ref={sectionRef} className="relative h-screen md:h-screen overflow-hidden bg-industrial-950">
      <div 
        className="absolute -inset-[6%] w-[112%] h-[112%] transition-transform duration-700 ease-out"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-industrial-950/95 via-industrial-900/85 to-transparent" />

          <div className="relative container mx-auto px-6 h-full flex items-center z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-industrial-800/80 backdrop-blur-sm rounded-full mb-6 border border-industrial-700">
                <div className="w-2 h-2 bg-green-electric-400 rounded-full me-3 animate-pulse shadow-[0_0_8px_rgba(var(--color-green-electric-400),0.8)]" />
                <span className="text-sm font-semibold text-green-electric-300 uppercase tracking-wider">
                  {project.industry}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight tracking-tight">
                {project.title}
              </h1>
              <div className="flex items-center mb-6 text-green-electric-200 font-medium">
                <svg className="w-5 h-5 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.subtitle}
              </div>

              <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed border-s-2 border-green-electric-600/50 ps-4">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {project.stats.map((stat, i) => (
                  <div key={i} className="bg-industrial-900/50 backdrop-blur-sm border border-white/5 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link 
                href={project.href}
                className="group inline-flex px-8 py-4 bg-transparent border border-green-electric-500 text-green-electric-400 rounded-lg hover:bg-green-electric-600 hover:text-white font-semibold text-lg transition-all duration-300 items-center"
              >
                {t('viewCaseStudy')}
                <svg className="w-5 h-5 ms-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="absolute bottom-10 start-6 md:start-auto md:end-10 flex flex-col space-y-3 z-20 w-48">
        <div className="text-white/60 text-sm font-medium mb-2">
          0{currentSlide + 1} / 0{projects.length}
        </div>
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div 
                className={`h-full bg-green-electric-500 transition-all duration-1000 ${
                  index === currentSlide ? 'w-full' : 'w-0'
                }`} 
              />
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 end-6 md:end-64 flex space-x-2 z-20">
        <button
          onClick={() => goToSlide((currentSlide - 1 + projects.length) % projects.length)}
          className="w-12 h-12 bg-industrial-900/80 hover:bg-green-electric-600 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 border border-white/10 hover:border-transparent"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % projects.length)}
          className="w-12 h-12 bg-industrial-900/80 hover:bg-green-electric-600 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 border border-white/10 hover:border-transparent"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-0 start-0 end-0 h-40 bg-gradient-to-t from-industrial-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
