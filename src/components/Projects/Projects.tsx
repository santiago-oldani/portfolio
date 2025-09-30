import project_1 from '../../assets/imgs/test.png';
import { GoLinkExternal } from "react-icons/go";
import { IoCodeSlashOutline } from "react-icons/io5";

function Projects() {
    return (
        <section className="flex flex-col snap-start py-[100px] items-center justify-start w-full">
            <div className='flex flex-col items-center justify-center pt-[40px]'>
                <h2 className='text-[48px] font-semibold m-[0px]'>Proyectos Destacados</h2>
                <h5 className='text-[20px] m-[0px]'>Una seleccion de mis trabajos mas recientes y significativos</h5>
            </div>

            <div className="flex flex-row items-center gap-[50px] justify-center w-full mt-[100px] ">
                {/* CARD */}
                <div className="flex flex-col items-center justify-start w-[400px] h-[500px] border border-solid shadow-md rounded-[18px] border-[#e5e5e5]">
                    <img src={project_1} alt="" className="w-full h-[200px]" />

                    <div className='flex flex-col items-start justify-start py-[24px] px-[14px] '>
                        <div className='flex flex-col items-start justify-center gap-[5px] mb-[30px]'>
                            <h3 className='text-[24px] font-bold'>E-commerce Platform</h3>
                            <h4>Plataforma completa de comercio electronico con panel de administracion, pasarela de pagos y gestion de inventario.</h4>
                        </div>
                        <div className='flex flex-col items-center  self-center justify-center gap-[30px]'>

                            <div className='flex flex-row items-center justify-center gap-[30px]'>
                                <p>Next js</p>
                                <p>TypeScript</p>
                                <p>Stripe</p>
                                <p>PostgreSQL</p>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-[5px]'>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[6px]'>
                                    <GoLinkExternal size={20} color='#007bff' />
                                    <span className='text-[#007bff]'>Demo</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#e5e5e5] rounded-[6px]'>
                                    <IoCodeSlashOutline size={20} />
                                    <span >Codigo</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* CARD */}

                {/* CARD */}
                <div className="flex flex-col items-center justify-start w-[400px] h-[500px] border border-solid shadow-md rounded-[18px] border-[#e5e5e5]">
                    <img src={project_1} alt="" className="w-full h-[200px]" />

                    <div className='flex flex-col items-start justify-start py-[24px] px-[14px] '>
                        <div className='flex flex-col items-start justify-center gap-[5px] mb-[30px]'>
                            <h3 className='text-[24px] font-bold'>E-commerce Platform</h3>
                            <h4>Plataforma completa de comercio electronico con panel de administracion, pasarela de pagos y gestion de inventario.</h4>
                        </div>
                        <div className='flex flex-col items-center  self-center justify-center gap-[30px]'>

                            <div className='flex flex-row items-center justify-center gap-[30px]'>
                                <p>Next js</p>
                                <p>TypeScript</p>
                                <p>Stripe</p>
                                <p>PostgreSQL</p>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-[5px]'>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[6px]'>
                                    <GoLinkExternal size={20} color='#007bff' />
                                    <span className='text-[#007bff]'>Demo</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#e5e5e5] rounded-[6px]'>
                                    <IoCodeSlashOutline size={20} />
                                    <span >Codigo</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* CARD */}

                {/* CARD */}
                <div className="flex flex-col items-center justify-start w-[400px] h-[500px] border border-solid shadow-md rounded-[18px] border-[#e5e5e5]">
                    <img src={project_1} alt="" className="w-full h-[200px]" />

                    <div className='flex flex-col items-start justify-start py-[24px] px-[14px] '>
                        <div className='flex flex-col items-start justify-center gap-[5px] mb-[30px]'>
                            <h3 className='text-[24px] font-bold'>E-commerce Platform</h3>
                            <h4>Plataforma completa de comercio electronico con panel de administracion, pasarela de pagos y gestion de inventario.</h4>
                        </div>
                        <div className='flex flex-col items-center  self-center justify-center gap-[30px]'>

                            <div className='flex flex-row items-center justify-center gap-[30px]'>
                                <p>Next js</p>
                                <p>TypeScript</p>
                                <p>Stripe</p>
                                <p>PostgreSQL</p>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-[5px]'>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[6px]'>
                                    <GoLinkExternal size={20} color='#007bff' />
                                    <span className='text-[#007bff]'>Demo</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#e5e5e5] rounded-[6px]'>
                                    <IoCodeSlashOutline size={20} />
                                    <span >Codigo</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* CARD */}

                {/* CARD */}
                <div className="flex flex-col items-center justify-start w-[400px] h-[500px] border border-solid shadow-md rounded-[18px] border-[#e5e5e5]">
                    <img src={project_1} alt="" className="w-full h-[200px]" />

                    <div className='flex flex-col items-start justify-start py-[24px] px-[14px] '>
                        <div className='flex flex-col items-start justify-center gap-[5px] mb-[30px]'>
                            <h3 className='text-[24px] font-bold'>E-commerce Platform</h3>
                            <h4>Plataforma completa de comercio electronico con panel de administracion, pasarela de pagos y gestion de inventario.</h4>
                        </div>
                        <div className='flex flex-col items-center  self-center justify-center gap-[30px]'>

                            <div className='flex flex-row items-center justify-center gap-[30px]'>
                                <p>Next js</p>
                                <p>TypeScript</p>
                                <p>Stripe</p>
                                <p>PostgreSQL</p>
                            </div>
                            <div className='flex flex-row items-center justify-center gap-[5px]'>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#007bff] rounded-[6px]'>
                                    <GoLinkExternal size={20} color='#007bff' />
                                    <span className='text-[#007bff]'>Demo</span>
                                </div>
                                <div className='flex flex-row items-center justify-center gap-[10px] border-2 px-[50px] py-[6px] cursor-pointer border-solid border-[#e5e5e5] rounded-[6px]'>
                                    <IoCodeSlashOutline size={20} />
                                    <span >Codigo</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* CARD */}

                

            </div>
        </section>
    )
}

export default Projects;