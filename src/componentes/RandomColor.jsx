import { useState } from "react"
import { ThemeColor } from "./ThemeColor"


export const RandomColor = () =>{
    const [mensaje, setMensaje] = useState("");
    const [colorInicial, setcolorInicial] = useState("#FFFFFF");
    const colorAleatorio = () =>{
        let numeral = "#";
        let hexadecimal = "0A1B2C3D4E5F6789";
        
        for (let index = 0; index <6 ; index++) {
            const numeroAleatorio = Math.floor(Math.random()* 16);
            const colores = (numeral += hexadecimal[numeroAleatorio]);
            setcolorInicial(colores);
            console.log(colores);
        }
    }

    const copyColor = async() =>{
        if (navigator.clipboard){
            await navigator.clipboard.writeText(colorInicial);
            setMensaje("Copiado");

            setTimeout(()=> setMensaje(""), 1000);
        }
    }
    
    return(
        <>
        <section className="flex justify-center items-center flex-col h-screen">
            <ThemeColor color={colorInicial}/>
            <button onClick={colorAleatorio} className="bg-sky-600 p-4 font-sans flex gap-2 mt-5">Click</button>
            <pre className="bg-zinc-800 mt-4 rounded shadow w-32 text-white  text-center hover:cursor-pointer font-black" onClick={copyColor}>
                <code className="p-4">{colorInicial}</code>
            </pre>
            <abbr>{mensaje}</abbr>
        </section>
        </>
    )
}