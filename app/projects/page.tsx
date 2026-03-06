import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LandmarkProjectsHero from "./LandmarkProjectsHero";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Landmark Projects - Green Electric Lightning Protection & Grounding Solutions",
  description: "Explore our landmark projects in petrochemical, transportation, and power energy sectors. See how Green Electric delivers comprehensive lightning protection and grounding solutions.",
};

const projectDetails = [
  {
    id: 'zhoushan-oil-depot',
    title: 'National Reserve Oil Depot Protection',
    subtitle: 'Zhoushan, Zhejiang | Completed 2023',
    description: 'Designed and implemented a comprehensive direct strike lightning and intelligent grounding system for one of the largest national oil reserves, overcoming extreme coastal salt-spray corrosion challenges.',
    industry: 'Petrochemical',
    stats: [
      { label: 'Coverage Area', value: '500,000 m²' },
      { label: 'Safety Record', value: '100% Incident-Free' },
      { label: 'Design Life', value: '30+ Years' }
    ],
    challenges: [
      'Extreme coastal salt-spray corrosion environment',
      'High safety requirements for flammable storage',
      'Large-scale facility requiring unified protection',
    ],
    solutions: [
      'Corrosion-resistant copper-clad steel grounding system',
      'ESE lightning rods with extended protection radius',
      'Intelligent monitoring for real-time system status',
    ],
    image: '/images/hero/hero-1.jpg',
  },
  {
    id: 'airport-project',
    title: 'International Airport Terminal Protection',
    subtitle: 'Major Hub City | Completed 2024',
    description: 'Delivered a multi-layer lightning protection system for a major international airport, ensuring zero disruption to flight operations and passenger safety during severe thunderstorm seasons.',
    industry: 'Transportation',
    stats: [
      { label: 'Daily Flights', value: '1000+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Protection Zones', value: '50+' }
    ],
    challenges: [
      'Continuous operation requirements — no flight disruptions allowed',
      'Complex airside and landside protection coordination',
      'Tall control tower and hangar structures requiring specialized protection',
    ],
    solutions: [
      'ESE lightning rods with overlapping protection zones',
      'Real-time lightning warning system for ground operations',
      'Equipotential bonding across all critical facilities',
    ],
    image: '/images/hero/hero-2.jpg',
  },
  {
    id: 'xinjiang-uhv',
    title: 'Ultra-High Voltage (UHV) Substation',
    subtitle: 'Xinjiang | Completed 2022',
    description: 'Custom-engineered high-performance surge protection devices (SPDs) and deep-well grounding systems adapted for extreme desert climates, safeguarding the backbone of the national power grid.',
    industry: 'Power & Energy',
    stats: [
      { label: 'Voltage Level', value: '±800 kV' },
      { label: 'Ground Resistance', value: '< 0.5 Ω' },
      { label: 'Soil Type', value: 'High Resistivity' }
    ],
    challenges: [
      'Extreme desert climate with temperature swings',
      'High soil resistivity requiring deep grounding',
      'Critical infrastructure with national importance',
    ],
    solutions: [
      'Deep-well grounding electrodes with nano-carbon backfill',
      'High-energy SPDs rated for UHV applications',
      'Exothermic welding for permanent connections',
    ],
    image: '/images/hero/hero-3.jpg',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <LandmarkProjectsHero />

      <section className="py-16 bg-industrial-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              Project Portfolio
            </span>
            <h2 className="text-4xl font-bold text-industrial-900 mb-4">
              Delivering Excellence Across Industries
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              From petrochemical facilities to international airports, our solutions protect critical infrastructure worldwide.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-industrial-900 text-white rounded-full text-sm font-medium">
              Petrochemical
            </span>
            <span className="px-4 py-2 bg-industrial-900 text-white rounded-full text-sm font-medium">
              Transportation
            </span>
            <span className="px-4 py-2 bg-industrial-900 text-white rounded-full text-sm font-medium">
              Power & Energy
            </span>
            <span className="px-4 py-2 bg-industrial-900 text-white rounded-full text-sm font-medium">
              Infrastructure
            </span>
          </div>
        </div>
      </section>

      {projectDetails.map((project, index) => (
        <section
          key={project.id}
          id={project.id}
          className={`py-24 scroll-mt-20 ${index % 2 === 0 ? 'bg-white' : 'bg-industrial-50'}`}
        >
          <div className="container mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center px-4 py-2 bg-industrial-800/80 backdrop-blur-sm rounded-full mb-6 border border-industrial-700">
                  <div className="w-2 h-2 bg-green-electric-400 rounded-full mr-3 animate-pulse" />
                  <span className="text-sm font-semibold text-green-electric-300 uppercase tracking-wider">
                    {project.industry}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-green-electric-600 font-medium mb-6">
                  {project.subtitle}
                </p>
                <p className="text-lg text-industrial-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="bg-industrial-900 text-white p-4 rounded-lg text-center">
                      <div className="text-xl font-bold text-green-electric-400 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-industrial-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li key={i} className="text-industrial-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-industrial-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-industrial-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-green-electric-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, i) => (
                        <li key={i} className="text-industrial-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-electric-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px] shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-white/80 text-sm font-medium">
                      {project.industry} Sector
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-industrial-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Proven Track Record Across Industries
            </h2>
            <p className="text-xl text-industrial-400 max-w-2xl mx-auto">
              Our expertise spans multiple high-stakes sectors where safety and reliability are non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-electric-400 mb-2">300+</div>
              <div className="text-industrial-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-electric-400 mb-2">30+</div>
              <div className="text-industrial-400">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-electric-400 mb-2">99.9%</div>
              <div className="text-industrial-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-electric-400 mb-2">0</div>
              <div className="text-industrial-400">Safety Incidents</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-electric-100 mb-4 max-w-2xl mx-auto">
            Send us your project requirements — we'll provide a tailored solution within 48 hours.
          </p>
          <p className="text-lg text-green-electric-200 mb-8">
            Contact us today for competitive pricing and expert consultation.
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
      </section>
    </main>
  );
}
