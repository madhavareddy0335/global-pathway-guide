export interface ProgramData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  whoShouldChoose: string[];
  eligibility: string[];
  countries: { name: string; flag: string; fees: string; duration: string; href: string }[];
  admissionSteps: string[];
  careerOutcomes: string[];
  budgetRange: string;
  faqs: { q: string; a: string }[];
}

export const programsData: Record<string, ProgramData> = {
  "mbbs-abroad": {
    slug: "mbbs-abroad",
    title: "MBBS Abroad",
    heroTitle: "Study MBBS Abroad",
    heroSubtitle: "Pursue your dream of becoming a doctor at globally recognized, NMC/WHO-approved medical universities — at a fraction of Indian private college fees.",
    metaTitle: "MBBS Abroad for Indian Students — Fees, Countries & Admissions",
    metaDescription: "Study MBBS abroad in NMC & WHO recognized universities. Compare fees, countries, eligibility and admission process. Free counselling by MPR Global Education.",
    overview: "Studying MBBS abroad has become one of the most sought-after paths for Indian students who want a quality medical education without the burden of high fees or capitation charges. Countries like Russia, Georgia, Kazakhstan, Uzbekistan, Serbia, Tajikistan, and Kyrgyzstan offer internationally recognized medical degrees at affordable costs. With English-medium instruction, modern infrastructure, and strong clinical training, MBBS abroad is a viable and rewarding alternative to Indian private medical colleges.",
    whoShouldChoose: [
      "Students who have qualified NEET UG but didn't get a government seat in India",
      "Students who want affordable medical education without capitation fees",
      "Students who are open to studying in a global environment",
      "Students who want NMC/WHO recognized degrees valid in India and worldwide",
      "Parents looking for safe, well-supported study destinations with Indian food and hostel facilities",
    ],
    eligibility: [
      "Must have passed 12th with Physics, Chemistry, and Biology",
      "Minimum 50% aggregate in PCB (40% for reserved categories)",
      "Must have qualified NEET UG as per NMC guidelines",
      "Age: 17 years or above at the time of admission",
      "No upper age limit in most countries",
    ],
    countries: [
      { name: "Russia", flag: "🇷🇺", fees: "₹20–35 Lakh", duration: "6 Years", href: "/mbbs-in-russia" },
      { name: "Georgia", flag: "🇬🇪", fees: "₹18–30 Lakh", duration: "6 Years", href: "/mbbs-in-georgia" },
      { name: "Serbia", flag: "🇷🇸", fees: "₹22–38 Lakh", duration: "6 Years", href: "/mbbs-in-serbia" },
      { name: "Kazakhstan", flag: "🇰🇿", fees: "₹15–25 Lakh", duration: "5 Years", href: "/mbbs-in-kazakhstan" },
      { name: "Uzbekistan", flag: "🇺🇿", fees: "₹12–22 Lakh", duration: "5 Years", href: "/mbbs-in-uzbekistan" },
      { name: "Tajikistan", flag: "🇹🇯", fees: "₹12–20 Lakh", duration: "5+1 Years", href: "/mbbs-in-tajikistan" },
      { name: "Kyrgyzstan", flag: "🇰🇬", fees: "₹14–24 Lakh", duration: "5+1 Years", href: "/mbbs-in-kyrgyzstan" },
    ],
    admissionSteps: [
      "Qualify NEET UG with the required cutoff score",
      "Contact MPR Global Education for free career counselling",
      "Choose the right country and university based on your budget and goals",
      "Submit your application with required documents",
      "Receive your admission/invitation letter from the university",
      "Apply for a student visa with our end-to-end support",
      "Attend the pre-departure orientation and travel briefing",
      "Fly to your destination — we arrange airport pickup and hostel",
    ],
    careerOutcomes: [
      "Practice as a doctor in India after clearing FMGE/NEXT exam",
      "Pursue MD/MS specialization in India or abroad",
      "Practice medicine in the country of graduation (if eligible)",
      "Work in healthcare, research, and public health globally",
      "Opportunities in WHO, UNICEF, and international medical organizations",
    ],
    budgetRange: "₹12 Lakh – ₹45 Lakh (total course including living expenses)",
    faqs: [
      { q: "Is MBBS abroad valid in India?", a: "Yes. Degrees from NMC-recognized universities are valid. Students must clear FMGE/NEXT to practice in India." },
      { q: "Is NEET required for MBBS abroad?", a: "Yes, NEET qualification is mandatory for Indian students as per NMC regulations." },
      { q: "Which is the cheapest country for MBBS?", a: "Uzbekistan, Tajikistan, and Kyrgyzstan offer some of the most affordable MBBS programs starting from ₹12 Lakh total." },
      { q: "Is the medium of instruction English?", a: "Yes, all universities we recommend offer MBBS in English medium." },
      { q: "Do I need to learn the local language?", a: "Basic local language is taught in the first year to help with patient communication during clinical rotations." },
      { q: "What is the duration of MBBS abroad?", a: "Typically 5 to 6 years including internship, depending on the country." },
    ],
  },
  "ms-abroad": {
    slug: "ms-abroad",
    title: "MS Abroad",
    heroTitle: "Study MS Abroad",
    heroSubtitle: "Advance your career with a Master's degree from world-class universities in USA, UK, Germany, Australia, and more.",
    metaTitle: "MS Abroad for Indian Students — Universities, Fees & Careers",
    metaDescription: "Study MS abroad in USA, UK, Germany, Australia. Compare universities, fees, scholarships and career outcomes. Expert counselling by MPR Global Education.",
    overview: "A Master of Science (MS) degree from a global university opens doors to advanced career opportunities, cutting-edge research, and higher earning potential. Countries like USA, UK, Germany, Australia, Italy, and Ireland offer diverse MS specializations in engineering, technology, data science, AI, healthcare, and more. With scholarship opportunities, post-study work visas, and strong industry connections, an MS abroad is one of the best investments for your future.",
    whoShouldChoose: [
      "Engineering or science graduates looking to specialize in a global university",
      "Students aiming for research roles or PhD pathways",
      "Professionals seeking career advancement and higher salaries",
      "Students who want to work internationally after graduation",
      "Graduates who want access to cutting-edge labs, facilities, and industry partnerships",
    ],
    eligibility: [
      "Bachelor's degree in a relevant field (Engineering, Science, etc.)",
      "Minimum GPA of 3.0/4.0 or equivalent (varies by university)",
      "GRE score (for USA — some universities now GRE-optional)",
      "IELTS (6.5+) or TOEFL (80+) for English proficiency",
      "Statement of Purpose, Letters of Recommendation, and Resume/CV",
    ],
    countries: [
      { name: "USA", flag: "🇺🇸", fees: "$25K–60K/yr", duration: "2 Years", href: "/ms-in-usa" },
      { name: "UK", flag: "🇬🇧", fees: "£12K–35K/yr", duration: "1 Year", href: "/ms-in-uk" },
      { name: "Australia", flag: "🇦🇺", fees: "AUD 20K–45K/yr", duration: "1.5–2 Years", href: "/ms-in-australia" },
      { name: "Germany", flag: "🇩🇪", fees: "Low / Free tuition", duration: "2 Years", href: "/ms-in-germany" },
      { name: "Italy", flag: "🇮🇹", fees: "€1K–4K/yr", duration: "2 Years", href: "/ms-in-italy" },
      { name: "Ireland", flag: "🇮🇪", fees: "€10K–25K/yr", duration: "1–2 Years", href: "/ms-in-ireland" },
    ],
    admissionSteps: [
      "Research programs and shortlist universities based on your profile",
      "Prepare and take standardized tests (GRE, IELTS/TOEFL)",
      "Consult KMR for personalized university recommendations",
      "Prepare SOP, LORs, resume, and academic transcripts",
      "Submit applications before intake deadlines",
      "Receive offer letters and choose your preferred university",
      "Apply for student visa with KMR's end-to-end support",
      "Attend pre-departure briefing and travel to your university",
    ],
    careerOutcomes: [
      "Software engineer, data scientist, or AI specialist in top tech companies",
      "Research positions in universities and R&D labs globally",
      "Post-study work visas (OPT in USA, PSW in UK, etc.)",
      "Higher salary packages — 2x to 5x compared to Indian salaries",
      "Pathway to permanent residency in countries like Canada, Australia, Germany",
      "PhD opportunities with funded positions in leading universities",
    ],
    budgetRange: "$15,000 – $60,000 per year (tuition only — varies by country)",
    faqs: [
      { q: "Which country is best for MS?", a: "USA offers the widest range of programs and career opportunities. Germany is best for low-cost education. UK offers fast 1-year programs." },
      { q: "Is GRE required for MS abroad?", a: "GRE is mainly required for US universities. Many UK, German, and Australian universities don't require GRE." },
      { q: "Can I get a scholarship for MS abroad?", a: "Yes, many universities offer merit-based and need-based scholarships. Germany has virtually free tuition at public universities." },
      { q: "What is the ROI of an MS abroad?", a: "Students typically recover their investment within 2-3 years of working abroad, with salaries often 3-5x higher than India." },
      { q: "Can I work while studying?", a: "Yes, most countries allow 20 hours/week part-time work during studies and full-time during breaks." },
      { q: "How does KMR help with MS applications?", a: "We provide university shortlisting, SOP review, application management, visa support, and pre-departure guidance." },
    ],
  },
};
