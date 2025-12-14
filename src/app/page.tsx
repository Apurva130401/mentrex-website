import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Features } from "@/components/ui/features";
import { ModelsSection } from "@/components/ui/models-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ModelsSection />
      </main>
      <Footer />
    </div>
  );
}
