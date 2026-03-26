'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface FlagshipProductTemplateProps {
  product: {
    titleKey: string;
    subtitleKey?: string;
    coreParameterLabelKey: string;
    coreParameterValueKey: string;
    descriptionKey: string;
    image: string;
    introductionKeys: string[];
    featureKeys: string[];
    techPrincipleKeys: Array<{ titleKey: string; descriptionKey: string }>;
    productModels?: {
      headersKey: string[];
      rows: string[][];
    };
    protectionRadiusTables?: {
      titleKey: string;
      subtitleKey?: string;
      classes: Array<{
        titleKey: string;
        headers: string[];
        rows: Array<{ label: string; values: (string | number)[] }>;
      }>;
    };
  };
}

export default function FlagshipProductTemplate({ product }: FlagshipProductTemplateProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('products.flagship');
  const tCommon = useTranslations('products');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const progress = Math.min((scrollY / (docHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);

      const sections = [heroRef, techRef];
      sections.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < windowHeight * 0.6 && rect.bottom > 0) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-industrial-950">
      <div className="fixed top-0 left-0 w-full h-1 bg-industrial-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-electric-500 to-green-electric-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-950 via-industrial-900 to-industrial-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(21,128,61,0.1),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1200 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-green-electric-500/20 border border-green-electric-500/30 rounded-full mb-6">
                <span className="text-green-electric-400 text-sm font-medium">{t('badge')}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {t(product.titleKey)}
              </h1>
              {product.subtitleKey && (
                <p className="text-xl md:text-2xl text-industrial-400 mb-6 font-light">
                  {t(product.subtitleKey)}
                </p>
              )}
              
              <div className="mb-8">
                <div className="inline-block px-8 py-6 bg-gradient-to-r from-green-electric-600/20 to-green-electric-500/20 border-2 border-green-electric-500/40 rounded-2xl backdrop-blur-sm">
                  <div className="text-green-electric-400 text-sm font-medium mb-2">{t(product.coreParameterLabelKey)}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {t(product.coreParameterValueKey)}
                  </div>
                </div>
              </div>

              <p className="text-lg text-industrial-300 mb-8 leading-relaxed max-w-xl">
                {t(product.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-electric-600 to-green-electric-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-green-electric-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t('getQuote')}
                </Link>
                <button 
                  onClick={() => techRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border-2 border-industrial-600 text-white rounded-xl font-semibold text-lg hover:bg-industrial-800 transition-all duration-300"
                >
                  {t('learnTechnology')}
                </button>
              </div>
            </div>

            <div className={`relative h-[600px] transform transition-all duration-1200 ease-out delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-electric-500/10 to-transparent rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-industrial-700/50 bg-industrial-800">
                <Image
                  src={product.image}
                  alt={t(product.titleKey)}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-electric-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-green-electric-400/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-industrial-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div ref={techRef} className="relative py-32 bg-industrial-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('productIntroduction')}</h2>
            <p className="text-xl text-industrial-400 max-w-3xl mx-auto">
              {t('learnAbout', { product: t(product.titleKey) })}
            </p>
          </div>

          <div className="bg-industrial-800/50 border border-industrial-700 rounded-2xl p-8 mb-12">
            {product.introductionKeys.map((key, index) => (
              <p key={index} className="text-industrial-300 mb-4 leading-relaxed">
                {t(key)}
              </p>
            ))}

            <h3 className="text-2xl font-bold text-white mt-8 mb-6">{t('features')}</h3>
            <ul className="space-y-3 mb-6">
              {product.featureKeys.map((key, index) => (
                <li key={index} className="flex items-start text-industrial-300">
                  <svg className="w-5 h-5 text-green-electric-500 me-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {product.techPrincipleKeys.map((principle, index) => (
              <div 
                key={index}
                className={`group p-8 bg-industrial-800/50 border border-industrial-700 rounded-2xl hover:border-green-electric-500/50 transition-all duration-500 transform hover:-translate-y-2 ${activeSection >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-green-electric-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-electric-500/30 transition-colors">
                  <svg className="w-8 h-8 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t(principle.titleKey)}</h3>
                <p className="text-industrial-400 leading-relaxed">{t(principle.descriptionKey)}</p>
              </div>
            ))}
          </div>

          {(product.productModels || product.protectionRadiusTables) && (
            <div className="bg-industrial-800/30 rounded-3xl border border-industrial-700 overflow-hidden">
              <div className="p-8">
                {product.productModels && (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-6">{t('productModels')}</h3>
                    
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-industrial-700">
                            {product.productModels.headersKey.map((headerKey, index) => (
                              <th key={index} className="border border-industrial-600 px-4 py-3 text-left text-white font-bold last:text-center">
                                {t(headerKey)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.productModels.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-industrial-700/50">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-industrial-600 px-4 py-3 text-industrial-300 text-center">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {product.protectionRadiusTables && (
                  <>
                    <h4 className="text-xl font-bold text-white mb-4">{t(product.protectionRadiusTables.titleKey)}</h4>
                    {product.protectionRadiusTables.subtitleKey && (
                      <p className="text-industrial-400 mb-6">{t(product.protectionRadiusTables.subtitleKey)}</p>
                    )}

                    <div className="space-y-8">
                      {product.protectionRadiusTables.classes.map((classItem, classIndex) => (
                        <div key={classIndex}>
                          <h5 className="text-lg font-bold text-green-electric-400 mb-3">{t(classItem.titleKey)}</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                              <thead>
                                <tr className="bg-industrial-700">
                                  {classItem.headers.map((header, headerIndex) => (
                                    <th key={headerIndex} className="border border-industrial-600 px-3 py-2 text-left text-white font-bold first:text-left text-center">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {classItem.rows.map((row, rowIndex) => (
                                  <tr key={rowIndex} className="hover:bg-industrial-700/50">
                                    <td className="border border-industrial-600 px-3 py-2 text-industrial-300 font-medium text-left">
                                      {row.label}
                                    </td>
                                    {row.values.map((value, valueIndex) => (
                                      <td key={valueIndex} className="border border-industrial-600 px-2 py-2 text-center text-industrial-300">
                                        {value}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-electric-900 to-green-electric-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tCommon('needCustom')}</h2>
          <p className="text-xl text-green-electric-200 mb-8 max-w-2xl mx-auto">
            {t('customSolutionDescription')}
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-green-electric-800 rounded-xl font-bold text-lg hover:bg-industrial-50 transition-all duration-300 shadow-lg"
          >
            {t('contactUsNow')}
          </Link>
        </div>
      </div>
    </main>
  );
}
