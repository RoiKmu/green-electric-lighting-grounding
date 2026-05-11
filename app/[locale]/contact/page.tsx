import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import EmailCopyButton from "./EmailCopyButton";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Contact Us - Green Electric Lightning Protection',
    zh: '联系我们 - 格林电工防雷接地',
    ar: 'اتصل بنا - جرين إلكتريك للحماية من الصواعق'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Get in touch with Green Electric Industrial Supply for quotes, inquiries, and support.',
    zh: '联系格林电工工业供应，获取报价、咨询和技术支持。',
    ar: 'تواصل مع جرين إلكتريك للإمدادات الصناعية للحصول على عروض الأسعار والاستفسارات والدعم.'
  };
  
  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

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
                    <EmailCopyButton email="sales@wuxigreen.com" />
                    <p className="text-industrial-500 mt-1">{t('info.email.response')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="ms-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">{t('info.whatsapp.title')}</h3>
                    <a href="https://wa.me/message/LPSEBG7DV3REC1" className="text-green-electric-600 hover:text-green-electric-700 text-lg" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                    <p className="text-industrial-500 mt-1">{t('info.whatsapp.hours')}</p>
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
