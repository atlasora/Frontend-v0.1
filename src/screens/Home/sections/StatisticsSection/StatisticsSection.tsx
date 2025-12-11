import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const StatisticsSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center text-center bg-black">
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#FFB083] to-[#FF8C6B] bg-clip-text text-transparent mb-6">
        Hosts in Spain get first access — launching Q1 2025.
      </h2>

      <p className="text-xl text-white/80 mb-2">
        Speak to our listing manager now to secure exclusive discounts.
      </p>

      <p className="text-lg text-white/60">
        hostsupport@atlasora.com
      </p>

      <div className="mt-6 flex justify-center">
        <Button
          onClick={() => navigate("/host")}
          className="
            px-10 py-4 rounded-full text-black font-semibold 
            bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] 
            hover:opacity-90 transition-all duration-300
          "
        >
          List your property
        </Button>
      </div>
    </section>
  );
};
