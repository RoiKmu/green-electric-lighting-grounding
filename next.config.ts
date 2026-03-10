import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import path from "path";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname, "./"),
};

export default withNextIntl(nextConfig);
