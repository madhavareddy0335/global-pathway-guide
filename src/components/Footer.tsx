import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career Guidance", href: "/career-guidance" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "MS Abroad", href: "/ms-abroad" },
];

const countryLinks = [
  { label: "MBBS in Russia", href: "/mbbs-in-russia" },
  { label: "MBBS in Georgia", href: "/mbbs-in-georgia" },
  { label: "MS in USA", href: "/ms-in-usa" },
  { label: "MS in UK", href: "/ms-in-uk" },
  { label: "MS in Germany", href: "/ms-in-germany" },
];

export const Footer = () => {
  return (
    <footer className="section-navy">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-primary-foreground mb-4">
              MPR Global Education
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Your trusted partner for overseas education. We guide students through every step — from country selection to visa approval and beyond.
            </p>
            <div className="space-y-3">
              <a href="tel:+917416868111" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                +91 74168 68111
              </a>
              <a href="mailto:info@mprglobaleducation.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                info@mprglobaleducation.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Hyderabad, Telangana, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-5">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-5">Top Destinations</h4>
            <ul className="space-y-3">
              {countryLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} MPR Global Education. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
