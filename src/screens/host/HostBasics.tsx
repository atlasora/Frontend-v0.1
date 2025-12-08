import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostBasics: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Share the basics about your place"
      description="How many guests can you host comfortably?"
      step={4}
      totalSteps={9}
    >
      <div className="grid max-w-xl grid-cols-3 gap-4 text-sm">
        {["Guests", "Bedrooms", "Beds"].map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-white/15 bg-white/5 px-3 py-3"
          >
            <p className="text-xs text-neutral-400 mb-2">{label}</p>
            <div className="flex items-center justify-between">
              <button className="h-7 w-7 rounded-full border border-white/20 text-lg leading-none text-neutral-300">
                -
              </button>
              <span className="text-base font-medium">2</span>
              <button className="h-7 w-7 rounded-full border border-white/20 text-lg leading-none text-neutral-300">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8 max-w-xl">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-neutral-300 hover:text-white"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/host/amenities")}
          className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
        >
          Continue
        </button>
      </div>
    </HostLayout>
  );
};

export default HostBasics;

