import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/components/seo/SchemaOrg";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wuxigreen.com';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Green Electric | Lightning Protection & Grounding Solutions for EPC Projects',
    zh: 'Green Electric | EPC项目防雷接地解决方案供应商',
    ar: 'Green Electric | حلول الحماية من الصواعق والتأريض لمشاريع EPC'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Professional lightning protection & grounding solutions for EPC projects. Compliant with IEC 62561, UL 467, IEEE 80, and Saudi Aramco SAES standards. Serving petrochemical, power, transportation, and infrastructure sectors.',
    zh: '专业防雷接地解决方案供应商，服务EPC工程总承包项目。符合IEC 62561、UL 467、IEEE 80及沙特阿美SAES标准。服务石化、电力、交通、基建等行业。',
    ar: 'حلول احترافية للحماية من الصواعق والتأريض لمشاريع EPC. متوافقة مع معايير IEC 62561 و UL 467 و IEEE 80 و Saudi Aramco SAES. نخدم قطاعات البتروكيميائيات والطاقة والنقل والبنية التحتية.'
  };

  const alternateLanguages: Record<string, string> = {
    en: `${BASE_URL}/en`,
    zh: `${BASE_URL}/zh`,
    ar: `${BASE_URL}/ar`,
    'en-SA': `${BASE_URL}/en`,
    'ar-SA': `${BASE_URL}/ar`
  };

  return {
    title: {
      default: titles[locale] || titles.en,
      template: `%s | Green Electric`
    },
    description: descriptions[locale] || descriptions.en,
    keywords: locale === 'ar' 
      ? ['حماية الصواعق', 'التأريض', 'EPC', 'السعودية', 'أرامكو', 'IEC 62561', 'SAES']
      : locale === 'zh'
      ? ['防雷保护', '接地系统', 'EPC项目', '沙特', '阿美', 'IEC 62561', 'SAES', '铜包钢', '放热焊接']
      : ['lightning protection', 'grounding system', 'earthing', 'EPC project', 'Saudi Arabia', 'Aramco', 'IEC 62561', 'UL 467', 'SAES', 'copper-bonded steel', 'exothermic welding'],
    authors: [{ name: 'Green Electric Lightning Protection' }],
    creator: 'Green Electric Industrial Supply',
    publisher: 'Green Electric Industrial Supply',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: alternateLanguages,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const hreflangLinks = [
    { hrefLang: 'en', href: `${BASE_URL}/en` },
    { hrefLang: 'en-SA', href: `${BASE_URL}/en` },
    { hrefLang: 'zh', href: `${BASE_URL}/zh` },
    { hrefLang: 'ar', href: `${BASE_URL}/ar` },
    { hrefLang: 'ar-SA', href: `${BASE_URL}/ar` },
    { hrefLang: 'x-default', href: `${BASE_URL}/en` },
  ];

  return (
    <html lang={locale} dir={direction}>
      <head>
        {hreflangLinks.map((link) => (
          <link
            key={link.hrefLang}
            rel="alternate"
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}
        <link rel="canonical" href={`${BASE_URL}/${locale}`} />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Middle East" />
        <OrganizationSchema locale={locale} url={BASE_URL} />
        <WebSiteSchema locale={locale} url={BASE_URL} />
        <LocalBusinessSchema locale={locale} url={BASE_URL} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ScrollAnimationProvider>
            <Header />
            {children}
            <Footer />
            <FloatingButtons />
          </ScrollAnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
