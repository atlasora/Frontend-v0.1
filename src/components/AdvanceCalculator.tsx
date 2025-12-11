import React, { useEffect, useMemo, useState } from "react";

const MAX_BOOKINGS = 10;
const FEE_PER_1000_PER_30_DAYS = 50;

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

  // Compute maximum eligible advance based on rule: floor(n/2) lowest bookings
  const maxAdvance = useMemo(() => {
    if (numericBookings.length < 2) return 0;

    const sorted = [...numericBookings].sort((a, b) => a - b);
    const eligibleSlots = Math.floor(sorted.length / 2);
    if (eligibleSlots <= 0) return 0;

    return sorted.slice(0, eligibleSlots).reduce((sum, v) => sum + v, 0);
  }, [numericBookings]);

  // Keep slider in sync with max
  useEffect(() => {
    if (maxAdvance === 0) {
      setSelectedAdvance(0);
    } else if (selectedAdvance === 0 || selectedAdvance > maxAdvance) {
      setSelectedAdvance(maxAdvance);
    }
  }, [maxAdvance]);

  // Fee & repayment
  const periods = Math.max(0, Math.ceil(days / 30));
  const fee =
    selectedAdvance > 0
      ? (selectedAdvance / 1000) * FEE_PER_1000_PER_30_DAYS * periods
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
    <section className="w-full max-w-5xl mx-auto px-4 py-10 bg-neutral-950 rounded-3xl border border-neutral-800">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left: inputs for bookings */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            How much can you advance?
          </h2>
          <p className="text-neutral-400 mb-6 max-w-xl">
            Add up to 10 upcoming bookings. We’ll estimate how much you can
            advance today based on your lowest confirmed stays.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: MAX_BOOKINGS }).map((_, i) => (
              <div key={i} className="flex flex-col">
                <label className="text-xs text-neutral-500 mb-1">
                  Booking {i + 1} amount
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={bookings[i]}
                  onChange={(e) => handleBookingChange(i, e.target.value)}
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-peach"
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-neutral-500 mt-3">
            Tip: Just enter the booking total per stay (including cleaning, if
            you charge it). You can leave unused rows blank.
          </p>
        </div>

        {/* Right: advance slider + summary */}
        <div className="flex-1 lg:max-w-md bg-neutral-900 rounded-2xl border border-neutral-700 p-6">
          <h3 className="text-lg font-semibold mb-4">Advance preview</h3>

          <div className="mb-4">
            <p className="text-sm text-neutral-400 mb-1">
              Eligible advance limit
            </p>
            <p className="text-2xl font-semibold">
              {maxAdvance > 0 ? (
                <>€{maxAdvance.toLocaleString(undefined, { maximumFractionDigits: 0 })}</>
              ) : (
                "Not eligible yet"
              )}
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              We advance against roughly half of your upcoming bookings,
              starting with the lowest amounts, to stay conservative.
            </p>
          </div>

          <div className="mb-6">
            <label className="flex justify-between text-sm mb-1">
              <span>Choose advance amount</span>
              <span className="font-medium">
                €{selectedAdvance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </label>
            <input
              type="range"
              min={0}
              max={maxAdvance}
              step={10}
              value={selectedAdvance}
              disabled={maxAdvance === 0}
              onChange={(e) => setSelectedAdvance(Number(e.target.value))}
              className="w-full"
            />
            {maxAdvance === 0 && (
              <p className="text-xs text-neutral-500 mt-1">
                Add at least 2 bookings to see your advance options.
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm mb-1 block">How long do you need it?</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                inputMode="numeric"
                value={days}
                onChange={(e) => handleDaysChange(e.target.value)}
                className="w-20 rounded-lg bg-neutral-950 border border-neutral-700 px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-peach"
              />
              <span className="text-sm text-neutral-400">days</span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Pricing: ${FEE_PER_1000_PER_30_DAYS} per $1,000 advanced per 30 days.
              We round up to full 30-day periods (e.g. 40 days = 2 periods).
            </p>
          </div>

          <div className="space-y-1 text-sm border-t border-neutral-800 pt-4">
            <div className="flex justify-between">
              <span className="text-neutral-400">Advance amount</span>
              <span className="font-medium">
                €{selectedAdvance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">
                Fee ({periods} × 30-day period{periods === 1 ? "" : "s"})
              </span>
              <span className="font-medium">
                €{fee.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between text-base font-semibold mt-1">
              <span>Total to repay at checkout of those stays</span>
              <span>
                €{totalRepay.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>

          <p className="text-xs text-neutral-500 mt-3">
            This is an illustrative example only. Final terms depend on your live
            booking history and risk checks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvanceCalculator;

 
