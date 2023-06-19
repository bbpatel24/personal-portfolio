import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Me from "../assets/linkedin-photo.jpg"
import Resume from "../assets/Bhavya Resume File.pdf"
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
                    <span className="profile-button-detail">Linkedin</span>
 
                  </li>
                  <li className="profile-list-elements">
                    <button className="profile-button">
                      <a href="https://github.com/bbpatel24" target="_blank" className="profile-link">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                      </a>
                    </button>
                    <span className="profile-button-detail">Github</span>

                  </li>
                  <li className="profile-list-elements">
                    <button className="profile-button">
                      <a href={Resume} target="_blank" className="profile-link">
                      <FontAwesomeIcon icon="fa-file" />
                      </a>
                    </button>
                    <span className="profile-button-detail">Resume</span>

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
            <span className="profile-scroll"><a href="#projects"><FontAwesomeIcon icon="fa-arrow-down" /></a></span>
      </div>
    </section>
  );
};

export default Profile;
