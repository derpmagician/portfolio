// App.js
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Switch from './components/Switch'
import {
  motion, AnimatePresence, useTransform, useAnimation
} from 'framer-motion';
import { useInView, } from 'react-intersection-observer';
// import './index.css';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const aboutControls = useAnimation();
  const experienceControls = useAnimation();
  const portfolioControls = useAnimation();
  const [refAbout, aboutInView] = useInView();
  const [refExperience, experienceInView] = useInView();
  const [refPortfolio, portfolioInView] = useInView();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 5,
          damping: 20,
        },
      });
    }
    if (!aboutInView) {
      aboutControls.start({
        x: "-100vw",
        opacity: 0,
      });
    }
   }, [aboutControls, aboutInView]);
  

  useEffect(() => {
    if (experienceInView) {
      experienceControls.start({
        x: 0,
        transition: {
          type: "spring",
          mass: 5,
          damping: 20,
        },
      });
    }
    if (!experienceInView) {
      experienceControls.start({
        x: "100vw",
      });
    }
   }, [experienceControls, experienceInView]);
   
   useEffect(() => {
    if (portfolioInView) {
      portfolioControls.start({
        x: 0,
        transition: {
          type: "spring",
          mass: 5,
          damping: 20,
        },
      });
    }

      if (!portfolioInView) {
        portfolioControls.start({
          x: "-100vw",
        });
    }
   }, [portfolioControls, portfolioInView]);

  return (
    <div className="App">
      <Switch />
      <Header />
      <Nav />

      <AnimatePresence>
        <motion.div
          ref={refAbout}
          animate={aboutControls}
        >
          <About />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          ref={refExperience}
          animate={experienceControls}
        >
          <Experience />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          ref={refPortfolio}
          animate={portfolioControls}
        >
          <Portfolio />
        </motion.div>
      </AnimatePresence>
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
