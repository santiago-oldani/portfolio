import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

const Navbar: React.FC<{ shrink: boolean, activeSection: string }> = ({ shrink, activeSection }) => {
  const menuItems = [
    { label: 'Inicio', id: 'welcome' },
    { label: 'Sobre mi', id: 'aboutMe' },
    { label: 'Habilidades', id: 'technologies' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' }
  ];
  return (
    <motion.nav
      animate={{
        height: shrink ? 60 : 80,
        marginTop: shrink ? 30 : 20,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row fixed bg-white z-50 top-0 left-1/2 transform -translate-x-1/2 w-[90%] rounded-[12px] px-[20px] shadow-sm border-b border-solid border-[#e5e5e5] justify-between items-center"
    >
      <div>{/* Tu Logo */}</div>

      <ul className="flex flex-row justify-between gap-[20px] w-fit mr-[50px] h-full items-center">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative h-full flex items-center justify-center px-6 font-semibold text-[18px] cursor-pointer transition-colors duration-300 group ${isActive ? 'text-[#007bff]' : 'text-black hover:text-[#007bff]'
                }`}
            >
              {item.label}

              <span className={`absolute bottom-0 h-[3px] bg-[#007bff] transition-all duration-300 ease-out 
        ${isActive
                  ? 'w-full left-0'
                  : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                }`}
              />
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
