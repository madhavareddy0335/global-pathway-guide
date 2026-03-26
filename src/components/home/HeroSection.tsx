import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MapPin, Phone, GraduationCap, Globe, Award, Users, Sparkles } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { HeroSearchBar } from "@/components/home/HeroSearchBar";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "10+", label: "Countries", icon: Globe },
  { value: "150+", label: "Partner Universities", icon: GraduationCap },
  { value: "98%", label: "Visa Success Rate", icon: Award },
  { value: "5,000+", label: "Students Guided", icon: Users },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/30 animate-float"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <AnimateIn animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 border border-accent/20 rounded-full text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
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
              Expert guidance for MBBS & MS programs across 10+ countries. From admission to visa — we handle everything.
            </p>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={250}>
            <p className="mt-2 text-sm text-primary-foreground/40 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Hyderabad & Warangal, Telangana
            </p>
          </AnimateIn>

          {/* Advanced Search Bar */}
          <HeroSearchBar />

          <AnimateIn animation="fade-up" delay={400}>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all text-base cta-glow"
              >
                Get Free Counselling
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917416868111"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all text-base"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </AnimateIn>

          {/* Stats */}
          <AnimateIn animation="fade-up" delay={500}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground tabular-nums">{stat.value}</div>
                  </div>
                  <div className="text-xs md:text-sm text-primary-foreground/50">{stat.label}</div>
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
