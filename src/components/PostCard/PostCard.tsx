import Link from "next/link";
import { getUsers } from "@/service/users.service";
interface PostCardProps {
    titulo: string;
    conteudo: string;
    autor: string;
    userId: number;
    postId: number;
}
export default function PostCard({titulo, conteudo, autor, userId, postId}: PostCardProps) {
    return(
        <>
            <section className=" bg-card p-4 rounded-lg border border-borda">
                    <Link className="text-titulo font-semibold font-[--fonte-texto-geral]" 
                    href={`/posts/${postId}`}>{titulo}</Link>
                    <p className="text-texto-secundario text-sm mt-1 font-[--fonte-texto-geral]">{conteudo}</p>
                   
                    <Link 
                        href={`/users/${userId}`} 
                        className="text-xs text-acoes-secundaria mt-2 block font-[--fonte-texto-geral]">{autor}
                    </Link>
                </section>
        </>
    )
}