import { useParams, Link } from "react-router-dom";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle, MapPin, DollarSign, GraduationCap, ArrowRight } from "lucide-react";

const collegeData: Record<string, {
  name: string; country: string; flag: string; city: string; program: string;
  fees: string; overview: string; recognition: string; courses: string[];
  hostel: string; indianFood: string; eligibility: string[];
}> = {
  "kazan-federal-university": {
    name: "Kazan Federal University", country: "Russia", flag: "🇷🇺", city: "Kazan", program: "MBBS",
    fees: "₹3.5 Lakh/year", overview: "Kazan Federal University is one of the oldest and most prestigious universities in Russia, offering world-class medical education since 1804. It is NMC and WHO recognized.",
    recognition: "NMC, WHO, WFME recognized", courses: ["General Medicine (MBBS equivalent)", "Dentistry", "Pharmacy", "Nursing"],
    hostel: "Modern dormitories with 24/7 security, Wi-Fi, and common areas.", indianFood: "Indian mess available on campus. Indian restaurants nearby.",
    eligibility: ["NEET UG qualified", "12th with PCB (50%+)", "Age 17+", "Valid passport"],
  },
  "tbilisi-state-medical": {
    name: "Tbilisi State Medical University", country: "Georgia", flag: "🇬🇪", city: "Tbilisi", program: "MBBS",
    fees: "₹3.5 Lakh/year", overview: "Tbilisi State Medical University is Georgia's top medical school, established in 1918. It follows European medical education standards and is widely recognized.",
    recognition: "NMC, WHO, WFME recognized", courses: ["Medicine (MD)", "Dentistry", "Pharmacy", "Public Health"],
    hostel: "University hostels near campus with all facilities.", indianFood: "Indian restaurants and mess in Tbilisi.",
    eligibility: ["NEET UG qualified", "12th with PCB (50%+)", "Age 17+"],
  },
};

const defaultCollege = {
  name: "Partner University", country: "Abroad", flag: "🌍", city: "International", program: "MBBS/MS",
  fees: "Contact for details", overview: "This is one of our esteemed partner universities offering globally recognized degrees. Contact KMR Global Education for detailed information.",
  recognition: "Internationally recognized", courses: ["Medicine", "Engineering", "Business"],
  hostel: "Student accommodation available.", indianFood: "Options available in the area.",
  eligibility: ["Relevant qualifying exam", "Academic transcripts", "Valid passport"],
};

const CollegeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const college = slug && collegeData[slug] ? collegeData[slug] : defaultCollege;

  return (
    <StandardPageTemplate
      metaTitle={`${college.name} — Fees, Admissions & Reviews | KMR Global Education`}
      metaDescription={`Study at ${college.name} in ${college.city}, ${college.country}. Fees: ${college.fees}. Free admission guidance by KMR Global Education.`}
      heroLabel={`${college.program} in ${college.country}`}
      heroTitle={college.name}
      heroSubtitle={`${college.flag} ${college.city}, ${college.country} — ${college.fees}`}
    >
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <SectionTitle label="Overview" title={`About ${college.name}`} />
          <AnimateIn animation="fade-up"><p className="text-muted-foreground leading-relaxed text-center">{college.overview}</p></AnimateIn>
          <AnimateIn animation="fade-up" delay={100}>
            <p className="text-sm text-accent font-medium text-center mt-4">{college.recognition}</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 md:py-24 section-light">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn animation="slide-left">
              <div className="p-6 rounded-2xl bg-background border">
                <h3 className="font-bold text-foreground mb-4">Courses Offered</h3>
                <ul className="space-y-2">
                  {college.courses.map((c, i) => (
                    <li key={i} className="flex gap-2 items-center text-sm text-foreground">
                      <GraduationCap className="w-4 h-4 text-accent" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn animation="slide-right">
              <div className="p-6 rounded-2xl bg-background border">
                <h3 className="font-bold text-foreground mb-4">Eligibility</h3>
                <ul className="space-y-2">
                  {college.eligibility.map((e, i) => (
                    <li key={i} className="flex gap-2 items-center text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />{e}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn animation="fade-up">
              <div className="p-6 rounded-2xl bg-secondary">
                <h3 className="font-bold text-foreground mb-2">Accommodation</h3>
                <p className="text-sm text-muted-foreground">{college.hostel}</p>
              </div>
            </AnimateIn>
            <AnimateIn animation="fade-up" delay={100}>
              <div className="p-6 rounded-2xl bg-secondary">
                <h3 className="font-bold text-foreground mb-2">Indian Food</h3>
                <p className="text-sm text-muted-foreground">{college.indianFood}</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </StandardPageTemplate>
  );
};

export default CollegeDetail;
