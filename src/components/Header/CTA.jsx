import React from 'react'
import { useTranslation } from 'react-i18next';
import {
  motion,
} from 'framer-motion';
import CV from '../../assets/cv.pdf'

const btnVariant = {
  hover: {
    scale: 1.4,
    transition: {
      yoyo: Infinity,
      repeat: Infinity,
      duration: 1.5,
    }
  },
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      mass: 0.4,
      damping: 10,
      type: "spring",
    }
    
  },
}

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="cta">

      <motion.a className="cta_b btn" href={CV} download
        aria-label="Resume in pdf format"
        variants={btnVariant}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
      { t('cta.download')}
      </motion.a>
      <motion.a href="#contact" className="cta_b btn btn-primary "
        aria-label="Contact form"
        variants={btnVariant}
        initial="hidden"
        animate={{
          ...btnVariant.visible,
          transition: {...btnVariant.visible.transition, delay: 0.5}}}
        whileHover="hover"
      >
        {t('cta.talk')}
      </motion.a>
    </div>

  )
}

export default CTA