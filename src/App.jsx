import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// NEW
import WebDesign from "./pages/services/WebDesign";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import ReactApps from "./pages/services/ReactApps";
import AdminDashboards from "./pages/services/AdminDashboards";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* NEW ROUTE */}
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/react-apps" element={<ReactApps />} />
        <Route path="/services/admin-dashboards" element={<AdminDashboards />} />


        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
