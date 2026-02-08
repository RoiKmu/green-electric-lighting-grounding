import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Green Electric Industrial Supply",
  description: "Learn about Green Electric Industrial Supply - Over 30 years of excellence in industrial machinery, tools, and materials.",
};

export default function AboutPage() {
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
              <Link href="/about" className="text-green-electric-400 font-medium">About Us</Link>
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
      <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building the Future of Manufacturing
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              From our roots in 1993 to becoming a trusted industrial supply partner, we&apos;ve been committed to excellence in every product and service we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-industrial-900 mb-6">
                Three Decades of Industrial Excellence
              </h2>
              <div className="space-y-4 text-industrial-600 leading-relaxed">
                <p>
                  <strong className="text-industrial-900">Green Electric</strong> was founded in 1993 in Wuxi, China, initially focusing on electrical equipment manufacturing. Over the years, we built a reputation for quality and reliability that became the foundation of our success.
                </p>
                <p>
                  In 2018, recognizing the growing demands of the metalworking and machining industry, we established our <strong className="text-industrial-900">Industrial Supply Division</strong>. This strategic expansion allowed us to leverage our extensive manufacturing expertise and supplier relationships to serve a broader range of industrial needs.
                </p>
                <p>
                  Today, Green Electric Industrial Supply provides comprehensive solutions including CNC machinery, precision cutting tools, raw materials, and essential accessories. We serve manufacturers across China and internationally, maintaining our commitment to quality, competitive pricing, and exceptional customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96 relative">
                <Image
                  src="/images/about/catgirlmutant-jADekDuAPSA-unsplash.jpg"
                  alt="Green Electric Factory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-electric-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-green-electric-200">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-green-electric-600">1993</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Company Founded</h3>
                  <p className="text-industrial-600">Green Electric established in Wuxi, China, focusing on electrical equipment manufacturing.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-green-electric-600">2005</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Facility Expansion</h3>
                  <p className="text-industrial-600">Expanded manufacturing facilities and established partnerships with leading equipment suppliers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-green-electric-600">2018</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Industrial Supply Division</h3>
                  <p className="text-industrial-600">Launched the Industrial Supply Division to serve the metalworking and machining industry.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-green-electric-600">2024</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Global Expansion</h3>
                  <p className="text-industrial-600">Expanded international operations, serving customers across Asia, Europe, and the Americas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Quality First</h3>
              <p className="text-industrial-600">We never compromise on quality. Every product we supply meets the highest industry standards.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Customer Partnership</h3>
              <p className="text-industrial-600">We build lasting relationships by understanding and exceeding our customers&apos; expectations.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Innovation</h3>
              <p className="text-industrial-600">We continuously evolve our offerings to bring the latest technologies to our customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            Experience the Green Electric difference. Contact us today to discuss your industrial supply needs.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            Contact Us Today
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
