import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tools - Green Electric Industrial Supply",
  description: "Precision cutting tools, carbide inserts, and tooling solutions from Green Electric Industrial Supply.",
};

const products = [
  {
    id: 1,
    name: "Carbide Inserts",
    description: "High-performance carbide inserts for turning, milling, and drilling operations",
    features: ["Multiple grades available", "PVD/CVD coatings", "Various geometries"],
    image: "/images/products/tools/carbide-inserts/08310029-6cf5-4660-ae43-49549036e77b.png",
  },
  {
    id: 2,
    name: "End Mills",
    description: "Solid carbide and HSS end mills for precision milling applications",
    features: ["2-6 flute options", "Various coatings", "Standard and custom sizes"],
    image: "/images/products/tools/end-mills/fa4402c2-8f41-4635-be99-5cdf5c9c0adc.png",
  },
  {
    id: 3,
    name: "Drills & Reamers",
    description: "Precision drills and reamers for accurate hole-making operations",
    features: ["Carbide and HSS", "Coolant-through options", "High accuracy"],
    image: "/images/products/tools/drills-reamers/2edbb972-4085-4831-b226-1b905bdc32fa.png",
  },
  {
    id: 4,
    name: "Threading Tools",
    description: "Thread cutting and forming tools for internal and external threads",
    features: ["Taps and dies", "Thread mills", "Multiple thread forms"],
    image: "/images/products/tools/threading/5b62ba20-8821-43a3-8a37-111ddb457b77.png",
  },
  {
    id: 5,
    name: "Boring Tools",
    description: "Precision boring bars and heads for accurate bore finishing",
    features: ["Adjustable heads", "Carbide tipped", "Fine boring capability"],
    image: "/images/products/tools/boring/5088acf8-93ca-456d-9c64-60eea2983c3d.png",
  },
  {
    id: 6,
    name: "Tool Holders",
    description: "Tool holders and adapters for secure tool mounting",
    features: ["BT/CAT/HSK shanks", "High rigidity", "Balanced design"],
    image: "/images/products/tools/tool-holders/4cafc193-df82-45f4-9fea-7b9a3f3780fd.png",
  },
];

export default function ToolsPage() {
  return (
    <ProductPageLayout
      title="Tools"
      subtitle="Cutting Solutions"
      description="Premium cutting tools and tooling solutions for all machining applications. From carbide inserts to specialized tooling, we provide the tools you need for precision manufacturing."
      gradient="from-industrial-900 via-blue-900 to-industrial-950"
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
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
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
