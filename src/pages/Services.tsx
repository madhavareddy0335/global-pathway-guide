import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { GraduationCap, FileCheck, Plane, CreditCard, BookOpen, Headphones, Award, Users } from "lucide-react";

const services = [
  { icon: Headphones, title: "Free Career Counselling", desc: "One-on-one sessions with expert counsellors to understand your profile, goals, and budget. We help you choose the right course, country, and university." },
  { icon: GraduationCap, title: "University & College Selection", desc: "Personalized university shortlisting based on your academic profile, budget, career goals, and preferred country. We only recommend NMC/WHO recognized institutions." },
  { icon: FileCheck, title: "Admission & Documentation", desc: "Complete application management — from form filling and document preparation to submission and follow-up. We ensure your application stands out." },
  { icon: Plane, title: "Visa Assistance", desc: "End-to-end visa support including document preparation, embassy appointment scheduling, mock interviews, and application tracking. 98% visa success rate." },
  { icon: CreditCard, title: "Education Loan & Forex", desc: "Guidance on education loans from banks and NBFCs. Forex support for tuition fee transfers and living expense management abroad." },
  { icon: Award, title: "Scholarship Guidance", desc: "We help you identify and apply for merit-based and need-based scholarships at partner universities to reduce your financial burden." },
  { icon: BookOpen, title: "Pre-Departure Orientation", desc: "Comprehensive briefing on what to expect — from packing lists and travel tips to cultural orientation and emergency contacts at your destination." },
  { icon: Users, title: "Post-Arrival Support", desc: "Airport pickup, hostel arrangement, university registration, local SIM, bank account opening, and ongoing academic support throughout your course." },
];

const Services = () => (
  <StandardPageTemplate
    metaTitle="Our Services — KMR Global Education | Complete Study Abroad Support"
    metaDescription="KMR Global Education offers complete overseas education services — counselling, admission, visa, loans, scholarships, and post-arrival support."
    heroLabel="Our Services"
    heroTitle="Complete Study Abroad Support"
    heroSubtitle="From your first enquiry to your first day at university — we handle everything so you can focus on your education."
  >
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle label="What We Do" title="Services We Offer" description="Every service is designed to make your study abroad journey smooth, transparent, and stress-free." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimateIn key={s.title} animation="fade-up" delay={i * 70}>
                <div className="p-6 rounded-2xl bg-background border card-hover h-full group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 section-light">
      <div className="container max-w-3xl text-center">
        <SectionTitle label="Our Promise" title="The KMR Guarantee" />
        <AnimateIn animation="fade-up">
          <div className="space-y-4 text-left">
            {[
              "No hidden charges — ever. All fees are transparent and communicated upfront.",
              "Only NMC/WHO recognized universities. We never recommend unrecognized institutions.",
              "Dedicated counsellor assigned to each student for personalized support.",
              "Real-time application tracking so you always know your admission status.",
              "Post-admission support doesn't stop — we help even after you reach your university.",
            ].map((item, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                <div className="flex gap-3 items-start p-4 bg-background rounded-xl border">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  </StandardPageTemplate>
);

export default Services;
