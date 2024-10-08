import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import { FaTag, FaLeaf, FaRecycle, FaHandHoldingHeart } from "react-icons/fa"; // Importing relevant icons

// Define the animation variants
const cardVariants = {
  animate: {
    y: [0, -10, 0], // Up and down motion
    transition: {
      duration: 3, // 3 seconds for one complete cycle
      repeat: Infinity, // Infinite looping
      ease: "easeInOut",
    },
  },
};

const circleVariants = {
  animate: {
    x: [0, 20, 0], // Horizontal rolling motion
    transition: {
      duration: 6, // Duration for the complete back-and-forth motion
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const iconMotionVariants = {
  hover: {
    scale: 1.5, // Increase scale for the hover effect
    rotate: [0, 5, -5, 5, -5, 0], // Jiggle effect
    transition: {
      duration: 0.4,
      repeatType: "loop",
    },
    filter: "drop-shadow(0px 0px 6px #00E7FF)", // Neon blue glow effect
  },
  normal: {
    scale: 1, // Reset to normal when not hovered
    filter: "none",
  },
};

const Features = () => {
  return (
    <section>
      {/* Importing Poppins and Space Grotesk fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap');

          .feature-card {
            font-family: 'Poppins', sans-serif;
            margin-bottom: 0px; /* Increased spacing between features */
          }

          .feature-title {
            font-size: 28px; /* Increased size */
            font-weight: 700;
            line-height: 1.4;
            margin-bottom: 15px;
            color: #ffffff;
          }

          .feature-caption {
            font-size: 18px; /* Slightly larger caption */
            font-weight: 600;
            color: #A9ACC6;
            margin-bottom: 12px;
          }

          .feature-text {
            font-size: 20px; /* Slightly larger text size */
            line-height: 1.7;
            color: #D1D5DB;
          }

          .feature-button {
            margin-top: 5px; /* More space above the button */
          }

          .feature-list {
            list-style: none; 
            padding: 0;
            margin-top: 30px; /* Adding more margin above the list */
          }

          .feature-list-item {
            display: flex;
            align-items: flex-start; /* Align text with the top of the icon */
            margin-bottom: 40px; /* More space between items */
            font-size: 18px; /* Slightly increased text size */
            color: #D1D5DB;
            transition: transform 0.2s;
            font-family: 'Space Grotesk', sans-serif; /* Apply Space Grotesk */
          }

          .feature-list-item:hover {
            cursor: pointer;
            color: #00E7FF; /* Change text color on hover */
          }

          .feature-list-item-icon {
            margin-right: 14px; 
            color: #00E7FF; /* Neon blue */
            font-size: 30px; /* Larger icon size */
            transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transition */
          }

          .feature-list-item:hover .feature-list-item-icon {
            transform: scale(1.5) rotate(10deg); /* Bulge and slight rotate */
            filter: drop-shadow(0px 0px 8px #00E7FF); /* Add glow effect */
          }

        `}
      </style>

      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <motion.div
                key={id}
                className="feature-card relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                variants={cardVariants}
                animate="animate"
              >
                <div className="w-full flex justify-start items-start">
                  <motion.div
                    className="-ml-3 mb-12 flex items-center justify-center flex-col"
                    variants={circleVariants}
                    animate="animate"
                  >
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </motion.div>
                </div>

                <p className="feature-caption">{caption}</p>
                <h2 className="feature-title">{title}</h2>

                {/* Updated Bullet Points List with Relevant Icons */}
                <ul className="feature-list">
                  {/* Adding the points dynamically with corresponding icons */}
                  {id === "0" ? (
                    <>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaTag />
                        </motion.div>
                        XERO replaces outdated paper price tags in supermarkets and grocery stores with smart digital screens.
                      </li>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaLeaf />
                        </motion.div>
                        AI-powered tags automatically adjust prices based on freshness and expiration dates.
                      </li>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaRecycle />
                        </motion.div>
                        This real-time pricing helps reduce waste, improve sales, and maximize profits.
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaHandHoldingHeart />
                        </motion.div>
                        XERO connects restaurants and fast food chains with local charities or farmers to manage surplus food.
                      </li>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaRecycle />
                        </motion.div>
                        Excess food is either donated to those in need or repurposed, reducing waste.
                      </li>
                      <li className="feature-list-item">
                        <motion.div
                          className="feature-list-item-icon"
                          variants={iconMotionVariants}
                          whileHover="hover"
                        >
                          <FaLeaf />
                        </motion.div>
                        This contributes to a sustainable environment and supports the community.
                      </li>
                    </>
                  )}
                </ul>
                <a href="https://janice-mugure.gitbook.io/xero/" target="_blank" rel="noopener noreferrer">
                <Button icon={button.icon}>{button.title}</Button>
                </a>
                    
              </motion.div>
            ))}

            {/* Details section that aligns with the original design */}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
