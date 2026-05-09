import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/components/seo/SchemaOrg";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wxgreenelectric.com';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    en: 'Green Electric | Lightning Protection & Grounding Solutions for EPC Projects',
    zh: '格林电工 | EPC项目防雷接地解决方案供应商',
    ar: 'Green Electric | حلول الحماية من الصواعق والتأريض لمشاريع EPC'
  };
  
  const descriptions: Record<string, string> = {
    en: 'Green Electric Equipment Co., Ltd. (Green Electric) specializes in the R&D and manufacturing of anti-corrosion lightning protection and grounding devices. As a professional lightning protection and grounding solution provider, we have been serving EPC projects for a long time. Our products strictly comply with international standards including IEC 62561, UL 467, IEEE 80, and Saudi Aramco SAES. We have been deeply engaged in petrochemical, power, transportation, and infrastructure sectors for over 30 years.',
    zh: '格林电工装备有限公司（格林电工）是一家专注于防腐型避雷接地装置研发与制造的专业公司，也是防雷接地解决方案供应商，长期服务于EPC工程总承包项目。公司产品严格符合IEC 62561、UL 467、IEEE 80及沙特阿美SAES等国际标准，深耕石化、电力、交通、基建等行业已超过三十年。',
    ar: 'شركة جرين إلكتريك للمعدات المحدودة (جرين إلكتريك) هي شركة متخصصة في البحث والتطوير والتصنيع لأجهزة الحماية من الصواعق والتأريض المقاومة للتآكل. كمزود محترف لحلول الحماية من الصواعق والتأريض، نخدم مشاريع EPC منذ فترة طويلة. منتجاتنا تتوافق بصرامة مع المعايير الدولية بما في ذلك IEC 62561 و UL 467 و IEEE 80 و Saudi Aramco SAES. نعمل بعمق في قطاعات البتروكيميائيات والطاقة والنقل والبنية التحتية لأكثر من 30 عاماً.'
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
