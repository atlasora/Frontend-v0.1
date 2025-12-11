import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostDetails: React.FC = () => {
  const navigate = useNavigate();
  const [highlightTags, setHighlightTags] = useState<string[]>([]);
  const [tagMessage, setTagMessage] = useState<string | null>(null);

  const aspectOptions = [
    "Cozy",
    "Family friendly",
    "Quiet",
    "City centre",
    "Great for work",
    "Spacious",
    "Beach nearby",
    "Scenic views",
  ];

  const toggleTag = (tag: string) => {
    setTagMessage(null);
    if (highlightTags.includes(tag)) {
      setHighlightTags((prev) => prev.filter((t) => t !== tag));
      return;
    }
    if (highlightTags.length >= 2) {
      setTagMessage("You can choose up to 2.");
      return;
    }
    setHighlightTags((prev) => [...prev, tag]);
  };

  return (
    <HostLayout
      title="Write a short, clear description"
      description="Tell guests what makes your place work for real people — not influencers."
      step={8}
      totalSteps={13}
    >
      <div className="max-w-xl space-y-3">
        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Listing title</label>
          <input
            className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            placeholder="Sunlit 2-bed near the sea"
          />
        </div>

        {/* Highlight aspects */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-neutral-200">What best describes your place?</p>
          </div>
          <p className="text-xs text-neutral-400">
            Choose up to 2 aspects – we’ll highlight these for guests.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {aspectOptions.map((opt) => {
              const selected = highlightTags.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleTag(opt)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    selected
                      ? "border-[#f2bfa7] bg-white/10 text-white"
                      : "border-white/15 bg-white/5 text-neutral-200 hover:border-[#f2bfa7] hover:bg-white/10"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {tagMessage && (
            <p className="text-xs text-red-400">{tagMessage}</p>
          )}
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
          onClick={() => {
            // Persist highlight tags for the review step
            sessionStorage.setItem(
              "hostHighlightTags",
              JSON.stringify(highlightTags)
            );
            navigate("/host/pricing");
          }}
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

