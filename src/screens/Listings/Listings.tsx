import React, { useState } from "react";
import { Header } from "../../components/Header";
import { AccountSidebar } from "../../components/AccountSidebar";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "Home", active: false },
  { label: "Listings", active: true },
  { label: "Reservations", active: false },
  { label: "Messages", active: false, badge: 10 },
  { label: "Calendar", active: false },
  { label: "Earnings", active: false },
  { label: "Performance", active: false },
];

const listings = [
  {
    id: 1,
    title: "Atico (by Zocosuites)",
    location: "Marbella, Spain",
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-1-1.png",
    status: "Available",
    statusColor: "bg-[#0c9784]",
  },
  {
    id: 2,
    title: "Golden Mile Designer Penthouse",
    location: "Marbella, Spain",
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-2-2.png",
    status: "Booked",
    statusColor: "bg-[#0091ff]",
  },
  {
    id: 3,
    title: "Golden Mile Designer Penthouse",
    location: "Marbella, Spain",
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-2-2.png",
    status: "Booked",
    statusColor: "bg-[#0091ff]",
  },
  {
    id: 4,
    title: "Casa Victoria",
    location: "Marbella, Spain",
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-3-2.png",
    status: "Action Required",
    statusColor: "bg-[#e5484d]",
  },
];

const Listings = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div
        className="bg-[#070a0d] w-full min-w-[1440px] min-h-screen flex flex-col gap-20"
        data-model-id="63:290"
      >

      <main className="flex mx-auto w-full max-w-[1156px] px-6 flex-col items-start gap-16">
        <div className="flex gap-4 self-stretch w-full flex-col items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <h1 className="bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hauora-Medium',Helvetica] font-medium text-transparent text-5xl leading-[normal] tracking-[0]">
            Listings
          </h1>
        </div>

        <div className="w-full h-px bg-[#ffffff1a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]" />

        <div className="grid grid-cols-2 gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          {listings.map((listing, index) => (
            <Card
              key={listing.id}
              className="flex flex-col items-start justify-center gap-4 bg-transparent border-0 cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col h-[424px] items-start justify-around w-full bg-[#ffffff14] rounded-xl overflow-hidden relative">
                  <img
                    className="flex-1 w-full h-full object-cover"
                    alt={listing.title}
                    src={listing.image}
                  />
                  <Badge className="absolute top-4 left-4 inline-flex h-8 gap-1.5 px-3 py-0 bg-white rounded-[999px] items-center hover:bg-white">
                    <div
                      className={`w-2.5 h-2.5 rounded-[5px] ${listing.statusColor}`}
                    />
                    <span className="[font-family:'Hauora-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3 whitespace-nowrap">
                      {listing.status}
                    </span>
                  </Badge>
                </div>
                <div className="inline-flex gap-2 flex-col items-start mt-4">
                  <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                    {listing.title}
                  </div>
                  <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-4 whitespace-nowrap">
                    {listing.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};
export default Listings;
