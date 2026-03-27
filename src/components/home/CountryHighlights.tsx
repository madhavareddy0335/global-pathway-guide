import { Link } from "react-router-dom";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import { countryImages } from "@/assets/countries";

const countries = [
  { name: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹20–35 Lakh", duration: "6 Years", highlight: "Top NMC recognized universities", href: "/mbbs-in-russia", imgKey: "russia" },
  { name: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹18–30 Lakh", duration: "6 Years", highlight: "European standard, low cost", href: "/mbbs-in-georgia", imgKey: "georgia" },
  { name: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹15–25 Lakh", duration: "5 Years", highlight: "Affordable with Indian food", href: "/mbbs-in-kazakhstan", imgKey: "kazakhstan" },
  { name: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹12–20 Lakh", duration: "5 Years", highlight: "Budget-friendly NMC approved", href: "/mbbs-in-uzbekistan", imgKey: "uzbekistan" },
  { name: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹15–22 Lakh", duration: "5 Years", highlight: "Growing medical hub", href: "/mbbs-in-kyrgyzstan", imgKey: "kyrgyzstan" },
  { name: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹10–18 Lakh", duration: "5 Years", highlight: "Most affordable option", href: "/mbbs-in-tajikistan", imgKey: "tajikistan" },
  { name: "USA", flag: "🇺🇸", program: "MS", fees: "$25K–60K/yr", duration: "2 Years", highlight: "World-class research & OPT", href: "/ms-in-usa", imgKey: "usa" },
  { name: "UK", flag: "🇬🇧", program: "MS", fees: "£12K–35K/yr", duration: "1 Year", highlight: "Fast-track Master's degrees", href: "/ms-in-uk", imgKey: "uk" },
  { name: "Germany", flag: "🇩🇪", program: "MS", fees: "Low / Free tuition", duration: "2 Years", highlight: "No tuition at public unis", href: "/ms-in-germany", imgKey: "germany" },
  { name: "Ireland", flag: "🇮🇪", program: "MS", fees: "€10K–25K/yr", duration: "1–2 Years", highlight: "Tech hub of Europe", href: "/ms-in-ireland", imgKey: "ireland" },
  { name: "Australia", flag: "🇦🇺", program: "MS", fees: "AUD 30K–50K/yr", duration: "2 Years", highlight: "Post-study work visa", href: "/ms-in-australia", imgKey: "australia" },
  { name: "Italy", flag: "🇮🇹", program: "MS", fees: "€1K–4K/yr", duration: "2 Years", highlight: "Ultra-low tuition fees", href: "/ms-in-italy", imgKey: "italy" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {countries.map((c, i) => (
            <AnimateIn key={c.name} animation="fade-up" delay={i * 60}>
              <Link
                to={c.href}
                className="block rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/8 transition-all duration-300 group h-full"
              >
                {/* Country Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={countryImages[c.imgKey]}
                    alt={`Study in ${c.name}`}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-lg font-bold text-white">{c.name}</h3>
                  </div>
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-accent/90 text-accent-foreground text-xs font-bold rounded-lg">
                    {c.program}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <p className="text-sm text-primary-foreground/50 mb-3">{c.highlight}</p>
                  <div className="flex items-center justify-between text-xs text-primary-foreground/40">
                    <span>Fees: {c.fees}</span>
                    <span>{c.duration}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};
