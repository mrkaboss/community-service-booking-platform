import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProviderDashboard from "./pages/ProviderDashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProviderDashboard />} />
          <Route path="provider-dashboard" element={<ProviderDashboard />} />
          <Route path="Footer" element={<Footer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
