import { ChevronUpIcon, InfoIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

const amenitiesLeft = [
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group.png",
    label: "TV",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-1.png",
    label: "Kitchen",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-2.png",
    label: "Wifi",
  },
];

const amenitiesRight = [
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-3.png",
    label: "Free parking",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-4.png",
    label: "Pool",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-5.png",
    label: "Air conditioning",
  },
];

const ratingCategories = [
  { label: "Cleanliness", value: 4.9, width: "w-[360px]" },
  { label: "Accuracy", value: 4.7, width: "w-80" },
  { label: "Check-in", value: 3.8, width: "w-[270px]" },
  { label: "Communication", value: 5, width: "w-full" },
  { label: "Location", value: 4.2, width: "w-80" },
  { label: "Value", value: 4.1, width: "w-[290px]" },
];

const reviews = [
  {
    avatar: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/img-2.png",
    name: "Sara Johnson",
    date: "September 2025",
    rating: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/frame-1073714284.svg",
    text: "Amazing place! The apartment was exactly as described. Clean, spacious, and the location was perfect for exploring the city. The video tour really helped us know what to expect.",
  },
  {
    avatar: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/img-2.png",
    name: "Sara Johnson",
    date: "September 2025",
    rating: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/frame-1073714284.svg",
    text: "Amazing place! The apartment was exactly as described. Clean, spacious, and the location was perfect for exploring the city. The video tour really helped us know what to expect.",
  },
  {
    avatar: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/img-2.png",
    name: "Sara Johnson",
    date: "September 2025",
    rating: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/frame-1073714284.svg",
    text: "Amazing place! The apartment was exactly as described. Clean, spacious, and the location was perfect for exploring the city. The video tour really helped us know what to expect.",
  },
];

const trustBadges = [
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-10.png",
    label: "Enhanced Clean",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-11.png",
    label: "Rest Assured",
  },
  {
    icon: "https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-12.png",
    label: "Seamless Stay",
  },
];

const houseRules = [
  "Check-in: After 3:00 PM",
  "Check-out: 11:00 AM",
  "4 guests maximum",
  "No pets",
  "No smoking",
];

const safetyProperty = [
  "Security camera/recording device",
  "Carbon monoxide alarm",
  "Smoke alarm",
];

const cancellationPolicy = [
  "Free cancellation before Oct 20",
  "Partial refund: cancel before check-in on Oct 25",
];

const priceBreakdown = [
  { label: "$90 x 5 nights", value: "€450" },
  { label: "Service fee (5%)", value: "€22" },
  { label: "Total", value: "€472" },
];

