import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const nextSteps = [
    "Complete your host profile (photo and bio)",
    "Add or update your pricing rules",
    "Upload any required registration details for your region",
  ];

  return (
    <HostLayout
      title="Your place has been created on AtlasOra."
      description="Keep going to refine details and publish confidently."
      step={13}
      totalSteps={13}
    >
      <div className="max-w-2xl space-y-4 text-sm text-neutral-200">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-lg font-semibold text-white mb-2">Next steps</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-200">
            {nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
        >
          View my listing
        </button>
      </div>
    </HostLayout>
  );
};

export default HostConfirmation;


