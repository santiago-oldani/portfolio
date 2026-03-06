import shop from '../../assets/imgs/shop.png';
import farmacy from '../../assets/imgs/farmacy.png';
import healthpoint from '../../assets/imgs/healthpoint_v2.png';
import project from '../../assets/icons/projects.svg';
import { motion } from "motion/react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSpringboot, SiMysql, SiTailwindcss, SiFirebase, SiExpress, SiStyledcomponents } from "react-icons/si";
import ProjectButtons from './ProjectButtons';
import { IoLogoJavascript } from "react-icons/io5";
import { useEffect, useState } from 'react';
import CarouselProjects from './CarouselProjects';

interface Languages {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface FrontAndBack {
    frontend: string;
    backend: string;
}

interface ArrayProjects {
    title: string;
    img: string;
    languages: Languages[];
    description: string;
    technicalNote?: string;
    demo: FrontAndBack;
    code: FrontAndBack;
}

const featuredProjects: ArrayProjects[] = [
    {
        title: "S H O P – E-commerce de Vanguardia",
        img: shop,
        languages: [
            { name: "React Js", icon: <FaReact />, color: '#61DAFB' },
            { name: "Styled Components", icon: <SiStyledcomponents />, color: '#DB7093' },
            { name: "Firebase", icon: <SiFirebase />, color: '#FFCA28' }
        ],
        description: "S H O P es una plataforma de comercio minimalista que prioriza la velocidad y la experiencia de compra fluida. El proyecto se centra en la integración eficiente de una base de datos NoSQL para la gestión dinámica de productos.",
        demo: { frontend: "https://shop-mauve-zeta.vercel.app", backend: '' },
        code: { frontend: "https://github.com/santiago-oldani/e-commerce", backend: '' }
    },
    {
        title: "HealthPoint – Sistema Integral de Gestión de Turnos",
        img: healthpoint,
        languages: [
            { name: "React Js", icon: <FaReact />, color: '#61DAFB' },
            { name: "TypeScript", icon: <BiLogoTypescript />, color: '#3178C6' },
            { name: "Tailwind", icon: <SiTailwindcss />, color: '#06B6D4' },
            { name: "Spring Boot", icon: <SiSpringboot />, color: '#6DB33F' },
            { name: "Java", icon: <FaJava />, color: '#007396' },
            { name: "MySQL", icon: <SiMysql />, color: '#4479A1' }
        ],
        description: "HealthPoint es una solución robusta diseñada para optimizar la atención en centros de salud. Combina una Landing Page de alto impacto visual con una plataforma interna de gestión técnica.",
        technicalNote: "El servicio de backend está alojado en Render bajo un plan gratuito, lo que puede ocasionar una demora de aproximadamente 2 minutos en la carga inicial mientras el servidor se activa. Una vez iniciado, la navegación por el sistema de gestión de turnos y la persistencia en MySQL funcionarán con total normalidad.",
        demo: { frontend: "https://frontend-appointment-two.vercel.app", backend: '' },
        code: { frontend: "https://github.com/santiago-oldani/frontend_appointment", backend: 'https://github.com/santiago-oldani/backend_appointment' }
    },

    {
        title: "Farmacy – Sistema de Autoservicio Farmacéutico",
        img: farmacy,
        languages: [
            { name: "JavaScript", icon: <IoLogoJavascript />, color: '#F7DF1E' },
            { name: "HTML", icon: <FaHtml5 />, color: '#E34F26' },
            { name: "CSS", icon: <FaCss3Alt />, color: '#1572B6' },
            { name: "Node.js", icon: <FaNode />, color: '#339933' },
            { name: "Express", icon: <SiExpress />, color: '#000000' },
            { name: "MySQL", icon: <SiMysql />, color: '#4479A1' }
        ],
        description: "Farmacy es una plataforma integral de gestión y venta de productos farmacéuticos. Fue desarrollada como proyecto final para la materia 'Programación 3' de la UTN, enfocándose en la arquitectura Model-View-Controller (MVC) y la persistencia de datos relacionales.",
        technicalNote: "Debido a que el backend está alojado en un entorno Serverless (Vercel), las sesiones son volátiles. El acceso al panel se ha configurado de forma abierta para garantizar la navegación fluida, manteniendo el flujo de autenticación original funcional en el código fuente.",
        demo: { frontend: "https://farmacy-tan.vercel.app", backend: 'https://trabajo-practico-progra-iii-back.vercel.app/login' },
        code: { frontend: "https://github.com/santiago-oldani/trabajo_practico_prograIII_front", backend: 'https://github.com/santiago-oldani/trabajo_practico_prograIII_back' }
    },
]


const Projects: React.FC = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1185);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1185);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="flex flex-col snap-start max-[1000px]:pt-[80px] pt-[100px] gap-[85px] max-[1000px]:gap-[20px] max-[1500px]:gap-[60px] px-[20px] items-center justify-start w-full">

            <div className='flex flex-col items-center justify-center pt-[25px] max-[1000px]:pt-[5px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] max-[1500px]:text-[32px] max-[450px]:text-[26px] font-semibold m-[0px] text-center truncate max-[450px]:max-w-[250px] text-center'>Proyectos Destacados</h2>
                    <img src={project} alt="" className='w-[60px] pt-[15px] max-[1500px]:w-[40px] max-[450px]:text-[30px]' />
                </div>

                <h5 className='text-[20px] text-gray-600 m-[0px] max-[970px]:text-[16px] max-[450px]:text-[14px] text-center'>
                    Una seleccion de mis trabajos mas recientes y significativos.
                </h5>
            </div>

            {isMobile ? <CarouselProjects featuredProjects={featuredProjects} /> :

                <div className="flex flex-row h-auto items-start gap-[75px] max-[1500px]:gap-[40px] justify-center w-full px-[20px]">
                    {/* CARD */}
                    {featuredProjects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start justify-start w-[500px] h-[550px] border border-solid rounded-2xl shadow-lg border-[#e5e5e5] hover:shadow-md bg-white overflow-visible"
                            >
                                <img src={project.img} alt={project.title} className="w-full object-cover h-[200px] rounded-t-[18px]" />

                                {/* Contenedor principal con flex-1 para empujar los botones al final */}
                                <div className='flex flex-col flex-1 w-full items-start p-[20px] gap-[15px] overflow-hidden'>
                                    <h3 className='text-[20px] text-[#000] font-bold shrink-0'>{project.title}</h3>

                                    {/* Área con scroll: Solo vertical y sin scrollbar horizontal */}
                                    <div className='flex-1 w-full overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar'>
                                        <h4 className='font-medium text-[14px] mb-4 text-gray-700'>{project.description}</h4>

                                        {project.technicalNote && (
                                            <div className='bg-blue-50 border-l-[4px] border-[#0047ba] p-[12px] rounded-r-[8px] mb-4'>
                                                <p className='text-[13px] text-blue-900 leading-tight'>
                                                    <strong className='text-[11px] uppercase tracking-wider block mb-1 text-[#0047ba]'>
                                                        Nota de la Demo:
                                                    </strong>
                                                    {project.technicalNote}
                                                </p>
                                            </div>
                                        )}

                                        <div className='flex flex-wrap w-full items-center justify-center gap-y-[15px] gap-x-[25px] pb-4'>
                                            {project.languages.map((lang, langIdx) => (
                                                <div key={langIdx} className="flex flex-col items-center">
                                                    <span style={{ color: lang.color }} className="text-2xl">
                                                        {lang.icon}
                                                    </span>
                                                    <p className="text-[12px] mt-1">{lang.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Este componente ahora siempre estará al final del contenedor flex-1 */}
                                    <div className="w-full pt-4 border-t border-gray-100 shrink-0">
                                        <ProjectButtons demo={project.demo} code={project.code} />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>}




        </section >
    )
}

export default Projects;