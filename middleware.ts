import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

function getPreferredLocale(request: NextRequest): string | null {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) return null;
  
  const preferredLocales = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1]) || 1;
      return { locale: locale.split('-')[0].toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);
  
  for (const { locale } of preferredLocales) {
    if (routing.locales.includes(locale as 'en' | 'zh' | 'ar')) {
      return locale;
    }
  }
  
  return null;
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameIsMissingLocale = routing.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  if (pathnameIsMissingLocale) {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
    
    let targetLocale: string;
    
    if (cookieLocale && routing.locales.includes(cookieLocale as 'en' | 'zh' | 'ar')) {
      targetLocale = cookieLocale;
    } else {
      const browserLocale = getPreferredLocale(request);
      targetLocale = browserLocale || routing.defaultLocale;
    }
    
    const url = new URL(`/${targetLocale}${pathname === '/' ? '' : pathname}`, request.url);
    const redirectResponse = NextResponse.redirect(url);
    
    if (!cookieLocale) {
      redirectResponse.cookies.set(LOCALE_COOKIE_NAME, targetLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
        sameSite: 'lax'
      });
    }
    
    return redirectResponse;
  }
  
  const handleI18n = createMiddleware({
    ...routing,
    localePrefix: 'always',
    localeDetection: true
  });
  
  return handleI18n(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_next/static|_next/image|images|data|favicon.ico|public|.*\\..*).*)'
  ]
};
