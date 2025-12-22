import React from "react";
import HoverVideo from "../../../../components/HoverVideo";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import FeaturedListingsCarousel from "../../../../components/FeaturedListingsCarousel";

const listingsData = [
  {
    id: 1,
    videoSrc: "/videos/barcelona-kitchen.mp4",
    title: "Home in Barcelona",
    description: "3 Bedrooms, Private Pool",
    price: "€400 / night",
    verified: true,
  },
  {
    id: 2,
    videoSrc: "/videos/alicante-home.mp4",
    title: "Home in Alicante",
    description: "2 Bedrooms, Shared Pool",
    price: "€180 / night",
    verified: false,
  },
  {
    id: 3,
    videoSrc: "/videos/madrid-lounge.mp4",
    title: "Apartment in Madrid",
    description: "2 Bedrooms, Close to Bernabeu",
    price: "€250 / night",
    verified: true,
  },
];

export const FeaturedListingsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      <div className="absolute top-[calc(50%-84px)] left-[calc(50%-747px)] w-[946px] h-[108px] rounded-[472.92px/53.9px] rotate-[14.22deg] blur-[100px] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)]" />

      <div className="max-w-[1392px] mx-auto">
        <div className="mb-[75px] translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-pure-white text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
            Featured Listings
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <FeaturedListingsCarousel
            listings={listingsData.map((listing) => ({
              id: String(listing.id),
              title: listing.title,
              subtitle: listing.description,
              price: listing.price,
              badge: listing.verified ? "Verified stay" : undefined,
            }))}
            autoAdvanceMs={10000}
          />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          {listingsData.map((listing, index) => {
            const cardContent = (
              <Card
                key={listing.id}
                className="group bg-transparent border-none translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-[1.02] transition-transform duration-300"
                style={
                  {
                    "--animation-delay": `${200 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-0 flex flex-col gap-7">
                  <div className="relative rounded-2xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-2xl before:[background:linear-gradient(180deg,rgba(7,10,13,0)_0%,rgba(194,174,166,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                    <HoverVideo
                      src={listing.videoSrc}
                      className="w-full h-[403px] object-cover rounded-2xl"
                    />

                    {listing.verified && (
                      <Badge className="absolute top-[35px] left-[29px] flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                        <img
                          className="w-4 h-4"
                          alt="Verified"
                          src="https://c.animaapp.com/mir8wa3wzbI6XX/img/material-symbols-verified-user.svg"
                        />
                        <span>Verified stay</span>
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] bg-clip-text text-transparent">
                      {listing.title}
                    </h3>
                    <p className="text-gray-300">{listing.description}</p>
                    <p className="text-white font-medium">{listing.price}</p>
                  </div>
                </CardContent>
              </Card>
            );

            return index === 0 ? (
              <a key={listing.id} href="/property/000001" className="block">
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="
            text-2xl font-semibold 
            bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5]
            bg-clip-text text-transparent
            flex items-center justify-center gap-2
          ">
            Boost your listing with video — upload directly or add a TikTok link.
            <img 
              src="/images/tiktok-logo.png" 
              alt="TikTok" 
              className="h-[28.8px] w-[28.8px] opacity-90"
            />
          </p>
        </div>
      </div>
    </section>
  );
};
