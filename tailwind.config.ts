import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-electric': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'industrial': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        'metal': {
          gold: '#B8860B',
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          steel: '#71797E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-up-fade': 'slideUpFade 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }: { addUtilities: Function; addComponents: Function }) {
      addUtilities({
        '.animate-on-scroll': {
          'opacity': '0',
          'transform': 'translateY(60px) scale(0.98)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-on-scroll.is-visible': {
          'opacity': '1',
          'transform': 'translateY(0) scale(1)',
        },
        '.animate-on-scroll.is-hidden': {
          'opacity': '0',
          'transform': 'translateY(-60px) scale(0.98)',
        },
        '.animate-fade-in': {
          'opacity': '0',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity',
        },
        '.animate-fade-in.is-visible': {
          'opacity': '1',
        },
        '.animate-fade-in.is-hidden': {
          'opacity': '0',
        },
        '.animate-slide-up': {
          'opacity': '0',
          'transform': 'translateY(80px)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-slide-up.is-visible': {
          'opacity': '1',
          'transform': 'translateY(0)',
        },
        '.animate-slide-up.is-hidden': {
          'opacity': '0',
          'transform': 'translateY(-80px)',
        },
        '.animate-slide-down': {
          'opacity': '0',
          'transform': 'translateY(-80px)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-slide-down.is-visible': {
          'opacity': '1',
          'transform': 'translateY(0)',
        },
        '.animate-slide-down.is-hidden': {
          'opacity': '0',
          'transform': 'translateY(80px)',
        },
        '.animate-slide-left': {
          'opacity': '0',
          'transform': 'translateX(80px)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-slide-left.is-visible': {
          'opacity': '1',
          'transform': 'translateX(0)',
        },
        '.animate-slide-left.is-hidden': {
          'opacity': '0',
          'transform': 'translateX(-80px)',
        },
        '.animate-slide-right': {
          'opacity': '0',
          'transform': 'translateX(-80px)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-slide-right.is-visible': {
          'opacity': '1',
          'transform': 'translateX(0)',
        },
        '.animate-slide-right.is-hidden': {
          'opacity': '0',
          'transform': 'translateX(80px)',
        },
        '.animate-scale-in': {
          'opacity': '0',
          'transform': 'scale(0.85)',
          'transition': 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-scale-in.is-visible': {
          'opacity': '1',
          'transform': 'scale(1)',
        },
        '.animate-scale-in.is-hidden': {
          'opacity': '0',
          'transform': 'scale(0.85)',
        },
        '.animate-zoom-in': {
          'opacity': '0',
          'transform': 'scale(0.7) translateY(40px)',
          'transition': 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          'will-change': 'opacity, transform',
        },
        '.animate-zoom-in.is-visible': {
          'opacity': '1',
          'transform': 'scale(1) translateY(0)',
        },
        '.animate-zoom-in.is-hidden': {
          'opacity': '0',
          'transform': 'scale(0.7) translateY(-40px)',
        },
      });
      
      addComponents({
        '.animate-delay-100': {
          'transition-delay': '100ms',
        },
        '.animate-delay-200': {
          'transition-delay': '200ms',
        },
        '.animate-delay-300': {
          'transition-delay': '300ms',
        },
        '.animate-delay-400': {
          'transition-delay': '400ms',
        },
        '.animate-delay-500': {
          'transition-delay': '500ms',
        },
        '.animate-delay-600': {
          'transition-delay': '600ms',
        },
        '.animate-delay-700': {
          'transition-delay': '700ms',
        },
        '.animate-delay-800': {
          'transition-delay': '800ms',
        },
        '.animate-duration-300': {
          'transition-duration': '300ms',
        },
        '.animate-duration-500': {
          'transition-duration': '500ms',
        },
        '.animate-duration-700': {
          'transition-duration': '700ms',
        },
        '.animate-duration-1000': {
          'transition-duration': '1000ms',
        },
      });
    },
  ],
};
export default config;
