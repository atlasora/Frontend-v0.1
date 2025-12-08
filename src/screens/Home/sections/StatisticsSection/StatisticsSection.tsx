import React from "react";

export const StatisticsSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 flex flex-col items-center justify-center text-center bg-black">
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#FFB083] to-[#FF8C6B] bg-clip-text text-transparent mb-6">
        Hosts in Spain get first access — launching Q1 2025.
      </h2>

      <p className="text-xl text-white/80 mb-2">
        Speak to our listing manager now to secure exclusive discounts.
      </p>

      <p className="text-lg text-white/60">
        alex@atlasora.com
      </p>
    </section>
  );
};
