import { CaseStudySchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

const BASE_URL = 'https://www.wxgreenelectric.com';

const BRAND = {
  zh: '格林电工 | 无锡市格林电工装备有限公司',
  en: 'Green Electric | Wuxi Green Electric Equipment Co., Ltd.',
  ar: 'Green Electric | شركة ووكسي جرين للمعدات الكهربائية'
};

interface ProjectSchemaData {
  locale: string;
  project: {
    id: string;
    title: string;
    titleEn: string;
    titleAr: string;
    location: string;
    locationEn: string;
    locationAr: string;
    background: string;
    backgroundEn: string;
    backgroundAr: string;
    highlight: string;
    highlightEn: string;
    highlightAr: string;
    image: string;
    year: string;
  };
  industry: string;
  industrySlug: string;
}

export function generateProjectSchema(data: ProjectSchemaData) {
  const { locale, project, industry, industrySlug } = data;
  
  const title = locale === 'zh' ? project.title 
    : locale === 'ar' ? project.titleAr 
    : project.titleEn;
  
  const location = locale === 'zh' ? project.location 
    : locale === 'ar' ? project.locationAr 
    : project.locationEn;
  
  const description = locale === 'zh' ? project.highlight 
    : locale === 'ar' ? project.highlightAr 
    : project.highlightEn;

  return (
    <>
      <CaseStudySchema
        locale={locale}
        url={BASE_URL}
        name={title}
        description={description}
        image={project.image}
        industry={industry}
        location={location}
        year={project.year}
      />
      <BreadcrumbSchema
        items={[
          { name: locale === 'zh' ? '首页' : locale === 'ar' ? 'الرئيسية' : 'Home', url: `${BASE_URL}/${locale}` },
          { name: locale === 'zh' ? '项目案例' : locale === 'ar' ? 'المشاريع' : 'Projects', url: `${BASE_URL}/${locale}/projects` },
          { name: industry, url: `${BASE_URL}/${locale}/projects/${industrySlug}` },
          { name: title, url: `${BASE_URL}/${locale}/projects/${industrySlug}` },
        ]}
      />
    </>
  );
}

export function generateProjectMetadata(
  project: {
    title: string;
    titleEn: string;
    titleAr: string;
    highlight: string;
    highlightEn: string;
    highlightAr: string;
    image: string;
  },
  industry: string,
  locale: string,
  industrySlug: string
) {
  const titleSuffix = BRAND[locale as keyof typeof BRAND] || BRAND.en;
  
  const currentTitle = locale === 'zh' ? project.title 
    : locale === 'ar' ? project.titleAr 
    : project.titleEn;
  
  const description = locale === 'zh' ? project.highlight 
    : locale === 'ar' ? project.highlightAr 
    : project.highlightEn;

  return {
    title: `${currentTitle} - ${industry} | ${titleSuffix}`,
    description: `${description}. ${BRAND[locale as keyof typeof BRAND]} provides IEC 62561 compliant grounding materials.`,
    keywords: [
      '无锡市格林电工装备有限公司',
      '格林电工',
      'Wuxi Green Electric',
      'wxgreenelectric',
      '防雷接地',
      '接地极',
      '避雷针',
      'Lightning Protection',
      'Grounding System',
      'ESE Lightning Rod',
      'Aramco SAES',
      'IEC 62561',
      'UL 467',
      'Saudi Arabia EPC Supply',
      currentTitle,
      industry
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/projects/${industrySlug}`,
      languages: {
        en: `${BASE_URL}/en/projects/${industrySlug}`,
        zh: `${BASE_URL}/zh/projects/${industrySlug}`,
        ar: `${BASE_URL}/ar/projects/${industrySlug}`,
      },
    },
  };
}

export const INDUSTRY_LABELS: Record<string, { en: string; zh: string; ar: string }> = {
  infrastructure: {
    en: 'Infrastructure',
    zh: '基础设施',
    ar: 'البنية التحتية'
  },
  petrochemical: {
    en: 'Petrochemical & Natural Gas',
    zh: '石化与天然气',
    ar: 'البتر والكيميائيات والغاز الطبيعي'
  },
  'power-energy': {
    en: 'Power & Energy',
    zh: '电力与新能源',
    ar: 'الطاقة والطاقة المتجددة'
  },
  transportation: {
    en: 'Transportation',
    zh: '轨道交通',
    ar: 'النقل بالسكك الحديدية'
  }
};

export { BASE_URL, BRAND };
