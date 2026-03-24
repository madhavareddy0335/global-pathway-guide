import { Link } from "react-router-dom";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight, FileText, Clock, Users } from "lucide-react";

const exams = [
  {
    name: "NEET UG",
    category: "Medical",
    desc: "Mandatory for MBBS admission in India & abroad",
    students: "20L+ applicants",
    duration: "3h 20m",
    href: "/exams/neet-ug",
  },
  {
    name: "NEET PG",
    category: "Medical PG",
    desc: "For MD/MS/Diploma admissions in India",
    students: "2L+ applicants",
    duration: "3h 30m",
    href: "/exams/neet-pg",
  },
  {
    name: "GRE",
    category: "MS Abroad",
    desc: "Required for MS programs in USA & other countries",
    students: "5L+ globally",
    duration: "3h 45m",
    href: "/exams/gre",
  },
  {
    name: "IELTS",
    category: "Language",
    desc: "English proficiency test for study abroad",
    students: "35L+ globally",
    duration: "2h 45m",
    href: "/exams/ielts",
  },
  {
    name: "TOEFL",
    category: "Language",
    desc: "Widely accepted English proficiency exam",
    students: "27L+ globally",
    duration: "3h+",
    href: "/exams/toefl",
  },
  {
    name: "GMAT",
    category: "Business",
    desc: "Required for top MBA programs worldwide",
    students: "2L+ globally",
    duration: "3h 30m",
    href: "/exams/gmat",
  },
];

export const TopExamsSection = () => {
  return (
    <section className="py-20 md:py-28 section-light">
      <div className="container">
        <SectionTitle
          label="Entrance Exams"
          title="Top Exams for Studying Abroad"
          description="Know which exams you need and start preparing with our detailed guides."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {exams.map((exam, i) => (
            <AnimateIn key={exam.name} animation="fade-up" delay={i * 60}>
              <Link
                to={exam.href}
                className="group block p-6 rounded-2xl bg-background border border-border/50 card-hover h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                    {exam.category}
                  </span>
                  <FileText className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground group-hover:text-accent transition-colors mb-2">
                  {exam.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exam.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {exam.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {exam.duration}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-up" delay={400}>
          <div className="text-center mt-10">
            <Link
              to="/exams"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all text-sm"
            >
              View All Exams <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
