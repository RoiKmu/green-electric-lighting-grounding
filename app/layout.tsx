import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
