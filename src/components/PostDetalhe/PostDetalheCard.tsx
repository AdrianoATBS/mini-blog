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
        <div className="">
            <div className="p-4 md:p-6 lg:p-10 flex flex-col justify-center gap-6">
                <h1 className="text-lg font-bold lg:titulo-principal">
                    {post?.title}
                </h1>
                <div className="flex bg-[#F2F4F6] p-4 rounded-lg items-center">
                    <FaUserCircle className="hidden lg:inline-block text-2xl text-gray-500 mr-2" />
                    <span className="text-[0.675rem] lg:titulo-card">
                        {user ? user.name : "Autor Desconecido"}
                    </span>
                    <div className="flex justify-center items-center gap-3 lg:gap-5 ml-auto  ">
                        <IoShareSocialOutline onClick={() => toggleStatus('compartilhado')} 
                        className={`cursor-pointer text-sm lg:text-xl ${status.compartilhado ? 'text-acoes-primaria' : 'text-gray-500'}`} />
                        <FaRegBookmark  onClick={() => toggleStatus('salvo')} 
                        className={`cursor-pointer text-sm lg:text-xl ${status.salvo ? 'text-acoes-primaria' : 'text-gray-500'}`} />
                    </div>
                </div>
                <Image src={imageUrl} alt="Imagem do post" width={1000} height={300} className="rounded-lg" />
                <p className="text-[0.775rem] lg:texto-base mt-4">{post?.body}</p>
                
                <div className="flex justify-start items-center gap-2 lg:gap-4 mt-4 border 
                border-borda/25 rounded-lg px-4 py-2">
                    <div className="flex justify-center items-center gap-2">
                        <FaHeart 
                        onClick={() => toggleStatus('curtido')}
                        className={`cursor-pointer text-sm lg:text-xl ${status.curtido ? 'text-acoes-primaria' : 'text-gray-500'}`}     />
                        <span className="text-sm lg:text-xl">{likes}</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <RiMessage3Line className=" text-gray-500 ml-4 text-xs lg:text-xl" />
                        <span className="text-sm lg:text-xl">{comentario?.length || 0}</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}