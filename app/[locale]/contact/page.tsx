import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Contact Us - Green Electric Industrial Supply",
  description: "Get in touch with Green Electric Industrial Supply for quotes, inquiries, and support.",
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('contact');

  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              {t('badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-industrial-900 mb-8">
                {t('info.title')}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ms-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">{t('info.email.title')}</h3>
                    <a href="mailto:grace.wang@wuxigreen.com" className="text-green-electric-600 hover:text-green-electric-700 text-lg">
                      grace.wang@wuxigreen.com
                    </a>
                    <p className="text-industrial-500 mt-1">{t('info.email.response')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ms-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">{t('info.phone.title')}</h3>
                    <a href="tel:+8617766353591" className="text-green-electric-600 hover:text-green-electric-700 text-lg">
                      +86 177 6635 3591
                    </a>
                    <p className="text-industrial-500 mt-1">{t('info.phone.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.87c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/>
                    </svg>
                  </div>
                  <div className="ms-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">{t('info.wechat.title')}</h3>
                    <p className="text-industrial-700 text-lg">{t('info.wechat.available')}</p>
                    <p className="text-industrial-500 mt-1">{t('info.wechat.info')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ms-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">{t('info.location.title')}</h3>
                    <p className="text-industrial-700 text-lg">{t('info.location.address')}</p>
                    <p className="text-industrial-500 mt-1">{t('info.location.serving')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-industrial-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-industrial-900 mb-4">{t('businessHours.title')}</h3>
                <div className="space-y-2 text-industrial-600">
                  <div className="flex justify-between">
                    <span>{t('businessHours.weekdays')}</span>
                    <span className="font-medium">{t('businessHours.weekdaysTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('businessHours.saturday')}</span>
                    <span className="font-medium">{t('businessHours.saturdayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('businessHours.sunday')}</span>
                    <span className="font-medium text-industrial-400">{t('businessHours.sundayTime')}</span>
                  </div>
                </div>
                <p className="text-sm text-industrial-500 mt-4">{t('businessHours.note')}</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
