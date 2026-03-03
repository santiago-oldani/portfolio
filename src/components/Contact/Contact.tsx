import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { FiAlertCircle } from "react-icons/fi";
import { motion } from "motion/react";
import { FiX } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import { IoMdLink } from "react-icons/io";
import icon from '../../assets/icons/aboutme.svg';
import toast from "react-hot-toast";

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
    const [cannotSend, setCannotSend] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = form.fullname.length >= 3 &&
            form.message.length > 0 &&
            form.email.includes("@") &&
            form.email.includes(".com");

        if (!isValid) {
            setCannotSend(true);
            toast.error("Por favor, revisá los campos del formulario");
            return;
        }

        setCannotSend(false);

        toast.promise(
            fetch(`http://localhost:3000/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            }).then(async (res) => {
                if (!res.ok) throw new Error();
                setForm(formularyObject);
                return res;
            }),
            {
                loading: 'Enviando mensaje...',
                success: '¡Mensaje enviado con éxito!',
                error: 'Ocurrió un error al enviar el mensaje',
            },
            {
                style: { minWidth: '250px' },
                success: { duration: 4000 }
            }
        );
    };

    const handleCopy = async (texto: string) => {
        try {
            await navigator.clipboard.writeText(texto);
            toast.success('¡Copiado con éxito!', {
                style: {
                    border: '1px solid #28a745',
                    padding: '16px',
                    color: '#28a745',
                },
                iconTheme: {
                    primary: '#28a745',
                    secondary: '#FFFAEE',
                },
                duration: 3000
            });
        } catch (error) {
            toast.error('No se pudo copiar');
        }
    };

    return (
        <div className="flex flex-col py-[100px] items-center justify-center gap-[50px]">
            <div className='flex flex-col items-center justify-center pt-[25px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] font-semibold m-[0px]'>Contacto</h2>
                    <img src={icon} alt="" className='w-[60px] pt-[15px]' />
                </div>
                {/* Frase actualizada */}
                <h5 className='text-[20px] text-gray-600 m-[0px]'>
                    Hablemos sobre tu próximo proyecto o una oportunidad laboral.
                </h5>
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
                </form>

                <div className="flex flex-col items-center justify-center gap-[20px]">
                    <div
                        onClick={() => handleCopy('santioldani08@gmail.com')}
                        className="flex flex-row relative items-center cursor-pointer justify-start w-[450px] border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                        <IoMailUnreadOutline color="#007bff" size={30} />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold">Email</h3>
                            <p>Clickea para copiar en el portapapeles</p>
                            <IoMdLink className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff" />
                        </div>
                    </div>
                    <a target="_blank" href="https://github.com/santiago-oldani">
                        <div className="flex flex-row relative items-center cursor-pointer justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                            <VscGithub color="#007bff" size={30} />
                            <div className="flex flex-col items-start  justify-center">
                                <h3 className="font-semibold">GitHub</h3>
                                <p>github.com/santiago-oldani </p>

                            </div>
                            <GoLinkExternal className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff" />
                        </div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/santioldani/">
                        <div className="flex flex-row relative items-center cursor-pointer justify-start w-[450px]  border border-1 border-solid rounded-[8px] border-[#e5e5e5] shadow-md py-[20px] px-[40px] gap-5">
                            <CiLinkedin color="#007bff" size={30} />
                            <div className="flex flex-col items-start justify-center">
                                <h3 className="font-semibold">LinkedIn</h3>
                                <p>linkedin.com/in/santioldani</p>
                                <GoLinkExternal className="color-[#007bff] absolute right-[50px]" size={25} color="#007bff" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Contact;