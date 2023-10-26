import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/renzo-perez-02205a1bb/"
        target="_blank" rel="noreferrer" aria-label="linkedin link"
      >
        <FaLinkedin/>
      </a>
      <a href="https://github.com/derpmagician?tab=repositories"
        target="_blank" rel="noreferrer" aria-label="github link"
      >
        <FaGithubSquare />
      </a>
    </div>
    
  )
}

export default HeaderSocials