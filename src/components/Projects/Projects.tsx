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
        demo: { frontend: "https://farmacy-tan.vercel.app", backend: 'https://trabajo-practico-progra-iii-back.vercel.app' },
        code: { frontend: "https://github.com/santiago-oldani/trabajo_practico_prograIII_front", backend: 'https://github.com/santiago-oldani/trabajo_practico_prograIII_back' }
    },
]


const Projects: React.FC = () => {
    return (
        <section className="flex flex-col snap-start pt-[100px] gap-[85px] items-center justify-start w-full">

            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] font-semibold m-[0px]'>Proyectos Destacados</h2>
                    <img src={project} alt="" className='w-[60px] pt-[15px]' />
                </div>
                {/* Frase actualizada */}
                <h5 className='text-[20px] text-gray-600 m-[0px]'>
                    Una seleccion de mis trabajos mas recientes y significativos.
                </h5>
            </div>

            <div className="flex flex-row flex-wrap h-auto items-start gap-[75px] justify-center w-full ">
                {/* CARD */}
                {featuredProjects.map((project, index) => {
                    return (
                        <motion.div
                            className="flex flex-col items-start justify-start w-[500px] h-auto pb-[10px] border border-solid rounded-2xl shadow-lg border-[#e5e5e5] hover:shadow-md">
                            <img src={project.img} alt="" className="w-full  object-cover h-[200px] rounded-t-[18px]" />
                            <div className='flex flex-col h-full w-full items-start gap-[12px] justify-start gap-[30px] py-[14px] px-[20px] '>
                                <h3 className='text-[20px] text-[#000] font-bold m-[0px]'>{project.title}</h3>
                                <h4 className='font-medium text-[14px]'>{project.description}</h4>
                                <div className='flex flex-wrap self-center w-full items-center justify-center gap-y-[10px] gap-x-[34px] mr-[0.5rem] mb-[0.3rem]'>
                                    {project.languages.map((lang) => {
                                        return (
                                            <div key={index} className="flex flex-col items-center">
                                                <span style={{ color: lang.color }} className="text-2xl">
                                                    {lang.icon}
                                                </span>
                                                <p className="text-[12px] mt-1">{lang.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <ProjectButtons demo={project.demo} code={project.code} />

                            </div>

                        </motion.div>
                    )
                })}
            </div>


        </section >
    )
}

export default Projects;