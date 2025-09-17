import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import SideNavbar from "./UI/SideNavbar";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const BookPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  const Bookpages = [
    {
      chapters: [
        {
          id: 1,
          name: "Chapter 1",
          description: "The Life is Shorting !!",
          date: "23 Jan 2024",
          status: "Completed",
        },
        {
          id: 2,
          name: "Chapter 2",
          description: "The Life is Shorting !!",
          date: "24 Jan 2024",
          status: "Pending",
        },
        {
          id: 3,
          name: "Chapter 3",
          description: "The Life is Shorting !!",
          date: "25 Jan 2024",
          status: "Pending",
        },
        {
          id: 4,
          name: "Chapter 4",
          description: "The Life is Shorting !!",
          date: "26 Jan 2024",
          status: "Pending",
        },
      ],
    },
  ];

  return (
    <section className="bookpage bg-dark">
      <div className="bg-dark text-white min-vh-100 position-relative">
        <div className="row mx-0 h-100 flex-column flex-md-row">
          <SideNavbar />
          <div className="col-12 col-md-9 bg-dark p-4">
            <div className="row mx-0 align-items-center mb-4">
              <div className="col-12 col-md-10">
                <input
                  type="search"
                  className="form-control bg-dark border border-1 text-white"
                  placeholder="Search..."
                />
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
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
              <div
                className="profile-overlay"
                onClick={() => setShowProfile(false)}
              >
                <div
                  className="profile-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h6 className="mb-2">Kalpana Patidar</h6>
                  <p className="mb-1">
                    Status: <span className="text-success fw-bold">Active</span>
                  </p>
                </div>
              </div>
            )}

            <div className="mb-4">
              <div className="row mx-0">
                <div className="col-md-8">
                  <h1>
                    Batman:
                    <br /> The Dark Knight
                  </h1>
                  <p className="text-secondary text-grey mb-5">
                    A book description is a brief summary of a book's plot,
                    characters, and themes. It helps readers get a sense of what
                    the book is about. Book descriptions are often found on the
                    back cover of the book, or on retailer websites.
                  </p>
                  <div className="mt-5">
                    <div className="row mx-0">
                      <div className="col-12 pt-5 px-4 text-light">
                        <h4 className="mb-3">Reading Plan</h4>
                        <div className="d-flex fs-5">
                          <span className="me-4 text-bold">
                            <strong>Chapters:</strong>{" "}
                            <span className="text-primary text-bold">20</span>
                          </span>
                          <span className="ms-5">
                            <strong>Days:</strong>{" "}
                            <span className="text-primary text-bold">20</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4 text-center">
                  <ContinueReadingCard
                    baseImage="continuereading.png"
                    title="Kobra Kai: Ultimate"
                    progress={39}
                  />
                </div>
              </div>
            </div>

            <div>
              {Bookpages[0].chapters.map((ch) => (
                <div key={ch.id} className="row mx-0 py-3 align-items-center">
                  <div className="col-12 col-md-2 fw-bold mb-2 mb-md-0">
                    {ch.name}
                  </div>
                  <div className="col-12 col-md-5 text-light mb-2 mb-md-0">
                    {ch.description}
                  </div>
                  <div className="col-6 col-md-3 text-info">{ch.date}</div>
                  <div
                    className={`col-6 col-md-2 text-md-end fw-bold ${
                      ch.status === "Completed"
                        ? "text-success"
                        : "text-warning"
                    }`}
                  >
                    {ch.status}
                  </div>
                </div>
              ))}
            </div>
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

export default BookPage;
