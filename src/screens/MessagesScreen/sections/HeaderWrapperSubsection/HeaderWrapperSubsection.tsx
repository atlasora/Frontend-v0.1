import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", hasNotification: false },
  { label: "Listings", hasNotification: false },
  { label: "Reservations", hasNotification: false },
  { label: "Messages", hasNotification: true, notificationCount: 10 },
  { label: "Calendar", hasNotification: false },
  { label: "Earnings", hasNotification: false },
  { label: "Performance", hasNotification: false },
];

export const HeaderWrapperSubsection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 bg-transparent border-b border-[#ffffff1a]">
      <img
        className="w-[122.1px] h-[28.08px]"
        alt="Logo"
        src="https://c.animaapp.com/mi5m1nkk4tubzf/img/logo-1.svg"
      />

      <nav className="flex items-center justify-center gap-4">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="relative h-10 px-4 py-0 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] whitespace-nowrap">
              {item.label}
            </span>
            {item.hasNotification && (
              <Badge className="absolute -top-0.5 -right-1 flex items-center justify-center w-5 h-5 p-0 bg-[#fac237] hover:bg-[#fac237] rounded-full border-0">
                <span className="text-black text-[10px] leading-[10px] [font-family:'Hauora-SemiBold',Helvetica] font-semibold tracking-[0]">
                  {item.notificationCount}
                </span>
              </Badge>
            )}
          </Button>
        ))}

        <Avatar className="w-10 h-10">
          <AvatarImage
            src="https://c.animaapp.com/mi5m1nkk4tubzf/img/container.svg"
            alt="User avatar"
          />
          <AvatarFallback className="bg-white/10 text-white">U</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};
