// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          switch: {
            colorPicker: "If you like animals press this",
          },
          header: {
            saludo: "Hello I'm",
            especializacion: "FullStack Developer and Coding Magician",
            scroll: "Scroll Down",
          },
          cta: {
            download: "Download CV",
            talk: "Lets Talk",
          },
          about: {
            me: "About Me",
            conocer: "Get to Know",
            talk: "Lets Talk",
            a1: "Self Learner",
            a2: "Team Worker",
            a3: "Friendly",
            l1: "I like animals and programing.",
            l2: "My favorite programing languages are Javascript and Python.",
            l3: "I have profesional experience with Angular, React y Vue.",
          },
          experience: {
            skills: "What skills i have?",
            exp: "My Experience",
            front: "Front End Development",
            back: "Back End Development",
          },
          portfolio: {
            t1: "My Favorite Projects",
            t2: "Portfolio",
            description: {
              0: "This SPA fetchs made with Vue, Pinia and Booststrap 5 uses Firebase to get functionalities of Authentication, Data Storage and Chat.",
              1: "This SPA fetchs an api and uses React, Routes and Redux to manipulate data and change users roles and location, it also has Auth0 authentication.",
              2: "Link shortener made with Node, React y MongoDB, grabs the given url verifies if exist on the db and if doesnt then it gives you a short id, which can be used to access to the given url.",
              3: "Image Editor in React with a save feature manipulating the CSS with React.",
              4: "Javascript vanilla game that uses the Canvas element of HTML and js classes to create the objects.",
              // 5: "Fetching a Graphql API with React, UseEffect.",
              6: "Manipulates the CSS properties to draw the '3D' objects and only uses vanilla js to activate the timer for the screen to appear.",
            },
            
          },
          contact: {
            t1: "Get in Touch",
            t2: "Contact Me",
            btn: "Send a Message",
            name: "Your Full Name",
            email: "Your Email",
            msg: "Your M>essage",
          },
          footer: {
            home: "Home",
            about: "About",
            experience: "Experience",
            portfolio: "portfolio",
            contact: "Contact",
          }
        }
      },
      es: {
        translation: {
          switch: {
            colorPicker: "Si te gustan los animales haz click",
          },
          header: {
            saludo:"Hola soy",
            especializacion: "Desarrollador FullStack y Mago del Código",
            scroll: "Hacia Abajo",

          },
          cta: {
            download: "Bajar Currículo",
            talk: "Hablemos",
          },
          about: {
            me: "Acerca de Mi",
            conocer: "Conocer",
            talk: "Hablemos",
            a1: "Autodidacta",
            a2: "Trabajador en equipo",
            a3: "Amigable",
            l1: "Me gustan los animales y la programación.",
            l2: "Mis lenguajes de programación favoritos son Javascript y Python.",
            l3: "Experiencia profesional con Angular, React o Vue.",
          },
          experience: {
            skills: "¿Qué habilidades tengo?",
            exp: "My Experiencia",
            front: "Desarrollo Front End",
            back: "Desarrollo Back End",
          },
          portfolio: {
            t1: "Mis Projectos Favoritos ",
            t2: "Portafolio",
            description: {
              0: "Este SPA hecho con Vue, Pinia y Bootstrap 5 utiliza Firebase para obtener funcionalidades de Autenticación, Almacenamiento de Datos y Chat.",
              1: "Esta SPA obtiene una API y utiliza React, Routes y Redux para manipular datos y cambiar los roles y la ubicación de los usuarios, también tiene autenticación Auth0",
              2: "Acortador de enlaces creado con Node, React y MongoDB, toma la URL dada, verifica si existe en la base de datos y, si no es así, le proporciona una identificación corta, que puede usarse para acceder a la URL dada.",
              3: "Editor de imágenes en React con una función de guardado que manipula el CSS con React.",
              4: "Juego básico de Javascript que utiliza el elemento Canvas de las clases HTML y js para crear los objetos.",
              // 5: "Obteniendo una API Graphql con React, UseEffect.",
              6: "Manipula las propiedades CSS para dibujar los objetos '3D' y solo usa vanilla js para activar el temporizador para que aparezca la pantalla.",
            },
          },
          contact: {
            t1: "Ponerse en contacto",
            t2: "Contáctame",
            btn: "Envia un Mensaje",
            name: "Nombre Completo",
            email: "Tu Email",
            msg: "Tu Mensaje",
          },
          footer: {
            home: "Inicio",
            about: "Acerca",
            experience: "Experiencia",
            portfolio: "portafolio",
            contact: "Contacto",
          }
        }
      }
    }
  });

export default i18n;