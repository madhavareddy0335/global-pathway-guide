import { Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight, FileText, Clock, Users, Calendar } from "lucide-react";
import { examsList } from "@/data/exams";

const ExamListing = () => {
  return (
    <StandardPageTemplate
      metaTitle="Entrance Exams for Study Abroad — NEET, GRE, IELTS, TOEFL, GMAT | MPR"
      metaDescription="Complete guide to all entrance exams for studying abroad — NEET UG, NEET PG, GRE, IELTS, TOEFL, GMAT. Eligibility, dates, preparation tips."
      heroLabel="Exam Guides"
      heroTitle="All Entrance Exams"
      heroSubtitle="Comprehensive guides for every exam you need — from registration to results."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-6">
            {examsList.map((exam, i) => (
              <AnimateIn key={exam.slug} animation="fade-up" delay={i * 60}>
                <Link
                  to={`/exams/${exam.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl bg-background border border-border/50 card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                          {exam.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-foreground group-hover:text-accent transition-colors mb-2">
                        {exam.name}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                        {exam.heroSubtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      {exam.examDetails.find(d => d.label === "Duration") && (
                        <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary">
                          <Clock className="w-3.5 h-3.5" />
                          {exam.examDetails.find(d => d.label === "Duration")?.value}
                        </span>
                      )}
                      {exam.examDetails.find(d => d.label === "Mode") && (
                        <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary">
                          <FileText className="w-3.5 h-3.5" />
                          {exam.examDetails.find(d => d.label === "Mode")?.value}
                        </span>
                      )}
                      {exam.examDates.length > 0 && (
                        <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary">
                          <Calendar className="w-3.5 h-3.5" />
                          {exam.examDates[exam.examDates.length - 1]?.date}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-accent font-semibold text-sm shrink-0">
                      View Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </StandardPageTemplate>
  );
};

export default ExamListing;
