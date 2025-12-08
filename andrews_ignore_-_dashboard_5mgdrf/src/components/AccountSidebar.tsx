import React from "react";
import { Link } from "react-router-dom";

type AccountSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AccountSidebar: React.FC<AccountSidebarProps> = ({
  isOpen,
  onClose,
}) => {
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
            <Link
              to="/dashboard"
              onClick={onClose}
              className="flex justify-between items-center hover:text-[#FFA25B] transition text-white"
            >
              Dashboard <span>›</span>
            </Link>
            <Link
              to="/listings"
              onClick={onClose}
              className="flex justify-between items-center hover:text-[#FFA25B] transition text-white"
            >
              Listings <span>›</span>
            </Link>
            <Link
              to="/messages"
              onClick={onClose}
              className="flex justify-between items-center hover:text-[#FFA25B] transition text-white"
            >
              Messages <span>›</span>
            </Link>
            <Link
              to="/reservations"
              onClick={onClose}
              className="flex justify-between items-center hover:text-[#FFA25B] transition text-white"
            >
              Reservations <span>›</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

