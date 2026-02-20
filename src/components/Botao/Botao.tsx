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
            <button type={type} onClick={onClick} disabled={disabled} className="border bg-acoes-primaria rounded-lg 
            px-4 text-white hover:bg-hover hover:transform active:scale-95
            font-[--fonte-texto-geral] disabled:opacity-50 disabled:cursor-not-allowed 
           
            ">
                {texto}
            </button>
           
        </>
    )
}