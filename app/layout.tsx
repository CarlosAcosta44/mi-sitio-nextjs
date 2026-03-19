// app/layout.tsx – RootLayout
// Punto de entrada: define <html>, metadata, fuente, Navbar y Footer.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
// import Footer from "@/components/Footer"; // Se agrega más adelante
import { siteConfig } from "@/lib/data";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}