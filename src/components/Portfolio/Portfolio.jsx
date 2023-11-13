// components/Portfolio/Portfolio.jsx
import React from 'react'
import { useTranslation } from 'react-i18next';
import './Portfolio.css';
import { myWorks as works } from './myWork'

console.log("myWorks", works)
function Portfolio() {
  const { t } = useTranslation();
  return (
    <section id="portfolio">
      <h5>{t('portfolio.t1')}</h5>
      <h2>{t('portfolio.t2')}</h2>
      <div className="container portfolio__container">
        {
          works.map(({id, img, title, description, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{t('portfolio.description.' + id)}</small>
                <div className="portfolio__item-cta">

                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer" >Github</a>
                  {demo===null ?
                    '' :
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Live Demo</a>}
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