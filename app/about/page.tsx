import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About Us - Green Electric Professional Lightning Protection & Grounding System Supplier",
  description: "Learn about Green Electric - Over 30 years focused on providing one-stop lightning protection, grounding systems, and industrial raw material solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
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
              Building a Solid Line of Industrial Safety
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              Since our founding in 1993, Green Electric has been committed to becoming a global leader in one-stop lightning protection and grounding systems, providing comprehensive safety solutions for your facilities.
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
                Thirty Years of Craftsmanship, Achieving Systematic Safety
              </h2>
              <div className="space-y-4 text-industrial-600 leading-relaxed">
                <p>
                  <strong className="text-industrial-900">Green Electric</strong> was founded in 1993 in Wuxi, China, initially focusing on electrical equipment manufacturing. With an unwavering commitment to safety standards, we have established a first-class reputation in the industry.
                </p>
                <p>
                  As industrial safety needs evolved, we strategically integrated **Lightning Protection Systems** and **Grounding Solutions**. We realized that true safety comes from perfect synergy between components, not just stacking individual products.
                </p>
                <p>
                  Today, Green Electric has grown into a leading enterprise with **one-stop supply capabilities**. From lightning rods and electrolytic ion grounding electrodes to exothermic welding construction accessories, and even the steel and aluminum profiles that support foundation engineering, we provide complete material support covering the entire project lifecycle.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96 relative shadow-2xl">
                <Image
                  src="/images/about/catgirlmutant-jADekDuAPSA-unsplash.jpg"
                  alt="Green Electric Production Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-electric-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-green-electric-200">Years of Industrial Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The One-Stop Advantage */}
      <section className="py-24 bg-industrial-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advantages of One-Stop Solutions</h2>
            <p className="text-industrial-400 max-w-2xl mx-auto text-lg">
              We are not just a material supplier, but your systematic safety partner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">01.</div>
              <h3 className="text-xl font-bold">System Compatibility Assurance</h3>
              <p className="text-industrial-400">
                From interception terminals to grounding electrodes, all components are designed following unified technical specifications, ensuring optimal electrical continuity and corrosion resistance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">02.</div>
              <h3 className="text-xl font-bold">Simplified Procurement Process</h3>
              <p className="text-industrial-400">
                A single supplier can cover all lightning protection consumables, foundation steel materials, and precision accessories, significantly reducing communication, logistics, and time costs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">03.</div>
              <h3 className="text-xl font-bold">Professional Engineering Support</h3>
              <p className="text-industrial-400">
                We provide specialized static protection recommendations for hazardous locations such as flammable and explosive areas, and support material matching solutions for critical processes like exothermic welding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Development History
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[8.25rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-industrial-200 before:to-transparent">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">1993</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Company Founded</h3>
                  <p className="text-industrial-600">Green Electric was established in Wuxi, focusing on power equipment manufacturing and industrial electrical R&D.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">2010</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Lightning Protection Division Established</h3>
                  <p className="text-industrial-600">Began developing high-performance corrosion-resistant lightning rods and grounding bodies, providing safety defense for infrastructure.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">2018</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">Integrated Solutions Upgrade</h3>
                  <p className="text-industrial-600">Launched all-around nano-carbon grounding series and automatic monitoring systems, achieving product intelligence and systematization.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">Today</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">One-Stop Procurement Leader</h3>
                  <p className="text-industrial-600">Service scope expanded globally, providing comprehensive solutions from interception to grounding, from raw materials to construction tools.</p>
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
              Core Values
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              The Force That Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Safety First</h3>
              <p className="text-industrial-600">Whether for conventional buildings or high-risk locations like petrochemical facilities, our commitment to quality remains unwavering.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Innovative Technology</h3>
              <p className="text-industrial-600">Continuously developing new technologies such as electrolytic ion grounding and remote-controlled welding, elevating traditional engineering to technological heights.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">Integrated Service</h3>
              <p className="text-industrial-600">Perfectly connecting raw material supply with professional lightning protection components, providing the most worry-free B2B procurement experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your One-Stop Procurement Journey
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            Experience Green Electric's systematic solutions. Contact us now and let our professional technical team provide comprehensive support for your project.
          </p>
          <Link href={ROUTES.CONTACT} className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            Contact Us for Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
