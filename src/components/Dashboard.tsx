import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = (): JSX.Element => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen bg-[#06090c] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Welcome back to AtlasOra</h1>
        <p className="text-xl text-gray-300 mb-8">Signed in as {user?.email}</p>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

