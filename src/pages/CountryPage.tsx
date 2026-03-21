import { useLocation } from "react-router-dom";
import { countriesData } from "@/data/countries";
import CountryPageTemplate from "@/components/templates/CountryPageTemplate";
import NotFound from "./NotFound";

const CountryPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const data = countriesData[slug];

  if (!data) return <NotFound />;

  return <CountryPageTemplate data={data} />;
};

export default CountryPage;
