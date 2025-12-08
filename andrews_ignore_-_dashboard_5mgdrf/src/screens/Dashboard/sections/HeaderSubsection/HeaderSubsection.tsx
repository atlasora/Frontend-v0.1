import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", path: "/", hasNotification: false },
  { label: "Listings", path: "/listings", hasNotification: false },
  { label: "Reservations", path: "/reservation", hasNotification: false },
  { label: "Messages", path: "/messages", hasNotification: true, notificationCount: 10 },
  { label: "Calendar", path: "/calendar", hasNotification: false },
  { label: "Earnings", path: "/earnings", hasNotification: false },
  { label: "Performance", path: "/performance", hasNotification: false },
];

export const HeaderSubsection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 bg-transparent border-b border-[#ffffff1a] opacity-0 animate-fade-in">
      
      {/* ✅ Logo now navigates to "/" */}
      <Link to="/">
        <img
          className="w-[122.1px] h-[28.08px] cursor-pointer"
          alt="Logo"
          src="https://c.animaapp.com/mi5m1nkk4tubzf/img/logo.svg"
        />
      </Link>

      <nav className="inline-flex items-center justify-center gap-4">
        {navigationItems.map((item, index) => (
          <Link key={item.label} to={item.path}>
            <Button
              variant="ghost"
              className="relative h-10 px-4 py-0 rounded-full hover:bg-white/10 transition-colors opacity-0 animate-fade-in"
              style={
                {
                  "--animation-delay": `${(index + 1) * 100}ms`,
                } as React.CSSProperties
              }
            >
              <span className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                {item.label}
              </span>

              {/* Notification badge */}
              {item.hasNotification && (
                <Badge className="absolute -top-0.5 -right-2 flex items-center justify-center w-5 h-5 p-0 bg-[#fac237] hover:bg-[#fac237] rounded-full">
                  <span className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[10px]">
                    {item.notificationCount}
                  </span>
                </Badge>
              )}
            </Button>
          </Link>
        ))}

        <img
          className="opacity-0 animate-fade-in"
          style={{ "--animation-delay": "800ms" } as React.CSSProperties}
          alt="Container"
          src="https://c.animaapp.com/mi5m1nkk4tubzf/img/container.svg"
        />
      </nav>
    </header>
  );
};
