import { useEffect, useRef, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";

const colleges = [
  { name: "Kazan Federal University", flag: "🇷🇺", country: "Russia" },
  { name: "Tbilisi State Medical University", flag: "🇬🇪", country: "Georgia" },
  { name: "University of Belgrade", flag: "🇷🇸", country: "Serbia" },
  { name: "Kazakh National Medical University", flag: "🇰🇿", country: "Kazakhstan" },
  { name: "Tashkent Medical Academy", flag: "🇺🇿", country: "Uzbekistan" },
  { name: "MIT", flag: "🇺🇸", country: "USA" },
  { name: "Stanford University", flag: "🇺🇸", country: "USA" },
  { name: "University of Oxford", flag: "🇬🇧", country: "UK" },
  { name: "Imperial College London", flag: "🇬🇧", country: "UK" },
  { name: "TU Munich", flag: "🇩🇪", country: "Germany" },
  { name: "Politecnico di Milano", flag: "🇮🇹", country: "Italy" },
  { name: "Trinity College Dublin", flag: "🇮🇪", country: "Ireland" },
  { name: "University of Melbourne", flag: "🇦🇺", country: "Australia" },
  { name: "Avicenna Tajik State Medical", flag: "🇹🇯", country: "Tajikistan" },
  { name: "Kyrgyz State Medical Academy", flag: "🇰🇬", country: "Kyrgyzstan" },
];

// Double the list for seamless loop
const doubled = [...colleges, ...colleges];

export const CollegeLogosCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let scrollPos = 0;
    const speed = 0.6;

    const animate = () => {
      if (!paused) {
        scrollPos += speed;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <SectionTitle
          label="Our Partners"
          title="150+ Partner Universities Worldwide"
          description="We partner with top NMC/WHO recognized universities across 13+ countries."
        />
      </div>

      <AnimateIn animation="fade-up">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden mt-10 cursor-default"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {doubled.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 min-w-[220px]"
            >
              <span className="text-3xl">{c.flag}</span>
              <div className="min-w-0">
                <p className="text-sm font-bold text-foreground truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.country}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
};
