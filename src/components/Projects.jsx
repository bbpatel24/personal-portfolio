import React, { useEffect } from "react";
import PSimage from "../assets/playstation-clone-image.png";
import LibraryAppImage from "../assets/library-app-image.png";
import RecipeImage from "../assets/recipe app.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <section id="projects">
      <div className="row">
        <div className="project-container">
          <div className="project-display">
            <h1 className="projects-title">
              <span className="enhance"> Web</span> Applications
            </h1>
            <h6 className="mobile-display-text">
            Tap to view projects
            </h6>
            <div className="project-info">
            
              <div className="project-image-container">
                <figure className="project-wrapper">
                  <img src={RecipeImage} alt="" className="project-image" />
                </figure>
              </div>
              <div className="project-info-container">
                <h1 className="project-title">MERN Recipe Application</h1>
                <p className="project-languages">
                  Technologies Used :
                  <span className="project-enhance">
                    MongoDB, Express, React, Node , Bcrypt, CSS, Javascript,
                    React-Router-Dom, jQuery
                  </span>
                </p>
                <p className="project-description">
                  This app uses JSON Web Tokens which are used for
                  authentication and authorization purposes. JWTs are used to
                  securely transmit user information between the frontend and
                  backend. This app allows users to create, store, retrieve,
                  update, and delete recipes. The front-end built with React.js
                  will provide a user-friendly interface for interacting with
                  the app. The backend built with Node.js, Express.js, and
                  MongoDB will handle the data storage and retrieval operations.
                </p>
                

                <button className="project-button-brand">
                  <a
                    target="_blank"
                    href="https://github.com/bbpatel24/MERN-Recipe-App"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                </button>
              </div>
            </div>
            <div className="project-info">
              <div className="project-image-container">
                <figure className="project-wrapper">
                  <img src={LibraryAppImage} alt="" className="project-image" />
                </figure>
              </div>
              <div className="project-info-container">
                <h1 className="project-title">Library Application</h1>
                <p className="project-languages">
                  Technologies used:{" "}
                  <span className="project-enhance">
                    {" "}
                    HTML, CSS, React.js, Javascript, jQuery, react-router-dom,
                    emailjs
                  </span>
                </p>
                <p className="project-description-2">
                  The website uses a third-party API called Google Books API to
                  fetch book data and display it on the website. The API allows
                  the website to retrieve information such as book title,
                  author, description, and cover image, which is then displayed
                  to the user. It allows users to browse and search for books,
                  view book details, and add or remove books to their reading
                  list.
                </p>

                <button className="project-button-link">
                  <a
                    target="_blank"
                    href="https://library-application.netlify.app"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon="fa-link" />
                  </a>
                </button>

                <button className="project-button-brand">
                  <a
                    target="_blank"
                    href="https://github.com/bbpatel24/library-app"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                </button>
              </div>
            </div>

            <div className="project-info">
              <div className="project-image-container">
                <figure className="project-wrapper">
                  <img src={PSimage} alt="" className="project-image" />
                </figure>
              </div>
              <div className="project-info-container">
                <h1 className="project-title">Playstation Clone</h1>
                <p className="project-languages">
                  Technologies Used:
                  <span className="project-enhance">
                    HTML, CSS, React.js, Javascript, jQuery, react-router-dom
                  </span>
                </p>
                <p className="project-description">
                  It uses a combination of static and dynamic content generated
                  from a third-party API. The website retrieves data from the
                  PlayStation Store API to display information such as game
                  titles, descriptions, prices, and images. It is fully
                  responsive across all devices and displays sliders ,
                  carousels, and grids depending on the device the website is
                  used on.
                </p>
                <button className="project-button-link">
                  <a
                    target="_blank"
                    href="https://playstation-clone.netlify.app"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon="fa-link" />
                  </a>
                </button>

                <button className="project-button-brand">
                  <a
                    target="_blank"
                    href="https://github.com/bbpatel24/playstation-clone-application"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
