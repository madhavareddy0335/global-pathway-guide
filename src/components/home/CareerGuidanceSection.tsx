import { Link } from "react-router-dom";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Compass, Globe, Wallet, BookOpen, ArrowRight } from "lucide-react";

const guides = [
  {
    icon: Compass,
    title: "Career After MBBS",
    desc: "Explore career options after completing MBBS abroad — from practicing in India to global opportunities.",
    href: "/career/after-mbbs",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Career After MS",
    desc: "Discover high-paying career paths after your Master's degree — industry roles, research, and more.",
    href: "/career/after-ms",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Globe,
    title: "Country Selection Guide",
    desc: "Compare countries by fees, lifestyle, recognition, and career outcomes to pick your ideal destination.",
    href: "/career/country-selection-guide",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Wallet,
    title: "Budget Planning Guide",
    desc: "Plan your study abroad budget — tuition, living costs, scholarships, and education loans explained.",
    href: "/career/budget-planning-guide",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export const CareerGuidanceSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          label="Career Resources"
          title="Expert Career Guidance"
          description="Make informed decisions with our comprehensive guides, built from years of helping 5,000+ students succeed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {guides.map((g, i) => {
            const Icon = g.icon;
            return (
              <AnimateIn key={g.title} animation="fade-up" delay={i * 80}>
                <Link
                  to={g.href}
                  className="group block p-6 rounded-2xl bg-secondary border border-border/50 card-hover h-full"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${g.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {g.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{g.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
