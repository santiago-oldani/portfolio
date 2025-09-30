import { IoLogoGithub } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import download from '../../assets/icons/image.png'

function Welcome() {


    return (
        <section className="w-full h-[calc(100vh-200px)] snap-start pt-[100px] pb-[50px] row-start-2 flex flex-col justify-between items-center">
            <div className="inline-block leading-tight shadow-md border font-semibold border-[#e5e5e5] mt-[16px] rounded-[18px] px-[24px] py-[10px] text-center">
                Disponible para proyectos
            </div>
            
            <div className='flex flex-col items-center h-auto justify-center'>
                <h1 className='text-[98px] font-bold m-[0px]'>Desarrollador </h1>
                <h1 className='text-[#007bff] text-[98px] font-bold m-[0px]'>Fullstack</h1>
            </div>

            <h4 className="text-[20px] w-[600px] text-center">
                Especializado en crear experiencias web modernas y escalables.
                Desde interfaces elegantes hasta arquitecturas robustas de backend.
            </h4>

            <div className="flex flex-row items-center gap-[60px] justify-center">
                <div className="font-bold">
                    Contactar
                </div>
                <div className="flex flex-row gap-[10px] text-[#007bff] items-center justify-center  border-[2px] border-solid border-[#007bff] px-[28px] py-[10px] rounded-[8px]">
                    <img src={download}/>
                    Descargar CV 
                </div>
            </div>
            
            <div className='flex flex-row gap-[20px]'>
                <a href="https://github.com/santiago-oldani">
                <div className='flex items-center justify-center shadow-md p-[15px] border border-solid border-[#e5e5e5] rounded-[50%]'>
                    <IoLogoGithub size={32} />
                </div>
                </a>
                <a href="https://www.linkedin.com/in/santioldani/">
                <div className='flex items-center justify-center p-[15px] shadow-md border border-solid border-[#e5e5e5] rounded-[50%]'>
                    <ImLinkedin size={32}/>
                </div>
                </a>
            </div>

        </section>
    )
}

export default Welcome;