import React, { useEffect, useMemo, useRef, useState } from "react";

type FeaturedListing = {
  id: string;
  title: string;        // "Home in Barcelona"
  subtitle: string;     // "3 Bedrooms, Private Pool"
  price: string;        // "€400 / night"
  imageUrl?: string;    // optional
  badge?: string;       // "Verified stay"
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function FeaturedListingsCarousel({
  listings,
  autoAdvanceMs = 10000,
}: {
  listings: FeaturedListing[];
  autoAdvanceMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // If listings array changes, keep active index valid
  const safeIndex = useMemo(
    () => clamp(activeIndex, 0, Math.max(0, listings.length - 1)),
    [activeIndex, listings.length]
  );

  // Scroll to index (horizontal only, avoid page scroll jumps)
  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children.item(index) as HTMLElement | null;
    if (!child) return;

    const left = child.offsetLeft;
    el.scrollTo({ left, behavior: "smooth" });
  };

  // Track active slide on scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;

        // Find the child whose left edge is closest to the scroller's left
        const left = el.getBoundingClientRect().left;
        let bestIdx = 0;
        let bestDist = Infinity;

        children.forEach((c, idx) => {
          const dist = Math.abs(c.getBoundingClientRect().left - left);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });

        setActiveIndex(bestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Auto-advance every 10s (pause while user is interacting)
  useEffect(() => {
    if (listings.length <= 1) return;

    let timer: number | null = null;
    let interactionTimeout: number | null = null;

    const start = () => {
      stop();
      timer = window.setInterval(() => {
        const next = (safeIndex + 1) % listings.length;
        scrollToIndex(next);
      }, autoAdvanceMs);
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };

    const handleUserInteraction = () => {
      // stop immediately, restart after a short delay
      stop();
      if (interactionTimeout) window.clearTimeout(interactionTimeout);
      interactionTimeout = window.setTimeout(() => start(), 2500);
    };

    const el = scrollerRef.current;
    if (!el) return;

    start();

    // Touch/mouse/trackpad interactions
    el.addEventListener("touchstart", handleUserInteraction, { passive: true });
    el.addEventListener("wheel", handleUserInteraction, { passive: true });
    el.addEventListener("mousedown", handleUserInteraction);

    return () => {
      stop();
      if (interactionTimeout) window.clearTimeout(interactionTimeout);
      el.removeEventListener("touchstart", handleUserInteraction);
      el.removeEventListener("wheel", handleUserInteraction);
      el.removeEventListener("mousedown", handleUserInteraction);
    };
  }, [listings.length, autoAdvanceMs, safeIndex]);

  if (!listings.length) return null;

  return (
    <div className="w-full">
      {/* Header row (optional) */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white/90 text-sm tracking-wide">Featured Listings</h3>

        {/* Dots */}
        <div className="flex gap-2">
          {listings.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to featured listing ${i + 1}`}
              className={[
                "h-2 w-2 rounded-full transition-all",
                i === safeIndex ? "bg-white/80 scale-110" : "bg-white/25 hover:bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="
          flex gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          scroll-smooth
          [-webkit-overflow-scrolling:touch]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {listings.map((item) => (
          <article
            key={item.id}
            className="
              min-w-[80%] sm:min-w-[70%]
              snap-start
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              overflow-hidden
              shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
            "
          >
            {/* Image */}
            <div className="relative h-56 w-full bg-black/40">
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#ffb07a33] via-[#00000033] to-[#ff6a2a33]" />
              )}

              {/* Badge */}
              {item.badge && (
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 border border-white/10">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Copy */}
            <div className="p-5">
              <h4 className="text-[#ffb07a] text-lg font-semibold leading-tight">
                {item.title}
              </h4>
              <p className="text-white/70 mt-1 text-sm">{item.subtitle}</p>
              <p className="text-white mt-3 font-semibold">{item.price}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Optional: small arrows (nice-to-have on mobile) */}
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={() => scrollToIndex((safeIndex - 1 + listings.length) % listings.length)}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-white/80"
          aria-label="Previous featured listing"
        >
          ←
        </button>
        <button
          onClick={() => scrollToIndex((safeIndex + 1) % listings.length)}
          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-white/80"
          aria-label="Next featured listing"
        >
          →
        </button>
      </div>
    </div>
  );
}


