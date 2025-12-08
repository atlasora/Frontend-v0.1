import React from "react";

export const RealHostsSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 lg:px-0">
        {/* Gradient Heading */}
        <h2
          className="
            mt-[-30px]
            text-center 
            text-3xl sm:text-4xl lg:text-[52px] 
            font-semibold 
            leading-tight 
            bg-gradient-to-r 
            from-[#FFB199] via-[#FF8C77] to-[#F2C38F]
            bg-clip-text text-transparent
          "
        >
          Real hosts. Real homes. Real income.
        </h2>

        {/* Video */}
        <div className="w-full overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/real-hosts.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

