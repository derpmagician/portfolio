import React from 'react'
import { FaHome, FaUserAlt, FaBook, FaMailBulk, FaToolbox } from 'react-icons/fa'
import { useState } from 'react';
import './Nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a title="Home" href="/portfolio" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""} >
        <FaHome />
      </a>
      <a title="About" href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""} >
        <FaUserAlt />
      </a>
      <a title="Experience" href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""} >
        <FaToolbox />
      </a>
      <a title="Portfolio" href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ""} >
        <FaBook />
      </a>
      <a title="Contact" href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""} >
        <FaMailBulk />
      </a>
    </nav>
  )
}

export default Nav