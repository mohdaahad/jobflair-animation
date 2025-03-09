
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { TrendingCategories } from "@/components/TrendingCategories";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <TrendingCategories />
        <FeaturedJobs />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
