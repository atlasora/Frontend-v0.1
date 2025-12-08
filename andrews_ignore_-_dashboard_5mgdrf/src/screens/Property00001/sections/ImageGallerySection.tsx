import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Heart } from "lucide-react";

export const ImageGallerySection = (): JSX.Element => {
  const [saved, setSaved] = useState(false);

  return (
    <section className="flex flex-col w-full items-start gap-3 px-6 translate-y-[-1rem] animate-fade-in opacity-0">
      <header className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-12">
            <h1 className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#FF9F7A] text-3xl tracking-[-0.60px] leading-[normal]">
              Beachfront Property in Barcelona
            </h1>

            <div className="flex items-center gap-2">
              <img
                className="w-[17px] h-4"
                alt="StarIcon rating"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/vector-1.svg"
              />

              <div className="[font-family:'Hauora-SemiBold',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                <span className="font-semibold text-white">4.8 </span>
                <span className="[font-family:'Hauora-Regular',Helvetica] text-white">
                  ·
                </span>
                <span className="[font-family:'Hauora-Light',Helvetica] font-light text-[#d9d9d9]">
                  {" "}
                  23 reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setSaved((prev) => !prev)}
            className="inline-flex items-center gap-2 h-auto p-0 hover:opacity-80 transition-opacity"
          >
            {saved ? (
              <Heart className="w-[19px] h-[17.22px] fill-[#FF9F7A] text-[#FF9F7A]" />
            ) : (
              <img
                className="w-[19px] h-[17.22px]"
                alt="Save icon"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-15.png"
              />
            )}
            <span className={`[font-family:'Hauora-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[normal] ${saved ? 'text-[#FF9F7A]' : 'text-white'}`}>
              Save
            </span>
          </button>

          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 h-auto p-0 hover:bg-transparent transition-opacity"
          >
            <img
              className="w-[18.1px] h-[18.79px]"
              alt="Share icon"
              src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-16.png"
            />
            <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
              Share
            </span>
          </Button>
        </div>
      </header>

      <p className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#d9d9d9] text-lg tracking-[-0.36px] leading-[normal]">
        4 guests · 2 bedrooms · 2 baths
      </p>

      <div className="flex flex-col gap-4 mt-6">
        {/* Videos Section */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white">Videos</h2>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="w-[200px] aspect-video rounded-lg p-[1px] bg-gradient-to-br from-[#d78b5b] to-[#f2bfa7] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="w-full h-full rounded-lg bg-[#141414] flex items-center justify-center">
                  <span className="text-white/60 text-xs">Video slot</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-[#f2bfa7]">Photos</h2>
          <div
            className="
              flex gap-4
              overflow-x-auto
              pb-2
              snap-x snap-mandatory
              [-webkit-overflow-scrolling:touch]
            "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div
                key={index}
                className="
                  min-w-[220px] h-[160px]
                  rounded-xl
                  bg-[#181818]
                  border border-[#d78b5b]/60
                  flex items-center justify-center
                  text-sm text-neutral-400
                  snap-start
                "
              >
                Photo slot
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
