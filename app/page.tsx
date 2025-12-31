import { Header } from "@/components/Header";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { AboutStatistics } from "@/components/AboutStatistics";
import { IndustriesWeSupport } from "@/components/IndustriesWeSupport";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseVenta } from "@/components/WhyChooseVenta";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Slideshow - Full Width */}
      <HeroSlideshow />
      
      {/* About + Statistics Section */}
      <AboutStatistics />
      
      {/* Industries We Support Section */}
      <IndustriesWeSupport />
      
      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* Why Choose Venta Section */}
      <WhyChooseVenta />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
