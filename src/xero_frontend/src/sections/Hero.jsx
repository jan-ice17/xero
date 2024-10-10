import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AuthClient } from "@dfinity/auth-client";
import Button from "../components/Button.jsx";

const Hero = ({ setActivePage }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [authClient, setAuthClient] = useState(null);

  // Initialize AuthClient when the component mounts
  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
    };
    initAuth();
  }, []);

  const handleLogin = async (provider) => {
    await authClient.login({
      identityProvider: provider,
      onSuccess: async () => {
        // Redirect to dashboard after successful login
        setActivePage("dashboard");
      },
      onError: (error) => {
        console.error("Login failed: ", error);
      },
    });
  };

  return (
    <section className="relative flex justify-center items-center h-screen overflow-hidden bg-[#1D1F3A] text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

          .hero-circle {
            position: absolute;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: transparent;
          }

          .circle-1 {
            width: 800px;
            height: 800px;
            top: -200px;
            left: -400px;
          }

          .circle-2 {
            width: 600px;
            height: 600px;
            top: 150px;
            left: 100px;
          }

          .circle-3 {
            width: 500px;
            height: 500px;
            top: 300px;
            right: -250px;
          }

          .hero-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 80px;
            font-weight: 700;
            line-height: 1.2;
            color: #ffffff;
            text-align: center;
            margin-bottom: 20px;
            margin-top: 50px;
          }

          .hero-description {
            max-width: 800px;
            font-size: 22px;
            line-height: 1.6;
            color: #A9ACC6;
            text-align: center;
            margin-top: 20px;
            font-family: 'Space Grotesk', sans-serif;
          }

          .underline {
            width: 250px;
            height: 6px;
            margin: 0 auto;
            background: linear-gradient(to right, #96e6a1, #3498db);
            border-radius: 3px;
            margin-top: 15px;
          }

          .glowing-border {
            border: 1.5px solid rgba(78, 151, 255, 0.6);
            box-shadow: 0px 0px 10px rgba(78, 151, 255, 0.4);
          }

          .arrow-rounded {
            background-color: #007bff;
            width: 60px;
            height: 40px;
            border-radius: 25px 25px 25px 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            margin-left: -30px;
            position: relative;
            top: 0;
          }

          .arrow-icon {
            font-size: 18px;
            color: white;
          }
        `}
      </style>

      <div className="container relative flex flex-col items-center z-10">
        {/* Hero Section */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: [0, -2, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          Your Trusted AI Partner <br /> in Reducing Food Waste
        </motion.h1>

        <p className="hero-description">
          We bridge the gap between major supermarkets, grocery stores,
          high-end restaurants, and food suppliers.
        </p>

        {/* Launch App Button */}
        <div className="launch-button mt-6">
          <Button icon="/images/zap.svg" onClick={() => setShowSignup(true)}>
            Launch App
          </Button>
        </div>

        {/* Signup Modal (Popup) */}
        {showSignup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-xl">
              <h2 className="text-2xl text-white font-bold text-center mb-2">
                Login to XERO
              </h2>
              <p className="text-gray-400 text-center mb-6">
                Your Trusted AI Partner In Reducing Food Waste
              </p>

              {/* Internet Identity Login */}
              <button
                onClick={() => handleLogin("https://identity.ic0.app")}
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center hover:bg-gray-600 transition duration-300"
              >
                Sign in with Internet Identity
              </button>

              {/* NFID Login */}
              <button
                onClick={() => handleLogin("https://nfid.one/authenticate")}
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300"
              >
                Sign in with NFID (Legacy)
              </button>

              {/* Close Modal Button */}
              <button
                onClick={() => setShowSignup(false)}
                className="mt-4 text-gray-400 hover:text-gray-200 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Circle elements */}
      <motion.div
        className="hero-circle circle-1"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      ></motion.div>
      <motion.div
        className="hero-circle circle-2"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      ></motion.div>
      <motion.div
        className="hero-circle circle-3"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;
