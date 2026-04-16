'use client';
import Botão from "@/components/Botao/Botao";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
type Campo ={
    name: string;
    label: string;
    type: "text" | "email" | "password";
    placeholder?: string;
    icon?: ReactNode;
}

interface FormularioProps {
    titulo: string;
    texto?: string;
    extra?: ReactNode;
    footer?:string
    footerLink?: string;
    submitText?: string;
    campos: Campo[];
   
}

export default function Formulario({ titulo, campos, texto, extra, footer, footerLink, submitText }: FormularioProps) {
    const router = useRouter();

    const handleSubmit =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado");
    }  
    const handleVoltar = () => {
        router.push("/");
    }
    return(

        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] px-4 ">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-card border border-borda
            rounded-2xl p-8 shadow-sm flex flex-col gap-3">
                <div className="flex justify-center ">
                    <Botão texto={<IoArrowUndoSharp className="text-acoes-primaria" />} onClick={handleVoltar}
                    semHover 
                    semRing
                    className="bg-acoes-primaria/30 shadow-none cursor-pointer active:scale-95 rounded-lg
                    transition-none focus:ring-0"/>
                </div>

                <h1 className='titulo-secao text-center'>{titulo}</h1>
                {texto && <p className='texto-suave text-center'>{texto}</p>}
                
                {campos.map((campo) => (
                    <div key={campo.name} className='flex flex-col gap-2'>
                        <label htmlFor={campo.name} className='texto-suave font-medium '
                        >{campo.label}</label>

                        <div className="relative">
                            {campo.icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-acoes-primaria">
                                {campo.icon}
                            </div>}
                            
                            <input type={campo.type} id={campo.name} name={campo.name} 
                            placeholder={campo.placeholder} 
                            className={`h-10 w-full px-4 rounded-lg border border-borda bg-acoes-secundaria/10
                            texto-base transition focus:outline-none focus:ring-2 focus:ring-acoes-primaria
                            ${campo.icon ? 'pl-10' : 'pl-4'}`} />
                        </div>

                    </div>
                ))}

                {extra && <div className='texto-suave text-center accent-acoes-primaria border-borda'>{extra}</div>}
                <Botão texto={submitText || "Enviar "} type="submit" />
                
                {footer && <p className='texto-suave text-center'>
                    {footer} {" "}
                <Link href={footerLink || "/register"} className="text-acoes-primaria hover:underline">
                    {footerLink}
                </Link></p>}
            </form>
        </div>
    )
}