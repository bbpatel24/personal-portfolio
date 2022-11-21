import React from "react";
import { Link } from "react-router-dom"
import Logo from "../assets/logo-final.png"
const Nav = ({click}) => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <figure className="nav-logo-wrapper">
          <img src={Logo} className="nav-logo nav-header" alt="BP"/>
          </figure>
          
        </div>
        <div className="nav-list-container">
          <ul className="nav-list">
            <li className="nav-links">
              <Link to="#" className="nav-button">
                Home
              </Link>
            </li>
            <li className="nav-links">
              <a href="#projects" className="nav-button">
                Projects
              </a>
            </li>
            <li className="nav-links">
              <Link to="#" className="nav-button" onClick={click}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
