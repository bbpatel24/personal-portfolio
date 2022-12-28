import React from "react";
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
              <h1 className="project-title">PlayStation Clone</h1>
              <p className="project-languages">Technologies Used: <span className="project-enhance">HTML,CSS,React.js,API,jquery</span></p>
              <p className="project-description">Click on the link button below to see PlayStation website's clone created by me displaying the skills to create a webpage designed by the designer/client and fulfill accordingly. The images used in this website are all from the official website. I hope to not get a copyright strike;)<br /> View on laptop/computer for better experience.  Working on mobile devices compatibility</p>
              <button className="project-button">
              <a target="_blank" href="https://github.com/bbpatel24/playstation-clone" className="project-link">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
                    </button>
              <button className="project-button">
                      <a target="_blank" href="https://bhavya-patel-playstation-clone.netlify.app" className="project-link">
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
              <p className="project-languages">Technologies used: <span className="project-enhance">HTML,CSS,React.js,Javascript,jQuery,API(Fake Data)</span></p>
              <p className="project-description-2">The link below will take you to the e-library application based on CRUD operations which uses a statically created API and update the book data dynamically when new data is added to API. Multiple webpages are put together with the help of React Router to increase the surfing speed of the application.<br /><span className="project-enhance">View on laptop/computer for better experience.</span></p>
              <button className="project-button">
              <a target="_blank" href="https://github.com/bbpatel24/e-commerce-app" className="project-link">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
                    </button>
              <button className="project-button">
                      <a target="_blank" href="https://bhavya-patel-e-commerce.netlify.app" className="project-link">
                      
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
