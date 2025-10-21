import computer from '../../assets/icons/computer1.svg';
import aboutme from '../../assets/icons/aboutme.svg';
import { motion } from "motion/react";

const AboutMe: React.FC = () => {
    return (
        <div className="flex flex-col snap-start py-[105px] items-center justify-start h-full w-full">
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-row items-center justify-center gap-[10px] pt-[15px]'>
                    <h2 className='text-[42px] font-semibold m-[0px]'>Sobre mi</h2>
                    <img src={aboutme} alt="" className='w-[50px] pt-[10px] h-auto' />
                </div>
                <h5 className='text-[20px] m-[0px]'>Experiencia solida en el stack completo de desarrollo web moderno</h5>
            </div>
            <motion.div
                initial={{ x: 300, y:60, opacity: 0 }}
                whileInView={{ x: 0, y: 60, opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-row items-start border-1 border-solid shadow-md border-[#e9e9ea] w-fit h-fit gap-[100px] mb-20 p-[40px] rounded-[14px]'>
                <img src={computer} alt="" className='w-[130px] h-auto' />

                <div className='flex flex-col items-start justify-start'>
                    <h1 className='text-[48px] font-bold'>Santiago Oldani</h1>
                    <h2 className='text-[38px] font-semibold text-[#007bff]'>Desarrollador Web</h2>
                    <h5 className='text-[20px] m-[0px] max-w-[680px] leading-relaxed text-justify md:text-left mt-[50px]'>Soy estudiante avanzado de la Tecnicatura en Programación (UTN) con enfoque en desarrollo web.
                        Me gusta trabajar con React, TypeScript y Python, creando aplicaciones limpias y bien estructuradas.
                        Actualmente amplío mi stack con proyectos en SpringBoot y MongoDB. Busco una oportunidad donde
                        pueda seguir creciendo profesionalmente y aportar mi forma de pensar al equipo.Soy estudiante avanzado de la Tecnicatura en Programación (UTN) con enfoque en desarrollo web.
                        Me gusta trabajar con React, TypeScript y Python.</h5>
                </div>
            </motion.div>


        </div>
    )
}

export default AboutMe;


/* 



*/