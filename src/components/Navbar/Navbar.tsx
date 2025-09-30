
function Navbar() {
    return (
        <nav className="flex flex-row fixed bg-white z-50 top-0 justify-self-center mt-[20px] justify-between items-center w-[90%] rounded-[12px] px-[20px] shadow-sm h-[80px] border-b border-solid border-[#e5e5e5]">
                <h1 className="font-bold text-[22px]"><span className="text-[#007bff] font-bold">Dev</span>Portfolio</h1>
                <ul className="flex flex-row justify-between w-[20%]">
                    <li>Inicio</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
        </nav>
    )
}

export default Navbar