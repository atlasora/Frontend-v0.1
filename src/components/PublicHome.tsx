// React import kept only for types (JSX.Element), even though not used at runtime.
import { FeaturedListingsSection } from "../screens/Home/sections/FeaturedListingsSection";
import { FooterSection } from "../screens/Home/sections/FooterSection";
import { HeroSection } from "../screens/Home/sections/HeroSection";
import { HostRewardSection } from "../screens/Home/sections/HostRewardSection";
import { NotJustAnotherHeading } from "../screens/Home/sections/NotJustAnotherHeading";
import { RealHostsSection } from "../screens/Home/sections/RealHostsSection";
import { StatisticsSection } from "../screens/Home/sections/StatisticsSection";
import { TestimonialSection } from "../screens/Home/sections/TestimonialSection";
import { WhyChooseUsSection } from "../screens/Home/sections/WhyChooseUsSection";

export const PublicHome = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full items-start bg-[#06090c]"
      data-model-id="517:949"
    >
      <HeroSection />
      <FeaturedListingsSection />
      <NotJustAnotherHeading />
      <WhyChooseUsSection />
      <HostRewardSection />
      <TestimonialSection />
      <RealHostsSection />
      <StatisticsSection />
      <FooterSection />
    </main>
  );
};

