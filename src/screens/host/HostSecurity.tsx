import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostSecurity: React.FC = () => {
  const navigate = useNavigate();
  const [hasCameras, setHasCameras] = useState(false);
  const [hasNoiseMonitor, setHasNoiseMonitor] = useState(false);
  const [hasWeapons, setHasWeapons] = useState(false);

  const handleContinue = () => {
    const payload = {
      hasCameras,
      hasNoiseMonitor,
      hasWeapons,
    };
    sessionStorage.setItem("hostSecurity", JSON.stringify(payload));
    navigate("/host/host-details");
  };

  return (
    <HostLayout
      title="Safety & security"
      description="Be transparent about security devices and safety considerations."
      step={10}
      totalSteps={13}
    >
      <div className="max-w-2xl space-y-4 text-sm text-neutral-200">
        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-[#f2bfa7] transition">
          <input
            type="checkbox"
            checked={hasCameras}
            onChange={(e) => setHasCameras(e.target.checked)}
            className="mt-1"
          />
          <span>There are security cameras outside the property</span>
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-[#f2bfa7] transition">
          <input
            type="checkbox"
            checked={hasNoiseMonitor}
            onChange={(e) => setHasNoiseMonitor(e.target.checked)}
            className="mt-1"
          />
          <span>There is a noise or decibel monitor in the accommodation</span>
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-[#f2bfa7] transition">
          <input
            type="checkbox"
            checked={hasWeapons}
            onChange={(e) => setHasWeapons(e.target.checked)}
            className="mt-1"
          />
          <span>There are weapons stored on the property</span>
        </label>

        <div className="rounded-2xl border border-[#f2bfa7]/30 bg-[#f2bfa7]/10 p-4 text-xs text-neutral-100">
          Security cameras must never point at the interior of the property, even if
          they are switched off. You must always disclose any cameras outside the
          property, and you’re responsible for complying with local laws and
          anti-discrimination rules.
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostSecurity;


