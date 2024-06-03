import Gal from "@/components/PagesComps/Gal";
import HowItWorks from "@/components/PagesComps/HowItWorks";
import LandingComp from "@/components/PagesComps/LandingComp";
import Services from "@/components/PagesComps/Services";
import { Stats } from "@/components/PagesComps/Stats";
import Testmonials from "@/components/PagesComps/Testmonials";
import WhyUs from "@/components/PagesComps/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingComp />
      {/* <Stats /> */}
      <Services />
      <HowItWorks />
      <WhyUs/>
      <Gal/>
      <Testmonials/>
    
    </main>
  );
}
