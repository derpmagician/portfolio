import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
              <h4>React</h4>

              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
              <h4>Vue</h4>

              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Angular</h4>

              </div>

            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>

              </div>

            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Responsive</h4>

              </div>

            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back End Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Node</h4>

              </div>

            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>Python</h4>

              </div>

            </article>
            <article className="experience__details">
              <FaCheckCircle className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>

              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience