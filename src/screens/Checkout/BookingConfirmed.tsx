import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../state/booking";

function makeRef() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "AO-";
  for (let i = 0; i < 8; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export default function BookingConfirmed() {
  const navigate = useNavigate();
  const { draft, clear } = useBooking();

  const ref = useMemo(() => makeRef(), []);

  return (
    <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <h1 className="text-3xl font-semibold">Booking confirmed</h1>
        <p className="mt-2 text-white/60">Thanks — your booking request is confirmed.</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
          <div className="flex justify-between">
            <span>Reference</span>
            <span className="text-white font-medium">{ref}</span>
          </div>

          {draft && (
            <>
              <div className="flex justify-between mt-2">
                <span>Dates</span>
                <span className="text-white">
                  {draft.checkIn} → {draft.checkOut}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Guests</span>
                <span className="text-white">{draft.guests}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total</span>
                <span className="text-white font-medium">€{draft.total}</span>
              </div>
            </>
          )}
        </div>

        <p className="mt-4 text-white/60 text-sm">
          We’ll email your confirmation details shortly. If you need help, contact{" "}
          <a className="underline text-[#ffb36b] hover:text-[#ff7a45]" href="mailto:hostsupport@atlasora.com">
            hostsupport@atlasora.com
          </a>
          .
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => {
              clear();
              navigate(`/property/${draft?.propertyId ?? "000001"}`);
            }}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10"
          >
            Back to property
          </button>
          <button
            onClick={() => {
              clear();
              navigate("/");
            }}
            className="rounded-2xl bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] px-4 py-3 text-[#120a06] font-medium"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
}

