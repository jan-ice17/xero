import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartPie,
  FaPiggyBank,
  FaLeaf,
  FaChartBar,
  FaUtensils,
  FaCoins,
} from "react-icons/fa";
import waveIcon from "/images/wave.png"; // Add your wave image path

const Central = () => {
  return (
    <div className="content-container">
      {/* Banner Section */}
      <motion.div className="banner">
        {/* Wave animation */}
        <motion.img
          src={waveIcon}
          alt="Wave"
          className="wave-icon"
          animate={{
            x: [0, -50, 0], // Move left and right
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <div className="banner-content">
          <h1>Central Hub</h1>
          <p>Welcome user</p>
        </div>
        {/* Astronaut with motion */}
        <motion.img
          src="images/hexagon.png"
          alt="Astronaut"
          className="hexagon"
          animate={{
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* Cards Section */}
      <div className="cards-container">
        {/* Card 1: Number of Business Users */}
        <motion.div className="card card1">
          <FaUsers className="icon" />
          <div className="card-text">
            <p>Number of Business Users</p>
            <h2>552</h2>
          </div>
        </motion.div>

        {/* Card 2: Active Bot Users */}
        <motion.div className="card card2">
          <FaChartPie className="icon" />
          <div className="card-text">
            <p>Active Bot Users</p>
            <h2>30%</h2>
          </div>
        </motion.div>

        {/* Card 3: Token Value */}
        <motion.div className="card card3">
          <FaPiggyBank className="icon" />
          <div className="card-text">
            <p>Token Value</p>
            <h2>0.022</h2>
          </div>
        </motion.div>

        {/* Card 4: Impact Level */}
        <motion.div className="card card4">
          <FaChartBar className="icon" />
          <div className="card-text">
            <p>Impact Level</p>
            <div className="bar-graph">
              <div className="bar" style={{ height: "25%" }}></div>
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar" style={{ height: "75%" }}></div>
              <div className="bar" style={{ height: "100%" }}></div>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Level of CO2 Reduced */}
        <motion.div className="card card5">
          <FaLeaf className="icon" />
          <div className="card-text">
            <p>Level of CO2 Reduced</p>
            <h2>50,000</h2>
          </div>
        </motion.div>

        {/* Card 6: Food Saved */}
        <motion.div className="card card6">
          <FaUtensils className="icon" />
          <div className="card-text">
            <p>Food Saved</p>
            <h2>59,002</h2>
          </div>
        </motion.div>

        {/* Tiny Square Card */}
        <motion.div className="card tiny-square">
          <FaCoins className="icon" />
          <div className="card-text">
            <p>Total Tokens</p>
            <h2>1,000</h2>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

        /* General Styling */
        .content-container {
          flex: 1;
          padding: 20px;
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
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
          height: 200px;
          box-shadow: 0 0 10px rgba(107, 227, 248, 0.8);
          color: white;
          margin-bottom: 15px;
          position: relative;
          overflow: hidden;
        }

        .banner-content h1 {
          font-size: 42px;
          margin: 0;
        }

        .banner-content p {
          font-size: 24px;
          margin: 10px 0 0 0;
        }

        .wave-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.3;
          object-fit: cover;
        }

        .hexagon {
          height: 220px;
          width: auto;
          z-index: 2;
        }

        /* Cards Section */
        .cards-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 15px;
          width: 100%;
        }

        .card {
          background: linear-gradient(180deg, #252d46, #023562);
          border-radius: 25px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .tiny-square {
          height: 140px;
          width: 210px;
        }

        .icon {
          font-size: 2.5rem;
          color: #6be3f8;
        }

        .card-text {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        h2 {
          margin: 0;
          font-size: 1.8rem;
        }

        p {
          margin: 0;
          font-size: 1rem;
        }

        /* Bar graph for Impact Level */
        .bar-graph {
          display: flex;
          gap: 5px;
        }

        .bar {
          width: 20px;
          background-color: #6be3f8;
        }
      `}</style>
    </div>
  );
};

export default Central;
