import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Ramesh",
    course: "MBBS in Georgia",
    text: "KMR made the entire process so smooth. From choosing the right university to visa approval — they were with me at every step. I'm now studying at Tbilisi State Medical University!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    course: "MS in Germany",
    text: "I was confused between UK and Germany. The career counselling team at MPR helped me understand the tuition advantage in Germany. Best decision I ever made.",
    rating: 5,
  },
  {
    name: "Sneha Krishnan",
    course: "MBBS in Russia",
    text: "My parents were worried about safety and food in Russia. KMR connected us with current students and showed real hostel photos. That built instant trust.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          label="Student Stories"
          title="Hear From Our Students"
          description="Real students, real experiences. Here's what they say about their journey with MPR Global Education."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} animation="fade-up" delay={i * 100}>
              <div className="p-6 rounded-2xl bg-background border card-hover h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.text}</p>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};
