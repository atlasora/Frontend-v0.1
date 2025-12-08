export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="relative w-full px-24 py-24 sm:px-10">
      {/* Warm radial glow behind the card */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 h-80 
                   bg-[radial-gradient(circle_at_center,#422a1b_0%,transparent_65%)] 
                   opacity-80 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-2xl ml-auto">
        {/* Stars */}
        <div className="flex items-center gap-1 text-[18px] text-[#FFC266] mb-6">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        {/* Quote */}
        <p className="text-[28px] leading-[1.4] text-[#F6E7D9] sm:text-[22px]">
          "Our rentals run smoother, our family has more money and less headache,
          thanks to AtlasOra."
        </p>
        {/* Avatar + name/role */}
        <div className="mt-7 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <img
              src="/images/jessica.png"
              alt="Jessica Wallace"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-[#D0CECA]">
            <span className="font-medium">Jessica Wallace</span>, host in Lisbon
          </p>
        </div>
      </div>
    </section>
  );
};

