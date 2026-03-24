import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/home/HeroSection";
import { CareerPathSection } from "@/components/home/CareerPathSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CollegeLogosCarousel } from "@/components/home/CollegeLogosCarousel";
import { CountryHighlights } from "@/components/home/CountryHighlights";
import { CareerGuidanceSection } from "@/components/home/CareerGuidanceSection";
import { TopExamsSection } from "@/components/home/TopExamsSection";
import { JourneyTimeline } from "@/components/home/JourneyTimeline";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CareerPathSection />
        <CollegeLogosCarousel />
        <WhyChooseSection />
        <CountryHighlights />
        <TopExamsSection />
        <CareerGuidanceSection />
        <JourneyTimeline />
        <TestimonialsSection />
        <BlogPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
