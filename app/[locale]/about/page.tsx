import { setRequestLocale } from 'next-intl/server';
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: "About Us - Green Electric Professional Lightning Protection & Grounding System Supplier",
  description: "Learn about Green Electric - Over 30 years focused on providing one-stop lightning protection, grounding systems, and industrial raw material solutions.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('about');

  const timelineEvents = [
    { year: '1993', title: t('timeline.events.1993.title'), description: t('timeline.events.1993.description') },
    { year: '2010', title: t('timeline.events.2010.title'), description: t('timeline.events.2010.description') },
    { year: '2018', title: t('timeline.events.2018.title'), description: t('timeline.events.2018.description') },
    { year: t('timeline.events.today.title').split(' ')[0] || 'Today', title: t('timeline.events.today.title'), description: t('timeline.events.today.description'), isToday: true },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2h-4zm0-30V0H4v4H0v2h4v4h2V6h4V4h-4zM6 6h48v48H6V6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              {t('hero.badge')}
            </div>
            <h1 className="animate-slide-up text-4xl md:text-6xl font-bold text-white mb-6" style={{ transitionDelay: '100ms' }}>
              {t('hero.title')}
            </h1>
            <p className="animate-slide-up text-xl text-industrial-300 max-w-2xl mx-auto" style={{ transitionDelay: '200ms' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                {t('story.badge')}
              </span>
              <h2 className="animate-slide-up text-4xl font-bold text-industrial-900 mb-6" style={{ transitionDelay: '100ms' }}>
                {t('story.title')}
              </h2>
              <div className="animate-slide-up space-y-4 text-industrial-600 leading-relaxed" style={{ transitionDelay: '200ms' }}>
                <p>
                  <strong className="text-industrial-900">Green Electric</strong> {t('story.paragraph1').replace('Green Electric', '').trim()}
                </p>
                <p>
                  {t('story.paragraph2')}
                </p>
                <p>
                  {t('story.paragraph3')}
                </p>
              </div>
            </div>
            <div className="animate-zoom-in relative" style={{ transitionDelay: '300ms' }}>
              <div className="rounded-2xl overflow-hidden h-96 relative shadow-2xl">
                <Image
                  src="/images/about/catgirlmutant-jADekDuAPSA-unsplash.jpg"
                  alt="Green Electric Production Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -end-6 bg-green-electric-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-green-electric-200">{t('story.yearsExcellence')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl font-bold mb-4">{t('advantages.title')}</h2>
            <p className="animate-slide-up text-industrial-400 max-w-2xl mx-auto text-lg" style={{ transitionDelay: '100ms' }}>
              {t('advantages.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01.', title: t('advantages.compatibility.title'), desc: t('advantages.compatibility.description') },
              { num: '02.', title: t('advantages.procurement.title'), desc: t('advantages.procurement.description') },
              { num: '03.', title: t('advantages.engineering.title'), desc: t('advantages.engineering.description') },
            ].map((item, index) => (
              <div key={index} className="animate-zoom-in space-y-4" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                <div className="text-green-electric-500 text-2xl font-bold italic">{item.num}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-industrial-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              {t('timeline.badge')}
            </span>
            <h2 className="animate-slide-up text-4xl font-bold text-industrial-900" style={{ transitionDelay: '100ms' }}>
              {t('timeline.title')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:start-[8.25rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-industrial-200 before:to-transparent">
              {timelineEvents.map((event, index) => (
                <div key={index} className="animate-slide-right flex items-start" style={{ transitionDelay: `${(index + 1) * 150}ms` }}>
                  <div className="flex-shrink-0 w-24 text-end pe-8 hidden md:block">
                    <span className="text-2xl font-bold text-green-electric-600">{event.year}</span>
                  </div>
                  <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                  <div className="flex-grow ps-8">
                    <h3 className="text-xl font-bold text-industrial-900 mb-2">{event.title}</h3>
                    <p className="text-industrial-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="animate-scale-in inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              {t('values.badge')}
            </span>
            <h2 className="animate-slide-up text-4xl font-bold text-industrial-900" style={{ transitionDelay: '100ms' }}>
              {t('values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('values.safety.title'), desc: t('values.safety.description'), icon: 'safety' },
              { title: t('values.innovation.title'), desc: t('values.innovation.description'), icon: 'innovation' },
              { title: t('values.service.title'), desc: t('values.service.description'), icon: 'service' },
            ].map((value, index) => (
              <div key={index} className="animate-zoom-in text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                  {value.icon === 'safety' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {value.icon === 'innovation' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {value.icon === 'service' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-industrial-900 mb-3">{value.title}</h3>
                <p className="text-industrial-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="animate-slide-up text-3xl md:text-4xl font-bold text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="animate-slide-up text-xl text-green-electric-100 mb-8" style={{ transitionDelay: '100ms' }}>
            {t('cta.description')}
          </p>
          <div className="animate-zoom-in flex flex-wrap justify-center gap-4" style={{ transitionDelay: '200ms' }}>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {t('cta.contactUs')}
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-electric-700 font-semibold text-lg transition-all duration-300"
            >
              {t('cta.browseProducts')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
