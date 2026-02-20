type Type = "button" | "submit";
   
interface BotaoProps {
    texto: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: Type;
};

export default function Botao({ texto, onClick, disabled, type = "button" }: BotaoProps) {

    return(
        
        <>
            <button type={type} onClick={onClick} disabled={disabled} className="h-10 px-5 rounded-full
            bg-acoes-primaria text-white text-suave shadow-sm 
            transition duration-200 hover:bg-hover hover:shadow-md
            active:scale-95 focus:outline-none focus:ring-2 
            focus:ring-acoes-primaria disabled:opacity-50
            disabled:cursor-not-allowed
           
            ">
                {texto}
            </button>
           
        </>
    )
}