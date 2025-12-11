import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostReview: React.FC = () => {
  const navigate = useNavigate();
  const [highlightTags, setHighlightTags] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("hostHighlightTags");
      if (stored) {
        setHighlightTags(JSON.parse(stored));
      }
    } catch {
      setHighlightTags([]);
    }
  }, []);

  return (
    <HostLayout
      title="Preview your listing"
      description="This is roughly how guests will see your place on AO."
      step={12}
      totalSteps={13}
    >
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="h-44 rounded-xl bg-neutral-900/70 mb-3" />
          <div className="space-y-2">
            <div className="h-3 w-40 rounded bg-neutral-700" />
            <div className="h-2 w-56 rounded bg-neutral-800" />
            <div className="h-2 w-32 rounded bg-neutral-800" />
          </div>
        </div>
        <div className="space-y-3 text-sm text-neutral-300">
          <p>
            Right now this is just a front-end mock. When we wire up the backend,
            this page will show live data pulled from the form steps plus pricing
            simulations.
          </p>
          <p>
            When you're happy, we'll let hosts publish instantly or save drafts
            while they verify identity and payouts.
          </p>
          {highlightTags.length > 0 && (
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 mb-2">
                Highlighted aspects
              </p>
              <div className="flex flex-wrap gap-2">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => navigate("/host/verify")}
              className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
            >
              Continue
            </button>
            <button
              onClick={() => navigate("/host/start")}
              className="text-xs text-neutral-400 hover:text-neutral-200"
            >
              Start again
            </button>
          </div>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostReview;

