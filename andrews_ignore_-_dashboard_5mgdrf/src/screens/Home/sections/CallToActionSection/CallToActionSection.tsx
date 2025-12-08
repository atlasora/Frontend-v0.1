import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#05070B] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Join AtlasOra for a new way
              <br />
              to experience
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Free to join. No commitment. Instant payouts.
            </p>

            {/* Form */}
            <form className="space-y-4 max-w-xl">
              <div>
                <label className="block text-sm text-neutral-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md bg-neutral-900/70 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F7A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md bg-neutral-900/70 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F7A] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-300 mb-1">
                    Country
                  </label>
                  <Select>
                    <SelectTrigger className="w-full rounded-md bg-neutral-900/70 border border-neutral-700 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F7A] focus:border-transparent h-auto">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-neutral-300 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md bg-neutral-900/70 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F7A] focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-100 transition"
              >
                Start Hosting Today
                <span className="ml-2">↗</span>
              </button>

              <p className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
                <span role="img" aria-hidden="true">🔒</span>
                We respect your privacy, unsubscribe at any time.
              </p>
            </form>
          </div>

          {/* Right Column - Video */}
          <div className="rounded-3xl overflow-hidden bg-black shadow-[0_0_80px_rgba(0,0,0,0.7)]">
            <video
              className="w-full h-full object-cover"
              src="/videos/signup.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};
