import React from 'react'
import { BsGithub } from 'react-icons/bs'

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">Renzo Perez</a>
      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/derpmagician"><BsGithub /></a>

      </div>
    </footer>
  )
}

export default Footer
