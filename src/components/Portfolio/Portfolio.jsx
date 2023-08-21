import React from 'react'
import './Portfolio.css';
import { myWorks as works } from './myWork'

console.log("myWorks", works)
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My favorite Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          works.map(({id, img, title, description, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio__item-cta">

                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer" >Github</a>
                  {demo===null ? '' :  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Demo</a>}
                </div>
              </article>
            )
            
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio