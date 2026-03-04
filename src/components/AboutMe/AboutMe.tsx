import computer from '../../assets/icons/computer1.svg';
import rostro from '../../assets/imgs/rostro_oldani.jpeg';
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
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "React Js", icon: <FaReact /> },
    { name: "TypeScript", icon: <BiLogoTypescript /> },
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
                className='flex flex-row max-[1000px]:flex-col items-start mt-[80px] justify-center border-1 border-solid shadow-md border-[#e9e9ea] w-fit h-fit gap-[20px] p-[20px] rounded-[14px] max-w-[1400px] max-[1000px]:w-[92%] 
                max-[1000px]:max-h-[800px] max-[1000px]:justify-start
                max-[1000px]:overflow-y-auto max-[1000px]:gap-[0px]'>

                <div className='w-[40%] max-[1000px]:w-full h-full border-r-[1px] border-[#f2f1f5] flex flex-col  items-center justify-start py-[20px] px-[20px] gap-[20px]'>
                    <div className='w-[230px] h-[230px] max-[1000px]:w-[180px] max-[1000px]:h-[180px] rounded-full overflow-hidden border-2 border-gray-200 shadow-lg'>
                        <img src={rostro} alt="Santiago Oldani" className='w-full h-full object-cover' />
                    </div>

                    <div className='text-[#787a84] font-[600] text-[1rem] border-b-[1px] border-[#f2f1f5] pb-[10px]'>
                        <h5>Disponible para oportunidades.</h5>
                        <h5>Full-time · Remoto · Presencial</h5>
                    </div>

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
                            <span className='text-[#787a84] text-[0.9rem] font-[500]'>Recoleta, CABA, Argentina</span>
                        </div>
                    </div>

                    <a href="/cv-santiago-oldani.pdf" target="_blank" rel="noopener noreferrer" className="px-[20px] py-[10px] text-[#787a84] font-semibold hover:bg-[#f0f7ff] transition">
                        Ver curriculum
                    </a>
                </div>

                <div className='flex flex-col max-[1000px]:items-center items-start justify-center w-full p-[22px]'>
                    <h1 className='text-[2.5rem] max-[1000px]:text-[2rem] text-[#272b36] text-center font-[600]'>Santiago Oldani</h1>
                    <h2 className='text-[1.8rem] max-[1000px]:text-[1.3rem] font-[500] text-center text-[#007bff]'>Desarrollador Web Full Stack</h2>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[30px]'>Soy Desarrollador web full stack con formación en la <strong className='font-[600]'>Tecnicatura en Programación (UTN).</strong> Me especializo en la construcción de aplicaciones web modernas utilizando React en el frontend y Java/Spring Boot o Node.js en el backend.</h5>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[20px]'>Trabajo con APIs REST, autenticación, bases de datos relacionales y no relacionales, aplicando buenas prácticas y principios de arquitectura para construir sistemas mantenibles y escalables.</h5>
                    <h5 className='text-[1rem] font-normal m-[0px] max-w-[680px] text-gray-700 leading-relaxed text-justify md:text-left mt-[5px]'>Busco integrarme a un equipo donde pueda aportar técnicamente y seguir creciendo en proyectos reales.</h5>

                    <div className='mt-[30px] gap-[16px] flex flex-col items-start justify-start'>
                        <div className='flex items-center justify-center gap-[12px] mb-[14px]'>
                            <GrTechnology color='rgb(240, 116, 0)' size={25} />
                            <h4 className='text-[1.1rem] font-[600] text-[#000] '>Stack principal</h4>
                        </div>

                        <div className='flex flex-row max-[400px]:flex-col items-stretch w-full justify-center gap-[20px]'>

                            {/* Bloque Frontend */}
                            <div className='flex flex-col items-start justify-start border-l-[#007bff] border-l-[3px] border-t-gray-100 border-t-[1px] w-1/2 relative max-[1000px]:px-[15px] px-[30px] py-[20px]'>
                                <h5 className='text-[#3B4A5A] bg-[#fff] absolute left-[15px] top-[-15px] px-[10px] font-medium'>Frontend</h5>

                                {/* Punto de unión decorativo */}
                                <TbPointFilled size={16} className='absolute top-[-8px] right-[-9px] text-gray-200 z-10' />

                                <div className='flex flex-wrap w-full gap-[10px] items-center'>
                                    {StackArrayFrontend.map((lang, index) => (
                                        <div key={index} className='flex items-center justify-center py-[4px] text-[#fff] px-[12px] bg-[#007bff] rounded-[12px] gap-[6px] h-fit shadow-sm'>
                                            {lang.icon}
                                            <span className="whitespace-nowrap text-m font-medium max-[1000px]:text-[0.75rem]">{lang.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bloque Backend - Ahora con los mismos paddings y estructura */}
                            <div className='flex flex-col items-start justify-start border-l-gray-100 border-l-[1px] border-t-gray-100 border-t-[1px] w-1/2 relative max-[1000px]:px-[15px] px-[30px] py-[20px]'>
                                <h5 className='text-[#3B4A5A] bg-[#fff] absolute left-[15px] top-[-15px] px-[10px] font-medium'>Backend</h5>

                                <div className='flex flex-wrap w-full gap-[10px] items-center'>
                                    {StackArrayBackend.map((lang, index) => (
                                        <div key={index} className='flex items-center justify-center text-[#fff] bg-[#5ab275] py-[4px] px-[12px] rounded-[12px] gap-[6px] h-fit shadow-sm'>
                                            {lang.icon}
                                            <span className="whitespace-nowrap text-m font-medium max-[1000px]:text-[0.75rem]">{lang.name}</span>
                                        </div>
                                    ))}
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