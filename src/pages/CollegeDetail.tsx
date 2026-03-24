import { useParams, Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { collegeDetailsData, defaultCollegeDetail } from "@/data/collegeDetails";
import {
  CheckCircle, MapPin, DollarSign, GraduationCap, ArrowRight, Building2,
  Calendar, Users, Award, BookOpen, Home, Utensils, HelpCircle, Star,
  Download, TrendingUp, Shield, Wifi, Clock,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CollegeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const college = slug && collegeDetailsData[slug] ? collegeDetailsData[slug] : defaultCollegeDetail;

  return (
    <StandardPageTemplate
      metaTitle={`${college.name} — Fees, Admissions, Placements & Reviews | KMR Global Education`}
      metaDescription={`Study at ${college.name} in ${college.city}, ${college.country}. Fees: ${college.fees}. Courses, admissions, placements & scholarship info.`}
      heroLabel={`${college.program} in ${college.country}`}
      heroTitle={college.name}
      heroSubtitle={`${college.flag} ${college.city}, ${college.country} — Est. ${college.established}`}
    >
      {/* Sticky Nav */}
      <section className="py-3 border-b sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {["Overview", "Courses", "Admissions", "Placements", "Infrastructure", "Scholarships", "FAQ"].map((t) => (
              <a key={t} href={`#${t.toLowerCase()}`} className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors whitespace-nowrap">
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, label: "Tuition Fees", value: college.fees },
              { icon: Award, label: "Ranking", value: college.ranking },
              { icon: Shield, label: "Recognition", value: college.recognition },
              { icon: Calendar, label: "Established", value: college.established },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} animation="fade-up" delay={i * 60}>
                <div className="p-4 rounded-xl bg-secondary text-center">
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{stat.label}</p>
                  <p className="text-sm font-bold text-foreground mt-1">{stat.value}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Overview" title={`About ${college.name}`} />
          <AnimateIn animation="fade-up">
            <p className="text-muted-foreground leading-relaxed text-center text-lg mb-10">{college.overview}</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-3">
            {college.highlights.map((h, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 40}>
                <div className="flex gap-3 items-start p-4 rounded-xl bg-secondary">
                  <Star className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Fees */}
      <section id="courses" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="Courses & Fees" title="Programs Offered" />
          <AnimateIn animation="fade-up">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Course</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Duration</th>
                    <th className="text-left py-4 px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {college.courses.map((c, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-accent" />
                          <span className="text-sm font-semibold text-foreground">{c.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{c.duration}</td>
                      <td className="py-4 px-4 text-sm font-bold text-accent">{c.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <SectionTitle label="Admissions" title="How to Get Admitted" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" /> Admission Process
              </h3>
              <div className="space-y-3">
                {college.admissions.process.map((step, i) => (
                  <AnimateIn key={i} animation="fade-up" delay={i * 40}>
                    <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0">{i + 1}</span>
                      <span className="text-sm text-foreground">{step}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" /> Eligibility Criteria
              </h3>
              <div className="space-y-3 mb-8">
                {college.admissions.eligibility.map((e, i) => (
                  <AnimateIn key={i} animation="fade-up" delay={i * 40}>
                    <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{e}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              {college.admissions.importantDates.length > 0 && (
                <>
                  <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" /> Important Dates
                  </h3>
                  <div className="space-y-2">
                    {college.admissions.importantDates.map((d, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                        <span className="text-sm text-foreground">{d.event}</span>
                        <span className="text-sm font-bold text-accent">{d.date}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section id="placements" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="Placements" title="Career & Placement Records" />
          <AnimateIn animation="fade-up">
            <p className="text-muted-foreground leading-relaxed text-center mb-8">{college.placements.overview}</p>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <AnimateIn animation="fade-up">
              <div className="p-6 rounded-2xl bg-background border text-center">
                <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Average Package</p>
                <p className="text-xl font-extrabold text-foreground mt-1">{college.placements.avgPackage}</p>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={80}>
              <div className="p-6 rounded-2xl bg-background border text-center">
                <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Highest Package</p>
                <p className="text-xl font-extrabold text-foreground mt-1">{college.placements.highestPackage}</p>
              </div>
            </AnimateIn>
          </div>

          {college.placements.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {college.placements.stats.map((s, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 50}>
                  <div className="p-4 rounded-xl bg-background border text-center">
                    <p className="text-2xl font-extrabold text-accent">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          )}

          {college.placements.topRecruiters.length > 0 && (
            <AnimateIn animation="fade-up">
              <div className="p-6 rounded-2xl bg-background border">
                <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" /> Top Recruiters
                </h3>
                <div className="flex flex-wrap gap-2">
                  {college.placements.topRecruiters.map((r, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-foreground">{r}</span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          )}
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Infrastructure" title="Campus & Facilities" />
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {college.infrastructure.map((item, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 40}>
                <div className="flex gap-3 items-start p-4 rounded-xl bg-secondary">
                  <Building2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <AnimateIn animation="fade-up">
              <div className="p-6 rounded-2xl bg-secondary border">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Home className="w-4 h-4 text-accent" /> Accommodation
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{college.hostel}</p>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={80}>
              <div className="p-6 rounded-2xl bg-secondary border">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-accent" /> Indian Food
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{college.indianFood}</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      {college.scholarships.length > 0 && (
        <section id="scholarships" className="py-16 md:py-24 section-light">
          <div className="container max-w-4xl">
            <SectionTitle label="Scholarships" title="Financial Aid & Scholarships" />
            <div className="space-y-4">
              {college.scholarships.map((s, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                  <div className="p-6 rounded-2xl bg-background border">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-1">{s.name}</h3>
                        <p className="text-sm text-muted-foreground">{s.eligibility}</p>
                      </div>
                      <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-bold">{s.amount}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {college.faqs.length > 0 && (
        <section id="faq" className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <SectionTitle label="FAQ" title="Frequently Asked Questions" />
            <AnimateIn animation="fade-up">
              <Accordion type="single" collapsible className="space-y-3">
                {college.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 text-[15px]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateIn>
          </div>
        </section>
      )}
    </StandardPageTemplate>
  );
};

export default CollegeDetail;
