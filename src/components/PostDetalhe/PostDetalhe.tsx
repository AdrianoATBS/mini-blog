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
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">
            <div>
                <Botão texto="Voltar" onClick={handleVoltar} />
            </div>

            <PostDetalheCard post={post} user={user} />
        </div>
    )
}