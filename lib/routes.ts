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
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Products', href: ROUTES.PRODUCTS },
  { label: 'About Us', href: ROUTES.ABOUT },
] as const;

export const FOOTER_PRODUCT_LINKS = [
  { label: 'Lightning Protection', href: '/products/lightning-protection' },
  { label: 'Grounding Systems', href: '/products/grounding' },
  { label: 'ESE Lightning Rods', href: '/products/early-discharge-system' },
  { label: 'Raw Materials', href: PRODUCT_CATEGORY_ROUTES.MATERIALS },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: 'About Us', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
] as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
export type ProductCategoryRoute = typeof PRODUCT_CATEGORY_ROUTES[keyof typeof PRODUCT_CATEGORY_ROUTES];
