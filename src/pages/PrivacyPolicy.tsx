import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — KMR Global Education";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container">
            <AnimateIn animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Privacy Policy</h1>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <p className="mt-4 text-primary-foreground/60">Last updated: March 2026</p>
            </AnimateIn>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <AnimateIn animation="fade-up">
              <div className="prose prose-sm max-w-none space-y-6">
                <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">We collect personal information you voluntarily provide when filling out contact forms, callback requests, or WhatsApp inquiries — including your name, phone number, email, course interest, and country preference.</p>

                <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">Your information is used to provide career counselling, share relevant program details, connect you with our counsellors via WhatsApp or phone, and send educational content or updates about programs you've expressed interest in.</p>

                <h2 className="text-xl font-bold text-foreground">3. WhatsApp & Contact Form Data</h2>
                <p className="text-muted-foreground leading-relaxed">When you submit a form, your details are sent to our WhatsApp business number for quick response. We do not share this data with third parties for marketing purposes. Your inquiry is handled confidentially by our counselling team.</p>

                <h2 className="text-xl font-bold text-foreground">4. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">Our website may use cookies for analytics purposes to understand user behavior and improve our content. You can disable cookies through your browser settings.</p>

                <h2 className="text-xl font-bold text-foreground">5. Data Storage & Security</h2>
                <p className="text-muted-foreground leading-relaxed">We store your data securely and take reasonable measures to protect it from unauthorized access. We retain your data only as long as necessary to provide our services.</p>

                <h2 className="text-xl font-bold text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">You have the right to request access to, correction of, or deletion of your personal data. You may also opt out of promotional communications at any time.</p>

                <h2 className="text-xl font-bold text-foreground">7. Contact for Privacy Queries</h2>
                <p className="text-muted-foreground leading-relaxed">For any privacy-related questions or data requests, please contact us at <a href="mailto:privacy@kmrglobaleducation.com" className="text-accent hover:underline">privacy@kmrglobaleducation.com</a> or call +91 98765 43210.</p>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
