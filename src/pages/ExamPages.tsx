import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle, BookOpen, Calendar, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ExamPageProps {
  metaTitle: string; metaDescription: string; heroLabel: string; heroTitle: string; heroSubtitle: string;
  overview: string; eligibility: string[]; pattern: string[]; tips: string[];
  faqs: { q: string; a: string }[];
}

const ExamLayout = ({ metaTitle, metaDescription, heroLabel, heroTitle, heroSubtitle, overview, eligibility, pattern, tips, faqs }: ExamPageProps) => (
  <StandardPageTemplate metaTitle={metaTitle} metaDescription={metaDescription} heroLabel={heroLabel} heroTitle={heroTitle} heroSubtitle={heroSubtitle}>
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle label="Overview" title="About This Exam" />
        <AnimateIn animation="fade-up"><p className="text-muted-foreground leading-relaxed text-center">{overview}</p></AnimateIn>
      </div>
    </section>
    <section className="py-16 md:py-24 section-light">
      <div className="container max-w-4xl">
        <SectionTitle label="Eligibility" title="Who Can Apply?" />
        <div className="space-y-3">
          {eligibility.map((e, i) => (
            <AnimateIn key={i} animation="fade-up" delay={i * 60}>
              <div className="flex gap-3 items-start p-4 bg-background rounded-xl border">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-sm text-foreground">{e}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <SectionTitle label="Exam Pattern" title="Structure & Format" />
        <div className="grid sm:grid-cols-2 gap-3">
          {pattern.map((p, i) => (
            <AnimateIn key={i} animation="fade-up" delay={i * 60}>
              <div className="flex gap-3 items-start p-4 bg-secondary rounded-xl">
                <FileText className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-sm text-foreground">{p}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 section-light">
      <div className="container max-w-4xl">
        <SectionTitle label="Preparation" title="Tips & Strategy" />
        <div className="space-y-3">
          {tips.map((t, i) => (
            <AnimateIn key={i} animation="fade-up" delay={i * 60}>
              <div className="flex gap-3 items-start p-4 bg-background rounded-xl border">
                <BookOpen className="w-5 h-5 text-accent shrink-0 mt-0.5" /><span className="text-sm text-foreground">{t}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <SectionTitle label="FAQ" title="Frequently Asked Questions" />
        <AnimateIn animation="fade-up">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5 text-[15px]">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateIn>
      </div>
    </section>
  </StandardPageTemplate>
);

export const NeetUGGuide = () => (
  <ExamLayout
    metaTitle="NEET UG 2026 — Complete Guide, Eligibility & Tips | KMR"
    metaDescription="NEET UG 2026 guide — eligibility, exam pattern, preparation tips and how it affects MBBS abroad admissions."
    heroLabel="Exam Guide" heroTitle="NEET UG 2026 — Complete Guide" heroSubtitle="Everything you need to know about NEET UG — eligibility, pattern, preparation, and how it connects to studying MBBS abroad."
    overview="NEET UG (National Eligibility cum Entrance Test for Undergraduates) is the mandatory entrance exam for admission to MBBS, BDS, and other medical courses in India. Since 2021, NMC mandates NEET qualification for Indian students seeking MBBS admission abroad as well."
    eligibility={["Indian citizens, NRIs, OCI, and PIO candidates", "Passed 12th with Physics, Chemistry, and Biology", "Minimum 50% aggregate in PCB (40% for reserved)", "Age: 17 years at time of admission (no upper limit)", "Must be registered on NTA website"]}
    pattern={["Total Questions: 200 (180 to attempt)", "Subjects: Physics, Chemistry, Biology (Botany + Zoology)", "Duration: 3 hours 20 minutes", "Marking: +4 for correct, -1 for incorrect", "Mode: Pen and paper (offline)", "Languages: 13 languages available"]}
    tips={["Start early — begin preparation from Class 11", "Focus on NCERT textbooks as the primary source", "Practice previous years' papers (minimum last 10 years)", "Take regular mock tests to build speed and accuracy", "Focus on Biology — it carries 50% of total marks", "Join a coaching or online program for structured preparation", "Maintain a balanced schedule with revision time"]}
    faqs={[
      { q: "Is NEET required for MBBS abroad?", a: "Yes, NMC mandates NEET qualification for Indian students going abroad for MBBS since 2021." },
      { q: "What is the cutoff for MBBS abroad?", a: "The cutoff is much lower than Indian government colleges. Generally, qualifying NEET is sufficient for most countries." },
      { q: "How many times can I attempt NEET?", a: "There is no limit on the number of attempts as the upper age limit has been removed." },
    ]}
  />
);

export const NeetPGGuide = () => (
  <ExamLayout
    metaTitle="NEET PG 2026 — Guide for MD/MS Admission | KMR"
    metaDescription="NEET PG 2026 complete guide — eligibility, pattern, and preparation tips for PG medical admissions."
    heroLabel="Exam Guide" heroTitle="NEET PG 2026 — Complete Guide" heroSubtitle="Your guide to NEET PG for MD/MS/diploma admissions in Indian medical colleges."
    overview="NEET PG is the entrance exam for postgraduate medical courses (MD/MS/Diploma) in India. It is conducted by NBE (National Board of Examinations) and is mandatory for all MBBS graduates seeking PG medical seats."
    eligibility={["MBBS degree from a recognized institution", "Completion of mandatory internship", "Permanent or provisional registration with MCI/NMC or state medical council", "FMGE clearance required for foreign medical graduates"]}
    pattern={["Total Questions: 200 MCQs", "Duration: 3 hours 30 minutes", "Mode: Computer-based (online)", "Subjects: All 19 clinical and pre/para-clinical subjects", "Marking: +4 for correct, -1 for incorrect"]}
    tips={["Start preparation during internship", "Focus on high-yield subjects: Medicine, Surgery, OBG, Pediatrics", "Use QBank resources for question practice", "Take at least 50+ mock tests before the exam", "Revise pharmacology and microbiology thoroughly"]}
    faqs={[
      { q: "Can foreign MBBS graduates write NEET PG?", a: "Yes, after clearing FMGE/NEXT and completing required internship." },
      { q: "What score is needed for a good PG seat?", a: "This varies yearly. Generally, 500+ out of 800 gives access to good specializations." },
    ]}
  />
);

export const EntranceExamsOverview = () => (
  <ExamLayout
    metaTitle="Entrance Exams for Study Abroad — NEET, GRE, GMAT, IELTS | KMR"
    metaDescription="Overview of all entrance exams for studying abroad — NEET, GRE, GMAT, IELTS, TOEFL and more."
    heroLabel="Exam Overview" heroTitle="Entrance Exams for Studying Abroad" heroSubtitle="A comprehensive overview of all the key entrance and proficiency exams needed for different study abroad programs."
    overview="Depending on your chosen program and destination country, you may need to take one or more entrance exams. This guide covers all the major tests — from NEET for medical to GRE for engineering to IELTS for language proficiency."
    eligibility={["NEET UG — Required for MBBS abroad (Indian students)", "GRE — Required/optional for MS in USA and some other countries", "GMAT — Required for MBA programs, especially top schools", "IELTS/TOEFL — English proficiency for non-English-speaking students", "PTE — Alternative to IELTS accepted by many universities"]}
    pattern={["NEET UG: 200 MCQs, offline, 3h 20m", "GRE: Verbal + Quant + AWA, online, ~3h 45m", "GMAT: Verbal + Quant + IR + AWA, online, ~3h 30m", "IELTS: Listening + Reading + Writing + Speaking, 2h 45m", "TOEFL: Reading + Listening + Speaking + Writing, 3h+", "PTE: Speaking + Writing + Reading + Listening, ~3h"]}
    tips={["Start preparation at least 3-6 months before exam date", "Take diagnostic tests to identify weak areas", "Use official preparation materials and practice tests", "For IELTS/TOEFL, practice speaking and writing daily", "For GRE, focus on vocabulary and quantitative reasoning", "Register early to get preferred test dates and centers"]}
    faqs={[
      { q: "Which exams do I need for MBBS abroad?", a: "NEET UG is the primary requirement. No IELTS needed for English-medium programs in most countries." },
      { q: "Is GRE mandatory for MS?", a: "It depends on the university. Many US universities still require it, but UK and EU universities generally don't." },
      { q: "Can I take IELTS or TOEFL?", a: "Both are widely accepted. Check your target university's preference. PTE is also accepted by many." },
    ]}
  />
);
