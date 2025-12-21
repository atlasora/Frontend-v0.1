import { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { AccountSidebar } from "../../../../components/AccountSidebar";
import SearchBar from "../../../../components/SearchBar";

export const HeroSection = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (location: string) => {
    const slug = location.toLowerCase().replace(/\s+/g, "-");
    navigate(`/city/${slug}`);
  };

  // Start at 3s and always loop from 3s → end → 3s
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const START_AT = 3; // seconds

    const handleLoadedMetadata = () => {
      try {
        video.currentTime = START_AT;
      } catch {
        // ignore seek errors
      }
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration) {
        video.currentTime = START_AT;
        video.play().catch(() => undefined);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative w-full h-auto min-h-[500px] sm:h-[789px] overflow-hidden bg-[#06090c]">
      <div className="relative w-full h-full min-h-[500px] sm:min-h-[789px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Content container */}
        <div className="relative h-full flex flex-col w-full sm:max-w-[1395px] mx-auto">
          <header className="pt-6 sm:pt-[51px] px-4 sm:px-8 mb-6 sm:mb-10 md:mb-14 flex items-center justify-between w-full max-w-full relative z-10">
            <img
              className="w-[100px] sm:w-[122.1px] h-auto sm:h-[28.08px] translate-y-[-1rem] animate-fade-in opacity-0 flex-shrink-0"
              alt="Logo"
              src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo-1.svg"
            />
            <div className="hidden md:flex md:flex-1 md:justify-center md:px-8">
              <SearchBar locationLabel="Barcelona" onSubmit={handleSearchSubmit} />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <button
                type="button"
                onClick={() => navigate("/help")}
                className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] shadow-md hover:opacity-90 transition"
              >
                FAQs
              </button>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] shadow-md hover:opacity-90 transition"
                    onClick={() => setIsAccountOpen(true)}
                  >
                    My Account
                  </button>
                  <button
                    type="button"
                    className="text-sm underline text-white"
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => loginWithRedirect()}
                  className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] shadow-md hover:opacity-90 transition"
                >
                  Login
                </button>
              )}
            </div>
          </header>

          <div className="flex-1 flex flex-col justify-center py-8 sm:py-24 sm:pb-[157px] px-4 sm:px-14">
            <div className="w-full sm:max-w-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h1 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight text-white text-center sm:text-left">
                Earn more from your place.
              </h1>
              <p className="mt-3 sm:mt-6 text-base sm:text-lg opacity-80 text-white text-center sm:text-left">
                Instant payouts upon check-in.
              </p>
              <p className="mt-3 sm:mt-6 text-base sm:text-lg font-light leading-relaxed text-white/90 w-full sm:max-w-3xl text-center sm:text-left">
                Launching in Spain in Q1 2026.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-center sm:items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button
                onClick={() => navigate("/host")}
                className="
                  w-full sm:w-auto
                  h-12 sm:h-14
                  px-6 sm:px-10
                  py-4 sm:py-4
                  rounded-full text-black font-semibold 
                  bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] 
                  hover:opacity-90 transition-all duration-300
                "
              >
                List your property
              </Button>

              <p className="mt-3 text-sm opacity-70 text-white text-center sm:text-left">
                Takes 2 minutes · No setup fee · Cancel anytime.
              </p>

              {/* Host benefits – premium AO logo version */}
              <div
                className="hidden sm:flex justify-center items-start gap-6 md:gap-24 mt-12 sm:mt-[70px] mb-12 sm:mb-[70px] text-white text-base sm:text-xl font-light text-center flex-wrap"
              >
                {/* Benefit 1 */}
                <div className="max-w-[260px]">
                  <img
                    src="/images/logo.png"
                    alt="AtlasOra logo"
                    className="mx-auto mb-3 h-16 w-auto"
                  />
                  <span>0% host fees for six months</span>
                </div>

                {/* Benefit 2 */}
                <div className="max-w-[260px]">
                  <img
                    src="/images/logo.png"
                    alt="AtlasOra logo"
                    className="mx-auto mb-3 h-16 w-auto"
                  />
                  <span>Free premium listing for six months</span>
                </div>

                {/* Benefit 3 */}
                <div className="max-w-[260px]">
                  <img
                    src="/images/logo.png"
                    alt="AtlasOra logo"
                    className="mx-auto mb-3 h-16 w-auto"
                  />
                  <span>Feature on our social media pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AccountSidebar
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </section>
  );
};
