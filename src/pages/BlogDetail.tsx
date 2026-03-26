import { useParams, Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowLeft, Clock, User } from "lucide-react";

const articles: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "mbbs-russia-vs-georgia": {
    title: "MBBS in Russia vs Georgia: Which is Better for Indian Students?",
    category: "MBBS Abroad", date: "Mar 15, 2026", readTime: "8 min read",
    content: [
      "Choosing between Russia and Georgia for MBBS is one of the most common dilemmas faced by Indian medical aspirants. Both countries offer NMC and WHO recognized medical degrees, English-medium instruction, and affordable tuition — but they differ in key areas.",
      "Russia has a longer legacy of medical education, with universities dating back centuries. The country offers over 50 government-approved medical universities with a structured 6-year MD program. Russian medical degrees are well-recognized globally.",
      "Georgia, on the other hand, has emerged as a newer but rapidly growing destination. Located at the crossroads of Europe and Asia, Georgia follows European education standards (Bologna Process) and offers visa-free entry for Indian students.",
      "In terms of fees, Georgia tends to be slightly more affordable overall (₹18-30 Lakh total) compared to Russia (₹20-35 Lakh total). Living costs are also lower in Georgia.",
      "For student life, Georgia offers a more compact, walkable environment with cities like Tbilisi being very international-student-friendly. Russia offers larger cities with more cultural diversity but may require more adaptation.",
      "Both countries have Indian food availability, with mess facilities at most partner universities. Safety is comparable, with both being generally safe for international students.",
      "Our recommendation: If you prioritize European standards and lower costs, choose Georgia. If you prefer a university with a longer heritage and more diverse specialization options, choose Russia. Both are excellent choices for Indian MBBS students.",
    ],
  },
  "top-countries-ms-abroad": {
    title: "Top 5 Countries for MS Abroad with Maximum ROI",
    category: "MS Abroad", date: "Mar 10, 2026", readTime: "6 min read",
    content: [
      "Investing in an MS abroad is one of the most impactful career decisions you can make. But with tuition costs ranging from free to $60K+ per year, choosing the right country matters enormously for your return on investment.",
      "1. USA — Highest Absolute ROI: Despite being the most expensive option ($50K-$120K total), the USA offers the highest starting salaries ($80K-$150K) and a 3-year OPT for STEM graduates. Most students recover their investment within 2-3 years.",
      "2. Germany — Best Cost-to-Value Ratio: With free tuition at public universities, your only costs are living expenses (~€11K/year for blocked account). Starting salaries of €45K-€70K make this an outstanding ROI country.",
      "3. Australia — Strong Salary + PR Pathway: Higher tuition (AUD 20K-45K/year) but compensated by post-study work visas (2-4 years) and a clear pathway to permanent residency through skilled migration.",
      "4. Ireland — Tech Hub Access: As the European HQ for Google, Meta, Apple, and Microsoft, Ireland offers direct access to tech careers. The 2-year stay back visa and competitive salaries (€35K-€55K) make it attractive.",
      "5. UK — Speed and Prestige: 1-year programs mean lower total cost and faster career entry. The 2-year Graduate Route visa has significantly improved UK's ROI compared to pre-2021.",
      "The best country for you depends on your field, budget, and long-term goals. Contact MPR Global Education for a personalized ROI analysis based on your profile.",
    ],
  },
};

const defaultArticle = {
  title: "Study Abroad Guide",
  category: "General", date: "2026", readTime: "5 min read",
  content: [
    "This article is being prepared by our expert content team. Stay tuned for in-depth insights on studying abroad.",
    "In the meantime, feel free to explore our other articles or contact our counsellors for personalized guidance.",
    "MPR Global Education publishes regular content on admissions, visa guides, fee comparisons, career planning, and student experiences abroad.",
  ],
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug && articles[slug] ? articles[slug] : defaultArticle;

  return (
    <StandardPageTemplate
      metaTitle={`${article.title} | MPR Global Education Blog`}
      metaDescription={article.content[0]?.substring(0, 155) + "..."}
      heroLabel={article.category}
      heroTitle={article.title}
      heroSubtitle=""
    >
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <AnimateIn animation="fade-up">
            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />MPR Team</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </AnimateIn>

          <div className="space-y-5">
            {article.content.map((paragraph, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                <p className="text-foreground leading-relaxed">{paragraph}</p>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn animation="fade-up" delay={400}>
            <div className="mt-12 pt-8 border-t">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                <ArrowLeft className="w-4 h-4" /> Back to All Articles
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </StandardPageTemplate>
  );
};

export default BlogDetail;
