import { countryImages } from "@/assets/countries";

export interface CollegeListItem {
  name: string;
  country: string;
  flag: string;
  program: string;
  fees: string;
  feesNum: number;
  city: string;
  ranking: string;
  slug: string;
}

const countryKeyMap: Record<string, string> = {
  Russia: "russia",
  Georgia: "georgia",
  Kazakhstan: "kazakhstan",
  Uzbekistan: "uzbekistan",
  Tajikistan: "tajikistan",
  Kyrgyzstan: "kyrgyzstan",
  USA: "usa",
  UK: "uk",
  Germany: "germany",
  Ireland: "ireland",
  Australia: "australia",
  Italy: "italy",
  Serbia: "serbia",
};

export function getCollegeImage(country: string): string {
  return countryImages[countryKeyMap[country] || "russia"] || "";
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ═══════════════════════════════════════════
// 🇷🇺 RUSSIA — MBBS
// ═══════════════════════════════════════════
const russiaColleges: CollegeListItem[] = [
  { name: "Voronezh State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Voronezh", ranking: "Top 15 in Russia", slug: "voronezh-state-medical-university" },
  { name: "Kirov State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Kirov", ranking: "NMC Recognized", slug: "kirov-state-medical-university" },
  { name: "Yaroslavl State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Yaroslavl", ranking: "NMC Recognized", slug: "yaroslavl-state-medical-university" },
  { name: "Crimean Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Simferopol", ranking: "Top 20 in Russia", slug: "crimean-federal-university" },
  { name: "Immanuel Kant Baltic Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Kaliningrad", ranking: "Top Federal University", slug: "immanuel-kant-baltic-federal-university" },
  { name: "Privolzhsky Research Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Nizhny Novgorod", ranking: "Top Research University", slug: "privolzhsky-research-medical-university" },
  { name: "Maikop State Technological University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Maikop", ranking: "NMC Recognized", slug: "maikop-state-technological-university" },
  { name: "Chechen State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Grozny", ranking: "NMC Recognized", slug: "chechen-state-university" },
  { name: "Kazan Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Kazan", ranking: "Top 10 in Russia", slug: "kazan-federal-university" },
  { name: "Volgograd State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Volgograd", ranking: "Top 20 in Russia", slug: "volgograd-state-medical-university" },
  { name: "Ulyanovsk State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Ulyanovsk", ranking: "NMC Recognized", slug: "ulyanovsk-state-university" },
  { name: "Kazan State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Kazan", ranking: "Top 10 in Russia", slug: "kazan-state-medical-university" },
  { name: "Rostov State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Rostov-on-Don", ranking: "Top 15 in Russia", slug: "rostov-state-medical-university" },
  { name: "Orel State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Orel", ranking: "NMC Recognized", slug: "orel-state-university" },
  { name: "Dagestan State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Makhachkala", ranking: "NMC Recognized", slug: "dagestan-state-medical-university" },
  { name: "Russian National Research Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Moscow", ranking: "Top 5 in Russia", slug: "russian-national-research-medical-university" },
  { name: "Irkutsk State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Irkutsk", ranking: "NMC Recognized", slug: "irkutsk-state-medical-university" },
  { name: "Izhevsk State Medical Academy", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Izhevsk", ranking: "NMC Recognized", slug: "izhevsk-state-medical-academy" },
  { name: "Astrakhan State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Astrakhan", ranking: "NMC Recognized", slug: "astrakhan-state-medical-university" },
  { name: "Altai State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Barnaul", ranking: "NMC Recognized", slug: "altai-state-medical-university" },
  { name: "Belgorod State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Belgorod", ranking: "Top 30 in Russia", slug: "belgorod-state-university" },
  { name: "Lomonosov Moscow State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹5L/year", feesNum: 500000, city: "Moscow", ranking: "#1 in Russia", slug: "lomonosov-moscow-state-university" },
  { name: "North Eastern Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Yakutsk", ranking: "Top Federal University", slug: "north-eastern-federal-university" },
  { name: "Smolensk State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Smolensk", ranking: "NMC Recognized", slug: "smolensk-state-medical-university" },
  { name: "Omsk State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Omsk", ranking: "NMC Recognized", slug: "omsk-state-medical-university" },
  { name: "Kemerovo State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Kemerovo", ranking: "NMC Recognized", slug: "kemerovo-state-medical-university" },
  { name: "Pskov State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Pskov", ranking: "NMC Recognized", slug: "pskov-state-university" },
  { name: "Kuban State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Krasnodar", ranking: "Top 20 in Russia", slug: "kuban-state-medical-university" },
  { name: "Novosibirsk State Technical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Novosibirsk", ranking: "NMC Recognized", slug: "novosibirsk-state-technical-university" },
  { name: "Novosibirsk National Research State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Novosibirsk", ranking: "Top 10 in Russia", slug: "novosibirsk-national-research-state-university" },
  { name: "Ogarev Mordovia State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Saransk", ranking: "NMC Recognized", slug: "ogarev-mordovia-state-university" },
  { name: "Ivanovo State Medical Academy", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Ivanovo", ranking: "NMC Recognized", slug: "ivanovo-state-medical-academy" },
  { name: "North Ossetian State Medical Academy", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Vladikavkaz", ranking: "NMC Recognized", slug: "north-ossetian-state-medical-academy" },
  { name: "Penza State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Penza", ranking: "NMC Recognized", slug: "penza-state-medical-university" },
  { name: "Chuvash State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Cheboksary", ranking: "NMC Recognized", slug: "chuvash-state-university" },
  { name: "Tula State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Tula", ranking: "NMC Recognized", slug: "tula-state-university" },
  { name: "Pacific State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Vladivostok", ranking: "NMC Recognized", slug: "pacific-state-medical-university" },
  { name: "Pavlov First Saint Petersburg State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Saint Petersburg", ranking: "Top 5 in Russia", slug: "pavlov-first-saint-petersburg-state-medical-university" },
  { name: "Tyumen State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Tyumen", ranking: "NMC Recognized", slug: "tyumen-state-medical-university" },
  { name: "Siberian State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Tomsk", ranking: "Top 15 in Russia", slug: "siberian-state-medical-university" },
  { name: "Novosibirsk State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Novosibirsk", ranking: "Top 10 in Russia", slug: "novosibirsk-state-university" },
  { name: "Peoples Friendship University of Russia", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Moscow", ranking: "Top 10 in Russia", slug: "peoples-friendship-university-of-russia" },
  { name: "Far Eastern Federal University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Vladivostok", ranking: "Top Federal University", slug: "far-eastern-federal-university" },
  { name: "Tver State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Tver", ranking: "NMC Recognized", slug: "tver-state-medical-university" },
  { name: "Samara State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Samara", ranking: "Top 20 in Russia", slug: "samara-state-medical-university" },
  { name: "Mari State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Yoshkar-Ola", ranking: "NMC Recognized", slug: "mari-state-university" },
  { name: "Kursk State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Kursk", ranking: "Top rated for internationals", slug: "kursk-state-medical-university" },
  { name: "Ryazan State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Ryazan", ranking: "NMC Recognized", slug: "ryazan-state-medical-university" },
  { name: "Orenburg State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Orenburg", ranking: "NMC Recognized", slug: "orenburg-state-medical-university" },
  { name: "Kabardino Balkarian University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Nalchik", ranking: "NMC Recognized", slug: "kabardino-balkarian-university" },
  { name: "First Moscow State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹5L/year", feesNum: 500000, city: "Moscow", ranking: "Top 3 in Russia", slug: "first-moscow-state-medical-university" },
  { name: "St Petersburg State Pediatric Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Saint Petersburg", ranking: "Top 10 in Russia", slug: "st-petersburg-state-pediatric-medical-university" },
  { name: "Bashkir State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.2L/year", feesNum: 320000, city: "Ufa", ranking: "Top 15 in Russia", slug: "bashkir-state-medical-university" },
  { name: "Ural State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Yekaterinburg", ranking: "Top 15 in Russia", slug: "ural-state-medical-university" },
  { name: "Stavropol State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Stavropol", ranking: "NMC Recognized", slug: "stavropol-state-medical-university" },
  { name: "Tambov State University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Tambov", ranking: "NMC Recognized", slug: "tambov-state-university" },
  { name: "Saratov State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Saratov", ranking: "Top 20 in Russia", slug: "saratov-state-medical-university" },
  { name: "Perm State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Perm", ranking: "NMC Recognized", slug: "perm-state-medical-university" },
  { name: "Northern State Medical University", country: "Russia", flag: "🇷🇺", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Arkhangelsk", ranking: "NMC Recognized", slug: "northern-state-medical-university" },
];

// ═══════════════════════════════════════════
// 🇬🇪 GEORGIA — MBBS
// ═══════════════════════════════════════════
const georgiaColleges: CollegeListItem[] = [
  { name: "Alte University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "NMC Recognized", slug: "alte-university" },
  { name: "David Tvildiani Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Tbilisi", ranking: "Top Private in Georgia", slug: "david-tvildiani-medical-university" },
  { name: "New Vision University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "NMC Recognized", slug: "new-vision-university" },
  { name: "Tallinn University of Technology", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "tallinn-university-of-technology" },
  { name: "Transport and Telecommunication Institute", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "transport-and-telecommunication-institute" },
  { name: "Wroclaw Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹5L/year", feesNum: 500000, city: "Tbilisi", ranking: "NMC Recognized", slug: "wroclaw-medical-university" },
  { name: "David Agmashenebeli University of Georgia", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "david-agmashenebeli-university-of-georgia" },
  { name: "Petre Shotadze Tbilisi Medical Academy", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.8L/year", feesNum: 380000, city: "Tbilisi", ranking: "NMC Recognized", slug: "petre-shotadze-tbilisi-medical-academy" },
  { name: "Tbilisi Medical University Hippocrates", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "tbilisi-medical-university-hippocrates" },
  { name: "Tbilisi Open Teaching University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Tbilisi", ranking: "NMC Recognized", slug: "tbilisi-open-teaching-university" },
  { name: "Tbilisi Public University Metekhi", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Tbilisi", ranking: "NMC Recognized", slug: "tbilisi-public-university-metekhi" },
  { name: "Kutaisi University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Kutaisi", ranking: "NMC Recognized", slug: "kutaisi-university" },
  { name: "Tbilisi State Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "#1 in Georgia", slug: "tbilisi-state-medical-university" },
  { name: "East European University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "Top Private", slug: "east-european-university" },
  { name: "International Black Sea University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "international-black-sea-university" },
  { name: "Georgian American University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Tbilisi", ranking: "Top Private", slug: "georgian-american-university" },
  { name: "Geomedi State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "geomedi-state-university" },
  { name: "European University Georgia", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "Top Private in Georgia", slug: "european-university-georgia" },
  { name: "Georgian National University SEU", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.8L/year", feesNum: 380000, city: "Tbilisi", ranking: "NMC Recognized", slug: "georgian-national-university-seu" },
  { name: "Caucasus International University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "caucasus-international-university" },
  { name: "BAU International University Batumi", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Batumi", ranking: "NMC Recognized", slug: "bau-international-university-batumi" },
  { name: "Ivane Javakhishvili Tbilisi State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "#2 in Georgia", slug: "ivane-javakhishvili-tbilisi-state-university" },
  { name: "Ilia State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "Top 5 in Georgia", slug: "ilia-state-university" },
  { name: "Grigol Robakidze University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.8L/year", feesNum: 380000, city: "Tbilisi", ranking: "NMC Recognized", slug: "grigol-robakidze-university" },
  { name: "Batumi Shota Rustaveli State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Batumi", ranking: "WHO Recognized", slug: "batumi-shota-rustaveli-state-university" },
  { name: "Frankfurt School of Finance and Management", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹5L/year", feesNum: 500000, city: "Tbilisi", ranking: "NMC Recognized", slug: "frankfurt-school-of-finance-and-management" },
  { name: "Gisma Business School", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4.5L/year", feesNum: 450000, city: "Tbilisi", ranking: "NMC Recognized", slug: "gisma-business-school" },
  { name: "Aberystwyth University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹4L/year", feesNum: 400000, city: "Tbilisi", ranking: "NMC Recognized", slug: "aberystwyth-university" },
  { name: "Akaki Tsereteli State University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Kutaisi", ranking: "NMC Recognized", slug: "akaki-tsereteli-state-university" },
  { name: "Geomedi Medical University", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.5L/year", feesNum: 350000, city: "Tbilisi", ranking: "NMC Recognized", slug: "geomedi-medical-university" },
  { name: "University of Georgia Tbilisi", country: "Georgia", flag: "🇬🇪", program: "MBBS", fees: "₹3.8L/year", feesNum: 380000, city: "Tbilisi", ranking: "Top 5 in Georgia", slug: "university-of-georgia-tbilisi" },
];

// ═══════════════════════════════════════════
// 🇰🇿 KAZAKHSTAN — MBBS
// ═══════════════════════════════════════════
const kazakhstanColleges: CollegeListItem[] = [
  { name: "Semey State Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Semey", ranking: "NMC Recognized", slug: "semey-state-medical-university" },
  { name: "UIB International Medical School", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Almaty", ranking: "NMC Recognized", slug: "uib-international-medical-school" },
  { name: "North Kazakhstan State University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Petropavlovsk", ranking: "NMC Recognized", slug: "north-kazakhstan-state-university" },
  { name: "West Kazakhstan Marat Ospanov State Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Aktobe", ranking: "NMC Recognized", slug: "west-kazakhstan-marat-ospanov-state-medical-university" },
  { name: "South Kazakhstan Medical Academy", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Shymkent", ranking: "NMC Recognized", slug: "south-kazakhstan-medical-academy" },
  { name: "Kazakh Russian Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Almaty", ranking: "NMC Recognized", slug: "kazakh-russian-medical-university" },
  { name: "Caspian International School of Medicine", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Almaty", ranking: "NMC Recognized", slug: "caspian-international-school-of-medicine" },
  { name: "Al Farabi Kazakh National University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Almaty", ranking: "Top in Kazakhstan", slug: "al-farabi-kazakh-national-university" },
  { name: "Astana Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Astana", ranking: "#2 in Kazakhstan", slug: "astana-medical-university" },
  { name: "Kazakh National Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹3L/year", feesNum: 300000, city: "Almaty", ranking: "Top in Kazakhstan", slug: "kazakh-national-medical-university" },
  { name: "Karaganda State Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Karaganda", ranking: "NMC Recognized", slug: "karaganda-state-medical-university" },
  { name: "Kokshetau State University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Kokshetau", ranking: "NMC Recognized", slug: "kokshetau-state-university" },
  { name: "Kazakh Medical University of Continuing Education", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Almaty", ranking: "NMC Recognized", slug: "kazakh-medical-university-of-continuing-education" },
  { name: "Al Farabi State Medical University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Almaty", ranking: "NMC Recognized", slug: "al-farabi-state-medical-university" },
  { name: "Caspian University", country: "Kazakhstan", flag: "🇰🇿", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Almaty", ranking: "NMC Recognized", slug: "caspian-university" },
];

// ═══════════════════════════════════════════
// 🇺🇿 UZBEKISTAN — MBBS
// ═══════════════════════════════════════════
const uzbekistanColleges: CollegeListItem[] = [
  { name: "Bukhara State Medical Institute", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Bukhara", ranking: "NMC Recognized", slug: "bukhara-state-medical-institute" },
  { name: "Tashkent State Dental Institute", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Tashkent", ranking: "NMC Recognized", slug: "tashkent-state-dental-institute" },
  { name: "Tashkent Medical Academy", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Tashkent", ranking: "Top in Uzbekistan", slug: "tashkent-medical-academy" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Samarkand", ranking: "#2 in Uzbekistan", slug: "samarkand-state-medical-university" },
  { name: "Andijan State Medical Institute", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Andijan", ranking: "NMC Recognized", slug: "andijan-state-medical-institute" },
  { name: "Fergana Medical Institute of Public Health", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Fergana", ranking: "NMC Recognized", slug: "fergana-medical-institute-of-public-health" },
  { name: "Profi University", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Tashkent", ranking: "NMC Recognized", slug: "profi-university" },
  { name: "Kimyo International University (KIUT)", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Tashkent", ranking: "NMC Recognized", slug: "kimyo-international-university-kiut" },
  { name: "Profi University Navoiy", country: "Uzbekistan", flag: "🇺🇿", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Navoiy", ranking: "NMC Recognized", slug: "profi-university-navoiy" },
];

// ═══════════════════════════════════════════
// 🇹🇯 TAJIKISTAN — MBBS
// ═══════════════════════════════════════════
const tajikistanColleges: CollegeListItem[] = [
  { name: "Khatlon State Medical University", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Khatlon", ranking: "NMC Recognized", slug: "khatlon-state-medical-university" },
  { name: "Tajik National University", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Dushanbe", ranking: "#1 National University", slug: "tajik-national-university" },
  { name: "Avicenna International Medical University", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Dushanbe", ranking: "NMC Recognized", slug: "avicenna-international-medical-university" },
  { name: "Medical Social Institute of Tajikistan", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹1.8L/year", feesNum: 180000, city: "Dushanbe", ranking: "NMC Recognized", slug: "medical-social-institute-of-tajikistan" },
  { name: "Avicenna Tajik State Medical University", country: "Tajikistan", flag: "🇹🇯", program: "MBBS", fees: "₹2L/year", feesNum: 200000, city: "Dushanbe", ranking: "Top in Tajikistan", slug: "avicenna-tajik-state-medical-university" },
];

// ═══════════════════════════════════════════
// 🇰🇬 KYRGYZSTAN — MBBS
// ═══════════════════════════════════════════
const kyrgyzstanColleges: CollegeListItem[] = [
  { name: "Jalalabad State University", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Jalalabad", ranking: "NMC Recognized", slug: "jalalabad-state-university" },
  { name: "IHSM Issyk-Kul Campus", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Issyk-Kul", ranking: "NMC Recognized", slug: "ihsm-issyk-kul-campus" },
  { name: "Osh State University", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Osh", ranking: "NMC Recognized", slug: "osh-state-university" },
  { name: "Kyrgyz Russian Slavic University", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Bishkek", ranking: "Top 3 in Kyrgyzstan", slug: "kyrgyz-russian-slavic-university" },
  { name: "IHSM Central Campus", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Bishkek", ranking: "NMC Recognized", slug: "ihsm-central-campus" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.5L/year", feesNum: 250000, city: "Bishkek", ranking: "Top in Kyrgyzstan", slug: "kyrgyz-state-medical-academy" },
  { name: "Kyrgyz National University", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.2L/year", feesNum: 220000, city: "Bishkek", ranking: "#1 National University", slug: "kyrgyz-national-university" },
  { name: "Asian Medical Institute", country: "Kyrgyzstan", flag: "🇰🇬", program: "MBBS", fees: "₹2.8L/year", feesNum: 280000, city: "Kant", ranking: "NMC Recognized", slug: "asian-medical-institute" },
];

// ═══════════════════════════════════════════
// 🇺🇸 USA — MS
// ═══════════════════════════════════════════
const usaColleges: CollegeListItem[] = [
  { name: "University of Michigan", country: "USA", flag: "🇺🇸", program: "MS", fees: "$50K/year", feesNum: 4100000, city: "Ann Arbor", ranking: "Top 25 Globally", slug: "university-of-michigan" },
  { name: "California State University, San Bernardino", country: "USA", flag: "🇺🇸", program: "MS", fees: "$18K/year", feesNum: 1500000, city: "San Bernardino", ranking: "CSU System", slug: "california-state-university-san-bernardino" },
  { name: "California State University, Bakersfield", country: "USA", flag: "🇺🇸", program: "MS", fees: "$17K/year", feesNum: 1400000, city: "Bakersfield", ranking: "CSU System", slug: "california-state-university-bakersfield" },
  { name: "Texas A&M University - Kingsville", country: "USA", flag: "🇺🇸", program: "MS", fees: "$15K/year", feesNum: 1250000, city: "Kingsville", ranking: "Texas A&M System", slug: "texas-a-m-university-kingsville" },
  { name: "Roosevelt University", country: "USA", flag: "🇺🇸", program: "MS", fees: "$20K/year", feesNum: 1650000, city: "Chicago", ranking: "NMC Recognized", slug: "roosevelt-university" },
  { name: "California State University, Sacramento", country: "USA", flag: "🇺🇸", program: "MS", fees: "$18K/year", feesNum: 1500000, city: "Sacramento", ranking: "CSU System", slug: "california-state-university-sacramento" },
  { name: "California State University, East Bay", country: "USA", flag: "🇺🇸", program: "MS", fees: "$18K/year", feesNum: 1500000, city: "Hayward", ranking: "CSU System", slug: "california-state-university-east-bay" },
];

// ═══════════════════════════════════════════
// 🇬🇧 UK — MS
// ═══════════════════════════════════════════
const ukColleges: CollegeListItem[] = [
  { name: "Queen's University Belfast", country: "UK", flag: "🇬🇧", program: "MS", fees: "£20K/year", feesNum: 2100000, city: "Belfast", ranking: "Russell Group", slug: "queens-university-belfast" },
  { name: "Kingston University London", country: "UK", flag: "🇬🇧", program: "MS", fees: "£18K/year", feesNum: 1900000, city: "London", ranking: "Top London University", slug: "kingston-university-london" },
  { name: "Middlesex University London", country: "UK", flag: "🇬🇧", program: "MS", fees: "£16K/year", feesNum: 1700000, city: "London", ranking: "Top London University", slug: "middlesex-university-london" },
];

// ═══════════════════════════════════════════
// 🇩🇪 GERMANY — MS
// ═══════════════════════════════════════════
const germanyColleges: CollegeListItem[] = [
  { name: "University of Ulm", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Ulm", ranking: "Top Research University", slug: "university-of-ulm" },
  { name: "Johannes Gutenberg University Mainz", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Mainz", ranking: "Top 10 in Germany", slug: "johannes-gutenberg-university-mainz" },
  { name: "Karlsruhe Institute of Technology", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Karlsruhe", ranking: "Top 5 Engineering", slug: "karlsruhe-institute-of-technology" },
  { name: "Munich Business School", country: "Germany", flag: "🇩🇪", program: "MS", fees: "€15K/year", feesNum: 1350000, city: "Munich", ranking: "Top Business School", slug: "munich-business-school" },
  { name: "Berlin School of Business and Innovation", country: "Germany", flag: "🇩🇪", program: "MS", fees: "€12K/year", feesNum: 1080000, city: "Berlin", ranking: "NMC Recognized", slug: "berlin-school-of-business-and-innovation" },
  { name: "RWTH Aachen University", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Aachen", ranking: "#1 Engineering in Germany", slug: "rwth-aachen-university" },
  { name: "University of Bonn", country: "Germany", flag: "🇩🇪", program: "MS", fees: "Free tuition", feesNum: 30000, city: "Bonn", ranking: "Top 10 in Germany", slug: "university-of-bonn" },
];

// ═══════════════════════════════════════════
// 🇮🇪 IRELAND — MS
// ═══════════════════════════════════════════
const irelandColleges: CollegeListItem[] = [
  { name: "University of Galway", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€18K/year", feesNum: 1620000, city: "Galway", ranking: "Top 3 in Ireland", slug: "university-of-galway" },
  { name: "Trinity College Dublin", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€22K/year", feesNum: 1980000, city: "Dublin", ranking: "#1 in Ireland", slug: "trinity-college-dublin" },
  { name: "University College Cork", country: "Ireland", flag: "🇮🇪", program: "MS", fees: "€18K/year", feesNum: 1620000, city: "Cork", ranking: "Top 3 in Ireland", slug: "university-college-cork" },
];

// ═══════════════════════════════════════════
// COMBINED EXPORT
// ═══════════════════════════════════════════
export const colleges: CollegeListItem[] = [
  ...russiaColleges,
  ...georgiaColleges,
  ...kazakhstanColleges,
  ...uzbekistanColleges,
  ...tajikistanColleges,
  ...kyrgyzstanColleges,
  ...usaColleges,
  ...ukColleges,
  ...germanyColleges,
  ...irelandColleges,
];
