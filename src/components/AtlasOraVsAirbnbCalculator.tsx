import React, { useState, useMemo } from "react";

const numberOrZero = (value: string) =>
  isNaN(parseFloat(value)) ? 0 : parseFloat(value);

export const AtlasOraVsAirbnbCalculator: React.FC = () => {
  const [nightlyPrice, setNightlyPrice] = useState("150");
  const [nightsPerMonth, setNightsPerMonth] = useState("15");
  const [avgStayNights, setAvgStayNights] = useState("3");
  const [cleaningFeePerBooking, setCleaningFeePerBooking] = useState("40");
  const [airbnbFeePct, setAirbnbFeePct] = useState("15.5"); // %
  const [atlasOraFeePct, setAtlasOraFeePct] = useState("0.7"); // %
  const [promoEnabled, setPromoEnabled] = useState(true);

  const results = useMemo(() => {
    // ----- Parsed numbers from inputs -----
    const nightly = Number(nightlyPrice || 0);
    const nightsPerMonthNum = Number(nightsPerMonth || 0);
    const avgStayNightsNum = Number(avgStayNights || 0);
    const cleaningPerBookingNum = Number(cleaningFeePerBooking || 0);
    const airbnbFeePercentNum = Number(airbnbFeePct || 0); // e.g. 15.5
    const atlasOraFeePercentNum = Number(atlasOraFeePct || 0); // e.g. 0.7

    // ----- Bookings per month -----
    const bookingsPerMonth =
      avgStayNightsNum > 0 ? nightsPerMonthNum / avgStayNightsNum : 0;

    // ----- Gross booking value (what guest pays) -----
    // Nights + cleaning (Airbnb and AtlasOra both collect this from guests)
    const grossBookingValue =
      nightly * nightsPerMonthNum + cleaningPerBookingNum * bookingsPerMonth;

    // ----- Airbnb: fee on EVERYTHING (nights + cleaning) -----
    const airbnbPlatformFees =
      grossBookingValue * (airbnbFeePercentNum / 100);
    const airbnbPayout = grossBookingValue - airbnbPlatformFees;

    // ----- AtlasOra: fee ONLY on nightly revenue, NOT on cleaning -----
    const atlasOraFeeBaseValue = nightly * nightsPerMonthNum; // <— no cleaning
    // Promo: 0% host fee first 6 months
    const atlasOraEffectiveFeeRate = promoEnabled
      ? 0
      : atlasOraFeePercentNum / 100;
    const atlasOraPlatformFees =
      atlasOraFeeBaseValue * atlasOraEffectiveFeeRate;
    const atlasOraPayout = grossBookingValue - atlasOraPlatformFees;

    // ----- Difference -----
    const extraPerMonth = atlasOraPayout - airbnbPayout;
    const extraPerYear = extraPerMonth * 12;

    const fmt = (v: number) =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "EUR", // change to GBP/USD if needed
        maximumFractionDigits: 0,
      }).format(v);

    return {
      bookingsPerMonth,
      grossBookingValue,
      airbnbPlatformFees,
      atlasOraPlatformFees,
      airbnbPayout,
      atlasOraPayout,
      extraPerMonth,
      extraPerYear,
      fmt,
    };
  }, [
    nightlyPrice,
    nightsPerMonth,
    avgStayNights,
    cleaningFeePerBooking,
    airbnbFeePct,
    atlasOraFeePct,
    promoEnabled,
  ]);

  const {
    bookingsPerMonth,
    grossBookingValue,
    airbnbPlatformFees,
    atlasOraPlatformFees,
    airbnbPayout,
    atlasOraPayout,
    extraPerMonth,
    extraPerYear,
    fmt,
  } = results;

  const positive = extraPerYear >= 0;

  return (
    <section className="w-full max-w-4xl mx-auto rounded-3xl bg-[#05070b] border border-white/10 p-6 md:p-8 text-white shadow-xl shadow-black/40">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            See what you’d earn on AtlasOra vs Airbnb
          </h2>
          <p className="text-sm text-neutral-300 mt-1">
            Adjust the sliders and inputs to match your place. We’ll compare
            your payouts after platform fees.
          </p>
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-neutral-600 bg-neutral-900"
            checked={promoEnabled}
            onChange={(e) => setPromoEnabled(e.target.checked)}
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              0% AtlasOra host fee for first 6 months
            </span>
            <span className="text-xs text-neutral-400">
              Uncheck to compare AtlasOra’s standard host fee ({atlasOraFeePct}%).
            </span>
          </div>
        </label>
      </header>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            Nightly price
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            value={nightlyPrice}
            onChange={(e) => setNightlyPrice(e.target.value)}
            min={0}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            Nights booked per month
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            value={nightsPerMonth}
            onChange={(e) => setNightsPerMonth(e.target.value)}
            min={0}
            max={31}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            Avg length of stay (nights)
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            value={avgStayNights}
            onChange={(e) => setAvgStayNights(e.target.value)}
            min={1}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            Cleaning fee per booking
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            value={cleaningFeePerBooking}
            onChange={(e) => setCleaningFeePerBooking(e.target.value)}
            min={0}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            Airbnb host fee (%)
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
            value={airbnbFeePct}
            onChange={(e) => setAirbnbFeePct(e.target.value)}
            min={0}
            step={0.1}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-neutral-400">
            AtlasOra host fee (%)
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60 disabled:opacity-50"
            value={atlasOraFeePct}
            onChange={(e) => setAtlasOraFeePct(e.target.value)}
            min={0}
            step={0.1}
            disabled={promoEnabled}
          />
          {promoEnabled && (
            <p className="mt-1 text-[11px] text-neutral-400">
              You’re seeing 0% host fees for the first 6 months. Uncheck the
              toggle above to compare standard fees.
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-4 items-stretch mb-6">
        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            Monthly volume
          </h3>
          <p className="text-sm text-neutral-300">
            Gross booking value:{" "}
            <span className="font-semibold text-white">
              {fmt(grossBookingValue)}
            </span>
          </p>
          <p className="text-sm text-neutral-300 mt-1">
            Approx bookings per month:{" "}
            <span className="font-semibold text-white">
              {bookingsPerMonth.toFixed(1)}
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            After Airbnb fees
          </h3>
          <p className="text-sm text-neutral-300">
            Platform fees:{" "}
            <span className="font-semibold text-white">
              {fmt(airbnbPlatformFees)}
            </span>
          </p>
          <p className="text-sm text-neutral-300 mt-1">
            Your payout:{" "}
            <span className="font-semibold text-white">
              {fmt(airbnbPayout)}
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-[#f2bfa7]/10 border border-[#f2bfa7]/40 p-4">
          <h3 className="text-xs uppercase tracking-wide text-[#f2bfa7] mb-2">
            After AtlasOra fees
          </h3>
          <p className="text-sm text-neutral-200">
            Platform fees:{" "}
            <span className="font-semibold">
              {fmt(atlasOraPlatformFees)}
            </span>
          </p>
          <p className="text-sm text-neutral-200 mt-1">
            Your payout:{" "}
            <span className="font-semibold">
              {fmt(atlasOraPayout)}
            </span>
          </p>
        </div>
      </div>

      {/* Savings banner */}
      <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#f2bfa7]/20 to-[#f2bfa7]/10 border border-[#f2bfa7]/40 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="text-sm text-neutral-100">
          On these numbers, listing with{" "}
          <span className="font-semibold text-[#f2bfa7]">AtlasOra</span>{" "}
          instead of Airbnb would change your income by:
        </p>
        <div className="text-right">
          <p
            className={`text-lg font-semibold ${
              positive ? "text-emerald-300" : "text-red-300"
            }`}
          >
            {positive ? "+" : ""}
            {fmt(extraPerMonth)} per month
          </p>
          <p className="text-xs text-neutral-300">
            {positive ? "Extra" : "Less"} ~{fmt(Math.abs(extraPerYear))} per
            year in your pocket.
          </p>
        </div>
      </div>
    </section>
  );
};


