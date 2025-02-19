import { NewsInsights } from "@/components/sections/NewsInsights";
import { OurCulture } from "@/components/sections/OurCulture";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <Hero />
        
        {/* Our Culture Section - Full width */}
        <OurCulture />

        {/* News & Insights Section */}
        <NewsInsights />

        {/* Footer - Full width */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;