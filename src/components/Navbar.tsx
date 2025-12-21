import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

type NavbarProps = {
  onOpenSidebar?: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const handleSearchSubmit = (location: string) => {
    const slug = location.toLowerCase().replace(/\s+/g, "-");
    navigate(`/city/${slug}`);
  };

  return (
    <nav className="w-full bg-[#070a0d] border-b border-[#ffffff1a]">
      <div className="max-w-[1395px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold">
          Cursor
        </Link>
        <div className="flex-1 flex justify-center px-8">
          <SearchBar onSubmit={handleSearchSubmit} />
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/help"
            className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] shadow-md hover:opacity-90 transition"
          >
            FAQs
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {onOpenSidebar && (
                <button
                  type="button"
                  className="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#FF9F7A] via-[#FFBFA5] to-[#FFD9B5] shadow-md hover:opacity-90 transition"
                  onClick={onOpenSidebar}
                >
                  My Account
                </button>
              )}
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
      </div>
    </nav>
  );
};

