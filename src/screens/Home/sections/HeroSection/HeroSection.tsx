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
    <section className="relative w-full h-[789px]">
      <div className="relative w-full h-full">
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
        <div className="relative h-full flex flex-col max-w-[1395px] mx-auto">
          <header className="pt-[51px] px-8 mb-10 md:mb-14 flex items-center justify-between w-full">
            <img
              className="w-[122.1px] h-[28.08px] translate-y-[-1rem] animate-fade-in opacity-0"
              alt="Logo"
              src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo-1.svg"
            />
            <div className="flex-1 flex justify-center px-8">
              <SearchBar locationLabel="Barcelona" onSubmit={handleSearchSubmit} />
            </div>
            <div className="flex items-center gap-4">
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

          <div className="flex-1 flex flex-col justify-center px-14 pb-[157px]">
            <div className="max-w-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white">
                Earn more from your place. Instant payouts upon check-in.
              </h1>
              <p className="mt-6 text-lg md:text-2xl font-light leading-relaxed text-white/90 max-w-3xl">
                AtlasOra brings hosts, guests, and communities together on fairer terms. Earn more,
                access your money sooner, and host with confidence. We grow together.
              </p>
            </div>

            <div className="mt-[118px] flex flex-col gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button
                onClick={() => navigate("/host/start")}
                className="
                  w-[352px]
                  px-10 py-4 rounded-full text-black font-semibold 
                  bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] 
                  hover:opacity-90 transition-all duration-300
                "
              >
                List your property
              </Button>

              <p className="w-[352px] text-[14px] text-white text-opacity-80 text-center leading-[20px] mt-1">
                Takes 2 minutes · No setup fee · Cancel anytime.
              </p>
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
