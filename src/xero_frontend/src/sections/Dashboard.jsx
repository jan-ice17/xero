import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaHandshake,
  FaStore,
  FaUtensils,
  FaHandsHelping,
  FaUserAlt,
  FaCoins,
  FaChevronDown,
  FaChevronUp,
  FaWallet,
  FaTrophy,
} from "react-icons/fa";

import BusinessProfile from "./BusinessProfile";
import Supermarket from "./Supermarket";
import Restaurant from "./Restaurant";
import Charity from "./Charity";
import Community from "./Community";
import Tokens from "./Tokens";
import Central from "./Central";
import XeroLeague from "./XeroLeague";

const Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isPlugInstalled, setIsPlugInstalled] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("central");

  // Check if Plug Wallet is installed
  useEffect(() => {
    if (window.ic?.plug) {
      setIsPlugInstalled(true);
    }
  }, []);

  // Function to connect wallet using Plug Wallet
  const connectWallet = async () => {
    if (!window.ic?.plug) {
      window.open("https://plugwallet.ooo/", "_blank");
      alert("Plug wallet not installed.");
      return;
    }
    try {
      await window.ic.plug.requestConnect();
      const principalId = await window.ic.plug.agent.getPrincipal();
      setWalletAddress(principalId.toString());
      alert(`Connected! Your wallet address is: ${principalId}`);
    } catch (error) {
      console.error("Failed to connect to Plug wallet:", error);
      alert("Failed to connect to Plug wallet. Please try again.");
    }
  };

  // Toggle business dropdown menu
  const toggleBusinessDropdown = () => {
    setIsBusinessOpen(!isBusinessOpen);
  };

  // Render the active section
  const renderSection = () => {
    const businessType = localStorage.getItem("businessType");
    if (!businessType && (activeSection === "supermarket" || activeSection === "restaurant" || activeSection === "charity")) {
      return (
        <div>
          <h1>Oops!</h1>
          <p>
            It looks like you haven't set up your business profile yet. Please complete your profile to access the available businesses.
          </p>
        </div>
      );
    }

    switch (activeSection) {
      case "business-profile":
        return <BusinessProfile />;
      case "supermarket":
        return <Supermarket />;
      case "restaurant":
        return <Restaurant />;
      case "charity":
        return <Charity />;
      case "community":
        return <Community />;
      case "tokens":
        return <Tokens />;
      case "xero-league":
        return <XeroLeague />;
      case "central":
      default:
        return <Central />;
    }
  };

  return (
    <motion.div className="dashboard-container">
      {/* Sidebar */}
      <motion.div className="sidebar">
        <div className="logo-container">
          <img src="images/xora.svg" alt="Xora" className="logo" />
        </div>

        <div className="menu">
          {/* Central Hub */}
          <motion.div className={`menu-item ${activeSection === "central" ? "active" : ""}`}>
            <div onClick={() => setActiveSection("central")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <FaHome className="menu-icon" />
              <span>Central Hub</span>
            </div>
          </motion.div>

          {/* Business Profile */}
          <motion.div className={`menu-item ${activeSection === "business-profile" ? "active" : ""}`}>
            <div onClick={() => setActiveSection("business-profile")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <FaUserAlt className="menu-icon" />
              <span>Business Profile</span>
            </div>
          </motion.div>

          {/* Dropdown for Business */}
          <div className="menu-section">
            <motion.div className="menu-item dropdown-toggle" onClick={toggleBusinessDropdown}>
              <span style={{ color: "#9bb5bf" }}>Your business</span>
              {isBusinessOpen ? <FaChevronUp className="chevron-icon" style={{ color: "#9bb5bf" }} /> : <FaChevronDown className="chevron-icon" style={{ color: "#9bb5bf" }} />}
            </motion.div>

            {isBusinessOpen && (
              <div className="dropdown-content">
                <motion.div className={`menu-item ${activeSection === "supermarket" ? "active" : ""}`}>
                  <div onClick={() => setActiveSection("supermarket")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <FaStore className="menu-icon" />
                    <span>Supermarket/ Store</span>
                  </div>
                </motion.div>
                <motion.div className={`menu-item ${activeSection === "restaurant" ? "active" : ""}`}>
                  <div onClick={() => setActiveSection("restaurant")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <FaUtensils className="menu-icon" />
                    <span>Restaurant/Fast food</span>
                  </div>
                </motion.div>
                <motion.div className={`menu-item ${activeSection === "charity" ? "active" : ""}`}>
                  <div onClick={() => setActiveSection("charity")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <FaHandsHelping className="menu-icon" />
                    <span>Charity/ NGO</span>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Community */}
          <motion.div className={`menu-item ${activeSection === "community" ? "active" : ""}`}>
            <div onClick={() => setActiveSection("community")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <FaHandshake className="menu-icon" />
              <span>Community</span>
            </div>
          </motion.div>

          {/* Tokens */}
          <motion.div className={`menu-item ${activeSection === "tokens" ? "active" : ""}`}>
            <div onClick={() => setActiveSection("tokens")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <FaCoins className="menu-icon" />
              <span>Xero Tokens</span>
            </div>
          </motion.div>

          {/* XeroLeague */}
          <motion.div className={`menu-item ${activeSection === "xero-league" ? "active" : ""}`}>
            <div onClick={() => setActiveSection("xero-league")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <FaTrophy className="menu-icon" />
              <span>XeroLeague</span>
            </div>
          </motion.div>
        </div>

        {/* Connect Wallet Button */}
        <motion.button className="connect-wallet" onClick={connectWallet} disabled={!isPlugInstalled}>
          {walletAddress ? `Wallet Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : <><FaWallet className="wallet-icon" /> CONNECT YOUR WALLET</>}
        </motion.button>
      </motion.div>

      {/* Main Content Section */}
      <div className="content-container">
        {renderSection()} {/* Render dynamic content based on active section */}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        /* General Styling */
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 300px;
          margin: 20px;
          background: linear-gradient(180deg, #252d46 0%, #023562 100%);
          border-radius: 25px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 2px solid #6be3f8;
          box-shadow: 0 0 10px rgba(107, 227, 248, 0.8);
        }

        .logo-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .logo {
          width: 150px;
        }

        .menu {
          flex: 1;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 12px;
          color: #ffffff;
          cursor: pointer;
          font-size: 18px;
        }

        .menu-item:hover {
          color: #6be3f8;
        }

        .menu-icon {
          margin-right: 10px;
          font-size: 22px;
        }

        .dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chevron-icon {
          font-size: 14px;
        }

        .dropdown-content {
          margin-left: 20px;
        }

        .connect-wallet {
          background: linear-gradient(90deg, #b837f0, #9230d6, #752bc9);
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 25px;
          width: 200px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .connect-wallet .wallet-icon {
          margin-right: 8px;
        }

        .connect-wallet:disabled {
          background: grey;
          cursor: not-allowed;
        }

        .connect-wallet:hover:not(:disabled) {
          box-shadow: 0 6px 15px rgba(255, 50, 255, 0.5);
        }

        /* Main Content */
        .content-container {
          flex: 1;
          padding: 20px;
          width: 100%;
        }
      `}</style>
    </motion.div>
  );
};

export default Dashboard;
