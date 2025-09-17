import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import SideNavbar from "./UI/SideNavbar";
import HeroCard from "./UI/HeroCard";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import ComicsSection from "./UI/ComicsSection";

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const comics = [
    { img: "flash.png", title: "The Flash, Vol.1", author: "Joshua Williamson" },
    { img: "titans.png", title: "Titans Vol.2", author: "Andrew Robinson" },
    { img: "harley.png", title: "Harley Quinn, Vol.1", author: "Jimmy Palmiotti" },
    { img: "suicidesquad.png", title: "Suicide Squad #8", author: "Tom Taylor" },
  ];

  return (
    <section className="dashboard-bg">
      <div className="dashboard-container">
           <div className="row mx-0 h-100 flex-column flex-md-row">
          <SideNavbar />
          <div className="col-12 col-md-9 bg-dark p-4">
            <div className="row align-items-center mb-4">
              <div className="col-12 col-md-10">
                <input
                  type="search"
                  className="form-control bg-dark border border-1 text-white"
                  placeholder="Search..."
                />
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-md-end align-items-center">
                <FaBell size={20} className="me-3" />
                <img
                  src="Ellipse1.png"
                  alt="profile"
                  className="profile-img"
                  onClick={() => setShowProfile(!showProfile)}
                />
              </div>
            </div>

            {showProfile && (
              <div className="profile-overlay" onClick={() => setShowProfile(false)}>
                <div className="profile-card" onClick={(e) => e.stopPropagation()}>
                  <h6>Kalpana Patidar</h6>
                  <p>
                    Status: <span className="status-active">Active</span>
                  </p>
                </div>
              </div>
            )}

            <div className="row mx-0 mb-4 align-items-center">
              <div className="col-12 col-md-8 mb-3 mb-md-0">
                <HeroCard
                  heroImage="Mask group (2).png"
                  name="Frank Miller"
                  title="Batman:The Dark Knight"
                  buttonText="Read Now"
                />
              </div>
              <div className="col-12 col-md-4">
                <ContinueReadingCard
                  baseImage="continuereading.png"
                  title="Batman: The Dark Knight"
                  progress={39}
                />
              </div>
            </div>

            <ComicsSection comics={comics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
