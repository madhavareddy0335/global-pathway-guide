import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const guidanceTopics = [
  { title: "After 12th Science (PCB)", items: ["MBBS Abroad — Study medicine at affordable NMC-recognized universities", "Nursing Abroad — Healthcare career with global demand", "Pharmacy Abroad — Pharmaceutical sciences in recognized universities"] },
  { title: "After Graduation (B.Tech/B.Sc)", items: ["MS Abroad — Specialize in engineering, data science, AI, or research", "PhD Abroad — Funded research positions at top universities", "Professional Certifications — AWS, Google, CFA, and more"] },
  { title: "After MBBS", items: ["PG Specialization (MD/MS) in India or abroad", "USMLE pathway for practicing in USA", "PLAB pathway for practicing in UK", "FMGE/NEXT preparation for India practice"] },
];

const CareerGuidance = () => (
  <StandardPageTemplate
    metaTitle="Career Guidance — Study Abroad Path Finder | KMR Global Education"
    metaDescription="Expert career guidance for students after 12th, graduation, or MBBS. Find the right course, country, and career path abroad."
    heroLabel="Career Guidance"
    heroTitle="Find Your Perfect Career Path Abroad"
    heroSubtitle="Not sure which course or country is right for you? Our expert career guidance helps you make informed decisions based on your profile, goals, and budget."
  >
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle label="Your Options" title="Career Paths by Education Level" />
        <div className="space-y-8 max-w-4xl mx-auto">
          {guidanceTopics.map((topic, ti) => (
            <AnimateIn key={topic.title} animation="fade-up" delay={ti * 100}>
              <div className="p-6 rounded-2xl bg-secondary">
                <h3 className="text-xl font-bold text-foreground mb-4">{topic.title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {topic.items.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-background rounded-xl">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 section-light">
      <div className="container max-w-4xl">
        <SectionTitle label="Helpful Guides" title="Explore Our Decision Guides" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Country Selection Guide", desc: "Compare countries by cost, career scope, and lifestyle.", href: "/career/country-selection-guide" },
            { title: "Budget Planning Guide", desc: "Plan your finances for studying abroad.", href: "/career/budget-planning-guide" },
            { title: "Course Selection Guide", desc: "MBBS vs MS vs MBA — which fits you?", href: "/career/course-selection-guide" },
            { title: "Career After MBBS", desc: "Explore post-MBBS career paths and exams.", href: "/career/after-mbbs" },
            { title: "Career After MS", desc: "Jobs, salaries, and growth after MS abroad.", href: "/career/after-ms" },
          ].map((guide, i) => (
            <AnimateIn key={guide.href} animation="fade-up" delay={i * 70}>
              <Link to={guide.href} className="block p-5 rounded-xl bg-background border card-hover group">
                <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{guide.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{guide.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  </StandardPageTemplate>
);

export default CareerGuidance;
