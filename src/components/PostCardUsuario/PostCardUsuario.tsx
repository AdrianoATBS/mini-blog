"use client";
import { Post } from "@/types/Post";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useState } from "react";
interface PostCardUsuarioProps {
    posts: Post;
}


export default function PostCardUsuario({posts} : PostCardUsuarioProps) {
    const diasPassados = Math.floor(posts.id % 30) + 1;
    const dataAleatoria = new Date();
    dataAleatoria.setDate(dataAleatoria.getDate() - diasPassados);

    const palavras = posts.body.split(/\s+/).length;
    const minutos = Math.ceil(palavras / 200);

    const [salvo, setSalvo] = useState(false);
    
    return(
        <div className="bg-card border border-borda rounded-xl p-6 shadow-sm 
            hover:shadow-md transition duration-200 flex flex-col gap-4  col-span-1">
        
            <h3 className="titulo-card text-start">{posts.title}</h3>
            <div className=" flex justify-between items-center+ border-t border-borda pt-5 ">
                <div className="flex gap-4">
                    <span className="texto-suave ">{dataAleatoria.toLocaleDateString('pt-BR')}</span>
                    <span className="texto-suave">{minutos} min de leitura</span>
                </div>
                <MdOutlineBookmarkAdd
                onClick={() => setSalvo(!salvo)}
                className={`self-end cursor-pointer ${salvo ? 'text-acoes-primaria' : 'text-suave'}`}
                size={24} />

                    
            </div>
        </div>
    )
}