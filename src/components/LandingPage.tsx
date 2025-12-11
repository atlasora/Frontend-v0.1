// React import kept only for types (JSX.Element), even though not used at runtime.
import { CallToActionSection } from "../screens/Home/sections/CallToActionSection";
import { AtlasOraVsAirbnbCalculator } from "./AtlasOraVsAirbnbCalculator";
import AdvanceCalculator from "@/components/AdvanceCalculator";
import { FeaturedListingsSection } from "../screens/Home/sections/FeaturedListingsSection";
import { FooterSection } from "../screens/Home/sections/FooterSection";
import { HeroSection } from "../screens/Home/sections/HeroSection";
// import { HostRewardSection } from "../screens/Home/sections/HostRewardSection";
import { NotJustAnotherHeading } from "../screens/Home/sections/NotJustAnotherHeading";
import { RealHostsSection } from "../screens/Home/sections/RealHostsSection";
import { StatisticsSection } from "../screens/Home/sections/StatisticsSection";
import { TestimonialSection } from "../screens/Home/sections/TestimonialSection";
import { WhyChooseUsSection } from "../screens/Home/sections/WhyChooseUsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full items-start bg-[#06090c]"
      data-model-id="517:949"
    >
      <HeroSection />
      <section className="w-full px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <AtlasOraVsAirbnbCalculator />
        </div>
      </section>
      <FeaturedListingsSection />
      <NotJustAnotherHeading />
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-6xl px-4">
          <AdvanceCalculator />
        </div>
      </div>
      <WhyChooseUsSection />
      <TestimonialSection />
      <RealHostsSection />
      <StatisticsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};

