import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostPhotos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HostLayout
      title="Add a few great photos"
      description="You can upload high-quality images later. For now, just imagine this is your gallery."
      step={6}
      totalSteps={9}
    >
      <div className="max-w-3xl space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 h-40 rounded-2xl border border-dashed border-white/25 bg-neutral-900/60 flex items-center justify-center text-xs text-neutral-400">
            Drag & drop images here
          </div>
          <div className="h-40 rounded-2xl bg-neutral-900/50" />
        </div>
        <p className="text-[11px] text-neutral-500">
          Later: image uploader, reorder, cover photo, compression, etc.
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/details")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPhotos;

