import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CareerPageProps {
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: { title: string; items: string[] }[];
}

const CareerLayout = ({ metaTitle, metaDescription, heroLabel, heroTitle, heroSubtitle, sections }: CareerPageProps) => (
  <StandardPageTemplate metaTitle={metaTitle} metaDescription={metaDescription} heroLabel={heroLabel} heroTitle={heroTitle} heroSubtitle={heroSubtitle}>
    {sections.map((section, si) => (
      <section key={section.title} className={`py-16 md:py-24 ${si % 2 === 0 ? "" : "section-light"}`}>
        <div className="container max-w-4xl">
          <SectionTitle title={section.title} />
          <div className="grid sm:grid-cols-2 gap-3">
            {section.items.map((item, i) => (
              <AnimateIn key={i} animation="fade-up" delay={i * 60}>
                <div className="flex gap-3 items-start p-4 bg-background rounded-xl border">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    ))}
  </StandardPageTemplate>
);

export const CareerAfterMBBS = () => (
  <CareerLayout
    metaTitle="Career After MBBS Abroad — Options, Exams & Paths | KMR"
    metaDescription="Explore career options after MBBS abroad. FMGE, NEXT exam, PG options, and international practice opportunities."
    heroLabel="Career Guidance" heroTitle="Career Path After MBBS Abroad" heroSubtitle="Understand your career options after completing MBBS from a foreign university."
    sections={[
      { title: "Immediate Career Options", items: ["Clear FMGE/NEXT to practice in India", "Apply for MD/MS in Indian colleges", "Practice in the country of graduation", "Join hospital residency programs", "Work in public health and community medicine", "Join WHO, UNICEF, or NGO healthcare programs"] },
      { title: "Long-Term Career Growth", items: ["Specialize in surgery, cardiology, neurology, etc.", "Open private practice or clinic", "Join corporate hospital chains", "Pursue research in medical sciences", "Teach at medical colleges", "Pursue international fellowships"] },
      { title: "Key Exams to Prepare For", items: ["FMGE (Foreign Medical Graduate Examination)", "NEXT (National Exit Test — replacing FMGE)", "USMLE (for USA practice)", "PLAB (for UK practice)", "AMC (for Australian practice)", "State-level licensing exams where applicable"] },
    ]}
  />
);

export const CareerAfterMS = () => (
  <CareerLayout
    metaTitle="Career After MS Abroad — Jobs, Salary & Growth | KMR"
    metaDescription="Explore career paths after MS abroad. Job opportunities, salary expectations, and growth options in USA, UK, Germany."
    heroLabel="Career Guidance" heroTitle="Career Path After MS Abroad" heroSubtitle="Discover the career opportunities awaiting you after completing your Master's degree internationally."
    sections={[
      { title: "Career Opportunities", items: ["Software engineering at FAANG companies", "Data science and AI specialist roles", "Research positions in top labs", "Product management in tech", "Management consulting", "PhD with funded positions"] },
      { title: "Work Visa Options", items: ["OPT (USA) — 1 year standard, 3 years for STEM", "PSW Visa (UK) — 2 years post-study work", "Post-Study Work Visa (Australia) — 2-4 years", "Job Seeker Visa (Germany) — 18 months", "Stay Back Option (Ireland) — 2 years", "Critical Skills Permit (Ireland)"] },
      { title: "Salary Expectations", items: ["USA: $80,000–$150,000 starting salary", "UK: £30,000–£55,000 starting salary", "Germany: €45,000–€70,000 starting salary", "Australia: AUD 65,000–$100,000 starting", "Ireland: €35,000–€55,000 starting", "India return: ₹15–40 LPA depending on experience"] },
    ]}
  />
);

export const CountrySelectionGuide = () => (
  <CareerLayout
    metaTitle="How to Choose the Right Country for Studies Abroad | KMR"
    metaDescription="A complete guide to selecting the best country for MBBS, MS, MBA abroad. Compare costs, career scope, and lifestyle."
    heroLabel="Decision Guide" heroTitle="How to Choose the Right Country" heroSubtitle="Compare destinations based on what matters most — fees, career scope, lifestyle, and recognition."
    sections={[
      { title: "Key Factors to Consider", items: ["Total cost of education including living expenses", "Recognition of degree (NMC/WHO for medical)", "Post-study work opportunities and visa options", "Safety and quality of life for international students", "Language of instruction and local language needs", "Career outcomes and return on investment", "Indian student community and food availability", "Climate and cultural compatibility"] },
      { title: "Best Countries by Budget", items: ["Lowest budget: Uzbekistan, Tajikistan, Kyrgyzstan (₹12-24L)", "Mid budget: Kazakhstan, Georgia, Serbia (₹15-38L)", "Mid-high: Russia, Italy (₹20-35L)", "Higher budget: UK, Ireland, Australia", "Premium: USA (highest ROI long-term)", "Free tuition: Germany (public universities)"] },
    ]}
  />
);

export const BudgetPlanningGuide = () => (
  <CareerLayout
    metaTitle="Study Abroad Budget Planning Guide | KMR Global Education"
    metaDescription="Plan your study abroad budget. Understand tuition, living costs, visa fees, and financial planning tips."
    heroLabel="Financial Guide" heroTitle="Budget Planning for Study Abroad" heroSubtitle="A comprehensive guide to understanding and planning the finances for your overseas education journey."
    sections={[
      { title: "Cost Components", items: ["Tuition fees (varies by country and program)", "Living expenses (accommodation, food, transport)", "Visa and travel costs (flight, visa fees, insurance)", "Forex and bank charges for fee transfers", "Books, supplies, and study materials", "Health insurance (often mandatory)", "Pre-departure expenses (medical tests, notarization)", "Emergency fund (recommended 10-15% extra)"] },
      { title: "Financial Support Options", items: ["Merit-based university scholarships", "Government scholarships (ICCR, etc.)", "Education loans from banks (SBI, HDFC, etc.)", "NBFCs and private lender options", "Part-time work during studies (where allowed)", "Teaching/research assistantships (for MS/PhD)"] },
    ]}
  />
);

export const CourseSelectionGuide = () => (
  <CareerLayout
    metaTitle="Which Course to Study Abroad? MBBS vs MS vs MBA | KMR"
    metaDescription="Compare MBBS, MS, MBA, and Dental abroad. Find which course aligns with your career goals, budget, and eligibility."
    heroLabel="Course Guide" heroTitle="Which Course Is Right for You?" heroSubtitle="Compare programs to find the perfect match for your academic background, career goals, and budget."
    sections={[
      { title: "MBBS Abroad — Best For", items: ["Students who qualified NEET UG", "Aspiring doctors who want affordable medical education", "Students willing to study 5-6 years abroad", "Those comfortable with clinical training in another country"] },
      { title: "MS Abroad — Best For", items: ["Engineering/science graduates seeking specialization", "Professionals wanting career advancement", "Students aiming for tech industry roles abroad", "Those seeking research or PhD pathways"] },
      { title: "MBA Abroad — Best For", items: ["Working professionals with 2-5 years experience", "Career changers moving into management", "Entrepreneurs seeking global business acumen", "Those targeting consulting or finance roles"] },
      { title: "Dental Abroad — Best For", items: ["NEET qualified students interested in dentistry", "Students wanting affordable BDS education", "Aspiring dentists seeking international clinical exposure", "Those planning private dental practice"] },
    ]}
  />
);
