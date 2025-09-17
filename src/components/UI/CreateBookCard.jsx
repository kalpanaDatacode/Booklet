import React from "react";

const CreateBookCard = ({ logo, heading, btntext, label1, label2, label3 }) => {
  return (
    <section>
      <div className="create-book-card row mx-0 vh-100 vw-100 bg-dark d-flex justify-content-center align-items-center">
        <div className="card-container col-12 col-md-5 p-4">
          <div className="text-center mb-3">
            <img src={logo} alt="BookLet Logo" className="logo" />
          </div>
          <h2 className="text-white fw-semibold mb-4 text-center">{heading}</h2>
          <form>
            <label htmlFor="title" className="form-label text-white small">{label1}</label>
            <input
              id="title"
              className="form-control custom-input mb-4"
              type="text"
              placeholder="Enter book title"
            />
            <label htmlFor="author" className="form-label text-white small">{label2}</label>
            <input
              id="author"
              className="form-control custom-input mb-4"
              type="text"
              placeholder="Enter author name"
            />
            <label htmlFor="author2" className="form-label text-white small">{label3}</label>
            <input
              id="author2"
              className="form-control custom-input mb-4"
              type="text"
              placeholder="Enter author name"
            />
            <div className="text-center">
              <button className="btn btn-primary rounded-pill px-4">{btntext}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateBookCard;
