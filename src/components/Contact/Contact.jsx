import React, { useRef } from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ow0ux9', 'template_6a583pj', form.current, 'ZUGAsU3ECy_wjAn-e')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>renzin@gmail.com</h5>
            <a href="mailto:renzin@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>renzo-perez-02205a1bb</h5>
            <a href="https://www.linkedin.com/in/renzo-perez-02205a1bb/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input id="name" type="text" name="name" placeholder="Your Full Name" required />
          <input id="email" type="email" name="email" placeholder="Your email" required />
          <textarea id="message" name="message" rows="7" placeholder="Your message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact