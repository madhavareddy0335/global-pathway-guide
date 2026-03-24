import { useParams, Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { examsData } from "@/data/exams";
import { CheckCircle, BookOpen, FileText, Calendar, ArrowRight, Download, GraduationCap, ClipboardList, Award, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExamDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const exam = slug ? examsData[slug] : null;

  if (!exam) {
    return (
      <StandardPageTemplate metaTitle="Exam Not Found" metaDescription="" heroLabel="Exams" heroTitle="Exam Not Found" heroSubtitle="The exam you are looking for does not exist.">
        <section className="py-20">
          <div className="container text-center">
            <Link to="/exams" className="text-accent font-semibold hover:underline">← Back to all exams</Link>
          </div>
        </section>
      </StandardPageTemplate>
    );
  }

  return (
    <StandardPageTemplate
      metaTitle={exam.metaTitle}
      metaDescription={exam.metaDescription}
      heroLabel={`${exam.category} Exam`}
      heroTitle={exam.name}
      heroSubtitle={exam.heroSubtitle}
    >
      {/* Quick Nav Tabs */}
      <section className="py-4 border-b sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {["Overview", "Application", "Eligibility", "Exam Details", "Dates", "Syllabus", "Results", "Papers", "Colleges", "FAQ"].map((tab) => (
              <a
                key={tab}
                href={`#${tab.toLowerCase().replace(/\s/g, "-")}`}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors whitespace-nowrap"
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Overview" title={`About ${exam.name}`} />
          <AnimateIn animation="fade-up">
            <p className="text-muted-foreground leading-relaxed text-center text-lg">{exam.overview}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Application Process */}
      <section id="application" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="How to Apply" title="Application Process" />
          <div className="space-y-3">
            {exam.applicationProcess.map((step, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 50}>
                <div className="flex gap-4 items-start p-5 bg-background rounded-xl border">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{step}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Preparation */}
      <section id="eligibility" className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionTitle label="Eligibility" title="Who Can Apply?" />
              <div className="space-y-3">
                {exam.eligibility.map((e, i) => (
                  <AnimateIn key={i} animation="fade-up" delay={i * 50}>
                    <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{e}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle label="Preparation" title="Tips & Strategy" />
              <div className="space-y-3">
                {exam.preparation.map((t, i) => (
                  <AnimateIn key={i} animation="fade-up" delay={i * 50}>
                    <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                      <BookOpen className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{t}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details */}
      <section id="exam-details" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="Exam Details" title="Structure & Format" />
          <AnimateIn animation="fade-up">
            <div className="grid sm:grid-cols-2 gap-4">
              {exam.examDetails.map((d, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-background border">
                  <ClipboardList className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">{d.label}</p>
                    <p className="text-sm font-bold text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Exam Dates */}
      <section id="dates" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Important Dates" title={`${exam.name} Exam Dates`} />
          <AnimateIn animation="fade-up">
            <div className="space-y-3">
              {exam.examDates.map((d, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-secondary">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-foreground">{d.event}</span>
                  </div>
                  <span className="text-sm font-bold text-accent">{d.date}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="Syllabus" title={`${exam.name} Syllabus`} />
          <AnimateIn animation="fade-up">
            <div className="space-y-4">
              {exam.syllabus.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border">
                  <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" /> {s.subject}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.topics.map((t, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Results" title={`${exam.name} Results`} />
          <AnimateIn animation="fade-up">
            <div className="p-6 rounded-2xl bg-secondary border flex gap-4 items-start">
              <Award className="w-6 h-6 text-accent shrink-0 mt-1" />
              <p className="text-muted-foreground leading-relaxed">{exam.results}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Past Papers */}
      <section id="papers" className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <SectionTitle label="Past Papers" title="Practice with Previous Papers" />
          <AnimateIn animation="fade-up">
            <div className="grid sm:grid-cols-2 gap-3">
              {exam.pastPapers.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-background border">
                  <span className="text-sm font-semibold text-foreground">{p.year}</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <Download className="w-3.5 h-3.5" /> Download
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Accepting Colleges */}
      {exam.acceptingColleges.length > 0 && (
        <section id="colleges" className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <SectionTitle label="Colleges" title="Accepting Universities" />
            <div className="grid sm:grid-cols-2 gap-3">
              {exam.acceptingColleges.map((c, i) => (
                <AnimateIn key={i} animation="fade-up" delay={i * 50}>
                  <Link
                    to={`/colleges/${c.slug}`}
                    className="group flex items-center justify-between p-5 rounded-xl bg-secondary border border-border/50 hover:border-accent/30 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.country}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 section-light">
        <div className="container max-w-3xl">
          <SectionTitle label="FAQ" title="Frequently Asked Questions" />
          <AnimateIn animation="fade-up">
            <Accordion type="single" collapsible className="space-y-3">
              {exam.faqs.map((f, i) => (
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
    </StandardPageTemplate>
  );
};

export default ExamDetail;
