import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProviderDashboard from "./pages/ProviderDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProviderDashboard />} />
          <Route path="provider-dashboard" element={<ProviderDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
