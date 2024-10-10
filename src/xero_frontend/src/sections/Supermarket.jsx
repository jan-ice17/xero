import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md"; // Import icons
import bannerImage from "/images/banner.png"; // Banner image
import logoImage from "/images/logo.png"; // Logo image
import inventoryIcon from "/images/inventory.png"; // Inventory feature icon
import customerMetricsIcon from "/images/customer-metrics.png"; // AI Customer Metrics feature icon
import pricingIcon from "/images/pricing.png"; // Dynamic Pricing feature icon
import * as XLSX from "xlsx";

const Supermarket = () => {
  const [inventoryData, setInventoryData] = useState(null);
  const [showInventoryPage, setShowInventoryPage] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle Excel file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      setInventoryData(json);
      setShowInventoryPage(true); // Show the inventory page
    };

    reader.readAsBinaryString(file);
  };

  // Toggle fullscreen mode
  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Render uploaded inventory in a neat table
  const renderInventoryTable = () => {
    // Limit rows to 5 and columns to 5 if not in fullscreen mode
    const rowsToDisplay = isFullscreen ? inventoryData : inventoryData.slice(0, 5);
    const columnsToDisplay = isFullscreen
      ? Object.keys(inventoryData[0])
      : Object.keys(inventoryData[0]).slice(0, 5);

    return (
      <div className="inventory-page">
        <h2>Uploaded Inventory Data</h2>
        <div className="fullscreen-icon" onClick={handleToggleFullscreen}>
          {isFullscreen ? <MdFullscreenExit size={30} /> : <MdFullscreen size={30} />}
        </div>
        <table>
          <thead>
            <tr>
              {columnsToDisplay.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToDisplay.map((row, index) => (
              <tr key={index}>
                {columnsToDisplay.map((key, i) => (
                  <td key={i}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  if (showInventoryPage) {
    return (
      <div className={`inventory-page-container ${isFullscreen ? "fullscreen" : ""}`}>
        {renderInventoryTable()}

        {/* Chatbot appears only when inventory page is displayed */}
        <div className="chatbot-container">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/M_W_nbvSXXtcG7gvWhIQi"
            width="100%"
            style={{ height: "100%", minHeight: "700px" }}
            frameBorder="0"
          ></iframe>
        </div>

        <style>{`
          .inventory-page-container {
            padding: 20px;
            background: linear-gradient(90deg, #003366, #1e73bd); /* Blue Gradient background */
            color: #f4f4f4;
            border-radius: 20px; /* Curved ends */
            position: relative;
          }
          .fullscreen {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #000;
            z-index: 100;
            padding: 40px;
            overflow-y: auto;
            border-radius: 0px; /* Remove curve in fullscreen */
          }
          .inventory-page {
            text-align: center;
            margin-top: 20px;
            border-radius: 15px; /* Curved ends for table */
          }
          .inventory-page h2 {
            font-size: 24px;
            color: #fff;
            margin-bottom: 20px;
          }
          .inventory-page table {
            width: 100%;
            border-collapse: collapse;
            background-color: #444;
            color: #f4f4f4;
            border-radius: 10px; /* Curved ends for table */
          }
          .inventory-page th,
          .inventory-page td {
            padding: 10px;
            border: 1px solid #666;
            text-align: left;
          }
          .inventory-page th {
            background-color: #555;
            font-weight: bold;
          }
          .fullscreen-icon {
            position: absolute;
            top: 10px;
            right: 20px;
            cursor: pointer;
          }
          .chatbot-container {
            margin-top: 40px;
            /* Adjust margin based on design */
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="content-container">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <img src={logoImage} alt="Logo" className="logo-image" />
        <h1 className="dashboard-title">The Supermarket Dashboard</h1>
      </div>

      {/* Feature Section */}
      <div className="business-type-section">
        <h2>Select a Feature</h2>
        <div className="business-options">
          <motion.div
            className="business-card"
            onClick={() => document.getElementById("fileUpload").click()}
          >
            <img src={inventoryIcon} alt="Link Inventory" />
            <span>Link Inventory</span>
            <input
              id="fileUpload"
              type="file"
              accept=".xlsx, .xls"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </motion.div>

          <motion.div className="business-card">
            <img src={customerMetricsIcon} alt="AI Customer Metrics" />
            <span>AI Customer Metrics</span>
          </motion.div>

          <motion.div className="business-card">
            <img src={pricingIcon} alt="Dynamic Pricing" />
            <span>Dynamic Pricing</span>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        .content-container {
          font-family: 'Space Grotesk', sans-serif;
          padding: 20px;
          text-align: center;
          position: relative;
        }

        /* Banner Section */
        .banner-container {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 5px solid #1e73bd;
        }

        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }

        .logo-image {
          position: absolute;
          bottom: -10px;
          left: 30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid white;
          z-index: 2;
        }

        .dashboard-title {
          position: absolute;
          bottom: 10px;
          right: 30px;
          font-size: 28px;
          color: white;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        /* Feature Section */
        .business-type-section {
          margin-top: 40px;
          text-align: center;
        }

        .business-type-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #2d3748;
        }

        .business-options {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        .business-card {
          background: linear-gradient(180deg, #252d46, #023562);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          cursor: pointer;
          border: 2px solid #6be3f8;
          width: 220px;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .business-card img {
          height: 130px;
          transition: transform 0.3s ease;
        }

        .business-card span {
          font-size: 16px;
          color: #2d3748;
          position: absolute;
          bottom: -30px;
          width: 100%;
          text-align: center;
        }

        .business-card:hover img {
          transform: translateY(-10px);
        }
      `}</style>
    </div>
  );
};

export default Supermarket;
