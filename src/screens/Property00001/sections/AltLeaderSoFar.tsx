import { CalendarIcon, GlobeIcon, PlayIcon, UsersIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { AmenitiesSection } from "./AmenitiesSection"
import { FooterSection } from "./FooterSection"
import { ImageGallerySection } from "./ImageGallerySection"
import { PropertyDetailsSection } from "./PropertyDetailsSection"


const navigationLinks = [
  { label: "Discover", href: "#discover" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Become a host", href: "#host" },
];

export const AltLeaderSoFar = (): JSX.Element => {
  return (
    <div
      className="bg-[#070a0d] overflow-hidden w-full min-w-[1440px] relative"
      data-model-id="125:42"
    >
      <div className="absolute top-[787px] left-[-62px] w-[1538px] h-[105px] rounded-[769px/52.5px] rotate-180 blur-[100px] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_24%,rgba(7,10,13,1)_100%)]" />

      <div className="left-[307px] bottom-[366px] h-[72px] rounded-[413px/36px] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_24%,rgba(7,10,13,1)_100%)] absolute w-[826px] rotate-180 blur-[100px]" />

      <header className="flex w-[1392px] items-center justify-between absolute top-6 left-6 bg-transparent z-50 translate-y-[-1rem] animate-fade-in opacity-0">
        <img
          className="relative w-[122.1px] h-[28.08px]"
          alt="Logo"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/logo-1.svg"
        />

        <div className="inline-flex h-11 items-center gap-2 pl-5 pr-1.5 py-2 relative flex-[0_0_auto] bg-[#ffffff1a] rounded-full overflow-hidden">
          <div className="inline-flex items-center gap-3 pl-0 pr-4 py-0 relative flex-[0_0_auto]">
            <GlobeIcon className="relative w-[18px] h-[18px] text-white" />

            <div className="relative w-fit [font-family:'Hauora-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
              Bangkok
            </div>

            <div className="relative w-px h-4 bg-[#ffffff80]" />

            <CalendarIcon className="relative w-4 h-4 text-white" />

            <div className="relative w-fit [font-family:'Hauora-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
              Oct 30 - Nov 18
            </div>

            <div className="relative w-px h-4 bg-[#ffffff80]" />

            <UsersIcon className="relative w-4 h-4 text-white" />

            <div className="relative w-fit [font-family:'Hauora-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
              2 guests
            </div>
          </div>

          <img
            className="relative w-8 h-8 mt-[-2.00px] mb-[-2.00px]"
            alt="Btn"
            src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/btn.svg"
          />
        </div>

        <nav className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
          {navigationLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex h-10 items-center justify-center gap-2 px-4 py-0 relative flex-[0_0_auto] rounded-full hover:bg-[#ffffff1a] transition-colors"
            >
              <span className="relative w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                {link.label}
              </span>
            </Button>
          ))}

          <div className="inline-flex items-center gap-6 pl-4 pr-0 py-0 relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-3 px-4 py-3.5 flex-[0_0_auto] bg-[#ffffff1a] rounded-full h-10 relative">
              <img
                className="relative w-4 h-4 mt-[-2.00px] mb-[-2.00px]"
                alt="Frame"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/frame.svg"
              />

              <div className="relative self-stretch w-px bg-[#ffffff80]" />

              <div className="mt-[-2.00px] [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[14px] whitespace-nowrap relative w-fit">
                EUR
              </div>
            </div>

            <img
              className="w-10 h-10 relative"
              alt="Litem"
              src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/litem.svg"
            />
          </div>
        </nav>
      </header>

      <section className="relative top-[121px] left-6 w-[1392px] h-[783px] flex bg-[url(https://c.animaapp.com/mi74tnpoEhVBYJ/img/rectangle-1.png)] bg-[100%_100%] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Button
          variant="secondary"
          className="flex mt-[703px] w-48 h-auto ml-[1168px] relative items-center justify-center gap-[7px] px-[15px] py-[11px] bg-[#06090c] rounded-lg overflow-hidden hover:bg-[#0a0f14] transition-colors"
        >
          <span className="relative w-fit [-webkit-text-stroke:1px_#000000] [font-family:'Hauora-Medium',Helvetica] font-medium text-pure-white text-base tracking-[0] leading-[normal]">
            All photos &amp; videos
          </span>

          <img
            className="relative w-2.5 h-[10.62px]"
            alt="Group"
            src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-1073714270.png"
          />
        </Button>
      </section>

      <article className="relative top-[calc(50.00%_-_1369px)] left-[calc(50.00%_-_698px)] w-[272px] h-[254px] rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(233deg,rgba(7,10,13,0)_0%,rgba(194,174,166,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <img
          className="w-[268px] h-[250px] object-cover absolute top-0 left-0"
          alt="Bg video"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/bg-video-3.png"
        />

        <h3 className="absolute top-[212px] left-[calc(50.00%_-_120px)] [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-pure-white text-base tracking-[0] leading-[normal]">
          Living Room
        </h3>

        <img
          className="absolute top-4 left-4 w-6 h-6"
          alt="Tik tok"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/tiktok.svg"
        />

        <PlayIcon className="absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_14px)] w-6 h-[27px] text-white fill-white" />
      </article>

      <div className="flex flex-col w-[1154px] items-start pl-[-444.29px] pr-[444.29px] py-0 absolute top-[1338px] left-6 bg-[#070a0d] rounded-[16777200px] overflow-hidden">
        <div className="relative w-[738px] h-2 bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)]" />
      </div>

      <ImageGallerySection />

      <AmenitiesSection />

      <div className="top-[1184px] left-[505px] h-14 rounded-[413.02px/28.21px] absolute w-[826px] rotate-180 blur-[100px]" />

      <PropertyDetailsSection />

      <FooterSection />
    </div>
  );
};
