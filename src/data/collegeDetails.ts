export interface CollegeDetailData {
  name: string;
  country: string;
  flag: string;
  city: string;
  program: string;
  fees: string;
  ranking: string;
  established: string;
  recognition: string;
  overview: string;
  highlights: string[];
  courses: { name: string; duration: string; fees: string }[];
  admissions: {
    process: string[];
    eligibility: string[];
    importantDates: { event: string; date: string }[];
  };
  placements: {
    overview: string;
    avgPackage: string;
    highestPackage: string;
    topRecruiters: string[];
    stats: { label: string; value: string }[];
  };
  infrastructure: string[];
  scholarships: { name: string; amount: string; eligibility: string }[];
  hostel: string;
  indianFood: string;
  faqs: { q: string; a: string }[];
}

export const collegeDetailsData: Record<string, CollegeDetailData> = {
  "kazan-federal-university": {
    name: "Kazan Federal University",
    country: "Russia", flag: "🇷🇺", city: "Kazan", program: "MBBS",
    fees: "₹3.5 Lakh/year", ranking: "Top 10 in Russia", established: "1804",
    recognition: "NMC, WHO, WFME recognized",
    overview: "Kazan Federal University is one of the oldest and most prestigious universities in Russia, founded in 1804. It offers world-class medical education with modern facilities, experienced faculty, and a strong track record of producing successful medical professionals. The university is located in Kazan, a vibrant multicultural city with a welcoming environment for international students.",
    highlights: [
      "Founded in 1804 — over 220 years of academic excellence",
      "Top 10 university in Russia for medical education",
      "NMC, WHO, and WFME recognized globally",
      "English medium instruction for international students",
      "State-of-the-art simulation labs and teaching hospitals",
      "Large Indian student community with dedicated support",
      "Affordable tuition with high-quality education",
    ],
    courses: [
      { name: "General Medicine (MBBS equivalent)", duration: "6 years", fees: "₹3.5 Lakh/year" },
      { name: "Dentistry (BDS equivalent)", duration: "5 years", fees: "₹3.8 Lakh/year" },
      { name: "Pharmacy", duration: "5 years", fees: "₹2.5 Lakh/year" },
      { name: "Nursing", duration: "4 years", fees: "₹2 Lakh/year" },
    ],
    admissions: {
      process: [
        "Qualify NEET UG with required cutoff score",
        "Submit application through KMR Global Education with documents",
        "Receive official admission/invitation letter (2-3 weeks)",
        "Complete document verification and apostille",
        "Apply for Russian student visa at the embassy",
        "Attend pre-departure briefing by KMR team",
        "Travel to Kazan — airport pickup arranged by university",
      ],
      eligibility: [
        "NEET UG qualified (any score)",
        "12th pass with Physics, Chemistry, Biology (50%+ aggregate)",
        "Age 17+ at the time of admission",
        "Valid Indian passport (minimum 18 months validity)",
        "No criminal record / good conduct certificate",
      ],
      importantDates: [
        { event: "Application Opens", date: "March 2026" },
        { event: "Early Admission Deadline", date: "June 2026" },
        { event: "Final Deadline", date: "August 2026" },
        { event: "Session Starts", date: "September 2026" },
      ],
    },
    placements: {
      overview: "Graduates from Kazan Federal University's medical program have excellent career prospects. With a globally recognized degree, students can practice medicine in India (after FMGE/NEXT), Russia, CIS countries, and pursue further specialization worldwide.",
      avgPackage: "₹5-8 LPA (India, post-FMGE)",
      highestPackage: "₹15+ LPA (Specialization)",
      topRecruiters: ["Indian Government Hospitals", "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Manipal Hospitals", "WHO", "UNICEF"],
      stats: [
        { label: "Graduates Practicing", value: "92%" },
        { label: "FMGE Pass Rate", value: "65-70%" },
        { label: "PG Admission Rate", value: "45%" },
        { label: "Global Career Rate", value: "25%" },
      ],
    },
    infrastructure: [
      "Modern anatomy and pathology labs with digital imaging",
      "Simulation center with mannequins for clinical practice",
      "University teaching hospital with 500+ beds",
      "Digital library with access to international medical journals",
      "Sports complex with gym, swimming pool, and courts",
      "Student cafeteria with international cuisine options",
      "24/7 Wi-Fi across campus and hostels",
      "Dedicated international student support office",
    ],
    scholarships: [
      { name: "Russian Government Scholarship", amount: "Full tuition waiver", eligibility: "Outstanding academic performance in 12th grade" },
      { name: "KFU Merit Scholarship", amount: "20-50% tuition discount", eligibility: "NEET score above 400/720" },
      { name: "KMR Education Grant", amount: "₹50,000 one-time", eligibility: "Students from economically weaker sections" },
    ],
    hostel: "Modern dormitories with 24/7 security, Wi-Fi, heating, common areas, and kitchen facilities. Rooms are shared (2-3 students) with private bathrooms. Hostel fee: ₹15,000-20,000/year.",
    indianFood: "Dedicated Indian mess on campus serving North & South Indian food. Multiple Indian restaurants in Kazan city. Indian grocery stores available for home cooking.",
    faqs: [
      { q: "Is Kazan Federal University good for MBBS?", a: "Yes, it's one of the top 10 universities in Russia with 220+ years of history and NMC/WHO recognition." },
      { q: "What is the total cost?", a: "Approximately ₹22-25 Lakh for the complete 6-year program including tuition, hostel, and living expenses." },
      { q: "Is the medium of instruction English?", a: "Yes, the entire MBBS program is taught in English. Basic Russian language classes are included for patient interaction." },
      { q: "Can I practice in India after graduating?", a: "Yes, after clearing FMGE/NEXT exam, you can practice medicine anywhere in India." },
    ],
  },
  "tbilisi-state-medical": {
    name: "Tbilisi State Medical University",
    country: "Georgia", flag: "🇬🇪", city: "Tbilisi", program: "MBBS",
    fees: "₹3.5 Lakh/year", ranking: "#1 in Georgia", established: "1918",
    recognition: "NMC, WHO, WFME recognized",
    overview: "Tbilisi State Medical University (TSMU) is Georgia's premier medical institution, established in 1918. Following European Bologna Process standards, TSMU offers globally recognized medical degrees with modern teaching methods and excellent clinical training opportunities.",
    highlights: [
      "#1 ranked medical university in Georgia",
      "Follows European Bologna Process standards",
      "Over 100 years of medical education excellence",
      "NMC, WHO, WFME recognized",
      "Visa-free entry for Indian students",
      "Affordable European medical education",
    ],
    courses: [
      { name: "Medicine (MD/MBBS equivalent)", duration: "6 years", fees: "₹3.5 Lakh/year" },
      { name: "Dentistry", duration: "5 years", fees: "₹3.8 Lakh/year" },
      { name: "Pharmacy", duration: "4 years", fees: "₹2.8 Lakh/year" },
      { name: "Public Health", duration: "4 years", fees: "₹2.5 Lakh/year" },
    ],
    admissions: {
      process: [
        "Qualify NEET UG",
        "Apply through KMR with required documents",
        "Receive admission letter (1-2 weeks)",
        "No visa required for entry — visa-free for Indians",
        "Obtain residence permit after arrival",
        "Session begins September",
      ],
      eligibility: [
        "NEET UG qualified",
        "12th with PCB (50%+)",
        "Age 17+",
        "Valid passport",
      ],
      importantDates: [
        { event: "Applications Open", date: "February 2026" },
        { event: "Deadline", date: "August 2026" },
        { event: "Session Starts", date: "September 2026" },
      ],
    },
    placements: {
      overview: "TSMU graduates are well-placed globally. The European standard degree allows practice in EU countries with additional licensing, while Indian graduates can practice after FMGE/NEXT.",
      avgPackage: "₹5-10 LPA",
      highestPackage: "₹20+ LPA (EU practice)",
      topRecruiters: ["Indian Hospitals", "European Healthcare Systems", "WHO", "Research Institutions"],
      stats: [
        { label: "Global Employment", value: "90%" },
        { label: "EU Practice Rate", value: "30%" },
        { label: "FMGE Pass Rate", value: "60%" },
      ],
    },
    infrastructure: [
      "Modern clinical simulation center",
      "University hospital with 1000+ beds",
      "Digital anatomical theater",
      "Research laboratories",
      "Library with e-journal access",
      "Sports facilities",
    ],
    scholarships: [
      { name: "Georgian Government Scholarship", amount: "Partial tuition waiver", eligibility: "Academic excellence" },
      { name: "KMR Need-Based Grant", amount: "₹50,000", eligibility: "Economically disadvantaged students" },
    ],
    hostel: "University hostels near campus with all facilities including Wi-Fi, laundry, and common rooms. Cost: ₹10,000-15,000/year.",
    indianFood: "Indian restaurants and mess facilities in Tbilisi. Growing Indian community ensures food accessibility.",
    faqs: [
      { q: "Do I need a visa for Georgia?", a: "No, Indian students get visa-free entry with a valid admission letter." },
      { q: "Is TSMU degree valid in India?", a: "Yes, TSMU is NMC recognized. Graduates must clear FMGE/NEXT to practice in India." },
    ],
  },
};

