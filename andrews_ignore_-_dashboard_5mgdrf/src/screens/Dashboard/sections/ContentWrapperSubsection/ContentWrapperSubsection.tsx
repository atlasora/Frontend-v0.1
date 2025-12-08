import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const statsCards = [
  {
    icon: "https://c.animaapp.com/mi5m1nkk4tubzf/img/frame-3.svg",
    title: "Total Earnings",
    value: "€12,250",
    change: "+12.5%",
    changeType: "positive",
    comparison: "vs last month",
  },
  {
    icon: "https://c.animaapp.com/mi5m1nkk4tubzf/img/frame.svg",
    title: "Total Bookings",
    value: "148",
    change: "-10%",
    changeType: "negative",
    comparison: "vs last month",
  },
  {
    icon: "https://c.animaapp.com/mi5m1nkk4tubzf/img/frame-4.svg",
    title: "Occupancy Rate",
    value: "87%",
    change: "+5.1%",
    changeType: "positive",
    comparison: "vs last month",
  },
  {
    icon: "https://c.animaapp.com/mi5m1nkk4tubzf/img/frame-1.svg",
    title: "Avg. Rating",
    value: "4.8/5",
    change: "+0.8%",
    changeType: "positive",
    comparison: "vs last month",
  },
];

const reservationTabs = [
  { label: "Checking out (4)", value: "checking-out" },
  { label: "Currently hosting (10)", value: "currently-hosting" },
  { label: "Arriving soon (3)", value: "arriving-soon" },
  { label: "Upcoming (70)", value: "upcoming" },
  { label: "Pending review (29)", value: "pending-review" },
];

const reservations = [
  {
    badge: "Checking out today",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/ellipse-354-1.png",
    name: "Eric",
    dates: "Sep 6-15",
    property: "Atico (by Zocosuites)",
  },
  {
    badge: "Checking out tomorrow",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/ellipse-354-2.png",
    name: "Anna",
    dates: "Sep 8-15",
    property: "Golden Mile Designer Penthouse",
  },
  {
    badge: "Checking out tomorrow",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/ellipse-354-3.png",
    name: "Adam",
    dates: "Sep 11-14",
    property: "Casa Victoria",
  },
  {
    badge: "Checking out tomorrow",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/ellipse-354-4.png",
    name: "Taylor",
    dates: "Sep 11-14",
    property: "Melrose Manor",
  },
];

const listings = [
  {
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-1-1.png",
    status: "Available",
    statusColor: "bg-[#0c9784]",
    title: "Atico (by Zocosuites)",
    location: "Marbella, Spain",
  },
  {
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-2-2.png",
    status: "Booked",
    statusColor: "bg-[#0091ff]",
    title: "Golden Mile Designer Penthouse",
    location: "Marbella, Spain",
  },
  {
    image: "https://c.animaapp.com/mi5m1nkk4tubzf/img/image-3-2.png",
    status: "Action Required",
    statusColor: "bg-[#e5484d]",
    title: "Casa Victoria",
    location: "Marbella, Spain",
  },
];

