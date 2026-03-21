import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import type { ReactNode } from "react";

interface Props {
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  children: ReactNode;
}

const StandardPageTemplate = ({ metaTitle, metaDescription, heroLabel, heroTitle, heroSubtitle, children }: Props) => {
  useEffect(() => {
    document.title = metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metaDescription);
    window.scrollTo(0, 0);
  }, [metaTitle, metaDescription]);

  return (
    <>
      <Header />
      <main>
        <section className="hero-gradient pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container">
            <AnimateIn animation="fade-up">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">{heroLabel}</span>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] max-w-3xl">{heroTitle}</h1>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={200}>
              <p className="mt-5 text-lg text-primary-foreground/65 max-w-2xl leading-relaxed">{heroSubtitle}</p>
            </AnimateIn>
          </div>
        </section>
        {children}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default StandardPageTemplate;
