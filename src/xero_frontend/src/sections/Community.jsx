import React from "react";
import { FaUsers, FaHashtag } from "react-icons/fa"; // Icons for members and ranking
import bannerImage from "/images/banner.png"; // Placeholder image for community banners

// Sample community data
const communities = [
  {
    name: "Artcaffe",
    members: 150,
    contribution: "500kg food saved",
    description: "Artcaffe is committed to reducing food wastage by donating unsold food to the needy.",
    ranking: 4,
  },
  {
    name: "Naivas",
    members: 200,
    contribution: "700kg food saved",
    description: "Naivas works with local charities to minimize food waste and support the community.",
    ranking: 3,
  },
  {
    name: "KFC",
    members: 180,
    contribution: "300kg food saved",
    description: "KFC aims to reduce food wastage through surplus food donations.",
    ranking: 2,
  },
  {
    name: "Tuskys",
    members: 220,
    contribution: "450kg food saved",
    description: "Tuskys contributes to reducing food wastage by managing surplus inventory.",
    ranking: 5,
  },
  {
    name: "Java House",
    members: 170,
    contribution: "600kg food saved",
    description: "Java House supports food banks through surplus donations.",
    ranking: 6,
  },
  {
    name: "Quickmart",
    members: 140,
    contribution: "400kg food saved",
    description: "Quickmart donates leftover food to charities to minimize wastage.",
    ranking: 7,
  },
];

const Community = () => {
  return (
    <div className="community-container">
      <div className="header">
        <h1>Explore Communities</h1>
        <div className="search-create">
          <input type="text" placeholder="Search communities" />
          <button className="create-btn">Create a community</button>
        </div>
      </div>

      <div className="community-grid">
        {communities.map((community, index) => (
          <div key={index} className="community-card">
            <div className="banner-image" style={{ backgroundImage: `url(${bannerImage})` }}>
              <div className="logo-circle" style={{ backgroundImage: `url(${bannerImage})` }}></div>
            </div>
            <div className="community-content">
              <h2>{community.name}</h2>
              <p className="description">{community.description}</p>
              <hr className="separator" />
              <div className="community-info">
                <div className="members-ranking">
                  <div className="members">
                    <FaUsers className="icon" />
                    <span>{community.members} Members</span>
                  </div>
                  <div className="ranking">
                    <FaHashtag className="icon" />
                    <span>{community.ranking}</span>
                  </div>
                </div>
              </div>
              <p className="contribution">{community.contribution}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

        .community-container {
          width: 100%;
          padding: 20px;
          background-color: #fff;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 36px;
          font-weight: 700;
          color: #333;
        }

        .search-create {
          display: flex;
          gap: 20px;
        }

        input[type="text"] {
          padding: 10px 20px;
          border-radius: 25px;
          border: 1px solid #ccc;
          width: 250px;
        }

        .create-btn {
          background-color: #b837f0;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 25px;
          font-size: 16px;
          cursor: pointer;
        }

        .community-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .community-card {
          background: linear-gradient(180deg, #252d46, #023562); /* Darker gradient */
          color: #fff;
          border: 2px solid #6be3f8; /* Thicker border */
          border-radius: 15px; /* Curved corners */
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: transform 0.3s;
        }

        .community-card:hover {
          transform: translateY(-10px);
        }

        .banner-image {
          width: 100%;
          height: 150px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .logo-circle {
          position: absolute;
          bottom: -20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .community-content {
          padding: 20px;
          font-family: 'Inter', sans-serif;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .description {
          font-size: 14px;
          margin-bottom: 10px;
        }

        .separator {
          border: 0;
          height: 1px;
          background: #6be3f8; /* Line color to match the design */
          margin: 10px 0;
        }

        .community-info {
          margin-bottom: 10px;
        }

        .members-ranking {
          display: flex;
          justify-content: space-between;
          background: rgba(255, 0, 255, 0.1); /* Transparent pink background */
          padding: 5px 10px;
          border-radius: 5px;
        }

        .icon {
          margin-right: 5px;
          color: white; /* White icon color */
        }

        .members, .ranking {
          display: flex;
          align-items: center;
        }

        .contribution {
          font-weight: 600;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Community;
