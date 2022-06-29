import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Renzo Perez T</h1>
        <h5 className="text-light text-space">FullStack Developer and Coding Magician</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header