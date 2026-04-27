import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.wxgreenelectric.com'

const locales = ['en', 'zh', 'ar']

const staticPages = [
  '',
  '/products',
  '/products/materials',
  '/about',
  '/contact',
  '/projects',
  '/projects/petrochemical',
  '/projects/power-energy',
  '/projects/transportation',
  '/projects/infrastructure',
  '/solutions/petrochemical',
  '/solutions/power-energy',
  '/solutions/transportation',
  '/solutions/infrastructure',
]

const productCategories = [
  'lightning-capture-warning',
  'down-conductors-bonding',
  'earthing-grounding-systems',
  'exothermic-welding-connections',
  'industrial-static-protection',
  'testing-fasteners-support',
]

const flagshipProducts = [
  { category: 'lightning-capture-warning', product: 'ese-air-terminal' },
  { category: 'lightning-capture-warning', product: 'lightning-warning-system' },
  { category: 'lightning-capture-warning', product: 'conventional-air-terminal' },
  { category: 'earthing-grounding-systems', product: 'copper-bonded-rod' },
  { category: 'earthing-grounding-systems', product: 'electrolytic-ion-electrode' },
  { category: 'earthing-grounding-systems', product: 'nano-carbon-grounding' },
  { category: 'exothermic-welding-connections', product: 'exothermic-welding' },
  { category: 'exothermic-welding-connections', product: 'remote-igniter' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  const staticRoutes: MetadataRoute.Sitemap = locales.flatMap(locale =>
    staticPages.map(page => {
      let priority = 0.8
      if (page === '') priority = 1.0
      else if (page === '/about' || page === '/contact') priority = 0.9
      else if (page === '/products' || page === '/projects') priority = 0.9

      return {
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: page === '' ? 'daily' : 'weekly' as const,
        priority: priority,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${page}`,
            zh: `${BASE_URL}/zh${page}`,
            ar: `${BASE_URL}/ar${page}`,
            'x-default': `${BASE_URL}/en${page}`,
          },
        },
      }
    })
  )

  const categoryRoutes: MetadataRoute.Sitemap = locales.flatMap(locale =>
    productCategories.map(category => ({
      url: `${BASE_URL}/${locale}/products/${category}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/products/${category}`,
          zh: `${BASE_URL}/zh/products/${category}`,
          ar: `${BASE_URL}/ar/products/${category}`,
          'x-default': `${BASE_URL}/en/products/${category}`,
        },
      },
    }))
  )

  const productRoutes: MetadataRoute.Sitemap = locales.flatMap(locale =>
    flagshipProducts.map(({ category, product }) => ({
      url: `${BASE_URL}/${locale}/products/${category}/${product}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/products/${category}/${product}`,
          zh: `${BASE_URL}/zh/products/${category}/${product}`,
          ar: `${BASE_URL}/ar/products/${category}/${product}`,
          'x-default': `${BASE_URL}/en/products/${category}/${product}`,
        },
      },
    }))
  )

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
  ]
}
