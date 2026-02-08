import type { Metadata } from "next";
import ProductPageLayout from "@/components/ProductPageLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Machines - Green Electric Industrial Supply",
  description: "CNC lathes, milling machines, and precision manufacturing equipment from Green Electric Industrial Supply.",
};

const products = [
  {
    id: 1,
    name: "CNC Lathe Machine",
    description: "High-precision CNC lathe for turning operations with advanced control systems",
    features: ["High spindle speed", "Automatic tool changer", "Precision ball screws"],
    image: "/images/products/machines/cnc-lathe/efeeb46e-b362-4ab5-b54a-b5ab53e1eabf.png",
  },
  {
    id: 2,
    name: "Vertical Milling Center",
    description: "3-axis vertical machining center for complex milling operations",
    features: ["Rigid construction", "High-speed spindle", "Large work envelope"],
    image: "/images/products/machines/vertical-milling/38904e9a-5f88-4cb8-802a-d0882c6764f6.png",
  },
  {
    id: 3,
    name: "CNC Grinding Machine",
    description: "Precision grinding machine for surface and cylindrical grinding",
    features: ["Sub-micron accuracy", "Automatic dressing", "Coolant system"],
    image: "/images/products/machines/grinding/22ef15d7-1f8f-4bf1-bdd1-adff9dc902e2.png",
  },
  {
    id: 4,
    name: "PTA Welding System",
    description: "Mobile plasma powder welding systems for heavy-duty industrial environments",
    features: ["PLC-controlled", "HMI interface", "Stable arc coating"],
    image: "/images/products/machines/PTA-Welding/d88c332b-7ba6-42e4-842b-30309a360a07.png",
  },
  {
    id: 5,
    name: "CNC Drilling Machine",
    description: "High-speed drilling machine for production environments",
    features: ["Multi-spindle option", "Quick tool change", "High throughput"],
    image: "/images/products/machines/drilling/7beb4057-bfb1-4555-940e-1938d5ba9005.png",
  },
  {
    id: 6,
    name: "Gantry Band Saw",
    description: "Heavy-duty gantry band saw for cutting large metal sections",
    features: ["Large cutting capacity", "Automatic feed", "Precision cutting"],
    image: "/images/products/machines/Gantry Band Saw/f449309e-230a-4c7f-b7b8-74e9b1f89618.png",
  },
  {
    id: 7,
    name: "CNC Punching Press",
    description: "High-speed CNC punching press for sheet metal fabrication",
    features: ["High punch rate", "Multiple tool stations", "Automatic positioning"],
    image: "/images/products/machines/CNC punching press/75b148e4-ade4-4e2b-bb0b-7207ac017011.png",
  },
  {
    id: 8,
    name: "CNC Bending Machine",
    description: "Precision CNC press brake for accurate metal bending operations",
    features: ["High bending force", "CNC back gauge", "Multiple axis control"],
    image: "/images/products/machines/CNC Bending machine/54bbba1d-f9b3-48c8-af78-43a23dc38ab5.png",
  },
  {
    id: 9,
    name: "Laser Cutting System",
    description: "High-power fiber laser cutting system for precision metal cutting",
    features: ["High cutting speed", "Fine cut quality", "Low operating cost"],
    image: "/images/products/machines/Laser Cutting System/40ef00f8-ca60-48a7-b719-eeec22f5f4ea.png",
  },
];

export default function MachinesPage() {
  return (
    <ProductPageLayout
      title="Machines"
      subtitle="Industrial Equipment"
      description="High-performance CNC machinery and industrial equipment for precision manufacturing. From lathes to laser cutting systems, we supply equipment that meets the demands of modern production."
      gradient="from-industrial-950 via-green-electric-900 to-industrial-900"
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
                        <svg className="w-4 h-4 mr-2 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center text-green-electric-600 font-medium hover:text-green-electric-700">
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
