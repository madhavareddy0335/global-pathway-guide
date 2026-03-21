import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const blogs = [
  {
    title: "MBBS in Russia vs Georgia: Which is Better for Indian Students?",
    excerpt: "A detailed comparison of fees, recognition, lifestyle, and career scope for MBBS aspirants.",
    date: "Mar 15, 2026",
    category: "MBBS Abroad",
    href: "/blog/mbbs-russia-vs-georgia",
  },
  {
    title: "Top 5 Countries for MS Abroad with Maximum ROI",
    excerpt: "Explore countries where your MS investment gives you the best career returns and post-study work options.",
    date: "Mar 10, 2026",
    category: "MS Abroad",
    href: "/blog/top-countries-ms-abroad",
  },
  {
    title: "Complete Guide to NEET UG 2026: Eligibility, Pattern & Prep Tips",
    excerpt: "Everything you need to know about NEET UG — from exam pattern to preparation strategies.",
    date: "Mar 5, 2026",
    category: "Exams",
    href: "/blog/neet-ug-guide-2026",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-20 md:py-28 section-light">
      <div className="container">
        <SectionTitle
          label="Latest Insights"
          title="Guides & Articles for Students"
          description="Stay informed with expert guides on admissions, country comparisons, exam tips, and career planning."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogs.map((b, i) => (
            <AnimateIn key={b.title} animation="fade-up" delay={i * 100}>
              <Link to={b.href} className="block rounded-2xl bg-background border card-hover h-full group overflow-hidden">
                <div className="h-40 bg-primary/5 flex items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{b.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{b.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {b.date}
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn animation="fade-up" delay={350} className="text-center mt-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
};
