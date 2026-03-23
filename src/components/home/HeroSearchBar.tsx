import { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, X, MapPin, GraduationCap, Building2, ArrowRight, Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

interface SearchItem {
  title: string;
  type: "country" | "program" | "college" | "guide";
  icon: string;
  href: string;
  tags?: string[];
}

const searchData: SearchItem[] = [
  // Countries
  { title: "MBBS in Russia", type: "country", icon: "🇷🇺", href: "/mbbs-in-russia", tags: ["mbbs", "russia", "europe", "affordable"] },
  { title: "MBBS in Georgia", type: "country", icon: "🇬🇪", href: "/mbbs-in-georgia", tags: ["mbbs", "georgia", "europe", "nmc"] },
  { title: "MBBS in Serbia", type: "country", icon: "🇷🇸", href: "/mbbs-in-serbia", tags: ["mbbs", "serbia", "europe"] },
  { title: "MBBS in Kazakhstan", type: "country", icon: "🇰🇿", href: "/mbbs-in-kazakhstan", tags: ["mbbs", "kazakhstan", "asia", "affordable"] },
  { title: "MBBS in Uzbekistan", type: "country", icon: "🇺🇿", href: "/mbbs-in-uzbekistan", tags: ["mbbs", "uzbekistan", "asia", "budget"] },
  { title: "MBBS in Tajikistan", type: "country", icon: "🇹🇯", href: "/mbbs-in-tajikistan", tags: ["mbbs", "tajikistan", "asia", "budget"] },
  { title: "MBBS in Kyrgyzstan", type: "country", icon: "🇰🇬", href: "/mbbs-in-kyrgyzstan", tags: ["mbbs", "kyrgyzstan", "asia"] },
  { title: "MS in USA", type: "country", icon: "🇺🇸", href: "/ms-in-usa", tags: ["ms", "usa", "america", "engineering", "technology"] },
  { title: "MS in UK", type: "country", icon: "🇬🇧", href: "/ms-in-uk", tags: ["ms", "uk", "england", "europe"] },
  { title: "MS in Australia", type: "country", icon: "🇦🇺", href: "/ms-in-australia", tags: ["ms", "australia", "oceania"] },
  { title: "MS in Germany", type: "country", icon: "🇩🇪", href: "/ms-in-germany", tags: ["ms", "germany", "europe", "free tuition"] },
  { title: "MS in Italy", type: "country", icon: "🇮🇹", href: "/ms-in-italy", tags: ["ms", "italy", "europe", "affordable"] },
  { title: "MS in Ireland", type: "country", icon: "🇮🇪", href: "/ms-in-ireland", tags: ["ms", "ireland", "europe"] },
  // Programs
  { title: "MBBS Abroad", type: "program", icon: "🩺", href: "/mbbs-abroad", tags: ["mbbs", "medicine", "doctor"] },
  { title: "MS Abroad", type: "program", icon: "🎓", href: "/ms-abroad", tags: ["ms", "masters", "engineering", "science"] },
  // Colleges
  { title: "All Colleges", type: "college", icon: "🏛️", href: "/colleges", tags: ["colleges", "universities", "list"] },
  { title: "Kazan Federal University", type: "college", icon: "🇷🇺", href: "/colleges/kazan-federal-university", tags: ["russia", "mbbs"] },
  { title: "Tbilisi State Medical University", type: "college", icon: "🇬🇪", href: "/colleges/tbilisi-state-medical", tags: ["georgia", "mbbs"] },
  { title: "MIT", type: "college", icon: "🇺🇸", href: "/colleges/mit", tags: ["usa", "ms", "engineering"] },
  { title: "Stanford University", type: "college", icon: "🇺🇸", href: "/colleges/stanford", tags: ["usa", "ms", "technology"] },
  { title: "TU Munich", type: "college", icon: "🇩🇪", href: "/colleges/tu-munich", tags: ["germany", "ms", "free"] },
  { title: "University of Oxford", type: "college", icon: "🇬🇧", href: "/colleges/oxford", tags: ["uk", "ms", "research"] },
  // Guides
  { title: "Career after MBBS", type: "guide", icon: "📋", href: "/career/after-mbbs", tags: ["career", "mbbs", "doctor"] },
  { title: "Career after MS", type: "guide", icon: "📋", href: "/career/after-ms", tags: ["career", "ms", "jobs"] },
  { title: "Budget Planning Guide", type: "guide", icon: "💰", href: "/career/budget-planning-guide", tags: ["budget", "fees", "cost"] },
  { title: "Country Selection Guide", type: "guide", icon: "🌍", href: "/career/country-selection-guide", tags: ["country", "compare", "choose"] },
  { title: "NEET UG Guide", type: "guide", icon: "📝", href: "/exams/neet-ug", tags: ["neet", "exam", "ug", "mbbs"] },
  { title: "NEET PG Guide", type: "guide", icon: "📝", href: "/exams/neet-pg", tags: ["neet", "exam", "pg"] },
];

const programFilters = ["MBBS", "MS"];
const regionFilters = ["Europe", "Asia", "Americas", "Oceania"];

const regionMap: Record<string, string[]> = {
  Europe: ["Russia", "Georgia", "Serbia", "UK", "Germany", "Italy", "Ireland"],
  Asia: ["Kazakhstan", "Uzbekistan", "Tajikistan", "Kyrgyzstan"],
  Americas: ["USA"],
  Oceania: ["Australia"],
};

const typeLabels: Record<string, { label: string; icon: typeof MapPin }> = {
  country: { label: "Countries", icon: MapPin },
  program: { label: "Programs", icon: GraduationCap },
  college: { label: "Colleges", icon: Building2 },
  guide: { label: "Guides", icon: Sparkles },
};

const popularSearches = [
  { label: "MBBS in Russia", href: "/mbbs-in-russia" },
  { label: "MS in USA", href: "/ms-in-usa" },
  { label: "MBBS in Georgia", href: "/mbbs-in-georgia" },
  { label: "MS in Germany", href: "/ms-in-germany" },
  { label: "All Colleges", href: "/colleges" },
];

export const HeroSearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const hasActiveFilters = selectedProgram || selectedRegion || selectedType;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    let filtered = searchData;

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.includes(q))
      );
    }

    if (selectedProgram) {
      filtered = filtered.filter(
        (item) =>
          item.tags?.some((t) => t.toLowerCase() === selectedProgram.toLowerCase()) ||
          item.title.toLowerCase().includes(selectedProgram.toLowerCase())
      );
    }

    if (selectedRegion) {
      const countries = regionMap[selectedRegion] || [];
      filtered = filtered.filter(
        (item) =>
          item.tags?.some((t) => countries.some((c) => c.toLowerCase() === t.toLowerCase())) ||
          countries.some((c) => item.title.toLowerCase().includes(c.toLowerCase()))
      );
    }

    if (selectedType) {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    return filtered;
  }, [query, selectedProgram, selectedRegion, selectedType]);

  const grouped = useMemo(() => {
    const groups: Record<string, SearchItem[]> = {};
    results.forEach((item) => {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    });
    return groups;
  }, [results]);

  const clearAll = () => {
    setQuery("");
    setSelectedProgram(null);
    setSelectedRegion(null);
    setSelectedType(null);
  };

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    navigate(href);
  };

  const showResults = isOpen && (query.trim() || hasActiveFilters);
  const showSuggestions = isOpen && !query.trim() && !hasActiveFilters;

  return (
    <AnimateIn animation="fade-up" delay={350}>
      <div ref={containerRef} className="relative mt-10 max-w-2xl">
        {/* Search Input Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-accent/40 via-accent/20 to-primary/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm" />
          
          <div className="relative flex items-center bg-primary-foreground/[0.08] backdrop-blur-xl border border-primary-foreground/15 rounded-2xl overflow-hidden transition-all duration-300 group-focus-within:bg-primary-foreground/[0.12] group-focus-within:border-primary-foreground/25">
            <Search className="w-5 h-5 text-primary-foreground/40 ml-5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder="Search countries, colleges, programs..."
              className="flex-1 bg-transparent border-none outline-none px-4 py-4 md:py-5 text-primary-foreground placeholder:text-primary-foreground/35 text-base md:text-lg font-medium"
            />
            {(query || hasActiveFilters) && (
              <button
                onClick={clearAll}
                className="p-2 mr-1 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => {
                setFiltersVisible(!filtersVisible);
                setIsOpen(true);
              }}
              className={`flex items-center gap-2 px-4 md:px-5 py-4 md:py-5 border-l border-primary-foreground/10 text-sm font-semibold transition-all ${
                filtersVisible || hasActiveFilters
                  ? "text-accent bg-accent/10"
                  : "text-primary-foreground/50 hover:text-primary-foreground/80"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
              {hasActiveFilters && (
                <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
                  {[selectedProgram, selectedRegion, selectedType].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {filtersVisible && isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <div className="bg-background/95 backdrop-blur-2xl rounded-2xl border border-border shadow-2xl shadow-primary/20 p-5 space-y-5">
              {/* Program Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Program</span>
                <div className="flex flex-wrap gap-2">
                  {programFilters.map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedProgram(selectedProgram === p ? null : p)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        selectedProgram === p
                          ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {p === "MBBS" ? "🩺" : "🎓"} {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Region</span>
                <div className="flex flex-wrap gap-2">
                  {regionFilters.map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRegion(selectedRegion === r ? null : r)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        selectedRegion === r
                          ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Category</span>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(typeLabels).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedType(selectedType === key ? null : key)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        selectedType === key
                          ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {val.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters Summary */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                        {selectedProgram}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedProgram(null)} />
                      </span>
                    )}
                    {selectedRegion && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                        {selectedRegion}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedRegion(null)} />
                      </span>
                    )}
                    {selectedType && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                        {typeLabels[selectedType]?.label}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedType(null)} />
                      </span>
                    )}
                  </div>
                  <button onClick={clearAll} className="text-xs font-semibold text-muted-foreground hover:text-accent transition-colors">
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Results Dropdown */}
        {showResults && !filtersVisible && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <div className="bg-background/95 backdrop-blur-2xl rounded-2xl border border-border shadow-2xl shadow-primary/20 max-h-[400px] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground font-medium">No results found</p>
                  <p className="text-sm text-muted-foreground/60 mt-1">Try a different search or adjust filters</p>
                </div>
              ) : (
                Object.entries(grouped).map(([type, items]) => (
                  <div key={type} className="border-b border-border last:border-b-0">
                    <div className="px-5 py-2.5 bg-secondary/50">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {typeLabels[type]?.label || type}
                      </span>
                    </div>
                    {items.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center gap-3 px-5 py-3 hover:bg-secondary/70 transition-colors text-left group"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="flex-1 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Popular Suggestions */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <div className="bg-background/95 backdrop-blur-2xl rounded-2xl border border-border shadow-2xl shadow-primary/20 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimateIn>
  );
};
