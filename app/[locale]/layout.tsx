import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";

export const metadata: Metadata = {
  title: "Green Electric Industrial Supply",
  description: "Professional Industrial Supply - Machines, Tools, Raw Materials & Accessories",
  icons: {
    icon: '/images/favicon.ico',
  },
};

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

  return (
    <html lang={locale} dir={direction}>
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
