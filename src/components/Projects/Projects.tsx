import project_1 from '../../assets/imgs/test.png';
import ml from '../../assets/imgs/ml.png';
import net from '../../assets/imgs/netflix.png';
import port from '../../assets/imgs/port.png';
import { GoLinkExternal } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";
import css from '../../assets/icons/css3.png';
import html from '../../assets/icons/html.png';
import java from '../../assets/icons/java.png';
import mysql from '../../assets/icons/mysql1.png';
import python from '../../assets/icons/python.png';
import mongoDB from '../../assets/icons/mongodb1.png';
import javascript from '../../assets/icons/javascript.png';
import springBoot from '../../assets/icons/springboot1.png';
import react from '../../assets/icons/react.svg';
import tailwind from '../../assets/icons/tailwind5.png';
import ts from '../../assets/icons/ts.png';
import project from '../../assets/icons/projects.svg';
import { AnimatePresence, motion } from "motion/react";

interface Languages {
    name: string;
    img: string;
}

interface ArrayProjects {
    title: string;
    img: string;
    languages: Languages[];
    description: string;
    demo: string;
    code: string;
}

const featuredProjects: ArrayProjects[] = [
    {
        title: "Bandify",
        img: project_1,
        languages: [ { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: ts },
            { name: "React", img: react },
            { name: "Tailwind", img: tailwind },
            { name: "Tailwind", img: tailwind }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    },
    {
        title: "Bandify",
        img: net,
        languages: [
            { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: ts },
            { name: "React", img: react },
            { name: "Tailwind", img: tailwind },
            { name: "Tailwind", img: tailwind }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    },
    {
        title: "Bandify",
        img: ml,
        languages: [
            { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: ts },
            { name: "React", img: react },
            { name: "Tailwind", img: tailwind },
            { name: "Tailwind", img: tailwind }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    },
    {
        title: "Bandify",
        img: port,
        languages: [
            { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: ts },
            { name: "React", img: react },
            { name: "Tailwind", img: tailwind },
            { name: "Tailwind", img: tailwind }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    }
]


const Projects: React.FC = () => {
    return (
        <section className="flex flex-col snap-start py-[125px] gap-[100px] items-center justify-start w-full">
            <div className='flex flex-col items-center justify-center pt-[20px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] font-semibold m-[0px]'>Proyectos Destacados</h2>
                    <img src={project} alt=""  className='w-[60px] pt-[15px]'/>
                </div>
                <h5 className='text-[20px] max-w-[600px] m-[0px]'>Una seleccion de mis trabajos mas recientes y significativos</h5>
            </div>

            <div className="flex flex-row flex-wrap h-auto items-center gap-[20px] justify-center w-full ">
                {/* CARD */}
                {featuredProjects.map((project, index) => {
                    return (
                        <motion.div
                            className="flex flex-col cursor-pointer items-start justify-start w-[430px] h-[500px] pb-[10px] border border-solid shadow-xs rounded-[18px] border-[#e5e5e5] hover:shadow-md">
                            <img src={project.img} alt="" className="w-full  object-cover h-[225px] rounded-t-[18px]" />
                            <div className='flex flex-col h-full w-full items-start gap-[12px] justify-start gap-[30px] py-[14px] px-[20px] '>
                                <h3 className='text-[22px] text-[#000] font-bold m-[0px]'>{project.title}</h3>
                                <h4 className='font-medium text-[17px]'>{project.description}</h4>
                                <div className='flex flex-wrap self-center w-full items-center justify-center gap-y-[10px] gap-x-[34px] mr-[0.5rem] mb-[0.3rem]'>
                                    {project.languages.map((lang) => {
                                        return (
                                            <p className='text-[14px]'>{lang.name}</p>
                                        )
                                    })}
                                </div>
                                <div className='flex flex-row items-start self-center gap-[5px]'>
                                    <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[46px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[8px]'>
                                        <GoLinkExternal size={25} color='#007bff' />
                                        <p className='text-[18px] text-[#007bff]'>Demo</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[46px] py-[6px] cursor-pointer border-solid border-[#e9ecf3] rounded-[8px]'>
                                        <IoCodeSlashOutline size={25} color='#000' />
                                        <p className='text-[18px] '>Código</p>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    )
                })}
            </div>


        </section >
    )
}

export default Projects;