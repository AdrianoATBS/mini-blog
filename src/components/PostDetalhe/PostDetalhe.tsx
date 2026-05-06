'use client';
import PostDetalheCard from "./PostDetalheCard";
import { Post } from "@/types/Post";
import { User } from "@/types/User";
import { Comentario } from "@/types/Comentario";
export default function PostDetalhe({post,user,comentario} : {post: Post; user?: User; comentario?: Comentario[]; }) {


    return(
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-6">
        
            <PostDetalheCard post={post} user={user} comentario={comentario} />
        </div>
    )
}