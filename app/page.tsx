import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

const categories = [
  {
    id: 'machines',
    title: 'Machines',
    description: 'CNC lathes, milling machines, and precision manufacturing equipment',
    href: '/products/machines',
    hoverColor: 'group-hover:text-green-electric-500',
    image: '/images/products/machines/aluminum-zheng-ji-sxtClAGwRck-unsplash.jpg',
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Carbide inserts, HSS tools, and diamond cutting solutions',
    href: '/products/tools',
    hoverColor: 'group-hover:text-blue-500',
    image: '/images/products/tools/greg-rosenke-xoxnfVIE7Qw-unsplash.jpg',
  },
  {
    id: 'materials',
    title: 'Raw Materials',
    description: 'Steel, aluminum, copper, and specialty alloys',
    href: '/products/materials',
    hoverColor: 'group-hover:text-amber-500',
    image: '/images/products/materials/zoshua-colah-Lew_uz-UnRs-unsplash.jpg',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Toolholders, workholding, and machine components',
    href: '/products/accessories',
    hoverColor: 'group-hover:text-purple-500',
    image: '/images/products/le-trung-fBCQz7OUUww-unsplash.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-industrial-950 text-white sticky top-0 z-50">
        {/* Main Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold text-green-electric-400 flex items-start">
                  Green Electric
                  <sup className="text-[10px] ml-0.5 mt-1 text-green-electric-400">®</sup>
                </h1>
                <p className="text-xs text-industrial-400 tracking-wider uppercase">Industrial Supply</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/products/machines" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                Machines
              </Link>
              <Link href="/products/tools" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                Tools
              </Link>
              <Link href="/products/materials" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                Raw Materials
              </Link>
              <Link href="/products/accessories" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                Accessories
              </Link>
              <Link href="/contact" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-all duration-300 shadow-lg shadow-green-electric-900/20"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Categories */}
      <section className="py-24 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">
              Powering Your Production
            </h2>
            <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              Your One-Stop Industrial Supply Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-industrial-100 h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-2xl font-bold mb-2 text-industrial-900 ${category.hoverColor} transition-colors`}>
                      {category.title}
                    </h3>
                    <p className="text-industrial-600 leading-relaxed flex-grow">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-green-electric-600 font-medium">
                      <span>View Products</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-industrial-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Trusted Industrial Partner
            </h2>
            <p className="text-xl text-industrial-400 max-w-2xl mx-auto">
              Over 30 years of experience serving the manufacturing industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
              <p className="text-industrial-400">Premium products sourced from trusted manufacturers worldwide</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-industrial-400">Efficient logistics network ensuring timely delivery</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-industrial-400">Technical expertise to help you find the right solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and expert consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-white text-lg">Green Electric</h3>
                <p className="text-xs text-industrial-500">Industrial Supply</p>
              </div>
              <p className="text-industrial-400 leading-relaxed">
                Your trusted partner for industrial machinery, tools, and materials since 1993.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/products/machines" className="hover:text-green-electric-400 transition-colors">Machines</Link></li>
                <li><Link href="/products/tools" className="hover:text-green-electric-400 transition-colors">Tools</Link></li>
                <li><Link href="/products/materials" className="hover:text-green-electric-400 transition-colors">Raw Materials</Link></li>
                <li><Link href="/products/accessories" className="hover:text-green-electric-400 transition-colors">Accessories</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/about" className="hover:text-green-electric-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-green-electric-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
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

          {/* Bottom Bar */}
          <div className="border-t border-industrial-800 pt-8 text-center text-industrial-500">
            <p>&copy; 2026 Green Electric Industrial Supply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
