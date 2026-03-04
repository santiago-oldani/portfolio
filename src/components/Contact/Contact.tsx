import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";
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
        <div className="flex flex-col py-[80px] max-[970px]:py-[70px] items-center justify-start gap-[50px] max-[970px]:gap-[20px] min-h-screen">

            {/* HEADER */}
            <div className='flex flex-col items-center justify-center pt-[25px] max-[970px]:pt-[5px]'>
                <div className='flex flex-row items-center justify-center gap-[15px]'>
                    <h2 className='text-[42px] max-[1500px]:text-[32px] max-[450px]:text-[26px] font-semibold m-[0px] text-center'>Contacto</h2>
                    <img src={icon} alt="" className='w-[60px] pt-[15px] max-[1500px]:w-[40px] max-[450px]:text-[30px]' />
                </div>

                <h5 className='text-[20px] text-gray-600 m-[0px] max-[970px]:text-[16px] max-[450px]:text-[14px] text-center'>
                    Hablemos sobre tu próximo proyecto o una oportunidad laboral.
                </h5>
            </div>

            {/* CONTENIDO */}
            <div className="flex flex-row items-start justify-center gap-x-[50px] 
                    max-[970px]:flex-col 
                    max-[970px]:items-center 
                    max-[970px]:gap-y-[25px] 
                    w-full">

                {/* FORM */}
                <form
                    className="flex flex-col items-center justify-between 
                   w-[450px] h-[500px] 
                   max-[970px]:w-[92%] 
                   max-[970px]:h-auto 
                   border border-solid rounded-[16px] 
                   border-[#e5e5e5] shadow-md 
                   py-[25px] px-[20px] 
                   max-[970px]:py-[20px] 
                   gap-[20px]"
                    onSubmit={(e) => { handleSubmit(e) }}
                >

                    <h3 className="text-[30px] max-[970px]:text-[22px] font-semibold">
                        Envíame un mensaje
                    </h3>

                    {cannotSend ? (
                        <p className="text-[#ff0000] px-[16px] text-center text-[10px] font-semibold max-[970px]:text-[0.7rem]">
                            *El nombre tiene que tener más de 3 carácteres, el mail tiene que ser válido y el mensaje tiene que tener contenido*
                        </p>
                    ) : null}

                    <div className="flex flex-row max-[970px]:flex-col items-center justify-center gap-8 max-[970px]:gap-4 w-full">

                        <div className="flex flex-col items-start justify-center gap-2 w-full max-w-[170px] max-[970px]:max-w-full">
                            <label className="max-[970px]:text-[0.9rem]" htmlFor="fullname">Nombre y apellido</label>
                            <input
                                id="fullname"
                                name="fullname"
                                placeholder="Nombre completo"
                                value={form.fullname}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                className="border border-2 border-solid rounded-[8px] w-full border-[#eff2f6] py-[6px] px-[12px] max-[970px]:text-[0.9rem]"
                            />
                        </div>

                        <div className="flex flex-col items-start justify-center gap-2 w-full max-w-[170px] max-[970px]:max-w-full">
                            <label htmlFor="email" className="max-[970px]:text-[0.9rem]">Email</label>
                            <input
                                id="email"
                                name="email"
                                placeholder="tu@email.com"
                                value={form.email}
                                onChange={(e) => handleChange(e)}
                                type="email"
                                className="border border-2 border-solid rounded-[8px] w-full border-[#eff2f6] py-[6px] px-[12px] max-[970px]:text-[0.9rem]"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col items-start justify-center gap-2 w-[370px] max-[970px]:w-full">
                        <label className="max-[970px]:text-[0.9rem]">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={(e) => handleChange(e)}
                            placeholder="Cuentame sobre tu proyecto..."
                            className="border border-2 border-solid rounded-[8px] border-[#eff2f6] 
                       w-full 
                       h-[150px] 
                       max-[970px]:h-[90px] 
                       p-3 resize-none 
                       max-[970px]:text-[0.9rem]"
                        />
                    </div>

                    <button
                        className="bg-[#fff] text-[#000] px-4 py-2 
                     rounded-lg cursor-pointer 
                     hover:border-[#0069d9] 
                     border border-2 border-solid 
                     border-[#eff2f6] transition 
                     max-[970px]:text-[0.9rem]"
                    >
                        Enviar Mensaje
                    </button>

                </form>

                {/* LINKS */}
                <div className="flex flex-col items-center justify-center gap-[20px] 
                max-[970px]:gap-[15px] 
                w-[450px] 
                max-[970px]:w-[92%] 
                max-[970px]:max-h-[120px] max-[970px]:justify-start
                max-[970px]:overflow-y-auto">

                    <div
                        onClick={() => handleCopy('santioldani08@gmail.com')}
                        className="flex flex-row relative items-center cursor-pointer justify-start 
                     w-full border border-solid rounded-[8px] 
                     border-[#e5e5e5] shadow-md 
                     py-[20px] px-[40px] 
                     max-[970px]:py-[14px] 
                     max-[970px]:px-[25px] 
                     gap-5"
                    >
                        <IoMailUnreadOutline color="#007bff" size={30} className="flex-shrink-0 max-[970px]:w-[22px] max-[970px]:h-[22px]" />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="font-semibold max-[970px]:text-[0.95rem]">Email</h3>
                            <p className="max-[970px]:text-[0.85rem]  truncate max-[970px]:max-w-[180px]">Clickea para copiar en el portapapeles</p>
                            <IoMdLink className="color-[#007bff] absolute right-[50px] max-[970px]:w-[20px] max-[970px]:h-[20px]" size={25} color="#007bff" />
                        </div>
                    </div>

                    <a target="_blank" href="https://github.com/santiago-oldani" className="w-full">
                        <div className="flex flex-row relative items-center cursor-pointer justify-start 
                         w-full border border-solid rounded-[8px] 
                         border-[#e5e5e5] shadow-md 
                         py-[20px] px-[40px] 
                         max-[970px]:py-[14px] 
                         max-[970px]:px-[25px] 
                         gap-5">
                            <VscGithub color="#007bff" size={30} className="flex-shrink-0 max-[970px]:w-[22px] max-[970px]:h-[22px]" />
                            <div className="flex flex-col items-start justify-center">
                                <h3 className="font-semibold max-[970px]:text-[0.95rem]">GitHub</h3>
                                <p className="max-[970px]:text-[0.85rem]">github.com/santiago-oldani</p>
                                <GoLinkExternal className="color-[#007bff] absolute right-[50px] max-[970px]:w-[20px] max-[970px]:h-[20px]" size={25} color="#007bff" />
                            </div>
                        </div>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/santioldani/" className="w-full">
                        <div className="flex flex-row relative items-center cursor-pointer justify-start 
                         w-full border border-solid rounded-[8px] 
                         border-[#e5e5e5] shadow-md 
                         py-[20px] px-[40px] 
                         max-[970px]:py-[14px] 
                         max-[970px]:px-[25px] 
                         gap-5">
                            <CiLinkedin color="#007bff" size={30} className="flex-shrink-0 max-[970px]:w-[22px] max-[970px]:h-[22px]" />
                            <div className="flex flex-col items-start justify-center">
                                <h3 className="font-semibold max-[970px]:text-[0.95rem]">LinkedIn</h3>
                                <p className="max-[970px]:text-[0.85rem]">linkedin.com/in/santioldani</p>
                                <GoLinkExternal className="color-[#007bff] absolute right-[50px] max-[970px]:w-[20px] max-[970px]:h-[20px]" size={25} color="#007bff" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;