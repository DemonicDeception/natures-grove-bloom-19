import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
