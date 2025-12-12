import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccountSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AccountSidebar: React.FC<AccountSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const { logout } = useAuth0();
  const [isGuestOpen, setIsGuestOpen] = useState(true);
  const [isHostOpen, setIsHostOpen] = useState(false);
  const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-6 right-0 z-50 w-[340px] max-w-[90vw] rounded-l-3xl shadow-2xl overflow-hidden bg-[#0a0a0d] transition-transform duration-300">
        <div className="flex flex-col gap-6 p-8">
          {/* Top row with title and close button */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">My Account</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-white text-2xl leading-none hover:opacity-70 transition-opacity"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Navigation list */}
          <nav className="flex flex-col gap-6">
            {/* Guest */}
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => setIsGuestOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-medium hover:bg-white/5 transition rounded-t-2xl"
              >
                <span>Guest</span>
                {isGuestOpen ? (
                  <ChevronUp className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/60" />
                )}
              </button>
              {isGuestOpen && (
                <div className="flex flex-col px-4 pb-4 gap-3 text-white/90">
                  <Link
                    to="/account/profile"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    View Profile <span>›</span>
                  </Link>
                  <Link
                    to="/account/bookings"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    My Bookings <span>›</span>
                  </Link>
                  <Link
                    to="/help"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Help <span>›</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Host */}
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => setIsHostOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-medium hover:bg-white/5 transition rounded-t-2xl"
              >
                <span>Host</span>
                {isHostOpen ? (
                  <ChevronUp className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/60" />
                )}
              </button>
              {isHostOpen && (
                <div className="flex flex-col px-4 pb-4 gap-3 text-white/90">
                  <Link
                    to="/dashboard"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Dashboard <span>›</span>
                  </Link>
                  <Link
                    to="/listings"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Listings <span>›</span>
                  </Link>
                  <Link
                    to="/messages"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Messages <span>›</span>
                  </Link>
                  <Link
                    to="/reservations"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Reservations <span>›</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Account Settings */}
            <div className="rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                onClick={() => setIsAccountSettingsOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-medium hover:bg-white/5 transition rounded-t-2xl"
              >
                <span>Account Settings</span>
                {isAccountSettingsOpen ? (
                  <ChevronUp className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/60" />
                )}
              </button>
              {isAccountSettingsOpen && (
                <div className="flex flex-col px-4 pb-4 gap-3 text-white/90">
                  <Link
                    to="/account/settings"
                    onClick={onClose}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition"
                  >
                    Account Settings <span>›</span>
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex justify-between items-center hover:text-[#FFA25B] transition text-left w-full"
                  >
                    Log out <span>›</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

