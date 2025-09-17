import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import SideNavbar from "./UI/SideNavbar";
import BookCard from "./UI/BookCard";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import ComicsSection from "./UI/ComicsSection";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const Collections = () => {
  const [showProfile, setShowProfile] = useState(false);

  const comics = [
    { img: "flash.png", title: "The Flash, Vol.1", author: "Joshua Williamson" },
    { img: "titans.png", title: "Titans Vol.2", author: "Andrew Robinson" },
    { img: "harley.png", title: "Harley Quinn, Vol.1", author: "Jimmy Palmiotti" },
    { img: "suicidesquad.png", title: "Suicide Squad #8", author: "Tom Taylor" },
  ];

  const books = [
    { image: "continuereading.png", title: "Kobra Kai: Ultimate", date: "12 Feb 2025" },
    { image: "continuereading.png", title: "Kobra Kai: Ultimate", date: "12 Feb 2025" },
    { image: "continuereading.png", title: "Kobra Kai: Ultimate", date: "12 Feb 2025" },
  ];

  return (
    <section className="collections-section bg-dark">
      <div className="collections-container text-white min-vh-100 position-relative">
        <div className="row mx-0 h-100 flex-column flex-md-row">
          <SideNavbar />
          <div className="col-12 col-md-9 bg-dark p-3">
            <div className="row mx-0 align-items-center mb-4">
              <div className="col-12 col-md-10 mb-2 mb-md-0">
                <input
                  type="search"
                  className="form-control search-input text-white"
                  placeholder="Search..."
                />
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-md-end align-items-center">
                <FaBell size={20} className="me-3" />
                <img
                  src="Ellipse1.png"
                  alt="profile"
                  className="profile-img rounded-circle"
                  onClick={() => setShowProfile(!showProfile)}
                />
              </div>
            </div>

            {showProfile && (
              <div className="profile-overlay d-flex justify-content-end align-items-start" onClick={() => setShowProfile(false)}>
                <div className="profile-card text-white rounded p-3 pb-5" onClick={(e) => e.stopPropagation()}>
                  <h6 className="mb-2">Kalpana Patidar</h6>
                  <p className="mb-1">
                    Status: <span className="text-success fw-bold">Active</span>
                  </p>
                </div>
              </div>
            )}

            <div className="row align-items-start mb-5">
              <div className="col-12 col-sm-6 col-md-8 mb-4 mb-md-0">
                <div className="completed-read p-3 rounded h-100">
                  <h4 className="text-white mb-3">Completed Read</h4>
                  <div className="row mx-0 gap-md-5">
                    {books.map((book, index) => (
                      <div className="col-6 col-sm-4 col-lg-3" key={index}>
                        <BookCard image={book.image} title={book.title} date={book.date} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="continue-reading-wrapper p-3 rounded h-100 d-flex align-items-center justify-content-center">
                  <ContinueReadingCard
                    baseImage="continuereading.png"
                    title="Kobra Kai: Ultimate"
                    progress={39}
                  />
                </div>
              </div>
            </div>

            <ComicsSection comics={comics} />
          </div>

          <div className="row mx-0 d-md-none bg-dark text-white p-3 border-top border-secondary mt-3">
            <div className="col d-flex flex-column align-items-center">
              <FaTools size={20} className="mb-1" />
              <small>Settings</small>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <FaArrowRightFromBracket size={20} className="mb-1" />
              <small>Log out</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
