import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostLocation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Where is your place?"
      description="We only show the full address to confirmed guests. Everyone else just sees an approximate location."
      step={4}
      totalSteps={13}
    >
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] max-w-3xl">
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-xs text-neutral-300">Country</label>
            <input
              className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              placeholder="Spain"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-neutral-300">Street address</label>
            <input
              className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              placeholder="Street, building, door"
            />
            {/* TODO: replace with Google Places autocomplete and capture lat/lng */}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-xs text-neutral-300">Town / city</label>
              <input
                className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                placeholder="Barcelona"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-neutral-300">Postcode / ZIP</label>
              <input
                className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                placeholder="08001"
              />
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="h-40 rounded-xl bg-neutral-900/70 mb-3" />
          <p className="text-[11px] text-neutral-400">
            Map placeholder. Later: show approximate pin, support drag-to-adjust,
            and hook into your address API.
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-neutral-400 max-w-3xl">
        We only show the exact address to guests after they’ve confirmed a booking.
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8 max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-neutral-300 hover:text-white"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/host/basics")}
          className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
        >
          Continue
        </button>
      </div>
    </HostLayout>
  );
};

export default HostLocation;

