import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import kmrLogo from "@/assets/mpr-logo.png";

const programs = [
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "MS Abroad", href: "/ms-abroad" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "#", children: programs },
  { label: "Colleges", href: "/colleges" },
  { label: "Exams", href: "/exams" },
  { label: "Services", href: "/services" },
  { label: "Career Guidance", href: "/career-guidance" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={kmrLogo} alt="MPR Global Education" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.children ? (
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled ? "text-foreground hover:text-accent" : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? "text-accent"
                      : scrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {link.children && (
                <div
                  className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="bg-background rounded-xl shadow-xl shadow-primary/10 border p-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm font-medium rounded-lg text-foreground hover:bg-secondary hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground/90"
            }`}
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-lg btn-magnetic hover:brightness-110 transition-all"
          >
            Get Free Counselling
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t animate-fade-up">
          <nav className="container py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-secondary"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-muted-foreground rounded-lg hover:bg-secondary hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-secondary"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 px-4">
              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-lg"
              >
                Get Free Counselling
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
