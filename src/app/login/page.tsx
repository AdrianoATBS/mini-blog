'use client';
import Formulario from "@/components/Formulario/Formulario";
import Checkbox from "@/components/Checkbox/Checkbox";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

export default function Login(){
   
 
    return(
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-10">
            <Formulario 
            titulo="Bem vindo de volta!"
            texto="Continue sua jornada"
            campos={[
                { name: "email", label: "Email", type: "email", placeholder: "name@example.com", icon: <MdOutlineEmail /> },
                { name: "password", label: "Senha", type: "password", placeholder: "••••••••", icon: <TbLockPassword /> },
            ]}  
            extra={<Checkbox label="Matenha-me conectado" />}
            footer="Ainda não tem uma conta?"
            footerLink="Cadastrar-se"
            />
        </div>
    )
}