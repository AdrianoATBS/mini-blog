interface BotaoProps {
    texto: string;
    onClick?: () => void;
};

export default function Botao({ texto, onClick }: BotaoProps) {
    return(
        <>
            <button onClick={onClick} className="border bg-acoes-primaria rounded-full 
            px-4 text-white  hover:bg-hover hover:transform hover:scale-95">{texto}
            </button>
           
        </>
    )
}