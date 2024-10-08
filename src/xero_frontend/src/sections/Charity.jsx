import { motion } from "framer-motion";
import bannerImage from "/images/banner.png"; // Banner image
import logoImage from "/images/logo.png"; // Logo image
import profileImage from "/images/profile.png"; // Profile image

const Charity = () => {
  return (
    <div className="content-container">
      {/* Banner Section */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>

      {/* Content */}
      <div className="content">
        <h1>The Charity Dashboard</h1>
        <p>Welcome to your Charity Dashboard!</p>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <button className="update-button">Update Profile</button>
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

          /* Main content */
        .content {
          padding: 80px 20px 20px;
        }

        .content h1 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .content p {
          font-size: 18px;
          color: #666;
        }

        /* Profile Section */
        .profile-section {
          position: absolute;
          right: 30px;
          bottom: 50px;
          text-align: center;
          margin-bottom: 100px;
        }

        .profile-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #000;
          margin-left: 100px;
          margin-bottom: 10px;
        }

        .update-button {
          margin-bottom: -20px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 70px;
        }

        .update-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Charity;
