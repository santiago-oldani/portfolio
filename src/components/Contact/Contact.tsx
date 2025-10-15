import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col py-[100px] items-center justify-center gap-[50px]">
            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <h2 className='text-[42px] font-semibold m-[0px]'>Contacto</h2>
                <h5 className='text-[20px] m-[0px]'>Contactame por si necesitas algo</h5>
            </div>

            <div className="flex flex-row items-start justify-center gap-x-[50px]">

                <form className="flex flex-col items-center justify-between w-[450px] h-[500px] border border-1 border-solid rounded-[16px] border-[#e5e5e5] shadow-md py-[20px]" action="">
                    <h3 className="text-[30px] font-semibold">Enviame un mensaje</h3>
                    <div className="flex flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label htmlFor="">Nombre y apellido</label>
                            <input placeholder="Nombre completo" type="text" className="border border-2 border-solid rounded-[8px] w-[170px] border-[#eff2f6] py-[5px] px-[12px]" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label htmlFor="">Email</label>
                            <input placeholder="tu@email.com" type="email" className="border border-2 border-solid rounded-[8px] w-[170px] border-[#eff2f6] py-[5px] px-[12px]" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2 w-[370px]">
                        <label htmlFor="">Mensaje</label>
                        <textarea placeholder="Cuentame sobre tu proyecto..."
                            className="border border-2 border-solid rounded-[8px] border-[#eff2f6] w-[370px] h-[150px] p-3 text-start align-top resize-none" />
                    </div>


                    <button className="bg-[#fff] text-[#000] px-4 py-2 rounded-lg cursor-pointer hover:border-[#0069d9] border border-2 border-solid rounded-[8px] border-[#eff2f6] transition">Enviar Mensaje</button>

                </form>

                <div className="flex flex-col items-center justify-center gap-[20px]">
                    <div className="flex flex-row items-center cursor-pointer justify-start w-[450px] border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <IoMailUnreadOutline color="#007bff" size={30} />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold">Email</h3>
                            <p>Clickea para copiar en el portapapeles</p>
                        </div>

                    </div>
                    <div className="flex flex-row items-center justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <VscGithub color="#007bff" size={30} />
                        <div className="flex flex-col items-start  justify-center">
                            <h3 className="font-semibold">GitHub</h3>
                            <p>github.com/santiago-oldani</p>
                        </div>

                    </div>
                    <div className="flex flex-row items-center justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <CiLinkedin color="#007bff" size={30} />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold">LinkedIn</h3>
                            <p>linkedin.com/in/santioldani</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;