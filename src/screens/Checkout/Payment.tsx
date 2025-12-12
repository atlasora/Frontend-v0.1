import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBooking } from "../../state/booking";

export default function Payment() {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const { draft } = useBooking();
  const [message, setMessage] = useState<string | null>(null);

  if (!draft || draft.propertyId !== propertyId) {
    return (
      <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold">No booking selected</div>
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

  return (
    <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <h1 className="text-2xl font-semibold">Payment</h1>
        <p className="mt-2 text-white/60">
          Choose a payment method. Payments will be enabled soon; this is a preview checkout.
        </p>

        {/* Pay with */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => setMessage("Apple Pay coming soon")}
            className="w-full rounded-2xl bg-black px-4 py-3 text-white font-semibold shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-black/90 transition"
          >
             Pay
          </button>
          <button
            onClick={() => setMessage("Google Pay coming soon")}
            className="w-full rounded-2xl bg-black px-4 py-3 text-white font-semibold shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:bg-black/90 transition"
          >
            Google Pay
          </button>
          {message && <div className="text-sm text-white/70">{message}</div>}
        </div>

        {/* Divider */}
        <div className="mt-8 flex items-center gap-3 text-white/50 text-xs uppercase tracking-[0.08em]">
          <div className="flex-1 h-px bg-white/10" />
          <span>Or pay by card</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Card form */}
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-white/60">Card number</label>
            <input
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm text-white/60">Expiry</label>
              <input
                placeholder="MM/YY"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/60">CVC</label>
              <input
                placeholder="123"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/60">Name on card</label>
            <input
              placeholder="Full name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm text-white/60">Country/region</label>
              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20">
                <option className="bg-[#05070d]">Spain</option>
                <option className="bg-[#05070d]">United Kingdom</option>
                <option className="bg-[#05070d]">United States</option>
                <option className="bg-[#05070d]">France</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/60">Postcode / ZIP</label>
              <input
                placeholder="e.g. 08002"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#ff7a45]/50 focus:ring-2 focus:ring-[#ff7a45]/20"
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Payments will be enabled soon. This is a preview checkout.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
          <div className="flex justify-between">
            <span>Total</span>
            <span className="text-white font-medium">€{draft.total}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/booking/confirmed")}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] px-4 py-3 text-[#120a06] font-medium hover:opacity-90 transition"
        >
          Confirm payment
        </button>
        <button
          onClick={() => navigate(`/checkout/${draft.propertyId}`)}
          className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}

