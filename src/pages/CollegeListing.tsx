import { Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight, GraduationCap, MapPin, DollarSign } from "lucide-react";

const colleges = [
  { name: "Kazan Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", city: "Kazan", ranking: "Top 10 in Russia", slug: "kazan-federal-university" },
  { name: "Tbilisi State Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", city: "Tbilisi", ranking: "#1 in Georgia", slug: "tbilisi-state-medical" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹3L/year", city: "Almaty", ranking: "Top in Kazakhstan", slug: "kazakh-national-medical" },
  { name: "University of Belgrade Faculty of Medicine", country: "Serbia", flag: "🇷🇸", program: "MBBS", fees: "₹4.5L/year", city: "Belgrade", ranking: "Top in Serbia", slug: "belgrade-medicine" },
  { name: "Tashkent Medical Academy", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2.2L/year", city: "Tashkent", ranking: "Top in Uzbekistan", slug: "tashkent-medical" },
  { name: "Massachusetts Institute of Technology", country: "USA", flag: "🇺🇸", program: "MS", fees: "$55K/year", city: "Boston", ranking: "#1 Globally", slug: "mit" },
  { name: "TU Munich", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", city: "Munich", ranking: "#1 in Germany", slug: "tu-munich" },
  { name: "University of Oxford", country: "UK", flag: "🇬🇧", program: "MS", fees: "£30K/year", city: "Oxford", ranking: "#1 in UK", slug: "oxford" },
  { name: "University of Melbourne", country: "Australia", flag: "🇦🇺", program: "MS", fees: "AUD 42K/year", city: "Melbourne", ranking: "#1 in Australia", slug: "melbourne" },
  { name: "Politecnico di Milano", country: "Italy", flag: "🇮🇹", program: "MS", fees: "€3.8K/year", city: "Milan", ranking: "#1 Engineering in Italy", slug: "polimi" },
  { name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€18K/year", city: "Dublin", ranking: "#1 in Ireland", slug: "trinity-dublin" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", city: "Bishkek", ranking: "Top in Kyrgyzstan", slug: "kyrgyz-medical" },
];

const CollegeListing = () => (
  <StandardPageTemplate
    metaTitle="All Partner Colleges & Universities — KMR Global Education"
    metaDescription="Browse all partner universities for MBBS, MS, MBA and Dental abroad. Compare fees, rankings, and locations. Free counselling by KMR."
    heroLabel="Our Colleges"
    heroTitle="Explore Partner Universities Worldwide"
    heroSubtitle="Browse our network of 150+ NMC/WHO recognized universities across 13+ countries."
  >
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {colleges.map((c, i) => (
            <AnimateIn key={c.slug} animation="fade-up" delay={i * 60}>
              <Link to={`/colleges/${c.slug}`} className="block p-6 rounded-2xl bg-background border card-hover h-full group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-xs font-medium text-accent">{c.program}</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">{c.name}</h3>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.city}, {c.country}</p>
                  <p className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{c.fees}</p>
                  {c.ranking && <p className="text-accent font-medium mt-1">{c.ranking}</p>}
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  </StandardPageTemplate>
);

export default CollegeListing;
