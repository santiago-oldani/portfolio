import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToSection } from "../../utils/scroll";

const Navbar: React.FC<{ shrink: boolean; activeSection: string }> = ({
  shrink,
  activeSection,
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { label: "Inicio", id: "welcome" },
    { label: "Sobre mi", id: "aboutMe" },
    { label: "Habilidades", id: "technologies" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  const handleClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <motion.nav
      animate={{
        height: shrink ? 60 : 80,
        marginTop: isMobile ? 10 : shrink ? 30 : 20,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row fixed bg-white z-50 top-0 left-1/2 transform -translate-x-1/2 w-[90%] rounded-[12px] px-[20px] shadow-sm border-b border-solid border-[#e5e5e5] justify-between items-center"
    >
      <div></div>

      {/* ===== DESKTOP MENU ===== */}
      <ul className="flex flex-row justify-between gap-[20px] w-fit mr-[50px] h-full items-center max-[750px]:hidden">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative h-full flex items-center justify-center px-6 font-semibold text-[18px] cursor-pointer transition-colors duration-300 group ${isActive
                ? "text-[#007bff]"
                : "text-black hover:text-[#007bff]"
                }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 h-[3px] bg-[#007bff] transition-all duration-300 ease-out 
                ${isActive
                    ? "w-full left-0"
                    : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
                  }`}
              />
            </li>
          );
        })}
      </ul>

      {/* ===== MOBILE BUTTON (750px) ===== */}
      <div className="hidden max-[750px]:flex items-center">
        <button
          onClick={() => setOpen(!open)}
          className="relative w-[40px] h-[40px] flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <span
            className={`absolute w-5 h-[2px] bg-black transition-all duration-300 ${open ? "rotate-45" : "-translate-y-[6px]"
              }`}
          />

          <span
            className={`absolute w-5 h-[2px] bg-black transition-all duration-300 ${open ? "opacity-0" : ""
              }`}
          />

          <span
            className={`absolute w-5 h-[2px] bg-black transition-all duration-300 ${open ? "-rotate-45" : "translate-y-[6px]"
              }`}
          />
        </button>
      </div>

      {/* ===== DROPDOWN MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] right-[20px] mt-[10px] w-[220px] bg-white rounded-[12px] shadow-md border border-[#e5e5e5] flex flex-col py-2 max-[750px]:flex"
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`px-5 py-3 text-[15px] font-medium cursor-pointer transition-colors duration-200 ${isActive
                    ? "text-[#007bff] bg-blue-50"
                    : "text-black hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;