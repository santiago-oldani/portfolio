import { useEffect, useState } from "react"
import { motion } from "framer-motion";

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
      <ul className="flex flex-row justify-between w-[20%]">
        <li>Inicio</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
