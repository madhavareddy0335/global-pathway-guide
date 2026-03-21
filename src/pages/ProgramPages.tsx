import { programsData } from "@/data/programs";
import ProgramPageTemplate from "@/components/templates/ProgramPageTemplate";

export const MBBSAbroad = () => <ProgramPageTemplate data={programsData["mbbs-abroad"]} />;
export const MSAbroad = () => <ProgramPageTemplate data={programsData["ms-abroad"]} />;
export const MBAAbroad = () => <ProgramPageTemplate data={programsData["mba-abroad"]} />;
export const DentalAbroad = () => <ProgramPageTemplate data={programsData["dental-abroad"]} />;
