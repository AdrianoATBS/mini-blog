import { Post } from "@/types/Post";

interface PostCardUsuarioProps {
    posts: Post;
    autor: string;
}


export default function PostCardUsuario({posts, autor} : PostCardUsuarioProps) {
    return(
        <div>
            <div className="bg-card border border-borda rounded-xl p-6 shadow-sm 
            hover:shadow-md transition duration-200 flex flex-col gap-4">

                <h3 className="titulo-card">{posts.title}</h3>
                <p className="texto-base">{posts.body}</p>
                <span className="texto-suave">{autor}</span>
            </div>
    
        </div>
    )
}