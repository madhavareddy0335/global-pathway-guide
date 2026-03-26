import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Student-First Approach", desc: "Every decision we make puts the student's career, budget, and safety first." },
  { icon: Eye, title: "Complete Transparency", desc: "No hidden fees, no misleading promises. We show you the real picture." },
  { icon: Heart, title: "End-to-End Care", desc: "From first consultation to post-arrival support — we never leave you alone." },
  { icon: Users, title: "Experienced Counsellors", desc: "Our team has years of experience in overseas education and university partnerships." },
  { icon: Globe, title: "Global Network", desc: "Direct partnerships with 150+ universities across 10+ countries." },
  { icon: Award, title: "Proven Track Record", desc: "5,000+ students successfully guided to their dream universities." },
];

const milestones = [
  { year: "2015", text: "MPR Global Education founded by Dr. Pradeep Reddy with a mission to make quality education accessible to every Indian student." },
  { year: "2017", text: "Expanded partnerships to 50+ universities across Russia, Georgia, and Central Asia." },
  { year: "2019", text: "Crossed 1,000 successful student admissions across MBBS and MS programs." },
  { year: "2021", text: "Launched MS abroad division covering USA, UK, Germany, and Ireland." },
  { year: "2023", text: "Reached 3,500+ successful admissions. Opened second office in Warangal." },
  { year: "2025", text: "5,000+ students guided. Expanded to MBA and Dental abroad programs." },
];

const About = () => (
  <StandardPageTemplate
    metaTitle="About MPR Global Education — Trusted Overseas Education Consultancy"
    metaDescription="Learn about MPR Global Education, India's trusted overseas education consultancy helping 5,000+ students study MBBS, MS, MBA abroad."
    heroLabel="About Us"
    heroTitle="Your Trusted Partner in Overseas Education"
    heroSubtitle="MPR Global Education has been guiding Indian students to world-class universities abroad since 2015. Led by Dr. Pradeep Reddy, we believe every student deserves access to quality education."
  >
    {/* Mission & Vision */}
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimateIn animation="slide-left">
            <div className="p-8 rounded-2xl bg-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower Indian students with honest, expert guidance so they can access affordable, globally recognized education abroad — without the confusion, financial burden, or risk of making uninformed choices.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn animation="slide-right">
            <div className="p-8 rounded-2xl bg-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and student-centric overseas education consultancy — known for transparency, care, and transforming lives through global education opportunities.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24 section-light">
      <div className="container">
        <SectionTitle label="Our Values" title="What Sets MPR Apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimateIn key={v.title} animation="fade-up" delay={i * 80}>
                <div className="p-6 rounded-2xl bg-background border card-hover h-full">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>

    {/* Journey */}
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle label="Our Journey" title="Milestones That Define Us" />
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <AnimateIn key={m.year} animation="fade-up" delay={i * 80}>
              <div className="flex gap-5 items-start">
                <span className="text-lg font-extrabold text-accent tabular-nums shrink-0 w-14">{m.year}</span>
                <p className="text-sm text-foreground leading-relaxed pt-1">{m.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 md:py-24 section-deep">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            { value: "5,000+", label: "Students Guided" },
            { value: "150+", label: "Partner Universities" },
            { value: "10+", label: "Countries" },
            { value: "98%", label: "Visa Success Rate" },
          ].map((s, i) => (
            <AnimateIn key={s.label} animation="scale-in" delay={i * 100}>
              <div className="p-6">
                <div className="text-3xl md:text-4xl font-extrabold text-accent tabular-nums">{s.value}</div>
                <div className="text-sm text-primary-foreground/50 mt-2">{s.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  </StandardPageTemplate>
);

export default About;
