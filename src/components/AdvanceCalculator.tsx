import React, { useEffect, useMemo, useState } from "react";

const MAX_BOOKINGS = 10;
const BASE_PER_1000 = 1000;
const FEE_PER_1000_PER_30_DAYS = 50; // $50 per $1,000 per 30 days
const FEE_RATE_PER_PERIOD = FEE_PER_1000_PER_30_DAYS / BASE_PER_1000; // 0.05 (5%)

const AdvanceCalculator: React.FC = () => {
  const [bookings, setBookings] = useState<string[]>(
    Array.from({ length: MAX_BOOKINGS }, () => "")
  );
  const [selectedAdvance, setSelectedAdvance] = useState<number>(0);
  const [days, setDays] = useState<number>(30);

  // Parse & clean booking values
  const numericBookings = useMemo(
    () =>
      bookings
        .map((b) => Number(b.replace(/[^0-9.]/g, "")))
        .filter((v) => !Number.isNaN(v) && v > 0),
    [bookings]
  );

  // Compute totals and eligibility
  const totalBookings = useMemo(
    () => numericBookings.reduce((sum, v) => sum + v, 0),
    [numericBookings]
  );

  // Compute maximum eligible advance based on rule: floor(n/2) lowest bookings
  const eligibleAdvanceLimit = useMemo(() => {
    if (numericBookings.length < 2) return 0;

    const sorted = [...numericBookings].sort((a, b) => a - b);
    const eligibleSlots = Math.floor(sorted.length / 2);
    if (eligibleSlots <= 0) return 0;

    return sorted.slice(0, eligibleSlots).reduce((sum, v) => sum + v, 0);
  }, [numericBookings]);

  const periods = Math.max(1, Math.ceil(days / 30));

  const maxAdvanceByTotalBookings =
    totalBookings > 0
      ? totalBookings / (1 + FEE_RATE_PER_PERIOD * periods)
      : 0;

  const maxAdvanceAmount = Math.max(
    0,
    Math.min(eligibleAdvanceLimit, maxAdvanceByTotalBookings)
  );

  // Keep slider in sync with max
  useEffect(() => {
    setSelectedAdvance((prev) => Math.min(prev, maxAdvanceAmount));
  }, [maxAdvanceAmount]);

  // Fee & repayment
  const fee =
    selectedAdvance > 0
      ? selectedAdvance * FEE_RATE_PER_PERIOD * periods
      : 0;
  const totalRepay = selectedAdvance + fee;

  const handleBookingChange = (index: number, value: string) => {
    setBookings((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleDaysChange = (value: string) => {
    const n = Number(value.replace(/[^0-9]/g, ""));
    setDays(Number.isNaN(n) ? 0 : Math.min(Math.max(n, 1), 365));
  };

  return (
    <section className="w-full max-w-6xl mx-auto mt-16 px-4 lg:px-0">
      <h2 className="bg-gradient-to-r from-[#ffb28a] via-[#ffcf99] to-[#ffd9b3] bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-center w-full mx-auto mt-20 mb-8">
        How much can you advance?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 items-start rounded-xl bg-[#111] border border-white/10 shadow-xl p-10">
        {/* Left: inputs for bookings */}
        <div className="space-y-6 md:w-1/2">
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-xl">
            Add up to 10 upcoming bookings. We'll estimate how much you can
            advance today based on your lowest confirmed stays.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: MAX_BOOKINGS }).map((_, i) => (
              <div key={i} className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Booking {i + 1} amount
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={bookings[i]}
                  onChange={(e) => handleBookingChange(i, e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#FBC9A4] focus:outline-none focus:ring-2 focus:ring-[#FBC9A4]/40 transition"
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-white/70 mt-3">
            Tip: Just enter the booking total per stay (including cleaning, if
            you charge it). You can leave unused rows blank.
          </p>
        </div>

        {/* Right: advance slider + summary */}
        <div className="mt-8 lg:mt-0 rounded-xl bg-black/40 border border-white/10 p-8 shadow-lg space-y-5 w-full">
          <h3 className="text-lg font-semibold text-white mb-4">Advance preview</h3>

          <div className="mb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-1">
              Eligible advance limit
            </p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#FBC9A4] mt-1">
              {eligibleAdvanceLimit > 0 ? (
                <>€{eligibleAdvanceLimit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</>
              ) : (
                "Not eligible yet"
              )}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We advance against roughly half of your upcoming bookings,
              starting with the lowest amounts, to stay conservative.
            </p>
          </div>

          <div className="mb-6">
            <label className="flex justify-between text-sm mb-1">
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Choose advance amount
              </span>
              <span className="font-medium text-[#FBC9A4]">
                €{selectedAdvance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </label>
            <input
              type="range"
              min={0}
              max={maxAdvanceAmount}
              step={10}
              value={selectedAdvance}
              disabled={maxAdvanceAmount === 0}
              onChange={(e) => setSelectedAdvance(Number(e.target.value))}
              className="w-full mt-2 h-2 rounded-full bg-[#2A1F1A] accent-[#FBC9A4]"
            />
            {maxAdvanceAmount === 0 && (
              <p className="text-xs text-slate-300 mt-1">
                Add at least 2 bookings to see your advance options.
              </p>
            )}
            {maxAdvanceAmount < eligibleAdvanceLimit && maxAdvanceAmount > 0 && (
              <p className="text-xs text-slate-300 mt-1">
                Capped so that total repayment never exceeds your booking value.
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-400 mb-2 block">
              How long do you need it?
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                inputMode="numeric"
                value={days}
                onChange={(e) => handleDaysChange(e.target.value)}
                className="w-20 rounded-xl border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[#FBC9A4] focus:outline-none focus:ring-2 focus:ring-[#FBC9A4]/40 transition"
              />
              <span className="text-sm text-slate-300">days</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Pricing: ${FEE_PER_1000_PER_30_DAYS} per $1,000 advanced per 30 days.
              We round up to full 30-day periods (e.g. 40 days = 2 periods).
            </p>
          </div>

          <div className="space-y-1 text-sm border-t border-white/10 pt-4">
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-slate-300">Advance amount</span>
              <span className="font-semibold text-[#FBC9A4]">
                €{selectedAdvance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs sm:text-sm text-slate-300">
                Fee ({periods} × 30-day period{periods === 1 ? "" : "s"})
              </span>
              <span className="font-semibold text-[#FBC9A4]">
                €{fee.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold mt-1">
              <span className="text-slate-300">Total to repay at checkout of those stays</span>
              <span className="text-[#FBC9A4] font-semibold">
                €{totalRepay.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>

          <div className="mt-10 p-5 rounded-xl bg-gradient-to-r from-[#FBC9A433] to-[#FF8F6B33] border border-white/10">
            <span className="text-[#FBC9A4] font-semibold">
              This is an illustrative example only.
            </span>{" "}
            <span className="text-slate-300 text-sm">
              Final terms depend on your live booking history and risk checks.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceCalculator;

 
