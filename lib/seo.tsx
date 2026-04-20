import { CaseStudySchema, BreadcrumbSchema } from '@/components/seo/SchemaOrg';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wuxigreen.com';

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
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wuxigreen.com';
  
  const title = locale === 'zh' ? project.title 
    : locale === 'ar' ? project.titleAr 
    : project.titleEn;
  
  const description = locale === 'zh' ? project.highlight 
    : locale === 'ar' ? project.highlightAr 
    : project.highlightEn;

  return {
    title,
    description,
    keywords: [
      title,
      industry,
      'lightning protection',
      'grounding system',
      'EPC project',
      'Saudi Arabia',
      'Middle East',
      'IEC 62561',
      'Aramco SAES'
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
