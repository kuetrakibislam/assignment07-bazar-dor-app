import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProductSection products={products}></ProductSection>
      </div>
    </main>
  );
}