"use client";   
import {Post} from "@/types/Post";
import {User} from "@/types/User";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import Image from "next/image";
import { Comentario } from "@/types/Comentario";

import { useState } from "react";
type Status = {
    salvo: boolean;
    compartilhado: boolean;
    curtido: boolean;
}

export default function PostDetalheCard({post, user, comentario}: {post: Post, user?: User, comentario?: Comentario[]  }) {
    const imageUrl = `https://picsum.photos/600/300?random=${post.id}`;
    const likes = post.id * 7 % 100;

    const [status, setStatus] = useState({
        salvo: false,
        compartilhado: false,
        curtido: false
    });

    const toggleStatus = (campo: keyof Status   ) => {
        setStatus(prev => ({ ...prev, [campo]: !prev[campo] }));
    }
    return(
        <div className="m">
            <div className=" p-10 flex flex-col justify-center  gap-6">
                <h1 className="titulo-principal">
                    {post?.title}
                </h1>
                <div className="flex bg-[#F2F4F6] p-4 rounded-lg items-center">
                    <FaUserCircle className="inline-block text-2xl text-gray-500 mr-2" />
                    <span className="titulo-card">
                        {user ? user.name : "Autor Desconecido"}
                    </span>
                    <div className="flex justify-center items-center gap-4 ml-auto ">
                        <IoShareSocialOutline size={20} onClick={() => toggleStatus('compartilhado')} 
                        className={`cursor-pointer ${status.compartilhado ? 'text-acoes-primaria' : 'text-gray-500'}`} />
                        <FaRegBookmark size={20} onClick={() => toggleStatus('salvo')} 
                        className={`cursor-pointer ${status.salvo ? 'text-acoes-primaria' : 'text-gray-500'}`} />
                    </div>
                </div>
                <Image src={imageUrl} alt="Imagem do post" width={1000} height={300} className="rounded-lg" />
                <p className="texto-base mt-4">{post?.body}</p>
                
                <div className="flex justify-start items-center gap-4 mt-4 border 
                border-borda/25 rounded-lg px-4 py-2">
                    <div className="flex justify-center items-center gap-2">
                        <FaHeart size={20} 
                        onClick={() => toggleStatus('curtido')}
                        className={`cursor-pointer ${status.curtido ? 'text-acoes-primaria' : 'text-gray-500'}`}     />
                        <span>{likes}</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <RiMessage3Line size={20} className=" text-gray-500 ml-4" />
                        <span>{comentario?.length || 0}</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}