import React from 'react'
import ME from '../../assets/me.png'
// import ME from '../../assets/me-about.jpg'
import { FaAward, FaPeopleCarry } from 'react-icons/fa'
import { GiThreeFriends } from 'react-icons/gi'
import './About.css';

function About() {
  return (
    <section id="about" className="">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
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
              <h5>Self Learner</h5>

            </article>
            <article className="about__card">
              <FaPeopleCarry className="about__icon" />
              <h5>Team Worker</h5>

            </article>
            <article className="about__card">
              <GiThreeFriends className="about__icon" />
              <h5>Friendly</h5>

            </article>
          </div>
          <p>
            I like anime, video games and my cat.<br />
            My favorite programing languages are Javascript and Python.<br />
            I really love CSS but picking colors is my bane
          </p>
          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About