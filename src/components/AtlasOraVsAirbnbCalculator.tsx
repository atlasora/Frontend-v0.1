import React, { useState, useMemo, useEffect } from "react";

const numberOrZero = (value: string) =>
  isNaN(parseFloat(value)) ? 0 : parseFloat(value);

// Media query hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

// Shared calculation logic
const useCalculatorResults = (
  nightlyPrice: string,
  nightsPerMonth: string,
  avgStayNights: string,
  cleaningFeePerBooking: string,
  airbnbFeePct: string,
  atlasOraFeePct: string,
  promoEnabled: boolean
) => {
  return useMemo(() => {
    const nightly = Number(nightlyPrice || 0);
    const nightsPerMonthNum = Number(nightsPerMonth || 0);
    const avgStayNightsNum = Number(avgStayNights || 0);
    const cleaningPerBookingNum = Number(cleaningFeePerBooking || 0);
    const airbnbFeePercentNum = Number(airbnbFeePct || 0);
    const atlasOraFeePercentNum = Number(atlasOraFeePct || 0);

    const bookingsPerMonth =
      avgStayNightsNum > 0 ? nightsPerMonthNum / avgStayNightsNum : 0;

    const grossBookingValue =
      nightly * nightsPerMonthNum + cleaningPerBookingNum * bookingsPerMonth;

    const airbnbPlatformFees =
      grossBookingValue * (airbnbFeePercentNum / 100);
    const airbnbPayout = grossBookingValue - airbnbPlatformFees;

    const atlasOraFeeBaseValue = nightly * nightsPerMonthNum;
    const atlasOraEffectiveFeeRate = promoEnabled
      ? 0
      : atlasOraFeePercentNum / 100;
    const atlasOraPlatformFees =
      atlasOraFeeBaseValue * atlasOraEffectiveFeeRate;
    const atlasOraPayout = grossBookingValue - atlasOraPlatformFees;

    const extraPerMonth = atlasOraPayout - airbnbPayout;
    const extraPerYear = extraPerMonth * 12;

    const fmt = (v: number) =>
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "EUR",
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
};

// Desktop Calculator Component
const DesktopCalculator: React.FC<{
  nightlyPrice: string;
  setNightlyPrice: (v: string) => void;
  nightsPerMonth: string;
  setNightsPerMonth: (v: string) => void;
  avgStayNights: string;
  setAvgStayNights: (v: string) => void;
  cleaningFeePerBooking: string;
  setCleaningFeePerBooking: (v: string) => void;
  airbnbFeePct: string;
  setAirbnbFeePct: (v: string) => void;
  atlasOraFeePct: string;
  setAtlasOraFeePct: (v: string) => void;
  promoEnabled: boolean;
  setPromoEnabled: (v: boolean) => void;
  results: ReturnType<typeof useCalculatorResults>;
}> = ({
  nightlyPrice,
  setNightlyPrice,
  nightsPerMonth,
  setNightsPerMonth,
  avgStayNights,
  setAvgStayNights,
  cleaningFeePerBooking,
  setCleaningFeePerBooking,
  airbnbFeePct,
  setAirbnbFeePct,
  atlasOraFeePct,
  setAtlasOraFeePct,
  promoEnabled,
  setPromoEnabled,
  results,
}) => {
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
    <>
      <div className="mb-6">
        <h2 className="bg-gradient-to-r from-[#ffb28a] via-[#ffcf99] to-[#ffd9b3] bg-clip-text text-transparent text-4xl font-bold md:text-5xl text-center w-full mx-auto">
          See what you'd earn on AtlasOra vs Airbnb
        </h2>
        <p className="text-sm text-neutral-300 mt-1 text-center mx-auto">
          Adjust the sliders and inputs to match your place. We'll compare
          your payouts after platform fees.
        </p>
      </div>

      <div className="rounded-3xl bg-[#05070b] border border-white/10 p-6 md:p-8 text-white shadow-xl shadow-black/40">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
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
                Uncheck to compare AtlasOra's standard host fee ({atlasOraFeePct}%).
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
                You're seeing 0% host fees for the first 6 months. Uncheck the
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
            Listing with{" "}
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
      </div>
    </>
  );
};

// Mobile Calculator Lite Component
const MobileCalculatorLite: React.FC<{
  nightlyPrice: string;
  setNightlyPrice: (v: string) => void;
  nightsPerMonth: string;
  setNightsPerMonth: (v: string) => void;
  avgStayNights: string;
  setAvgStayNights: (v: string) => void;
  cleaningFeePerBooking: string;
  setCleaningFeePerBooking: (v: string) => void;
  airbnbFeePct: string;
  setAirbnbFeePct: (v: string) => void;
  atlasOraFeePct: string;
  setAtlasOraFeePct: (v: string) => void;
  promoEnabled: boolean;
  setPromoEnabled: (v: boolean) => void;
  results: ReturnType<typeof useCalculatorResults>;
}> = ({
  nightlyPrice,
  setNightlyPrice,
  nightsPerMonth,
  setNightsPerMonth,
  avgStayNights,
  setAvgStayNights,
  cleaningFeePerBooking,
  setCleaningFeePerBooking,
  airbnbFeePct,
  setAirbnbFeePct,
  atlasOraFeePct,
  setAtlasOraFeePct,
  promoEnabled,
  setPromoEnabled,
  results,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { extraPerMonth, extraPerYear, fmt } = results;
  const positive = extraPerYear >= 0;

  return (
    <>
      <div className="mb-4">
        <h2 className="bg-gradient-to-r from-[#ffb28a] via-[#ffcf99] to-[#ffd9b3] bg-clip-text text-transparent text-3xl font-bold text-center">
          See what you'd earn
        </h2>
      </div>

      <div className="rounded-2xl bg-[#05070b] border border-white/10 p-4 text-white shadow-xl shadow-black/40">
        {/* Main inputs - 2 rows */}
        <div className="space-y-3 mb-3">
          <div>
            <label className="text-xs font-medium text-neutral-400 mb-1 block">
              Nightly price (€)
            </label>
            <input
              type="number"
              className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              value={nightlyPrice}
              onChange={(e) => setNightlyPrice(e.target.value)}
              min={0}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-neutral-400 mb-1 block">
              Nights booked per month
            </label>
            <input
              type="number"
              className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              value={nightsPerMonth}
              onChange={(e) => setNightsPerMonth(e.target.value)}
              min={0}
              max={31}
            />
          </div>
        </div>

        {/* Promo toggle - compact row */}
        <div className="mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-600 bg-neutral-900"
              checked={promoEnabled}
              onChange={(e) => setPromoEnabled(e.target.checked)}
            />
            <span className="text-xs font-medium text-neutral-300">
              0% host fee first 6 months
            </span>
          </label>
        </div>

        {/* Result pill */}
        <div className="mb-4 rounded-2xl bg-gradient-to-r from-[#f2bfa7]/20 to-[#f2bfa7]/10 border border-[#f2bfa7]/40 px-4 py-4 text-center">
          <p
            className={`text-2xl font-semibold mb-1 ${
              positive ? "text-emerald-300" : "text-red-300"
            }`}
          >
            {positive ? "+" : ""}
            {fmt(extraPerMonth)} / month
          </p>
          <p className="text-xs text-neutral-300">
            ~{fmt(Math.abs(extraPerYear))} / year
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-full rounded-2xl bg-gradient-to-r from-[#FFB27D] via-[#FF8A5B] to-[#FF6A3D] py-4 text-base font-semibold text-black shadow-[0_10px_30px_rgba(255,122,61,0.25)] active:scale-[0.99] transition">
          List your property
        </button>

        {/* Advanced accordion */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full flex items-center justify-between text-xs font-medium text-neutral-400 hover:text-neutral-300 transition"
          >
            <span>Advanced settings</span>
            <span className="text-lg">{showAdvanced ? "−" : "+"}</span>
          </button>
          {showAdvanced && (
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-xs font-medium text-neutral-400 mb-1 block">
                  Avg length of stay (nights)
                </label>
                <input
                  type="number"
                  className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                  value={avgStayNights}
                  onChange={(e) => setAvgStayNights(e.target.value)}
                  min={1}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-400 mb-1 block">
                  Cleaning fee per booking
                </label>
                <input
                  type="number"
                  className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                  value={cleaningFeePerBooking}
                  onChange={(e) => setCleaningFeePerBooking(e.target.value)}
                  min={0}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-400 mb-1 block">
                  Airbnb host fee (%)
                </label>
                <input
                  type="number"
                  className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                  value={airbnbFeePct}
                  onChange={(e) => setAirbnbFeePct(e.target.value)}
                  min={0}
                  step={0.1}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-400 mb-1 block">
                  AtlasOra host fee (%)
                </label>
                <input
                  type="number"
                  className="w-full h-11 rounded-2xl bg-black/40 border border-white/15 px-4 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60 disabled:opacity-50"
                  value={atlasOraFeePct}
                  onChange={(e) => setAtlasOraFeePct(e.target.value)}
                  min={0}
                  step={0.1}
                  disabled={promoEnabled}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Main Component
export const AtlasOraVsAirbnbCalculator: React.FC = () => {
  const [nightlyPrice, setNightlyPrice] = useState("150");
  const [nightsPerMonth, setNightsPerMonth] = useState("15");
  const [avgStayNights, setAvgStayNights] = useState("3");
  const [cleaningFeePerBooking, setCleaningFeePerBooking] = useState("40");
  const [airbnbFeePct, setAirbnbFeePct] = useState("15.5");
  const [atlasOraFeePct, setAtlasOraFeePct] = useState("0.7");
  const [promoEnabled, setPromoEnabled] = useState(true);

  const isMobile = useMediaQuery("(max-width: 767px)");

  // On mobile, use defaults for hidden fields if not explicitly set
  // Cleaning fee: derive from nightly price (nightly * 0.25, capped at 40 minimum)
  const getDefaultCleaningFee = () => {
    const nightly = Number(nightlyPrice || 0);
    const calculated = nightly * 0.25;
    return String(Math.max(40, calculated));
  };

  const effectiveAvgStay = isMobile 
    ? (avgStayNights || "3")
    : avgStayNights;
  const effectiveCleaningFee = isMobile
    ? (cleaningFeePerBooking || getDefaultCleaningFee())
    : cleaningFeePerBooking;
  const effectiveAirbnbFee = isMobile 
    ? (airbnbFeePct || "15.5")
    : airbnbFeePct;
  const effectiveAtlasOraFee = isMobile 
    ? (atlasOraFeePct || "0.7")
    : atlasOraFeePct;

  const results = useCalculatorResults(
    nightlyPrice,
    nightsPerMonth,
    effectiveAvgStay,
    effectiveCleaningFee,
    effectiveAirbnbFee,
    effectiveAtlasOraFee,
    promoEnabled
  );

  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      {isMobile ? (
        <MobileCalculatorLite
          nightlyPrice={nightlyPrice}
          setNightlyPrice={setNightlyPrice}
          nightsPerMonth={nightsPerMonth}
          setNightsPerMonth={setNightsPerMonth}
          avgStayNights={avgStayNights}
          setAvgStayNights={setAvgStayNights}
          cleaningFeePerBooking={cleaningFeePerBooking}
          setCleaningFeePerBooking={setCleaningFeePerBooking}
          airbnbFeePct={airbnbFeePct}
          setAirbnbFeePct={setAirbnbFeePct}
          atlasOraFeePct={atlasOraFeePct}
          setAtlasOraFeePct={setAtlasOraFeePct}
          promoEnabled={promoEnabled}
          setPromoEnabled={setPromoEnabled}
          results={results}
        />
      ) : (
        <DesktopCalculator
          nightlyPrice={nightlyPrice}
          setNightlyPrice={setNightlyPrice}
          nightsPerMonth={nightsPerMonth}
          setNightsPerMonth={setNightsPerMonth}
          avgStayNights={avgStayNights}
          setAvgStayNights={setAvgStayNights}
          cleaningFeePerBooking={cleaningFeePerBooking}
          setCleaningFeePerBooking={setCleaningFeePerBooking}
          airbnbFeePct={airbnbFeePct}
          setAirbnbFeePct={setAirbnbFeePct}
          atlasOraFeePct={atlasOraFeePct}
          setAtlasOraFeePct={setAtlasOraFeePct}
          promoEnabled={promoEnabled}
          setPromoEnabled={setPromoEnabled}
          results={results}
        />
      )}
    </section>
  );
};
