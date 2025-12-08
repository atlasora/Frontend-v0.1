import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Dashboard from "./screens/Dashboard";
import Listings from "./screens/Listings";
import Messages from "./screens/Messages";
import Reservation from "./screens/Reservation";
import Property000001 from "./screens/Property00001/Property000001";
import BarcelonaExplore from "./screens/city/BarcelonaExplore";
import Onboarding from "./screens/Onboarding/Onboarding";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/property/000001" element={<Property000001 />} />
        <Route path="/city/barcelona" element={<BarcelonaExplore />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
