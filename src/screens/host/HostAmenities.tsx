import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const amenityOptions: { key: keyof AmenitiesState; label: string }[] = [
  { key: "wifi", label: "Wi-Fi" },
  { key: "ac", label: "Air conditioning" },
  { key: "pool", label: "Pool" },
  { key: "tv", label: "TV" },
  { key: "kitchen", label: "Kitchen" },
  { key: "washer", label: "Washer" },
  { key: "parking", label: "Free parking" },
  { key: "workspace", label: "Workspace" },
];

type AmenitiesState = {
  wifi: boolean;
  ac: boolean;
  pool: boolean;
  tv: boolean;
  kitchen: boolean;
  washer: boolean;
  parking: boolean;
  workspace: boolean;
};

const HostAmenities: React.FC = () => {
  const navigate = useNavigate();
  const [amenities, setAmenities] = useState<AmenitiesState>({
    wifi: false,
    ac: false,
    pool: false,
    tv: false,
    kitchen: false,
    washer: false,
    parking: false,
    workspace: false,
  });
  // Sub-fields
  const [wifiSpeed, setWifiSpeed] = useState("");
  const [acEveryRoom, setAcEveryRoom] = useState(false);
  const [poolType, setPoolType] = useState<"shared" | "private" | "">("");
  const [tvStreaming, setTvStreaming] = useState({
    netflix: false,
    disney: false,
    prime: false,
    apple: false,
  });

  const toggleAmenity = (key: keyof AmenitiesState) => {
    setAmenities((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleTvOption = (key: keyof typeof tvStreaming) => {
    setTvStreaming((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <HostLayout
      title="What can guests use?"
      description="Tick the essentials. You can refine this list later."
      step={6}
      totalSteps={13}
    >
      <div className="max-w-xl space-y-3">
        <p className="text-xs text-neutral-400">
          The more amenities you tick, the easier it is for guests to choose your place. You can always update this later.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {amenityOptions.map((a) => (
            <label
              key={a.key}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left hover:border-[#f2bfa7] hover:bg-white/10 transition cursor-pointer"
            >
              <input
                type="checkbox"
                checked={amenities[a.key]}
                onChange={() => toggleAmenity(a.key)}
              />
              <span>{a.label}</span>
            </label>
          ))}
        </div>

        {/* --- CONDITIONAL SUB-FIELDS --- */}
        {amenities.wifi && (
          <div className="mt-4 ml-2">
            <label className="block text-neutral-300 mb-1 text-sm">
              Average Wi-Fi speed (Mbps)
            </label>
            <input
              type="number"
              min="1"
              value={wifiSpeed}
              onChange={(e) => setWifiSpeed(e.target.value)}
              className="w-40 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100"
              placeholder="e.g. 150"
            />
          </div>
        )}

        {amenities.ac && (
          <div className="mt-4 ml-2">
            <label className="block text-neutral-300 text-sm mb-1">
              Is AC available in every room?
            </label>
            <label className="flex items-center gap-2 text-neutral-200 text-sm">
              <input
                type="checkbox"
                checked={acEveryRoom}
                onChange={(e) => setAcEveryRoom(e.target.checked)}
              />
              Yes, AC is in every room
            </label>
          </div>
        )}

        {amenities.pool && (
          <div className="mt-4 ml-2">
            <label className="block text-neutral-300 text-sm mb-1">
              Pool type
            </label>
            <select
              value={poolType}
              onChange={(e) => setPoolType(e.target.value as "shared" | "private")}
              className="w-48 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100"
            >
              <option value="">Select option</option>
              <option value="shared">Shared</option>
              <option value="private">Private</option>
            </select>
          </div>
        )}

        {amenities.tv && (
          <div className="mt-4 ml-2">
            <p className="text-neutral-300 text-sm mb-1">Streaming services available</p>
            <div className="grid grid-cols-2 gap-2 text-neutral-200 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={tvStreaming.netflix}
                  onChange={() => toggleTvOption("netflix")}
                />
                Netflix
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={tvStreaming.disney}
                  onChange={() => toggleTvOption("disney")}
                />
                Disney+
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={tvStreaming.prime}
                  onChange={() => toggleTvOption("prime")}
                />
                Prime Video
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={tvStreaming.apple}
                  onChange={() => toggleTvOption("apple")}
                />
                Apple TV
              </label>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/photos")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostAmenities;

