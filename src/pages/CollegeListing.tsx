import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight, MapPin, DollarSign, Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

const colleges = [
  { name: "Kazan Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Kazan", ranking: "Top 10 in Russia", slug: "kazan-federal-university" },
  { name: "Bashkir State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Ufa", ranking: "Top 15 in Russia", slug: "bashkir-state-medical" },
  { name: "Crimea Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Simferopol", ranking: "Top 20 in Russia", slug: "crimea-federal-university" },
  { name: "Orenburg State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Orenburg", ranking: "Recognized by NMC", slug: "orenburg-state-medical" },
  { name: "Tbilisi State Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "#1 in Georgia", slug: "tbilisi-state-medical" },
  { name: "European University (Georgia)", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "Top Private in Georgia", slug: "european-university-georgia" },
  { name: "Batumi Shota Rustaveli State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Batumi", ranking: "Recognized by WHO", slug: "batumi-state-university" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Almaty", ranking: "Top in Kazakhstan", slug: "kazakh-national-medical" },
  { name: "Astana Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Astana", ranking: "#2 in Kazakhstan", slug: "astana-medical-university" },
  { name: "Karaganda Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Karaganda", ranking: "NMC Recognized", slug: "karaganda-medical" },
  { name: "University of Belgrade Faculty of Medicine", country: "Serbia", flag: "🇷🇸", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Belgrade", ranking: "Top in Serbia", slug: "belgrade-medicine" },
  { name: "University of Novi Sad Medical Faculty", country: "Serbia", flag: "🇷🇸", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Novi Sad", ranking: "#2 in Serbia", slug: "novi-sad-medicine" },
  { name: "Tashkent Medical Academy", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Tashkent", ranking: "Top in Uzbekistan", slug: "tashkent-medical" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Samarkand", ranking: "#2 in Uzbekistan", slug: "samarkand-medical" },
  { name: "Bukhara State Medical Institute", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Bukhara", ranking: "NMC Recognized", slug: "bukhara-medical" },
  { name: "Avicenna Tajik State Medical University", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Dushanbe", ranking: "Top in Tajikistan", slug: "avicenna-tajik-medical" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Bishkek", ranking: "Top in Kyrgyzstan", slug: "kyrgyz-medical" },
  { name: "International School of Medicine (ISM)", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Bishkek", ranking: "NMC Recognized", slug: "ism-kyrgyzstan" },
  { name: "Massachusetts Institute of Technology", country: "USA", flag: "🇺🇸", program: "MS", fees: "$55K/year", feesNum: 4500000, city: "Boston", ranking: "#1 Globally", slug: "mit" },
  { name: "Stanford University", country: "USA", flag: "🇺🇸", program: "MS", fees: "$57K/year", feesNum: 4700000, city: "Stanford", ranking: "#2 Globally", slug: "stanford" },
  { name: "Carnegie Mellon University", country: "USA", flag: "🇺🇸", program: "MS", fees: "$50K/year", feesNum: 4100000, city: "Pittsburgh", ranking: "Top 5 for CS", slug: "carnegie-mellon" },
  { name: "University of Oxford", country: "UK", flag: "🇬🇧", program: "MS", fees: "£30K/year", feesNum: 3200000, city: "Oxford", ranking: "#1 in UK", slug: "oxford" },
  { name: "Imperial College London", country: "UK", flag: "🇬🇧", program: "MS", fees: "£35K/year", feesNum: 3600000, city: "London", ranking: "Top 10 Globally", slug: "imperial-college" },
  { name: "University of Edinburgh", country: "UK", flag: "🇬🇧", program: "MS", fees: "£25K/year", feesNum: 2700000, city: "Edinburgh", ranking: "Top 20 Globally", slug: "edinburgh" },
  { name: "TU Munich", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Munich", ranking: "#1 in Germany", slug: "tu-munich" },
  { name: "RWTH Aachen University", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Aachen", ranking: "#2 Engineering in Germany", slug: "rwth-aachen" },
  { name: "University of Melbourne", country: "Australia", flag: "🇦🇺", program: "MS", fees: "AUD 42K/year", feesNum: 2300000, city: "Melbourne", ranking: "#1 in Australia", slug: "melbourne" },
  { name: "University of Sydney", country: "Australia", flag: "🇦🇺", program: "MS", fees: "AUD 45K/year", feesNum: 2500000, city: "Sydney", ranking: "#2 in Australia", slug: "sydney" },
  { name: "Politecnico di Milano", country: "Italy", flag: "🇮🇹", program: "MS", fees: "€3.8K/year", feesNum: 340000, city: "Milan", ranking: "#1 Engineering in Italy", slug: "polimi" },
  { name: "University of Bologna", country: "Italy", flag: "🇮🇹", program: "MS", fees: "€2.5K/year", feesNum: 220000, city: "Bologna", ranking: "Oldest University in the World", slug: "bologna" },
  { name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€18K/year", feesNum: 1700000, city: "Dublin", ranking: "#1 in Ireland", slug: "trinity-dublin" },
  { name: "University College Dublin", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€20K/year", feesNum: 1900000, city: "Dublin", ranking: "#2 in Ireland", slug: "ucd" },
];

const allCountries = [...new Set(colleges.map(c => c.country))].sort();
const allPrograms = [...new Set(colleges.map(c => c.program))].sort();

const budgetRanges = [
  { label: "Under ₹3L/yr", max: 300000 },
  { label: "₹3L – ₹5L/yr", min: 300000, max: 500000 },
  { label: "Above ₹5L/yr", min: 500000 },
];

const CollegeListing = () => {
  const [search, setSearch] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilter = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
  };

  const activeFilterCount = selectedCountries.length + selectedPrograms.length + (selectedBudget !== null ? 1 : 0);

  const filtered = useMemo(() => {
    return colleges.filter(c => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.country.toLowerCase().includes(search.toLowerCase()) && !c.city.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCountries.length && !selectedCountries.includes(c.country)) return false;
      if (selectedPrograms.length && !selectedPrograms.includes(c.program)) return false;
      if (selectedBudget !== null) {
        const range = budgetRanges[selectedBudget];
        if (range.min && c.feesNum < range.min) return false;
        if (range.max && c.feesNum >= range.max) return false;
      }
      return true;
    });
  }, [search, selectedCountries, selectedPrograms, selectedBudget]);

  const clearAll = () => { setSelectedCountries([]); setSelectedPrograms([]); setSelectedBudget(null); setSearch(""); };

  return (
    <StandardPageTemplate
      metaTitle="All Partner Colleges & Universities — KMR Global Education"
      metaDescription="Browse all partner universities for MBBS and MS abroad. Compare fees, rankings, and locations. Free counselling by KMR."
      heroLabel="Our Colleges"
      heroTitle="Explore Partner Universities Worldwide"
      heroSubtitle="Browse our network of 30+ NMC/WHO recognized universities across 13+ countries."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Search & Filter Bar */}
            <AnimateIn animation="fade-up">
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, country, or city..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="pl-10 h-12 rounded-xl bg-background border text-sm"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className={`flex items-center gap-2 px-5 h-12 rounded-xl border text-sm font-medium transition-colors ${filtersOpen ? "bg-accent text-accent-foreground border-accent" : "bg-background hover:bg-secondary"}`}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              </div>
            </AnimateIn>

            {/* Filter Panel */}
            {filtersOpen && (
              <AnimateIn animation="fade-up">
                <div className="p-6 rounded-2xl bg-secondary mb-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Filter Colleges</h3>
                    {activeFilterCount > 0 && (
                      <button onClick={clearAll} className="text-xs font-medium text-accent hover:underline">Clear all</button>
                    )}
                  </div>

                  {/* Program Filter */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Program</p>
                    <div className="flex flex-wrap gap-2">
                      {allPrograms.map(p => (
                        <button
                          key={p}
                          onClick={() => toggleFilter(selectedPrograms, p, setSelectedPrograms)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 ${
                            selectedPrograms.includes(p)
                              ? "bg-accent text-accent-foreground shadow-md"
                              : "bg-background border hover:border-accent/50 text-foreground"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Country Filter */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Country</p>
                    <div className="flex flex-wrap gap-2">
                      {allCountries.map(c => (
                        <button
                          key={c}
                          onClick={() => toggleFilter(selectedCountries, c, setSelectedCountries)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 ${
                            selectedCountries.includes(c)
                              ? "bg-accent text-accent-foreground shadow-md"
                              : "bg-background border hover:border-accent/50 text-foreground"
                          }`}
                        >
                          {colleges.find(col => col.country === c)?.flag} {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Filter */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Budget</p>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b, i) => (
                        <button
                          key={b.label}
                          onClick={() => setSelectedBudget(selectedBudget === i ? null : i)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 ${
                            selectedBudget === i
                              ? "bg-accent text-accent-foreground shadow-md"
                              : "bg-background border hover:border-accent/50 text-foreground"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Active Filters Pills */}
            {activeFilterCount > 0 && !filtersOpen && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPrograms.map(p => (
                  <span key={p} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {p}
                    <button onClick={() => toggleFilter(selectedPrograms, p, setSelectedPrograms)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
                {selectedCountries.map(c => (
                  <span key={c} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {c}
                    <button onClick={() => toggleFilter(selectedCountries, c, setSelectedCountries)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
                {selectedBudget !== null && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    {budgetRanges[selectedBudget].label}
                    <button onClick={() => setSelectedBudget(null)}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-accent underline ml-1">Clear all</button>
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {colleges.length} universities
            </p>

            {/* College Grid */}
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((c, i) => (
                  <AnimateIn key={c.slug} animation="fade-up" delay={Math.min(i * 50, 400)}>
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
            ) : (
              <div className="text-center py-20">
                <p className="text-lg font-semibold text-foreground mb-2">No colleges match your filters</p>
                <p className="text-sm text-muted-foreground mb-4">Try adjusting your search or filters to find what you're looking for.</p>
                <button onClick={clearAll} className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all active:scale-95">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </StandardPageTemplate>
  );
};

export default CollegeListing;
