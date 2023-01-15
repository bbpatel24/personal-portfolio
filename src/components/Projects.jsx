import React,{useEffect} from "react";
import PSimage from "../assets/playstation-clone-image.png"
import LibraryAppImage from "../assets/library-app-image.png"
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
              <div className="project-info">
              <div className="project-image-container">
              <figure className="project-wrapper">
              <img src={PSimage} alt="" className="project-image" />
              </figure>
              </div>
              <div className="project-info-container">
              <h1 className="project-title">Playstation Clone</h1>
              <p className="project-languages">Technologies Used: <span className="project-enhance">HTML, CSS, React.js, Javascript, jQuery, react-router-dom, JSON data</span></p>
              <p className="project-description">Developed web application with React, Javascript, CSS and structured data from a JSON data file which acts like a real-time API. Features include auto slider, carousels which are displayed as per the screen size</p>
              <button className="project-button">
              <a target="_blank" href="https://github.com/bbpatel24/playstation-clone" className="project-link">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
                    </button>
              <button className="project-button">
                      <a target="_blank" href="https://playstation-clone.netlify.app" className="project-link">
                        <FontAwesomeIcon icon="fa-link" />
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
              <p className="project-languages">Technologies used: <span className="project-enhance"> HTML, CSS, React.js, Javascript, jQuery, react-router-dom, JSON data, emailjs</span></p>
              <p className="project-description-2">Developed a fully responsible e-library with  React, jQuery and structured data coming from a JSON data file which acts like a real-time API.
              Features include adding books to cart, removing them as per user choice, updating the cart quantity and slicing books which are featured and are on sale.
              books which are featured and are on sale</p>
              <button className="project-button">
              <a target="_blank" href="https://github.com/bbpatel24/e-commerce-app" className="project-link">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
                    </button>
              <button className="project-button">
                      <a target="_blank" href="https://library-application.netlify.app" className="project-link">
                        <FontAwesomeIcon icon="fa-link" />
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
