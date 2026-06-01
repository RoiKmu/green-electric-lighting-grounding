'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface ProductFAQProps {
  faq: FAQItem[];
  title?: string;
}

export default function ProductFAQ({ faq, title }: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-industrial-900 mb-8">
          {title || 'Frequently Asked Questions'}
        </h2>
        
        <div className="space-y-4 max-w-4xl">
          {faq.map((item, index) => (
            <div 
              key={index}
              className="border border-industrial-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-industrial-50 transition-colors"
              >
                <span className="font-medium text-industrial-900 pr-4">{item.q}</span>
                <svg 
                  className={`w-5 h-5 text-industrial-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 py-4 bg-industrial-50 border-t border-industrial-200">
                  <p className="text-industrial-700 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
