import { Link } from "react-router-dom";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";

const countries = [
  { name: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹20–35 Lakh", duration: "6 Years", highlight: "Top NMC recognized universities", href: "/mbbs-in-russia" },
  { name: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹18–30 Lakh", duration: "6 Years", highlight: "European standard, low cost", href: "/mbbs-in-georgia" },
  { name: "USA", flag: "🇺🇸", program: "MS", fees: "$25K–60K/yr", duration: "2 Years", highlight: "World-class research & OPT", href: "/ms-in-usa" },
  { name: "UK", flag: "🇬🇧", program: "MS", fees: "£12K–35K/yr", duration: "1 Year", highlight: "Fast-track Master's degrees", href: "/ms-in-uk" },
  { name: "Germany", flag: "🇩🇪", program: "MS", fees: "Low / Free tuition", duration: "2 Years", highlight: "No tuition at public unis", href: "/ms-in-germany" },
  { name: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹15–25 Lakh", duration: "5 Years", highlight: "Affordable with Indian food", href: "/mbbs-in-kazakhstan" },
];

export const CountryHighlights = () => {
  return (
    <section className="py-20 md:py-28 section-deep">
      <div className="container">
        <SectionTitle
          light
          label="Top Destinations"
          title="Explore Study Destinations Worldwide"
          description="Compare countries by fees, duration, and career outcomes to find the perfect fit for your goals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {countries.map((c, i) => (
            <AnimateIn key={c.name} animation="fade-up" delay={i * 80}>
              <Link
                to={c.href}
                className="block p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/8 transition-all duration-300 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-primary-foreground">{c.name}</h3>
                    <span className="text-xs font-medium text-accent">{c.program}</span>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/50 mb-4">{c.highlight}</p>
                <div className="flex items-center justify-between text-xs text-primary-foreground/40">
                  <span>Fees: {c.fees}</span>
                  <span>{c.duration}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};
