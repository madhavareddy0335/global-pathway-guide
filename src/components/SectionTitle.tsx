import { AnimateIn } from "./AnimateIn";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({ label, title, description, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {label && (
        <AnimateIn animation="fade-up">
          <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 ${light ? "text-accent" : "text-accent"}`}>
            {label}
          </span>
        </AnimateIn>
      )}
      <AnimateIn animation="fade-up" delay={80}>
        <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </h2>
      </AnimateIn>
      {description && (
        <AnimateIn animation="fade-up" delay={160}>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
            {description}
          </p>
        </AnimateIn>
      )}
    </div>
  );
};
