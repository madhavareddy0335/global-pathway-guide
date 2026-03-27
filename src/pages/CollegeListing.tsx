import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { ArrowRight, MapPin, DollarSign, Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { colleges, getCollegeImage } from "@/data/colleges";

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
      metaTitle="All Partner Colleges & Universities — MPR Global Education"
      metaDescription="Browse all partner universities for MBBS and MS abroad. Compare fees, rankings, and locations. Free counselling by MPR."
      heroLabel="Our Colleges"
      heroTitle="Explore Partner Universities Worldwide"
      heroSubtitle={`Browse our network of ${colleges.length}+ NMC/WHO recognized universities across ${allCountries.length}+ countries.`}
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
