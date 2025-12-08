import React from "react";

const navigationLinks = [
  { label: "About", width: "w-[46px]" },
  { label: "Team", width: "w-[41px]" },
  { label: "Roadmap", width: "w-[71px]" },
  { label: "Support", width: "w-[62px]" },
  { label: "Legal", width: "w-[41px]" },
];

const footerLinks = [
  { label: "Privacy policy", width: "w-[94px]" },
  { label: "Terms of Service", width: "w-[115px]" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-ligher-section-bgs py-[38px] px-[25px] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="relative w-full max-w-[1393px] mx-auto h-[376px]">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1389px] h-[324px]"
          alt="Bg card"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/bg-card.svg"
        />

        <img
          className="absolute top-[257px] left-[43px] w-[177px] h-[41px]"
          alt="Logo"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/logo.svg"
        />

        <img
          className="absolute top-[198px] right-[68px] w-[79px] h-[31px]"
          alt="Socials icons"
          src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/socials-icons.png"
        />

        <div className="absolute top-[263px] right-[68px] [font-family:'Hauora-Regular',Helvetica] font-normal text-backgrounddark-text text-2xl tracking-[0] leading-[normal]">
          Stay for more
        </div>

        <h2 className="absolute top-[43px] left-[43px] w-[631px] [font-family:'Hauora-Medium',Helvetica] font-medium text-backgrounddark-text text-[32px] tracking-[0] leading-[normal]">
          AtlasOra is redefining short-term rentals. Fairer for hosts, simpler
          for guests.
        </h2>

        <div className="absolute bottom-0 left-0 flex items-center gap-[61px]">
          <div className="[font-family:'Hauora-Regular',Helvetica] font-normal text-backgrounddark-text text-[15px] tracking-[0] leading-[normal]">
            © 2025 Atlas Ora- All rights reserved
          </div>

          {footerLinks.map((link, index) => (
            <button
              key={index}
              className={`${link.width} [font-family:'Hauora-Regular',Helvetica] font-normal text-backgrounddark-text text-[15px] tracking-[0] leading-[normal] hover:opacity-70 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <nav className="absolute top-[43px] right-[68px] flex items-center gap-[47px]">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className={`${link.width} font-links font-[number:var(--links-font-weight)] text-backgrounddark-text text-[length:var(--links-font-size)] tracking-[var(--links-letter-spacing)] leading-[var(--links-line-height)] [font-style:var(--links-font-style)] hover:opacity-70 transition-opacity`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};
