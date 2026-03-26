export interface ExamData {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  overview: string;
  applicationProcess: string[];
  eligibility: string[];
  preparation: string[];
  examDetails: { label: string; value: string }[];
  results: string;
  examDates: { event: string; date: string }[];
  syllabus: { subject: string; topics: string[] }[];
  pastPapers: { year: string; link: string }[];
  acceptingColleges: { name: string; country: string; slug: string }[];
  faqs: { q: string; a: string }[];
}

export const examsData: Record<string, ExamData> = {
  "neet-ug": {
    slug: "neet-ug",
    name: "NEET UG",
    category: "Medical",
    metaTitle: "NEET UG 2026 — Complete Guide, Syllabus, Dates & Preparation | MPR",
    metaDescription: "NEET UG 2026 complete guide — eligibility, syllabus, exam dates, preparation tips, past papers, and accepting colleges.",
    heroSubtitle: "The gateway to MBBS admission in India and abroad. Everything you need to know in one place.",
    overview: "NEET UG (National Eligibility cum Entrance Test for Undergraduates) is India's single largest medical entrance exam, conducted by NTA. It is mandatory for MBBS, BDS, AYUSH, and nursing admissions in India and is also required for Indian students seeking MBBS admission abroad since 2021.",
    applicationProcess: [
      "Visit NTA NEET official website and register",
      "Fill in personal, academic, and contact details",
      "Upload photograph, signature, and required documents",
      "Select preferred exam city centers (up to 4)",
      "Pay application fee online (₹1,600 General / ₹900 SC-ST)",
      "Download and verify admit card before exam",
    ],
    eligibility: [
      "Indian citizens, NRIs, OCI, and PIO holders",
      "Passed 12th with Physics, Chemistry, and Biology/Biotechnology",
      "Minimum 50% aggregate in PCB (40% for SC/ST/OBC)",
      "Age: 17+ at time of admission (no upper age limit)",
      "Must hold Aadhaar card (for Indian applicants)",
    ],
    preparation: [
      "Master NCERT textbooks — they form 60-70% of questions",
      "Solve last 10 years' question papers religiously",
      "Take at least 100 mock tests for time management",
      "Focus heavily on Biology — it carries 360/720 marks",
      "Create short revision notes for formulas and reactions",
      "Maintain health with proper sleep and exercise",
    ],
    examDetails: [
      { label: "Conducting Body", value: "NTA (National Testing Agency)" },
      { label: "Mode", value: "Offline (Pen & Paper)" },
      { label: "Duration", value: "3 hours 20 minutes" },
      { label: "Total Questions", value: "200 (attempt 180)" },
      { label: "Total Marks", value: "720" },
      { label: "Marking", value: "+4 correct, -1 wrong" },
      { label: "Subjects", value: "Physics, Chemistry, Biology" },
      { label: "Languages", value: "13 languages available" },
    ],
    results: "Results are typically declared 4-6 weeks after the exam on the NTA website. Candidates can check scores using their application number and date of birth. All India Rank, percentile score, and category-wise cutoffs are published alongside.",
    examDates: [
      { event: "Registration Opens", date: "February 2026" },
      { event: "Last Date to Apply", date: "March 2026" },
      { event: "Admit Card Release", date: "April 2026" },
      { event: "Exam Date", date: "May 2026" },
      { event: "Result Declaration", date: "June 2026" },
      { event: "Counselling Begins", date: "July 2026" },
    ],
    syllabus: [
      { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Optics", "Electromagnetism", "Modern Physics", "Waves & Sound", "Kinematics", "Gravitation"] },
      { subject: "Chemistry", topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Chemical Bonding", "Coordination Compounds", "Electrochemistry", "Chemical Kinetics"] },
      { subject: "Biology", topics: ["Human Physiology", "Plant Physiology", "Genetics & Evolution", "Ecology & Environment", "Cell Biology", "Biotechnology", "Reproduction", "Animal Kingdom"] },
    ],
    pastPapers: [
      { year: "NEET UG 2025", link: "#" },
      { year: "NEET UG 2024", link: "#" },
      { year: "NEET UG 2023", link: "#" },
      { year: "NEET UG 2022", link: "#" },
      { year: "NEET UG 2021", link: "#" },
    ],
    acceptingColleges: [
      { name: "Kazan Federal University", country: "Russia", slug: "kazan-federal-university" },
      { name: "Tbilisi State Medical University", country: "Georgia", slug: "tbilisi-state-medical" },
      { name: "Kazakh National Medical University", country: "Kazakhstan", slug: "kazakh-national-medical" },
      { name: "Tashkent Medical Academy", country: "Uzbekistan", slug: "tashkent-medical" },
      { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", slug: "kyrgyz-medical" },
    ],
    faqs: [
      { q: "Is NEET required for MBBS abroad?", a: "Yes, since 2021, NMC mandates NEET qualification for Indian students going abroad for MBBS." },
      { q: "What is the qualifying cutoff?", a: "For General category, 50th percentile. For SC/ST/OBC, 40th percentile." },
      { q: "How many attempts are allowed?", a: "Unlimited attempts — there is no cap on the number of times you can appear." },
      { q: "Is NEET conducted online?", a: "No, NEET UG is an offline (pen and paper) exam only." },
    ],
  },
  "neet-pg": {
    slug: "neet-pg",
    name: "NEET PG",
    category: "Medical PG",
    metaTitle: "NEET PG 2026 — Guide for MD/MS Admission | MPR",
    metaDescription: "NEET PG 2026 guide — eligibility, syllabus, dates, and preparation for postgraduate medical admissions.",
    heroSubtitle: "Your gateway to MD/MS/Diploma admissions in Indian medical colleges.",
    overview: "NEET PG is the national-level entrance exam for postgraduate medical courses (MD/MS/Diploma) in India, conducted by NBE. It is mandatory for all MBBS graduates, including those from foreign universities who have cleared FMGE.",
    applicationProcess: [
      "Register on NBE's official website",
      "Fill personal and academic details with MBBS certificate",
      "Upload photo, signature, and MCI/NMC registration",
      "Pay application fee (₹3,750 General / ₹2,750 SC-ST)",
      "Select exam center preferences",
      "Download admit card from NBE website",
    ],
    eligibility: [
      "MBBS degree from a recognized institution",
      "Completed mandatory internship",
      "Permanent/provisional NMC/MCI registration",
      "FMGE clearance for foreign medical graduates",
    ],
    preparation: [
      "Begin preparation during internship for early advantage",
      "Focus on high-yield subjects: Medicine, Surgery, OBG, Pediatrics",
      "Use reputed QBank platforms for extensive MCQ practice",
      "Take 50+ full-length mock tests before the exam",
      "Revise Pharmacology and Microbiology thoroughly",
      "Form study groups for discussion-based learning",
    ],
    examDetails: [
      { label: "Conducting Body", value: "NBE (National Board of Examinations)" },
      { label: "Mode", value: "Computer-Based (Online)" },
      { label: "Duration", value: "3 hours 30 minutes" },
      { label: "Total Questions", value: "200 MCQs" },
      { label: "Total Marks", value: "800" },
      { label: "Marking", value: "+4 correct, -1 wrong" },
      { label: "Subjects", value: "All 19 clinical & pre-clinical subjects" },
    ],
    results: "Results declared within 2-3 weeks on the NBE website. Score cards and merit lists are published for counselling eligibility.",
    examDates: [
      { event: "Registration Opens", date: "November 2025" },
      { event: "Last Date to Apply", date: "December 2025" },
      { event: "Exam Date", date: "March 2026" },
      { event: "Result Declaration", date: "April 2026" },
      { event: "Counselling", date: "May-June 2026" },
    ],
    syllabus: [
      { subject: "Pre-Clinical", topics: ["Anatomy", "Physiology", "Biochemistry", "Pharmacology", "Microbiology", "Pathology", "Forensic Medicine"] },
      { subject: "Clinical", topics: ["Medicine", "Surgery", "OBG", "Pediatrics", "Ophthalmology", "ENT", "Orthopedics", "Dermatology", "Psychiatry", "Radiology", "Anesthesia"] },
    ],
    pastPapers: [
      { year: "NEET PG 2025", link: "#" },
      { year: "NEET PG 2024", link: "#" },
      { year: "NEET PG 2023", link: "#" },
    ],
    acceptingColleges: [
      { name: "AIIMS New Delhi", country: "India", slug: "#" },
      { name: "CMC Vellore", country: "India", slug: "#" },
      { name: "JIPMER Puducherry", country: "India", slug: "#" },
    ],
    faqs: [
      { q: "Can foreign MBBS graduates write NEET PG?", a: "Yes, after clearing FMGE/NEXT and completing internship." },
      { q: "What score is needed for a good seat?", a: "Generally 500+ out of 800 for competitive specializations." },
    ],
  },
  "gre": {
    slug: "gre",
    name: "GRE",
    category: "MS Abroad",
    metaTitle: "GRE 2026 — Complete Guide, Syllabus & Preparation | MPR",
    metaDescription: "GRE 2026 guide — registration, syllabus, preparation tips, and accepting universities for MS abroad.",
    heroSubtitle: "The standard admission test for MS programs in the USA and other countries.",
    overview: "The Graduate Record Examination (GRE) is a standardized test administered by ETS, widely accepted for admission to graduate programs worldwide. It tests verbal reasoning, quantitative reasoning, and analytical writing skills.",
    applicationProcess: [
      "Create an ETS account at ets.org",
      "Choose test type: GRE General or Subject",
      "Select test date and center",
      "Pay registration fee ($220 USD)",
      "Receive confirmation and test-day instructions",
      "Bring valid ID on test day",
    ],
    eligibility: [
      "No age or academic eligibility restrictions",
      "Open to anyone planning graduate school",
      "Valid government-issued ID required",
      "Recommended: completed undergraduate coursework",
    ],
    preparation: [
      "Start with official ETS preparation material",
      "Build vocabulary using word lists (Barron's, Magoosh)",
      "Practice quantitative with timed drills",
      "Write at least 10 practice AWA essays",
      "Take 5+ full-length mock tests under timed conditions",
      "Target: 320+ for competitive MS programs",
    ],
    examDetails: [
      { label: "Conducting Body", value: "ETS (Educational Testing Service)" },
      { label: "Mode", value: "Computer-Based (Online/Center)" },
      { label: "Duration", value: "~3 hours 45 minutes" },
      { label: "Sections", value: "Verbal, Quantitative, AWA" },
      { label: "Score Range", value: "260-340 (V+Q)" },
      { label: "AWA Score", value: "0-6" },
      { label: "Validity", value: "5 years" },
    ],
    results: "Unofficial Verbal and Quant scores available immediately after the test. Official scores including AWA sent within 10-15 days.",
    examDates: [
      { event: "Registration", date: "Year-round" },
      { event: "Test Availability", date: "Multiple dates monthly" },
      { event: "Score Report", date: "10-15 days after test" },
    ],
    syllabus: [
      { subject: "Verbal Reasoning", topics: ["Reading Comprehension", "Text Completion", "Sentence Equivalence", "Vocabulary in Context"] },
      { subject: "Quantitative Reasoning", topics: ["Arithmetic", "Algebra", "Geometry", "Data Analysis", "Word Problems"] },
      { subject: "Analytical Writing", topics: ["Analyze an Issue", "Analyze an Argument"] },
    ],
    pastPapers: [
      { year: "ETS Official Practice Test 1", link: "#" },
      { year: "ETS Official Practice Test 2", link: "#" },
      { year: "PowerPrep Online Tests", link: "#" },
    ],
    acceptingColleges: [
      { name: "MIT", country: "USA", slug: "mit" },
      { name: "Stanford University", country: "USA", slug: "stanford" },
      { name: "Carnegie Mellon University", country: "USA", slug: "carnegie-mellon" },
      { name: "University of Oxford", country: "UK", slug: "oxford" },
    ],
    faqs: [
      { q: "Is GRE mandatory for MS?", a: "It depends on the university. Many US universities require it, while UK/EU universities often don't." },
      { q: "What is a good GRE score?", a: "320+ is considered competitive for top MS programs." },
      { q: "How many times can I take GRE?", a: "Up to 5 times per year, with a 21-day gap between attempts." },
    ],
  },
  "ielts": {
    slug: "ielts",
    name: "IELTS",
    category: "Language",
    metaTitle: "IELTS 2026 — Complete Guide, Tips & Preparation | MPR",
    metaDescription: "IELTS exam guide — registration, preparation tips, band scores, and how it affects your study abroad application.",
    heroSubtitle: "The world's most popular English proficiency test for study abroad and immigration.",
    overview: "IELTS (International English Language Testing System) is jointly managed by British Council, IDP, and Cambridge Assessment. It assesses English proficiency across listening, reading, writing, and speaking — and is accepted by over 11,000 institutions worldwide.",
    applicationProcess: [
      "Register on British Council or IDP IELTS website",
      "Choose Academic or General Training module",
      "Select test date and center",
      "Pay registration fee (₹16,250)",
      "Upload photo and ID proof",
      "Attend test on scheduled date",
    ],
    eligibility: [
      "No minimum educational qualification required",
      "Open to anyone 16+ years of age",
      "Valid passport or national ID required",
      "Recommended for non-native English speakers",
    ],
    preparation: [
      "Practice all four modules daily — Listening, Reading, Writing, Speaking",
      "Watch English news/podcasts to improve listening comprehension",
      "Write essays daily with 250+ word targets",
      "Practice speaking with a partner or record yourself",
      "Use official Cambridge IELTS practice books (13-18)",
      "Target: 6.5+ overall for most universities",
    ],
    examDetails: [
      { label: "Conducting Bodies", value: "British Council, IDP, Cambridge" },
      { label: "Mode", value: "Paper/Computer-Based" },
      { label: "Duration", value: "2 hours 45 minutes" },
      { label: "Sections", value: "Listening, Reading, Writing, Speaking" },
      { label: "Score Range", value: "0-9 (band score)" },
      { label: "Validity", value: "2 years" },
      { label: "Fee", value: "₹16,250" },
    ],
    results: "Results available in 13 days for paper-based and 3-5 days for computer-based tests. Available online and via postal TRF.",
    examDates: [
      { event: "Registration", date: "Year-round" },
      { event: "Test Frequency", date: "4 times per month" },
      { event: "Computer-Based", date: "Almost daily" },
    ],
    syllabus: [
      { subject: "Listening", topics: ["Social Conversations", "Monologues", "Academic Discussions", "Lectures"] },
      { subject: "Reading", topics: ["Factual Texts", "Analytical Texts", "Descriptive Passages", "True/False/Not Given"] },
      { subject: "Writing", topics: ["Task 1: Data/Process Description", "Task 2: Essay (250+ words)"] },
      { subject: "Speaking", topics: ["Introduction & Interview", "Cue Card (2 min)", "Discussion"] },
    ],
    pastPapers: [
      { year: "Cambridge IELTS 18", link: "#" },
      { year: "Cambridge IELTS 17", link: "#" },
      { year: "Cambridge IELTS 16", link: "#" },
    ],
    acceptingColleges: [
      { name: "University of Oxford", country: "UK", slug: "oxford" },
      { name: "University of Melbourne", country: "Australia", slug: "melbourne" },
      { name: "Trinity College Dublin", country: "Ireland", slug: "trinity-dublin" },
    ],
    faqs: [
      { q: "Academic or General Training?", a: "Academic for university admissions, General Training for immigration/work." },
      { q: "What band score do I need?", a: "Most universities require 6.0-7.0 overall. Top schools need 7.0+." },
      { q: "Can I retake IELTS?", a: "Yes, unlimited retakes. You can also do One Skill Retake now." },
    ],
  },
  "toefl": {
    slug: "toefl",
    name: "TOEFL",
    category: "Language",
    metaTitle: "TOEFL 2026 — Complete Guide & Preparation Tips | MPR",
    metaDescription: "TOEFL exam guide — registration, preparation, scores, and accepting universities worldwide.",
    heroSubtitle: "Widely accepted English proficiency test, especially for US university admissions.",
    overview: "TOEFL (Test of English as a Foreign Language) by ETS measures English proficiency for non-native speakers. Accepted by 12,000+ institutions in 160+ countries, it's particularly popular for US and Canadian university admissions.",
    applicationProcess: [
      "Register at ets.org/toefl",
      "Create ETS account",
      "Choose test date and center or home edition",
      "Pay fee ($185-$200 USD)",
      "Receive test confirmation",
      "Take the test",
    ],
    eligibility: [
      "No specific eligibility requirements",
      "Open to all ages",
      "Valid government ID required",
      "Recommended for non-native English speakers",
    ],
    preparation: [
      "Use ETS official TOEFL iBT preparation materials",
      "Practice integrated tasks (Reading + Listening → Speaking/Writing)",
      "Improve note-taking skills for lecture-based questions",
      "Target: 90+ for most programs, 100+ for competitive schools",
      "Take 3+ full mock tests",
    ],
    examDetails: [
      { label: "Conducting Body", value: "ETS" },
      { label: "Mode", value: "Internet-Based (iBT)" },
      { label: "Duration", value: "~3 hours" },
      { label: "Sections", value: "Reading, Listening, Speaking, Writing" },
      { label: "Score Range", value: "0-120" },
      { label: "Validity", value: "2 years" },
    ],
    results: "Scores available within 4-8 days for most test dates.",
    examDates: [
      { event: "Registration", date: "Year-round" },
      { event: "Test Frequency", date: "50+ dates per year" },
    ],
    syllabus: [
      { subject: "Reading", topics: ["Academic Passages", "Inference", "Vocabulary in Context"] },
      { subject: "Listening", topics: ["Lectures", "Conversations", "Note-taking"] },
      { subject: "Speaking", topics: ["Independent Tasks", "Integrated Tasks"] },
      { subject: "Writing", topics: ["Integrated Essay", "Academic Discussion"] },
    ],
    pastPapers: [
      { year: "ETS Official Practice Test", link: "#" },
      { year: "TOEFL Practice Online", link: "#" },
    ],
    acceptingColleges: [
      { name: "MIT", country: "USA", slug: "mit" },
      { name: "Stanford University", country: "USA", slug: "stanford" },
      { name: "Carnegie Mellon University", country: "USA", slug: "carnegie-mellon" },
    ],
    faqs: [
      { q: "TOEFL or IELTS?", a: "Both are widely accepted. TOEFL is preferred for US universities, IELTS for UK/Australia." },
      { q: "What is a good TOEFL score?", a: "90+ for most programs, 100+ for competitive schools." },
    ],
  },
  "gmat": {
    slug: "gmat",
    name: "GMAT",
    category: "Business",
    metaTitle: "GMAT 2026 — Complete Guide for MBA Aspirants | MPR",
    metaDescription: "GMAT exam guide — registration, preparation, scores, and top MBA programs accepting GMAT.",
    heroSubtitle: "The gold standard admission test for top MBA programs worldwide.",
    overview: "GMAT (Graduate Management Admission Test) by GMAC is the most widely accepted exam for MBA and business school admissions. It assesses analytical, quantitative, verbal, and data skills critical for business school success.",
    applicationProcess: [
      "Register at mba.com",
      "Create GMAC account",
      "Choose test center or online format",
      "Pay fee ($275 USD)",
      "Schedule test date",
      "Take the exam",
    ],
    eligibility: [
      "No specific educational requirements",
      "Minimum age 18 years (recommended)",
      "Valid passport required",
      "Open to all nationalities",
    ],
    preparation: [
      "Use official GMAC prep materials and practice exams",
      "Focus on Data Sufficiency — unique to GMAT",
      "Build strong verbal reasoning with Critical Reasoning practice",
      "Target: 700+ for top business schools",
      "Practice with 6+ official mock tests",
    ],
    examDetails: [
      { label: "Conducting Body", value: "GMAC" },
      { label: "Mode", value: "Computer-Based" },
      { label: "Duration", value: "3 hours 7 minutes (Focus Edition)" },
      { label: "Sections", value: "Verbal, Quantitative, Data Insights" },
      { label: "Score Range", value: "205-805" },
      { label: "Validity", value: "5 years" },
    ],
    results: "Unofficial scores available immediately. Official score report within 3-5 business days.",
    examDates: [
      { event: "Registration", date: "Year-round" },
      { event: "Test Availability", date: "Multiple dates monthly" },
    ],
    syllabus: [
      { subject: "Quantitative", topics: ["Problem Solving", "Data Sufficiency", "Arithmetic", "Algebra", "Geometry"] },
      { subject: "Verbal", topics: ["Reading Comprehension", "Critical Reasoning", "Sentence Correction"] },
      { subject: "Data Insights", topics: ["Multi-Source Reasoning", "Graphics Interpretation", "Table Analysis", "Two-Part Analysis"] },
    ],
    pastPapers: [
      { year: "GMAC Official Practice Exam 1-6", link: "#" },
    ],
    acceptingColleges: [],
    faqs: [
      { q: "GRE or GMAT for MBA?", a: "GMAT is preferred for top MBA programs but GRE is increasingly accepted." },
      { q: "What is a good GMAT score?", a: "700+ for top 20 programs, 650+ for most reputed schools." },
    ],
  },
};

export const examsList = Object.values(examsData);
