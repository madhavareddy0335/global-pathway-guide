import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CareerGuidance from "./pages/CareerGuidance";
import { MBBSAbroad, MSAbroad } from "./pages/ProgramPages";
import CountryPage from "./pages/CountryPage";
import CollegeListing from "./pages/CollegeListing";
import CollegeDetail from "./pages/CollegeDetail";
import { CareerAfterMBBS, CareerAfterMS, CountrySelectionGuide, BudgetPlanningGuide, CourseSelectionGuide } from "./pages/CareerPages";
import ExamListing from "./pages/ExamListing";
import ExamDetail from "./pages/ExamDetail";
import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career-guidance" element={<CareerGuidance />} />

          {/* Programs */}
          <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
          <Route path="/ms-abroad" element={<MSAbroad />} />

          {/* Country Pages */}
          <Route path="/mbbs-in-russia" element={<CountryPage />} />
          <Route path="/mbbs-in-georgia" element={<CountryPage />} />
          <Route path="/mbbs-in-serbia" element={<CountryPage />} />
          <Route path="/mbbs-in-kazakhstan" element={<CountryPage />} />
          <Route path="/mbbs-in-uzbekistan" element={<CountryPage />} />
          <Route path="/mbbs-in-tajikistan" element={<CountryPage />} />
          <Route path="/mbbs-in-kyrgyzstan" element={<CountryPage />} />
          <Route path="/ms-in-usa" element={<CountryPage />} />
          <Route path="/ms-in-uk" element={<CountryPage />} />
          <Route path="/ms-in-australia" element={<CountryPage />} />
          <Route path="/ms-in-germany" element={<CountryPage />} />
          <Route path="/ms-in-italy" element={<CountryPage />} />
          <Route path="/ms-in-ireland" element={<CountryPage />} />

          {/* Colleges */}
          <Route path="/colleges" element={<CollegeListing />} />
          <Route path="/colleges/:slug" element={<CollegeDetail />} />

          {/* Career Guides */}
          <Route path="/career/after-mbbs" element={<CareerAfterMBBS />} />
          <Route path="/career/after-ms" element={<CareerAfterMS />} />
          <Route path="/career/country-selection-guide" element={<CountrySelectionGuide />} />
          <Route path="/career/budget-planning-guide" element={<BudgetPlanningGuide />} />
          <Route path="/career/course-selection-guide" element={<CourseSelectionGuide />} />

          {/* Exams */}
          <Route path="/exams" element={<ExamListing />} />
          <Route path="/exams/:slug" element={<ExamDetail />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
