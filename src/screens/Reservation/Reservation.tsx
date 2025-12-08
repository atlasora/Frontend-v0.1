import React, { useState } from "react";
import { Header } from "../../components/Header";
import { AccountSidebar } from "../../components/AccountSidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

const reservationTabs = ["upcoming", "completed", "canceled", "all"];

export const Reservation = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div
        className="mx-auto w-full max-w-[1600px] px-10 pt-10 pb-16"
        data-model-id="63:426"
      >
      {/* Page content */}
      <main className="flex flex-col items-start gap-16">
        {/* Title */}
        <div className="flex flex-col items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h1 className="bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hauora-Medium',Helvetica] font-medium text-5xl leading-normal tracking-[0]">
            Reservations
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-16 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-transparent h-auto p-0 gap-0">
              {reservationTabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="h-10 px-6 rounded-full capitalize [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] data-[state=active]:bg-[#ffffff1a] data-[state=inactive]:bg-transparent"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Separator className="bg-[#ffffff1a]" />

          {/* TODO: reservations list content goes here */}
        </div>
      </main>
    </div>
    </>
  );
};

export default Reservation;