export const PropertyDetailsSection = (): JSX.Element => {
  return (
    <section className="flex items-start gap-6 w-full">
      <div className="flex flex-col max-w-[803px] w-full items-start gap-16">
        <div className="flex flex-col items-start gap-8 w-full">
          <Card className="w-full border-[#ffffff33] bg-transparent">
            <CardContent className="flex items-center justify-between p-6">
              <img
                className="w-6 h-6"
                alt="AwardIcon badge"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/streamline-ultimate-award-badge-star-bold.svg"
              />

              <p className="flex items-center justify-center max-w-[424px] [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[normal]">
                Guests love staying here. It&apos;s the highest rated stay for
                the dates you selected, according to guests.
              </p>

              <div className="inline-flex items-center gap-8">
                <div className="inline-flex flex-col items-start justify-center gap-2">
                  <div className="flex items-center justify-center [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[-0.44px] leading-[normal]">
                    4.8
                  </div>

                  <img
                    alt="Rating stars"
                    src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/frame-1073714284.svg"
                  />
                </div>

                <Separator
                  orientation="vertical"
                  className="h-[35px] bg-white/20"
                />

                <div className="inline-flex flex-col items-start justify-center">
                  <div className="flex items-center justify-center [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[-0.44px] leading-[normal]">
                    12
                  </div>

                  <p className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#d9d9d9] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Reviews
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#ffffff0d] border-0">
            <CardContent className="p-9">
              <p className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#d9d9d9] text-base tracking-[0] leading-6">
                Experience authentic Málaga living in this charming apartment
                tucked away on a peaceful street in the historic Victoria
                neighborhood.
                <br />
                Step outside your door and you&apos;ll find cozy local bars, a
                stylish café, a fine dining restaurant, and even a traditional
                Málaga ice cream shop, all just a few steps away. The area
                offers everything you might need during your stay, including
                supermarkets, small boutiques, and local convenience stores.
                <br />
                <br />
                Within walking distance you will find the Royal Basilica and
                Sanctuary of Our Lady of Victory, the Patroness of Málaga. The
                apartment is 10 minutes from the Picasso Birthplace Museum and
                the vibrant heart of the old town. It&apos;s a perfect blend of
                tranquility and local life where you can relax, explore, and
                feel part of the city.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start gap-8 w-full">
            <h2 className="flex items-center justify-center [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[normal]">
              What this place offers
            </h2>

            <div className="flex items-start gap-8 w-full">
              <div className="flex flex-col items-start gap-8 flex-1">
                {amenitiesLeft.map((amenity, index) => (
                  <div key={index} className="inline-flex items-center gap-4">
                    <img
                      className="w-[25px] h-auto"
                      alt={amenity.label}
                      src={amenity.icon}
                    />
                    <span className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-8 flex-1">
                {amenitiesRight.map((amenity, index) => (
                  <div key={index} className="inline-flex items-center gap-4">
                    <img
                      className="w-[25px] h-auto"
                      alt={amenity.label}
                      src={amenity.icon}
                    />
                    <span className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          <button
            type="button"
            className="
              px-6 py-3 
              rounded-xl 
              bg-[#f2bfa7] 
              text-black 
              font-medium 
              shadow-md 
              hover:bg-[#e5b298] 
              transition
              [font-family:'Hauora-Medium',Helvetica]
            "
          >
            Show all amenities
          </button>
          </div>

          <div className="inline-flex flex-col items-start gap-6 w-full">
            <div className="inline-flex flex-col items-start gap-6">
              <h2 className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-[22px] tracking-[-0.44px] leading-[normal]">
                Reviews
              </h2>

              <div className="inline-flex items-center gap-2">
                <img
                  className="w-[17px] h-4"
                  alt="Star"
                  src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/vector-1.svg"
                />
                <p className="[font-family:'Hauora-Regular',Helvetica] font-normal text-base tracking-[0] leading-4 whitespace-nowrap">
                  <span className="text-white">4.8 ·</span>
                  <span className="text-[#d9d9d9]"> 23 reviews</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 pt-3 w-full">
              {[0, 1, 2].map((rowIndex) => (
                <div key={rowIndex} className="flex items-center gap-6 w-full">
                  {ratingCategories
                    .slice(rowIndex * 2, rowIndex * 2 + 2)
                    .map((category, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-3 flex-1"
                      >
                        <div className="flex items-center gap-6 w-full">
                          <span className="flex-1 [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[14px]">
                            {category.label}
                          </span>
                          <span className="flex-1 [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm text-right tracking-[0] leading-[14px]">
                            {category.value}
                          </span>
                        </div>
                        <div className="flex flex-col items-start gap-2 w-full bg-[#333333] rounded-[99px]">
                          <div
                            className={`${category.width} h-0.5 bg-[#dbf9f8] rounded-[99px]`}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            <section className="mt-10 rounded-2xl border border-[#f2bfa7]/20 bg-[#070a0d] p-6 max-w-4xl">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
                Customers say
              </h2>
              {/* Review summary text */}
              <p className="text-sm md:text-base leading-relaxed text-neutral-200 max-w-2xl">
                Guests love the cozy atmosphere and spotless interior. The balcony view is stunning, and the host is responsive and welcoming. Many guests highlight how close the apartment is to cafés, restaurants and the beach, making it ideal for both short and long stays. Check-in is smooth and hassle-free.
              </p>
              {/* Highlight chips */}
              <div className="mt-4 flex flex-wrap gap-3">
                {["Atmosphere", "Cleanliness", "Balcony view"].map((label) => (
                  <span
                    key={label}
                    className="
                      inline-flex items-center gap-2
                      rounded-full
                      bg-[#101318]
                      border border-[#f2bfa7]/40
                      px-4 py-2
                      text-xs md:text-sm
                      text-neutral-100
                    "
                  >
                    <span className="h-5 w-5 rounded-full border border-[#f2bfa7] flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    {label}
                  </span>
                ))}
              </div>
              {/* Footnote */}
              <p className="mt-4 text-xs text-neutral-500">
                AI-generated from the text of guest reviews.
              </p>
            </section>

            <div className="flex flex-col items-start gap-9 pt-6 w-full">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start gap-4 w-full">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col max-w-[739px] w-full items-start gap-2">
                    <div className="inline-flex items-start gap-2">
                      <span className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                        {review.name}
                      </span>
                      <span className="[font-family:'Hauora-Light',Helvetica] font-normal text-[#ffffffbf] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                        <span className="font-light">
                          {" "}
                          ·&nbsp;&nbsp;{review.date}
                        </span>
                      </span>
                    </div>

                    <img alt="Rating" src={review.rating} />

                    <div className="flex items-center justify-center gap-2 pt-3 w-full">
                      <p className="flex-1 [font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="
                px-6 py-3
                rounded-xl
                bg-[#f2bfa7]
                text-black
                font-medium
                shadow-md
                hover:bg-[#e5b298]
                transition
                inline-flex items-center gap-2
                [font-family:'Hauora-Medium',Helvetica]
              "
            >
              <img
                className="w-[15.21px] h-[15.21px]"
                alt="Reviews icon"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-9.png"
              />
              All reviews
            </button>
          </div>

          <div className="flex items-center justify-between px-4 py-0 h-[75px] w-full border-t border-[#ffffff1a]">
            {trustBadges.map((badge, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="h-[35px] bg-white/20"
                  />
                )}
                <div className="flex items-center gap-4">
                  <img
                    className="w-[25px] h-auto"
                    alt={badge.label}
                    src={badge.icon}
                  />
                  <span className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                    {badge.label}
                  </span>
                  <InfoIcon className="w-4 h-4 text-white" />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col items-start gap-6 pt-6 w-full border-t border-[#ffffff1a]">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-7-1.png"
                  alt="Ester"
                />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>

              <div className="inline-flex flex-col items-start justify-center gap-2">
                <h3 className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                  Hosted by Ester
                </h3>

                <div className="inline-flex items-start gap-4">
                  <div className="inline-flex items-center justify-center gap-2">
                    <img
                      className="w-2.5 h-4"
                      alt="Top host"
                      src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-13.png"
                    />
                    <span className="[font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      Top host
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2">
                    <img
                      className="w-3.5 h-4"
                      alt="Verified"
                      src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/vector-5.svg"
                    />
                    <span className="[font-family:'Hauora-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      Identity verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-3 w-full">
            <h2 className="flex items-center justify-center [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[normal]">
              Where you&apos;ll be
            </h2>

            <p className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-[#ffffffbf] text-sm tracking-[0] leading-[normal]">
              Victoria, Málaga, Spain
            </p>
          </div>

          <img
            className="w-full h-80 rounded-xl object-cover"
            alt="Map"
            src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/map.png"
          />

          <button
            type="button"
            className="
              px-6 py-3
              rounded-xl
              bg-[#f2bfa7]
              text-black
              font-medium
              shadow-md
              hover:bg-[#e5b298]
              transition
              inline-flex items-center gap-2
              [font-family:'Hauora-Medium',Helvetica]
            "
          >
            <img
              className="w-[17px] h-[17px]"
              alt="Location"
              src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-14.png"
            />
            About this area
          </button>
        </div>

        <div className="inline-flex flex-col items-start gap-8 pt-9 w-full border-t border-[#ffffff1a]">
          <h2 className="flex items-center justify-center [font-family:'Hauora-Medium',Helvetica] font-medium text-white text-[22px] tracking-[-0.44px] leading-[normal]">
            Things to know
          </h2>

          <div className="flex items-start gap-16 w-full">
            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="flex items-center justify-center [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                House rules
              </h3>

              <div className="flex flex-col items-start gap-2 w-full">
                {houseRules.map((rule, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-gray-300 text-sm tracking-[0] leading-[normal]"
                  >
                    {rule}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="flex items-center justify-center [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                Safety &amp; property
              </h3>

              <div className="flex flex-col items-start gap-2 w-full">
                {safetyProperty.map((item, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-gray-300 text-sm tracking-[0] leading-[normal]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="flex items-center justify-center [font-family:'Hauora-SemiBold',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[normal]">
                Cancellation policy
              </h3>

              <div className="flex flex-col items-start gap-2 w-full">
                {cancellationPolicy.map((policy, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center [font-family:'Hauora-Regular',Helvetica] font-normal text-gray-300 text-sm tracking-[0] leading-[normal]"
                  >
                    {policy}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card
        className="flex flex-col w-[327
px] items-start gap-4 pt-6 pb-5 px-5 bg-[#f0e9e6] rounded-lg"
      >
        <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
          <div className="inline-flex items-center gap-2">
            <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#070a0d] text-[32px] tracking-[-1.28px] leading-8 whitespace-nowrap">
              €189
            </span>
            <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#070a0d] text-sm tracking-[-0.14px] leading-[14px] whitespace-nowrap">
              per night
            </span>
          </div>

          <div className="flex items-start gap-4 w-full">
            <div className="flex items-center justify-between p-3 flex-1 bg-white rounded-lg overflow-hidden">
              <div className="inline-flex flex-col items-start gap-2">
                <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#00000080] text-xs tracking-[0] leading-3 whitespace-nowrap">
                  Check-in
                </span>
                <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                  17/7/2025
                </span>
              </div>
              <ChevronUpIcon className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-between p-3 flex-1 bg-white rounded-lg overflow-hidden">
              <div className="inline-flex flex-col items-start gap-2">
                <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#00000080] text-xs tracking-[0] leading-3 whitespace-nowrap">
                  Check-out
                </span>
                <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                  20/7/2025
                </span>
              </div>
              <ChevronUpIcon className="w-5 h-5" />
            </div>
          </div>

          <div className="flex items-start justify-between p-4 w-full bg-white rounded-lg">
            <div className="inline-flex flex-col items-start gap-2">
              <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-[#00000080] text-xs tracking-[0] leading-3 whitespace-nowrap">
                Guests
              </span>
              <span className="[font-family:'Hauora-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                2 guests
              </span>
            </div>

            <div className="relative w-6 h-6 bg-white rounded-xl border border-solid border-[#00000040]">
              <img
                className="absolute top-[50%] left-[calc(50%_-_6px)] w-3 h-px object-cover"
                alt="Line"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/line-1.svg"
              />
              <img
                className="absolute top-[calc(50%_-_6px)] left-[50%] w-px h-3 object-cover"
                alt="Line"
                src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/line-2.svg"
              />
            </div>
          </div>

          <Button className="h-12 w-full bg-[#06090c] hover:bg-[#06090c]/90 rounded-lg [font-family:'Hauora-Medium',Helvetica] font-medium text-pure-white text-base">
            Reserve
            <img
              className="w-2.5 h-[10.62px] ml-2"
              alt="Arrow"
              src="https://c.animaapp.com/mi74tnpoEhVBYJ/img/group-1073714270-1.png"
            />
          </Button>

          <p className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#070a0dbf] text-xs text-center tracking-[0] leading-[normal] w-full">
            You won&apos;t be charged yet.
          </p>

          <div className="flex flex-col items-center gap-[13px] w-full">
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col items-start gap-4">
                {priceBreakdown.map((item, index) => (
                  <span
                    key={index}
                    className="[font-family:'Hauora-Regular',Helvetica] font-normal text-[#070a0d] text-sm tracking-[0] leading-[normal]"
                  >
                    {item.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-end gap-4">
                {priceBreakdown.map((item, index) => (
                  <span
                    key={index}
                    className="[font-family:'Hauora-SemiBold',Helvetica] font-semibold text-[#070a0d] text-sm text-right tracking-[0] leading-[normal]"
                  >
                    {item.value}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 w-full bg-[#ffffff80] rounded-lg">
              <p className="flex-1 [font-family:'Hauora-Regular',Helvetica] font-normal text-xs text-center tracking-[0] leading-[normal]">
                <span className="text-[#070a0d]">You save </span>
                <span className="[font-family:'Hauora-Bold',Helvetica] font-bold text-[#070a0d]">
                  €45
                </span>
                <span className="text-[#070a0d]">
                  {" "}
                  on your booking with AtlasOra compared to competitors1.
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
