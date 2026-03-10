import { PRODUCT_CATEGORIES, getProductCategoryPath, getProductDetailPath } from "@/data/products";

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRODUCTS: '/products',
} as const;

export const PRODUCT_CATEGORY_ROUTES = {
  LIGHTNING_PROTECTION: '/products/lightning-protection',
  GROUNDING: '/products/grounding',
  SPECIALIZED: '/products/specialized',
  ADVANCED: '/products/advanced',
  MATERIALS: '/products/materials',
  ACCESSORIES: '/products/accessories',
} as const;

export { PRODUCT_CATEGORIES, getProductCategoryPath, getProductDetailPath };

export const NAV_LINKS = [
  { labelKey: 'nav.home', href: ROUTES.HOME },
  { labelKey: 'nav.products', href: ROUTES.PRODUCTS },
  { labelKey: 'nav.about', href: ROUTES.ABOUT },
] as const;

export const FOOTER_PRODUCT_LINKS = [
  { labelKey: 'footer.productLinks.lightningProtection', href: '/products/lightning-protection' },
  { labelKey: 'footer.productLinks.groundingSystems', href: '/products/grounding' },
  { labelKey: 'footer.productLinks.eseLightningRods', href: '/products/early-discharge-system' },
  { labelKey: 'footer.productLinks.rawMaterials', href: PRODUCT_CATEGORY_ROUTES.MATERIALS },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { labelKey: 'footer.companyLinks.aboutUs', href: ROUTES.ABOUT },
  { labelKey: 'footer.companyLinks.contact', href: ROUTES.CONTACT },
] as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
export type ProductCategoryRoute = typeof PRODUCT_CATEGORY_ROUTES[keyof typeof PRODUCT_CATEGORY_ROUTES];
