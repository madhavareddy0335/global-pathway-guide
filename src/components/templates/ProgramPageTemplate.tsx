import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ProgramData } from "@/data/programs";

interface Props {
  data: ProgramData;
}

const ProgramPageTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.metaDescription);
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container">
            <AnimateIn animation="fade-up">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">{data.title}</span>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] max-w-3xl">{data.heroTitle}</h1>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={200}>
              <p className="mt-5 text-lg text-primary-foreground/65 max-w-2xl leading-relaxed">{data.heroSubtitle}</p>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={300}>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all">
                  Get Free Counselling <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Overview" title={`About ${data.title}`} />
            <AnimateIn animation="fade-up"><p className="text-muted-foreground leading-relaxed text-center">{data.overview}</p></AnimateIn>
          </div>
        </section>

        {/* Who Should Choose */}
        <section className="py-16 md:py-24 section-light">
          <div className="container max-w-4xl">
            <SectionTitle label="Is This For You?" title={`Who Should Choose ${data.title}?`} />
            <div className="space-y-3">
              {data.whoShouldChoose.map((item, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                  <div className="flex gap-3 items-start p-4 bg-background rounded-xl border">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Requirements" title="Eligibility Criteria" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.eligibility.map((item, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                  <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="py-16 md:py-24 section-deep">
          <div className="container">
            <SectionTitle light label="Destinations" title={`Top Countries for ${data.title}`} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {data.countries.map((c, i) => (
                <AnimateIn key={c.name} animation="fade-up" delay={i * 80}>
                  <Link to={c.href} className="block p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{c.flag}</span>
                      <h3 className="font-bold text-primary-foreground">{c.name}</h3>
                    </div>
                    <div className="text-xs text-primary-foreground/40 space-y-1">
                      <p>Fees: {c.fees}</p>
                      <p>Duration: {c.duration}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <SectionTitle label="Process" title="Admission Process" />
            <div className="space-y-4">
              {data.admissionSteps.map((step, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 70}>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-bold flex items-center justify-center shrink-0 tabular-nums">{i + 1}</span>
                    <p className="text-sm text-foreground pt-1.5">{step}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Budget */}
        <section className="py-16 md:py-24 section-light">
          <div className="container max-w-3xl text-center">
            <SectionTitle label="Budget" title="Estimated Budget" />
            <AnimateIn animation="scale-in">
              <div className="inline-block px-10 py-8 bg-background rounded-2xl border shadow-sm">
                <p className="text-3xl md:text-4xl font-extrabold text-accent">{data.budgetRange}</p>
                <p className="text-sm text-muted-foreground mt-2">Varies by country and university</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Your Future" title="Career Outcomes" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.careerOutcomes.map((item, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                  <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 section-light">
          <div className="container max-w-3xl">
            <SectionTitle label="FAQ" title="Frequently Asked Questions" />
            <AnimateIn animation="fade-up">
              <Accordion type="single" collapsible className="space-y-3">
                {data.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 text-[15px]">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateIn>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProgramPageTemplate;
