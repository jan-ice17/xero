import React, { useState } from "react";
import { motion } from "framer-motion";
import tokenIcon from "/images/token.png";  // Token image
import foodIcon from "/images/food.png";    // Food saved image
import claimIcon from "/images/claim.png";  // Claim token image
import waveIcon from "/images/wave.png";    // Wave effect

const Tokens = () => {
  const [tokensEarned, setTokensEarned] = useState(0);
  const [foodSaved, setFoodSaved] = useState(0);
  const [tokensClaimed, setTokensClaimed] = useState(0);

  // Handle token claim
  const handleClaimTokens = () => {
    if (tokensEarned > 0) {
      setTokensClaimed(tokensEarned);
      setTokensEarned(0);
    }
  };

  return (
    <div className="tokens-container">
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
            <h1>Food Tokens</h1>
            <p>Earn Tokens</p>
          </div>
          <motion.img
            src={tokenIcon}
            alt="Token Icon"
            className="token-icon"
            animate={{
              y: [0, -10, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </motion.div>

      {/* Tokens Dashboard */}
      <div className="tokens-dashboard">
        <h2>Earn Tokens With Xero</h2>
        <div className="dashboard-cards">
          {/* Tokens Earned */}
          <motion.div className="dashboard-card">
            <img src={tokenIcon} alt="Tokens Earned" />
            <h3>{tokensEarned} Tokens</h3>
            <p>TOKENS EARNED</p>
          </motion.div>
          
          {/* Food Saved */}
          <motion.div className="dashboard-card">
            <img src={foodIcon} alt="Food Saved" />
            <h3>{foodSaved} Kilos Saved</h3>
            <p>FOOD SAVED</p>
          </motion.div>
          
          {/* Tokens Claimed */}
          <motion.div className="dashboard-card">
            <img src={claimIcon} alt="Claimed Tokens" />
            <h3>{tokensClaimed} Claimed</h3>
            <p>CLAIM FOODTOKEN</p>
          </motion.div>
        </div>
        
        {/* Claim Button */}
        <motion.button
          className="claim-button"
          onClick={handleClaimTokens}
          disabled={tokensEarned === 0}
        >
          CLAIM
        </motion.button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        .tokens-container {
          font-family: 'Space Grotesk', sans-serif;
          width: 100%;
          padding: 20px;
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

        .banner-text h1 {
          font-size: 36px;
          margin: 0;
        }

        .banner-text p {
          font-size: 20px;
          margin: 5px 0 0;
        }

        .token-icon {
          height: 220px;
          width: auto;
          margin-left: auto;
        }

        .wave-icon {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          opacity: 0.8;
          z-index: 0;
        }

        /* Tokens Dashboard */
        .tokens-dashboard {
          margin-top: 40px;
          text-align: center;
        }

        .tokens-dashboard h2 {
          font-size: 24px;
          color: #2d3748;
          margin-bottom: 20px;
        }

        .dashboard-cards {
          display: flex;
          justify-content: center;
          gap: 50px;
          margin-bottom: 20px;
        }

        .dashboard-card {
          background: linear-gradient(180deg, #252d46, #023562);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          border: 2px solid #6be3f8;
          width: 220px;
          height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .dashboard-card img {
          height: 100px;
          margin-bottom: 15px;
        }

        .dashboard-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #fff;
        }

        .dashboard-card p {
          font-size: 14px;
          color: #a0aec0;
        }

        .dashboard-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(107, 227, 248, 0.5);
        }

        /* Claim Button */
        .claim-button {
          background: linear-gradient(90deg, #b837f0, #9230d6, #752bc9);
          color: white;
          padding: 10px 25px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
          margin-top: 30px;
        }

        .claim-button:hover {
          background: linear-gradient(90deg, #d656f5, #a950e0, #8d41d2);
        }

        .claim-button:disabled {
          background: grey;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Tokens;
