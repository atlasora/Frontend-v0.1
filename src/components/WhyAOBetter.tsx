import React from "react";
import {
  Wallet,
  Zap,
  TrendingUp,
  Shield,
  DollarSign,
  CheckCircle,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const WhyAOBetter: React.FC = () => {
  const hostsFeatures = [
    {
      icon: Wallet,
      title: "Keep more",
      description: "0% for first 6 months, then 0.7% host fee",
    },
    {
      icon: Zap,
      title: "Get paid instantly",
      description: "Payouts on check-in",
    },
    {
      icon: TrendingUp,
      title: "Advance against bookings",
      description: "Unlock cash from confirmed stays",
    },
    {
      icon: Shield,
      title: "Reduced chargebacks",
      description: "Thanks to Check-in Shield, successful chargebacks will be reduced",
    },
  ];

  const guestsFeatures = [
    {
      icon: DollarSign,
      title: "Lower total cost",
      description: "Fewer hidden fees and lower booking fee (5%)",
    },
    {
      icon: CheckCircle,
      title: "Instant booking",
      description: "No \"host approval\" ping-pong",
    },
    {
      icon: Shield,
      title: "Check-in Shield",
      description: "Properties as described or your money back",
    },
    {
      icon: CreditCard,
      title: "Payment options",
      description: "BNPL and friend pay options",
    },
  ];

  const mobileFeatures = [
    {
      icon: DollarSign,
      title: "Lower fees",
      description: "Hosts earn more, guests pay less",
    },
    {
      icon: Zap,
      title: "Instant payouts",
      description: "Money on check-in",
    },
    {
      icon: TrendingUp,
      title: "Advance on bookings",
      description: "Unlock cash early",
    },
    {
      icon: Shield,
      title: "Check-in Shield",
      description: "Better protections for hosts and guests",
    },
  ];

  return (
    <section id="why-better" className="w-full py-20 px-6 bg-[#05070B]">
      <div className="max-w-6xl mx-auto">
        {/* Header - hidden on mobile (<lg) */}
        <div className="hidden lg:block text-center mb-12">
          <h2 className="bg-gradient-to-r from-[#ffb28a] via-[#ffcf99] to-[#ffd9b3] bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-3">
            Why AO is better
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto">
            Designed to pay hosts faster, protect guests better, and cut platform fees.
          </p>
        </div>

        {/* Desktop/Tablet: 2-column cards */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {/* For Hosts Card */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden">
            {/* AO gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFB27D] via-[#FF8A5B] to-[#FF6A3D] opacity-20 blur-xl -z-10" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#05070B] -z-10" />
            
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-[#ffb07a]">For Hosts</span>
              </h3>
              <div className="space-y-5">
                {hostsFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffb07a]/20 to-[#ff6a2a]/20 border border-[#ffb07a]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#ffb07a]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* For Guests Card */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden">
            {/* AO gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFB27D] via-[#FF8A5B] to-[#FF6A3D] opacity-20 blur-xl -z-10" />
            <div className="absolute inset-[1px] rounded-3xl bg-[#05070B] -z-10" />
            
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-[#ffb07a]">For Guests</span>
              </h3>
              <div className="space-y-5">
                {guestsFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffb07a]/20 to-[#ff6a2a]/20 border border-[#ffb07a]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#ffb07a]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Condensed list - no header, just the list */}
        <div className="lg:hidden space-y-4">
          {mobileFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffb07a]/20 to-[#ff6a2a]/20 border border-[#ffb07a]/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#ffb07a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAOBetter;

