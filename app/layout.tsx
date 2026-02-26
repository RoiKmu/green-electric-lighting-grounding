import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "Green Electric Industrial Supply",
  description: "Professional Industrial Supply - Machines, Tools, Raw Materials & Accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}