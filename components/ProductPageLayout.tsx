import Link from "next/link";
import { ReactNode } from "react";
import { ROUTES } from "@/lib/routes";

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
      {/* Hero Section */}
      <section className={`relative py-24 bg-gradient-to-br ${gradient}`}>
        {/* ... Hero content remains unchanged ... */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link href={ROUTES.HOME} className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
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
          <Link href={ROUTES.CONTACT} className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            Request Quote
          </Link>
        </div>
      </section>

      {/* Footer removed to avoid duplicate Footer */}
    </main>
  );
}