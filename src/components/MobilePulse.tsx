import { useEffect, useState } from "react";

const items = [
  { text: "No setup fee • Cancel anytime", icon: "/icons/ao/fees.svg" },
  { text: "Instant payouts on check-in", icon: "/icons/ao/payout.svg" },
  { text: "Advance on bookings", icon: "/icons/ao/advance.svg" },
  { text: "Check-in Shield", icon: "/icons/ao/shield.svg" },
];

export default function MobilePulse() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const active = items[index];

  return (
    <div className="px-4 md:hidden">
      {/* AO gradient ring */}
      <div className="rounded-2xl bg-gradient-to-r from-[#FFB27D] via-[#FF8A5B] to-[#FF6A3D] p-[1px] shadow-[0_10px_30px_rgba(255,122,61,0.18)]">
        {/* inner glass */}
        <div className="relative overflow-hidden rounded-2xl bg-black/55 backdrop-blur-xl py-2">
          {/* subtle moving shine */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="h-full w-1/3 animate-[aoShine_2.6s_linear_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          {/* AO headline style with icon */}
          <div className="relative flex items-center justify-center gap-3 px-2">
            <img
              src={active.icon}
              alt=""
              className="h-5 w-5 opacity-90"
              aria-hidden="true"
            />
            <span className="text-[15px] font-semibold tracking-tight text-[#FFD2B0]">
              {active.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

