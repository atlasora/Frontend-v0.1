import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const placeTypes = [
  "Apartment",
  "House",
  "Villa",
  "Townhouse",
  "Cottage",
  "Bungalow",
  "Loft",
  "Studio",
  "Farm stay",
  "Chalet",
  "Boat",
  "Other",
];

const HostPlaceType: React.FC = () => {
  const navigate = useNavigate();
  const placeCategory = "Entire place"; // AO only supports entire properties
  const [placeType, setPlaceType] = useState<string>("");

  return (
    <HostLayout
      title="What type of place are you listing?"
      description="Guests see this first. We currently support entire places only."
      step={3}
      totalSteps={13}
    >
      <div className="space-y-6 max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200">
          <p className="text-neutral-100 font-semibold">Entire place</p>
          <p className="text-neutral-400 text-xs mt-1">
            Guests have the whole place to themselves. AO currently supports
            entire properties only.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {placeTypes.map((type) => {
            const selected = placeType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setPlaceType(type)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  selected
                    ? "border-[#f2bfa7] bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-neutral-200 hover:border-[#f2bfa7] hover:bg-white/10"
                }`}
              >
                <span className="block text-neutral-50">{type}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => {
              console.log("Selected category:", placeCategory);
              console.log("Selected type:", placeType || "(none)");
              navigate("/host/location");
            }}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={!placeType}
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPlaceType;

