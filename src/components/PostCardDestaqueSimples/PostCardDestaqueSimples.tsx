import Link from "next/link";
import { Post } from "@/types/Post";
interface PostCardDestaqueSimplesProps {
    post: Post;
    autor: string;
    userId: number;
    postId: number;
}
export default function PostCardDestaqueSimples({ post, autor, userId, postId }: PostCardDestaqueSimplesProps) {
    return(
        <section className=" bg-card p-6 rounded-xl border border-borda 
            shadow-lg ">
                    <div className="cursor-pointer">

                        <Link className="font-bold titulo-card
                        text-xl hover:text-acoes-primaria transition duration-300 " 
                        href={`/posts/${postId}`}>{post.title}</Link>
                        
                        <p className="text-texto-secundario  line-clamp-3 mt-3
                        texto-base">{post.body}</p>
                    </div>
                   
                    <Link 
                        href={`/users/${userId}`} 
                        className="text-xs text-texto-secundario mt-4 block titulo-card
                         hover:text-acoes-primaria transition duration-400 cursor-pointer">{autor}
                    </Link>
                </section>
    )
}