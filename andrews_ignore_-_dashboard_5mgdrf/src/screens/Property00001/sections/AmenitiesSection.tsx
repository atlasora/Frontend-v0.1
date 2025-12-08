import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const amenitiesData = [
  {
    id: 1,
    image: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/bg-video.png",
    label: "Bathroom",
    hasTikTok: true,
    hasPlayButton: true,
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/bg-video-1.png",
    label: "Kitchen",
    hasTikTok: true,
    hasPlayButton: true,
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/image-4.png",
    label: "Lounge",
    hasTikTok: false,
    hasPlayButton: false,
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/bg-video-2.png",
    label: "Balcony",
    hasTikTok: false,
    hasPlayButton: false,
  },
];

export const AmenitiesSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenitiesData.map((amenity, index) => (
          <Card
            key={amenity.id}
            className="relative h-[254px] rounded-lg overflow-hidden border-none bg-transparent translate-y-[-1rem] animate-fade-in opacity-0"
            style={
              { "--animation-delay": `${index * 200}ms` } as React.CSSProperties
            }
          >
            <div className="absolute inset-0 p-0.5 rounded-lg [background:linear-gradient(233deg,rgba(7,10,13,0)_0%,rgba(194,174,166,1)_100%)] [-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] z-[1] pointer-events-none" />

            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute top-0 left-0 w-full h-[250px] object-cover"
                alt={amenity.label}
                src={amenity.image}
              />

              {amenity.hasTikTok && (
                <img
                  className="absolute top-4 left-4 w-6 h-6 z-10"
                  alt="TikTok"
                  src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/tiktok.svg"
                />
              )}

              {amenity.hasPlayButton && (
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[27px] z-10"
                  alt="Play"
                  src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/vector.svg"
                />
              )}

              <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-pure-white text-base tracking-[0] leading-[normal] z-10">
                {amenity.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
