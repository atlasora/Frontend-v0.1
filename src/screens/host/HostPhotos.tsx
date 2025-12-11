import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HostLayout from "../../components/host/HostLayout";

const HostPhotos: React.FC = () => {
  const navigate = useNavigate();
  const [photosCount, setPhotosCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [videoFileName, setVideoFileName] = useState<string | null>(null);
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [tiktokError, setTiktokError] = useState<string | null>(null);

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    // You can add size / type checks here later
    setVideoFileName(file.name);
  };

  const handleTiktokChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTiktokUrl(value);
    // Very light validation: must at least look like a TikTok URL
    if (value && !value.includes("tiktok.com")) {
      setTiktokError("Please paste a valid TikTok link.");
    } else {
      setTiktokError(null);
    }
  };

  return (
    <HostLayout
      title="Add a few great photos"
      description="You can upload high-quality images later. For now, just imagine this is your gallery."
      step={7}
      totalSteps={13}
    >
      <div className="max-w-3xl space-y-4">
        <p className="text-xs text-neutral-400">
          Add bright, landscape photos and show every main room. You can upload more later.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 h-40 rounded-2xl border border-dashed border-white/25 bg-neutral-900/60 flex flex-col items-center justify-center text-xs text-neutral-400">
            Drag & drop images here
            <button
              type="button"
              className="mt-2 rounded-lg border border-white/20 px-3 py-1 text-[11px] text-neutral-200 hover:border-[#f2bfa7] hover:text-white transition"
              onClick={() => {
                setPhotosCount((prev) => Math.min(prev + 1, 20));
                setError(null);
              }}
            >
              Add sample photo
            </button>
          </div>
          <div className="h-40 rounded-2xl bg-neutral-900/50 flex items-center justify-center text-xs text-neutral-400">
            {photosCount} photo{photosCount === 1 ? "" : "s"} added
          </div>
        </div>

        {/* --- VIDEO + TIKTOK SECTION --- */}
        <section className="mt-10">
          <p className="text-sm text-neutral-300 mb-3">
            Boost your listing with video — upload a short clip or paste a TikTok link.
            This is optional, but it really helps guests feel the space.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Upload video card */}
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/40 p-5">
              <h3 className="text-sm font-semibold text-neutral-100 mb-1">
                Upload a quick video (optional)
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                A 15–60 second walkthrough works best. MP4 or MOV, up to 100&nbsp;MB.
              </p>
              <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-neutral-700 bg-neutral-900/60 px-4 py-6 cursor-pointer hover:border-neutral-500 transition">
                <span className="text-xs text-neutral-300 mb-2">
                  Drag &amp; drop a video file, or click to browse
                </span>
                <span className="text-[11px] text-neutral-500">
                  {videoFileName ? `Selected: ${videoFileName}` : "No video selected yet"}
                </span>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleVideoChange}
                />
              </label>
            </div>

            {/* TikTok URL card */}
            <div className="rounded-2xl border border-neutral-700 bg-neutral-900/40 p-5">
              <h3 className="text-sm font-semibold text-neutral-100 mb-1">
                Or paste a TikTok link
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Already have a great TikTok of your place? Paste the URL and we'll feature it on your listing.
              </p>
              <input
                type="url"
                placeholder="https://www.tiktok.com/@yourhandle/video/1234567890"
                value={tiktokUrl}
                onChange={handleTiktokChange}
                className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#ffb58a] focus:border-[#ffb58a]"
              />
              {tiktokError && (
                <p className="mt-1 text-[11px] text-red-400">{tiktokError}</p>
              )}
              {!tiktokError && tiktokUrl && (
                <p className="mt-1 text-[11px] text-emerald-400">
                  TikTok link added — we'll attach this to your listing.
                </p>
              )}
            </div>
          </div>
        </section>

        <p className="text-[11px] text-neutral-500">
          Later: image uploader, reorder, cover photo, compression, etc.
        </p>
        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-neutral-300 hover:text-white"
          >
            Back
          </button>
          <button
            onClick={() => {
              if (photosCount < 5) {
                setError("Please add at least 5 photos to help your place stand out.");
                return;
              }
              navigate("/host/details");
            }}
            className="rounded-xl bg-[#f2bfa7] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#e3b49c] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </HostLayout>
  );
};

export default HostPhotos;

