import React from "react";

export default function Bookings() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d]">
      {/* AO glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#ff7a45]/10 blur-[120px]" />
        <div className="absolute bottom-[-240px] right-[-240px] h-[560px] w-[560px] rounded-full bg-[#ffb36b]/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          My Bookings
        </h1>
        <p className="mt-2 text-white/60">
          View and manage your upcoming and past bookings.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="text-center py-12">
            <div className="text-2xl font-medium text-white mb-2">
              Coming soon
            </div>
            <p className="text-white/60 mt-2">
              Your booking history will be available here shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

