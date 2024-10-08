import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import sportImage from "/images/sport.png";
import waveIcon from "/images/wave.png";

const XeroLeague = () => {
  const [countdown, setCountdown] = useState(2592000); // 30 days in seconds
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle joining the waitlist
  const handleJoinWaitlist = () => {
    setJoinedWaitlist(true);
    setShowConfetti(true);

    // Disable confetti after 4 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000); // Updated confetti duration to 4 seconds
  };

  // Convert countdown from seconds to days, hours, minutes, and seconds
  const formatCountdown = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="xeroleague-container">
      {/* Confetti Effect */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Banner Section */}
      <motion.div className="banner">
        <motion.img
          src={waveIcon}
          alt="Wave Icon"
          className="wave-icon"
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <div className="banner-content">
          <div className="banner-text">
            <h1>XeroLeague</h1>
            <p>Coming Soon</p>
          </div>
          <motion.img
            src={sportImage}
            alt="Sports Icon"
            className="sport-icon"
            animate={{
              y: [0, -10, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </motion.div>

      {/* Countdown Section */}
      <div className="countdown-section">
        <h2>XeroLeague Countdown</h2>
        <motion.p className="countdown">{formatCountdown(countdown)}</motion.p>
        <p>Join the challenge to reduce food wastage and earn tokens by completing fun games! As you finish challenges, you’ll earn tokens that can be redeemed for exciting rewards!</p>

        {/* Join Waitlist Button */}
        {!joinedWaitlist ? (
          <motion.button className="join-button" onClick={handleJoinWaitlist}>
            Join the Waitlist
          </motion.button>
        ) : (
          <p className="joined-message">You have joined the waitlist!</p>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        .xeroleague-container {
          font-family: 'Space Grotesk', sans-serif;
          width: 100%;
          padding: 20px;
          background-color: #f9f9f9;
          color: #2d3748;
          text-align: center;
        }

        /* Banner Section */
        .banner {
          background: linear-gradient(90deg, #252d46, #1e73bd);
          border-radius: 25px;
          padding: 30px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          height: 230px;
          box-shadow: 0 0 10px rgba(107, 227, 248, 0.8);
          color: white;
          margin-bottom: 40px;
          overflow: hidden;
        }

        .banner-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .banner-text {
          z-index: 2;
          text-align: left; /* Ensure text is aligned properly */
          margin-left: 20px; /* Add margin to give it some space */
        }

        .banner-text h1 {
          font-size: 36px;
          margin: 0;
        }

        .banner-text p {
          font-size: 24px;
          margin: 5px 0 0;
        }

        .sport-icon {
          height: 220px;
          width: auto;
          margin-left: auto;
          z-index: 1;
        }

        .wave-icon {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          opacity: 0.8;
          z-index: 0;
        }

        /* Countdown Section */
        .countdown-section h2 {
          font-size: 24px;
          margin-bottom: 10px;
         
        }

        .countdown {
          font-size: 100px; /* Increased size of the countdown text */
          color: #ff007f;
          margin-bottom: 15px;
        }

        .join-button {
          background: linear-gradient(90deg, #b837f0, #9230d6, #752bc9);
          color: white;
          padding: 12px 29px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
          margin-top: 25px;
        }

        .join-button:hover {
          background: linear-gradient(90deg, #d656f5, #a950e0, #8d41d2);
        }

        .joined-message {
          font-size: 18px;
          color: #38a169;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default XeroLeague;
