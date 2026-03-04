import { IoLogoGithub } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { scrollToSection } from "../../utils/scroll";
import toast from "react-hot-toast";
import { IoIosDownload } from "react-icons/io";

interface WelcomeTitle {
    first: string;
    second: string;
}

function Welcome() {
    const [welcome, setWelcome] = useState<WelcomeTitle>({ first: "Santiago", second: "Oldani" });

    useEffect(() => {
        const timer = setTimeout(() => {
            setWelcome({ first: "Desarrollador", second: "Fullstack" });
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const descargarCV = () => {
        const link = document.createElement('a');
        link.href = '/cv-santiago-oldani.pdf';
        link.download = 'SantiagoOldani_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success('¡Descarga iniciada!', {
            icon: '📄',
            duration: 3000
        });
    };

    return (
        <section className="w-full h-[calc(100vh-200px)] snap-start pt-[100px] pb-[50px] row-start-2 flex flex-col max-[450px]:justify-start max-[450px]:gap-[70px]  justify-between items-center">
            <div className="inline-block leading-tight shadow-md border font-semibold border-[#e5e5e5] mt-[16px] rounded-[18px] max-[920px]:text-[14px] max-[920px]:py-[7px] max-[920px]:px-[18px] px-[24px] py-[10px] text-center">
                Disponible para proyectos
            </div>

            <motion.div
                key={welcome.first || welcome.second}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className='flex flex-col items-center h-auto justify-center'>
                <h1 className='text-[98px] max-[500px]:text-[42px] max-[920px]:text-[68px] font-bold m-[0px]'>{welcome.first} </h1>
                <h1 className='text-[#007bff] text-[98px] max-[500px]:text-[42px]  max-[920px]:text-[68px] font-bold m-[0px]'>{welcome.second}</h1>
            </motion.div>

            <h4 className="text-[20px] max-[920px]:text-[14px] max-[500px]:w-[250px] max-[920px]:w-[400px] w-[600px] text-center">
                Especializado en crear experiencias web modernas y escalables.
                Desde interfaces elegantes hasta arquitecturas robustas de backend.
            </h4>

            <div className="flex flex-row items-center gap-[20px] justify-center">
                <div
                    onClick={() => scrollToSection('contact')}
                    className="flex flex-row font-bold gap-[10px] items-center cursor-pointer justify-center px-[28px] py-[10px] rounded-[8px]">
                    Contactar
                </div>
                <div className="flex flex-row items-center border-[2px] border-[#007bff] rounded-[8px] overflow-hidden">
                    <a href="/cv-santiago-oldani.pdf" target="_blank" rel="noopener noreferrer" className="px-[20px] max-[500px]:px-[15px] max-[500px]:py-[5px] py-[10px] text-[#007bff] font-semibold hover:bg-[#f0f7ff] transition">
                        Ver CV
                    </a>
                    <div onClick={descargarCV} className="border-l-[2px] border-[#007bff] px-[12px] py-[10px] text-[#007bff] cursor-pointer hover:bg-[#f0f7ff] transition" title="Descargar PDF">
                        <IoIosDownload size={20} />
                    </div>
                </div>
            </div>

            <div className='flex flex-row gap-[20px]'>
                <a target="_blank" href="https://github.com/santiago-oldani">
                    <div className='flex items-center justify-center shadow-md p-[15px] border border-solid border-[#e5e5e5] rounded-[50%]'>
                        <IoLogoGithub size={32} className="max-[500px]:w-[25px] max-[500px]:h-[25px]"/>
                    </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/santioldani/">
                    <div className='flex items-center justify-center p-[15px] shadow-md border border-solid border-[#e5e5e5] rounded-[50%]'>
                        <ImLinkedin size={32} className="max-[500px]:w-[25px] max-[500px]:h-[25px]"/>
                    </div>
                </a>
            </div>

        </section>
    )
}

export default Welcome;