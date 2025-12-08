import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton: React.FC<{ className?: string }> = ({ className }) => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => loginWithRedirect()}
      className={className}
    >
      Login
    </button>
  );
};

