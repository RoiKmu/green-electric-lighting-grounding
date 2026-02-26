'use client';

import { useEffect, useRef } from 'react';

export default function ScrollSnapHandler() {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);
  const lastDirectionRef = useRef(0);
  const scrollSpeedRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const consecutiveScrollCountRef = useRef(0);

  useEffect(() => {
    const sections = ['hero', 'ecosystem', 'core-technologies', 'why-choose-us'];
    const snapSections = ['ecosystem', 'core-technologies', 'why-choose-us'];
    
    const SNAP_DELAY = 350;
    const MIN_SCROLL_SPEED = 3;
    const SCROLL_MOMENTUM_THRESHOLD = 5;
    
    const getSectionPositions = () => {
      return sections.map((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          return {
            index,
            id,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight,
            height: element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean) as { index: number; id: string; top: number; bottom: number; height: number }[];
    };

    const getTargetSectionIndex = (scrollY: number, direction: number, scrollSpeed: number) => {
      const positions = getSectionPositions();
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollY <= 0) return -1;
      
      const heroSection = positions.find(s => s.id === 'hero');
      if (heroSection && scrollY < heroSection.height * 0.3) {
        return -1;
      }
      
      const lastSnapSection = positions.find(s => s.id === 'why-choose-us');
      if (lastSnapSection && scrollY >= lastSnapSection.bottom - 100) {
        return -1;
      }
      
      const snapPositions = positions.filter(s => snapSections.includes(s.id));
      
      for (let i = 0; i < snapPositions.length; i++) {
        const section = snapPositions[i];
        const sectionTop = section.top;
        const sectionBottom = section.bottom;
        const sectionHeight = section.height;
        
        const isOversized = sectionHeight > windowHeight * 1.2;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          if (isOversized) {
            const visibleBottom = scrollY + windowHeight;
            const scrollProgress = (scrollY - sectionTop) / (sectionHeight - windowHeight);
            
            if (direction > 0) {
              if (visibleBottom < sectionBottom - 100) {
                return -2;
              }
              if (scrollSpeed > MIN_SCROLL_SPEED) {
                return -2;
              }
              if (i < snapPositions.length - 1) {
                return i + 1;
              }
              return -1;
            } else {
              if (scrollY > sectionTop + 150) {
                return -2;
              }
              if (scrollSpeed > MIN_SCROLL_SPEED) {
                return -2;
              }
              return i;
            }
          } else {
            const sectionMiddle = sectionTop + sectionHeight / 2;
            const distanceFromMiddle = Math.abs(scrollY - sectionMiddle);
            
            if (scrollSpeed > MIN_SCROLL_SPEED && distanceFromMiddle > sectionHeight * 0.2) {
              return -2;
            }
            
            if (direction > 0) {
              if (i < snapPositions.length - 1) {
                return i + 1;
              }
              return -1;
            } else {
              return i;
            }
          }
        }
      }
      
      for (let i = 0; i < snapPositions.length; i++) {
        const section = snapPositions[i];
        if (scrollY < section.top + section.height * 0.3) {
          return i;
        }
      }
      
      return -1;
    };

    const scrollToSection = (sectionId: string) => {
      if (isScrollingRef.current) return;
      
      const element = document.getElementById(sectionId);
      if (element) {
        isScrollingRef.current = true;
        element.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          isScrollingRef.current = false;
          lastScrollYRef.current = window.scrollY;
        }, 600);
      }
    };

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollYRef.current);
      const timeDelta = currentTime - lastScrollTimeRef.current;
      
      const instantSpeed = timeDelta > 0 ? scrollDelta / timeDelta : 0;
      scrollSpeedRef.current = instantSpeed * 100;
      
      const direction = currentScrollY > lastScrollYRef.current ? 1 : (currentScrollY < lastScrollYRef.current ? -1 : lastDirectionRef.current);
      lastDirectionRef.current = direction;
      lastScrollTimeRef.current = currentTime;
      
      if (scrollDelta > 5) {
        consecutiveScrollCountRef.current++;
      } else {
        consecutiveScrollCountRef.current = 0;
      }
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        const scrollY = currentScrollY;
        const scrollSpeed = scrollSpeedRef.current;
        const consecutiveScrolls = consecutiveScrollCountRef.current;
        
        if (consecutiveScrolls > SCROLL_MOMENTUM_THRESHOLD) {
          consecutiveScrollCountRef.current = 0;
          return;
        }
        
        const targetIndex = getTargetSectionIndex(scrollY, direction, scrollSpeed);
        
        const isAtTop = scrollY <= 10;
        
        if (isAtTop || targetIndex === -1 || targetIndex === -2) {
          lastScrollYRef.current = window.scrollY;
          return;
        } else if (targetIndex >= 0 && targetIndex < snapSections.length) {
          scrollToSection(snapSections[targetIndex]);
        }
        
        consecutiveScrollCountRef.current = 0;
      }, SNAP_DELAY);
      
      lastScrollYRef.current = currentScrollY;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return null;
}
