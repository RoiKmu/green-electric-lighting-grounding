import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollNav from "@/components/ScrollNav";
import ScrollSnapHandler from "@/components/ScrollSnapHandler";
import { ROUTES } from "@/lib/routes";
import { getProductDetailPath } from "@/data/products";
const ecosystemSteps = [
  {
    id: 'step-1-interception',
    step: '01',
    title: 'Interception (接闪)',
    description: 'Intercept direct lightning strikes safely with our advanced lightning rods and early discharge systems.',
    href: '/products/lightning-protection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'step-2-connection',
    step: '02',
    title: 'Connection (传导与连接)',
    description: 'Ensure seamless electrical continuity with our specialized fittings, brackets, and copper/steel conductors.',
    href: '/products/specialized',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: 'step-3-grounding',
    step: '03',
    title: 'Grounding (接地释放)',
    description: 'Safely dissipate electrical energy into the earth using our high-performance grounding electrodes and nano-carbon systems.',
    href: '/products/grounding',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'step-4-monitoring',
    step: '04',
    title: 'Monitoring & Installation (监测与施工)',
    description: 'Verify system integrity with our detection terminals and achieve molecular-level bonds with our exothermic welding kits.',
    href: '/products/detection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const featuredProducts = [
  {
    id: 'lightning-warning',
    title: 'Lightning Warning Systems',
    subtitle: '雷电预警系统',
    description: 'Advanced detection and early warning solutions to proactively manage lightning risks before strikes occur.',
    categoryId: 'lightning-warning',
    productId: 'lightning-warning-system',
    hoverColor: 'group-hover:text-blue-500',
    image: '/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png',
  },
  {
    id: 'copper-clad-steel',
    title: 'Copper-Clad Steel (CCS)',
    subtitle: '铜包钢 (接地棒/极/绞线)',
    description: 'High-conductivity ground rods, electrodes, and stranded wires for durable and efficient underground grounding.',
    categoryId: 'copper-clad-steel',
    productId: 'copper-clad-rod',
    hoverColor: 'group-hover:text-amber-600',
    image: '/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png',
  },
  {
    id: 'ese-lightning-rod',
    title: 'ESE Lightning Rods',
    subtitle: '提前放电避雷针',
    description: 'Early Streamer Emission technology for an expanded radius of protection and enhanced strike interception.',
    categoryId: 'early-discharge-system',
    productId: 'early-discharge',
    hoverColor: 'group-hover:text-green-electric-500',
    image: '/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png',
  },
  {
    id: 'exothermic-welding',
    title: 'Exothermic Welding',
    subtitle: '熔焊接头',
    description: 'Achieve permanent, molecular-level bonds that never loosen or corrode, ensuring lifelong electrical conductivity.',
    categoryId: 'exothermic-welding',
    productId: 'welding',
    hoverColor: 'group-hover:text-orange-500',
    image: '/images/products/materials/Stainless Bar/3d99c6d3-daa9-4fb7-93d0-f6fcaea4b1bc.png',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollSnapHandler />
      <ScrollNav />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* One-Stop Ecosystem Section */}
      <section id="ecosystem" className="py-24 bg-white relative overflow-hidden scroll-mt-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-50 rounded-l-full opacity-50 -z-10 transform translate-x-1/3"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                Our One-Stop Ecosystem
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
                End-to-End Lightning & <br className="hidden md:block" />Grounding Solutions
              </h2>
              <p className="text-xl text-industrial-600 leading-relaxed">
                From interception to grounding — everything you need in one place. We don't just sell components; we provide perfectly compatible, complete safety systems to streamline your procurement and installation.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center font-semibold text-green-electric-600 hover:text-green-electric-700 transition-colors group"
              >
                Explore Full Catalog
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-industrial-200 -z-10"></div>

            {ecosystemSteps.map((item) => (
              <Link key={item.id} href={item.href} className="group relative">
                <div className="bg-white rounded-2xl p-8 border border-industrial-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-industrial-50 text-green-electric-600 flex items-center justify-center group-hover:bg-green-electric-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-black text-industrial-100 group-hover:text-industrial-200 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-green-electric-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-industrial-600 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-industrial-100 text-sm font-medium text-industrial-900 flex items-center">
                    View Components
                    <svg className="w-4 h-4 ml-2 text-green-electric-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-industrial-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-industrial-800">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-electric-600/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Supported by Premium Raw Materials</h4>
                <p className="text-industrial-400">
                  Need extra steel tubes, copper coils, or stainless bars for your project? We supply the foundational materials alongside our finished components.
                </p>
              </div>
            </div>
            <Link
              href="/products/materials"
              className="px-6 py-3 bg-white text-industrial-900 font-semibold rounded-lg hover:bg-green-electric-50 transition-colors whitespace-nowrap"
            >
              Browse Materials
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-industrial-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-4 bg-white">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-electric-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Core Products Section */}
      <section id="core-technologies" className="py-24 bg-gradient-to-b from-industrial-50 to-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Core Technologies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
              Engineered Protection. <br className="hidden md:block" />Integrated Supply.
            </h2>
            <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              Your complete supply chain for advanced lightning systems, precision grounding materials, and reliable construction accessories.
            </p>
          </div>
          <div className="text-center mb-9">
          <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              Core Solutions & Featured Products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={getProductDetailPath(product.categoryId, product.productId)} className="group">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden card-hover border border-industrial-100 h-full flex flex-col transition-all duration-300">
                  <div className="h-48 relative overflow-hidden flex-shrink-0 bg-industrial-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 via-industrial-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-white/90 font-medium text-sm tracking-wide">
                        {product.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-xl font-bold mb-3 text-industrial-900 ${product.hoverColor} transition-colors`}>
                      {product.title}
                    </h3>
                    <p className="text-industrial-600 leading-relaxed flex-grow text-sm">
                      {product.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-industrial-50 flex items-center text-industrial-900 font-semibold text-sm group-hover:text-green-electric-600 transition-colors">
                      <span>View Specifications</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      <section id="why-choose-us" className="py-24 bg-industrial-900 text-white scroll-mt-0">
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
              href={ROUTES.CONTACT}
              className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href={ROUTES.ABOUT}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}