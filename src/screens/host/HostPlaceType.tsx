import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const options = [
  "Entire home",
  "Private room",
  "Shared room",
  "Studio",
  "Guest house",
];

const HostPlaceType: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="What type of place are you listing?"
      description="Guests see this first. You can refine the details later."
      step={2}
      totalSteps={9}
    >
      <div className="space-y-4 max-w-xl">
        <div className="grid gap-3 md:grid-cols-2">
          {options.map((opt) => (
            <button
              key={opt}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm hover:border-[#f2bfa7] hover:bg-white/10 transition"
              // later: onClick={() => setType(opt)}
              type="button"
            >
              <span className="block text-neutral-50">{opt}</span>
              <span className="mt-1 block text-[11px] text-neutral-400">
                Placeholder description
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/location")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPlaceType;

