import { useEffect, useState } from "react";

const messages = [
  "Lower fees than Airbnb",
  "Instant payouts on check-in",
  "No setup fee • Cancel anytime",
  "Hosts earn more per booking",
];

export default function MobilePulse() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4">
      {/* AO gradient ring */}
      <div className="rounded-2xl bg-gradient-to-r from-[#FFB27D] via-[#FF8A5B] to-[#FF6A3D] p-[1px] shadow-[0_10px_30px_rgba(255,122,61,0.18)]">
        {/* inner glass */}
        <div className="relative overflow-hidden rounded-2xl bg-black/55 backdrop-blur-xl py-2 text-center">
          {/* subtle moving shine */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="h-full w-1/3 animate-[aoShine_2.6s_linear_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          {/* AO headline style */}
          <span className="relative text-[15px] font-semibold tracking-tight text-[#FFD2B0]">
            {messages[index]}
          </span>
        </div>
      </div>
    </div>
  );
}

