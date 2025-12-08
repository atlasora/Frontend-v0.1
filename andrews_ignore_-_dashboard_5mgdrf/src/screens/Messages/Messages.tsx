import { useState } from "react";
import { Header } from "../../components/Header";
import { AccountSidebar } from "../../components/AccountSidebar";
import { PaperclipIcon, SearchIcon, SendIcon, XIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const navigationItems = [
  { label: "Home", active: false },
  { label: "Listings", active: false },
  { label: "Reservations", active: false },
  { label: "Messages", active: true, badge: 10 },
  { label: "Calendar", active: false },
  { label: "Earnings", active: false },
  { label: "Performance", active: false },
];

const conversations = [
  {
    id: 1,
    name: "Shen Olsson",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-6.png",
    message: "Possible to add an extra bed?",
    time: "Today",
    active: true,
    online: true,
  },
  {
    id: 2,
    name: "Erik Johansson",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-1.png",
    message: "Could we check in earlier, around ...",
    time: "Yesterday",
    active: false,
    online: false,
  },
  {
    id: 3,
    name: "Hanna Lind",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-2.png",
    message: "Can I get an invoice for my stay?",
    time: "3 days ago",
    active: false,
    online: false,
  },
  {
    id: 4,
    name: "Noah Patel",
    avatar: "https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-3.png",
    message: "You: Sure, I can arrange that for...",
    time: "5 days ago",
    active: false,
    online: false,
  },
];

const Messages = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <AccountSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div
        className="bg-[#070a0d] min-h-screen w-full flex flex-col"
        data-model-id="62:2"
      >

      {navigationItems.find((item) => item.active)?.label === "Messages" && (
        <div
          className="w-full h-0.5 bg-[#fac237] mx-auto"
          style={{ width: "68px", marginLeft: "845px" }}
        />
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar – conversations list */}
        <aside className="w-[378px] border-r border-[#ffffff1a] flex flex-col">
          <div className="p-6">
            <h1 className="text-xl leading-5 [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white mb-6">
              Messages
            </h1>
            <div className="relative mb-6">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ffffff80]" />
              <Input
                className="w-full pl-10 bg-transparent border-none text-white placeholder:text-[#ffffff80] focus-visible:ring-0"
                placeholder="Search messages..."
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6">
            {conversations.map((conversation) => (
              <Card
                key={conversation.id}
                className={`mb-2 cursor-pointer transition-colors border-0 ${
                  conversation.active
                    ? "bg-[#ffffff0f]"
                    : "bg-transparent hover:bg-[#ffffff05]"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={conversation.avatar}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {conversation.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#16ac4b] rounded-lg border-2 border-[#16191c]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                          {conversation.name}
                        </div>
                        <div className="text-[10px] leading-[10px] [font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] tracking-[0] whitespace-nowrap">
                          {conversation.time}
                        </div>
                      </div>
                      <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-[14px] truncate">
                        {conversation.message}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </aside>

        {/* Middle – chat window */}
        <main className="flex-1 flex flex-col border-r border-[#ffffff1a]">
          <div className="flex items-center gap-4 p-6 border-b border-[#ffffff1a]">
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-6.png"
                  className="object-cover"
                />
                <AvatarFallback>SO</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#16ac4b] rounded-lg border-2 border-[#070a0d]" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5">
                Shen Olsson
              </div>
              <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-xs tracking-[0] leading-3">
                Active now
              </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <img
                className="w-8 h-8 cursor-pointer"
                alt="More options"
                src="https://c.animaapp.com/mi5m1nkk4tubzf/img/litem-1.svg"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="text-center">
              <div className="text-xs leading-3 [font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] tracking-[0]">
                Today
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="w-12 h-12 flex-shrink-0">
                <AvatarImage
                  src="https://c.animaapp.com/mi5m1nkk4tubzf/img/rectangle-6.png"
                  className="object-cover"
                />
                <AvatarFallback>SO</AvatarFallback>
              </Avatar>
              <div className="inline-flex items-center justify-center p-5 bg-[#ffffff0a] rounded-[20px_20px_20px_0px]">
                <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4">
                  Hello! Thanks for confirming my reservation.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="inline-flex items-center justify-center p-5 bg-white rounded-[20px_20px_0px_20px]">
                <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-4">
                  Thank you, see you on Friday!
                </div>
              </div>
            </div>

            <div className="w-3 h-3 bg-[#fac237] rounded-full self-start" />
          </div>

          <div className="p-6">
            <Card className="bg-[#ffffff1a] border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <PaperclipIcon className="w-6 h-6 text-[#ffffff80]" />
                  <Input
                    className="flex-1 bg-transparent border-none text-white placeholder:text-[#ffffff80] [font-family:'Hauora-Medium',Helvetica] font-medium text-base p-0 focus-visible:ring-0"
                    placeholder="Write a message..."
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    size="icon"
                    className="w-9 h-9 bg-white hover:bg-white/90 rounded-full"
                  >
                    <SendIcon className="w-5 h-5 text-black" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right sidebar – reservation details */}
        <aside className="w-[355px] flex flex-col p-6 gap-6">
          <div className="flex items-center justify-between">
            <h2 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-5">
              Reservation details
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-white hover:bg-[#ffffff0a]"
            >
              <XIcon className="w-5 h-5" />
            </Button>
          </div>

          <Card className="bg-[#ffffff14] border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Casa Victoria"
                  src="https://c.animaapp.com/mi5m1nkk4tubzf/img/image-3-2.png"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4">
              Casa Victoria
            </div>
            <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#ffffff80] text-base tracking-[0] leading-4">
              Marbella, Spain
            </div>
          </div>

          <Card className="bg-[#ffffff0f] border-0">
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="[font-family:'Hauora-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-4">
                Check-in
              </div>
              <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4">
                Fri, Oct 25, 3PM
              </div>
              <div className="w-full h-px bg-[#ffffff33]" />
              <div className="[font-family:'Hauora-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-4">
                Checkout
              </div>
              <div className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-4">
                Sun, Oct 28, 10AM
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
    </>
  );
};

export default Messages;
