import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../state/auth";

function safeReturnTo(value: string | null) {
  if (!value) return "/";
  if (!value.startsWith("/")) return "/";
  return value;
}

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const returnTo = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return safeReturnTo(params.get("returnTo"));
  }, [location.search]);

  const onLogin = () => {
    login();
    navigate(returnTo, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
        <h1 className="text-3xl font-semibold">Log in</h1>
        <p className="mt-2 text-white/60">Log in to continue your booking.</p>
        <button
          onClick={onLogin}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#ff7a45] to-[#ffb36b] px-4 py-3 text-[#120a06] font-medium"
        >
          Continue
        </button>
        <p className="mt-3 text-xs text-white/50">You’ll be returned to your booking after login.</p>
      </div>
    </div>
  );
}




