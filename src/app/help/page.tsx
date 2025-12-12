"use client";

import { useMemo, useState } from "react";
import faqsRaw from "@/data/faqs.json";

type FAQ = {
  id: number;
  category: string;
  subcategory?: string;
  audience: string[];
  question: string;
  answer: string;
};

const audienceTabs = ["All", "General", "Host", "Guest"] as const;

export default function HelpPage() {
  const faqs = faqsRaw as FAQ[];
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState<(typeof audienceTabs)[number]>("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((item) => {
      const matchesAudience =
        audience === "All" ? true : item.audience.includes(audience);
      const haystack = `${item.question} ${item.answer} ${item.category} ${
        item.subcategory ?? ""
      }`.toLowerCase();
      const matchesQuery = q.length === 0 ? true : haystack.includes(q);
      return matchesAudience && matchesQuery;
    });
  }, [faqs, query, audience]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d]">
      {/* AO glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#ff7a45]/10 blur-[120px]" />
        <div className="absolute bottom-[-240px] right-[-240px] h-[560px] w-[560px] rounded-full bg-[#ffb36b]/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Help & FAQs
        </h1>
        <p className="mt-2 text-white/60">
          Search for answers, or browse by topic.
        </p>

        {/* Search */}
        <div className="mt-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.35)] outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
          />
        </div>

        {/* Audience filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          {audienceTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setAudience(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                audience === tab
                  ? "bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] text-[#120a06] shadow-[0_10px_30px_rgba(255,122,69,0.25)]"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-8 space-y-3">
          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/60 backdrop-blur">
              No results. Try a different search term.
            </div>
          ) : (
            filtered.map((item) => {
              const isOpen = openId === item.id;
              const answer =
                item.answer?.trim().length > 0
                  ? item.answer
                  : "Answer coming soon.";
              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/7 hover:-translate-y-[1px]"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  >
                    <div>
                      <div className="text-sm text-white/50">
                        {item.category}
                        {item.subcategory ? ` • ${item.subcategory}` : ""}
                      </div>
                      <div className="mt-1 text-base font-medium text-white">
                        {item.question}
                      </div>
                    </div>
                    <div className="mt-1 text-white/40">{isOpen ? "–" : "+"}</div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-white/70 leading-relaxed">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="text-lg font-medium text-white">Still need help?</div>
          <p className="mt-1 text-white/60">
            Email us at{" "}
            <a
              className="text-[#ffb36b] hover:text-[#ff7a45] underline"
              href="mailto:hostsupport@atlasora.com"
            >
              hostsupport@atlasora.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

