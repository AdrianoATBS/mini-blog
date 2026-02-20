'use client';
import Botao from "@/components/Botao/Botao";
import Formulario from "@/components/Formulario/Formulario";
import { useRouter } from "next/navigation";
export default function Login(){
    const router = useRouter();

     const handleVoltar = () => {
        router.push("/");
    }
 
    return(
        <>
            <div className="pl-5 pt-6">
            <Botao texto="Voltar" onClick={handleVoltar} />
            </div>

            <Formulario 
            titulo="Login"
            campos={[
                { name: "email", label: "Email", type: "email", placeholder: "Digite seu email" },
                { name: "password", label: "Senha", type: "password", placeholder: "Digite sua senha" },
            ]}  />
        </>
    )
}