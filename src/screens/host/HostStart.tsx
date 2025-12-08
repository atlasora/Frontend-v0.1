import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostStart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Earn more from your place"
      description="Keep more of every booking, get paid on check-in, and stay in full control of your home."
      step={1}
      totalSteps={9}
    >
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] items-start">
        <div className="space-y-4">
          <p className="text-sm text-neutral-300">
            Listing on AtlasOra is free. You only pay a low, transparent fee
            when guests stay.
          </p>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li>• Payouts on check-in, not weeks later</li>
            <li>• No surprise cleaning or "service" fees for your guests</li>
            <li>• Built for normal hosts, not big property managers</li>
          </ul>
          <button
            onClick={() => navigate("/host/place-type")}
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#f2bfa7] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 hover:bg-[#e3b49c] transition"
          >
            Start listing
          </button>
          <p className="mt-3 text-xs text-neutral-500">
            You can pause or delete your listing at any time.
          </p>
        </div>
        <div className="hidden md:block rounded-2xl border border-white/10 bg-gradient-to-br from-[#151824] to-[#05070b] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2">
            Preview
          </p>
          <div className="rounded-xl bg-black/40 p-4 border border-white/10">
            <div className="h-28 rounded-lg bg-neutral-800/60 mb-3" />
            <div className="space-y-2">
              <div className="h-2.5 w-32 rounded bg-neutral-700" />
              <div className="h-2 w-40 rounded bg-neutral-800" />
              <div className="h-2 w-28 rounded bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostStart;

