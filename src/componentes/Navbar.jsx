import imagen from "../assets/magnify-map-svgrepo-com.svg"
export const Navbar = () =>{
    return(
        <nav className="bg-red-500 shadow flex justify-start items-center gap-2">
            <img src={imagen} alt="Colores express" className="w-24 h-20"/>
            <h1 className="text-slate-50 font-bold text-3xl font-sans">Colores Express</h1>
        </nav>
    )
}