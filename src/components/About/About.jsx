import React from 'react'
import { useTranslation } from 'react-i18next';
import ME from '../../assets/me.png'
// import ME from '../../assets/me-about.jpg'
import {
  motion,
} from 'framer-motion';
import { FaAward, FaPeopleCarry } from 'react-icons/fa'
import { GiThreeFriends } from 'react-icons/gi'
import './About.css';

const btnVariant = {
  initial: {
    opacity: 1,
    y: "0",
    outlineColor: "white",
    outlineStyle: "dotted"
  },
  circle: {
    opacity: 1,
    rotateY: [0, 180, 0],
    borderRadius: "50%",
    delay: 1,
  },
}

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
            <motion.article className="about__card"
              variants={btnVariant}
              initial="initial"
              whileHover="circle"
            >
              <FaAward className="about__icon" />
              <h5>{ t('about.a1')}</h5>

            </motion.article>
            <motion.article className="about__card"
              variants={btnVariant}
              initial="initial"
              whileHover="circle"

            >
              <FaPeopleCarry className="about__icon" />
              <h5>{ t('about.a2')}</h5>

            </motion.article>
            <motion.article className="about__card"
              variants={btnVariant}
              initial="initial"
              whileHover="circle"

            >
              <GiThreeFriends className="about__icon" />
              <h5>{ t('about.a3')}</h5>

            </motion.article>
          </div>
          <div className="about__text">
            <p>{ t('about.l1')}</p>
            <p> { t('about.l2')}</p>
            <p>{ t('about.l3')}</p>
          </div>
          <a href="#contact" className="btn btn-primary">{ t('about.talk')}</a>
        </div>
      </div>
    </section>
  )
}

export default About