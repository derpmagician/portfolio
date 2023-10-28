import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsGithub } from 'react-icons/bs'

import './Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer>
      <a href="/#" className="footer__logo">Renzo Perez</a>
      <ul className="permalinks">
        <li><a href="/">{t('footer.home')}</a></li>
        <li><a href="#about">{t('footer.about')}</a></li>
        <li><a href="#experience">{t('footer.experience')}</a></li>
        <li><a href="#portfolio">{t('footer.portfolio')}</a></li>
        <li><a href="#contact">{t('footer.contact')}</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/derpmagician"><BsGithub /></a>

      </div>
    </footer>
  )
}

export default Footer
