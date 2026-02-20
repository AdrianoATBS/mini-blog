import { UserPerfil } from "../../types/UserPerfil";
import Link from "next/link";
export default function InformacaoUsers({ user }: { user: UserPerfil }) {
    return(
        <div className="bg-card border border-borda rounded-2xl p-8 shadow-sm flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h2 className="titulo-secao text-titulo">{user.name}</h2>
                <p className="texto-suave">Empresa: {user.company.name}</p>
                
                <div className="border-t border-borda"/>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="texto-suave">Email</span>
                        <span className="texto-base">{user.email}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="texto-suave">Telefone</span>
                        <span className="texto-base">{user.phone}</span>
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2">
                        <span className="texto-suave">Website</span>
                                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer"
                                    className="text-acoes-primaria hover:underline">{user.website}</a>
                            </div>
                </div>
            </div>
        </div>

    )
}