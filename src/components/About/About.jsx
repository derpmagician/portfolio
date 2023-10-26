import React from 'react'
import { useTranslation } from 'react-i18next';
import ME from '../../assets/me.png'
// import ME from '../../assets/me-about.jpg'
import { FaAward, FaPeopleCarry } from 'react-icons/fa'
import { GiThreeFriends } from 'react-icons/gi'
import './About.css';

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="">
      <h5>{ t('about.conocer')}</h5>
      <h2>{ t('about.me')}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="myself" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{ t('about.a1')}</h5>

            </article>
            <article className="about__card">
              <FaPeopleCarry className="about__icon" />
              <h5>{ t('about.a2')}</h5>

            </article>
            <article className="about__card">
              <GiThreeFriends className="about__icon" />
              <h5>{ t('about.a3')}</h5>

            </article>
          </div>
          <p>{ t('about.l1')}</p>
          <p> { t('about.l2')}</p>
          <p>{ t('about.l3')}</p>
          <a href="#contact" className="btn btn-primary">{ t('about.talk')}</a>
        </div>
      </div>
    </section>
  )
}

export default About