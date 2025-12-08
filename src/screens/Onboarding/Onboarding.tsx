import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const countries = [
  "United Kingdom",
  "Spain",
  "France",
  "Germany",
  "Ireland",
  "Portugal",
  "Italy",
  "Other",
];

const Onboarding: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-[#070a0d] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-4">Please log in to continue.</p>
          <p className="text-sm text-neutral-400">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user?.sub) {
      setError("Not logged in");
      return;
    }

    if (!firstName.trim() || !lastName.trim() || !country.trim()) {
      setError("Please fill in your first name, last name, and country.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/complete-onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.sub, // 👈 IMPORTANT: Auth0 user id
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          location: country.trim(), // API expects "location" but form uses "country"
          phone: phone.trim() || null,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError("Onboarding failed: " + errorText);
        setLoading(false);
        return;
      }

      // ✅ If everything worked, send them "home"
      window.location.href = "/";
    } catch (err: any) {
      console.error(err);
      setError("Unexpected error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070a0d] text-white flex flex-col">
      {/* Simple header with logo only for now */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <img
            src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo-1.svg"
            alt="AtlasOra"
            className="h-8"
          />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0c1016] shadow-2xl p-8">
          <h1 className="text-2xl font-semibold mb-2">
            Let&apos;s set up your account
          </h1>
          <p className="text-sm text-neutral-300 mb-6">
            Just a few details so hosts know who&apos;s staying, and we can keep
            your trips smooth.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs text-neutral-300 mb-1">
                  First name<span className="text-[#f2bfa7]">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl bg-[#05070b] border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-neutral-300 mb-1">
                  Last name<span className="text-[#f2bfa7]">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-xl bg-[#05070b] border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-neutral-300 mb-1">
                Country<span className="text-[#f2bfa7]">*</span>
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl bg-[#05070b] border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
              >
                <option value="">Select your country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-neutral-300 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-[#05070b] border border-white/15 px-3 py-2 text-sm outline-none focus:border-[#f2bfa7] focus:ring-1 focus:ring-[#f2bfa7]/60"
                placeholder="+44..."
              />
            </div>

            {error && (
              <p className="text-xs text-red-400 mt-1">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-[#f2bfa7] text-black text-sm font-semibold py-2.5 shadow-lg shadow-black/30 hover:bg-[#e5b298] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Saving…" : "Continue"}
            </button>

            <p className="mt-3 text-[11px] text-neutral-400">
              You can update these details anytime in{" "}
              <span className="text-[#f2bfa7]">My Account</span>.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;


