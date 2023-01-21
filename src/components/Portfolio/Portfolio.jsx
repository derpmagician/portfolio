import React from 'react'
import './Portfolio.css';


const works = [
  {
    id: 1,
    img: "https://i.imgur.com/1klVC95.png",
    title: "Shorten",
    description: "Link shortener made with Node, React y MongoDB",
    github: "https://github.com/derpmagician/shorten",
    demo: null,
  },
  {
    id: 2,
    img: "https://i.imgur.com/PTAUwZ6.png",
    title: "Image Filters",
    description: "Image Editor in React with a save feature manipulating the CSS with React",
    github: "https://github.com/derpmagician/react_img_filters",
    demo: "https://derpmagician.github.io/react_img_filters/",
  },
  {
    id: 3,
    img: "https://i.imgur.com/cOyBHKT.png",
    title: "Tower Defense Js",
    description: "JS game using the Canvas element of HTML and classes",
    github: "https://github.com/derpmagician/towerdefencejs",
    demo: "https://derpmagician.github.io/towerdefencejs/",
  },
  {
    id: 4,
    img: "https://i.imgur.com/F5OH2m1.png",
    title: "Space X Missions",
    description: "Fetching a Graphql API with React, UseEffect",
    github: "https://github.com/derpmagician/consumographqlspacex",
    demo: "https://derpmagician.github.io/consumographqlspacex/",
  },
  {
    id: 5,
    img: "https://i.imgur.com/dkjSHed.png",
    title: "Screen Saver Emulator",
    description: "Manipulation of CSS properties and the timer with js.",
    github: "https://github.com/derpmagician/ScreenSaver-Sim",
    demo: "https://derpmagician.github.io/ScreenSaver-Sim/",
  }
]

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