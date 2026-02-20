import Link from "next/link";
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
            <section className=" bg-card p-6 rounded-xl border border-borda 
            shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Link className="font-bold titulo-card
                    text-xl hover:text-acoes-primaria transition duration-300" 
                    href={`/posts/${postId}`}>{titulo}</Link>
                    
                    <p className="text-texto-secundario  line-clamp-3 mt-3
                    texto-base">{conteudo}</p>
                   
                    <Link 
                        href={`/users/${userId}`} 
                        className="text-xs text-texto-secundario mt-4 block titulo-card
                         hover:text-acoes-primaria transition duration-400">{autor}
                    </Link>
                </section>
        </>
    )
}