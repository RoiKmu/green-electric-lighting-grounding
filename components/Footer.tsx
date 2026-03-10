import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-industrial-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="font-bold text-white text-xl">{t('companyName')}</h3>
              <p className="text-green-electric-400 text-sm mt-1">{t('tagline')}</p>
            </div>
            <p className="text-industrial-400 leading-relaxed text-sm">
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
                <span className="text-sm">wuxi@wuxigreen.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 me-3 mt-0.5 text-green-electric-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+86 177 6635 3591</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 me-3 mt-0.5 text-green-electric-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">No.9, Su Tie Rd, Binhu District, Wuxi, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-industrial-500 text-sm">
              {t('copyright')}
            </p>
            <div className="flex items-center gap-6 text-industrial-500 text-sm">
              <span>{t('specializing')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
