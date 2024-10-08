// src/App.jsx

import React, { useState } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Dashboard from "./sections/Dashboard.jsx"; // The main dashboard component

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard": // Render the dashboard-related content
        return <Dashboard />;
      case "home":
      default:
        return (
          <>
            <Hero setActivePage={setActivePage} />
            <Features />
            <Pricing />
            <Faq />
            <Testimonials />
            <Download />
            <Footer />
          </>
        );
    }
  };

  return (
    <main className="overflow-hidden">
      {activePage !== "dashboard" && <Header />}
      {renderContent()}
    </main>
  );
};

export default App;