import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFile,
  faCoffee,
  faLink,
  faXmark,
  faArrowUp,
  faSpinner,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
library.add(
  faFile,
  faCoffee,
  faLink,
  faGithub,
  faLinkedin,
  faXmark,
  faArrowUp,
  faSpinner,
  faArrowDown
);

function App() {
  let isFormOpen = false;

  const toggleForm = () => {
    if (isFormOpen) {
      isFormOpen = false;
       document.body.classList.remove("contact-form-open");
       document.body.classList.remove("hide-profile");
      
    } else {
      isFormOpen = true;
      document.body.classList.add("contact-form-open");
      document.body.classList.add("hide-profile");
    }
   
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav click={toggleForm} />
        <Profile />
        <Projects />
        <Contact click={toggleForm} />
        <Footer click={toggleForm} />
      </BrowserRouter>
    </div>
  );
}

export default App;
