'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-industrial-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="font-bold text-white text-xl">{t('companyNameShort')}</h3>
              <p className="text-green-electric-400 text-sm mt-1">{t('tagline')}</p>
            </div>
            <p className="text-industrial-400 leading-relaxed text-sm mb-4">
              {t('description')}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-electric-600/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-electric-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-sm">
                <div className="text-white font-medium">{t('oneStopSolutions')}</div>
                <div className="text-industrial-500">{t('designSupplySupport')}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('contactUs')}
            </h4>
            <ul className="space-y-4 text-industrial-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 me-3 mt-0.5 text-green-electric-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">sales@wuxigreen.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 me-3 mt-0.5 text-green-electric-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/message/LPSEBG7DV3REC1" className="text-sm hover:text-green-electric-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 me-3 mt-0.5 text-green-electric-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{t('address')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              {t('certifications')}
            </h4>
            <ul className="space-y-3 text-industrial-400 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-electric-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>IEC 62561</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-electric-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>UL 467</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-electric-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Saudi Aramco SAES</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-industrial-500 text-sm">
                {t('copyright')}
              </p>
              <div className="flex items-center gap-4 text-industrial-500 text-sm">
                <Link href="/about" className="hover:text-green-electric-400 transition-colors">
                  {t('companyLinks.aboutUs')}
                </Link>
                <span>|</span>
                <Link href="/contact" className="hover:text-green-electric-400 transition-colors">
                  {t('companyLinks.contact')}
                </Link>
                <span>|</span>
                <a href="/sitemap.xml" className="hover:text-green-electric-400 transition-colors" target="_blank">
                  {t('companyLinks.sitemap')}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 text-industrial-500 text-sm">
              <span>{t('specializing')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
