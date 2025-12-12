import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "../../state/booking";
import { useAuth } from "../../state/auth";

export default function Checkout() {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const { draft, setDraft } = useBooking();
  const { isLoggedIn } = useAuth();
  const [name, setName] = useState(draft?.guestName ?? "");
  const [email, setEmail] = useState(draft?.guestEmail ?? "");
  const [phone, setPhone] = useState(draft?.guestPhone ?? "");

  const canContinue = useMemo(() => {
    return !!draft && name.trim().length > 1 && /\S+@\S+\.\S+/.test(email);
  }, [draft, name, email]);

  if (!draft || draft.propertyId !== propertyId) {
    return (
      <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">No booking selected</div>
          <p className="mt-2 text-white/60">
            Please return to the property page and click Reserve again.
          </p>
          <button
            onClick={() => navigate(`/property/${propertyId ?? "000001"}`)}
            className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] px-4 py-3 text-[#120a06] font-medium"
          >
            Back to property
          </button>
        </div>
      </div>
    );
  }

  const onContinue = () => {
    if (!draft) return;

    setDraft({
      ...draft,
      guestName: name.trim(),
      guestEmail: email.trim(),
      guestPhone: phone.trim(),
    });

    if (!isLoggedIn) {
      navigate(`/login?returnTo=/checkout/${draft.propertyId}/payment`);
      return;
    }

    navigate(`/checkout/${draft.propertyId}/payment`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#ff7a45]/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Confirm your booking</h1>
          <p className="mt-2 text-white/60">Review details below. You won’t be charged yet.</p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm text-white/50">Guest details</div>
            <div className="mt-4 grid gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              By continuing, you agree to AtlasOra’s booking terms and cancellation policy for this stay.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="lg:sticky lg:top-24 h-fit rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="text-lg font-semibold">Booking summary</div>
          <div className="mt-4 text-sm text-white/60">
            <div className="flex justify-between">
              <span>Check-in</span>
              <span className="text-white">{draft.checkIn}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Check-out</span>
              <span className="text-white">{draft.checkOut}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Guests</span>
              <span className="text-white">{draft.guests}</span>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 text-sm">
            <div className="flex justify-between">
              <span>
                €{draft.nightlyPrice} × {draft.nights} nights
              </span>
              <span>€{draft.subtotal}</span>
            </div>
            <div className="flex justify-between mt-2 text-white/70">
              <span>Service fee (5%)</span>
              <span>€{draft.serviceFee}</span>
            </div>
            <div className="flex justify-between mt-3 font-medium">
              <span>Total</span>
              <span>€{draft.total}</span>
            </div>
          </div>

          <button
            disabled={!canContinue}
            onClick={onContinue}
            className={`mt-6 w-full rounded-2xl px-4 py-3 font-medium transition ${
              canContinue
                ? "bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] text-[#120a06]"
                : "bg-white/10 text-white/40 cursor-not-allowed"
            }`}
          >
            Confirm & continue
          </button>
          <p className="mt-3 text-center text-xs text-white/50">You won’t be charged yet.</p>
        </div>
      </div>
    </div>
  );
}

