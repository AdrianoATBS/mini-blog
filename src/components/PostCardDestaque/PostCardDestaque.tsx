
import { Post } from "@/types/Post";
import Image from "next/image";
export default function PostCardDestaque({ post }: { post: Post }) {
    const imageUrl = `https://picsum.photos/600/300?random=${post.id}`;
    
    const diasPassados = Math.floor(post.id % 30) + 1;
    const dataAleatoria = new Date();
    dataAleatoria.setDate(dataAleatoria.getDate() - diasPassados);
    
    const palavras = post.body.split(/\s+/).length;
    const minutos = Math.ceil(palavras / 200);

    return(
        <div className="border border-borda rounded-xl overflow-hidden shadow-lg lg:row-span-2 ">
            <div className="w-full h-52 object-cover relative">
                <Image src={imageUrl} alt="Imagem do post"
                fill
                className="object-cover"/>
            </div>
            <div className="flex flex-col p-6 mb-4">
                <div className="flex items-center gap-7 pb-2 ">
                    <span className="texto-suave">{dataAleatoria.toLocaleDateString('pt-BR')}</span>
                    <span className="texto-suave">{minutos} min de leitura</span>
                </div>

                <h2 className="titulo-card text-start pb-3">{post.title}</h2>
                <p className="texto-suave text-start">{post.body}</p>
            </div>
        </div>
    )
} 