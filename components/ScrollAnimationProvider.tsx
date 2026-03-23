'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // 引入 usePathname 监听路由/语言变化

interface ScrollAnimationProviderProps {
  children: React.ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<'down' | 'up'>('down');
  
  // 获取当前路径（包含语言前缀，如 /en 或 /ar）
  const pathname = usePathname(); 

  useEffect(() => {
    const animationClasses = [
      'animate-on-scroll',
      'animate-fade-in',
      'animate-slide-up',
      'animate-slide-down',
      'animate-slide-left',
      'animate-slide-right',
      'animate-scale-in',
      'animate-zoom-in',
    ];

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirectionRef.current = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const direction = scrollDirectionRef.current;
            target.classList.add('is-visible');
            target.classList.remove('is-hidden');
            target.setAttribute('data-scroll-direction', direction);
          } else {
            const wasVisible = target.classList.contains('is-visible');
            if (wasVisible) {
              target.classList.remove('is-visible');
              target.classList.add('is-hidden');
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    const observeElements = () => {
      if (!observerRef.current) return;

      animationClasses.forEach((className) => {
        // 移除 :not([data-observed]) 限制，让我们能检查所有相关元素
        document.querySelectorAll(`.${className}`).forEach((el) => {
          const element = el as HTMLElement;

          if (!element.hasAttribute('data-observed')) {
            // 新元素：打上标记并开始观察
            element.setAttribute('data-observed', 'true');
            observerRef.current!.observe(element);
          } else {
            // 已存在的元素：检查 React 是否在切换语言时抹除了我们的动态类名
            const isMissingState = !element.classList.contains('is-visible') && !element.classList.contains('is-hidden');
            
            if (isMissingState) {
              // 如果元素既没有 is-visible 也没有 is-hidden，说明被 React 渲染重置了
              // 强制解除观察并重新观察，这会立即触发一次 IntersectionObserver 的回调
              observerRef.current!.unobserve(element);
              observerRef.current!.observe(element);
            }
          }
        });
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      mutationObserver.disconnect();
    };
  }, [pathname]); // 依赖数组加入 pathname

  return <>{children}</>;
}