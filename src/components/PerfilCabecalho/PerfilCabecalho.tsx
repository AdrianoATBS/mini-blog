'use client';
import InformacaoUsers from "../InformacaoUsers/InformacaoUsers";
import { UserPerfil } from "../../types/UserPerfil";
import Botao from "../Botao/Botao";
import {useRouter} from "next/navigation";

export default function PerfilCabecalho({ user }: { user: UserPerfil  }) {
    const router = useRouter();

    const handleVoltar = () => {
        router.push("/");
    }

    return(
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">

            <div >
                <Botao
                texto="Voltar"
                onClick={handleVoltar}
                />
            </div>

            <h1 className="titulo-principal text-center">
                Perfil do Usuário
            </h1>

            <InformacaoUsers user={user} />

        </div>
    )
}