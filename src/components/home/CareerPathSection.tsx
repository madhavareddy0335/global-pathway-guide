import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight, GraduationCap, Stethoscope, Briefcase, SmilePlus } from "lucide-react";

const courses = [
  { icon: Stethoscope, title: "MBBS Abroad", desc: "Study medicine in WHO/NMC recognized universities across 7+ countries with affordable tuition.", href: "/mbbs-abroad", countries: "Russia, Georgia, Serbia, Kazakhstan" },
  { icon: GraduationCap, title: "MS Abroad", desc: "Pursue your Master's in top universities across USA, UK, Australia, Germany, and more.", href: "/ms-abroad", countries: "USA, UK, Germany, Australia" },
  { icon: Briefcase, title: "MBA Abroad", desc: "Global MBA programs with strong placement support and international exposure.", href: "/mba-abroad", countries: "USA, UK, Australia, Ireland" },
  { icon: SmilePlus, title: "Dental Abroad", desc: "Study BDS/MDS abroad in recognized dental schools with clinical training.", href: "/dental-abroad", countries: "Georgia, Serbia, Russia" },
];

export const CareerPathSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = courses[activeIndex];

  return (
    <section id="career-path" className="py-20 md:py-28 section-light">
      <div className="container">
        <SectionTitle
          label="Find Your Path"
          title="Which Program Fits You Best?"
          description="Select your area of interest and discover the right country, college, and career path — tailored for you."
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Selector */}
          <AnimateIn animation="slide-left" className="flex lg:flex-col gap-2">
            {courses.map((c, i) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.title}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-200 w-full group ${
                    i === activeIndex
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-background hover:bg-background/80 text-foreground card-hover"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${i === activeIndex ? "text-accent" : "text-muted-foreground group-hover:text-accent"}`} />
                  <span className="font-semibold text-sm">{c.title}</span>
                </button>
              );
            })}
          </AnimateIn>

          {/* Content */}
          <AnimateIn animation="fade-up" key={activeIndex} className="bg-background rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <active.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{active.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Top Destinations: {active.countries}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{active.desc}</p>
            <a
              href={active.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              Explore {active.title}
              <ArrowRight className="w-4 h-4" />
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
