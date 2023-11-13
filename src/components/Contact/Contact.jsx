import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
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
      <h5>{t('contact.t1')}</h5>
      <h2>{t('contact.t2')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>renzin@gmail.com</h5>
            <a href="mailto:renzin@gmail.com" target="_blank" rel="noreferrer">{t('contact.msg')}</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>renzo-perez-02205a1bb</h5>
            <a href="https://www.linkedin.com/in/renzo-perez-02205a1bb/" target="_blank" rel="noreferrer">{t('contact.msg')}</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='form__group' >
            <label className='form__label' >
              <span>{t('contact.name')}</span>
              <input id="name" type="text" name="name" required className='input-text' placeholder=''/>
            </label>
          </div>
          <div className='form__group'>
            <label className='form__label' >
              <span>{t('contact.email')}</span>
              <input id="email" type="email" name="email" required className='input-text'/>
            </label>
          </div>
          <div className='form__group'>
            <label className='form__label' >
              <span>{t('contact.msg')}</span>
              <textarea id="message" name="message" rows="7" required className='input-text-area' ></textarea>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">{t('contact.btn')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact