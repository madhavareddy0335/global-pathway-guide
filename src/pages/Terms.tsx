import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions — KMR Global Education";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container">
            <AnimateIn animation="fade-up"><h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Terms & Conditions</h1></AnimateIn>
            <AnimateIn animation="fade-up" delay={100}><p className="mt-4 text-primary-foreground/60">Last updated: March 2026</p></AnimateIn>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <AnimateIn animation="fade-up">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground">1. Services</h2>
                <p className="text-muted-foreground leading-relaxed">KMR Global Education provides overseas education counselling, university selection guidance, admission support, visa assistance, and related services. We act as an educational consultancy and facilitator — not as a university or educational institution.</p>

                <h2 className="text-xl font-bold text-foreground">2. Accuracy of Information</h2>
                <p className="text-muted-foreground leading-relaxed">We strive to provide accurate information about universities, fees, eligibility, and admission processes. However, fees, policies, and requirements may change without notice. Always confirm details with the university directly.</p>

                <h2 className="text-xl font-bold text-foreground">3. Student Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">Students are responsible for providing accurate personal and academic information. Misrepresentation of documents or qualifications may result in admission cancellation.</p>

                <h2 className="text-xl font-bold text-foreground">4. Fees & Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">Consultancy service fees, if applicable, are communicated before engagement. University tuition and visa fees are paid directly to respective institutions. Refund policies vary by university.</p>

                <h2 className="text-xl font-bold text-foreground">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">KMR Global Education is not liable for admission decisions made by universities, visa outcomes by embassies, or any changes in university policies, fees, or recognition status.</p>

                <h2 className="text-xl font-bold text-foreground">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">All content on this website, including text, images, and design, is the property of KMR Global Education and may not be reproduced without written permission.</p>

                <h2 className="text-xl font-bold text-foreground">7. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">For questions about these terms, contact us at <a href="mailto:info@kmrglobaleducation.com" className="text-accent hover:underline">info@kmrglobaleducation.com</a>.</p>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
