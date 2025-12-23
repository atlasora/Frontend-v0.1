import React from "react";

type AOIconName =
  | "advance"
  | "calendar"
  | "fees"
  | "payments"
  | "payout"
  | "shield";

type AOIconProps = {
  name: AOIconName;
  size?: number; // px
  className?: string;
};

/**
 * AOIcon
 * Renders AtlasOra SVGs from /public/icons/ao with theme-able colors via CSS.
 */
const AOIcon: React.FC<AOIconProps> = ({ name, size = 28, className = "" }) => {
  // BASE_URL-safe path for Vite/static deployments
  const url = `${import.meta.env.BASE_URL}icons/ao/${name}.svg`;

  return (
    <img
      src={url}
      alt={name}
      width={size}
      height={size}
      className={["opacity-100 block", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
    />
  );
};

export default AOIcon;

