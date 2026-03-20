declare global {
  interface Window {
    lenis: any;
  }
}

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  // Verificamos que exista la sección y la instancia de lenis en window
  if (section && window.lenis) {
    window.lenis.scrollTo(section, {
      duration: 1.2,
      immediate: false,
      force: true, // Esto rompe el "cooldown"
      lock: false
    });
  } else if (section) {
    // Fallback estándar
    section.scrollIntoView({ behavior: 'smooth' });
  }
};