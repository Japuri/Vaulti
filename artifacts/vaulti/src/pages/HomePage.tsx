import { Hero } from "../components/sections/Hero";
import { PrivacyVisual } from "../components/sections/PrivacyVisual";
import { ParadigmShift } from "../components/sections/ParadigmShift";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Pipeline } from "../components/sections/Pipeline";
import { Pricing } from "../components/sections/Pricing";
import { GettingStarted } from "../components/sections/GettingStarted";
import { FAQ } from "../components/sections/FAQ";

export function HomePage() {
  return (
    <>
      <Hero />
      <PrivacyVisual />
      <ParadigmShift />
      <WhyChooseUs />
      <Pipeline />
      <Pricing />
      <GettingStarted />
      <FAQ />
    </>
  );
}
