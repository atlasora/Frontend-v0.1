import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    id: 1,
    quote:
      "It's changed my renting life, and made me rich AF, love it, top top hun, obsessed.",
    name: "Angelina Jolie",
    avatar: "https://c.animaapp.com/mir8wa3wzbI6XX/img/ellipse-350-1.png",
    size: "large",
    position: "top-0 left-0",
  },
  {
    id: 2,
    quote: "Airbnb? ppft. Shambles lad, this is the new way to rent.",
    name: "Ronald McDonald",
    avatar: "https://c.animaapp.com/mir8wa3wzbI6XX/img/ellipse-350-2.png",
    size: "large",
    position: "top-[275px] left-0",
  },
  {
    id: 3,
    quote:
      "I found a lovely little place then I went round to my friend Tiffanys rental for breakfast.",
    name: "Audrey Hepburn",
    avatar: "https://c.animaapp.com/mir8wa3wzbI6XX/img/ellipse-350-3.png",
    size: "large",
    position: "top-[145px] left-[476px]",
  },
  {
    id: 4,
    quote:
      "I like red. Red houses are my thing, and I found them here. I'm a happy laydeeee",
    name: "Jessica Rabbit",
    avatar: "https://c.animaapp.com/mir8wa3wzbI6XX/img/ellipse-355.png",
    size: "small",
    position: "top-0 left-[476px]",
  },
  {
    id: 5,
    quote:
      "I actually get excited about my holidays now, speedier than my driving too.",
    name: "Lewis Hamilton",
    avatar: "https://c.animaapp.com/mir8wa3wzbI6XX/img/ellipse-354.png",
    size: "small",
    position: "top-[434px] left-[476px]",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      <div className="absolute top-[calc(50%+414px)] left-[calc(50%+22px)] w-[932px] h-[138px] rounded-[466px/69px] blur-[166.5px] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)]" />

      <div className="absolute top-[117px] left-[609px] w-[961px] h-[656px]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`absolute ${testimonial.position} ${
              testimonial.size === "large"
                ? "w-[451px] h-[248px]"
                : "w-[346px] h-[177px]"
            } bg-lighter-cardshover-labels border-0 ${
              testimonial.size === "large"
                ? "rounded-[9.99px]"
                : "rounded-[7.14px]"
            } overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
            }
          >
            <CardContent className="p-0 h-full flex flex-col justify-between">
              <p
                className={`${
                  testimonial.size === "large"
                    ? "mt-[29px] mx-[29px] text-2xl"
                    : "mt-[21px] mx-[21px] text-lg"
                } [font-family:'Hauora-Medium',Helvetica] font-medium text-pure-white tracking-[0] leading-[normal]`}
              >
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3 mb-[18px] mx-[29px]">
                <Avatar
                  className={
                    testimonial.size === "large"
                      ? "w-8 h-8"
                      : "w-[23px] h-[23px]"
                  }
                >
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </Avatar>
                <span
                  className={`[font-family:'Hauora-Regular',Helvetica] font-normal text-gray-300 ${
                    testimonial.size === "large" ? "text-xl" : "text-[15px]"
                  } tracking-[0] leading-[normal]`}
                >
                  {testimonial.name}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="absolute top-[308px] left-6 w-[529px] h-[200px] flex flex-col">
        <h2 className="-ml-1 h-[66px] w-[525px] self-center bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h-2 font-[number:var(--h-2-font-weight)] text-transparent text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          What people are saying
        </h2>

        <p className="ml-[-242px] h-11 w-[287px] self-center mt-2 font-body-copy font-[number:var(--body-copy-font-weight)] text-gray-300 text-[length:var(--body-copy-font-size)] tracking-[var(--body-copy-letter-spacing)] leading-[var(--body-copy-line-height)] [font-style:var(--body-copy-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Trusted by hundreds of hosts across Europe. Be part of the next
          chapter
        </p>

        <Link to="/host/start">
        <Button className="w-[203px] mt-[34px] bg-app-secondary hover:bg-app-secondary/90 h-12 gap-2 px-4 py-2 rounded-lg transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <span className="font-buttons font-[number:var(--buttons-font-weight)] text-backgrounddark-text text-[length:var(--buttons-font-size)] tracking-[var(--buttons-letter-spacing)] leading-[var(--buttons-line-height)] [font-style:var(--buttons-font-style)]">
            List your property
          </span>
          <img
            className="w-2.5 h-[10.62px]"
            alt="Arrow"
            src="https://c.animaapp.com/mir8wa3wzbI6XX/img/group-1073714270-1.png"
          />
        </Button>
        </Link>
      </div>
    </section>
  );
};
