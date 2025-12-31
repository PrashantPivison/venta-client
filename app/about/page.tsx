import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { VentaButton } from "@/components/ui/venta-button";
import { Shield, Award, Globe, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality and Reliability",
      description: "Our commitment to quality ensures that every product meets rigorous safety standards and performance criteria."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With over a decade of experience, we've expanded into markets across the U.K., Turkey, Qatar, Iran, Israel, Africa, the U.S., and Russia."
    },
    {
      icon: Award,
      title: "Customer-Centric Approach",
      description: "We prioritize our clients' needs, offering personalized service and tailored solutions for every project."
    },
    {
      icon: TrendingUp,
      title: "Excellence in Delivery",
      description: "Our focus on quality and ability to handle large, complex orders have earned us the trust of clients worldwide."
    }
  ];

  const reasons = [
    {
      title: "Comprehensive Solutions",
      description: "We offer a one-stop solution for all scaffolding needs, eliminating the hassle of dealing with multiple suppliers. Our expertise extends to synchronizing machinery to optimize production lines."
    },
    {
      title: "Quality and Reliability",
      description: "Our commitment to quality ensures that every product meets rigorous safety standards and performance criteria."
    },
    {
      title: "Global Reach",
      description: "With over a decade of industry experience and a robust network, we have successfully expanded into markets such as the U.K., Turkey, Qatar, Iran, Israel, and emerging markets like Africa, the U.S., and Russia."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-24">
      <Hero
        tag="About Venta International"
        title={<>Over <span className="text-[#fac938]">10 Years</span> of Trusted Excellence</>}
        description="Venta International LLP stands as a premier leader in the scaffolding supplies industry, recognized for its rapid growth and innovation."
        backgroundImage="/assets/hero-1.png"
        backgroundGradient="from-black/50 to-black/50"
        minHeight="min-h-[500px]"
        textColor="light"
      />

      {/* Introduction Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#fac938]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-[#fac938] font-bold uppercase tracking-wider text-sm">Scaffolding Leaders</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
                Your Premier Partner for <span className="text-[#fac938]">Scaffolding Systems</span>
              </h2>
              <p className="text-lg text-[#1C1C1C]/70 mb-6 leading-relaxed">
                Venta International LLP is a leading manufacturer and supplier of premium scaffolding systems and structural accessories. With a strong reputation as a trusted exporter, we serve prominent commercial, industrial, and residential project leaders across Africa, the Middle East, and Europe.
              </p>
              <p className="text-lg text-[#1C1C1C]/70 leading-relaxed">
                As a registered MSME, Venta International caters to India's diverse needs for high-quality, custom scaffolding solutions. Our product range includes base plates, couplers, jacks, and clamps, all readily available from our inventory.
              </p>
            </div>
            
            <div className="relative h-[500px] rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="/assets/section1.webp"
                alt="Venta Scaffolding Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Venta Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] text-center mb-16">
            Why Choose <span className="text-[#fac938]">Venta International?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-[#F9F9F9] rounded-[20px] p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">{reason.title}</h3>
                <p className="text-[#1C1C1C]/70 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] text-center mb-6">
            Our Core <span className="text-[#fac938]">Values</span>
          </h2>
          <p className="text-center text-[#1C1C1C]/70 text-lg max-w-3xl mx-auto mb-16">
            At Venta International, we are dedicated to providing top-notch scaffolding solutions that meet the highest standards of safety and quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-[20px] p-8 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-[#fac938]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fac938] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#fac938] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">{value.title}</h3>
                  <p className="text-[#1C1C1C]/70 leading-relaxed text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#3b2f0d] text-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Partner with the <span className="text-[#fac938]">Best?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Contact us today to discover how we can support your project needs with our superior scaffolding systems and structural accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <VentaButton href="/contact">Contact Us</VentaButton>
            <VentaButton href="/shop" variant="secondary" className="bg-white hover:bg-gray-100 !text-[#3b2f0d]">
              View Products
            </VentaButton>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  );
}
