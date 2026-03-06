import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollNav from "@/components/ScrollNav";
import ScrollSnapHandler from "@/components/ScrollSnapHandler";
import { ROUTES } from "@/lib/routes";
import { getProductDetailPath } from "@/data/products";

const coreCapabilities = [
  {
    id: 'capability-1',
    title: 'Lightning Interception Systems',
    description: 'ESE early discharge technology for expanded protection radius and reliable direct strike interception.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'capability-2',
    title: 'Grounding & Equipotential Bonding',
    description: 'Achieve ≤1Ω ground resistance with nano-carbon materials and exothermic welding for permanent connections.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'capability-3',
    title: 'Lightning Detection & Early Warning',
    description: 'Real-time monitoring and intelligent warning systems for proactive risk management before strikes occur.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    id: 'capability-4',
    title: 'EPC Engineering Support',
    description: 'From product selection to installation supervision — technical support throughout your project lifecycle.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const engineeringChallenges = [
  {
    id: 'challenge-1',
    title: 'Ground Resistance Too High?',
    description: 'Achieve ≤1Ω even in high resistivity soil. Our deep-well grounding with nano-carbon backfill solves the toughest soil conditions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    )
  },
  {
    id: 'challenge-2',
    title: 'Design vs. Site Conditions Mismatch?',
    description: 'Standard designs often fail in real-world conditions. We provide customized solutions that adapt to your actual soil resistivity and site constraints.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    )
  },
  {
    id: 'challenge-3',
    title: 'Unpredictable Lightning Risk?',
    description: 'Real-time lightning early warning systems give you 15-30 minutes advance notice to protect personnel and critical operations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'challenge-4',
    title: 'Coastal Corrosion Eating Your System?',
    description: 'Salt-spray environments destroy standard grounding in years. Our copper-clad steel and specialized coatings ensure 30+ year service life.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 'challenge-5',
    title: 'Explosion-Proof Compliance Required?',
    description: 'Petrochemical and hazardous area projects demand intrinsically safe designs. We deliver CE, ISO and IEC certified protection systems.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    )
  },
  {
    id: 'challenge-6',
    title: 'Need Zero-Downtime Protection?',
    description: 'Airports, power plants, and critical facilities cannot afford lightning-related shutdowns. Our multi-layer protection ensures continuous operation.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
];

const industrySolutions = [
  {
    id: 'petrochemical',
    title: 'Petrochemical',
    description: 'Explosion-proof protection for oil depots, refineries, and chemical plants with strict safety compliance.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
    projects: ['National Reserve Oil Depot', 'Refinery Complex Protection']
  },
  {
    id: 'transportation',
    title: 'Transportation',
    description: 'Critical protection for airports, railways, and transit hubs where safety and continuity are non-negotiable.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    color: 'from-blue-500 to-indigo-600',
    projects: ['International Airport', 'High-Speed Rail Station']
  },
  {
    id: 'power-energy',
    title: 'Power & Energy',
    description: 'UHV substation protection and grid-scale grounding for national power infrastructure.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
    projects: ['UHV Substation', 'Solar Farm Protection']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Protection solutions for commercial buildings, stadiums, and public facilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-purple-500 to-violet-600',
    projects: ['Commercial Complex', 'Public Facility']
  },
];

const featuredProjects = [
  {
    id: 'zhoushan-oil-depot',
    title: 'National Reserve Oil Depot',
    industry: 'Petrochemical',
    location: 'Zhoushan, Zhejiang',
    description: 'Comprehensive lightning and grounding system for one of China\'s largest national oil reserves.',
    image: '/images/hero/hero-1.jpg',
    stats: { coverage: '500,000 m²', safety: '100% Incident-Free' }
  },
  {
    id: 'airport-project',
    title: 'International Airport Terminal',
    industry: 'Transportation',
    location: 'Major Hub City',
    description: 'Multi-layer lightning protection ensuring zero disruption to flight operations and passenger safety.',
    image: '/images/hero/hero-2.jpg',
    stats: { flights: '1000+/day', uptime: '99.99%' }
  },
  {
    id: 'xinjiang-uhv',
    title: 'UHV Substation',
    industry: 'Power & Energy',
    location: 'Xinjiang',
    description: 'Custom-engineered surge protection for ±800 kV ultra-high voltage infrastructure.',
    image: '/images/hero/hero-3.jpg',
    stats: { voltage: '±800 kV', resistance: '< 0.5 Ω' }
  },
];

const coreProducts = [
  {
    id: 'lightning-warning',
    title: 'Lightning Warning Systems',
    subtitle: 'Lightning Warning System',
    description: 'Advanced detection and early warning solutions to proactively manage lightning risks before strikes occur.',
    categoryId: 'lightning-warning',
    productId: 'lightning-warning-system',
    hoverColor: 'group-hover:text-blue-500',
    image: '/images/products/materials/Steel Tube/4de48a4b-7087-4c0f-8577-9c97bafa0077.png',
  },
  {
    id: 'copper-clad-steel',
    title: 'Copper-Clad Steel (CCS)',
    subtitle: 'Ground Rods / Electrodes / Stranded Wires',
    description: 'High-conductivity ground rods, electrodes, and stranded wires for durable and efficient underground grounding.',
    categoryId: 'copper-clad-steel',
    productId: 'copper-clad-rod',
    hoverColor: 'group-hover:text-amber-600',
    image: '/images/products/materials/Steel Round Bar/af15a1a9-071d-4f50-ba12-9beac1c7c625.png',
  },
  {
    id: 'ese-lightning-rod',
    title: 'ESE Lightning Rods',
    subtitle: 'Early Streamer Emission Lightning Rod',
    description: 'Early Streamer Emission technology for an expanded radius of protection and enhanced strike interception.',
    categoryId: 'early-discharge-system',
    productId: 'early-discharge',
    hoverColor: 'group-hover:text-green-electric-500',
    image: '/images/products/materials/Aluminium Plate/2e897f8b-4248-4a89-a6db-7d82b19c8251.png',
  },
  {
    id: 'exothermic-welding',
    title: 'Exothermic Welding',
    subtitle: 'Exothermic Welding Joints',
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

      {/* Core Capabilities Section */}
      <section id="core-capabilities" className="py-24 bg-white relative overflow-hidden scroll-mt-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-50 rounded-l-full opacity-50 -z-10 transform translate-x-1/3"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                For EPC Contractors & Industrial Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">
                Complete Lightning Protection Systems
              </h2>
              <p className="text-xl text-green-electric-600 font-medium mb-4">
                ESE · Grounding ≤1Ω · Lightning Warning
              </p>
              <p className="text-lg text-industrial-600 leading-relaxed">
                We deliver engineered solutions that meet IEC 62561 standards — from product selection to installation supervision.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center font-semibold text-green-electric-600 hover:text-green-electric-700 transition-colors group"
              >
                Explore All Components
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreCapabilities.map((item) => (
              <div key={item.id} className="group relative">
                <div className="bg-white rounded-2xl p-8 border border-industrial-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-industrial-50 text-green-electric-600 flex items-center justify-center group-hover:bg-green-electric-600 group-hover:text-white transition-colors duration-300 shadow-sm mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-green-electric-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-industrial-600 leading-relaxed text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Challenges Section */}
      <section id="engineering-challenges" className="py-24 bg-industrial-900 text-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              Engineering Challenges
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sound Familiar?
            </h2>
            <p className="text-xl text-industrial-400 max-w-3xl mx-auto">
              These are the real problems EPC contractors face on lightning protection projects. We solve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringChallenges.map((item) => (
              <div key={item.id} className="group p-6 rounded-2xl bg-industrial-800/50 border border-industrial-700 hover:border-green-electric-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-industrial-700 text-green-electric-400 flex items-center justify-center mb-4 group-hover:bg-green-electric-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-green-electric-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-industrial-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="industry-solutions" className="py-24 bg-gradient-to-b from-industrial-50 to-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Industry Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
              Trusted Across Critical Industries
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              We protect the infrastructure that powers modern society — from petrochemical facilities to international airports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((item) => (
              <Link key={item.id} href={`/projects#${item.id}`} className="group">
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}></div>
                  <div className="absolute inset-0 bg-industrial-900/20 group-hover:bg-industrial-900/40 transition-colors duration-300"></div>
                  
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      {item.projects.map((project, i) => (
                        <div key={i} className="text-white/70 text-xs flex items-center">
                          <span className="w-1 h-1 bg-white/50 rounded-full mr-2"></span>
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-industrial-900 text-white rounded-lg hover:bg-industrial-800 font-semibold transition-colors group"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-24 bg-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                Featured Projects
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-4">
                Landmark Projects Worldwide
              </h2>
              <p className="text-xl text-industrial-600 leading-relaxed mb-2">
                Trusted in 300+ Industrial Lightning Protection Projects
              </p>
              <p className="text-lg text-industrial-500">
                Serving petrochemical, power, transportation and infrastructure projects worldwide.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/projects"
                className="inline-flex items-center font-semibold text-green-electric-600 hover:text-green-electric-700 transition-colors group"
              >
                View All Projects
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects#${project.id}`} className="group">
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-industrial-100 h-full flex flex-col transition-all duration-300">
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 via-industrial-900/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-industrial-900 rounded-full text-xs font-semibold">
                        {project.industry}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white/80 text-sm font-medium">
                        {project.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-industrial-900 group-hover:text-green-electric-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-industrial-600 leading-relaxed flex-grow text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4 pt-4 border-t border-industrial-100">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-green-electric-600">{value}</div>
                          <div className="text-xs text-industrial-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section id="core-products" className="py-24 bg-gradient-to-b from-industrial-50 to-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              System Components
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-6">
              Lightning Protection & Grounding Components
            </h2>
            <p className="text-xl text-industrial-600 max-w-2xl mx-auto">
              Key components for complete lightning protection systems — all tested and certified to international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreProducts.map((product) => (
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

          <div className="mt-16 bg-industrial-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-industrial-800">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-green-electric-600/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Need Raw Materials?</h4>
                <p className="text-industrial-400">
                  Steel tubes, copper coils, stainless bars — we supply foundational materials alongside finished components.
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

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-industrial-900 text-white scroll-mt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Excellence, Safety Guaranteed
            </h2>
            <p className="text-xl text-industrial-400 max-w-2xl mx-auto">
              30+ years of expertise in lightning protection and grounding solutions for critical infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">One-Stop System Solutions</h3>
              <p className="text-industrial-400">From design, product supply to installation guidance — complete safety systems with perfect compatibility</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proprietary Core Technology</h3>
              <p className="text-industrial-400">ESE early discharge technology, lightning warning systems, and nano-carbon grounding with multiple patents</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-industrial-800/50 border border-industrial-700">
              <div className="w-16 h-16 bg-green-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Full Lifecycle Support</h3>
              <p className="text-industrial-400">Site survey, installation guidance, system testing, and after-sales maintenance with rapid response</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-electric-400 mb-2">30+</div>
              <div className="text-industrial-400">Years of Industry Expertise</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-electric-400 mb-2">50+</div>
              <div className="text-industrial-400">Patent Certifications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-electric-400 mb-2">ISO</div>
              <div className="text-industrial-400">Certified Quality System</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-electric-400 mb-2">24/7</div>
              <div className="text-industrial-400">Technical Support</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-electric-700 to-green-electric-600 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-green-electric-100 mb-4 max-w-2xl mx-auto">
              Send us your project requirements — we'll provide a tailored solution within 48 hours.
            </p>
            <p className="text-lg text-green-electric-200 mb-8">
              Contact us today for competitive pricing and expert consultation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={ROUTES.CONTACT}
                className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Submit Project Inquiry
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
