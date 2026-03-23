import { programsData } from "@/data/programs";
import ProgramPageTemplate from "@/components/templates/ProgramPageTemplate";

export const MBBSAbroad = () => <ProgramPageTemplate data={programsData["mbbs-abroad"]} />;
export const MSAbroad = () => <ProgramPageTemplate data={programsData["ms-abroad"]} />;
