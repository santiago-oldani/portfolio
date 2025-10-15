import project_1 from '../../assets/imgs/test.png';
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
        languages: [{ name: "TypeScript", img: ts }, { name: "TypeScript", img: ts }, { name: "TypeScript", img: ts }, { name: "TypeScript", img: ts }, { name: "TypeScript", img: ts }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    },
    {
        title: "Bandify",
        img: project_1,
        languages: [
            { name: "Tailwind", img: tailwind },
            { name: "TypeScript", img: ts },
            { name: "React", img: react },
            { name: "Tailwind", img: tailwind },
            { name: "Tailwind", img: tailwind }],
        description: "Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario",
        demo: "www.hola.com",
        code: "www.chau.com"
    }, {
        title: "Bandify",
        img: project_1,
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
    , {
        title: "Bandify",
        img: project_1,
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
        <section className="flex flex-col snap-start py-[80px] items-center justify-start w-full">
            <div className='flex flex-col items-center justify-center pt-[20px]'>
                <h2 className='text-[48px] font-semibold m-[0px]'>Proyectos Destacados</h2>
                <h5 className='text-[20px] m-[0px]'>Una seleccion de mis trabajos mas recientes y significativos</h5>
            </div>

            <div className='flex flex-row justify-around w-[100%] mt-[75px] py-[10px] px-[40px] items-start'>

                <div className="flex flex-row flex-wrap h-auto items-center gap-[20px] justify-center w-[50%] ">
                    {/* CARD */}
                    {featuredProjects.map((project, index) => {
                        return (
                            <motion.div
                                className="flex flex-col cursor-pointer items-start justify-start w-[400px] h-[300px] gap-[10px] border border-solid shadow-xs rounded-[18px] border-[#e5e5e5] hover:shadow-md">
                                <div className='relative w-full'>
                                    <img src={project.img} alt="" className="w-full  object-cover h-[130px] rounded-t-[18px]" />
                                    <h3 className='text-[22px] m-auto text-white z-10 inset-0 flex items-center justify-center absolute font-semibold m-[0px]'>{project.title}</h3>
                                    <div className='flex flex-row absolute bottom-1 right-1 items-start self-center gap-[5px]'>
                                        <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[6px] py-[6px] cursor-pointer border-solid border-[#fff] rounded-[6px]'>
                                            <GoLinkExternal size={20} color='#fff' />
                                        </div>
                                        <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[6px] py-[6px] cursor-pointer border-solid border-[#fff] rounded-[6px]'>
                                            <IoCodeSlashOutline size={20} color='#fff' />
                                        </div>
                                    </div>
                                </div>


                                <div className='flex flex-col h-full w-full items-start gap-[12px] justify-between py-[14px] px-[14px] '>
                                    <h4 className='font-semibold text-[15px]'>{project.description}</h4>
                                    <div className='flex flex-wrap self-center w-full items-center justify-center gap-y-[10px] gap-x-[24px] '>
                                        {project.languages.map((lang) => {
                                            return (
                                                <p className='text-[14px]'>{lang.name}</p>
                                            )
                                        })}

                                    </div>

                                </div>

                            </motion.div>
                        )
                    })}
                </div>

                {/* ACA ESTA EL VISOR */}
                <div className='flex flex-col w-[50%] h-[600px] border border-solid border-1 border-[#000]'>
                    <div className='flex flex-row items-start'>
                        <img src={project_1} alt="" className='w-[70%] h-[300px]' />
                        <div className='flex flex-row flex-wrap items-center w-[30%] justify-center'>
                            {featuredProjects[0].languages.map((lang) => {
                                return (
                                    <div className='flex flex-row items-center justify-center border border-solid border-1 rounded-[12px] shadow-md gap-[12px]'>
                                        <img className='w-[20px] h-[20px]' src={lang.img} alt="" />
                                        <p>{lang.name}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>

                    <h3>Bandify</h3>
                    <p>Plataforma completa de comercio electronico con panel de aministracion, pasarela de pagos y gestion de inventario</p>

                </div>
            </div>


        </section >
    )
}

export default Projects;