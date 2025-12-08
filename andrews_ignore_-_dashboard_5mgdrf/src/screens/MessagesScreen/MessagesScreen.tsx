import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";

const rateCards = [
  {
    title: "Base rate",
    value: "€495",
  },
  {
    title: "Weekend rate",
    value: "€695",
  },
];

const discountCard = {
  title: "Weekly Stay",
  subtitle: "For 7 nights or more",
  value: "10%",
};

export const MessagesScreen = (): JSX.Element => {
  return (
    <div
    className="bg-[#070a0d] w-full min-h-screen flex flex-col"
    data-model-id="63:619"
  >
    <main className="flex-1 flex gap-6 px-6 py-6">
        <section className="flex-1 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5">
              September 2025
            </h1>
          </div>

          <div className="relative">
            <FrameSubsection />

            <div className="flex w-full max-w-[1046px] h-10 items-center gap-2 p-1 mt-6 bg-[#fac237] rounded-[999px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <img
                className="relative self-stretch w-8 rounded-[64px] object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-6.png"
              />
              <div className="relative w-fit [font-family:'Hauora-ExtraBold',Helvetica] font-extrabold text-[#1a1a1a] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                Shen + 1 guest, €3,465
              </div>
            </div>
          </div>
        </section>

        <aside className="w-[329px] flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col gap-4">
            <h2 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5">
              Stay Settings
            </h2>

            <p className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-[21px]">
              These rates apply to all nights unless <br />
              customized for specific dates.
            </p>

            <Tabs defaultValue="rates" className="w-full">
              <TabsList className="bg-transparent gap-2 h-auto p-0">
                <TabsTrigger
                  value="rates"
                  className="bg-[#ffffff1a] data-[state=active]:bg-[#ffffff1a] h-10 px-4 py-0 rounded-full [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px]"
                >
                  Rates
                </TabsTrigger>
                <TabsTrigger
                  value="availability"
                  className="bg-transparent data-[state=active]:bg-[#ffffff1a] h-10 px-4 py-0 rounded-full [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px]"
                >
                  Availability
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rates" className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                    Base Rate
                  </h3>

                  <div className="flex flex-col gap-4">
                    {rateCards.map((card, index) => (
                      <Card
                        key={index}
                        className="w-full bg-transparent rounded-[20px] border-[0.5px] border-solid border-[#ffffff26]"
                      >
                        <CardContent className="flex flex-col gap-4 p-6">
                          <div className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px]">
                            {card.title}
                          </div>
                          <div className="text-[32px] leading-8 [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white tracking-[0]">
                            {card.value}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-[#ffffff1a]" />

                <div className="flex flex-col gap-4">
                  <h3 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                    Discounts
                  </h3>

                  <p className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-[21px]">
                    Offer special pricing to attract longer stays
                  </p>

                  <Card className="w-full bg-transparent rounded-[20px] border-[0.5px] border-solid border-[#ffffff26]">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px]">
                        {discountCard.title}
                      </div>
                      <div className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-[#ffffff80] text-sm tracking-[0] leading-[14px]">
                        {discountCard.subtitle}
                      </div>
                      <div className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-8">
                        {discountCard.value}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="availability" className="mt-6">
                <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-sm">
                  Availability settings
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </aside>
      </main>
    </div>
  );
};

// also export default, so imports work either way
export default MessagesScreen;
