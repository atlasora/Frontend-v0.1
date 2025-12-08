import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const amenities = [
  "Wi-Fi",
  "Air conditioning",
  "Kitchen",
  "Washer",
  "Free parking",
  "Pool",
  "Workspace",
  "TV",
];

const HostAmenities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="What can guests use?"
      description="Tick the essentials. You can refine this list later."
      step={5}
      totalSteps={9}
    >
      <div className="max-w-xl">
        <div className="grid grid-cols-2 gap-3 text-sm">
          {amenities.map((a) => (
            <button
              key={a}
              type="button"
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left hover:border-[#f2bfa7] hover:bg-white/10 transition"
            >
              <span className="h-4 w-4 rounded border border-white/30" />
              <span>{a}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/photos")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostAmenities;