export const ContentWrapperSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-16 px-4 md:px-0">
      <header className="inline-flex flex-col items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h1 className="w-fit bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hauora-Medium',Helvetica] font-medium text-transparent text-5xl tracking-[0] leading-[normal]">
          Welcome back, Stephanie!
        </h1>

        <p className="self-stretch [font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-4">
          Here&apos;s what&apos;s happening with your&nbsp;&nbsp;listings
        </p>
      </header>

      <div className="self-stretch w-full h-px bg-[#ffffff1a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]" />

      <div className="gap-6 flex flex-col items-start w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
          <Card className="bg-[#fac237] flex flex-col items-start justify-between p-6 flex-1 rounded-xl overflow-hidden border-0 min-h-[250px]">
            <CardContent className="p-0 w-full h-full flex flex-col justify-between">
              <div className="w-fit [font-family:'Hauora-Bold',Helvetica] font-bold text-[#070a0d] text-base tracking-[0] leading-4 whitespace-nowrap">
                Checking in today
              </div>

              <div className="flex items-center gap-6 w-full">
                <img
                  className="w-[84px] h-[85px] object-cover"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mi5m1nkk4tubzf/img/ellipse-354.png"
                />

                <div className="flex flex-col items-start justify-center gap-2 flex-1">
                  <div className="self-stretch [font-family:'Hauora-Bold',Helvetica] font-bold text-[#070a0d] text-base tracking-[-0.32px] leading-4">
                    4:00 PM
                  </div>

                  <div className="self-stretch [font-family:'Hauora-Bold',Helvetica] font-bold text-[#070a0d] text-4xl tracking-[-0.72px] leading-9">
                    Dani + 2 checks in
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#ffffff0f] flex flex-col items-start justify-between p-6 flex-1 rounded-xl overflow-hidden border-0 min-h-[250px]">
            <CardContent className="p-0 w-full h-full flex flex-col justify-between">
              <div className="text-base leading-4 w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white tracking-[0] whitespace-nowrap">
                Upcoming reservations
              </div>

              <div className="[font-family:'Hauora-Bold',Helvetica] font-bold text-white text-5xl tracking-[-0.96px] leading-[48px] w-fit whitespace-nowrap">
                16
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#ffffff0f] flex flex-col items-start justify-between p-6 rounded-xl overflow-hidden border-0 min-h-[220px]"
            >
              <CardContent className="p-0 w-full h-full flex flex-col justify-between">
                <div className="inline-flex items-center gap-2">
                  <img className="w-4 h-4" alt="Icon" src={stat.icon} />

                  <div className="w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                    {stat.title}
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-4">
                  <div className="w-fit [font-family:'Hauora-Bold',Helvetica] font-bold text-white text-5xl tracking-[-0.96px] leading-[48px] whitespace-nowrap">
                    {stat.value}
                  </div>

                  <div className="inline-flex items-center gap-[9px]">
                    <Badge
                      className={`h-6 px-3 py-0 ${stat.changeType === "positive" ? "bg-[#04201b]" : "bg-[#2a1314]"} rounded-[999px] hover:${stat.changeType === "positive" ? "bg-[#04201b]" : "bg-[#2a1314]"}`}
                    >
                      <span
                        className={`[font-family:'Hauora-Bold',Helvetica] font-bold ${stat.changeType === "positive" ? "text-[#0ac5b3]" : "text-[#ff6369]"} text-[10px] tracking-[-0.20px] leading-[10px]`}
                      >
                        {stat.change}
                      </span>
                    </Badge>

                    <div className="w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-[#ffffff80] text-xs tracking-[0] leading-3 whitespace-nowrap">
                      {stat.comparison}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="gap-8 flex flex-col items-start w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
          <h2 className="text-[32px] tracking-[-0.64px] leading-8 w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white whitespace-nowrap">
            Reservations
          </h2>

          <Button
            variant="link"
            className="w-fit h-auto p-0 [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-base tracking-[-0.32px] leading-4 whitespace-nowrap"
          >
            All reservations (32)
          </Button>
        </div>

        <Tabs defaultValue="checking-out" className="w-full">
          <TabsList className="inline-flex items-start bg-transparent h-auto p-0 gap-0">
            {reservationTabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="h-10 px-6 py-0 rounded-[999px] data-[state=active]:bg-[#ffffff1a] data-[state=inactive]:bg-transparent [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {reservations.map((reservation, index) => (
            <Card
              key={index}
              className="bg-[#ffffff0f] flex flex-col items-start gap-6 p-6 rounded-xl overflow-hidden border-0"
            >
              <CardContent className="p-0 w-full flex flex-col gap-6">
                <Badge className="h-8 px-3.5 py-0 bg-[#2a1314] rounded-[999px] hover:bg-[#2a1314] w-fit">
                  <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ff6369] tracking-[-0.28px] text-sm leading-[14px]">
                    {reservation.badge}
                  </span>
                </Badge>

                <div className="inline-flex items-center gap-6">
                  <img
                    className="w-[55px] h-14 object-cover"
                    alt="Guest avatar"
                    src={reservation.avatar}
                  />

                  <div className="w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[27px]">
                    {reservation.name}
                    <br />
                    {reservation.dates}
                  </div>
                </div>

                <div className="w-fit [font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-[14px]">
                  {reservation.property}
                </div>

                <div className="self-stretch w-full h-px bg-[#ffffff1a]" />

                <Button
                  variant="ghost"
                  className="w-full h-auto p-0 [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[14px] hover:bg-transparent"
                >
                  Message
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <h2 className="w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-[32px] tracking-[-0.64px] leading-8 whitespace-nowrap">
          Your listings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {listings.map((listing, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center gap-4"
            >
              <div className="flex flex-col h-[291px] items-start justify-around self-stretch w-full bg-[#ffffff14] rounded-xl overflow-hidden relative">
                <img
                  className="flex-1 self-stretch w-full object-cover"
                  alt="Property"
                  src={listing.image}
                />

                <Badge className="inline-flex h-8 gap-1.5 px-3 py-0 absolute top-4 left-4 bg-white rounded-[999px] hover:bg-white">
                  <div
                    className={`w-2.5 h-2.5 ${listing.statusColor} rounded-[5px]`}
                  />
                  <span className="[font-family:'Hauora-Bold',Helvetica] font-bold text-black text-xs tracking-[0] leading-3">
                    {listing.status}
                  </span>
                </Badge>
              </div>

              <div className="inline-flex flex-col items-start gap-2">
                <div className="w-fit [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                  {listing.title}
                </div>

                <div className="w-fit [font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-4 whitespace-nowrap">
                  {listing.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
