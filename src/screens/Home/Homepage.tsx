// React import kept only for types (JSX.Element), even though not used at runtime.
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturedListingsSection } from "./sections/FeaturedListingsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HostRewardSection } from "./sections/HostRewardSection";
import { NotJustAnotherHeading } from "./sections/NotJustAnotherHeading";
import { RealHostsSection } from "./sections/RealHostsSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const Homepage = (): JSX.Element => {
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
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
