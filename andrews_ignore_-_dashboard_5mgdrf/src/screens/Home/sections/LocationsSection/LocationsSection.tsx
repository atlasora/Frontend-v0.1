import React from "react";

export const LocationsSection = (): JSX.Element => {
  const photoCards = [
    {
      containerClasses:
        "absolute top-[497px] left-[191px] w-44 h-[308px] rotate-[169deg]",
      imageWrapperClasses:
        "ml-[2.0px] h-[251px] w-[154px] self-center mt-[12.0px]",
      innerWrapperClasses: "-mt-20 h-[325px] ml-[-32.0px] w-52",
      images: [
        {
          classes:
            "absolute top-[67px] -left-1 w-[199px] h-[274px] object-cover",
          src: "https://c.animaapp.com/mir8wa3wzbI6XX/img/image-152-1.png",
          alt: "Image",
        },
        {
          classes:
            "absolute top-[67px] -left-1 w-[199px] h-[275px] object-cover",
          src: "https://c.animaapp.com/mir8wa3wzbI6XX/img/image-110.png",
          alt: "Image",
        },
      ],
      labelClasses: "ml-[124.4px] w-[34px] h-[19px] rotate-[-175.16deg]",
      labelText: "Park",
    },
    {
      containerClasses:
        "absolute top-[468px] left-[1132px] w-[236px] h-[373px]",
      cardClasses:
        "absolute top-2 left-[15px] w-[204px] h-[357px] rotate-[5deg]",
      imageWrapperClasses: "mt-[14.4px] w-[178.21px] h-[290.71px] ml-[1.2px]",
      innerWrapperClasses: "mt-0 h-[292.51px] ml-[-9.0px] w-[187.21px]",
      images: [
        {
          classes:
            "absolute -top-1.5 left-[-3px] w-[202px] h-[305px] object-cover",
          src: "https://c.animaapp.com/mir8wa3wzbI6XX/img/image-152-1.png",
          alt: "Image",
        },
        {
          classes:
            "absolute -top-1.5 left-[-3px] w-[203px] h-[305px] object-cover",
          src: "https://c.animaapp.com/mir8wa3wzbI6XX/img/image-110-1.png",
          alt: "Image",
        },
      ],
      labelClasses: "absolute top-[332px] left-[109px] rotate-[4.47deg]",
      labelText: "Jess + Paul",
    },
  ];

  return (
    <section className="relative self-stretch w-full h-[1054px] overflow-hidden">
      <div
        className={`${photoCards[0].containerClasses} flex flex-col gap-[9.2px] bg-pure-white rounded overflow-hidden opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]`}
      >
        <div
          className={`${photoCards[0].imageWrapperClasses} flex items-center justify-center overflow-hidden`}
        >
          <div className={`${photoCards[0].innerWrapperClasses} relative`}>
            {photoCards[0].images.map((image, index) => (
              <img
                key={`park-image-${index}`}
                className={image.classes}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>

        <div
          className={`${photoCards[0].labelClasses} [font-family:'Inter',Helvetica] font-normal text-backgrounddark-text text-base tracking-[0] leading-[normal] whitespace-nowrap`}
        >
          {photoCards[0].labelText}
        </div>
      </div>

      <div className="absolute top-[calc(50.00%_+_36px)] left-[calc(50.00%_-_418px)] w-[835px] h-[453px] rounded-[417.5px/226.5px] blur-[179.5px] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)]" />

      <img
        className="absolute top-[calc(50.00%_-_322px)] left-[calc(50.00%_-_459px)] w-[918px] h-[456px] rounded-[6.93px] border-4 border-solid border-transparent opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]"
        alt="Video tile main"
        src="https://c.animaapp.com/mir8wa3wzbI6XX/img/video-tile-main.png"
      />

      <img
        className="absolute top-[293px] left-[calc(50.00%_-_720px)] w-[1440px] h-[761px] object-cover opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:300ms]"
        alt="Globe image"
        src="https://c.animaapp.com/mir8wa3wzbI6XX/img/globe-image.png"
      />

      <img
        className="absolute h-[6.64%] top-[53.32%] left-[calc(50.00%_-_29px)] w-[58px] opacity-0 animate-fade-in [--animation-delay:500ms]"
        alt="Vector"
        src="https://c.animaapp.com/mir8wa3wzbI6XX/img/vector-1.svg"
      />

      <div className="absolute top-[885px] left-[-621px] w-[2682px] h-[500px] bg-backgrounddark-text rounded-[1341px/250px] blur-[100px]" />

      <p className="absolute top-[889px] left-[calc(50.00%_-_158px)] font-body-copy font-[number:var(--body-copy-font-weight)] text-gray-200 text-[length:var(--body-copy-font-size)] text-center tracking-[var(--body-copy-letter-spacing)] leading-[var(--body-copy-line-height)] [font-style:var(--body-copy-font-style)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:700ms]">
        Over 50 hosts already earning in Barcelona.
        <br />
        Experiences that put people first.
      </p>

      <img
        className="absolute top-[825px] left-[calc(50.00%_-_13px)] w-[26px] h-6 opacity-0 animate-fade-in [--animation-delay:800ms]"
        alt="Down arrow"
        src="https://c.animaapp.com/mir8wa3wzbI6XX/img/down-arrow.png"
      />

      <h2 className="absolute top-[calc(50.00%_+_162px)] left-[calc(50.00%_-_231px)] bg-[linear-gradient(123deg,rgba(255,147,139,1)_0%,rgba(241,170,123,1)_58%,rgba(240,208,158,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Hauora-Regular',Helvetica] font-normal text-transparent text-[100px] text-center tracking-[0] leading-[normal] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
        Barcelona
      </h2>

      <div className={photoCards[1].containerClasses}>
        <div
          className={`${photoCards[1].cardClasses} flex justify-center bg-pure-white rounded overflow-hidden opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:500ms]`}
        >
          <div
            className={`${photoCards[1].imageWrapperClasses} flex items-center justify-center overflow-hidden`}
          >
            <div className={`${photoCards[1].innerWrapperClasses} relative`}>
              {photoCards[1].images.map((image, index) => (
                <img
                  key={`jess-paul-image-${index}`}
                  className={image.classes}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${photoCards[1].labelClasses} font-body-copy font-[number:var(--body-copy-font-weight)] text-backgrounddark-text text-[length:var(--body-copy-font-size)] tracking-[var(--body-copy-letter-spacing)] leading-[var(--body-copy-line-height)] [font-style:var(--body-copy-font-style)]`}
        >
          {photoCards[1].labelText}
        </div>
      </div>

      <div className="absolute top-[292px] left-[1078px] w-[294px] h-[93px] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
        <img
          className="absolute w-[7.48%] h-[23.66%] top-0 left-0"
          alt="Vector"
          src="https://c.animaapp.com/mir8wa3wzbI6XX/img/vector.svg"
        />

        <div className="absolute top-2.5 left-[17px] w-[277px] h-[83px] opacity-80">
          <img
            className="absolute top-[9px] left-2 w-5 h-5"
            alt="Polygon"
            src="https://c.animaapp.com/mir8wa3wzbI6XX/img/polygon-1.svg"
          />

          <div className="absolute top-3 left-[13px] w-[264px] h-[71px] flex items-center justify-center bg-lighter-cardshover-labels rounded-[15px] overflow-hidden">
            <p className="mt-[3px] h-12 w-[234px] [font-family:'Hauora-Medium',Helvetica] font-medium text-pure-white text-xs tracking-[0] leading-[normal]">
              Jessica + Paul found the perfect home away from home for their
              relationship-fixing reboot.
            </p>
          </div>
        </div>
      </div>

      <h1 className="absolute top-[107px] left-[calc(50.00%_-_413px)] font-h-2 font-[number:var(--h-2-font-weight)] text-pure-white text-[length:var(--h-2-font-size)] text-center tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
        Real hosts. Real homes. Real income.
      </h1>
    </section>
  );
};
