import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {
  motion, AnimatePresence,
} from 'framer-motion';
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const saludoVariant = {
  initial: {
    opacity: 1,
    y: "0"
  },
  top: {
    y: ["0", "0.75rem", "0"],
    opacity: 1,
    transition: {
      type: "spring",
      y: {
        delay: 0.25,
        duration: 1.5,
        mass: 50,
        damping: 5,
        yoyo: Infinity,
        repeat: Infinity,
        ease: "easeInOut"
       }
    }
  },
  middle: {
    opacity: 1,
    rotateX: [0, 180, 0],
    transition: {
      type: "spring",
      rotateX: {
        delay: 0.25,
        duration: 3,
        yoyo: Infinity,
        repeat: Infinity,
        ease: "easeInOut"
      },
      transformTemplate: (transforms) => `perspective(1000px) ${transforms}`,
    }
  },
  botom: {
    y: ["0", "-0.75rem", "0"],
    opacity: 1,
    transition: {
      type: "spring",
      y: {
        delay: 0.25,
        duration: 1.5,
        mass: 50,
        damping: 5,
        yoyo: Infinity,
        repeat: Infinity,
        ease: "easeInOut"
       }
    }
    
  }
}

const Header = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header >
      <div>
        <div  className="container header__container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <AnimatePresence>
            <motion.h1 className="saludo"
              variants={saludoVariant}
              initial="initial"
              animate={isHovered ? "top" : "initial"}
            >
              {t('header.saludo')}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            <motion.h1 className="saludo"
              variants={saludoVariant}
              initial="initial"
              animate={isHovered ? "middle" : "initial"}
            >
              <h2 className="nombre">Renzo Perez T</h2>

            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            <motion.h5 className="text-light text-space especializacion" tabindex="0"
              variants={saludoVariant}
              initial="initial"
              animate={isHovered ? "botom" : "initial"}
            >
              {t('header.especializacion')}
            </motion.h5>
          </AnimatePresence>
        </div>

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