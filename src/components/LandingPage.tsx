// React import kept only for types (JSX.Element), even though not used at runtime.
import { AtlasOraVsAirbnbCalculator } from "./AtlasOraVsAirbnbCalculator";
import AdvanceCalculator from "@/components/AdvanceCalculator";
import { FeaturedListingsSection } from "../screens/Home/sections/FeaturedListingsSection";
import { FooterSection } from "../screens/Home/sections/FooterSection";
import { HeroSection } from "../screens/Home/sections/HeroSection";
// import { HostRewardSection } from "../screens/Home/sections/HostRewardSection";
import { RealHostsSection } from "../screens/Home/sections/RealHostsSection";
import { StatisticsSection } from "../screens/Home/sections/StatisticsSection";
import { TestimonialSection } from "../screens/Home/sections/TestimonialSection";
import { WhyChooseUsSection } from "../screens/Home/sections/WhyChooseUsSection";
import WhyAOBetter from "./WhyAOBetter";

export const LandingPage = (): JSX.Element => {
  return (
    <main
      className="relative w-full max-w-full overflow-x-hidden bg-[#06090c] flex flex-col items-start min-h-screen"
      data-model-id="517:949"
    >
      <HeroSection />
      <WhyAOBetter />
      <section className="w-full px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <AtlasOraVsAirbnbCalculator />
        </div>
      </section>
      <FeaturedListingsSection />
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-6xl px-4">
          <AdvanceCalculator />
        </div>
      </div>
      <WhyChooseUsSection />
      <TestimonialSection />
      <RealHostsSection />
      <StatisticsSection />
      <FooterSection />
    </main>
  );
};

