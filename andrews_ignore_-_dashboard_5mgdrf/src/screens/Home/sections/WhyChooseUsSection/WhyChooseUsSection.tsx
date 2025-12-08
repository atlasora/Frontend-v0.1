import React from "react";
import { Coins, Zap, ShieldCheck, Star } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Coins,
      title: "Keep 99.3% — Just 0.7% Fees",
      description: "Stop losing 15–20% to platforms. You keep almost everything you earn.",
    },
    {
      icon: Zap,
      title: "Advance Payments on Your Bookings",
      description: "Instant access to cashflow the moment a guest books. No more waiting until check-in.",
    },
    {
      icon: ShieldCheck,
      title: "No Platform Overrides or Surprise Cancellations",
      description: "Your rules, your cancellations, your income protected. The platform never steps in to overrule you.",
    },
    {
      icon: Star,
      title: "Safer Stays With Guest Reputation Filtering",
      description: "Low-rating guests are filtered out automatically. Every stay starts with trust.",
    },
  ];

  return (
    <section className="w-full bg-[#05070B] py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#111318] aspect-[1.1/1]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/why-choose-us.mp4" type="video/mp4" />
              {/* Fallback text */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* Right side: 2×2 feature grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-3xl overflow-hidden bg-white/5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-[#05070B] px-8 py-10 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-[#fac237]" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
