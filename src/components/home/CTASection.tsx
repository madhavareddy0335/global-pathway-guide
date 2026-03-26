import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export const CTASection = () => {
  const phone = "919876543210";
  const message = encodeURIComponent("Hi MPR Global Education, I want to study abroad. Please help me with guidance.");

  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center">
        <AnimateIn animation="scale-in">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Start Your Journey Today
          </span>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight max-w-2xl mx-auto">
            Ready to Study Abroad? Let's Talk.
          </h2>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={200}>
          <p className="mt-5 text-lg text-primary-foreground/60 max-w-lg mx-auto">
            Book a free counselling session with our experts. No obligations, no hidden fees — just honest guidance.
          </p>
        </AnimateIn>

        <AnimateIn animation="fade-up" delay={300}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all text-base cta-glow"
            >
              Book Free Counselling
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 font-semibold rounded-xl hover:bg-primary-foreground/20 transition-all text-base"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
