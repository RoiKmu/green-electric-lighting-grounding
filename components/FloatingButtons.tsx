"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@/i18n/routing";

interface TooltipProps {
  visible: boolean;
  title: string;
  content: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Tooltip({ visible, title, content, onMouseEnter, onMouseLeave }: TooltipProps) {
  return (
    <div
      className={`absolute right-full mr-3 top-0 bg-white rounded-lg shadow-xl border border-industrial-200 p-4 min-w-[200px] tooltip-panel ${
        visible ? "visible" : "opacity-0 pointer-events-none translate-x-2"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute right-0 top-3 translate-x-full">
        <div className="border-8 border-transparent border-l-white"></div>
      </div>
      <h4 className="font-semibold text-industrial-900 mb-1">{title}</h4>
      <p className="text-industrial-600 text-sm mb-2">{content}</p>
      <Link
        href="/contact"
        className="text-green-electric-600 hover:text-green-electric-500 text-sm font-medium flex items-center gap-1 transition-colors"
      >
        <span>Go to Contact Page</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback((buttonId: string) => {
    clearCloseTimeout();
    setActiveButton(buttonId);
  }, [clearCloseTimeout]);

  const handleMouseLeave = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveButton(null);
    }, 300);
  }, [clearCloseTimeout]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3 floating-buttons-container">
      <div
        className="relative floating-button"
        onMouseEnter={() => handleMouseEnter("phone")}
        onMouseLeave={handleMouseLeave}
      >
        <Tooltip
          visible={activeButton === "phone"}
          title="Phone"
          content="+86 177 6635 3591"
          onMouseEnter={() => handleMouseEnter("phone")}
          onMouseLeave={handleMouseLeave}
        />
        <button
          className={`w-12 h-12 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            activeButton === "phone" ? "bg-green-electric-400" : "bg-green-electric-600 hover:bg-green-electric-500"
          }`}
          aria-label="Show phone"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>

      <div
        className="relative floating-button"
        onMouseEnter={() => handleMouseEnter("email")}
        onMouseLeave={handleMouseLeave}
      >
        <Tooltip
          visible={activeButton === "email"}
          title="Email"
          content="wuxi@wuxigreen.com"
          onMouseEnter={() => handleMouseEnter("email")}
          onMouseLeave={handleMouseLeave}
        />
        <button
          className={`w-12 h-12 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            activeButton === "email" ? "bg-green-electric-400" : "bg-green-electric-600 hover:bg-green-electric-500"
          }`}
          aria-label="Show email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      <div
        className="relative floating-button"
        onMouseEnter={() => showBackToTop && handleMouseEnter("backtotop")}
        onMouseLeave={handleMouseLeave}
      >
        <Tooltip
          visible={activeButton === "backtotop" && showBackToTop}
          title="Back to Top"
          content="Return to page top"
          onMouseEnter={() => handleMouseEnter("backtotop")}
          onMouseLeave={handleMouseLeave}
        />
        <button
          onClick={() => {
            scrollToTop();
            setActiveButton(null);
          }}
          className={`w-12 h-12 bg-industrial-700 hover:bg-industrial-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