// Default fallback for colleges not in detailed data
export const defaultCollegeDetail: CollegeDetailData = {
  name: "Partner University",
  country: "Abroad", flag: "🌍", city: "International", program: "MBBS/MS",
  fees: "Contact for details", ranking: "Internationally recognized", established: "-",
  recognition: "Internationally recognized",
  overview: "This is one of our esteemed partner universities offering globally recognized degrees. Contact KMR Global Education for detailed information about this institution, including courses, fees, admission process, and placement records.",
  highlights: [
    "Internationally recognized degrees",
    "Quality education at affordable fees",
    "Comprehensive student support",
    "Modern campus facilities",
  ],
  courses: [
    { name: "Medicine / Engineering / Business", duration: "Varies", fees: "Contact for details" },
  ],
  admissions: {
    process: ["Contact KMR Global Education for the admission process"],
    eligibility: ["Relevant qualifying exam", "Academic transcripts", "Valid passport"],
    importantDates: [],
  },
  placements: {
    overview: "Our partner universities have strong placement records. Contact us for detailed statistics.",
    avgPackage: "Contact for details",
    highestPackage: "Contact for details",
    topRecruiters: [],
    stats: [],
  },
  infrastructure: ["Modern campus facilities", "Library", "Labs", "Student accommodation"],
  scholarships: [],
  hostel: "Student accommodation available. Contact for details.",
  indianFood: "Options available in the area.",
  faqs: [],
};
