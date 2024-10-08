import { useState } from "react";
import { motion } from "framer-motion";
import storeIcon from "/images/store.png";
import restaurantIcon from "/images/restaurant.png";
import donateIcon from "/images/donate.png";
import manIcon from "/images/man.png";
import waveIcon from "/images/wave.png";

// Icons for Step 2 (What Do You Want to Use Xero For)
import surplusIcon from "/images/surplus.png";
import foodWastageIcon from "/images/foodwaste.png";
import aiMatchingIcon from "/images/ai.png";
import pricingTagsIcon from "/images/pricing.png";
import customerDataIcon from "/images/customerdata.png";
import communityIcon from "/images/community.png";

const Business = () => {
  const [step, setStep] = useState(1);
  const [selectedBusinessType, setSelectedBusinessType] = useState(null);
  const [selectedUsage, setSelectedUsage] = useState(null);
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    address: "",
    country: "",
    logo: null,
    banner: null,
  });

  // Handle "Next" button click
  const handleNext = () => {
    if (step === 1 && selectedBusinessType !== null) {
      setStep(2);
    } else if (step === 2 && selectedUsage !== null) {
      setStep(3);
    } else if (step === 3) {
      console.log("Business Info:", businessInfo);
    }
  };

  // Handle business type selection
  const handleBusinessSelect = (type) => {
    setSelectedBusinessType(type);
    localStorage.setItem("businessType", type);
  };

  // Handle usage selection in Step 2
  const handleUsageSelect = (usage) => {
    setSelectedUsage(usage);
    localStorage.setItem("usageType", usage);
  };

  // Handle form changes in Step 3
  const handleFormChange = (e) => {
    setBusinessInfo({
      ...businessInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file upload for the logo and banner
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setBusinessInfo({
      ...businessInfo,
      [name]: files[0],
    });
  };

  // Step 1: Select Business Type
  const renderStep1 = () => (
    <div className="business-type-section">
      <h2>Select Your Business Type:</h2>
      <div className="business-options">
        <motion.div
          className={`business-card ${selectedBusinessType === "store" ? "selected" : ""}`}
          onClick={() => handleBusinessSelect("store")}
        >
          <img src={storeIcon} alt="Supermarket Store" />
          <span>Supermarket/ Store</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedBusinessType === "restaurant" ? "selected" : ""}`}
          onClick={() => handleBusinessSelect("restaurant")}
        >
          <img src={restaurantIcon} alt="Restaurant" />
          <span>Restaurant/Fast Food</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedBusinessType === "charity" ? "selected" : ""}`}
          onClick={() => handleBusinessSelect("charity")}
        >
          <img src={donateIcon} alt="Charity" />
          <span>Charity/NGO</span>
        </motion.div>
      </div>
    </div>
  );

  // Step 2: What Do You Want to Use Xero For
  const renderStep2 = () => (
    <div className="business-type-section">
      <h2>What do you want to use Xero for?</h2>
      <div className="business-options">
        <motion.div
          className={`business-card ${selectedUsage === "management" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("management")}
        >
          <img src={surplusIcon} alt="Surplus Inventory Management" />
          <span>Surplus Inventory Management</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedUsage === "wastage" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("wastage")}
        >
          <img src={foodWastageIcon} alt="Zero Down Food Wastage" />
          <span>Zero Down Food Wastage</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedUsage === "donors" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("donors")}
        >
          <img src={aiMatchingIcon} alt="AI Matching" />
          <span>AI Matching with Food Donors</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedUsage === "pricing" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("pricing")}
        >
          <img src={pricingTagsIcon} alt="Dynamic Pricing Tags" />
          <span>Dynamic Pricing Tags</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedUsage === "customer" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("customer")}
        >
          <img src={customerDataIcon} alt="Analyze Customer Data" />
          <span>Analyze Customer Data</span>
        </motion.div>
        <motion.div
          className={`business-card ${selectedUsage === "community" ? "selected" : ""}`}
          onClick={() => handleUsageSelect("community")}
        >
          <img src={communityIcon} alt="Join Xero Community" />
          <span>Join Xero Community</span>
        </motion.div>
      </div>
    </div>
  );

  // Step 3: Business Information Setup
  const renderStep3 = () => (
    <div className="business-setup-section">
      <h2>Set Up Your Business</h2>
      <div className="form-group">
        <label>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={businessInfo.businessName}
          onChange={handleFormChange}
          placeholder="Enter your business name"
        />
      </div>
      <div className="form-group">
        <label>Business Address</label>
        <input
          type="text"
          name="address"
          value={businessInfo.address}
          onChange={handleFormChange}
          placeholder="Enter your address"
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={businessInfo.country}
          onChange={handleFormChange}
          placeholder="Enter your country"
        />
      </div>
      <div className="form-group">
        <label>Upload Business Logo</label>
        <input type="file" name="logo" onChange={handleFileUpload} />
        {businessInfo.logo && (
          <div className="image-preview">
            <img src={URL.createObjectURL(businessInfo.logo)} alt="Business Logo" />
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Upload Business Banner</label>
        <input type="file" name="banner" onChange={handleFileUpload} />
        {businessInfo.banner && (
          <div className="image-preview">
            <img src={URL.createObjectURL(businessInfo.banner)} alt="Business Banner" />
          </div>
        )}
      </div>

      {/* Category-Specific Fields */}
      {selectedBusinessType === "store" && (
        <div className="form-group">
          <label>Store Type</label>
          <input
            type="text"
            name="storeType"
            value={businessInfo.storeType || ""}
            onChange={handleFormChange}
            placeholder="Enter the type of store"
          />
        </div>
      )}
      {selectedBusinessType === "restaurant" && (
        <div className="form-group">
          <label>Cuisine Type</label>
          <input
            type="text"
            name="cuisineType"
            value={businessInfo.cuisineType || ""}
            onChange={handleFormChange}
            placeholder="Enter the type of cuisine"
          />
        </div>
      )}
      {selectedBusinessType === "charity" && (
        <div className="form-group">
          <label>Charity Focus</label>
          <input
            type="text"
            name="charityFocus"
            value={businessInfo.charityFocus || ""}
            onChange={handleFormChange}
            placeholder="Enter the focus of the charity"
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="business-profile-container">
      {/* Banner Section */}
      <motion.div className="banner">
        <motion.img
          src={waveIcon}
          alt="Wave"
          className="wave-icon"
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <div className="banner-content">
          <div className="banner-text">
            <h1>Business Profile</h1>
            <p>Onboarding</p>
          </div>
          <motion.img
            src={manIcon}
            alt="Man Icon"
            className="man-icon"
            animate={{
              y: [0, -10, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </motion.div>

      {/* Conditional rendering based on the current step */}
      {step === 1 ? renderStep1() : step === 2 ? renderStep2() : renderStep3()}

      {/* Next Button */}
      <div className="next-button">
        <button
          onClick={handleNext}
          disabled={(step === 1 && !selectedBusinessType) || (step === 2 && !selectedUsage)}
        >
          {step === 3 ? "SUBMIT" : "NEXT"}
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        .business-profile-container {
          font-family: 'Space Grotesk', sans-serif;
          width: 100%;
          padding: 20px;
          background-color: #f9f9f9; /* Light background */
          color: #2d3748; /* Darker font color for visibility */
        }

        /* Banner Section */
        .banner {
          background: linear-gradient(90deg, #252d46, #1e73bd);
          border-radius: 25px;
          padding: 30px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 230px;
          box-shadow: 0 0 10px rgba(107, 227, 248, 0.8);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .man-icon {
          height: 250px;
          width: auto;
          margin-left: auto;
          position: relative;
          z-index: 1;
        }

        .banner-text {
          z-index: 2;
        }

        .banner-text h1 {
          font-size: 36px;
          margin: 0;
        }

        .banner-text p {
          font-size: 24px;
          margin: 5px 0 0;
        }

        .wave-icon {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          opacity: 0.8;
          z-index: 0;
        }

        /* Business Type Section */
        .business-type-section, .business-setup-section {
          margin-top: 40px;
          text-align: center;
        }

        .business-type-section h2, .business-setup-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #2d3748; /* Darker font color */
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
          color: #2d3748; /* Darker font color */
          position: absolute;
          bottom: -30px;
          width: 100%;
          text-align: center;
        }

        .business-card:hover img {
          transform: translateY(-10px);
        }

        .business-card.selected {
          border-color: #ff007f;
        }

        .form-group {
          margin: 20px 0;
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          color: #2d3748; /* Darker font color */
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .image-preview {
          margin-top: 10px;
        }

        .image-preview img {
          width: 150px;
          height: auto;
        }

        /* Next Button */
        .next-button {
          margin-top: 50px;
          text-align: right;
          margin-right: 40px;
        }

        .next-button button {
          background: linear-gradient(90deg, #b837f0, #9230d6, #752bc9);
          color: white;
          padding: 8px 20px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .next-button button:disabled {
          background: grey;
          cursor: not-allowed;
        }

        .next-button button:hover:not(:disabled) {
          background: linear-gradient(90deg, #d656f5, #a950e0, #8d41d2);
        }
      `}</style>
    </div>
  );
};

export default Business;
