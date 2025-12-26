import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ClientDashboard from "./pages/ClientDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetails />} />

          <Route path="client-dashboard" element={<ClientDashboard />} />
          <Route path="provider-dashboard" element={<ProviderDashboard />} />

          <Route path="booking/:id" element={<BookingForm />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
