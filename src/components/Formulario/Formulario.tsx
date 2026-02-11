'use client';
import Botão from "@/components/Botao/Botao";
type Campo ={
    name: string;
    label: string;
    type: "text" | "email" | "password";
    placeholder?: string;
}

interface FormularioProps {
    campos: Campo[];
   
}

export default function Formulario({ campos }: FormularioProps) {
    const handleSubmit =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado");
    }   
    return(

        <div className="flex justify-center items-center pt-4 flex-col gap-6 ">
            <h1 className='text-titulo font-[--fonte-titulo] text-2xl'>Registro</h1>
            <form onSubmit={handleSubmit} className='border border-borda rounded-2xl p-6 shadow-md'>
                {campos.map((campo) => (
                    <div key={campo.name} className='mb-4 flex flex-col gap-2 '>
                        <label htmlFor={campo.name} className='text-texto-principal font-[--fonte-texto-geral]'>{campo.label}</label>
                        <input type={campo.type} id={campo.name} name={campo.name} placeholder={campo.placeholder} 
                        className='border border-borda rounded-md p-2 text-texto-secundario font-[--fonte-texto-geral]' />
                    </div>
                ))}
                <div className="flex justify-center items-center">

                <Botão texto="Enviar" type="submit" />
                </div>
            </form>
        </div>
    )
}