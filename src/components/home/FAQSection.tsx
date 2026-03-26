import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is MBBS abroad recognized in India?",
    a: "Yes. All universities we recommend are recognized by NMC (National Medical Commission), WHO, and the respective country's education ministry. Students can appear for FMGE/NEXT after completing their degree.",
  },
  {
    q: "What is the total cost of studying MBBS abroad?",
    a: "Total costs vary by country — ranging from ₹15 Lakh to ₹45 Lakh for the entire course including tuition and living. Countries like Uzbekistan and Kazakhstan are the most affordable.",
  },
  {
    q: "Do I need NEET to study MBBS abroad?",
    a: "Yes, Indian students must qualify NEET UG to be eligible for MBBS admission abroad, as per NMC guidelines. However, the cutoff is much lower compared to Indian medical colleges.",
  },
  {
    q: "How does KMR help with visa processing?",
    a: "We provide complete visa support — from document preparation and application filing to embassy scheduling and mock interview practice. Our visa success rate is 98%.",
  },
  {
    q: "Is Indian food available for students abroad?",
    a: "Yes. Most of our partner universities have Indian mess facilities or nearby Indian restaurants. Countries like Russia, Georgia, and Kazakhstan have well-established Indian student communities.",
  },
  {
    q: "What support do I get after reaching the university?",
    a: "We provide airport pickup, hostel arrangement, university registration help, local SIM card, bank account opening support, and ongoing academic guidance throughout your course.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionTitle
          label="Common Questions"
          title="Frequently Asked Questions"
          description="Get answers to the most common queries about studying abroad with MPR Global Education."
        />

        <div className="max-w-3xl mx-auto">
          <AnimateIn animation="fade-up">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-5 text-[15px]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
