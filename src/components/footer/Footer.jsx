import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">DEVELOPER</a>

      <ul className="permalinks">
        <li className="permalink"><a href="#" className="footer__link">Home</a></li>
        <li className="permalink"><a href="#about" className="footer__link">About</a></li>
        <li className="permalink"><a href="#experience" className="footer__link">Experience</a></li>
        <li className="permalink"><a href="#services" className="footer__link">Services</a></li>
        <li className="permalink"><a href="#portfolio" className="footer__link">Portfolio</a></li>
        <li className="permalink"><a href="#testimonials" className="footer__link">Testimonials</a></li>
        <li className="permalink"><a href="#contact" className="footer__link">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><ImInstagram/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>
      <div className="footer__copywright">
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus fugiat ut. Placeat, atque!</small>
      </div>
  
    </footer>
  )
}

export default Footer