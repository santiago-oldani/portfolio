import { useRef } from "react";
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

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Navbar shrink={shouldShrinkNavbar} activeSection={activeSection}/>
        {!isWelcomeInView ? <CiCircleChevUp size={60} color="#007bff" onClick={() => scrollToSection('welcome')} className="absolute z-50 bottom-10 right-10 cursor-pointer"></CiCircleChevUp> : null}

        <section id="welcome" ref={welcomeRef} className="snap-start h-screen flex items-center justify-center">
          <Welcome />
        </section>

        <section id="aboutMe" ref={aboutRef} className="snap-start h-screen">
          <AboutMe />
        </section>

        <section id="technologies" ref={techRef} className="snap-start h-screen">
          <Technologies />
        </section>

        <section id="projects" ref={projectsRef} className="snap-start h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" ref={contactRef} className="snap-start h-screen">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;

