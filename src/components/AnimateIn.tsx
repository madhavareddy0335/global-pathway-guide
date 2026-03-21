import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  once?: boolean;
  threshold?: number;
}

export const AnimateIn = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  once = true,
  threshold = 0.15,
}: AnimateInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const animationClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};

interface StaggerProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: AnimateInProps["animation"];
}

export const Stagger = ({
  children,
  className = "",
  staggerDelay = 80,
  animation = "fade-up",
}: StaggerProps) => {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <AnimateIn key={i} delay={i * staggerDelay} animation={animation}>
          {child}
        </AnimateIn>
      ))}
    </div>
  );
};
