import React, { useState } from "react";
import { Header } from "../Header";
import { AccountSidebar } from "../AccountSidebar";

interface HostLayoutProps {
  title: string;
  description?: string;
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

const HostLayout: React.FC<HostLayoutProps> = ({
  title,
  description,
  step,
  totalSteps,
  children,
}) => {
  const progress = (step / totalSteps) * 100;
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070b] text-white flex flex-col">
      {/* Global AO header */}
      <Header onOpenSidebar={() => setIsAccountOpen(true)} />

      {/* Top bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto w-full max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-[#f2bfa7] opacity-90" />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                AtlasOra for Hosts
              </p>
              <p className="text-sm font-medium text-neutral-100">
                List your place
              </p>
            </div>
          </div>
          <p className="text-xs text-neutral-400">
            Step {step} of {totalSteps}
          </p>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div
            className="h-1 bg-[#f2bfa7] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Body */}
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-10">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-neutral-50">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-sm text-neutral-300">{description}</p>
            )}
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </main>

      <AccountSidebar
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
};

export default HostLayout;

