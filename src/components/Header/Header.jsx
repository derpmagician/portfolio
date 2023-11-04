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
    y: ["0", "-0.75rem", "0"],
    opacity: 1,
    transition: {
      type: "spring",
      y: {
        delay: 1,
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
        delay: 1,
        duration: 3,
        yoyo: Infinity,
        repeat: Infinity,
        ease: "easeInOut"
      },
      transformTemplate: (transforms) => `perspective(1000px) ${transforms}`,
    }
  },
  botom: {
    y: ["0", "0.75rem", "0"],
    opacity: 1,
    transition: {
      type: "spring",
      y: {
        delay: 1,
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

  return (
    <header >
      <div className="container header__container">
        <AnimatePresence>
          <motion.h1 className="saludo"
            variants={saludoVariant}
            initial="initial"
            animate="top"
          >
            {t('header.saludo')}
          </motion.h1>
        </AnimatePresence>
                <AnimatePresence>
          <motion.h1 className="saludo"
            variants={saludoVariant}
            initial="initial"
            animate="middle"
          >
            <h2 className="nombre">Renzo Perez T</h2>

          </motion.h1>
        </AnimatePresence>
        <AnimatePresence>
          <motion.h5 className="text-light text-space especializacion"
            variants={saludoVariant}
            initial="initial"
            animate="botom"
          >
            {t('header.especializacion')}
          </motion.h5>
        </AnimatePresence>
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