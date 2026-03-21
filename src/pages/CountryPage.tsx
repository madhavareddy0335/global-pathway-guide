import { useParams } from "react-router-dom";
import { countriesData } from "@/data/countries";
import CountryPageTemplate from "@/components/templates/CountryPageTemplate";
import NotFound from "./NotFound";

const CountryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? countriesData[slug] : undefined;

  if (!data) return <NotFound />;

  return <CountryPageTemplate data={data} />;
};

export default CountryPage;
