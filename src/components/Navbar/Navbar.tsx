import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

const Navbar: React.FC<{ shrink: boolean }> = ({ shrink }) => {

  return (
    <motion.nav
      animate={{
        height: shrink ? 50 : 80,
        marginTop: shrink ? 30 : 20,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-row fixed bg-white z-50 top-0 left-1/2 transform -translate-x-1/2 w-[90%] rounded-[12px] px-[20px] shadow-sm border-b border-solid border-[#e5e5e5] justify-between items-center"
    >
      <h1 className="font-bold text-[22px]">
        <span className="text-[#007bff] font-bold">Dev</span>Portfolio
      </h1>
      <ul className="flex flex-row justify-between gap-[55px] w-fit">
        <li onClick={() => scrollToSection('welcome')} className="font-semibold text-[18px] cursor-pointer">Inicio</li>
        <li onClick={() => scrollToSection('aboutMe')} className="font-semibold text-[18px] cursor-pointer">Sobre mi</li>
        <li onClick={() => scrollToSection('technologies')} className="font-semibold text-[18px] cursor-pointer">Habilidades</li>
        <li onClick={() => scrollToSection('projects')} className="font-semibold text-[18px] cursor-pointer">Proyectos</li>
        <li onClick={() => scrollToSection('contact')} className="font-semibold text-[18px] cursor-pointer">Contacto</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
