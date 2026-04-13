import { ReactNode } from "react";

type Type = "button" | "submit";
   
interface BotaoProps {
    texto: ReactNode; 
    onClick?: () => void;
    disabled?: boolean;
    type?: Type;
    className?: string;
    semHover?: boolean;
    semRing?: boolean;
};

export default function Botao({ texto, onClick, disabled, type = "button", className, semHover, semRing }: BotaoProps) {

    return(
        
        <>
            <button type={type} onClick={onClick} disabled={disabled} className={`h-10 px-5 rounded-full
            bg-acoes-primaria text-white text-suave shadow-sm 
            transition duration-200
            ${!semHover && 'hover:bg-hover hover:shadow-md'}
            active:scale-95 focus:outline-none focus:ring-2 
            ${!semRing && 'focus:ring-acoes-primaria'} disabled:opacity-50
            disabled:cursor-not-allowed ${className || ''}`}>
                {texto}
            </button>
           
        </>
    )
}