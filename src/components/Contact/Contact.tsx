import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { FiAlertCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";
import { FiX } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import { IoMdLink } from "react-icons/io";

interface Formulary {
    fullname: string;
    email: string;
    message: string;
}

const formularyObject: Formulary = {
    fullname: "",
    email: "",
    message: ""
}



const Contact: React.FC = () => {
    const [form, setForm] = useState(formularyObject);
    const [isSuccess, setIsSuccess] = useState(false);
    const [statusForm, setStatusForm] = useState(0);
    const [cannotSend, setCannotSend] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        function showDivSuccess(status: number): void {
            setIsSuccess(true);
            setStatusForm(status);
            setTimeout(() => {
                setIsSuccess(false);
            }, 10000)
        }

        if (form.fullname.length >= 3 && form.message.length > 0 && form.email.includes("@") && form.email.includes(".com")) {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })
            showDivSuccess(response.status);
            setForm(formularyObject);
        } else{
            setCannotSend(true);
        }
    }


    return (
        <div className="flex flex-col py-[100px] items-center justify-center gap-[50px]">
            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <h2 className='text-[42px] font-semibold m-[0px]'>Contacto</h2>
                <h5 className='text-[20px] m-[0px]'>Contactame por si necesitas algo</h5>
            </div>

            <div className="flex flex-row items-start justify-center gap-x-[50px]">

                <form className="flex flex-col items-center justify-between w-[450px] h-[500px] border border-1 border-solid rounded-[16px] border-[#e5e5e5] shadow-md py-[20px]" onSubmit={(e) => { handleSubmit(e) }}>
                    <h3 className="text-[30px] font-semibold">Envíame un mensaje</h3>
                    {cannotSend ? <p className="text-[#ff0000] px-[16px] text-center text-[14px] font-semibold">*El nombre tiene que tener más de 3 carácteres, el mail tiene que ser válido y el mensaje tiene que tener contenido*</p> : null}
                    <div className="flex flex-row items-center justify-center gap-8">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label htmlFor="fullname">Nombre y apellido</label>
                            <input id="fullname" name="fullname" placeholder="Nombre completo" value={form.fullname} onChange={(e) => handleChange(e)} type="text" className="border border-2 border-solid rounded-[8px] w-[170px] border-[#eff2f6] py-[5px] px-[12px]" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" placeholder="tu@email.com" value={form.email} onChange={(e) => handleChange(e)} type="email" className="border border-2 border-solid rounded-[8px] w-[170px] border-[#eff2f6] py-[5px] px-[12px]" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2 w-[370px]">
                        <label htmlFor="">Mensaje</label>
                        <textarea id="message" name="message" value={form.message} onChange={(e) => handleChange(e)} placeholder="Cuentame sobre tu proyecto..."
                            className="border border-2 border-solid rounded-[8px] border-[#eff2f6] w-[370px] h-[150px] p-3 text-start align-top resize-none" />
                    </div>


                    <button className="bg-[#fff] text-[#000] px-4 py-2 rounded-lg cursor-pointer hover:border-[#0069d9] border border-2 border-solid rounded-[8px] border-[#eff2f6] transition">Enviar Mensaje</button>
                    {isSuccess ? <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className={`flex flex-row ${statusForm === 200 ? 'bg-[#45913d]' : 'bg-[#b80606]'}  items-center justify-center gap-[12px] py-[10px] px-[20px] rounded-[12px]`}>
                        {statusForm === 200 ? <GrStatusGood size={20} color="#fff" /> : <FiAlertCircle size={20} color="#fff" />}
                        <p className="text-[#fff]">{statusForm === 200 ? "¡El mensaje se ha enviado exitosamente!" : "Ocurrió un error al enviar el mensaje"}</p>
                        <FiX onClick={() => setIsSuccess(false)} className="cursor-pointer" color="#fff" size={25}/>
                    </motion.div> : null}
                </form>

                <div className="flex flex-col items-center justify-center gap-[20px]">
                    <div className="flex flex-row relative items-center cursor-pointer justify-start w-[450px] border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <IoMailUnreadOutline color="#007bff" size={30} />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold">Email</h3>
                            <p>Clickea para copiar en el portapapeles</p>
                            <IoMdLink className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff"/>
                        </div>

                    </div>
                    <div className="flex flex-row relative items-center justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <VscGithub color="#007bff" size={30} />
                        <div className="flex flex-col items-start  justify-center">
                            <h3 className="font-semibold">GitHub</h3>
                            <p>github.com/santiago-oldani </p>
                            
                        </div>
                        <GoLinkExternal className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff"/>
                    </div>
                    <div className="flex flex-row relative items-center justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <CiLinkedin color="#007bff" size={30} />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold">LinkedIn</h3>
                            <p>linkedin.com/in/santioldani</p>
                            <GoLinkExternal className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff"/>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;