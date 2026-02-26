'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/lib/routes';

interface FlagshipProductTemplateProps {
  category: {
    id: string;
    name: string;
    nameEn: string;
    description: string;
    tier?: string;
    items: any[];
  };
  product: {
    id: string;
    name: string;
    nameEn?: string;
    image: string;
    description?: string;
    features?: string[];
  };
}

export default function FlagshipProductTemplate({ category, product }: FlagshipProductTemplateProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const progress = Math.min((scrollY / (docHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);

      const sections = [heroRef, techRef, trustRef];
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

  const coreParameter = getCoreParameter(category.id);

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
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-green-electric-500/20 border border-green-electric-500/30 rounded-full mb-6">
                <span className="text-green-electric-400 text-sm font-medium">旗舰技术解决方案</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                {product.name}
              </h1>
              {product.nameEn && (
                <p className="text-xl md:text-2xl text-industrial-400 mb-6 font-light">
                  {product.nameEn}
                </p>
              )}
              
              <div className="mb-8">
                <div className="inline-block px-8 py-6 bg-gradient-to-r from-green-electric-600/20 to-green-electric-500/20 border-2 border-green-electric-500/40 rounded-2xl backdrop-blur-sm">
                  <div className="text-green-electric-400 text-sm font-medium mb-2">核心参数</div>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {coreParameter}
                  </div>
                </div>
              </div>

              <p className="text-lg text-industrial-300 mb-8 leading-relaxed max-w-xl">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href={ROUTES.CONTACT}
                  className="px-8 py-4 bg-gradient-to-r from-green-electric-600 to-green-electric-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-green-electric-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  获取报价
                </Link>
                <button 
                  onClick={() => techRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-transparent border-2 border-industrial-600 text-white rounded-xl font-semibold text-lg hover:bg-industrial-800 transition-all duration-300"
                >
                  了解技术原理
                </button>
              </div>
            </div>

            <div className={`relative h-[600px] transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-electric-500/10 to-transparent rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-3xl overflow-hidden border border-industrial-700/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/60 to-transparent" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">技术原理</h2>
            <p className="text-xl text-industrial-400 max-w-3xl mx-auto">
              深入了解{product.name}的核心技术优势
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {getTechPrinciples(category.id).map((principle, index) => (
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
                <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-industrial-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="relative h-96 bg-industrial-800/30 rounded-3xl border border-industrial-700 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-green-electric-500/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-12 h-12 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xl text-industrial-300">点击播放技术原理动画</p>
                <p className="text-sm text-industrial-500 mt-2">展示{product.name}的工作原理</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={trustRef} className="relative py-32 bg-industrial-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">权威认证</h2>
            <p className="text-xl text-industrial-400 max-w-3xl mx-auto">
              通过国家级实验室检测,品质值得信赖
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className={`group relative aspect-[3/4] bg-industrial-900 border border-industrial-700 rounded-xl overflow-hidden hover:border-green-electric-500/50 transition-all duration-500 transform hover:-translate-y-2 ${activeSection >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${item * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-industrial-800 to-industrial-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-electric-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm text-industrial-300 font-medium">检测报告 {item}</p>
                    <p className="text-xs text-industrial-500 mt-2">国家级实验室认证</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-green-electric-500/0 group-hover:bg-green-electric-500/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href={ROUTES.CONTACT}
              className="inline-block px-12 py-5 bg-gradient-to-r from-green-electric-600 to-green-electric-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-green-electric-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              下载完整检测报告
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-green-electric-900 to-green-electric-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">需要定制方案？</h2>
          <p className="text-xl text-green-electric-200 mb-8 max-w-2xl mx-auto">
            联系我们的技术专家,获取针对您特定需求的专业解决方案
          </p>
          <Link 
            href={ROUTES.CONTACT}
            className="inline-block px-10 py-4 bg-white text-green-electric-800 rounded-xl font-bold text-lg hover:bg-industrial-50 transition-all duration-300 shadow-lg"
          >
            立即咨询
          </Link>
        </div>
      </div>
    </main>
  );
}

function getCoreParameter(categoryId: string): string {
  const parameters: Record<string, string> = {
    'lightning-warning': '预警时间 20 分钟',
    'early-discharge-system': '保护半径 120m',
    'copper-clad-steel': '使用寿命 50 年',
    'exothermic-welding': '连接电阻 <0.05mΩ',
  };
  return parameters[categoryId] || '性能卓越';
}

function getTechPrinciples(categoryId: string): Array<{ title: string; description: string }> {
  const principles: Record<string, Array<{ title: string; description: string }>> = {
    'lightning-warning': [
      { title: '大气电场监测', description: '实时监测大气电场强度变化,精准捕捉雷电形成信号' },
      { title: '智能预警算法', description: '基于大数据的AI算法,提前20分钟准确预警雷电活动' },
      { title: '多级报警机制', description: '分级预警系统,根据雷电强度提供不同级别的警报' },
    ],
    'early-discharge-system': [
      { title: '提前放电技术', description: '主动产生上行先导,提前拦截雷电流,扩大保护半径' },
      { title: '高效引雷能力', description: '优化的电极设计,显著提升引雷效率和可靠性' },
      { title: '耐腐蚀材料', description: '采用航空级不锈钢,确保在恶劣环境下长期稳定运行' },
    ],
    'copper-clad-steel': [
      { title: '分子级结合', description: '先进的冶金工艺,实现铜层与钢芯的分子级结合' },
      { title: '双重优势', description: '兼具铜的优良导电性和钢的高强度机械性能' },
      { title: '超长寿命', description: '50年使用寿命,大幅降低维护成本和更换频率' },
    ],
    'exothermic-welding': [
      { title: '放热反应原理', description: '利用化学反应产生的高温,实现金属的熔融连接' },
      { title: '分子级连接', description: '焊接点形成分子级结合,电气连续性极佳' },
      { title: '施工安全可靠', description: '无需外部电源,操作简便,焊接质量稳定可靠' },
    ],
  };
  return principles[categoryId] || [
    { title: '技术创新', description: '采用行业领先的技术方案' },
    { title: '性能卓越', description: '在各种应用场景中表现优异' },
    { title: '品质保证', description: '严格的质量控制体系确保产品品质' },
  ];
}
