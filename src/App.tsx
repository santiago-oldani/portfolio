import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";
import { CiCircleChevUp } from "react-icons/ci";
import AboutMe from "./components/AboutMe/AboutMe";
import { scrollToSection } from "./utils/scroll";
import { Toaster } from "react-hot-toast";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const App = () => {
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const welcomeRef = useRef(null);

  const isTechInView = useInView(techRef, { amount: 0.4 });
  const isProjectsInView = useInView(projectsRef, { amount: 0.4 });
  const isContactInView = useInView(contactRef, { amount: 0.4 });
  const isAboutInView = useInView(aboutRef, { amount: 0.4 });
  const isWelcomeInView = useInView(welcomeRef, { amount: 0.4 });

  const shouldShrinkNavbar = isTechInView || isProjectsInView || isContactInView || isAboutInView;

  const activeSection = isWelcomeInView ? "welcome"
    : isAboutInView ? "aboutMe"
      : isTechInView ? "technologies"
        : isProjectsInView ? "projects"
          : isContactInView ? "contact"
            : "";


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
    });

    lenis.on('scroll', (e) => {
      if (Math.abs(e.velocity) < 0.1 && Math.abs(e.velocity) > 0.01) {
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;

        const closestSectionIndex = Math.round(scrollPos / windowHeight);
        const targetPos = closestSectionIndex * windowHeight;

        lenis.scrollTo(targetPos, { immediate: false });
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="relative w-full">
        <Navbar shrink={shouldShrinkNavbar} activeSection={activeSection} />
        {!isWelcomeInView ? <CiCircleChevUp size={60} color="#007bff" onClick={() => scrollToSection('welcome')}
          className="fixed z-50 bottom-10 max-[450px]:bottom-7 max-[450px]:right-7 right-10 cursor-pointer"></CiCircleChevUp> : null}

        <section id="welcome" ref={welcomeRef} className="h-screen flex items-center justify-center">
          <Welcome />
        </section>

        <section id="aboutMe" ref={aboutRef} className="h-screen">
          <AboutMe />
        </section>

        <section id="technologies" ref={techRef} className="h-screen">
          <Technologies />
        </section>

        <section id="projects" ref={projectsRef} className="h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" ref={contactRef} className="h-screen">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;

