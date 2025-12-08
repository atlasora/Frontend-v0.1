import React from "react";

type SearchBarProps = {
  locationLabel?: string;
  datesLabel?: string;
  guestsLabel?: string;
  onClick?: () => void; // for now, whole pill can be clickable
  onSubmit?: (location: string) => void; // called with locationLabel when search is clicked
};

const SearchBar: React.FC<SearchBarProps> = ({
  locationLabel = "Bangkok",
  datesLabel = "Oct 30 – Nov 18",
  guestsLabel = "2 guests",
  onClick,
  onSubmit,
}) => {
  const handleClick = () => {
    if (onSubmit && locationLabel) {
      onSubmit(locationLabel);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        flex items-center gap-4
        rounded-full
        bg-white/10
        px-5 py-2.5
        text-xs md:text-sm
        text-neutral-100
        border border-white/25
        shadow-lg shadow-black/40
        backdrop-blur
        max-w-xl
      "
    >
      {/* Location */}
      <div className="flex items-center gap-2 border-r border-white/20 pr-4">
        <span className="text-sm">🗺️</span>
        <span className="font-medium">{locationLabel}</span>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-2 border-r border-white/20 pr-4">
        <span className="text-sm">📅</span>
        <span>{datesLabel}</span>
      </div>

      {/* Guests */}
      <div className="flex items-center gap-2 pr-2">
        <span className="text-sm">👤</span>
        <span>{guestsLabel}</span>
      </div>

      {/* Search icon bubble */}
      <div
        className="
          ml-2 flex h-8 w-8 items-center justify-center
          rounded-full
          bg-black
          text-white
          hover:bg-[#f2bfa7]
          hover:text-black
          transition-colors
        "
      >
        <span className="text-xs font-semibold">🔍</span>
      </div>
    </button>
  );
};

export default SearchBar;

