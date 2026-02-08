import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accessories - Green Electric Industrial Supply",
  description: "Industrial accessories, fasteners, and safety equipment from Green Electric Industrial Supply.",
};

const products = [
  {
    id: 1,
    name: "Bolts & Nuts",
    description: "High-quality fasteners for industrial and construction applications",
    features: ["Various grades", "Metric and imperial", "Bulk quantities"],
    image: "/images/products/accessories/Bolts n Nuts/c0e43dd2-052d-4898-aaf5-9fb7381987c3.png",
  },
  {
    id: 2,
    name: "Valves",
    description: "Industrial valves for fluid and gas control systems",
    features: ["Ball, gate, check types", "Various materials", "Pressure rated"],
    image: "/images/products/accessories/Valves/deb2c5f5-0e81-471f-ad86-5c640129ada5.png",
  },
  {
    id: 3,
    name: "Measuring Tools",
    description: "Precision measuring instruments for quality control",
    features: ["Calipers, micrometers", "Digital and analog", "High accuracy"],
    image: "/images/products/accessories/Measuring Tools/d59de8dc-d1c7-4cf6-8f17-d98fa50bdf6f.png",
  },
  {
    id: 4,
    name: "Personal Protection Equipment",
    description: "Safety gear and protective equipment for industrial workers",
    features: ["Safety glasses, gloves", "Hearing protection", "Certified standards"],
    image: "/images/products/accessories/Person Protection Equipment/ebf835a1-636f-46e9-87f7-d92389f4a085.png",
  },
];

export default function AccessoriesPage() {
  return (
    <ProductPageLayout
      title="Accessories"
      subtitle="Industrial Components"
      description="Essential accessories and components to keep your manufacturing operations running smoothly. From fasteners to safety equipment, we have everything you need."
      gradient="from-industrial-900 via-purple-900 to-industrial-950"
    >
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-industrial-100 overflow-hidden card-hover">
                <div className="h-48 relative overflow-hidden bg-industrial-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-900 mb-2">{product.name}</h3>
                  <p className="text-industrial-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-industrial-500">
                        <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700">
                    Request Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}