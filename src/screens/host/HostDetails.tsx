import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Write a short, clear description"
      description="Tell guests what makes your place work for real people — not influencers."
      step={7}
      totalSteps={9}
    >
      <div className="max-w-xl space-y-3">
        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Listing title</label>
          <input
            className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            placeholder="Sunlit 2-bed near the sea"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Description</label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            placeholder="Keep it honest, specific, and simple. Little things matter more than buzzwords."
          />
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/pricing")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostDetails;

