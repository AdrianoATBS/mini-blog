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
    semBackground?: boolean;
    semWhite?: boolean;
  
};

export default function Botao({ texto, onClick, disabled, type = "button", className, 
    semHover, semRing, semBackground, semWhite }: BotaoProps) {

    return(
        
        <>
            <button type={type} onClick={onClick} disabled={disabled} 
            className={`h-10 px-5 rounded-full
            ${!semBackground && 'bg-acoes-primaria'} ${!semWhite && 'text-white'} text-suave 
            transition duration-200
            ${!semHover && 'hover:bg-hover hover:shadow-md'}
            active:scale-95 focus:outline-none  
            ${!semRing && 'focus:ring-acoes-primaria focus:ring-2'} disabled:opacity-50
            disabled:cursor-not-allowed ${className || ''}`}>
                {texto}
            </button>
           
        </>
    )
}