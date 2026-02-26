import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { ROUTES, getProductCategoryPath, getProductDetailPath } from '@/lib/routes';
import { getCategoryById, getProductById } from '@/data/products';
import FlagshipProductTemplate from '@/components/FlagshipProductTemplate';

interface ProductDetailClientProps {
  params: Promise<{ category: string; product: string }>;
}

export default function ProductDetailClient({ params }: ProductDetailClientProps) {
  const { category, product } = use(params);

  const currentCategory = getCategoryById(category);
  const currentProduct = getProductById(category, product);

  if (!currentCategory || !currentProduct) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-industrial-900 mb-4">产品未找到</h1>
              <p className="text-xl text-industrial-600 mb-8">您查找的产品不存在。</p>
              <Link
                href={ROUTES.PRODUCTS}
                className="px-6 py-3 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-colors"
              >
                返回产品列表
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (currentCategory.tier === 'flagship') {
    return <FlagshipProductTemplate category={currentCategory} product={currentProduct} />;
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-b from-industrial-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8 text-sm text-industrial-600">
            <Link href={ROUTES.PRODUCTS} className="hover:text-green-electric-400 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href={ROUTES.PRODUCTS} className="hover:text-green-electric-400 transition-colors">产品中心</Link>
            <span className="mx-2">/</span>
            <Link href={getProductCategoryPath(category)} className="hover:text-green-electric-400 transition-colors">{currentCategory.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-industrial-900 font-medium">{currentProduct.name}</span>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-industrial-900 mb-2">{currentProduct.name}</h1>
            {currentProduct.nameEn && (
              <p className="text-xl text-industrial-500">{currentProduct.nameEn}</p>
            )}
            <p className="text-industrial-600 mt-2">{currentCategory.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-industrial-600 mb-6">
                这是来自{currentCategory.name}系列的{currentProduct.name}产品。该产品设计符合最高行业标准，在各种应用场景中提供可靠的性能。
              </p>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">产品特点</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  优质材料和精湛工艺
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  在苛刻环境中表现可靠
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  易于安装和维护
                </li>
                <li className="flex items-center text-industrial-700">
                  <svg className="w-5 h-5 text-green-electric-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  符合国际标准
                </li>
              </ul>
              <h3 className="text-xl font-bold text-industrial-900 mb-4">应用场景</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">工业设施</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">建筑项目</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">电力系统</div>
                <div className="bg-industrial-50 rounded-lg p-3 text-center text-industrial-700">通信基站</div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-industrial-900 mb-8">相关产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentCategory.items
                .filter(item => item.id !== product)
                .slice(0, 4)
                .map((item) => (
                <Link key={item.id} href={getProductDetailPath(category, item.id)} className="group">
                  <div className="border border-industrial-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-48 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-industrial-900 mb-2">{item.name}</h4>
                      <div className="text-green-electric-600 hover:text-green-electric-500 font-medium text-sm inline-flex items-center">
                        查看详情
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">需要定制报价？</h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            联系我们获取有竞争力的价格和针对您特定需求的专业咨询。
          </p>
          <Link href={ROUTES.CONTACT} className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            请求报价
          </Link>
        </div>
      </section>
    </main>
  );
}
