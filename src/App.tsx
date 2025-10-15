import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";

const App = () => {
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const isTechInView = useInView(techRef, { amount: 0.4 });
  const isProjectsInView = useInView(projectsRef, { amount: 0.4 });
  const isContactInView = useInView(contactRef, {amount: 0.4} );

  const shouldShrinkNavbar = isTechInView || isProjectsInView || isContactInView;

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar shrink={shouldShrinkNavbar} />

      <section className="snap-start h-screen flex items-center justify-center">
        <Welcome />
      </section>

      <section ref={techRef} className="snap-start h-screen bg-white">
        <Technologies />
      </section>

      <section ref={projectsRef} className="snap-start h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section ref={contactRef} className="snap-start h-screen">
        <Contact />
      </section>
    </main>
  );
};

export default App;

