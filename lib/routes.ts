import { PRODUCT_CATEGORIES, getProductCategoryPath, getProductDetailPath } from "@/data/products";

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRODUCTS: '/products',
} as const;

export const PRODUCT_CATEGORY_ROUTES = {
  LIGHTNING_CAPTURE_WARNING: '/products/lightning-capture-warning',
  DOWN_CONDUCTORS_BONDING: '/products/down-conductors-bonding',
  EARTHING_GROUNDING_SYSTEMS: '/products/earthing-grounding-systems',
  EXOTHERMIC_WELDING_CONNECTIONS: '/products/exothermic-welding-connections',
  INDUSTRIAL_STATIC_PROTECTION: '/products/industrial-static-protection',
  TESTING_FASTENERS_SUPPORT: '/products/testing-fasteners-support',
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
  { labelKey: 'footer.productLinks.lightningProtection', href: '/products/lightning-capture-warning' },
  { labelKey: 'footer.productLinks.groundingSystems', href: '/products/earthing-grounding-systems' },
  { labelKey: 'footer.productLinks.eseLightningRods', href: '/products/lightning-capture-warning' },
  { labelKey: 'footer.productLinks.rawMaterials', href: PRODUCT_CATEGORY_ROUTES.MATERIALS },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { labelKey: 'footer.companyLinks.aboutUs', href: ROUTES.ABOUT },
  { labelKey: 'footer.companyLinks.contact', href: ROUTES.CONTACT },
] as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];
