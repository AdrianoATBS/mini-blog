'use client';
import InformacaoUsers from "../InformacaoUsers/InformacaoUsers";
import { UserPerfil } from "../../types/UserPerfil";
import Botao from "../Botao/Botao";
import {useRouter} from "next/navigation";
import { Post } from "@/types/Post";
export default function PerfilCabecalho({ user, posts }: { user: UserPerfil; posts: Post[] }) {
   

    return(
        <div className="max-w-6xl  mx-auto px-6 py-10 flex flex-col gap-6">

            <InformacaoUsers user={user} posts={posts} />

        </div>
    )
}