import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Dashboard from "./screens/Dashboard";
import Listings from "./screens/Listings";
import Messages from "./screens/Messages";
import Reservation from "./screens/Reservation";
import Property000001 from "./screens/Property00001/Property000001";
import BarcelonaExplore from "./screens/city/BarcelonaExplore";
import Onboarding from "./screens/Onboarding/Onboarding";
import HostStart from "./screens/Host/HostStart";
import HostPlaceType from "./screens/Host/HostPlaceType";
import HostLocation from "./screens/Host/HostLocation";
import HostBasics from "./screens/Host/HostBasics";
import HostAmenities from "./screens/Host/HostAmenities";
import HostPhotos from "./screens/Host/HostPhotos";
import HostDetails from "./screens/Host/HostDetails";
import HostPricing from "./screens/Host/HostPricing";
import HostReview from "./screens/Host/HostReview";

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
        <Route path="/host/start" element={<HostStart />} />
        <Route path="/host/place-type" element={<HostPlaceType />} />
        <Route path="/host/location" element={<HostLocation />} />
        <Route path="/host/basics" element={<HostBasics />} />
        <Route path="/host/amenities" element={<HostAmenities />} />
        <Route path="/host/photos" element={<HostPhotos />} />
        <Route path="/host/details" element={<HostDetails />} />
        <Route path="/host/pricing" element={<HostPricing />} />
        <Route path="/host/review" element={<HostReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
