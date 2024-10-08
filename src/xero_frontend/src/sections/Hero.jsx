import { motion } from "framer-motion";
import Button from "../components/Button.jsx"; 

const Hero = ({ setActivePage }) => {

  // Animation settings for pulsating circles
  const circleVariants = {
    animate: {
      scale: [1, 1.05, 1], 
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 6, 
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the hero text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: [0, -2, 0], // Small vertical motion
      transition: {
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop for the small motion
        repeatType: "reverse",
      },
    },
  };

  // Animation for the underline
  const underlineVariants = {
    animate: {
      scaleX: [1, 1.1, 1], // Smooth expansion and contraction
      transition: {
        duration: 1.5, 
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
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
        {/* Apply motion to the title */}
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Your Trusted AI Partner <br /> in Reducing Food Waste
        </motion.h1>

        {/* Underline with more motion */}
        <motion.div
          className="underline"
          variants={underlineVariants}
          animate="animate"
        ></motion.div>

        {/* Static description paragraph (motion removed) */}
        <p className="hero-description">
          We bridge the gap between major supermarkets, grocery stores,
          high-end restaurants, and food suppliers.
        </p>

        {/* Static launch button (motion removed) */}
        <div className="launch-button mt-6">
          <Button icon="/images/zap.svg" onClick={() => setActivePage("dashboard")}>Launch App</Button>
        </div>

        {/* Circle elements */}
        <motion.div
          className="hero-circle circle-1"
          variants={circleVariants}
          animate="animate"
        ></motion.div>
        <motion.div
          className="hero-circle circle-2"
          variants={circleVariants}
          animate="animate"
        ></motion.div>
        <motion.div
          className="hero-circle circle-3"
          variants={circleVariants}
          animate="animate"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
