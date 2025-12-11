import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostPricing: React.FC = () => {
  const navigate = useNavigate();
  const [weekdayPrice, setWeekdayPrice] = useState<number | "">(120); // Sun–Thu
  const [weekendPrice, setWeekendPrice] = useState<number | "">(140); // Fri–Sat
  const [weeklyDiscount, setWeeklyDiscount] = useState<number | "">(0); // % off for 7+ nights
  const [monthlyDiscount, setMonthlyDiscount] = useState<number | "">(0); // % off for 28+ nights

  return (
    <HostLayout
      title="Set your nightly price"
      description="You'll always see our fee and your net payout before a guest confirms."
      step={9}
      totalSteps={13}
    >
      <div className="max-w-xl space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-200">
          <p className="text-sm text-neutral-100 font-semibold">
            Instant bookings by default
          </p>
          <p className="text-xs text-neutral-300 mt-1">
            Bookings on AtlasOra are instant – guests don’t wait for approval. You can change this later in your booking settings if you prefer to review requests first.
          </p>
        </div>

        {/* PRICING SPLIT: WEEKDAY / WEEKEND */}
        <div className="space-y-4 mt-6">
          <p className="text-sm text-neutral-300">
            Set different prices for weekdays and weekends. You can always change this later in your pricing settings.
          </p>
          {/* Weekday price — Sunday–Thursday */}
          <div>
            <label className="block text-sm text-neutral-300 mb-2">
              Weekday price (EUR) <span className="text-neutral-500">(Sunday – Thursday)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">€</span>
              <input
                type="number"
                min={0}
                className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-10 py-3 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                value={weekdayPrice}
                onChange={(e) =>
                  setWeekdayPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="e.g. 120"
              />
            </div>
          </div>
          {/* Weekend price — Friday & Saturday */}
          <div>
            <label className="block text-sm text-neutral-300 mb-2">
              Weekend price (EUR) <span className="text-neutral-500">(Friday &amp; Saturday)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">€</span>
              <input
                type="number"
                min={0}
                className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-10 py-3 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                value={weekendPrice}
                onChange={(e) =>
                  setWeekendPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                placeholder="e.g. 150"
              />
            </div>
          </div>
        </div>

        {/* DISCOUNTS SECTION */}
        <div className="mt-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 px-6 py-5 space-y-4">
          <h3 className="text-sm font-medium text-neutral-100">
            Discounts for longer stays
          </h3>
          <p className="text-xs text-neutral-400">
            Offer guests a lower price for weekly and monthly stays. This helps fill your calendar and rewards longer bookings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Weekly discount */}
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Weekly discount (% off for 7+ nights)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="w-full rounded-2xl bg-neutral-950 border border-neutral-700 px-4 py-3 pr-10 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={weeklyDiscount}
                  onChange={(e) =>
                    setWeeklyDiscount(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 10"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">%</span>
              </div>
            </div>
            {/* Monthly discount */}
            <div>
              <label className="block text-sm text-neutral-300 mb-1">
                Monthly discount (% off for 28+ nights)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="w-full rounded-2xl bg-neutral-950 border border-neutral-700 px-4 py-3 pr-10 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  value={monthlyDiscount}
                  onChange={(e) =>
                    setMonthlyDiscount(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 20"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-neutral-300">
          <p>
            Later we'll plug this into the TravelFi engine: yield on escrow,
            instant host advances, and fair guest rewards.
          </p>
        </div>
        {/* TODO: add advanced pricing: weekend rates and discounts */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/host/security")}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPricing;

