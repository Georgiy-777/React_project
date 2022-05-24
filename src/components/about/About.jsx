import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Image me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineProject className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80+ Comleted</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem amet, doloremque aperiam voluptatum reiciendis debitis sed assumenda molestiae reprehenderit quasi? Vitae cupiditate, impedit sed corrupti nesciunt dolores sint et.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk </a>
                </div>
            </div>
        </section>
    )
}

export default About