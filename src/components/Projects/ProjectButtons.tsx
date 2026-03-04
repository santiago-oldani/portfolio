import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoLinkExternal, GoChevronDown } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";

interface ProjectLinks {
    frontend?: string;
    backend?: string;
}

interface ProjectButtonsProps {
    demo: ProjectLinks;
    code: ProjectLinks;
}

const ProjectButtons: React.FC<ProjectButtonsProps> = ({ demo, code }) => {
    // Estado para saber qué dropdown está abierto: 'demo', 'code' o null
    const [openDropdown, setOpenDropdown] = useState<'demo' | 'code' | null>(null);

    const toggleDropdown = (type: 'demo' | 'code') => {
        setOpenDropdown(openDropdown === type ? null : type);
    };

    // Función para renderizar los items del menú solo si tienen URL
    const renderLinks = (links: ProjectLinks) => {
        return (
            <>
                {links.frontend && (
                    <a href={links.frontend} target="_blank" rel="noreferrer" className="block px-4 py-2 text-[14px] hover:bg-[#f0f7ff] transition text-black">
                        Frontend
                    </a>
                )}
                {links.backend && (
                    <a href={links.backend} target="_blank" rel="noreferrer" className="block px-4 py-2 text-[14px] border-t border-[#f0f0f0] hover:bg-[#f0f7ff] transition text-black">
                        Backend
                    </a>
                )}
            </>
        );
    };

    return (
        <div className='flex flex-row items-center justify-center w-full gap-[10px]'>

            {/* BOTÓN DEMO */}
            <div className="relative">
                <div
                    onClick={() => toggleDropdown('demo')}
                    className='flex flex-row items-center justify-center gap-[10px] border-2 max-[400px]:px-[5px] px-[25px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[8px]'
                >
                    <GoLinkExternal size={20} color='#007bff' />
                    <p className='text-[16px] text-[#007bff] font-medium'>Demo</p>
                    <GoChevronDown className={`transition-transform ${openDropdown === 'demo' ? 'rotate-180' : ''}`} color='#007bff' />
                </div>

                <AnimatePresence>
                    {openDropdown === 'demo' && (
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute bottom-[41px] left-0 w-full bg-white border border-[#e5e5e5] rounded-[8px] shadow-lg z-[100]"
                        >
                            {renderLinks(demo)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* BOTÓN CÓDIGO */}
            <div className="relative overflow-visible">
                <div
                    onClick={() => toggleDropdown('code')}
                    className='flex flex-row items-center justify-center gap-[10px] border-2 max-[400px]:px-[5px] px-[25px] py-[6px] cursor-pointer border-solid border-[#e9ecf3] rounded-[8px]'
                >
                    <IoCodeSlashOutline size={20} color='#000' />
                    <p className='text-[16px] font-medium'>Código</p>
                    <GoChevronDown className={`transition-transform ${openDropdown === 'code' ? 'rotate-180' : ''}`} color='#000' />
                </div>

                <AnimatePresence>
                    {openDropdown === 'code' && (
                        <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 5 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute bottom-[46px]  left-0 w-full bg-white border border-[#e5e5e5] rounded-[8px] shadow-lg z-50"
                        >
                            {renderLinks(code)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectButtons;