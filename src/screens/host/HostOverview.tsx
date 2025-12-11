import React from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostOverview: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "About your place",
      desc: "Type, address, capacity and amenities.",
    },
    {
      title: "Photos & description",
      desc: "Show guests what makes your place special.",
    },
    {
      title: "Price & safety",
      desc: "Set your nightly price and confirm a few safety details.",
    },
  ];

  return (
    <HostLayout
      title="List your place in three simple stages"
      step={1}
      totalSteps={13}
    >
      <div className="w-full space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left space-y-2"
            >
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-neutral-300">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-2">
          <button
            onClick={() => navigate("/host/start")}
            className="inline-flex items-center justify-center rounded-xl bg-[#f2bfa7] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 hover:bg-[#e3b49c] transition"
          >
            Start listing
          </button>
          <a
            href="/help/hosts/getting-started"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-neutral-400 hover:text-neutral-200"
          >
            Need help?
          </a>
          {/* TODO: if /help/hosts/getting-started doesn't exist, point to # or support page */}
        </div>
      </div>
    </HostLayout>
  );
};

export default HostOverview;


