import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "關於我們 - Green Electric 專業防雷與接地系統供應商",
  description: "了解 Green Electric - 逾 30 年專注於提供一站式防雷保護、接地系統及工業原材料解決方案。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              關於我們
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              構築工業安全的堅實防線
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              自 1993 年創立以來，Green Electric 致力於成為全球領先的一站式防雷與接地系統專家，為您的設施提供全方位的安全保障。
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
                我們的故事
              </span>
              <h2 className="text-4xl font-bold text-industrial-900 mb-6">
                三十載工藝淬煉，成就系統化安全
              </h2>
              <div className="space-y-4 text-industrial-600 leading-relaxed">
                <p>
                  <strong className="text-industrial-900">Green Electric</strong> 於 1993 年在中國無錫成立，初期深耕於電氣設備製造領域。憑藉對安全標準的極致追求，我們在行業內建立了一流的信譽。
                </p>
                <p>
                  隨著工業安全需求的演進，我們策略性地整合了 **防雷系統（Lightning Protection）** 與 **接地解決方案（Grounding Solutions）**。我們意識到，真正的安全來自於組件間的完美協同，而非單一產品的堆疊。
                </p>
                <p>
                  今天，Green Electric 已成長為一家具備**一站式供應能力**的領先企業。從避雷針、電解離子接地極到熔焊系列施工配件，甚至是支撐基礎工程的鋼鋁型材，我們提供涵蓋整個項目週期的全套物料支援。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96 relative shadow-2xl">
                <Image
                  src="/images/about/catgirlmutant-jADekDuAPSA-unsplash.jpg"
                  alt="Green Electric 生產設施"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-electric-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-green-electric-200">年工業實力沉澱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The One-Stop Advantage - 新增的一站式優勢版塊 */}
      <section className="py-24 bg-industrial-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">一站式解決方案的優勢</h2>
            <p className="text-industrial-400 max-w-2xl mx-auto text-lg">
              我們不只是物料供應商，更是您的系統化安全夥伴
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">01.</div>
              <h3 className="text-xl font-bold">系統兼容性保障</h3>
              <p className="text-industrial-400">
                從接閃端到接地極，所有組件均遵循統一的技術規格設計，確保導電連續性與防腐性能達到最優狀態。
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">02.</div>
              <h3 className="text-xl font-bold">採購流程極簡化</h3>
              <p className="text-industrial-400">
                單一供應商即可覆蓋所有防雷耗材、基礎鋼材與精密配件，大幅降低溝通、物流與時間成本。
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-green-electric-500 text-2xl font-bold italic">03.</div>
              <h3 className="text-xl font-bold">專業工程技術支援</h3>
              <p className="text-industrial-400">
                針對易燃易爆等特殊場所提供專用靜電防護建議，並支援放熱焊接等關鍵工藝的物料配套方案。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-industrial-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              發展歷程
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              里程碑
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-12 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-industrial-200 before:to-transparent">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">1993</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">公司創立</h3>
                  <p className="text-industrial-600">Green Electric 在無錫成立，專注於電力設備製造與工業電氣研發。</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">2010</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">防雷事業部成立</h3>
                  <p className="text-industrial-600">開始研發高性能防腐避雷針與接地體，為基礎設施提供安全防禦。</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">2018</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">整合解決方案升級</h3>
                  <p className="text-industrial-600">推出全能型納米碳接地系列與自動監測系統，實現產品智能化與系統化。</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8 hidden md:block">
                  <span className="text-2xl font-bold text-green-electric-600">今日</span>
                </div>
                <div className="w-4 h-4 bg-green-electric-600 rounded-full mt-2 flex-shrink-0 z-10" />
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">一站式採購領航者</h3>
                  <p className="text-industrial-600">服務範圍擴展至全球，提供從接閃到接地、從原材料到施工工具的全方位解決方案。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-electric-100 text-green-electric-700 rounded-full text-sm font-semibold mb-4">
              核心價值
            </span>
            <h2 className="text-4xl font-bold text-industrial-900">
              驅動我們前行的力量
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">安全為先</h3>
              <p className="text-industrial-600">不論是常規建築還是石油化工等高危場所，我們對質量的承諾始終如一。</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">創新技術</h3>
              <p className="text-industrial-600">持續研發電解離子接地與遙控焊接等新技術，將傳統工程提升至科技高度。</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border border-industrial-100 shadow-lg hover:border-green-electric-300 transition-colors">
              <div className="w-16 h-16 bg-green-electric-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-electric-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-industrial-900 mb-3">整合服務</h3>
              <p className="text-industrial-600">將原材料供應與專業防雷組件完美對接，提供最省心的 B2B 採購體驗。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-electric-700 to-green-electric-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            開啟您的一站式採購之旅
          </h2>
          <p className="text-xl text-green-electric-100 mb-8 max-w-2xl mx-auto">
            體驗 Green Electric 的系統化解決方案。立即聯繫我們，讓我們專業的技術團隊為您的項目提供全方位支援。
          </p>
          <Link href={ROUTES.CONTACT} className="inline-block px-8 py-4 bg-white text-green-electric-700 rounded-lg hover:bg-industrial-50 font-semibold text-lg transition-all duration-300 shadow-lg">
            立即諮詢與報價
          </Link>
        </div>
      </section>
    </main>
  );
}