import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({click}) => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_dv2csrw",
        "template_60c7vam",
        form.current,
        "J4szhT0cSLrjMYhr4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch(() => {
        alert(
          "The email service is currently full. Please contact me directly at bhavyapatel0811@gmail.com"
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
            I am a 20 year old front-end developer aiming to make my dream to
            become a web developer a reality. I have been designing and studying
            the concepts of web development for the past 2 years and desire to
            implement them in real world. Making user-facing interactive and web
            responsive designs in my passion. I am currently researching
            different type of languages which will help me achieve my goal and
            be an asset to my skill.
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
            <textarea name="user_message" cols="38" rows="6"></textarea>
            <br />
            <button className="message-submit-button">Send Message!</button>
            </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
