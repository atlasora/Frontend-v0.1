import React from "react";

const calendarData = [
  {
    day: "1",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "2",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "3",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "4",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "5",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "6",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "7",
    price: "€495",
    borderClasses:
      "border-t-[0.5px] [border-top-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "8",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "9",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "10",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "11",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "12",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "13",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "14",
    price: "€495",
    borderClasses: "border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "15",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "16",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "17",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "18",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "19",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "20",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "21",
    price: "€495",
    borderClasses: "border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "22",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "23",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "24",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "25",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "26",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "27",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "28",
    price: "€495",
    borderClasses: "border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "29",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
  {
    day: "30",
    price: "€495",
    borderClasses:
      "border-r-[0.5px] [border-right-style:solid] border-b-[0.5px] [border-bottom-style:solid]",
  },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap w-full items-start gap-[0px_0px]">
      {calendarData.map((item, index) => (
        <div
          key={`calendar-cell-${index}`}
          className={`flex flex-col w-[155.14px] h-[120px] items-start justify-between p-6 relative ${item.borderClasses} border-[#ffffff1a]`}
        >
          <div className="mt-[-0.50px] text-white text-sm leading-[14px] relative w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
            {item.day}
          </div>

          <div className="text-sm leading-[14px] relative w-fit [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white tracking-[0] whitespace-nowrap">
            {item.price}
          </div>
        </div>
      ))}
    </section>
  );
};
