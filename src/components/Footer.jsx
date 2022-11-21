import React from "react";
import Logo from "../assets/logo-final.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <section id="footer">
      <div className="row">
        <div className="footer-container">
        <div className="footer-logo-container">
        <a href="#top">
        <figure className="footer-logo-wrapper">
        <img src={Logo} className="footer-logo" alt="BP" />
        </figure>
        <span className="footer-go-to"><FontAwesomeIcon icon="fa-solid fa-arrow-up" />top</span>
        </a>
        </div>
          <ul className="footer-links-list">
            <li>
              <a href="#profile-section" className="footer-link">
                Profile
              </a>
            </li>
            <li>
              <a href="#projects" className="footer-link">
                Projects
              </a>
            </li>
            <li>
              <a href="https://github.com/bbpatel24/" className="footer-link">
                Github
              </a>
            </li>
          </ul>
          <p className="copyright">Copyright© Bhavya Patel</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
