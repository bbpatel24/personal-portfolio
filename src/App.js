import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faGithub , faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faFile,faCoffee,faLink,faXmark,faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
library.add(faFile,faCoffee,faLink,faGithub,faLinkedin,faXmark,faArrowUp);

function App() {
  let isFormOpen = false;
  const toggleForm = () => {
    if(isFormOpen){
      isFormOpen = false;
      return document.body.classList.remove("contact-form-open");
    }
    isFormOpen = true;
    document.body.classList += "contact-form-open";
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Nav click={toggleForm} />
      <Profile />
      <Projects />
      <Contact click={toggleForm}/>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
