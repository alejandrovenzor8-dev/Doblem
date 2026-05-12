import Hero from "@/components/Hero";
import PropertiesSection from "@/components/PropertiesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyDobleM from "@/components/WhyDobleM";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertiesSection />
      <ServicesSection />
      <WhyDobleM />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <LeadForm />
      <CTASection />
    </>
  );
}
