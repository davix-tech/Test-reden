import ProductGrid from "@/components/store/product-grid";
import HeroSection from "@/components/store/hero-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProductGrid />
    </main>
  );
}
