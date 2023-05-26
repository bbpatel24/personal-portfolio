import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({ click }) => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    const loading = document.querySelector(".message-overlay-loading");
    const success = document.querySelector(".message-overlay-success");
    loading.classList += " message-overlay-visible";

    emailjs
      .sendForm(
        "service_dv2csrw",
        "template_60c7vam",
        form.current,
        "J4szhT0cSLrjMYhr4"
      )
      .then(() => {
        loading.classList.remove("message-overlay-visible");
        success.classList += " message-overlay-visible";
      })
      .catch(() => {
        loading.classList.remove("message-overlay-visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on bhavyapatel0811@gmail.com"
        );
      });
  };

  return (
    <section id="contact">
      <div className="row">
        <div className="contact-container">
          <div className="contact-form about">
            <p className="about-title">More About me ;)</p>
            <p className="about-sub-title">Frontend Engineer</p>
            <p className="about-description">
              As a Frontend Developer, I specialize in designing and
              implementing intuitive, interactive, and responsive user
              experiences for web applications. I have expertise in HTML, CSS,
              and JavaScript, and am proficient in modern frontend frameworks
              such as React.
              <br />
              <br />I have a strong understanding of web design principles and
              am able to translate wireframes and mockups into functional and
              visually appealing web pages. I am also skilled in cross-browser
              compatibility testing and debugging, ensuring that my projects are
              compatible with a wide range of devices and browsers.
            </p>
          </div>
          <div className="contact-form message">
            <button className="contact-close" onClick={click}>
              <FontAwesomeIcon icon="fa-xmark" />
            </button>
            <p className="message-title">Let's have a chat!</p>
            <p className="message-sub-title">
              I am actively looking for new opportunities
            </p>
            <form
              action=""
              className="message-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <br />
              <input type="name" name="user_name" />
              <br />
              <label>Email</label>
              <br />
              <input type="email" name="user_email" />
              <br />
              <label htmlFor="">Message</label>
              <br />
              <textarea name="user_message" cols="38" rows="4"></textarea>
              <br />
              <button className="message-submit-button">Send Message!</button>
            </form>
            <div className="message-overlay message-overlay-loading">
              <FontAwesomeIcon icon="fa-solid fa-spinner" />
            </div>
            <div className="message-overlay message-overlay-success">
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
