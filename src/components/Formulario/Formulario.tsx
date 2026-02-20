'use client';
import Botão from "@/components/Botao/Botao";
type Campo ={
    name: string;
    label: string;
    type: "text" | "email" | "password";
    placeholder?: string;
}

interface FormularioProps {
    titulo: string;
    campos: Campo[];
   
}

export default function Formulario({ titulo, campos }: FormularioProps) {
    const handleSubmit =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado");
    }   
    return(

        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] px-4 ">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-card border border-borda
            rounded-2xl p-8 shadow-sm flex flex-col gap-6">
                <h1 className='titulo-secao text-center'>{titulo}</h1>

                {campos.map((campo) => (
                    <div key={campo.name} className='flex flex-col gap-2'>
                        <label htmlFor={campo.name} className='texto-suave font-medium'
                        >{campo.label}</label>

                        <input type={campo.type} id={campo.name} name={campo.name} 
                        placeholder={campo.placeholder} 
                        className="h-10 px-4 rounded-lg border border-borda bg-fundo
                        texto-base transition focus:outline-none focus:ring-2 focus:ring-acoes-primaria" />
                    </div>
                ))}

                <Botão texto="Enviar" type="submit" />
                
            </form>
        </div>
    )
}