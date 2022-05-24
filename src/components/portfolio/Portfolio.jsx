import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG1} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG2} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG3} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG4} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG5} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"><img src={IMG6} alt="my project" /></div>
          <h3>This is a portffolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio