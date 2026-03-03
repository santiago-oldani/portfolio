import computer from '../../assets/icons/computer1.svg';
import { motion } from "motion/react";
import { LuMapPin } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FaCss3Alt, FaGithub, FaHtml5, FaJava, FaNode, FaReact, FaPython } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiMysql, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const StackArrayFrontend = [
    { name: "React Js", icon: <FaReact />},
    { name: "TypeScript", icon: <BiLogoTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss />},
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML", icon: <FaHtml5 />},
    { name: "CSS", icon: <FaCss3Alt />},
];

const StackArrayBackend = [
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <FaPython /> }
];

const AboutMe: React.FC = () => {
    return (
        <div className="flex flex-col snap-start py-[125px] items-center justify-center h-full w-full">
            <motion.div
                /* initial={{ x: 0, y: 0, opacity: 0 }}
                whileInView={{ x: 0, y:80, opacity: 1 }}
                transition={{ duration: 1 }} */
                className='flex flex-row items-start justify-center border-1 border-solid shadow-md border-[#e9e9ea] w-fit h-fit gap-[20px] p-[20px] rounded-[14px] max-w-[1400px]'>

                <div className='w-[40%] h-full border-r-[1px] border-[#f2f1f5] flex flex-col items-center justify-start py-[20px] px-[20px] gap-[20px]'>
                    <img src={computer} alt="" className='w-[160px] h-auto' />
                    <div className='flex flex-col items-center justify-center gap-[8px] border-b-[1px] border-[#f2f1f5] pb-[10px]'>
                        <div className='flex items-center justify-center gap-[8px]'>
                            <FaGithub color='#787a84' size={16} className='flex-shrink-0' />
                            <a target='_blank' href='https://github.com/santiago-oldani' className='text-[#787a84] text-[0.9rem] font-[500]'>github.com/santiago-oldani</a>
                        </div>
                        <div className='flex items-center justify-center gap-[8px]'>
                            <CiLinkedin color='#787a84' size={16} className='flex-shrink-0' />
                            <a target='_blank' href='https://www.linkedin.com/in/santioldani' className='text-[#787a84] text-[0.9rem] font-[500]'>linkedin.com/in/santioldani</a>
                        </div>
                        <div className='flex items-center justify-center gap-[8px]'>
                            <LuMapPin color='#787a84' size={16} className='flex-shrink-0' />
                            <span className='text-[#787a84] text-[0.9rem] font-[500]'>Buenos Aires, Argentina</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-center w-full p-[22px]'>
                    <h1 className='text-[2.5rem] text-[#272b36] font-[600]'>Santiago Oldani</h1>
                    <h2 className='text-[1.8rem] font-[500] text-[#007bff]'>Desarrollador Web Full Stack</h2>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[30px]'>Soy estudiante avanzado de la <strong className='font-[600]'>Tecnicatura en Programación (UTN)</strong> con enfoque en desarrollo web.</h5>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[20px]'>Me gusta trabajar con React, TypeScript y Python, creando aplicaciones limpias y bien estructuradas. Actualmente amplío mi stack con proyectos en SpringBoot y MongoDB.</h5>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[5px]'>Busco una oportunidad donde pueda seguir creciendo profesionalmente y aportar mi forma de pensar al equipo.</h5>

                    <div className='mt-[30px] gap-[16px] flex flex-col items-start justify-start'>
                        <div className='flex items-center justify-center gap-[12px] mb-[14px]'>
                            <GrTechnology color='rgb(240, 116, 0)' size={25} />
                            <h4 className='text-[1.1rem] font-[600] text-[#000] '>Stack principal</h4>
                        </div>

                        <div className='flex flex items-center w-full justify-center gap-[14px]'>

                            <div className='flex flex-col items-start justify-start border-l-[#007bff] border-l-[3px] border-r-gray-100 border-r-[1px] border-t-gray-100 border-t-[1px] w-[50%] relative px-[30px] py-[20px]'>
                                <h5 className='text-[#3B4A5A] bg-[#fff] absolute left-[0px] top-[-15px] px-[10px]'>Frontend</h5>
                                <TbPointFilled size={16} className='absolute top-[-8px] right-[-9px] text-gray-200 ' />

                                <div className='flex flex-wrap w-full gap-[10px] items-center max-w-[385px]'>
                                    {StackArrayFrontend.map((lang) => {
                                        return (
                                            <div className='flex items-center justify-center py-[4px] text-[#fff] px-[12px] bg-[#007bff] rounded-[12px] gap-[4px] h-fit'>
                                                {lang.icon}
                                                <span className="whitespace-nowrap text-m">{lang.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='flex flex-col items-start justify-start border-t-gray-100 border-t-[1px] w-[50%] relative p-[20px]'>
                                <h5 className='text-[#3B4A5A] bg-[#fff] absolute left-[0px] top-[-15px] px-[10px]'>Backend</h5>

                                <div className='flex flex-wrap w-full gap-[10px] max-w-[385px] items-center'>
                                    {StackArrayBackend.map((lang) => {
                                        return (
                                            <div className='flex items-center justify-center text-[#fff] bg-[#5ab275] py-[4px] px-[12px]  rounded-[12px] gap-[4px] h-fit'>
                                                {lang.icon}
                                                <span className="whitespace-nowrap text-m">{lang.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe;