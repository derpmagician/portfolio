import React from 'react'
import { useTranslation } from 'react-i18next';
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  const { t } = useTranslation();
  return (
    <header >
      <div className="container header__container">
        <h1 className="saludo">{t('header.saludo')}</h1>
        <h2 className="nombre">Renzo Perez T</h2>
        <h5 className="text-light text-space especializacion">{t('header.especializacion')}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">{t('header.scroll')}</a>
      </div>
    </header>
  )
}

export default Header