import CallToActionSection from "../components/CallToActionSection";
import ContactSection from "../components/contact/ContactSection";
import Hero from "../components/Hero";
import ServiceCardsSection from "../components/services/ServiceCardSection";
import ServicesSection from "../components/services/ServicesSection";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesSection />
      <ServiceCardsSection />
      <CallToActionSection />
      {/* <FeaturesSection /> */}
      {/* <RecentBlog /> */}
      <ContactSection />
    </>
  );
}
