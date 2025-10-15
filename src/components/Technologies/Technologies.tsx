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
            { name: "HTML", img: html, description: "Estructura semántica de sitios web." },
            { name: "CSS", img: css, description: "Estilos y diseño adaptable." },
            { name: "JavaScript", img: javascript, description: "Lógica y dinamismo del frontend." },
            { name: "React", img: react, description: "Componentes reutilizables y SPA." },
            { name: "Tailwind", img: tailwind, description: "Estilado rápido y responsivo con utilidades." },
            { name: "TypeScript", img: ts, description: "Estilado rápido y responsivo con utilidades." }
        ],
    },
    {
        title: "Backend",
        icon: BsDatabase,
        color: '#0aa844ff',
        items: [
            { name: "Java", img: java, description: "Lenguaje base para desarrollo backend." },
            { name: "Spring Boot", img: springBoot, description: "Framework para APIs y microservicios." },
            { name: "MySQL", img: mysql, description: "Base de datos relacional." },
            { name: "MongoDB", img: mongoDB, description: "Base de datos NoSQL flexible." },
            { name: "Python", img: python, description: "Lenguaje versátil para scripting y backend." },
        ],
    },
    {
        title: "Herramientas y otros",
        icon: VscTools,
        color: '#fd8f1aff',
        items: [
            { name: "Git / GitHub", img: html, description: "Control de versiones y repositorios." },
            { name: "VS Code", img: html, description: "Editor principal de desarrollo." },
            { name: "Figma", img: html, description: "Diseño UI/UX y prototipado." },
            { name: "Postman", img: html, description: "Pruebas de API y endpoints." },
            { name: "Node.js", img: html, description: "Entorno de ejecución de JavaScript en servidor." },
        ],
    },
];

const Technologies: React.FC = () => {
    const [indexTechItem, setIndexTechItem] = useState({ category: 0, item: 0 });

    return (
        <section className="flex flex-col snap-start gap-[70px] py-[100px] items-center justify-around h-full w-full">

            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <h2 className='text-[42px] font-semibold m-[0px]'>Tecnologias y habilidades</h2>
                <h5 className='text-[20px] m-[0px]'>Experiencia solida en el stack completo de desarrollo web moderno</h5>
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
                        <div className='flex flex-col items-center justify-center border border-solid border-[#e5e5e5] shadow-md rounded-[40px] py-[30px] gap-[50px] w-[55%] h-auto'>
                            <div className='flex flex-col items-center justify-center'>
                                <Icon size={35} color={category.color} />
                                <h3 className='text-[26px] font-semibold m-[0px]'>{category.title}</h3>
                            </div>

                            <div className="flex flex-row items-center gap-[20px] flex-wrap w-[400px] justify-center">
                                {category.items.map((item, index) => {
                                    return (
                                        <div className="flex flex-col items-center gap-[10px] justify-center">
                                            <div onMouseEnter={() => setIndexTechItem({ category: key, item: index })} className="border border-solid border-[#e5e5e5] transition-all duration-300 ease-in-out hover:border-[#00aeffff] hover:shadow-2xl rounded-[12px] p-[20px] cursor-pointer">
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