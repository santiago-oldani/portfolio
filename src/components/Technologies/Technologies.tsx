import css from '../../assets/icons/css3.png';
import html from '../../assets/icons/html.png';
import java from '../../assets/icons/java.png';
import mysql from '../../assets/icons/mysql1.png';
import python from '../../assets/icons/python.png';
import mongoDB from '../../assets/icons/mongodb1.png';
import umletino from '../../assets/icons/UMLetino.png';
import express from '../../assets/icons/express.png';
import javascript from '../../assets/icons/javascript.png';
import springBoot from '../../assets/icons/springboot1.png';
import react from '../../assets/icons/react.svg';
import tailwind from '../../assets/icons/tailwind5.png';
import ts from '../../assets/icons/ts.png';
import fastapi from '../../assets/icons/fast.png';
import git from '../../assets/icons/git.png';
import nodejs from '../../assets/icons/node.png';
import postman from '../../assets/icons/postman.png';
import figma from '../../assets/icons/figma.png';
import tools from '../../assets/icons/tools.svg';
import { TbWorld } from "react-icons/tb";
import type { IconType } from 'react-icons';
import { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import { BsDatabase } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";

interface TechItem {
    name: string;
    img: string;
    description: string;
}

interface TechCategory {
    title: string;
    icon: IconType;
    color: string;
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        title: "Frontend",
        icon: TbWorld,
        color: '#007bff',
        items: [
            {
                name: "HTML",
                img: html,
                description: "Maquetación de interfaces con estándares semánticos y SEO."
            },
            {
                name: "CSS",
                img: css,
                description: "Diseño visual avanzado, animaciones y layouts responsivos."
            },
            {
                name: "JavaScript",
                img: javascript,
                description: "Desarrollo de lógica compleja y manipulación dinámica del DOM."
            },
            {
                name: "React",
                img: react,
                description: "Creación de interfaces interactivas basadas en componentes y hooks."
            },
            {
                name: "Tailwind",
                img: tailwind,
                description: "Estilado eficiente mediante utility-first CSS y diseño adaptativo."
            },
            {
                name: "TypeScript",
                img: ts,
                description: "Programación robusta con tipado estático para código escalable."
            }
        ],
    },
    {
        title: "Backend",
        icon: BsDatabase,
        color: '#0aa844ff',
        items: [
            {
                name: "Java",
                img: java,
                description: "Lenguaje robusto y orientado a objetos para aplicaciones de nivel empresarial."
            },
            {
                name: "Spring Boot",
                img: springBoot,
                description: "Ecosistema para el desarrollo ágil de APIs REST y microservicios escalables."
            },
            {
                name: "MySQL",
                img: mysql,
                description: "Gestión de bases de datos relacionales con SQL y optimización de consultas."
            },
            {
                name: "MongoDB",
                img: mongoDB,
                description: "Base de datos NoSQL orientada a documentos para el manejo de datos no estructurados."
            },
            {
                name: "Python",
                img: python,
                description: "Lenguaje de alto nivel enfocado en la legibilidad y versatilidad para lógica de servidor."
            },
            {
                name: "FastAPI",
                img: fastapi,
                description: "Framework moderno de Python para construir APIs de alto rendimiento con tipado."
            },
            {
                name: "Node.js",
                img: nodejs,
                description: "Entorno de ejecución asíncrono basado en eventos para servidores escalables."
            },
            {
                name: "Express",
                img: express,
                description: "Framework minimalista para la creación de APIs y middleware en Node.js."
            }
        ],
    },
    {
        title: "Herramientas y otros",
        icon: VscTools,
        color: '#fd8f1aff',
        items: [
            {
                name: "Git",
                img: git,
                description: "Control de versiones distribuido y flujo de trabajo colaborativo."
            },
            {
                name: "Postman",
                img: postman,
                description: "Testing automatizado y documentación técnica de APIs REST."
            },
            {
                name: "Figma",
                img: figma,
                description: "Diseño de interfaces (UI) y prototipado de experiencia de usuario (UX)."
            },
            {
                name: "Umletino",
                img: umletino,
                description: "Modelado de diagramas UML para arquitectura de software y bases de datos."
            },
        ],
    },
];

const Technologies: React.FC = () => {
    const [indexTechItem, setIndexTechItem] = useState({ category: 0, item: 0 });

    return (
        <section className="flex flex-col snap-start gap-[70px] py-[100px] items-center justify-around h-full w-full">
            
            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] font-semibold m-[0px]'>Tecnologias y habilidades</h2>
                    <img src={tools} alt="" className='w-[60px] pt-[15px]' />
                </div>
                {/* Frase actualizada */}
                <h5 className='text-[20px] text-gray-600 m-[0px]'>
                    Experiencia solida en el stack completo de desarrollo web moderno.
                </h5>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={indexTechItem.item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex items-center justify-center border border-solid border-[#e5e5e5] h-[80px] shadow-md rounded-[40px] py-[40px] px-[40px] gap-[20px] bg-white/80 backdrop-blur-md"
                >
                    <img
                        className="w-[60px] h-[60px]"
                        src={techCategories[indexTechItem.category].items[indexTechItem.item].img}
                        alt={techCategories[indexTechItem.category].items[indexTechItem.item].name}
                    />
                    <p className="text-gray-700 text-[18px] font-medium">
                        {techCategories[indexTechItem.category].items[indexTechItem.item].description}
                    </p>
                </motion.div>
            </AnimatePresence>

            <div className='flex flex-row  justify-start gap-[50px] pl-[30px] w-fit'>
                {techCategories.map((category, key) => {
                    const Icon = category.icon;

                    return (
                        <div className='flex flex-col items-center justify-start border border-solid border-[#e5e5e5] shadow-md rounded-[40px] py-[30px] px-[15px] gap-[50px] w-[450px] h-auto'>
                            <div className='flex flex-col items-center justify-center'>
                                <Icon size={35} color={category.color} />
                                <h3 className='text-[26px] font-semibold m-[0px]'>{category.title}</h3>
                            </div>

                            <div className="flex flex-row items-center gap-[20px] flex-wrap w-full justify-center">
                                {category.items.map((item, index) => {
                                    return (
                                        <div className="flex flex-col items-center gap-[10px] justify-center">
                                            <div onMouseEnter={() => setIndexTechItem({ category: key, item: index })} className="border border-solid border-[#e5e5e5] transition-all duration-300 ease-in-out hover:border-[#00aeffff] hover:shadow-2xl rounded-[12px] p-[10px] cursor-pointer">
                                                <img src={item.img} alt="html" className='w-[50px] h-[50px]' />
                                            </div>
                                            <h5 className='text-[14px]'>{item.name}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    )
}

export default Technologies;