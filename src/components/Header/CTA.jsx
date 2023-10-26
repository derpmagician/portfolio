import React from 'react'
import { useTranslation } from 'react-i18next';
import CV from '../../assets/cv.pdf'

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="cta">
      <a href={CV} download className="btn" aria-label="Resume in pdf format">
      { t('cta.download')}
      </a>
      <a href="#contact" className="btn btn-primary" aria-label="Contact form">
        {t('cta.talk')}
      </a>
    </div>
    
  )
}

export default CTA