"use client";
import Link from "next/link";
import { Post } from "@/types/Post";
import Image from "next/image";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useState } from "react";
interface PostCardDestaqueCompletoProps {
    post: Post;
    autor: string;
    userId: number;
    postId: number;
}
export default function PostCardDestaqueCompleto({ post, autor, userId, postId }: PostCardDestaqueCompletoProps) {
    const imageUrl = `https://picsum.photos/600/300?random=${post.id}`;
    const [salvo, setSalvo] = useState(false);

    return(
         <section className="flex flex-col bg-card rounded-xl border border-borda
        shadow-lg ">
            <Link href={`/posts/${postId}`} className="w-full h-full">
                <Image src={imageUrl} alt="Imagem do post" width={600} height={300} 
                className="w-full h-64 object-cover rounded-t-lg"/>
                <h2 className="titulo-card p-4 hover:text-acoes-primaria">{post.title}</h2>
                <p className="texto-base text-texto-secundario p-4">{post.body}</p>
                
            </Link>
            <div className=" flex items-center justify-between ">
                <Link href={`/users/${userId}`} className="text-xs text-texto-secundario  titulo-card
                        hover:text-acoes-primaria transition duration-400 cursor-pointer p-4 
                        gap-2">
                    {autor}
                </Link>
                <MdOutlineBookmarkAdd size={24} 
                onClick={() => setSalvo(!salvo)}
                className={`mr-4 cursor-pointer ${salvo ? 'text-acoes-primaria' : 'text-texto-secundario'}`}/>
            </div>
        </section>
    )
}