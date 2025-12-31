import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import contactInfo from "@/data/contactInfo.json";

export default function ContactPage() {

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="pt-24">
      
      <Hero
        tag="Get In Touch"
        title={<>Contact <span className="text-[#fac938]">Venta International</span></>}
        description="We're here to help with all your scaffolding needs. Reach out to our team for inquiries, quotes, or support."
        backgroundImage="/assets/hero-2.jpg"
        backgroundGradient="from-black/50 to-black/50"
        textColor="light"
      />

      {/* Contact Information & Form Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              {/* Call Us */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#fac938]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#fac938]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Call Us</h3>
                </div>
                <div className="space-y-3 ml-15">
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-lg text-[#1C1C1C]/70 hover:text-[#fac938] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mail Us */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#fac938]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#fac938]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Mail Us</h3>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-lg text-[#1C1C1C]/70 hover:text-[#fac938] transition-colors ml-15"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Visit Us */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#fac938]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#fac938]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Visit Us</h3>
                </div>
                <div className="space-y-8">
                  {contactInfo.addresses.map((location, index) => (
                    <div key={index} className="ml-15">
                      <h4 className="font-semibold text-[#1C1C1C] mb-2">{location.type}:</h4>
                      <p className="text-[#1C1C1C]/70 mb-3 leading-relaxed">
                        {location.address}
                      </p>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#fac938] hover:text-[#e8b821] transition-colors font-medium"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F9F9F9] rounded-[20px] p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-[#1C1C1C] mb-2">Send Us a Message</h3>
              <p className="text-[#1C1C1C]/70 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl font-bold text-[#1C1C1C] text-center mb-12">
            Find Us on <span className="text-[#fac938]">Map</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Office Map */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-lg">
              <div className="p-6 bg-[#fac938]">
                <h3 className="text-xl font-bold text-[#3b2f0d]">Corporate Office</h3>
              </div>
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0676890277646!2d72.99741431490046!3d19.059722087108893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d4f2e3d0e1%3A0x1e2e3f4a5b6c7d8e!2sSatra%20Plaza%2C%20Sector%2019D%2C%20Vashi%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Warehouse Map */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-lg">
              <div className="p-6 bg-[#fac938]">
                <h3 className="text-xl font-bold text-[#3b2f0d]">Warehouse</h3>
              </div>
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9876543210987!2d73.01234567890123!3d19.065432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3e5f3f4e1f2%3A0x2f3g4h5i6j7k8l9m!2sSector%2023%2C%20Turbhe%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
