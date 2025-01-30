import Image from "next/image";
import HeroSection from "./components/heroSection";
import '../../public/sass/pages/hero_section.scss'
import DtcBrands from "./components/trustsBrands";
import Cards from "./components/cards";
import AccordSection from "./components/accordSection";
import SlideProfiles from "./components/slideProfiles";


export default function Home() {
  return (
    <>
      <HeroSection />
      <DtcBrands />
      <Cards />
      <AccordSection />
      <SlideProfiles />
    </>
  );
}
