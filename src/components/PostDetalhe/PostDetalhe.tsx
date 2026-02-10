'use client';
import PostDetalheCard from "./PostDetalheCard";


import Botão from "@/components/Botao/Botao";
import {useRouter} from "next/navigation";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
export default function PostDetalhe({post,user} : {post: Post; user?: User;}) {

    const router = useRouter();

    const handleVoltar = () => {
        router.push("/");
    }

    return(
        <>
            <div className="pl-5 pt-6">
                <Botão texto="Voltar" onClick={handleVoltar} />
            </div>
                 
            <div className="flex justify-center items-center">
                <PostDetalheCard post={post} user={user} />
            </div>
        </>
    )
}