import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostPricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Set your nightly price"
      description="You'll always see our fee and your net payout before a guest confirms."
      step={8}
      totalSteps={9}
    >
      <div className="max-w-xl space-y-4">
        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Nightly price (EUR)</label>
          <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[#05070b] px-3 py-2">
            <span className="text-neutral-500 text-sm">€</span>
            <input
              className="flex-1 bg-transparent text-sm outline-none"
              placeholder="120"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
          <p>
            Later we'll plug this into the TravelFi engine: yield on escrow,
            instant host advances, and fair guest rewards.
          </p>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/review")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPricing;

