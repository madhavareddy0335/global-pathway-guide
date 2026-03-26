import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found — MPR Global Education";
  }, []);

  return (
    <>
      <Header />
      <main className="hero-gradient min-h-[70vh] flex items-center">
        <div className="container text-center">
          <AnimateIn animation="scale-in">
            <span className="text-8xl md:text-9xl font-extrabold text-accent/20">404</span>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={100}>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mt-4">Page Not Found</h1>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={200}>
            <p className="mt-4 text-primary-foreground/60 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </AnimateIn>
          <AnimateIn animation="fade-up" delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:brightness-110 transition-all">
                <Home className="w-4 h-4" /> Go Home
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 font-semibold rounded-xl hover:bg-primary-foreground/20 transition-all">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
