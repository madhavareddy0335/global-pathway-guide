import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Shield, Users, Globe, FileCheck, Headphones, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "NMC / WHO Recognized", desc: "All our partner universities are fully recognized by NMC, WHO, and respective country boards." },
  { icon: Users, title: "End-to-End Support", desc: "From counselling to visa, travel, and post-arrival support — we're with you at every step." },
  { icon: Globe, title: "10+ Countries", desc: "Choose from a wide network of partner universities across Europe, Asia, and beyond." },
  { icon: FileCheck, title: "Hassle-Free Admissions", desc: "No capitation fees, transparent process, and guaranteed admission guidance." },
  { icon: Headphones, title: "24/7 Counselling", desc: "Talk to our expert counsellors anytime — via call, WhatsApp, or in-person at our offices in Hyderabad & Warangal." },
  { icon: Award, title: "5,000+ Success Stories", desc: "Thousands of students trust MPR Global Education for their overseas education journey." },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          label="Why MPR"
          title="Why Students Trust MPR Global Education"
          description="We don't just consult — we commit. Here's what sets us apart from every other overseas education agency."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimateIn key={f.title} animation="fade-up" delay={i * 80}>
                <div className="p-6 rounded-2xl bg-background border card-hover h-full group">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
