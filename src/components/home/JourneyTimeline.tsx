import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Search, FileText, Stamp, Plane, GraduationCap } from "lucide-react";

const steps = [
  { icon: Search, title: "Free Counselling", desc: "Speak to our experts and understand your options based on your profile, budget, and goals." },
  { icon: FileText, title: "University Selection", desc: "We shortlist the best universities and countries tailored to your course and career plan." },
  { icon: Stamp, title: "Admission & Documents", desc: "We handle your application, documents, invitation letter, and admission confirmation." },
  { icon: Plane, title: "Visa & Travel", desc: "Complete visa assistance, travel booking, forex support, and pre-departure briefing." },
  { icon: GraduationCap, title: "Arrival & Support", desc: "Airport pickup, hostel allotment, university orientation, and ongoing support abroad." },
];

export const JourneyTimeline = () => {
  return (
    <section className="py-20 md:py-28 section-light">
      <div className="container">
        <SectionTitle
          label="Your Journey"
          title="From Enquiry to University — Step by Step"
          description="A clear, transparent admission process. No hidden charges, no confusion — just expert guidance."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={step.title} animation="fade-up" delay={i * 100}>
                  <div className="flex gap-5 md:gap-8 items-start">
                    <div className="relative z-10 w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-accent tabular-nums">Step {i + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
