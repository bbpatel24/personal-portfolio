import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Me from "../assets/Bhavya.JPG"
import Resume from "../assets/Resume.pdf"
const Profile = () => {
  return (
    <section id="profile-section">
      <div className="row">
        <div className="profile-container">
          <div className="profile">
            <div className="name">
              <figure className="profile-image-wrapper wrapper-slider ">
                <img
                  src={Me}
                  alt=""
                  className="profile-image image-slider "
                />
              </figure>
              <h1 className="greeting-slider">Hey!</h1>
              <h1 className="name-slider">
                I'm <span className="enhance">Bhavya</span>
              </h1>
              <p className="profile-description para-slider">
                I am a full stack developer specializing in frontend with proficiency in MERN Stack
              </p>
              <div className="profile-links button-slider">
                <ul className="profile-list">
                  <li className="profile-list-elements">
                    <button className="profile-button">
                      <a href="https://www.linkedin.com/in/bhavya-patel-861a73223/" target="_blank" className="profile-link">
                      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                      </a>
                    </button>
 
                  </li>
                  <li className="profile-list-elements">
                    <button className="profile-button">
                      <a href="https://github.com/bbpatel24" target="_blank" className="profile-link">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                      </a>
                    </button>
                 
                  </li>
                  <li className="profile-list-elements">
                    <button className="profile-button">
                      <a href={Resume} target="_blank" className="profile-link">
                      <FontAwesomeIcon icon="fa-file" />
                      </a>
                    </button>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="tiles-container animation-slider">
                <div className="tile1 border"></div>
                <div className="tile2 border"></div>
                <div className="tile3 border"></div>
                <div className="tile4 border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
