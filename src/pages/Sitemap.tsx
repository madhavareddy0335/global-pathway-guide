import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";

const sections = [
  { title: "Main Pages", links: [
    { label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Services", href: "/services" },
    { label: "Career Guidance", href: "/career-guidance" }, { label: "Contact", href: "/contact" },
  ]},
  { title: "Programs", links: [
    { label: "MBBS Abroad", href: "/mbbs-abroad" }, { label: "MS Abroad", href: "/ms-abroad" },
  ]},
  { title: "MBBS Countries", links: [
    { label: "MBBS in Russia", href: "/mbbs-in-russia" }, { label: "MBBS in Georgia", href: "/mbbs-in-georgia" },
    { label: "MBBS in Serbia", href: "/mbbs-in-serbia" }, { label: "MBBS in Kazakhstan", href: "/mbbs-in-kazakhstan" },
    { label: "MBBS in Uzbekistan", href: "/mbbs-in-uzbekistan" }, { label: "MBBS in Tajikistan", href: "/mbbs-in-tajikistan" },
    { label: "MBBS in Kyrgyzstan", href: "/mbbs-in-kyrgyzstan" },
  ]},
  { title: "MS Countries", links: [
    { label: "MS in USA", href: "/ms-in-usa" }, { label: "MS in UK", href: "/ms-in-uk" },
    { label: "MS in Australia", href: "/ms-in-australia" }, { label: "MS in Germany", href: "/ms-in-germany" },
    { label: "MS in Italy", href: "/ms-in-italy" }, { label: "MS in Ireland", href: "/ms-in-ireland" },
  ]},
  { title: "Career Guides", links: [
    { label: "Career After MBBS", href: "/career/after-mbbs" }, { label: "Career After MS", href: "/career/after-ms" },
    { label: "Country Selection Guide", href: "/career/country-selection-guide" },
    { label: "Budget Planning Guide", href: "/career/budget-planning-guide" },
    { label: "Course Selection Guide", href: "/career/course-selection-guide" },
  ]},
  { title: "Exams", links: [
    { label: "NEET UG Guide", href: "/exams/neet-ug" }, { label: "NEET PG Guide", href: "/exams/neet-pg" },
    { label: "Entrance Exams Overview", href: "/exams/overview" },
  ]},
  { title: "Resources", links: [
    { label: "All Colleges", href: "/colleges" }, { label: "Blog", href: "/blog" },
  ]},
  { title: "Legal", links: [
    { label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms" },
  ]},
];

const Sitemap = () => {
  useEffect(() => {
    document.title = "Sitemap — KMR Global Education";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container">
            <AnimateIn animation="fade-up"><h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Sitemap</h1></AnimateIn>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, i) => (
                <AnimateIn key={section.title} animation="fade-up" delay={i * 60}>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.links.map(link => (
                        <li key={link.href}>
                          <Link to={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
