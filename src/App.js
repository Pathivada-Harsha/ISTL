import React, { Suspense, useEffect, useState } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.js"
import Footer from "./components/Footer"
import "./App.css"
import ScrollToTop from "./components/ScrollToTop.js"
import BackToTop from "./components/BackToTop.js"
import "./components_css/backToTop.css"

// Lazy loaded components
const About = React.lazy(() => import("./pages/About"))
const WhoWeAre = React.lazy(() => import("./pages/WhoWeAre"))
const WhatWeDo = React.lazy(() => import("./pages/WhatWeDo"))
const Products = React.lazy(() => import("./pages/Products"))
const IstlCcms = React.lazy(() => import("./pages/products/IstlCcms"))
const IstlItms = React.lazy(() => import("./pages/products/IstlItms"))
const IstlMcms = React.lazy(() => import("./pages/products/IstlMcms"))
const AGDSM = React.lazy(() => import("./pages/products/Agdsm"))
const SolarPanels = React.lazy(() => import("./pages/epc/SolarPanels"))
const Substations = React.lazy(() => import("./pages/epc/Substations"))
const Power_td = React.lazy(() => import("./pages/epc/power_td"))
const SinglePhase = React.lazy(() => import("./pages/smartmeters/Singlephase.js"))
const Threephase = React.lazy(() => import("./pages/smartmeters/Threephase.js"))
const StreetLights = React.lazy(() => import("./pages/smartlights/SmartStreetLights"))
const Blogs = React.lazy(() => import("./pages/blogs"))
const BookDemo = React.lazy(() => import("./pages/BookDemo"))
const Privacy = React.lazy(() => import("./pages/documents/privacy-policy"))
const Terms = React.lazy(() => import("./pages/documents/terms-of-service"))
const Cookie = React.lazy(() => import("./pages/documents/cookie-policy"))

// Loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "18px",
      color: "#666",
    }}
  >
    Loading...
  </div>
)

// Component to handle invalid routes with conditional loading
const InvalidRouteHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Check if the URL contains "false"
  const shouldShowLoading = location.pathname.includes('false');

  useEffect(() => {
    console.log('Invalid path:', location.pathname);
    
    if (shouldShowLoading) {
      setIsRedirecting(true);
      
      // Add a small delay to show the loading spinner before redirecting
      const timer = setTimeout(() => {
        navigate('/');
      }, 800); // Adjust this delay as needed

      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigate, shouldShowLoading]);

  // Show loading spinner if URL contains "false", otherwise show Page Not Found
  if (shouldShowLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Page Not Found</h2>
      <p>The requested page could not be found.</p>
    </div>
  );
};

function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/istl-ccms" element={<IstlCcms />} />
            <Route path="/products/istl-Itms" element={<IstlItms />} />
            <Route path="/products/istl-mcms" element={<IstlMcms />} />
            <Route path="/products/agdsm" element={<AGDSM />} />
            <Route path="/products/epc/solar-panels" element={<SolarPanels />} />
            <Route path="/products/epc/substations" element={<Substations />} />
            <Route path="/products/epc/power_td" element={<Power_td />} />
            <Route path="/products/smart-meters/single-phase" element={<SinglePhase />} />
            <Route path="/products/smart-meters/three-phase" element={<Threephase />} />
            <Route path="/products/smart-street-lights" element={<StreetLights />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Cookie" element={<Cookie />} />
            <Route path="/book-demo" element={<BookDemo />} />
            {/* Replace the catch-all route with our loading handler */}
            <Route path="*" element={<InvalidRouteHandler />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App;