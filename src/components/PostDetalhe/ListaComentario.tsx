
import {Comentario} from "@/types/Comentario";

export default function ListaComentarios({comentarios}: {comentarios: Comentario[]})
{
    return(
       <div className="max-w-3xl mx-auto px-6 py-10">
            <h2 className="titulo-secao">Comentários</h2>

            <div className="flex flex-col gap-6">
                {comentarios.map((comentario) => (
                    <div key={comentario.id} className="bg-card border border-borda rounded-xl
                    p-6 shadow-sm flex flex-col gap-3">
                        <h3 className="font-medium text-titulo">{comentario.name}</h3>
                        <span className="texto-suave">{comentario.email}</span>
                        <p className="texto-base">{comentario.body}</p>
                    </div>
                ))}
            </div>

       </div>
    )
}