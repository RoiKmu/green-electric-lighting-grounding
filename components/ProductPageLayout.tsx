import Link from "next/link";
import { ReactNode } from "react";

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  children: ReactNode;
}

export default function ProductPageLayout({
  title,
  subtitle,
  description,
  gradient,
  children,
}: ProductPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-industrial-950 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold text-green-electric-400 flex items-start">
                  Green Electric<sup className="text-[10px] ml-0.5 mt-1 text-green-electric-400">®</sup>
                </h1>
                <p className="text-xs text-industrial-400 tracking-wider uppercase">Industrial Supply</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">About Us</Link>
              <Link href="/products/machines" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Machines</Link>
              <Link href="/products/tools" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Tools</Link>
              <Link href="/products/materials" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Raw Materials</Link>
              <Link href="/products/accessories" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Accessories</Link>
              <Link href="/contact" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Contact</Link>
            </div>
            <Link href="/contact" className="px-6 py-2.5 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-all duration-300">
              Get Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`relative py-24 bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              {subtitle}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            Contact us for competitive pricing and expert consultation on your specific requirements.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            Request Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-white text-lg">Green Electric</h3>
                <p className="text-xs text-industrial-500">Industrial Supply</p>
              </div>
              <p className="text-industrial-400 leading-relaxed">
                Your trusted partner for industrial machinery, tools, and materials since 1993.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/products/machines" className="hover:text-green-electric-400 transition-colors">Machines</Link></li>
                <li><Link href="/products/tools" className="hover:text-green-electric-400 transition-colors">Tools</Link></li>
                <li><Link href="/products/materials" className="hover:text-green-electric-400 transition-colors">Raw Materials</Link></li>
                <li><Link href="/products/accessories" className="hover:text-green-electric-400 transition-colors">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/about" className="hover:text-green-electric-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-green-electric-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-3 text-industrial-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  grace.wang@wuxigreen.com
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +86 177 6635 3591
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-industrial-800 pt-8 text-center text-industrial-500">
            <p>&copy; 2026 Green Electric Industrial Supply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
