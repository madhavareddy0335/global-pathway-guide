import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroSearchBar } from "@/components/home/HeroSearchBar";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <AnimateIn animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 border border-accent/20 rounded-full text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Trusted by 5,000+ Students
            </span>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.05] tracking-tight">
              Your Dream of
              <span className="text-gradient-red block">Studying Abroad</span>
              Starts Here
            </h1>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200}>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl">
              Expert guidance for MBBS & MS programs across 13+ countries. From admission to visa — we handle everything.
            </p>
          </AnimateIn>

          {/* Advanced Search Bar */}
          <HeroSearchBar />

          <AnimateIn animation="fade-up" delay={400}>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all text-base"
              >
                Get Free Counselling
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#career-path"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-base"
              >
                Explore Career Paths
              </a>
            </div>
          </AnimateIn>

          {/* Stats */}
          <AnimateIn animation="fade-up" delay={500}>
            <div className="mt-14 flex items-center gap-8 md:gap-12">
              {[
                { value: "13+", label: "Countries" },
                { value: "150+", label: "Partner Universities" },
                { value: "98%", label: "Visa Success Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground tabular-nums">{stat.value}</div>
                  <div className="text-xs md:text-sm text-primary-foreground/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#career-path"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-float"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
