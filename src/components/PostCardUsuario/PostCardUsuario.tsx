import { Post } from "@/types/Post";

interface PostCardUsuarioProps {
    posts: Post;
    autor: string;
}


export default function PostCardUsuario({posts, autor} : PostCardUsuarioProps) {
    return(
        <div>
            <div className=" border border-borda bg-cards p-4 rounded-lg shadow-md max-w-md mx-full">
                <h3 className="text-lg font-semibold font-[--fonte-texto-geral] text-texto-principal ">{posts.title}</h3>
                <p className="text-lg font-semibold font-[--fonte-texto-geral] text-texto-secundario pt-4">{posts.body}</p>
                <p className="text-xs text-acoes-secundaria mt-2 block font-[--fonte-texto-geral]">{autor}</p>
            </div>
    
        </div>
    )
}