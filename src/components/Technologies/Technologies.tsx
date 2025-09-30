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
import { FaDatabase } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Technologies() {
    return (
        <section className="flex flex-col snap-start py-[100px] items-center justify-start w-full">

            <div className='flex flex-col items-center justify-center pt-[40px]'>
                <h2 className='text-[48px] font-semibold m-[0px]'>Tecnologias y habilidades</h2>
                <h5 className='text-[20px] m-[0px]'>Experiencia solida en el stack completo de desarrollo web moderno</h5>
            </div>

            <div className='flex flex-row items-center justify-around mt-[60px] w-[70%]'>

                <div className='flex flex-col items-center justify-center border border-solid border-[#e5e5e5] hover:border-[#00aeffff] hover:border-2 hover:shadow-2xl shadow-md rounded-[40px] gap-[50px] w-[35%] h-[600px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <TbWorld size={45} color='#007bff' />
                        <h3 className='text-[38px] font-semibold m-[0px]'>Frontend</h3>
                    </div>

                    <div className="flex flex-row items-center gap-[20px] flex-wrap w-[500px] justify-center">

                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={html} alt="html" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>HTML</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={css} alt="css" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>CSS</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={javascript} alt="javascript" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={react} alt="react" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>React</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={tailwind} alt="tailwind" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>Tailwind</h5>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center border border-solid border-[#e5e5e5] hover:border-[#00aeffff] hover:border-2 hover:shadow-2xl shadow-md rounded-[40px] gap-[50px] w-[35%] h-[600px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <FaDatabase size={45} color='#007bff' />
                        <h3 className='text-[38px] font-semibold m-[0px]'>Backend</h3>
                    </div>

                    <div className="flex flex-row items-center gap-[20px] flex-wrap w-[500px] justify-center">

                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={java} alt="java" className='w-[75px] h-[75px] ' />
                            </div>
                            <h5>Java</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={springBoot} alt="springBoot" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>Spring Boot</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={mysql} alt="mysql" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>MySQL</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={python} alt="python" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>Python</h5>
                        </div>
                        <div className="flex flex-col items-center gap-[10px] justify-center">
                            <div className="border border-solid border-[#e5e5e5] rounded-[12px] p-[20px] cursor-pointer">
                                <img src={mongoDB} alt="mongoDB" className='w-[75px] h-[75px]' />
                            </div>
                            <h5>MongoDB</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Technologies;