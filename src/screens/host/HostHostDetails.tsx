import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const countries = [
  "Spain",
  "United Kingdom",
  "France",
  "Germany",
  "Portugal",
  "Ireland",
  "Italy",
  "Other",
];

const HostHostDetails: React.FC = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isPro, setIsPro] = useState<boolean | null>(null);

  const handleContinue = () => {
    const payload = {
      country,
      address,
      city,
      postcode,
      isPro,
    };
    sessionStorage.setItem("hostDetails", JSON.stringify(payload));
    navigate("/host/review");
  };

  return (
    <HostLayout
      title="Host details"
      description="Guests won’t see this information. We’ll use it for payouts and compliance only."
      step={11}
      totalSteps={13}
    >
      <div className="max-w-2xl space-y-4 text-sm text-neutral-200">
        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
          >
            <option value="">Select a country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs text-neutral-300">Postal address</label>
          <textarea
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            placeholder="Street, building, door"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-xs text-neutral-300">City / Town</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              placeholder="Barcelona"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-neutral-300">Postcode</label>
            <input
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-[#05070b] px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              placeholder="08001"
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-neutral-300">Are you a professional host?</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsPro(true)}
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                isPro === true
                  ? "border-[#f2bfa7] bg-white/10 text-white"
                  : "border-white/15 bg-white/5 text-neutral-200 hover:border-[#f2bfa7] hover:bg-white/10"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setIsPro(false)}
              className={`rounded-xl border px-4 py-2 text-sm transition ${
                isPro === false
                  ? "border-[#f2bfa7] bg-white/10 text-white"
                  : "border-white/15 bg-white/5 text-neutral-200 hover:border-[#f2bfa7] hover:bg-white/10"
              }`}
            >
              No
            </button>
          </div>
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

export default HostHostDetails;


