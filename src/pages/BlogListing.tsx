import { Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  { slug: "mbbs-russia-vs-georgia", title: "MBBS in Russia vs Georgia: Which is Better for Indian Students?", excerpt: "A detailed comparison of fees, recognition, lifestyle, and career scope for MBBS aspirants.", date: "Mar 15, 2026", category: "MBBS Abroad", readTime: "8 min read" },
  { slug: "top-countries-ms-abroad", title: "Top 5 Countries for MS Abroad with Maximum ROI", excerpt: "Explore countries where your MS investment gives you the best career returns and post-study work options.", date: "Mar 10, 2026", category: "MS Abroad", readTime: "6 min read" },
  { slug: "neet-ug-guide-2026", title: "Complete Guide to NEET UG 2026: Eligibility, Pattern & Prep Tips", excerpt: "Everything you need to know about NEET UG — from exam pattern to preparation strategies.", date: "Mar 5, 2026", category: "Exams", readTime: "10 min read" },
  { slug: "mbbs-abroad-fees-comparison", title: "MBBS Abroad Fees Comparison 2026 — Country by Country", excerpt: "Compare the total cost of MBBS across Russia, Georgia, Kazakhstan, Uzbekistan, and more.", date: "Feb 28, 2026", category: "Fees Guide", readTime: "7 min read" },
  { slug: "study-abroad-scholarships", title: "Top Scholarships for Indian Students Going Abroad in 2026", excerpt: "A curated list of scholarships for MBBS, MS, MBA abroad — from university grants to government funding.", date: "Feb 20, 2026", category: "Scholarships", readTime: "9 min read" },
  { slug: "fmge-next-preparation-guide", title: "FMGE vs NEXT Exam — What Every Foreign MBBS Graduate Should Know", excerpt: "Understand the differences, preparation strategies, and pass rates for FMGE and upcoming NEXT exam.", date: "Feb 15, 2026", category: "Career", readTime: "8 min read" },
  { slug: "student-visa-tips", title: "Student Visa Application Tips: How to Avoid Common Mistakes", excerpt: "Expert tips on preparing your student visa application for Russia, Georgia, USA, UK, and more.", date: "Feb 10, 2026", category: "Visa Guide", readTime: "6 min read" },
  { slug: "life-as-indian-student-abroad", title: "Life as an Indian Student Abroad — What to Really Expect", excerpt: "Real insights on accommodation, food, safety, culture shock, and making friends as an Indian student overseas.", date: "Feb 5, 2026", category: "Student Life", readTime: "7 min read" },
];

const BlogListing = () => (
  <StandardPageTemplate
    metaTitle="Blog — Study Abroad Guides & Articles | MPR Global Education"
    metaDescription="Expert articles on MBBS abroad, MS abroad, visa guides, fee comparisons, career planning, and more by MPR Global Education."
    heroLabel="Our Blog"
    heroTitle="Guides, Articles & Expert Insights"
    heroSubtitle="Stay informed with our latest articles on admissions, country comparisons, exam tips, and career planning."
  >
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, i) => (
            <AnimateIn key={post.slug} animation="fade-up" delay={i * 70}>
              <Link to={`/blog/${post.slug}`} className="block rounded-2xl bg-background border card-hover h-full group overflow-hidden">
                <div className="h-36 bg-primary/5 flex items-center justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-2 mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.date}</span>
                    <span>{post.readTime}</span>
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

export default BlogListing;
