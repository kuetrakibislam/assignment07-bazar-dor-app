export const instant = false;
import { connection } from "next/server";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import CategoryNav from "@/components/shared/CategoryNav";
import { getCategories, getProducts } from "@/lib/api";
import PriceTicker from "@/components/shared/PriceTicker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাজার দর | Bazar Dor",
  description: "Bazar Dor",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Navbar />
        <CategoryNav categories={categories} />
        <PriceTicker products={products}></PriceTicker>
        <main>
          {children}
        </main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
      </body>
    </html>
  );
}
