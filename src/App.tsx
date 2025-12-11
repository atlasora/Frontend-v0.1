import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Dashboard from "./screens/Dashboard";
import Listings from "./screens/Listings";
import Messages from "./screens/Messages";
import Reservation from "./screens/Reservation";
import Property000001 from "./screens/Property00001/Property000001";
import BarcelonaExplore from "./screens/city/BarcelonaExplore";
import Onboarding from "./screens/Onboarding/Onboarding";
import HostOverview from "./screens/Host/HostOverview";
import HostStart from "./screens/host/HostStart";
import HostPlaceType from "./screens/host/HostPlaceType";
import HostLocation from "./screens/host/HostLocation";
import HostBasics from "./screens/host/HostBasics";
import HostAmenities from "./screens/host/HostAmenities";
import HostPhotos from "./screens/host/HostPhotos";
import HostDetails from "./screens/host/HostDetails";
import HostPricing from "./screens/host/HostPricing";
import HostReview from "./screens/host/HostReview";
import HostSecurity from "./screens/host/HostSecurity";
import HostHostDetails from "./screens/host/HostHostDetails";
import HostConfirmation from "./screens/host/HostConfirmation";
import HostVerification from "./screens/host/HostVerification";

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
        {/* Host listing flow */}
        <Route path="/host/overview" element={<HostOverview />} />
        <Route path="/host/start" element={<HostStart />} />
        <Route path="/host/place-type" element={<HostPlaceType />} />
        <Route path="/host/location" element={<HostLocation />} />
        <Route path="/host/basics" element={<HostBasics />} />
        <Route path="/host/amenities" element={<HostAmenities />} />
        <Route path="/host/photos" element={<HostPhotos />} />
        <Route path="/host/details" element={<HostDetails />} />
        <Route path="/host/pricing" element={<HostPricing />} />
        <Route path="/host/security" element={<HostSecurity />} />
        <Route path="/host/host-details" element={<HostHostDetails />} />
        <Route path="/host/review" element={<HostReview />} />
        <Route path="/host/verify" element={<HostVerification />} />
        <Route path="/host/confirm" element={<HostConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
