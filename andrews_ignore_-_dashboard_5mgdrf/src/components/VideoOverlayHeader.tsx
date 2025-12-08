import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { AccountSidebar } from "./AccountSidebar";
import SearchBar from "./SearchBar";

export const VideoOverlayHeader = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (location: string) => {
    const slug = location.toLowerCase().replace(/\s+/g, "-");
    navigate(`/city/${slug}`);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-10 pt-[51px] px-8 flex items-center justify-between max-w-[1395px] mx-auto w-full">
        <img
          className="w-[122.1px] h-[28.08px] translate-y-[-1rem] animate-fade-in opacity-0"
          alt="Logo"
          src="https://c.animaapp.com/mir8wa3wzbI6XX/img/logo-1.svg"
        />
        <div className="flex-1 flex justify-center px-8">
          <SearchBar
            locationLabel="Barcelona"
            datesLabel="Add dates"
            guestsLabel="Add guests"
            onSubmit={handleSearchSubmit}
          />
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

      <AccountSidebar
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </>
  );
};

