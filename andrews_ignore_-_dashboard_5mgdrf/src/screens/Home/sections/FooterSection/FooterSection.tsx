import React from "react";
import { Linkedin, Twitter } from "lucide-react";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Support", href: "#support" },
  { label: "Legal", href: "#legal" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl leading-snug font-medium text-white">
              AtlasOra is redefining short-term rentals.
              <br />
              Fairer for hosts, simpler for guests.
            </p>
            <img
              className="w-[177px] h-[41px]"
              alt="AtlasOra Logo"
              src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo.svg"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <nav className="flex flex-wrap gap-6 text-sm text-neutral-400">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-neutral-100 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <span className="text-sm text-neutral-500">Stay for more</span>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="border-t border-neutral-800 mt-10 pt-6">
          <div className="mt-4 flex flex-col gap-4 justify-between text-xs text-neutral-500 md:flex-row">
            <span>© 2025 Atlas Ora – All rights reserved</span>
            <div className="flex gap-6">
              <button className="hover:text-neutral-200 transition">
                Privacy policy
              </button>
              <button className="hover:text-neutral-200 transition">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
