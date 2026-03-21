import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, DollarSign, Clock, Languages, Shield, Home, UtensilsCrossed, GraduationCap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/home/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CountryData } from "@/data/countries";

interface Props {
  data: CountryData;
}

const CountryPageTemplate = ({ data }: Props) => {
  useEffect(() => {
    document.title = data.metaTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.metaDescription);
    window.scrollTo(0, 0);
  }, [data]);

  const infoCards = [
    { icon: DollarSign, label: "Tuition Fees", value: data.feeRange },
    { icon: Clock, label: "Living Cost", value: data.livingCost },
    { icon: Languages, label: "Language", value: data.language },
    { icon: Shield, label: "Recognition", value: data.recognition },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container">
            <AnimateIn animation="fade-up">
              <span className="text-5xl mb-4 block">{data.flag}</span>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={80}>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">{data.program} Abroad</span>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={120}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] max-w-3xl">{data.heroTitle}</h1>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={200}>
              <p className="mt-5 text-lg text-primary-foreground/65 max-w-2xl leading-relaxed">{data.heroSubtitle}</p>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={300}>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all">
                Get Free Counselling <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <AnimateIn key={card.label} animation="fade-up" delay={i * 80}>
                    <div className="p-5 rounded-2xl bg-secondary text-center">
                      <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground mb-1">{card.label}</p>
                      <p className="text-sm font-bold text-foreground">{card.value}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Overview" title={`${data.program} in ${data.name} — Overview`} />
            <AnimateIn animation="fade-up"><p className="text-muted-foreground leading-relaxed text-center">{data.overview}</p></AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 text-center">{data.educationSystem}</p>
            </AnimateIn>
          </div>
        </section>

        {/* Why Study Here */}
        <section className="py-16 md:py-24 section-light">
          <div className="container max-w-4xl">
            <SectionTitle label="Advantages" title={`Why Study ${data.program} in ${data.name}?`} />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.whyStudyHere.map((item, i) => (
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

        {/* Student Life */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Student Life" title="Hostel, Food & Safety" />
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Home, title: "Accommodation", text: data.hostel },
                { icon: UtensilsCrossed, title: "Indian Food", text: data.indianFood },
                { icon: Shield, title: "Safety", text: data.safety },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimateIn key={item.title} animation="fade-up" delay={i * 80}>
                    <div className="p-6 rounded-2xl bg-secondary">
                      <Icon className="w-5 h-5 text-accent mb-3" />
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Top Universities */}
        <section className="py-16 md:py-24 section-deep">
          <div className="container">
            <SectionTitle light label="Universities" title={`Top Universities in ${data.name}`} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {data.topUniversities.map((uni, i) => (
                <AnimateIn key={uni.name} animation="fade-up" delay={i * 80}>
                  <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      <h3 className="font-bold text-primary-foreground text-sm">{uni.name}</h3>
                    </div>
                    <div className="space-y-1 text-xs text-primary-foreground/50">
                      <p><MapPin className="w-3 h-3 inline mr-1" />{uni.city}</p>
                      <p><DollarSign className="w-3 h-3 inline mr-1" />{uni.fees}</p>
                      {uni.ranking && <p className="text-accent text-xs font-medium mt-2">{uni.ranking}</p>}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <SectionTitle label="Process" title="Admission Process" />
            <div className="space-y-4">
              {data.admissionProcess.map((step, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 70}>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-bold flex items-center justify-center shrink-0 tabular-nums">{i + 1}</span>
                    <p className="text-sm text-foreground pt-1.5">{step}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn animation="fade-up" delay={400}>
              <p className="mt-6 text-sm text-muted-foreground italic">{data.visaSupport}</p>
            </AnimateIn>
          </div>
        </section>

        {/* Career */}
        <section className="py-16 md:py-24 section-light">
          <div className="container max-w-4xl">
            <SectionTitle label="Career" title="Career Scope After Graduation" />
            <div className="grid sm:grid-cols-2 gap-3">
              {data.careerOutcomes.map((item, i) => (
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

        {/* FAQ */}
        <section className="py-16 md:py-24">
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

export default CountryPageTemplate;
