'use client';
import Botao from "@/components/Botao/Botao";
import Checkbox from "@/components/Checkbox/Checkbox";
import Formulario from "@/components/Formulario/Formulario";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Register(){

  
    return(
        <div className="max-w-7xl mx-auto w-full pb-10 pt-10 ">
            <Formulario 
            titulo="Crie sua conta"
            texto="Junte-se à nossa comunidade de curadores editorias."    
            campos={[
                { name: "nome", label: "Nome", type: "text", placeholder: "Evelyn Harper" },
                { name: "email", label: "Email", type: "email", placeholder: "name@example.com" },
                { name: "password", label: "Senha", type: "password", placeholder: "••••••••" },
                {name: "confirmarPassword", label: "Confirmar Senha", type: "password", placeholder: "••••••••" },
            ]}  
            extra={<Checkbox label="Concordo com os Termos de Serviço e Política de Privacidade" />}
            footer={<>
                Já tem uma conta? 
                <Link href="/login" className='text-acoes-primaria font-medium'> Faça login</Link>
            </>}
           
            submitText="Criar uma Conta ->"
            />
        </div>
    )
}